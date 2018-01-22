import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-banner-home-2',
  templateUrl: './banner-home-2.component.html',
  styleUrls: ['./banner-home-2.component.css']
})
export class BannerHome2Component implements OnInit {

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
