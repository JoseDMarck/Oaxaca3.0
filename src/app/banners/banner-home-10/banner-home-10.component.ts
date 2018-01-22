import {Component,OnInit,AfterViewInit} from '@angular/core'


@Component({
  selector: 'app-banner-home-10',
  templateUrl: './banner-home-10.component.html',
  styleUrls: ['./banner-home-10.component.css']
})
export class BannerHome10Component implements OnInit {

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
