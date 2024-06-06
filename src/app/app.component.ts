import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { TimelineComponent } from './timeline/timeline.component';
import { FooterComponent } from './footer/footer.component';
import { InstagramfeedComponent } from './instagramfeed/instagramfeed.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavbarComponent, HomeComponent, SobremiComponent, TimelineComponent, FooterComponent, InstagramfeedComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'portafolioweb';

  ngOnInit() {
    if (typeof document !== 'undefined') {
      initFlowbite();
    }
    
  }

  
}
