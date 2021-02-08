import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-import-list',
  templateUrl: './import-list.component.html',
  styleUrls: ['./import-list.component.scss']
})
export class ImportListComponent implements OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  
  displayedColumns: string[] = ['owner', 'code', 'sranname', 'btsname', 'ptype', 'sitecategory', 'lat', 'long', 'action'];
  dataSource: any;
  
  constructor(private route: Router) { }

  ngOnInit() { 
    this.dataSource = [
      {
        id: 1,
        owner: "PUSSYY", 
        code: 'Hydrogen', 
        sranname: 1.0079, 
        btsname: 'H',
        ptype: 'Hydrogen', 
        sitecategory: 'H',
        lat: 1, 
        long: 2
      }
    ]
  }

  onView(id: number) {
    // route to page view
    this.route.navigateByUrl(`import/view/${id}`)
  }

  /**
   * Choose file, then push to document list
   * @param event 
   */
  chooseDocument(event) {    
    // Substring file's extention '.CSV'
    let fileExtention = event.target.files[0].name
    fileExtention = fileExtention.substring(fileExtention.lastIndexOf('.'))
    // Compare extention file
    if (fileExtention.toUpperCase() !== '.XLSX') {
      // Return message warning of wrong file extention.
      console.log('Uploading must be file is ".XLSX" format, Please try again.');
      
    }
  }

}
