import {Component} from '@angular/core';
import {CustomScene} from './core/scene';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'three-portfolio';
  ngAfterViewInit() {
    CustomScene.createScene()
  }
}
