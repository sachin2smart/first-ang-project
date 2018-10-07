import { Component } from '@angular/core';

@Component({
  selector: 'app-root',

//  templateUrl: './app.component.html',
  template : `


    <div style="background:pink;padding-top:100px;padding-bottom:100px;">
        <h1 style="color:green;text-align:center;">
            It certainly works !!!
        </h1>
    </div>

      <ul>
        <li *ngFor="let team of teams;
                    let i=index;
                    let last=last;
                    let first=first;
                    let even=even;
                    let odd=odd;
                    ">

              {{i}} . {{team.baseball}}
              <font color="red">|{{first}}<strong *ngIf="first">  First  </strong></font>
              <font color="geen">|{{last}}<strong *ngIf="last">   Last   </strong></font>
              <font color="blue">|{{even}}<strong *ngIf="even">   Even   </strong></font>
              <font color="magenta">|{{odd}}<strong *ngIf="odd">  Odd    </strong></font>

        </li>
      </ul>

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
}

/*
     import { Sanitizer } from '@angular/core';

    @Sanitizer({
      selector : 'greet',
      template : '<h2>{{titleForSanitizer}}</h2>',
      styleUrls : ['./app.component.css']
    })
    class greet {
       titleForSanitizer = 'Sanitizer exported.';
    }
*/

