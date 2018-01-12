import { Component, OnInit, ElementRef  } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';
import { trigger, state, style, animate,transition } from '@angular/animations';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, Subscription } from 'rxjs/Rx';
@Component({
  selector: 'app-espectaculos',
  templateUrl: './espectaculos.component.html',
  styleUrls: ['./espectaculos.component.css'],
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
     
    ])
  ],
  providers: [PostsService]
})

export class EspectaculosComponent implements OnInit {

  show = false;  
  show2 = false;  
  posts_Home: Post[];
  posts: Post[];

    private post_exists: number;
    private post_exists_bol: boolean;
  

  categorias: Post[];
  post_count:number;
  categoriasCount:any;
  arregloCountCat:any;
  imageX:any;
  loadMoreVisible : boolean;
  selectedClass: number;


  constructor(private postsService: PostsService, private router: Router,  private sanitizer: DomSanitizer, elm: ElementRef) { 
    this.arregloCountCat = [];
    this.loadMoreVisible = false;
    this.post_count = 20;
   
  }


  getPosts(){
    this.postsService
      .getPosts_espectaculos_full()
      .subscribe(res => {
        this.posts = res;
        console.log(this.posts)

        this.post_exists = this.posts.length
        console.log("post_exists:", this.post_exists )

        if(this.post_exists > 0 ){
          this.post_exists_bol = false;
        console.log("post_exists_bol:", this.post_exists_bol)


        } else{
          this.post_exists_bol = true;
          console.log("post_exists_bol:", this.post_exists_bol)
        }

         //this.imageX = this.sanitizer.bypassSecurityTrustStyle(`url(${element.image})`);
      });
  }

  



    //ANIMACION TOGGLE
    get stateName() {
        return this.show ? 'show' : 'hide'
     }

    toggle() {
        this.show = !this.show;
    }

     //ANIMACIÓN PARA EL MENU
    get stateName2() {
        return this.show2 ? 'inactive' : 'active'
    }

    toggle2() {
        this.show2 = !this.show2;
         console.log("this.show", this.show2)
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

    this.getPosts();

  }


 selectPost(slug) {
	 this.router.navigate([slug]);
   console.log("Slug normal", slug)
}


GoToInicio() {
 this.router.navigate([""]);
    console.log("Go to Inicio")
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
      .LoadMorePostsServicebyCategory(2200, numero)
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