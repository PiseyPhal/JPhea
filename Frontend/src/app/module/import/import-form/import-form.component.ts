import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ImportService } from 'app/services/import.service';
import { AppLoaderService } from '@ecoinsoft/core-frontend/src/public-api';
import { saveAs } from 'file-saver';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-import-form',
  templateUrl: './import-form.component.html',
  styleUrls: ['./import-form.component.scss']
})
export class ImportFormComponent implements OnInit {

  constructor(
    private router: Router,
    private sanitizer: DomSanitizer,
    private importService: ImportService,
    private loader: AppLoaderService) 
    { }
    
  @ViewChild('file') fileInput: ElementRef;
  
  ngOnInit() {}

   /**
   * Choose file, then push to document list
   * @param event 
   */
  chooseDocument(event) {
    const file = event.target ? event.target.files : event;
    this.loader.open()

    this.importService.importFile(file).subscribe(res => {
      if (res['statusCode'] === '1') {
        this.loader.close()
        this.resetFile()
      
        // redirect import list
        this.router.navigate(['/import/list'], {queryParams: {"importId": res['data']?.id}});
      }
    }, err => this.loader.close())
  }

  fileUrl: any;

  // Download file as excel ".xlsx"
  downloadFile() {
    this.importService.downloadFileTemplet().subscribe((res) => {
      if (res) {
        saveAs(res, 'archive.zip');
      }

    }, err => console.error("Unexpected error"));
  }

  // Reset file to empty value.
  private resetFile() {
    this.fileInput.nativeElement.value = ''
  }

}
