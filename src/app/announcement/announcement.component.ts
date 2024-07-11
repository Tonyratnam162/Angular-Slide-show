import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-announcement',
  standalone: true,
  imports: [],
  templateUrl: './announcement.component.html',
  styleUrl: './announcement.component.css'
})
export class AnnouncementComponent{
  @Input() data: any={};
 
  

}
