import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-inputdata',
  templateUrl: './inputdata.component.html',
  styleUrls: ['./inputdata.component.css']
})
export class InputdataComponent  {
  isLoading = false;
  firstname = "";
  secondname = "";
  result = "";
 
  generateRandomInteger(max: number) {
    return Math.floor(Math.random() * max) + 1;
  }

  changeLowCase() {
    this.result = this.firstname.toLowerCase() + '_' + this.secondname.toLowerCase() + '_' + this.generateRandomInteger(9);
    this.isLoading = true;
  }
}
