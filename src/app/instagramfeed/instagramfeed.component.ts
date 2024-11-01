import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstagramService } from '../services/instagram.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-instagramfeed',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './instagramfeed.component.html',
  styleUrl: './instagramfeed.component.css'
})
export class InstagramfeedComponent {
  profile: any;
  mediaList: any[] = [];
  galleryContainer: HTMLElement | null = null;

  ngOnInit() {
    this.fetchMedia();
    this.initializeGallery();
  }

  constructor(private instagramService: InstagramService) { }

  fetchProfile() {
    this.instagramService.getProfile().subscribe((profileData: any) => {
      this.profile = profileData;
      this.fetchMedia();
    });
  }
  

  fetchMedia() {
    const url = `https://graph.instagram.com/me/media?fields=id,media_type,media_url&access_token=${this.instagramService}`;
    this.instagramService.fetchMedia(url).subscribe(mediaData => {
      this.mediaList = mediaData.data;
    });
  }

  initializeGallery() {
    // Obtener el contenedor de la galería
    this.galleryContainer = document.querySelector('.photo-gallery');

    // Verificar si se ha obtenido el contenedor
    if (this.galleryContainer) {
      // Agregar listeners para los eventos de desplazamiento
      document.querySelector('.prev')?.addEventListener('click', () => this.scrollGallery('left'));
      document.querySelector('.next')?.addEventListener('click', () => this.scrollGallery('right'));
    }
  }

  scrollGallery(direction: 'left' | 'right') {
    if (!this.galleryContainer) return;

    // Obtener el ancho de una imagen (asumiendo que todas las imágenes tienen el mismo ancho)
    const itemWidth = this.galleryContainer.querySelector('.gallery-item')?.clientWidth || 0;

    // Calcular la cantidad de desplazamiento
    const scrollAmount = direction === 'left' ? -itemWidth : itemWidth;

    // Desplazar la galería
    this.galleryContainer.scrollBy({
      left: scrollAmount,
      behavior: 'smooth' // Desplazamiento suave
    });
  }

  

}
