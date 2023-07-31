import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public isCollapsed1 = true;
  public isCollapsed2 = true;
  public isCollapsed3 = true;


  constructor(private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  signUp() {
    this.router.navigate(['/signup']);
  }

}
