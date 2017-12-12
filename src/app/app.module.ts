import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { Wpng2RoutingModule } from './app-routing.module';
import { PostSingleComponent } from './posts/post-single/post-single.component';
import { PostSingleNormalComponent } from './posts/post-single-normal/post-single-normal.component';
import { ExposicionesComponent  } from './posts/exposiciones/exposiciones.component';
import { ConferenciasComponent  } from './posts/conferencias/conferencias.component';
import { InicioComponent } from './posts/inicio/inicio.component';
import { EntranaComponent } from './posts/entrana/entrana.component';
import { AsiPasoComponent } from './posts/asi-paso/asi-paso.component';
import { DondeDiceComponent } from './posts/donde-dice/donde-dice.component';
import { QueMePerdiComponent } from './posts/que-me-perdi/que-me-perdi.component';
import { QueProponenComponent } from './posts/que-proponen/que-proponen.component';
import { QueSeVieneComponent  } from './posts/que-se-viene/que-se-viene.component';
import { QuienJalaComponent  } from './posts/quien-jala/quien-jala.component';
import { ContadorComponent } from './posts/contador/contador.component';
import { ContadorMovilComponent } from './posts/contador-movil/contador-movil.component';


import {ShareModule} from 'ng2share/share.module'

import { MenuGeneralComponent } from './posts/menu-general/menu-general.component';
import { RouterModule } from '@angular/router';
import { CeiboShare } from 'ng2-social-share';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';




  



@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostSingleComponent,
    PostSingleNormalComponent,
    MenuGeneralComponent,
    InicioComponent,
    ExposicionesComponent,
    ConferenciasComponent,
    EntranaComponent,
    AsiPasoComponent,
    DondeDiceComponent,
    QueMePerdiComponent,
    QueProponenComponent,
    QueSeVieneComponent,
    QuienJalaComponent, 
    ContadorComponent,
    ContadorMovilComponent,
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
