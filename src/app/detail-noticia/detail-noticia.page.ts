import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-noticia',
  templateUrl: './detail-noticia.page.html',
  styleUrls: ['./detail-noticia.page.scss'],
})
export class DetailNoticiaPage implements OnInit {
  data: any;
  sub: any;
  NotisDetail: any;
  detailNewList: any[]=[];

  titleNew: String = "";
  dateNew: String = "";
  showNew: String = "";
  text_smallNew: String = "";
  text_longNew: String = "";
  url_imagNew: String = "";
  url_directionNew: String = "";

  constructor(private route:Router, private router:ActivatedRoute) { }

  ngOnInit() {
    this.NotisDetail = localStorage.getItem('NotisDetail');
    this.detailNewList = Object.values(JSON.parse(this.NotisDetail));
    console.log(this.detailNewList);

    // aca abajo se llaman los objetos para que los muestre la paguina
    this.titleNew = this.detailNewList[0];
    this.dateNew = this.detailNewList[1];
    this.showNew = this.detailNewList[2];
    this.text_smallNew = this.detailNewList[3];
    this.text_longNew = this.detailNewList[4];
    this.url_imagNew = this.detailNewList[5];
    this.url_directionNew = this.detailNewList[6];
  }

  back(){
    this.route.navigate(['./home'])
  }

}
