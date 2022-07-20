import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _http: HttpClient) { }

  private searchUrl!: string;
  private authorizationKey: any = 'Bearer BQB56sqdugihGCxSQ52NGDdS1sRQdpSpnuaL-RIROOTtUWBdj2mjijVp_Hk_EbJZ6amjDHQULbocrqHle0msCiq5_AoHIIXr1Kbw1nSN3yCeGVGBTFYXq_QVVnlwkPkPFD3lSSiIpoi2XScXYo_rdC2D7BEKqqZ8zMKkbWFChsPpXrS1SeHPPuGfHouyC5Q';

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
}
