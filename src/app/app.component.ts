import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServiceService } from './service.service';
import { CustomdirectiveDirective } from './customdirective.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CustomdirectiveDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
constructor(private service : ServiceService){
  
}

  title = 'unittestingdemo';
  data :number = 0
  getdata():void{
    this.data = this.service.getdata();
    
  }
}
