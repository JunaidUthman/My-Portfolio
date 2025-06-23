import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AnimateOnLoadComponent} from '../animate-on-load/animate-on-load.component';


@Component({
  selector: 'app-side-bar',
  imports: [RouterModule , AnimateOnLoadComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

}
