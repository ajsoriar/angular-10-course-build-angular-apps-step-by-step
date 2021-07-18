import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}
