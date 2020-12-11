import { Component, OnInit } from '@angular/core';
import _ from 'lodash';
import { MESSAGES } from '../shared/constants/messages';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  pipes = '';
  angular = '';
  variable: '';
  pipe = '';
  output = '';
  uppercase = '';
  lowercase = '';
  array = [1, 2, 3, 4, 5, 6];
  slice = '';
  cap = '';
  saitama = '';
  PI = Math.PI;
  heroes: string[] = []; 
  percent: number = 0;
  salary: number = 0;
  json = '';
  hJson: string[] = [];
  lan: string = 'es';
  myName = '';
  myPromise = new Promise <string> ((res) => {
    setTimeout(() => {
      res('data arrived');
    },3500)
  })

  thisDay: Date = new Date();
  sd = '';
  videoURL = '';
  activate = true;
  constructor() { }

  ngOnInit(): void {
    this.pipes = _.get(MESSAGES, 'HOME.PIPES');
    this.angular = _.get(MESSAGES, 'HOME.ANGULAR');
    this.variable = _.get(MESSAGES, 'HOME.VARIABLE');
    this.pipe = _.get(MESSAGES, 'HOME.PIPE');
    this.output = _.get(MESSAGES, 'HOME.OUTPUT');
    this.uppercase = _.get(MESSAGES, 'HOME.UPPERCASE');
    this.lowercase = _.get(MESSAGES, 'HOME.LOWERCASE');
    this.slice = _.get(MESSAGES, 'HOME.SLICE');
    this.cap = _.get(MESSAGES, 'HOME.HEROES.CAP');
    this.saitama = _.get(MESSAGES, 'HOME.HEROES.SAITAMA');
    this.heroes = [_.get(MESSAGES, 'HOME.HEROES.CAP'), _.get(MESSAGES, 'HOME.HEROES.SAITAMA'),
    _.get(MESSAGES, 'HOME.HEROES.IRON'), _.get(MESSAGES, 'HOME.HEROES.SPIDER'), _.get(MESSAGES, 'HOME.HEROES.DARE')];
    this.percent = _.get(MESSAGES, 'HOME.PERCENT');
    this.salary = _.get(MESSAGES, 'HOME.SALARY');
    this.json = _.get(MESSAGES, 'HOME.JSON');
    this.hJson = _.get(MESSAGES, 'HOME.HEROES');
    this.myName = _.get(MESSAGES, 'HOME.MY_NAME');
    this.sd = _.get(MESSAGES, 'HOME.SD')
    this.videoURL = _.get(MESSAGES, 'HOME.VIDEO_URL');
  }

  es() {
    this.lan = 'es'
  }
  en() {
    this.lan = 'en'
  }
  jp() {
    this.lan = 'ja'
  }

}
