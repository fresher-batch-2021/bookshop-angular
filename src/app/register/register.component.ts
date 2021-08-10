import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   name : string = "";
   email :string = "";
   password : string = "";
   confirmpassword : string = "";
   
  

register(){
if(this.name== ""){
  alert("invalid name");
}
if(this.email==""){
  alert("email cannot be blank");
}
if(this.password.length < 8){
  alert("password must be greater than 8 characters");
}
if(this.password!=this.confirmpassword){
  alert("password not matched");
}
else{
  alert("successfully registered");
  window.location.href= "Login"
}
}
}

