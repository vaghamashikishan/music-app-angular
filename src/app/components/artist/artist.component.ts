import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SpotifyService } from 'src/app/_services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  constructor(private _activatedroute: ActivatedRoute, private _spotifyService: SpotifyService) { }

  artistID: any;
  ngOnInit(): void {
    this._activatedroute.paramMap.subscribe((paramMap: ParamMap) => {
      this.artistID = paramMap.get('id');
    })
  }

}
