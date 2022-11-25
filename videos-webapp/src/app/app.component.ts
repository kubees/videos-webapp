import { Component, OnInit } from '@angular/core';
import { PlaylistDTO } from './shared/models/playlist.dto';
import { PlaylistServiceService } from './shared/services/playlist-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private readonly playlistService: PlaylistServiceService) { }
  playlists: PlaylistDTO[] = [];

  ngOnInit(): void {
    this.playlistService.fetchPlaylists().subscribe(
      (data) => {
        this.playlists = data;
        console.log(data);
      }
    )
  }
}
