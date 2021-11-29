import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-succes-action-modal',
  templateUrl: './succes-action-modal.component.html',
  styleUrls: ['./succes-action-modal.component.sass']
})
export class SuccesActionModalComponent implements OnInit {
  @Input() action: string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
