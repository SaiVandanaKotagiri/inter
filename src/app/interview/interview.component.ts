import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent implements OnInit {

  public colors=[ "red", "green","blue","black","orange"];
  todisplay= true;
  public color="";
  birthday = new Date(1995, 0, 3);

  

  time: Observable<string>;
  constructor() {
    this.time = new Observable((observer) => {
      setInterval(() => {
        observer.next(new Date().toString());
      }, 2000);
    });
  }

  // constructor(private route: ActivatedRoute,private router: Router);
  ngOnInit(): void {

  }

  onClick(){
      console.log(1 + "2" + "2");
      console.log(1 +  +"2" + "2");
      console.log(+"1" + "1" + "2");
      //console.log("A" - "B" + "2");
      console.log("A" +"2" +"B" + 2);

  }

}
