import { Component, OnInit } from '@angular/core';
import { TricityService } from '../../shared/tricity.service';

@Component({
  selector: 'app-sopot',
  templateUrl: './sopot.component.html',
  styleUrls: ['./sopot.component.css']
})
export class SopotComponent implements OnInit {

  // Remove this dependency to see that common.js chunk with Gdansk service
  // is not created any more
  constructor(private tricityService: TricityService) { }

  ngOnInit() {
  }

}
