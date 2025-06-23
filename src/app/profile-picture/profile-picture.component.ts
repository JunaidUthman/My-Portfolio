import { Component , AfterViewInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {TypingComponentComponent} from '../typing-component/typing-component.component';
import {AnimateOnLoadComponent} from '../animate-on-load/animate-on-load.component';
// import Typewriter from "typewriter-effect/dist/core";

@Component({
  selector: 'app-profile-picture',
  imports: [CommonModule , RouterModule , TypingComponentComponent , AnimateOnLoadComponent],
  templateUrl: './profile-picture.component.html',
  styleUrl: './profile-picture.component.css'
})
export class ProfilePictureComponent  {
  imageUrl : String = 'assets/profile_picture.jpg';
}
