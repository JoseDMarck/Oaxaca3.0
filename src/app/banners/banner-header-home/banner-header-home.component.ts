import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-banner-header-home',
  templateUrl: './banner-header-home.component.html',
  styleUrls: ['./banner-header-home.component.css']
})
export class BannerHeaderHomeComponent implements OnInit {

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
