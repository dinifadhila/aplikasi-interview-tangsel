import { Component, OnInit} from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/Http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Response } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {

  constructor(private http : Http, private route : Router, respon:RequestOptions) { }

  ngOnInit() {
  }
  Login(f : NgForm){
    
        if(f.value.userId=="" || f.value.password==""){
          return console.log('User name and password cannot be empty.')

        }
        else{
          let obj = {
            userId : f.value.userId,
            password : f.value.password
          }
      
          let header = new Headers({ "Content-Type" : "application/json" });
          let options = new RequestOptions({ headers : header });
      
          this.http.post("https://candidate-test-api.azurewebsites.net/api/user/login", obj, options)
          .subscribe(
            result => {
      
             
                localStorage.setItem("token", result.json().accessToken);
                localStorage.setItem("userId", result.json().user);
                console.log(result.json().accessToken)
                console.log(result.json().user)
                this.route.navigate(['']);
                     
            },
            error =>{
              if(error =200){
              console.log("User not found.")}
              if(error = 400){
              console.log("User not found.")
              }
              if(error = 400){
                console.log("User not found.")
              }
              
            }
          );
        }
      }
    }


