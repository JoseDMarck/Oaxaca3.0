import { Component, OnInit, ElementRef  } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';
import { trigger, state, style, animate,transition } from '@angular/animations';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, Subscription } from 'rxjs/Rx';


@Component({
  selector: 'app-menu-general',
  templateUrl: './menu-general.component.html',
  styleUrls: ['./menu-general.component.css'],
  animations: [
    trigger('fadeInAnimation', [
      state('show', style({
        opacity: 1
      })),
      state('hide',   style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('800ms ease-in'))
    ]),

    trigger('heroState2', [
    state('inactive', style({transform: 'translateX(0)'})),
    state('active',   style({transform: 'translateX(-100%) '})),
    
    transition('inactive => active', animate('400ms ease-in')),
    transition('active => inactive', animate('200ms ease-out')), 
    ]),

    trigger('heroState3', [
    state('inactive', style({transform: 'translateY(0)'})),
    state('active',   style({transform: 'translateY(-200%)', opacity: '0' })),
    
    transition('inactive => active', animate('200ms ease-in')),
    transition('active => inactive', animate('200ms ease-out'))
    ]),


    trigger('heroState4', [
    
    state('inactive', style({transform: 'translateY(0)'})),
    state('active',   style({transform: 'translateY(-200%)', opacity: '0' })),

    transition('inactive => active', animate('200ms ease-in')),
    transition('active => inactive', animate('200ms ease-out'))
    ]),





  ],
  providers: [PostsService]
})


export class MenuGeneralComponent implements OnInit {

  show = false;  
  show2 = false;  
  show3 = false; 
  show4 = false;

  posts_Home: Post[];
  posts: Post[];
  posts_principales: Post[];
  posts_glamour: Post[];
  posts_glamour_next: Post[];
  posts_internet: Post[];
  posts_internet_next: Post[];
  posts_deportes: Post[];
  posts_espectaculos: Post[];
  posts_espectaculos_next: Post[];
  posts_en_oaxaca: Post[];
  posts_videos: Post[];
  posts_search_full: Post[];



  categorias: Post[];
  post_count:number;
  categoriasCount:any;
  arregloCountCat:any;
  imageX:any;
  loadMoreVisible : boolean;
  SearchReady : boolean;
  selectedClass: number;
  busquedaMovil : boolean;

 


 

  constructor(private postsService: PostsService, private router: Router,  private sanitizer: DomSanitizer, elm: ElementRef) { 
    this.arregloCountCat = [];
    this.loadMoreVisible = false;
    this.post_count = 20;
    this.SearchReady = false;
    this.busquedaMovil = false;
  }



  getPosts_Home(){
    this.postsService
      .getPostsHome()
      .subscribe(res => {
        this.posts = res;

        console.log(this.posts)
         //this.imageX = this.sanitizer.bypassSecurityTrustStyle(`url(${element.image})`);
      });
  }

  //Search Full
  getPosts_SearchFull(){
    this.postsService
      .getPostsSearchFull()
      .subscribe(res => {
        this.posts_search_full = res;
        this.SearchReady = true;
        this.busquedaMovil = true;
      });
  }



  // Principales
  getPosts_Principales(){
    this.postsService
      .getPosts_principales()
      .subscribe(res => {
        this.posts_principales = res;
      });
  }

  // Glamour
  getPosts_Glamour(){
    this.postsService
      .getPosts_glamour()
      .subscribe(res => {
        this.posts_glamour = res;
      });
  }

  getPosts_Glamour_next(){
    this.postsService
      .getPosts_glamour_next()
      .subscribe(res => {
        this.posts_glamour_next = res;
      });
  }


  // Internet
  getPosts_Internet(){
    this.postsService
      .getPosts_internet()
      .subscribe(res => {
        this.posts_internet = res;
      });
  }

  getPosts_Internet_next(){
    this.postsService
      .getPosts_internet_next()
      .subscribe(res => {
        this.posts_internet_next = res;
      });
  }


  // Deportes
  getPosts_Deportes(){
    this.postsService
      .getPosts_deportes()
      .subscribe(res => {
        this.posts_deportes = res;
      });
  }


  // Internet
  getPosts_Espectaculos(){
    this.postsService
      .getPosts_espectaculos()
      .subscribe(res => {
        this.posts_espectaculos = res;
      });
  }

  getPosts_Espectaculos_next(){
    this.postsService
      .getPosts_espectaculos_next()
      .subscribe(res => {
        this.posts_espectaculos_next = res;
      });
  }


  // En Oaxaca
  getPosts_en_oaxaca(){
    this.postsService
      .getPosts_en_oaxaca()
      .subscribe(res => {
        this.posts_en_oaxaca = res;
      });
  }


   // Videos
  getPosts_videos(){
    this.postsService
      .getPosts_videos()
      .subscribe(res => {
        this.posts_videos = res;
      });
  }


  
    //ANIMACION TOGGLE
    get stateName() {
        return this.show ? 'show' : 'hide'
    }




    toggle() {
        this.show = !this.show;
    }

    get stateName2() {
        return this.show2 ? 'inactive' : 'active'
    }

    toggle2() {
        this.show2 = !this.show2;
         console.log("this.show", this.show2)
    }


    
    get stateName3() {
        return this.show3 ? 'inactive' : 'active'
    }

    // para la busqueda
    toggle3() {
       this.show4 = true;
       //this.closeSearch();
    }

    get stateName4() {
        return this.show4 ? 'inactive' : 'active'
    }



    openSearch() {
        this.show3 = true;
         console.log("this.show", this.show3)
    }

    closeSearch() {
         this.show3 = false;
         this.show4 = false;
         console.log("this.show", this.show3);
    }


  ngAfterViewInit() {
   
   console.log("estoy  en ngAfterViewInit")
   setTimeout(() => { 
     this.toggle()
   }, 300); // Or however long you need the delay to be
  

  }

   ngOnDestroy() {
     console.log("Destroy*******");
  }


  ngOnInit() {

    this.getPosts_Principales();
    this.getPosts_Glamour();
    this.getPosts_Glamour_next();
    this.getPosts_Internet();
    this.getPosts_Internet_next();
    this.getPosts_Deportes();
    this.getPosts_Espectaculos();
    this.getPosts_Espectaculos_next();
    this.getPosts_en_oaxaca();
    this.getPosts_videos();
    this.getPosts_SearchFull();
    console.log("SearchReady", this.SearchReady);

  }


 selectPost(slug) {
   this.router.navigate([slug]);
   console.log("Slug normal", slug)
}




GoToInicio() {
 this.router.navigate([""]);
    console.log("Go to Inicio")
}

GoToQuienesSomos() {
 this.router.navigate(["quienes-somos"]);
}

GoToBusqueda() {
 this.router.navigate(["busqueda"]);
}


 
onScroll () {

    if (this.post_count <=  90) {
      this.post_count = this.post_count + 5;
      console.log('scrolled!!', this.post_count )
      this.LoadMorePosts(this.post_count)
    } 
    else {
      console.log("Ya llegamos al limite");
    }
  }


    //LOAD MORE POST
 LoadMorePosts( numero){
   
   console.log("numero load more "+ numero)
    this.postsService
      .LoadMorePostsServiceHome(numero)
      .subscribe(res => {
        this.posts = res;

      });
 }


getBackground(image) {
    return this.sanitizer.bypassSecurityTrustStyle(`linear-gradient(rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url(${image})`);
}



SeleccionMenu(slug:string ) {
     this.router.navigate(["publicaciones-"+slug]);
}



}