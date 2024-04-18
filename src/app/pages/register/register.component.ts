import { Component } from '@angular/core';
import {InputPasswordComponent} from "../../components/input/input-password/input-password.component";
import {InputTextComponent} from "../../components/input/input-text/input-text.component";
import {SubmitButtonComponent} from "../../components/button/submit-button/submit-button.component";
import {User} from "../../interfaces/user";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    InputPasswordComponent,
    InputTextComponent,
    SubmitButtonComponent,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user : User = {} as User;
  passwordVerification : string | undefined;

  submit() : void {
    if(this.passwordVerification === this.user.password) {
      console.log(this.user);
    }
    else {
      console.log('this is not a right password');
    }
  }
}
