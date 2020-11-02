import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../config.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  users = [];
  username: any;
  password: any;
  flag = 0;
  show = false;
  errMessage: any;
  constructor(private _ConfigService: ConfigService, private router: Router) {}

  ngOnInit() {
    this._ConfigService.getUsers().subscribe(
      data => (this.users = data),
      error => (this.errMessage = error)
    );
  }

  loginUser() {
    for (let user of this.users) {
      if (this.username == user.username && this.password == user.password) {
        alert("Login success");
        this.flag = 1;
      }
    }
    if (this.flag == 0) {
      alert("Login Fail");
    }
  }
  showUserPassword() {
    this.show = !this.show;
  }
  userregistration() {
    this.router.navigate(["registration"]);
  }
}
