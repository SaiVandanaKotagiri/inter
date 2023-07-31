import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUPComponent implements OnInit{

  myGroup!: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.myGroup = new FormGroup({
      firstName: new FormControl(),
        lastName:  new FormControl(),
        email:  new FormControl(),
        pswd:  new FormControl(),
        reenterpswd:  new FormControl(),
        mobile: new FormControl()

    });

    // throw new Error('Method not implemented.');
  }

  homeLogin(){
    this.router.navigate(['/home']);
  }
  gotoList() {
    this.router.navigate(['/signup']);
  }
}


