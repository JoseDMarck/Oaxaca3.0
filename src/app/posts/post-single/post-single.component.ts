import { Component, OnInit, ElementRef } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { trigger, state, style, animate,transition } from '@angular/animations';
import { DomSanitizer } from '@angular/platform-browser';
import { FacebookService, InitParams } from 'ngx-facebook';





@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.css'],
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

export class PostSingleComponent implements OnInit {

	  post: Post;
    post_related: Post;
    private future: Date;
    private futureString: string;
    private diff: number;
    private dias: string;
    private horas_minutos: string;



 
  show = false; 
  show2 = false; 
  posts_Home: Post[];
  posts: Post[];
  posts_related: Post[];
  repoUrl:any;
  slugArray: any;
  TweetTitulo: any;


  categorias: Post[];
  post_count:number;
  categoriasCount:any;
  arregloCountCat:any;
  categoria:any;
  current_id:any;
  tam_bloque: any;
  tam_bloque_visible: boolean;
  tam_bloqueC_visible: boolean;
  imageX:any;
  loadMoreVisible : boolean;
  selectedClass: number;
 
 constructor(private postsService: PostsService,  private router: Router,  private route: ActivatedRoute, private sanitizer: DomSanitizer, private fb: FacebookService) { 
   this.arregloCountCat = [];
    this.loadMoreVisible = false;
    this.futureString = "July 1, 2018 00:00:00";
    this.post_count = 20;
    this.tam_bloque_visible = false;
    this.tam_bloqueC_visible = true;
   

    let initParams: InitParams = {
      appId: '779346622261275',
      xfbml: true,
      version: 'v2.11'
    };

    fb.init(initParams);

      
  }


 



  getPost(slug){
    this.postsService
      .getPost(slug)
      .subscribe(res => {
        this.post = res[0];
        console.log("Post", this.post)
         this.categoria = res[0].categories;
         this.current_id = res[0].id;
         this.slugArray = res[0].slug;
         this.TweetTitulo = res[0].title.rendered;
         this.tam_bloque = res[0].tamano_bloque;
         console.log("CATEGORIA", this.categoria);
         console.log("CURRENT ID", this.current_id);
         console.log("TAMAÑO BLOQUE", this.tam_bloque);
         this.getPostRelated(this.categoria, this.current_id);
         this.repoUrl = 'http://michoacantrespuntocero.com/2018elecciones.com/posts-redes/'+this.slugArray;


         if(this.tam_bloque != "" ){
          this.tam_bloque_visible = true;
           this.tam_bloqueC_visible = false;
          console.log("this.tam_bloque_visible ", this.tam_bloque_visible );


        } else{
           this.tam_bloque_visible = false;
           this.tam_bloqueC_visible = true;
          console.log("this.tam_bloque_visible ", this.tam_bloque_visible );
        }
   
      });
  }

  getPostRelated(cat, current_id){
    this.postsService
      .getPostsRelated(cat, current_id)
      .subscribe(res => {
        this.posts_related = res;

        console.log(this.posts_related)
         //this.imageX = this.sanitizer.bypassSecurityTrustStyle(`url(${element.image})`);
      });
  }



  ngOnInit() {
   

  	this.route.params.forEach((params: Params) => {
       let slug = params['slug'];
       this.getPost(slug)
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

  GoToInicio() {
     this.router.navigate([""]);
    console.log("Go to Inicio")
  }


  SeleccionMenu(slug:string ) {
     this.router.navigate(["publicaciones-"+slug]);
  }


   getBackground(image) {
    return this.sanitizer.bypassSecurityTrustStyle(`linear-gradient(rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url(${image})`);
}

  selectPost(slug) {
   this.router.navigate([slug]);
   console.log("Slug normal", slug)
  }



}
