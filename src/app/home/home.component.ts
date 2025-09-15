import { CommonModule } from '@angular/common';
import { NgModule, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
    posts: any[] = []; 
    a : number =0;
    b : number = 0;
    result: number = 0;

    constructor(private api:ApiService){};

    ngOnInit(){
      this.api.getPosts().subscribe((data: any[]) =>this.posts=data);
    }

    calculate(){
      this.result = this.api.getAdd(this.a,this.b);
    }

}
