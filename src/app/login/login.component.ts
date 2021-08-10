import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  } 
  email:string = "";  //document.queryselector
  password:string = "";

  login(){
   // alert("Login button clicked ");   
    // alert("email +this.email");      
    // alert("password + this.password");  
    if(this.email== ""){
      alert("email cannot be blank"); 
     }else if(this.password.length < 8 ){
       alert("password must be greater than 8 characters");
     }
     else{
       alert("login successfull");
       window.location.href="index.html"
     }
  }

}
