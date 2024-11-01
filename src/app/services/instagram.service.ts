import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {
  private apiUrl = 'https://graph.instagram.com';


  constructor(private http: HttpClient) { }

  getProfile(): Observable<any> {
    const url = `https://graph.instagram.com/me?fields=id,username,media_count&access_token=${this.accessToken}`;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }

  fetchMedia(url: string): Observable<any> {
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Ocurrió un error:', error.error.message);
    } else {
      console.error(
        `El backend devolvió el código ${error.status}, ` +
        `el cuerpo era: ${error.error}`);
    }
    return throwError(
      'Algo malo ocurrió; por favor, inténtalo de nuevo más tarde.');
  }
}

