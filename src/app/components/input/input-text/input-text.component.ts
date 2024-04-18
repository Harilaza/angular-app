import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.css'
})
export class InputTextComponent {
  @Input() customCss : string | undefined;
  @Input() customPlaceholder : string | undefined;
  @Input() id : string | undefined;
  @Input() logo : string | undefined;
  @Output() value: EventEmitter<string> = new EventEmitter<string>();

  handleInput(event : any) : void {
    this.value.emit(event.target.value)
 }
}
