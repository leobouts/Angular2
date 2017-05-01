import { Component } from '@Angular/core';
@Component({
    selector:'my-app',
    template:` <h1> angular 2 test </h1>
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
    field1 = 'salamia';
    field2 = 'kaseria';
    field3 = 'plhrwneis';
    p1f1 = '1';
    p1f2 = 'mpeikon';
    p1f3 = '7/kilo euro';
    p2f1 = '2';
    p2f2 = 'gouda';
    p2f3 = '8/kilo euro';
 }