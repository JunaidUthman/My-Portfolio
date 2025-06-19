import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyProjects } from '../MyProjects';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-projects',
  imports: [RouterModule , CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
    projects : MyProjects[] = [
      new MyProjects("Free Courses", "Description of Project 1", "/images/Online-Course-2.jpeg", ["/images/symfony.png", "/images/html.png"]),
      new MyProjects("Project 1", "Description of Project 1", "/images/Online-Course-2.jpeg",  ["/images/symfony.png", "/images/html.png"]),
      new MyProjects("Project 1", "Description of Project 1", "/images/Online-Course-2.jpeg",  ["/images/symfony.png", "/images/html.png"]),
      new MyProjects("Project 1", "Description of Project 1", "/images/Online-Course-2.jpeg",  ["/images/symfony.png", "/images/html.png"]),
      new MyProjects("Free Courses", "Description of Project 1", "/images/Online-Course-2.jpeg", ["/images/symfony.png", "/images/html.png"]),
      new MyProjects("Project 1", "Description of Project 1", "/images/Online-Course-2.jpeg",  ["/images/symfony.png", "/images/html.png"]),
      new MyProjects("Project 1", "Description of Project 1", "/images/Online-Course-2.jpeg",  ["/images/symfony.png", "/images/html.png"]),
      new MyProjects("Project 1", "Description of Project 1", "/images/Online-Course-2.jpeg",  ["/images/symfony.png", "/images/html.png"]),
    ];
}
