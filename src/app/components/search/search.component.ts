import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/_services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private _spotifyservice: SpotifyService) { }

  ngOnInit(): void {
  }

  searchStr: any = '';
  data: any;
  public artists: any[] = [];
  searchMusic() {
    console.log(this.searchStr);
    this._spotifyservice.searchMusic(this.searchStr).subscribe(data => {
      this.data = data;
      this.artists = this.data.artists.items;
    });
  }
}
