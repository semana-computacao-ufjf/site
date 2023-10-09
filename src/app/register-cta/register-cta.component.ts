import { Component } from '@angular/core';

@Component({
  selector: 'app-register-cta',
  templateUrl: './register-cta.component.html',
  styleUrls: ['./register-cta.component.css'],
})
export class RegisterCtaComponent {
  showVideo: boolean = false;

  toggleShowVideo() {
    this.showVideo = !this.showVideo;
  }
}
