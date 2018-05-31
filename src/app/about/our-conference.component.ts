import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-conference',
  templateUrl: './our-conference.component.html',
  styleUrls: ['./our-conference.component.css']
})
export class OurConferenceComponent implements OnInit {
  markdownString: string;
  constructor() { }

  ngOnInit() {
    this.markdownString = ''.concat(
      '# This is Markdown',
      '\n This is another line',
      '\n [This](https://google.com/) is a link!',
      '\n\n ![alt image](https://assets.vogue.com/photos/59922ba8068a3216afff9d89/master/pass/00-tout-culver-city-california-travel-guide.jpg "Culver City Hotel")'
    );
  }

}
