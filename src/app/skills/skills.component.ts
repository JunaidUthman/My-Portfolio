import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WebDevSectionComponent } from '../web-dev-section/web-dev-section.component';
import { register } from 'swiper/element/bundle';
import {AnimateOnLoadComponent} from '../animate-on-load/animate-on-load.component';

// Register Swiper custom elements
register();

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RouterModule, WebDevSectionComponent, CommonModule , AnimateOnLoadComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './skills.component.html',
  styles: [`
    .skills-swiper {
      padding: 10px 0;
    }

    /* Custom swiper styling */
    swiper-container {
      --swiper-theme-color: #8b5cf6;
    }

    /* Hide scrollbar for cleaner look */
    swiper-container::part(container) {
      overflow: hidden;
    }

    /* Ensure smooth transitions */
    swiper-slide {
      transition: transform 0.3s ease;
    }

    /* Optional: Add subtle glow effect on hover */
    .bg-gray-800:hover {
      box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
    }
  `]
})
export class SkillsComponent {

  showSwipePopup = true;

  closeSwipePopup() {
    this.showSwipePopup = false;
  }
  problemSolvingSkills = [
    { name: 'C++', image: '/images/cpp.png' },
    { name: 'Java', image: '/images/java.png' },
    { name: 'Python', image: '/images/python.png' },
    { name: 'Linux', image: '/images/linux.png' },
    { name: 'Git', image: '/images/git.png' },
    { name: 'C++', image: '/images/cpp.png' },
    { name: 'Java', image: '/images/java.png' },
    { name: 'Python', image: '/images/python.png' }
  ];

  programmingLanguages =[
    { name: 'Java', image: '/images/java.png' },
    { name: 'Java', image: '/images/php.png' },
    { name: 'Python', image: '/images/python.png' },
    { name: 'Python', image: '/images/js.png' },
    { name: 'Python', image: '/images/cs.png' },
    { name: 'C/C++', image: '/images/cpp.png' },
    { name: 'HTML', image: '/images/html.png' },
    { name: 'CSS', image: '/images/css.png' },
  ]

  frameWorks = [
    { name: 'Angular', image: '/images/angular.png' },
    { name: 'React', image: '/images/react.png' },
    { name: 'Node.js', image: '/images/node.png' },
    { name: 'Node.js', image: '/images/express.png' },
    { name: 'Node.js', image: '/images/laravel.png' },
    { name: 'Node.js', image: '/images/symfony.png' },
    { name: 'Node.js', image: '/images/Tailwind.png' },
    
  ];

  // Define breakpoints as component properties
  swiperBreakpoints = {
    320: { slidesPerView: 2, spaceBetween: 16 },
    640: { slidesPerView: 3, spaceBetween: 20 },
    1024: { slidesPerView: 4, spaceBetween: 24 },
    1280: { slidesPerView: 5, spaceBetween: 24 }
  };

  autoplayConfig = {
    delay: 1500,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
    stopOnLastSlide: false
  };

  autoplayConfigReverse = {
    delay: 1800,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
    stopOnLastSlide: false,
    reverseDirection: true
  };
}