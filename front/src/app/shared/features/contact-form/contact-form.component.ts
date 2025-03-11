import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ButtonModule } from "primeng/button";

import { MessageModule } from "primeng/message";
import { CardModule } from "primeng/card";
import {
  FormGroup,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-contact",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"],
  standalone: true,
  imports: [
    CardModule,
    RouterLink,
    ButtonModule,
    ReactiveFormsModule,
    MessageModule,
  ],
})
export class ContactFormComponent {
  contactForm: FormGroup;
  messageSent = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      message: ["", [Validators.required, Validators.maxLength(300)]],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.messageSent = true;
      this.contactForm.reset();
      setTimeout(() => {
        this.messageSent = false;
      }
      , 3000);
    }
  }
}
