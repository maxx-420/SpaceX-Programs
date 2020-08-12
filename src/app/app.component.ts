import { Component, OnInit } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  data = {
    title: "test-app",
  };

  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle(this.data.title);
  }
}
