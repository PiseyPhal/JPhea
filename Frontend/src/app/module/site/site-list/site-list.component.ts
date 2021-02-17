import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractGrid, AppLoaderService, AppColumn } from '@ecoinsoft/core-frontend/src/public-api';
import { MatTable } from '@angular/material/table';
import { SiteService } from 'app/services/site.service';
import { AppConfirmService } from '@ecoinsoft/core-frontend/src/lib/shared/services/app-confirm/app-confirm.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.scss']
})
export class SiteListComponent extends AbstractGrid implements OnInit {
  @ViewChild(MatTable, {static: false}) itemTable: MatTable<any>;

  form: FormGroup
  
  constructor
  (
    private siteService: SiteService,
    private confirmService: AppConfirmService,
    private loader: AppLoaderService,
    private fb: FormBuilder
  ) {super(siteService, loader) }

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
            link: '/site/view',
            tooltip: 'View'
          }
        ]
      }
    ];
  }

  // On start up form of list site
  onForm() {
    this.form = this.fb.group({
      adminCode: [null],
      officialSiteName: [null],
      hubSite: [null]
    })
  }

  // Search in list site by admin code, site, hub
  search() {
    if(!this.form.value)
      return;

    let params = {
      params: new HttpParams()
      .set("adminCode", this.form.value.adminCode)
      .set("officialSiteName", this.form.value.officialSiteName)
      .set("hubSite", this.form.value.hubSite)
    }

    this.loader.open()
    this.siteService.list(params).subscribe(res => {
        if(res) {
          this.dataStore = res['data']
          this.loader.close();
        } 
    }, err => this.loader.close())
    
  }

  clear() {

  }

  ngOnInit(): void {
    this.onForm()
  }

}
