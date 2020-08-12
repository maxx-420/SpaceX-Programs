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
    description: "A simple app to browse Space-X Programs till 2019",
  };

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle(this.data.title);
    this.meta.addTags([
      { name: "title", content: this.data.title },
      { name: "description", content: this.data.description },
    ]);
  }
}
