import { TestBed } from "@angular/core/testing";

import { ApiService } from "./api.service";
import Mission from "../models/mission.model";
import { of } from "rxjs";

describe("ApiService", () => {
  let service: ApiService;
  let mockHttp;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj<ApiService>("mockHttp", ["getMissions"]);
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ApiService,
          useValue: mockHttp,
        },
      ],
    });
    service = TestBed.inject(ApiService);
  });

  describe("getMissions", () => {
    it("should return a Mission Object", () => {
      const data: Mission[] = [
        {
          name: "Mission 1",
          flight_number: 1,
          image: "http://abc.png",
          landing_success: true,
          launch_success: true,
          launch_year: "2016",
          missionIds: ["12345"],
        },
      ];

      mockHttp.getMissions.and.returnValue(of(data));

      service.getMissions({}).subscribe((data) => {
        expect(data).toBeInstanceOf(Array);
        expect(data).toContain(
          jasmine.objectContaining({
            name: "Mission 1",
            flight_number: 1,
            image: "http://abc.png",
            landing_success: true,
            launch_success: true,
            launch_year: "2016",
            missionIds: ["12345"],
          })
        );
      });

      expect(mockHttp.getMissions).toHaveBeenCalledWith({});
    });
  });
});
