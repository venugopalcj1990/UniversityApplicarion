import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../config.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"]
})
export class RegistrationComponent implements OnInit {
  errMessage: any;
  constructor(private _ConfigService: ConfigService, private router: Router) {}

  ngOnInit() {}
  RegisterUser(user) {
    this._ConfigService.postUser(user).subscribe(
      data => {
        console.log(data);
        this.router.navigate(["login"]);
      },
      error => (this.errMessage = error)
    );
  }
}
