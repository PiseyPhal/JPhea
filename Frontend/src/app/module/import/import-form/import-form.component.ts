import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ImportService } from 'app/services/import.service';
import { AppLoaderService } from '@ecoinsoft/core-frontend/src/public-api';
import { query } from '@angular/animations';

@Component({
  selector: 'app-import-form',
  templateUrl: './import-form.component.html',
  styleUrls: ['./import-form.component.scss']
})
export class ImportFormComponent implements OnInit {

  constructor(
    private router: Router,
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
        this.router.navigate(['/import/list'], {queryParams: {"fileId": res['data']?.id}});
      }
    }, err => this.loader.close())
  }

  // Download file as excel ".xlsx"
  downloadFile(file: any) {
    window.open(file)
  }

  // Reset file to empty value.
  private resetFile() {
    this.fileInput.nativeElement.value = ''
  }

}
