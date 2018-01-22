  import {Component,OnInit,AfterViewInit} from '@angular/core'

@Component({
  selector: 'app-banner-home-8',
  templateUrl: './banner-home-8.component.html',
  styleUrls: ['./banner-home-8.component.css']
})
export class BannerHome8Component implements OnInit {

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
