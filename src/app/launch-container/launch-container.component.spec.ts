import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LaunchContainerComponent } from "./launch-container.component";
import { ApiService } from "../services/api.service";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { of } from "rxjs";
import { ActivatedRoute } from "@angular/router";

describe("LaunchContainerComponent", () => {
  let component: LaunchContainerComponent;
  let fixture: ComponentFixture<LaunchContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LaunchContainerComponent],
      providers: [
        {
          provide: ApiService,
          useValue: {
            getMissions: (queryParams) =>
              of([
                {
                  name: "Mission 1",
                  flight_number: 1,
                  image: "http://abc.png",
                  landing_success: true,
                  launch_success: true,
                  launch_year: "2016",
                  missionIds: ["12345"],
                },
              ]),
          },
        },
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({ limit: 100 }),
          },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should call api on Init", () => {
    // Arrange
    spyOn(component, "callApi");

    // Act
    component.ngOnInit();

    // Assert
    expect(component.callApi).toHaveBeenCalled();
  });

  it("should assert that $missions have length 1", () => {
    // Arrange
    spyOn(component, "callApi");

    // Act
    component.ngOnInit();

    // Assert
    component.$missions.subscribe((data) => {
      expect(data.length).toBe(1);
    });
  });
});
