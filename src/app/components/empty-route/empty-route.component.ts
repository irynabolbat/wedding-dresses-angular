import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'empty-page',
  templateUrl: './empty-route.component.html',
  styleUrls: ['./empty-route.component.scss'],
  standalone: true,
  imports: [RouterModule],
})
export class EmptyPage {}
