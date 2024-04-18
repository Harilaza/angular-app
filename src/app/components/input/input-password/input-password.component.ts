import {Component, EventEmitter, Input, Output} from '@angular/core';
import 'boxicons';

@Component({
  selector: 'app-input-password',
  standalone: true,
  imports: [],
  templateUrl: './input-password.component.html',
  styleUrl: './input-password.component.css'
})
export class InputPasswordComponent {
  @Input() id : string | undefined;
  @Input() customPlaceholder : string | undefined;
  @Input() customCss : string | undefined;
  @Output() value : EventEmitter<string> = new EventEmitter<string>();

  handleInput($event : any) : void {
    this.value.emit($event.target.value);
  }
}
