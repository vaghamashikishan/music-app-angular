import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _http: HttpClient) { }

  private searchUrl!: string;
  private authorizationKey: any = 'Bearer BQAOyJl8ud2S4TX-UXcwFY6sCpRFHJ6nSS0P2_p0y-IJgHHM0RqLFSN8tXqs2EQw60cC_2wutpQiI_w3vWoMrRh9FeXZ1w4p8qWRTztzCitZywHPp2eS19r59eK2PWEsdPRxH2LYUPLpACl643xANaYMoc5vjsP1rYVvpydtApmwAJWrIM6n8UDNGShiZOs';

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
    this.searchUrl = `https://api.spotify.com/v1/tracks/${songId}`;
    return this._http.get(this.searchUrl, this.httpsOptions)
  }
}
