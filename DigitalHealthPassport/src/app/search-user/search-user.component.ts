import { Component, OnInit } from '@angular/core';
import { SearchUserService } from './search-user.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  dhpid: any;


  constructor(private searchuserservice: SearchUserService) {
   }

  searchUser(){
    console.log('dhpid',this.dhpid);
this.searchuserservice.searchUser(this.dhpid).subscribe((data: any) => {
  console.log('userdata',data);
})
  }

  ngOnInit() {
  }

}
