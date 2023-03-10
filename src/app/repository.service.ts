import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {


  constructor(private http: HttpClient) { }


  apiUri: string = 'https://localhost:7266/api/boardgame'


  getBoardGames() {
    return this.http.get(this.apiUri)
  }


}

