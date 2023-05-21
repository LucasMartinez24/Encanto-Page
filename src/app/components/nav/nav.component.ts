import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  stickyHeader = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.stickyHeader = window.scrollY > 0;
  }
  @ViewChild('menuIcon') menuIcon!: ElementRef;
  @ViewChild('navmenu') navmenu!: ElementRef;

  toggleMenu() {
    console.log("entro")
    this.menuIcon.nativeElement.classList.toggle('bx-x');
    this.navmenu.nativeElement.classList.toggle('open');
  }
}
