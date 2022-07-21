import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SpotifyService } from 'src/app/_services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit, AfterViewInit {
  constructor(private _activatedroute: ActivatedRoute, private _spotifyService: SpotifyService) {
    // console.log('hi from const');

  }

  artistID: any;
  artistData: any;
  albumData: any;
  ngOnInit(): void { }
  ngAfterViewInit(): void {

    // getting artistID from URl
    this._activatedroute.paramMap.subscribe((paramMap: ParamMap) => {
      this.artistID = paramMap.get('id');

      // geeting artist data using service
      this._spotifyService.searchArtist(this.artistID).subscribe((data: any) => {
        this.artistData = data
      });

      // getting album data
      this._spotifyService.getAlbum(this.artistID).subscribe((data: any) => {
        this.albumData = data.items
      });
    })
  }

}
