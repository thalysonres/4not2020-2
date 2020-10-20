import { Component, OnInit, Input } from '@angular/core';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.scss']
})
export class MainToolbarComponent implements OnInit {
  //Atributos @Input() servem para receber valores do componete pai
  @Input() appName : string

  constructor() { }

  ngOnInit(): void {
  }

}
