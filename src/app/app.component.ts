import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
 
  showNavbar= true;

  title = 'AngularCRUD';
   
  constructor(private router: Router){
    router.events.subscribe(
      (val)=>{
        if(val instanceof NavigationEnd){
          if(val.url=='/signup'){
            this.showNavbar= false;
          }
          if(val.url=='/home'){
            this.showNavbar= true;
          }
        }
      }
    )
  }
  gotoList() {
    this.router.navigate(['/signup']);
  }

 
}
