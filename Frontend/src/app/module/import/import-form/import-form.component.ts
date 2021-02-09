import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-import-form',
  templateUrl: './import-form.component.html',
  styleUrls: ['./import-form.component.scss']
})
export class ImportFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

   /**
   * Choose file, then push to document list
   * @param event 
   */
  chooseDocument(event) {
    console.log(event[0]);
    return;
    // Substring file's extention '.CSV'
    let fileExtention = event.FileList.file[0].name
    fileExtention = fileExtention.substring(fileExtention.lastIndexOf('.'))
    // Compare extention file
    if (fileExtention.toUpperCase() !== '.XLSX') {
      // Return message warning of wrong file extention.
      console.log('Uploading must be file is ".XLSX" format, Please try again.');
      
    }
  }

}
