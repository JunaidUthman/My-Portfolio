import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyProjects } from '../MyProjects';
import { CommonModule } from '@angular/common';
import {AnimateOnLoadComponent} from '../animate-on-load/animate-on-load.component';


@Component({
  selector: 'app-projects',
  imports: [RouterModule , CommonModule , AnimateOnLoadComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
    projects: MyProjects[] = [
      new MyProjects(
      "L7eta Shop",
      "An e-commerce platform for selling and purchasing clothes.",
      "/images/ecommerce.PNG",
      ["/images/angular.png", "/images/express.png", "/images/mongo.png", "/images/html.png", "/images/css.png"],
      "https://github.com/JunaidUthman/E-commerce-Web-App-Express_MongoDB_Angular"
    ),
    new MyProjects(
      "Free Course Web App",
      "A web application for publishing and learning online courses.",
      "/images/freeCource.PNG",
      ["/images/symfony.png", "/images/js.png","/images/mysql.png", "/images/html.png", "/images/css.png"],
      "https://github.com/JunaidUthman/Free-Course-web-application"
    ),
    
    new MyProjects("Uni Registration", "A web application that allows students to choose their academic path and manage their university registration.", "/images/schoolRegistration.PNG",  ["/images/php.png", "/images/mysql.png", "/images/html.png", "/images/css.png"],"https://github.com/JunaidUthman/University-Registration-Web-Application"),
    new MyProjects("Project-Management-Web-Application", "A web application for managing project workflows, allowing users to create and track the progress of their projects.", "/images/dashboard.PNG",  ["/images/php.png", "/images/mysql.png", "/images/html.png", "/images/css.png"],"https://github.com/JunaidUthman/Project-Management-Web-Application"),
    new MyProjects("Banc-Web-Application", "a simulation for banc operations like Deposit,Withdrawal and Transfer ", "/images/login.PNG", ["/images/php.png", "/images/mysql.png", "/images/html.png", "/images/css.png"],"https://github.com/JunaidUthman/Banc-Web-Application"),
    new MyProjects("Visualisation-of-Sorting-Algorithmes", "this web page is for visiualising sorting algorithmes ", "/images/visiualisation.PNG",  ["/images/js.png", "/images/html.png", "/images/css.png"],"https://github.com/JunaidUthman/Visualisation-of-Sorting-Algorithmes"),
    new MyProjects("School-Management-Desktop-Application", "a school management desktop application that helps teachers&principles pto manage students afaires", "/images/desktopapp.jpg",  ["/images/qt.png","/images/cpp.png", "/images/sqllite.png"],"https://github.com/JunaidUthman/School-Management-Desktop-Application-in-QT"),
    new MyProjects("My Portfolio", "this is the code source for this portfolio", "/images/myPortfolio.PNG",  ["/images/angular.png", "/images/html.png", "/images/css.png"],"https://github.com/JunaidUthman/My-Portfolio"),
];

}
