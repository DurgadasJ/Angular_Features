import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent {
    name: String = "";
    message: String = "";

    items=['Angular', 'React' , 'Vue'];
    show = true;
    users: any;

    constructor(public userService:UserService){
      console.log(this.userService.getUser());
    };

    ngOnInit(): void {
      this.users = this.userService.getUser(); // ✅ initialized after DI
    }

    greet(){
      this.message=`Event binding is working ${this.name || 'Guest'}`;
    }

    toggle(){
      this.show = !this.show;
    }

}
