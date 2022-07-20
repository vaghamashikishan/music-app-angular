import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _http: HttpClient) { }

  private searchUrl!: string;
  private authorizationKey: any = 'Bearer BQAoZuEHYdZ0VypKUP8tPA6y3iW9MyZSF9wjr0PDaDEOwfJ5AvN7aNu0paIbIpwMYIi8wTH1hEZb7M2M5YYnKKJ5A4OPPOz2pZY22mzlxfpRjqPULkPNm6TH2jMCOC0MYDABRwdlUc7ZSz771Rq_4dtKtsCY-zwo7xG6ucMykP1n_eqS3tubmr22pH5JD9Y';

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
}
