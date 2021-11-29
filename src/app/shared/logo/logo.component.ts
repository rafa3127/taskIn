import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.sass']
})
export class LogoComponent implements OnInit {
  @Input() logoVWWidth: number =40 
  @Input() square: boolean = false
  @Input() primary: boolean = false
  @Input() light: boolean = false
  @Input() text: boolean = true
  width: string = ""
  fontSize: string= ""
  circleFontSize: string =""
  constructor() {
  }

  ngOnInit(): void {
    this.width = `width: ${this.logoVWWidth}vw;`
    this.fontSize = `font-size: ${this.logoVWWidth/4}vw`
    const circleFS: string = this.square ? `font-size: ${this.logoVWWidth}vw` :this.fontSize
    this.circleFontSize =circleFS
  }

}
