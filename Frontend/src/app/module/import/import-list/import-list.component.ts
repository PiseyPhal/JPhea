import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { AbstractGrid, AppColumn, AppLoaderService } from '@ecoinsoft/core-frontend/src/public-api';
import { AppConfirmService } from '@ecoinsoft/core-frontend/src/lib/shared/services/app-confirm/app-confirm.service';
import { ImportService } from 'app/services/import.service';
import {ActivatedRoute, Router } from '@angular/router';
import { SiteService } from 'app/services/site.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-import-list',
  templateUrl: './import-list.component.html',
  styleUrls: ['./import-list.component.scss']
})
export class ImportListComponent extends AbstractGrid implements OnInit {

  @ViewChild(MatTable, {static: false}) itemTable: MatTable<any>;
  dataHistroy: any;
  @ViewChild('file') fileInput: ElementRef;

  constructor
  (
    private importService: ImportService,
    private siteService: SiteService,
    private confirmService: AppConfirmService,
    private router: Router,
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
    const importId: number = +this._route.snapshot.queryParamMap.get('importId');

    if(importId) {
      this.getFileDetail(importId);
      this.getSiteList(importId);
    }
  }

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
        let importId = res['data']?.id;

        // redirect import list
        this.router.navigate(['/import/list'], {queryParams: {"importId": importId}});

        this.getFileDetail(importId)
        this.getSiteList(importId)
      }
    }, err => this.loader.close())
  }

  // Get data import history by id of file import success.
  getFileDetail(id: number) {
    this.loader.open()
    this.importService.get(id).subscribe(res => {
      if (res) {
        this.dataHistroy = res['data']
        this.loader.close()
      }
    }, err => this.loader.close())
    
  }

  // Get site list base on import history id
  getSiteList(importId: number) {
    const params = {
      params : new HttpParams().set("importHistoryId", `${importId}`)
    }
    this.siteService.list(params).subscribe(res => {
      if (res['statusCode'] === '1') {
        this.dataStore = res
      }
    })
  }

   // Reset file to empty value.
   private resetFile() {
    this.fileInput.nativeElement.value = ''
  }

}
