import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TokenstorageService } from '../tokenstorage.service';

@Injectable({
  providedIn: 'root'
})
export class SearchUserService {

  base_url = "https://dhp-server.herokuapp.com/api/issuer/search";
  userid_url = "625f570f0a93881dc1d883e2"
  
  user_token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjVmNTcwZjBhOTM4ODFkYzFkODgzZTIiLCJleHBpcnkiOjE2NTA0MzM4NjQ4MDUsImlhdCI6MTY1MDQzMzg2NH0.N_UrpCRn94tYZUBvbYjZlE4zycTO-fz1RrhD_CbBOm8";

 approvalStageMessage = new BehaviorSubject([]);
 currentApprovalStageMessage = this.approvalStageMessage.asObservable();
  
  constructor(private http: HttpClient,private tokenstorageservice: TokenstorageService) { }

    searchUser(dhpid: any): Observable<any> {
      // const headers = new HttpHeaders().set('Authorization', `Bearer ${this.user_token}`);
      return this.http.get(this.base_url + '/' + dhpid + '/' + this.userid_url)
    }

    updateApprovalMessage(message: any) {
      this.approvalStageMessage.next(message)
      }


}
