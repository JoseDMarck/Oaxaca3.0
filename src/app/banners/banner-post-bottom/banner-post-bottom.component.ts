  import {Component,OnInit,AfterViewInit} from '@angular/core'

@Component({
  selector: 'app-banner-post-bottom',
  templateUrl: './banner-post-bottom.component.html',
  styleUrls: ['./banner-post-bottom.component.css']
})
export class BannerPostBottomComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


   ngAfterViewInit() {
         setTimeout(()=>{
          try{
            (window['adsbygoogle'] = window['adsbygoogle'] || []).push({});
            console.log("BANNER Bottom OK");
          }catch(e){
            console.error("error");
          }
        },2000);
     }     



}
