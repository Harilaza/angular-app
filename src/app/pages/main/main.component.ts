import { Component } from '@angular/core';
import {InputTextComponent} from "../../components/input/input-text/input-text.component";
import {FormsModule} from "@angular/forms";
import {InputPasswordComponent} from "../../components/input/input-password/input-password.component";
import {User} from "../../interfaces/user";
import {SubmitButtonComponent} from "../../components/button/submit-button/submit-button.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    InputTextComponent,
    FormsModule,
    InputPasswordComponent,
    SubmitButtonComponent,
    RouterOutlet
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
