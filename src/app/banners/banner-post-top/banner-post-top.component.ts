  import {Component,OnInit,AfterViewInit} from '@angular/core'

@Component({
  selector: 'app-banner-post-top',
  templateUrl: './banner-post-top.component.html',
  styleUrls: ['./banner-post-top.component.css']
})
export class BannerPostTopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


 ngAfterViewInit() {
         setTimeout(()=>{
          try{
            (window['adsbygoogle'] = window['adsbygoogle'] || []).push({});
            console.log("BANNER OK");
          }catch(e){
            console.error("error");
          }
        },2000);
  }     


}
