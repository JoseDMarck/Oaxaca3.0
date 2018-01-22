  import {Component,OnInit,AfterViewInit} from '@angular/core'

@Component({
  selector: 'app-banner-home-6',
  templateUrl: './banner-home-6.component.html',
  styleUrls: ['./banner-home-6.component.css']
})
export class BannerHome6Component implements OnInit {

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
