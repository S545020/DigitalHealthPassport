import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@Component({
  selector: 'app-qrcode-reader',
  templateUrl: './qrcode-reader.component.html',
  styleUrls: ['./qrcode-reader.component.css']
})
export class QrcodeReaderComponent implements OnInit {


  scanResult: any='';

  title = 'ANGULARQRSCANNER';

  onCodeResult(result:string)
  {
this.scanResult=result;
console.log('scanresult',this.scanResult);
  }


  ngOnInit() {
  }

}

