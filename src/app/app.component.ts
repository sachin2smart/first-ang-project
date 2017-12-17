import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
//  Assignment 1
//  templateUrl: './app.component.html',

// Assignment 2
//  template : `
//
//
//    <div style="background:pink;padding-top:100px;padding-bottom:100px;">
//        <h1 style="color:green;text-align:center;">
//            It certainly works !!!
//        </h1>
//    </div>
//
//      <ul>
//        <li *ngFor="let team of teams;
//                    let i=index;
//                    let last=last;
//                    let first=first;
//                    let even=even;
//                    let odd=odd;
//                    ">
//
//              {{i}} . {{team.baseball}}
//              <font color="red">|{{first}}<strong *ngIf="first">  First  </strong></font>
//              <font color="geen">|{{last}}<strong *ngIf="last">   Last   </strong></font>
//              <font color="blue">|{{even}}<strong *ngIf="even">   Even   </strong></font>
//              <font color="magenta">|{{odd}}<strong *ngIf="odd">  Odd    </strong></font>
//
//        </li>
//      </ul>
//
//  `,

// Assignment 3
//  template: `
//    <h3 style="text-align:center;font-color:red"> On next assignment !!!</h3>

//   Assignment 4
//  template : `
//
//    <h1 *ngIf="title" style="color:green;">* Title : {{title}}</h1>
//
//    <h1 *ngIf="!title_empty">* Title :  Sorry, the Title is not available !!!</h1>
//
//    <h1 *ngIf="!title; else myTemplate" style="color:yellow">Yellow color will not get asigned. This text will be ignored.</h1>
//
//    <ng-template #myTemplate><h1 style="color:blue">* Title : An empty title assigned.</h1></ng-template>
//
//    <div *ngIf="title; then trueTemplate else falseTemplate">
//        This text will not be displayed.
//    </div>
//
//    <ng-template #trueTemplate><h1 style="color:pink">* Title : A true title is assigned.</h1></ng-template>
//
//    <div *ngIf="!title; then trueTemplate else falseTemplate">
//        This text will not be displayed.
//    </div>
//
//    <ng-template #falseTemplate><h1 style="color:brown">* Title : A false title is assigned.</h1></ng-template>
//
//',

//  Assignment : 5
  template : `
  <div [ngSwitch]="likes">
    <div *ngSwitchCase = "'baseball'"> Display baseball content.</div>
    <div *ngSwitchCase = "'football'"> Display football content.</div>
    <div *ngSwitchCase = "'basketball'"> Display basketball content.</div>
  </div>
`,

  styleUrls: ['./app.component.css']
//  styles : [`
//  h1 {color :brown;}
//  `
//  ]

})
export class AppComponent {
  title = 'app works !!';
  teams = [
              {baseball: 'Indians'},
              {baseball: 'Mets'},
              {baseball: 'Yankees'},
              {baseball: 'Jamees'},
          ];
  likes = 'baseball';
}


