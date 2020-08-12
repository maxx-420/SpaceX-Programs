import {
  Component,
  OnInit,
  Input,
  MissingTranslationStrategy,
} from "@angular/core";

import Mission from "../models/mission.model";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  @Input() mission_data: Mission;

  constructor() {}

  ngOnInit(): void {}
}
