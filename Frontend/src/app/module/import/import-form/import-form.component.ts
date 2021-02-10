import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-import-form',
  templateUrl: './import-form.component.html',
  styleUrls: ['./import-form.component.scss']
})
export class ImportFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

   /**
   * Choose file, then push to document list
   * @param event 
   */
  chooseDocument(event) {
    const file = event.target ? event.target.files : event;
    
    // Redirect to import list success
    this.router.navigateByUrl("/import/list")

  }

}
