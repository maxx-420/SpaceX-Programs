import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import Mission from "../models/mission.model";

const BASE_URL = "https://api.spaceXdata.com/v3/launches";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getMissions(queryParams: any): Observable<Mission[]> {
    return this.http.get(BASE_URL, { params: queryParams }).pipe(
      map((dataArray: any[]) => {
        return dataArray.map(
          (data): Mission => {
            return {
              name: data.mission_name,
              image: data.links.mission_patch_small,
              landing_success: data.rocket?.first_stage?.cores[0]?.land_success,
              launch_success: data.launch_success,
              launch_year: data.launch_year,
              missionIds: data.mission_id,
              flight_number: data.flight_number,
            };
          }
        );
      })
    );
  }
}
