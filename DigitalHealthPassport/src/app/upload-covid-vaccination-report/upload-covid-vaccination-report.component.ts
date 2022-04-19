import { Component, OnInit } from '@angular/core';
import { UploadCovidVaccinationReportService } from './upload-covid-vaccination-report.service';

@Component({
  selector: 'app-upload-covid-vaccination-report',
  templateUrl: './upload-covid-vaccination-report.component.html',
  styleUrls: ['./upload-covid-vaccination-report.component.css']
})
export class UploadCovidVaccinationReportComponent implements OnInit {

  file: File | null = null;

  constructor(private covidreportservice: UploadCovidVaccinationReportService) { }

  onFilechange(event: any) {
    console.log(event.target.files[0])
    this.file = event.target.files[0]
  }
  
  upload() {
    // if (this.file) {
      let covidreport = {
        metaData: {
          "report": "vaccination", "by": "phizer"
        },
        holderDHPId:"DHP-175f9124",
        file: this.file
      }
      this.covidreportservice.uploadfile(covidreport).subscribe((resp: any) => {
        alert("Uploaded");
        console.log('response',resp);
      })
    }
    ngOnInit(){
    }
  }



  


