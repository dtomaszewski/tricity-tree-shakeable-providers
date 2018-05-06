import { Component, OnInit } from '@angular/core';
import { TricityService } from '../../shared/tricity.service';

@Component({
  selector: 'app-gdansk',
  templateUrl: './gdansk.component.html',
  styleUrls: ['./gdansk.component.css']
})
export class GdanskComponent implements OnInit {

  constructor(private tricityService: TricityService) { }

  ngOnInit() {
  }

}
