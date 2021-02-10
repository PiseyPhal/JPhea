import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractGrid, AppLoaderService, AppColumn } from '@ecoinsoft/core-frontend/src/public-api';
import { MatTable } from '@angular/material/table';
import { SiteService } from 'app/services/site.service';
import { AppConfirmService } from '@ecoinsoft/core-frontend/src/lib/shared/services/app-confirm/app-confirm.service';

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.scss']
})
export class SiteListComponent extends AbstractGrid implements OnInit {
  @ViewChild(MatTable, {static: false}) itemTable: MatTable<any>;
  
  constructor
  (
    private siteService: SiteService,
    private confirmService: AppConfirmService,
    private loader: AppLoaderService
  ) {super(siteService, loader, { isLoad: false }); }

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

  ngOnInit(): void {
  }

}
