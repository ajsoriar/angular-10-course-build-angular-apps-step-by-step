import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todayDate: any;

  public persondata : any[] = [];

  constructor( private myservice: MyserviceService ) {}

  ngOnInit() {
    this.todayDate = this.myservice.showTodayDate();

    this.myservice.getData().subscribe((data) => {
      //this.persondata = Array.from(Object.keys(data),k=>data[k]); // @ts-ignore
      this.persondata = Object.values(data);
      console.log(this.persondata);
    });

  }

  title = 'ng004-bootstrap3-and-jquery';
  description = 'This is a description.';
  title2 = 'Welcome to Angular';
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  isAvailable = false;

  setTrue() {
    console.log("Now we have set the value to True");
    this.isAvailable = true;
  }

  setFalse() {
    console.log("Now we have set the value to False");
    this.isAvailable = false;
  }

  simplePipeData = "This is going really well !";

  // decorator

  firstFeature = {
    heading: "Feature One",
    body: "Some feature details for the first feature for demo."
  }

  secondFeature = {
    heading: "Feature Two",
    body: "Some feature details for the second feature for demo."
  }

  thirdFeature = {
    heading: "Feature Three",
    body: "Some feature details for the third feature for demo."
  }

  fourthFeature = {
    heading: "Feature Four",
    body: "Some feature details for the fourth feature for demo."
  }
}
