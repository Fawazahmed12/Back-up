import { Component } from '@angular/core';

@Component({
  selector: 'app-cicle-program',
  templateUrl: './cicle-program.component.html',
  styleUrls: ['./cicle-program.component.scss']
})
export class CicleProgramComponent {
  circleCount = 0;
  circles: { color: string }[] = [];

  onAddClick() {
    this.circles.push({ color: 'black' });
  }

  onCircleClick(circle: { color: string }) {
    if (circle.color === 'black') {
      circle.color = 'grey';
      this.circleCount++;
    }
    else {
      // this.circles.splice(this.circles.indexOf(circle), 1);
      circle.color === 'black'
      this.circleCount--;
    }
  }
}
