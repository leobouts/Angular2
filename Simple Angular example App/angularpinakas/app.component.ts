import { Component } from '@Angular/core';
@Component({
    selector:'my-app',
    template:` <h1> Hello again 222222 </h1>
                <table>
                    <tr>
                        <th>{{field1}}</th>
                        <th>{{field2}}</th>
                        <th>{{field3}}</th>
                    </tr>
                    <tr>
                        <td>{{p1f1}}</td>
                        <td>{{p1f2}}</td>
                        <td>{{p1f3}}</td>
                    </tr>
                    <tr>
                        <td>{{p2f1}}</td>
                        <td>{{p2f2}}</td>
                        <td>{{p2f3}}</td>
                    </tr>
                </table>
                `
     })
     export class AppComponent {
         field1 = 'product code';
         field2 = 'product name';
         field3 = 'producr price';
         p1f1 = 'ab234';
         p1f2 = 'tv ex-2345 led';
         p1f3 = '256 euros';
         p2f1 = 'ab234';
         p2f2 = 'tv ex-2345 led';
         p2f3 = '256 euros';
     }