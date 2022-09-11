import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/_service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  ngOnInit() {
  }


  result () {
    this.homeService.getDemoResultDirect().subscribe((datos) => {
      var dataJson = JSON.stringify(datos);      
      
      console.log("### SHOW RESULT:" + dataJson)

    });
  }

  resultProxy () {
    this.homeService.getDemoResultProxy().subscribe((datos) => {
      var dataJson = JSON.stringify(datos);      
      
      console.log("### SHOW RESULT:" + dataJson)

    });
  }

}
