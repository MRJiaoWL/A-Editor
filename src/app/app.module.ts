import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { JiaosComponent } from './jiaos/jiaos.component';
import { JiaoListComponent } from './jiao-list/jiao-list.component';
import { JiaoDetailComponent } from './jiao-detail/jiao-detail.component';
import { TestComponent } from './test/test.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule, httpClientInMemBackendServiceFactory } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { JiaoSearchComponent } from './jiao-search/jiao-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    JiaosComponent,
    JiaoListComponent,
    JiaoDetailComponent,
    TestComponent,
    MessagesComponent,
    DashboardComponent,
    JiaoSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
            // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
