import { Component } from '@angular/core';
import {AnimateOnLoadComponent} from '../animate-on-load/animate-on-load.component';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';
import {environment} from '../environments/environments';
import {NgxSpinnerService} from 'ngx-spinner';
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
  selector: 'app-contact-me',
  imports: [AnimateOnLoadComponent ,FormsModule , NgxSpinnerModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})
export class ContactMeComponent {

  constructor(private spinner: NgxSpinnerService) {}
  email: string = '';
  message: string = '';
  name: string = ''; 
  subject: string = '';

  onSubmit() {
    this.spinner.show();
    emailjs.send(
      environment.emailjs_service_id,
      environment.emailjs_template_id,
      {
        name: this.name,
        email: this.email,
        title: this.subject,
        message: this.message
      },
      environment.emailjs_user_id
    ).then(
      (response) => {
        this.spinner.hide();
        alert('Message sent!');
      },
      (error) => {
        this.spinner.hide();
        alert('Message sent!.');
      }
    );
  }
  

}
