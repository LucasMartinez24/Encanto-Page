import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  stickyHeader = false;
  public isLogged:boolean=false
  ngOnInit(): void {

  }
  //NAVBAR
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.stickyHeader = window.scrollY > 0;
  }
  @ViewChild('menuIcon') menuIcon!: ElementRef;
  @ViewChild('navmenu') navmenu!: ElementRef;
  private routerSubscription: Subscription;
  constructor(private router: Router,private auth:AuthService) {
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.resetClasses();
      }
    });
  }
  logOut(){
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

  toggleMenu() {
    this.menuIcon.nativeElement.classList.toggle('bx-x');
    this.navmenu.nativeElement.classList.toggle('open');
  }

  resetClasses() {
    this.menuIcon.nativeElement.classList.remove('bx-x');
    this.navmenu.nativeElement.classList.remove('open');
  }
}
