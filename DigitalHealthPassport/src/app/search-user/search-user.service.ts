import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenstorageService } from '../tokenstorage.service';

@Injectable({
  providedIn: 'root'
})
export class SearchUserService {

  base_url = "https://dhp-server.herokuapp.com/api/issuer/search";
  userid_url = "624cc5e9613410e0bb2a26ad"
  
  constructor(private http: HttpClient,private tokenstorageservice: TokenstorageService) { }

    searchUser(dhpid: any): Observable<any> {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${this.tokenstorageservice.getToken()}`);
      return this.http.get(this.base_url + '/' + dhpid + '/' + this.userid_url , { headers: headers })
    }


}
