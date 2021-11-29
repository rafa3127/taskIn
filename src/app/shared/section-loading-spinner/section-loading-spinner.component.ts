import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-loading-spinner',
  templateUrl: './section-loading-spinner.component.html',
  styleUrls: ['./section-loading-spinner.component.sass']
})
export class SectionLoadingSpinnerComponent implements OnInit {
  @Input() modal: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

}
