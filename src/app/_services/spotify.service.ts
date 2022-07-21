import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _http: HttpClient) { }

  private searchUrl!: string;
  private authorizationKey: any = 'Bearer BQDzXmyVRiu_0Y9claBDPf_zdHL4JBwP1OrHMC6zAz4BdkA3pSCz9fbOfAaqK-7UBZ4Vy0ilxTjuBSZzwSOlOrK8yJe3jORHkDodSOtbLCPGuGoiGuzefIwbYEEVj4qH70UPfZlot_BLdL4dSxi8UErwSGJTuu8I06aY4iBqm8a9jMWLs2Uv9khXsg66lvw';

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
