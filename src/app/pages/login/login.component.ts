import { Component } from '@angular/core';
import {InputPasswordComponent} from "../../components/input/input-password/input-password.component";
import {InputTextComponent} from "../../components/input/input-text/input-text.component";
import {SubmitButtonComponent} from "../../components/button/submit-button/submit-button.component";
import {User} from "../../interfaces/user";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    InputPasswordComponent,
    InputTextComponent,
    SubmitButtonComponent,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user : User = {} as User;

  submit() : void {
    console.log(this.user);
  }
}
