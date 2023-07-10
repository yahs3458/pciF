import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Capacitor, Plugins } from '@capacitor/core';
import { FormGroup, FormControl } from '@angular/forms';
import {CameraPhoto, CameraResultType , CameraSource }  from '@capacitor/camera';
import { FilesystemDirectory}  from '@capacitor/filesystem';
const { Camera , Filesystem } = Plugins;

export interface PeriodicElement {
  course: string;
  checkbox: boolean;
  selectOption: string;
  image: any | undefined;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { course: 'B.Pharma', checkbox: false, selectOption: '',image: undefined},
  { course: 'M.Phil', checkbox: false, selectOption: '',image: undefined},
  { course: 'M.Pharma', checkbox: false, selectOption: '',image: undefined},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {  
 

    imageSrc: string | undefined;
    form: FormGroup;
    constructor(private route : ActivatedRoute){
      this.form = new FormGroup({
        image: new FormControl('')
      });
    
    }
    
      // cardId: number;
    
    // constructor(private route: ActivatedRoute) {}
    
    // ngOnInit() {
      // this.cardId = +this.route.snapshot.paramMap.get('id');
      // Fetch data or perform operations based on the cardId
    // }
    
    
    
    displayedColumns: string[] = ['course', 'yesNo', 'ifYes', 'inspectorRemark'];
    dataSource = ELEMENT_DATA;
    separateDataSource: PeriodicElement[] = [];
    
    photoData: string | undefined;
    
    async capturePhoto() {
      const image: CameraPhoto = await Camera['getPhoto']({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 90
      });
    
      if (image && image.webPath) {
        if (Capacitor.getPlatform() === 'web') {
          // On web, use the webPath directly
          this.photoData = image.webPath;
          console.log('File path:', this.photoData);
        } else {
          // On native platforms, convert the webPath to a file path
          const filePath = await this.getFilePathFromUri(image.webPath);
          if (filePath) {
            this.photoData = filePath;
            console.log('File path:', this.photoData);
          }
        }
      }
    }
    
    async getFilePathFromUri(uri: string): Promise<string | undefined> {
      const response = await fetch(uri);
      const blob = await response.blob();
      const fileName = new Date().getTime() + '.jpeg';
    
      const result = await Filesystem['writeFile']({
        path: fileName,
        data: blob,
        directory: FilesystemDirectory.Data
      });
    
      return result.uri;
    }
    
    uploadPhoto() {
      // Implement the logic to upload the photo here
      // You can use HttpClient to make a request to your server API
    }
    updateCheckboxValue(event: Event, index: number) {
      const target = event.target as HTMLInputElement;
      this.dataSource[index].checkbox = target.checked;
      // this.dataSource[index].checkbox = checked;
    }
    
    submitTableData(){
      localStorage.setItem('tableData', JSON.stringify(this.dataSource));
    }
    getTableData(){
      const storedData= 
      localStorage.getItem('tableData');
      if(storedData){
       const retrievedData = JSON.parse(storedData)
       this.separateDataSource=retrievedData;
       console.log(storedData);
       
      }
    }
    
}
    
    
    
    
    
    
    function updateCheckboxValue(event: Event | undefined, Event: { new(type: string, eventInitDict?: EventInit | undefined): Event; prototype: Event; readonly NONE: 0; readonly CAPTURING_PHASE: 1; readonly AT_TARGET: 2; readonly BUBBLING_PHASE: 3; }, index: any, number: any) {
      throw new Error('Function not implemented.');
    }
    
    function submitTableData() {
      throw new Error('Function not implemented.');
    }
    
    function getTableData() {
      throw new Error('Function not implemented.');
    }

