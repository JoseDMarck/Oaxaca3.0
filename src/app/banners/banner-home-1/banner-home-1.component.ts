import { Component, OnInit, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-banner-home-1',
  templateUrl: './banner-home-1.component.html',
  styleUrls: ['./banner-home-1.component.css']
})
export class BannerHome1Component implements OnInit {

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
