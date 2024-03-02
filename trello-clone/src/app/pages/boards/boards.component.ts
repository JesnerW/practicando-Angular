import { Component, OnInit } from '@angular/core';
import { faBox, faWaveSquare, faClock, faAngleUp, faAngleDown, faHeart, faBorderAll, faUsers, faCog } from '@fortawesome/free-solid-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html'
})
export class BoardsComponent implements OnInit {
  faBox = faBox;
  faWaveSquare = faWaveSquare;
  faClock = faClock;
  faTrello = faTrello;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faHeart = faHeart;
  faBorderAll = faBorderAll;
  faUsers = faUsers;
  faCog = faCog;

  items = [
    {
      label: 'Item 1',
      items: [
        {
          label: 'SubItem 1.1'
        },
        {
          label: 'SubItem 1.2'
        }
      ]
    },
    {
      label: 'Item 2',
      items: [
        {
          label: 'SubItem 2.1'
        }
      ]
    },
    {
      label: 'Item 3',
      items: [
        {
          label: 'SubItem 3.1'
        },
        {
          label: 'SubItem 3.2'
        },
        {
          label: 'SubItem 3.3'
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
