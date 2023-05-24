import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('signinBtn') signinBtn!: ElementRef;
  @ViewChild('signupBtn') signupBtn!: ElementRef;
  @ViewChild('formBx') formBx!: ElementRef;
  @ViewChild('body') body!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.renderer.listen(this.signupBtn.nativeElement, 'click', () => {
      this.formBx.nativeElement.classList.add('active');
      this.body.nativeElement.classList.add('active');
    });

    this.renderer.listen(this.signinBtn.nativeElement, 'click', () => {
      this.formBx.nativeElement.classList.remove('active');
      this.body.nativeElement.classList.remove('active');
    });
  }
}
