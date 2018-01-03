import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { Wpng2RoutingModule } from './app-routing.module';
import { PostSingleComponent } from './posts/post-single/post-single.component';
import { InicioComponent } from './posts/inicio/inicio.component';
import { NoticiasComponent  } from './posts/noticias/noticias.component';
import { GlamourComponent  } from './posts/glamour/glamour.component';
import { InternetComponent  } from './posts/internet/internet.component';
import { DeportesComponent  } from './posts/deportes/deportes.component';
import { EspectaculosComponent  } from './posts/espectaculos/espectaculos.component';
import { VideosComponent  } from './posts/videos/videos.component';
import { OaxacaComponent  } from './posts/oaxaca/oaxaca.component';


import {ShareModule} from 'ng2share/share.module'

import { MenuGeneralComponent } from './posts/menu-general/menu-general.component';
import { RouterModule } from '@angular/router';
import { CeiboShare } from 'ng2-social-share';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';



@NgModule({
  declarations: [
    AppComponent,
    PostSingleComponent,
    MenuGeneralComponent,
    InicioComponent,
    NoticiasComponent,
    GlamourComponent,  
    InternetComponent, 
    DeportesComponent,
    EspectaculosComponent, 
    VideosComponent,
    OaxacaComponent,
    CeiboShare
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Wpng2RoutingModule,
    ShareModule,
    InfiniteScrollModule,
    BrowserAnimationsModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})


export class AppModule { }
