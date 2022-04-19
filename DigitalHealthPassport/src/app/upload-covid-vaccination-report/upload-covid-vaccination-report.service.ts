import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadCovidVaccinationReportService {

  base_url = "https://dhp-server.herokuapp.com/api/issuer/intake/624cc5e9613410e0bb2a26ad";

  constructor(private htc: HttpClient) { }

  uploadfile(usrInfo: any): Observable<any> {
    const reqOptns = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }
    console.log(JSON.stringify(usrInfo))
    return this.htc.post(this.base_url, JSON.stringify(usrInfo), reqOptns)
  }
}
