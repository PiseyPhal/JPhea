import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { AbstractGrid, AppColumn, AppLoaderService } from '@ecoinsoft/core-frontend/src/public-api';
import { AppConfirmService } from '@ecoinsoft/core-frontend/src/lib/shared/services/app-confirm/app-confirm.service';
import { ImportService } from 'app/services/import.service';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-import-list',
  templateUrl: './import-list.component.html',
  styleUrls: ['./import-list.component.scss']
})
export class ImportListComponent extends AbstractGrid implements OnInit {

  @ViewChild(MatTable, {static: false}) itemTable: MatTable<any>;
  
  constructor
  (
    private importService: ImportService,
    private confirmService: AppConfirmService,
    private loader: AppLoaderService,
    private _route: ActivatedRoute
  ) {super(importService, loader, { isLoad: false }); }

  getcolumn(): AppColumn[] {
    return [
      {
        displayName: 'Site Owner', dataIndex: 'siteOwner'
      },
      {
        displayName: 'Admin Code', dataIndex: 'adminCode'
      },
      {
        displayName: 'SRAN Name', dataIndex: 'sRANName'
      },
      {
        displayName: 'BTS Name No Tect', dataIndex: 'bTSNameNoTech'
      },
      {
        displayName: 'Product Type', dataIndex: 'productType'
      },
      {
        displayName: 'Site Category', dataIndex: 'siteCategory'
      },
      {
        displayName: 'Latitude', dataIndex: 'latitude'
      },
      {
        displayName: 'Longitude', dataIndex: 'longitude'
      },
      {
        displayName: 'Action', dataIndex: 'id', actionColumn: [
          {
            icon: 'visibility',
            link: '/import/view',
            tooltip: 'View'
          }
        ]
      }
    ];
  }


  ngOnInit() {
    const fileId: number = +this._route.snapshot.queryParamMap.get('fileId');

    if(fileId) {
      this.getFileDetail(fileId);
    }
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

  getFileDetail(id: number) {
    
  }

}
