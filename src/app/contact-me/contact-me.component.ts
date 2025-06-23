import { Component } from '@angular/core';
import {AnimateOnLoadComponent} from '../animate-on-load/animate-on-load.component';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';
import {environment} from '../environments/environments';

@Component({
  selector: 'app-contact-me',
  imports: [AnimateOnLoadComponent ,FormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})
export class ContactMeComponent {
  email: string = '';
  message: string = '';
  name: string = ''; 
  subject: string = '';

  onSubmit() {
    emailjs.send(
      environment.emailjs_service_id,
      environment.emailjs_template_id,
      {
        from_name: this.name,
        from_email: this.email,
        subject: this.subject,
        message: this.message
      },
      environment.emailjs_user_id
    ).then(
      (response) => {
        alert('Message sent!');
      },
      (error) => {
        alert('Failed to send message.');
      }
    );
  }
  

}
