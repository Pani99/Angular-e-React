import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  memberData=[
    {name:'Gianni',email:'giannibest@gmail.com'},
    {name:'Todd',email:'todd@gmail.com'},
    {name:'Dani',email:'fireproof@gmail.com'},
    {name:'Eustacchio',email:'orecchio@gmail.com'}
  ]
  users:any;
  constructor(private userData:UserdataService){
    console.warn(userData.users());
    this.users=userData.users();
    
  }

  ngOnInit(): void {
  }

}
