import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavOption } from 'src/app/core/models/SidenavOption';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  displayOptionText = false;
  links: SidenavOption[] = [
    {
      icon: 'fas fa-home',
      label: 'Home',
      link: '/home'
    },
    {
      icon: 'fas fa-taxi',
      label: 'Services',
      link: 'services'
    },
    {
      icon: 'fas fa-address-book',
      label: 'Contact Us',
      link: 'contact-us'
    },
    {
      icon: 'fas fa-eject',
      label: 'About',
      link: 'about'
    }
  ];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleSidenav(event: Event): void {
    this.displayOptionText = !this.displayOptionText;
    if (this.displayOptionText) {
      document.querySelectorAll('.sidebar__option--text').forEach(optionText => {
        optionText.setAttribute('style', 'max-width:  ' + optionText.scrollWidth + 'px; margin-left: 10px;');
      });
    } else {
      document.querySelectorAll('.sidebar__option--text').forEach(optionText => {
        optionText.setAttribute('style', 'max-width:  0px; margin-left: 0px;');
      });
    }
  }

  handleNavigation(option: SidenavOption): void {
    this.router.navigateByUrl(option.link ? option.link : '');
  }

}
