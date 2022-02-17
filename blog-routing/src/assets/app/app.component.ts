import { Component } from '@angular/core';
import { UserdataService } from './services/userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-routing';
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
}
