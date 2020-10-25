import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";

import { Hero } from "./hero";

import moment from "moment";
import { NgForm } from "@angular/forms";
import { IDayCalendarConfig, DatePickerComponent } from "ng2-date-picker";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  datePickerConfig = {
    format: "DD"
  };

  updateFormat() {
    console.log("update");
    this.datePickerConfig = {
      ...this.datePickerConfig,
      format: "DD-MM"
    };
  }

  powers = ["Really Smart", "Super Flexible", "Super Hot", "Weather Changer"];

  model = new Hero(18, "Dr IQ", this.powers[0], "Chuck Overstreet");

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log(" app modal : ", this.model);
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }

  newHero() {
    this.model = new Hero(42, "", "");
  }

  skyDog(): Hero {
    const myHero = new Hero(
      42,
      "SkyDog",
      "Fetch any object at any distance",
      "Leslie Rollover"
    );
    console.log("My hero is called " + myHero.name); // "My hero is called SkyDog"
    return myHero;
  }

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls.name && form.controls.name.value; // Dr. IQ
  }
}
