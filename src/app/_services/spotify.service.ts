import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _http: HttpClient) { }

  private searchUrl!: string;
  private authorizationKey: any = 'Bearer BQApjSuS5ZfR2u9IWlOXqmikr3yS1beZZbNuqPNTaLABvmryB2ZeujptM-y1GMrvD-1H_4GpVq9niiX9GSIbZ-wVJGQsTnVpJ4rNKJGGxzBYt2ueqbt7jvOFYWk1OOEm-Ks9cOPgP_iX3QKHurf6S36K5poYhdamNVwyKP225QTRo9KjwJD64umAxqMYRgE';

  private httpsOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': this.authorizationKey
    })
  }

  searchMusic(str: string): Observable<any> {
    this.searchUrl = `https://api.spotify.com/v1/search?q=${str}&type=artist`;
    return this._http.get(this.searchUrl, this.httpsOptions);
  }

  searchArtist(artistId: any) {
    this.searchUrl = `https://api.spotify.com/v1/artists/${artistId}`;
    return this._http.get(this.searchUrl, this.httpsOptions)
  }

  getAlbum(artistId: any) {
    this.searchUrl = `https://api.spotify.com/v1/artists/${artistId}/albums`;
    return this._http.get(this.searchUrl, this.httpsOptions)
  }

  getAlbumById(albumID: any) {
    this.searchUrl = `https://api.spotify.com/v1/albums/${albumID}`;
    return this._http.get(this.searchUrl, this.httpsOptions)
  }

  getTracks(albumId: any) {
    this.searchUrl = `https://api.spotify.com/v1/albums/${albumId}/tracks`;
    return this._http.get(this.searchUrl, this.httpsOptions)
  }

  getSongs(songId: any) {
    this.searchUrl = `https://api.spotify.com/v1/audio-features/${songId}`;
    return this._http.get(this.searchUrl, this.httpsOptions)
  }
}
