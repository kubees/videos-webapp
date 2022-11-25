import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlaylistDTO } from '../models/playlist.dto';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PlaylistServiceService {

  constructor(private httpClient: HttpClient) { }

  fetchPlaylists(): Observable<PlaylistDTO[]> {
    return this.httpClient.get<PlaylistDTO[]>(`${environment.apiURL}`)
  }
}
