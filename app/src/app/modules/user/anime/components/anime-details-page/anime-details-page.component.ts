import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-anime-details-page',
  templateUrl: './anime-details-page.component.html',
  styleUrls: ['./anime-details-page.component.css'],
})
export class AnimeDetailsPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    var height = $('.anime-info').height();
    $('.black-div').css('height', 'calc(' + height + 'px' + ' - 18vh');
    $(window).resize(function () {
      var height = $('.anime-info').height();
      $('.black-div').css('height', 'calc(' + height + 'px' + ' - 18vh');
    });
  }
}
