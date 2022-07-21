import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SpotifyService } from 'src/app/_services/spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  constructor(private _activatedroute: ActivatedRoute, private _spotifyService: SpotifyService) { }

  albumID: any;
  albumData: any;
  tracksDetails: any;
  ngOnInit(): void {
    this._activatedroute.paramMap.subscribe((paramMap: ParamMap) => {
      this.albumID = paramMap.get('id2');

      // geeting artist data using service
      this._spotifyService.getAlbumById(this.albumID).subscribe((data: any) => {
        this.albumData = data
        console.log(this.albumData);

      });

      // getting album data
      this._spotifyService.getTracks(this.albumID).subscribe((data: any) => {
        this.tracksDetails = data.items;
        console.log(this.tracksDetails);
      });
    })
  }
}
