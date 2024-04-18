import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-submit-button',
  standalone: true,
  imports: [],
  templateUrl: './submit-button.component.html',
  styleUrl: './submit-button.component.css'
})
export class SubmitButtonComponent {
    @Input() label : string | undefined;
    @Output() submit : EventEmitter<void> = new EventEmitter<void>();

    onClick() : void {
      this.submit.emit();
    }
}
