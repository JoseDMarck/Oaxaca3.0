import { Component, OnInit,  Injectable, AfterViewInit } from '@angular/core';
import { Post } from '../../posts/post';
import { PostsService } from '../../posts/posts.service';
import { Observable, Subscription } from 'rxjs/Rx';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-banner-post-3',
  templateUrl: './banner-post-3.component.html',
  styleUrls: ['./banner-post-3.component.css']
})
export class BannerPost3Component implements OnInit {

   post: Post;
   categoria:any;

   exist_banner_personal: boolean
   analytics_banner: boolean
   banner_personal: any;
   banner_url: any;
   current_id:any;


  constructor(private postsService: PostsService, private sanitizer: DomSanitizer) { 
    this.exist_banner_personal  = false
    this.analytics_banner = true

  }

  
 

  getBanners(){
    this.postsService
      .getPosts_banners()
      .subscribe(res => {
        this.post = res[0];
        this.banner_personal = res[0].imagen_banner_post_3;
        this.banner_url = res[0].url_banner_post_3;
        console.log("posts_Banners ***", this.post);
        console.log("banner_personal", this.banner_personal);

         if( this.banner_personal != ""){
           console.log("EXISTO*****");
           this.exist_banner_personal = true;
           this.analytics_banner = false
         }


      });
  }



  ngOnInit() {

      this.getBanners();
  }





   ngAfterViewInit() {
        
         setTimeout(()=>{
          try{
            (window['adsbygoogle'] = window['adsbygoogle'] || []).push({});
            console.log("BANNER principal OK");
          }catch(e){
            console.error("error");
          }
        },2000);
        
  }     

}
