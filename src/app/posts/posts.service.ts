import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Post } from './post';

@Injectable()
export class PostsService {
  //http://meditarensupabra.com/demos/AudiosCDO/wp-json/wp/v2/ 
private postsUrl = "http://meditarensupabra.com/demos/AudiosCDO/wp-json/wp/v2/";

  constructor(private http: Http) { }

  getPosts(): Observable<Post[]> {
    	return this.http
      	.get(this.postsUrl + 'posts?categories=15&per_page=12&order=asc')
      	.map((res: Response) => res.json());
	}

  getPostsHome(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts')
        .map((res: Response) => res.json());
  }

   getPostsSearchFull(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?per_page=100&order=desc')
        .map((res: Response) => res.json());
  }


  getPostsRelated(id_cat, current_id): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories='+id_cat+'&per_page=6&order=desc&exclude='+current_id)
        .map((res: Response) => res.json());
  }


  

	getPost(slug): Observable<Post> {
        return this.http
        .get(this.postsUrl + `posts?slug=${slug}`)
        .map((res: Response) => res.json());
  }

    getPostNormal(slug): Observable<Post> {
        return this.http
        .get(this.postsUrl + `posts?slug=${slug}`)
        .map((res: Response) => res.json());
  }


  getPostMedia(id): Observable<Post> {
        return this.http
        .get(this.postsUrl + 'media/'+id)
        .map((res: Response) => res.json());
  }


   // LOADMORE SERVICIO
   LoadMorePostsService(id_cat, numero): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories='+id_cat+'&per_page='+numero+'&order=asc')
        .map((res: Response) => res.json());
  }

 

   // LOADMORE SERVICIO
   LoadMorePostsServiceNormal(id_cat, numero): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories='+id_cat+'&per_page='+numero+'&order=desc')
        .map((res: Response) => res.json());
  }

  // LOADMORE HOME
   LoadMorePostsServiceHome( numero): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?per_page='+numero+'&order=desc')
        .map((res: Response) => res.json());
  }

  //GetCategoryCount http://meditarensupabra.com/demos/AudiosCDO//wp-json/wp/v2/categories

 
 
  // POST PARA PRINCIPALES
  getPosts_principales(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=40&per_page=7&order=desc')
        .map((res: Response) => res.json());
  }

  getPosts_principales_full(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?posts_per_page=10&order=desc')
        .map((res: Response) => res.json());
  }


  // POST PARA GLAMOUR
  getPosts_glamour(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=41&per_page=1&order=desc')
        .map((res: Response) => res.json());
  }

  getPosts_glamour_next(): Observable<Post[]> {
        return this.http
        .get(this.postsUrl + 'posts?categories=41&per_page=4&order=desc&offset=1')
        .map((res: Response) => res.json());
  }

   getPosts_glamour_full(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=41&per_page=10&order=desc')
        .map((res: Response) => res.json());
  }


  // POST PARA INTERNET
  getPosts_internet(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=42&per_page=1&order=desc')
        .map((res: Response) => res.json());
  }

  getPosts_internet_next(): Observable<Post[]> {
        return this.http
        .get(this.postsUrl + 'posts?categories=42&per_page=4&order=desc&offset=1')
        .map((res: Response) => res.json());
  }

  getPosts_internet_full(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=42&per_page=10&order=desc')
        .map((res: Response) => res.json());
  }


    // POST PARA DEPORTES
  getPosts_deportes(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=43&per_page=4&order=desc')
        .map((res: Response) => res.json());
  }

  getPosts_deportes_full(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=43&per_page=10&order=desc')
        .map((res: Response) => res.json());
  }


  
   // POST PARA VIDEOS
  getPosts_videos(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=46&per_page=4&order=desc')
        .map((res: Response) => res.json());
  }

  getPosts_videos_full(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=46&per_page=10&order=desc')
        .map((res: Response) => res.json());
  }

   // POST PARA ESPECTACULOS
  getPosts_espectaculos(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=44&per_page=1&order=desc')
        .map((res: Response) => res.json());
  }

  getPosts_espectaculos_next(): Observable<Post[]> {
        return this.http
        .get(this.postsUrl + 'posts?categories=44&per_page=4&order=desc&offset=1')
        .map((res: Response) => res.json());
  }

  getPosts_espectaculos_full(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=44&per_page=10&order=desc')
        .map((res: Response) => res.json());
  }

    // POST PARA ESPECTACULOS
  getPosts_en_oaxaca(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=45&per_page=4&order=desc')
        .map((res: Response) => res.json());
  }


  // LOADMORE HOME
   LoadMorePostsServicebyCategory(cat,numero): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories='+cat+'&per_page='+numero+'&order=desc')
        .map((res: Response) => res.json());
  }

  getPosts_en_oaxaca_full(): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?categories=45&per_page=10&order=desc')
        .map((res: Response) => res.json());
  }
  

   LoadMorePostsService2(numero): Observable<Post[]> {
      return this.http
        .get(this.postsUrl + 'posts?per_page='+numero+'&order=desc')
        .map((res: Response) => res.json());
  }







}
