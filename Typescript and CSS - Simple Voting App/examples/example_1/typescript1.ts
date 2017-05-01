@Component({
    selector: 'my-app',
    template: `h5 class="class2">Angular 2 style 2 with class inside style></h5>
     styles:['
                .class2{
                    background-color:#b30000;
                    color:#4da6ff;
                }
    ']
    <h1>Angular 2 class</h1>
    <div>first name: {{ first_name }}</div>
    <div>last name: {{ last_name }}</div>
    <div>id: {{ id }}</div>`
})

export class AppComponent{
        first_name:string;
        last_name:string;
        id: number;
        constructor(){
            this.first_name='Maria';
            this.last_name='Papadopoulou';
            this.id=15;
        }
}