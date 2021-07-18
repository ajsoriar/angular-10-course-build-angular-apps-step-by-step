import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-andres-component',
  templateUrl: './new-andres-component.component.html',
  styleUrls: ['./new-andres-component.component.css']
})
export class NewAndresComponentComponent implements OnInit {

  @Input() featureSet: any;

  constructor() { }

  ngOnInit(): void {
  }

}
