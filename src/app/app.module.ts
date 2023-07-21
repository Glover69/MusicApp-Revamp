import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleAlbumCardComponent } from './single-album-card/single-album-card.component';
import { SingleRecentCardComponent } from './single-recent-card/single-recent-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleAlbumCardComponent,
    SingleRecentCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
