import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostSingleComponent } from './posts/post-single/post-single.component';
import { InicioComponent } from './posts/inicio/inicio.component';
import { NoticiasComponent  } from './posts/noticias/noticias.component';
import { GlamourComponent  } from './posts/glamour/glamour.component';
import { InternetComponent  } from './posts/internet/internet.component';
import { DeportesComponent  } from './posts/deportes/deportes.component';
import { EspectaculosComponent  } from './posts/espectaculos/espectaculos.component';
import { VideosComponent  } from './posts/videos/videos.component';
import { OaxacaComponent  } from './posts/oaxaca/oaxaca.component';
import { BusquedaComponent } from './posts/busqueda/busqueda.component';
import { MenuGeneralComponent } from './posts/menu-general/menu-general.component';






const routes: Routes = [
  {
    path: 'publicaciones-noticias',
    component: NoticiasComponent ,
    pathMatch: 'full'
  },
  {
    path: 'publicaciones-glamour',
    component: GlamourComponent ,
    pathMatch: 'full'
  },
  {
    path: 'publicaciones-internet',
    component: InternetComponent ,
    pathMatch: 'full'
  },
  {
    path: 'publicaciones-deportes',
    component: DeportesComponent ,
    pathMatch: 'full'
  },
  {
    path: 'publicaciones-espectaculos',
    component: EspectaculosComponent ,
    pathMatch: 'full'
  },
  {
    path: 'publicaciones-videos',
    component: VideosComponent,
    pathMatch: 'full'
  },
  {
    path: 'publicaciones-oaxaca',
    component: OaxacaComponent,
    pathMatch: 'full'
  },
  {
    path: 'busqueda',
    component: BusquedaComponent,
    pathMatch: 'full'
  },

   {
    path: 'menu',
    component: MenuGeneralComponent ,
    pathMatch: 'full'
  },
  {
    path: ':slug',
    component: PostSingleComponent
  },

  
  {
    path: '',
    component: InicioComponent,
    data: {
      meta: {
        'title': 'Home page',
        'description': 'This is the description shown in Google search results',
        'og:image': 'http://www.culturatrespuntocero.com/images/generales/logo.png'
      }
    }
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Wpng2RoutingModule { }