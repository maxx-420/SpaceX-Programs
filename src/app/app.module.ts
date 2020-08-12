import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LaunchContainerComponent } from "./launch-container/launch-container.component";
import { CardComponent } from "./card/card.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, LaunchContainerComponent, CardComponent],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
