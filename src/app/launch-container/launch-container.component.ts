import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api.service";
import { Observable, of, Subject } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { PLATFORM_ID, Inject } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

@Component({
  selector: "app-launch-container",
  templateUrl: "./launch-container.component.html",
  styleUrls: ["./launch-container.component.scss"],
})
export class LaunchContainerComponent implements OnInit {
  launch_dates = [
    2004,
    2005,
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2019,
  ];

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  isServer = !isPlatformBrowser(this.platformId);

  $missions: Observable<any>;

  ngOnInit(): void {
    if (!this.isServer) {
      this.route.queryParams.subscribe((queryParams) => {
        this.callApi(queryParams);
      });
    }
  }

  callApi(queryParams) {
    if (Object.keys(queryParams).length == 0) {
      queryParams = { limit: 100 };
    }
    this.$missions = this.api.getMissions(queryParams);
  }
}
