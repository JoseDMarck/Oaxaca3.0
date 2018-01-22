import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, Injectable, Pipe, PipeTransform  } from '@angular/core';



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
import { OaxacaComponent  } from './posts/oaxaca/oaxaca.component'

//BANNERS POST
import {  BannerPostTopComponent } from './banners/banner-post-top/banner-post-top.component'
import {  BannerPostBottomComponent } from './banners/banner-post-bottom/banner-post-bottom.component'


//BANNERS HOME
import {  BannerHeaderHomeComponent } from './banners/banner-header-home/banner-header-home.component'
import {  BannerHome1Component  } from './banners/banner-home-1/banner-home-1.component'
import {  BannerHome2Component  } from './banners/banner-home-2/banner-home-2.component'
import {  BannerHome3Component  } from './banners/banner-home-3/banner-home-3.component'
import {  BannerHome4Component  } from './banners/banner-home-4/banner-home-4.component'
import {  BannerHome5Component  } from './banners/banner-home-5/banner-home-5.component'
import {  BannerHome6Component  } from './banners/banner-home-6/banner-home-6.component'
import {  BannerHome7Component  } from './banners/banner-home-7/banner-home-7.component'
import {  BannerHome8Component  } from './banners/banner-home-8/banner-home-8.component'
import {  BannerHome9Component  } from './banners/banner-home-9/banner-home-9.component'
import {  BannerHome10Component  } from './banners/banner-home-10/banner-home-10.component'





import {ShareModule} from 'ng2share/share.module'
import { MenuGeneralComponent } from './posts/menu-general/menu-general.component';
import { BusquedaComponent } from './posts/busqueda/busqueda.component';
import { RouterModule } from '@angular/router';
import { CeiboShare } from 'ng2-social-share';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FacebookModule } from 'ngx-facebook';
import { Ng2SearchPipeModule } from 'ng2-search-filter-master';
import { AdDFPComponent } from 'ng2-ad-dfp';

 

 

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

    //Banners 
    BannerPostTopComponent,
    BannerPostBottomComponent,

    //Banners Home
    BannerHeaderHomeComponent,
    BannerHome1Component,
    BannerHome2Component,
    BannerHome3Component,
    BannerHome4Component,
    BannerHome5Component,
    BannerHome6Component,
    BannerHome7Component,
    BannerHome8Component,
    BannerHome9Component,       
    BannerHome10Component,       

    BusquedaComponent,
    AdDFPComponent,
    CeiboShare
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Wpng2RoutingModule,
    ShareModule,
    InfiniteScrollModule,
    Ng2SearchPipeModule,
    FacebookModule.forRoot(),
    
     
    BrowserAnimationsModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})


export class AppModule { }
