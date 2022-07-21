import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { RangeValueAccessor } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SpotifyService } from 'src/app/_services/spotify.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {

  constructor(private _activatedroute: ActivatedRoute, private _spotifyService: SpotifyService) { }

  songID: any;
  songData: any;
  ngOnInit(): void {
    this._activatedroute.paramMap.subscribe((paramMap: ParamMap) => {
      this.songID = paramMap.get('id3');
      console.log('song id');
      console.log(this.songID);

      this._spotifyService.getSongs(this.songID).subscribe((data: any) => {
        this.songData = data
        console.log(this.songData);

      });
    })
  }

  // isPlay: boolean = false;
  // onButtonClick(audioEl: HTMLAudioElement) {
  //   this.isPlay = !this.isPlay;
  //   const audioElement = document.querySelector('audio');
  // }
}
