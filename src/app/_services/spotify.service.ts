import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private searchUrl!: string;
  private authorizationKey: any = 'Bearer BQCjdjuE_7KRrKjhYbXh1WP9KIKePVvuXvx4io08gJNgg0Cqj3qCxGoCmFKSPK5UoKwbjpDQTpj21Wc5I02mje0qcyx-9GE62ZZsgcrPjiD9N22SoYz1k4C0pfppo8wnCWejLIZFgUNHfnLWHXMuGqnpFQAW-5QLKSfqo104a7LXfHiiVnz_lJ0b5QEk7-A';

  private httpsOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': this.authorizationKey
    })
  }

  constructor(private _http: HttpClient) { }

  searchMusic(str: string): Observable<any> {
    this.searchUrl = `https://api.spotify.com/v1/search?q=${str}&type=artist`;
    return this._http.get(this.searchUrl, this.httpsOptions);
  }
}
