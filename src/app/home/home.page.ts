import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  listCategorys : any[]=[];
  listNoticias : any[]=[];

  constructor( public http:HttpClient, private router:Router ) {}

  ngOnInit() {
    this.http.get('../../assets/noticias/noticias.json').subscribe(data => {
      
      this.listCategorys = JSON.parse(JSON.stringify(data))[0].noticias.categorys;
      this.listNoticias = JSON.parse(JSON.stringify(data))[0].detailNoticias;

    });
  }
  navigate(value: any){

    let id= JSON.stringify(value);
    this.router.navigate(['./detail-noticia',{id}]);
    localStorage.setItem('NotisDetail',JSON.stringify(value));
  }
}
