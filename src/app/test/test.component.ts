import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/Http';
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  
})
export class TestComponent implements OnInit {

  product :any;
  id 
  constructor(private http : Http, private route : Router ){ }

  ngOnInit(){
    this.loadList()
  }
    loadList(){

      
          this.http.get("http://wiztalk.co/api/vendor/listproduct")
          .subscribe(
          result => {
            this.product = result.json();
            console.log(this.product);
          },
          error => {
            console.log("Get product error");
          }
          )
          
        
        }
      }