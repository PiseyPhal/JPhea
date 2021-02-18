import { Component, OnInit, ViewChild } from '@angular/core';
import { SiteService } from 'app/services/site.service';
import { AppLoaderService } from '@ecoinsoft/core-frontend/src/public-api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-import-view',
  templateUrl: './import-view.component.html',
  styleUrls: ['./import-view.component.scss']
})
export class ImportViewComponent implements OnInit {
  importId: number;
  siteId: number;

  constructor(
    private siteService: SiteService,
    private loader: AppLoaderService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() { 
    this.siteId = this.route.snapshot.params['id'];

    if (this.siteId) {
      
      this.showDetails()
    }
    
    
  }

  showDetails() {
    this.loader.open()
    this.siteService.get(this.siteId).subscribe(res => {
      if (res['statusCode'] === '1') {
        this.importId = res['data']?.importHistoryId

        console.log(this.importId);
        
        this.loader.close()
      }
    }, err => this.loader.close())
  }



}
