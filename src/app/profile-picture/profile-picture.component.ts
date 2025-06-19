import { Component , AfterViewInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import Typewriter from "typewriter-effect/dist/core";

@Component({
  selector: 'app-profile-picture',
  imports: [CommonModule , RouterModule],
  templateUrl: './profile-picture.component.html',
  styleUrl: './profile-picture.component.css'
})
export class ProfilePictureComponent  {
  imageUrl : String = 'assets/profile_picture.jpg';
}
