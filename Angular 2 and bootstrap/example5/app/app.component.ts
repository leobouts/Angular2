import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Angular 2 and Bootstrap</h1>
  
 
  <div class="container">
  <div class="row">
  <div class="col-lg-10     col-md-10 col-sm-10 col-xs-10  "  style="background-color:#1f509e;">
<h3  style="color:white;text-align:center;">Buttons </h3>
</div>
  </div>
  <div class="row">
      <div class="col-lg-10   col-md-10   col-sm-10   col-xs-10"   style="background-color:red;color:blue"> {{ data }}1
      <div class="row">
<div class="col-lg-8   col-md-8 col-sm-8 col-xs-8 "   style="background-color:yellow;color:blue"> {{ data }}2
      <br>
     <p>Το Lorem Ipsum είναι απλά ένα κείμενο χωρίς νόημα για τους επαγγελματίες της τυπογραφίας και στοιχειοθεσίας. 
      <cite>http://el.lipsum.com/</cite></p>


<button type="button" class="btn btn-default">Default</button>
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-link">Link</button>
<br>

<button type="button" class="btn btn-default active">Default</button>
<button type="button" class="btn btn-primary disabled ">Primary</button>
<button type="button" class="btn btn-success btn-xs">Success</button>
<button type="button" class="btn btn-info btn-lg">Info</button>
<button type="button" class="btn btn-warning btn-lg">Warning</button>
<button type="button" class="btn btn-danger btn-sm">Danger</button>
<button type="button" class="btn btn-link">Link btn-lg</button>


      </div>

<div class="col-lg-4   col-md-4 col-sm-4 col-xs-4 "   style="background-color:green;color:blue"> {{ data }}3
      <br>
      <p>Το Lorem Ipsum είναι απλά ένα κείμενο χωρίς νόημα για τους επαγγελματίες της τυπογραφίας και στοιχειοθεσίας. Το Lorem Ipsum είναι το επαγγελματικό πρότυπο όσον αφορά το κείμενο χωρίς νόημα, από τον 15ο αιώνα, όταν ένας ανώνυμος τυπογράφος πήρε ένα δοκίμιο και ανακάτεψε τις λέξεις για να δημιουργήσει ένα δείγμα βιβλίου. Όχι μόνο επιβίωσε πέντε αιώνες, αλλά κυριάρχησε στην ηλεκτρονική στοιχειοθεσία, παραμένοντας με κάθε τρόπο αναλλοίωτο. Έγινε δημοφιλές τη δεκαετία του '60 με την έκδοση των δειγμάτων της Letraset όπου περιελάμβαναν αποσπάσματα του Lorem Ipsum, και πιο πρόσφατα με το λογισμικό ηλεκτρονικής σελιδοποίησης όπως το Aldus PageMaker που περιείχαν εκδοχές του Lorem Ipsum.
      <cite>http://el.lipsum.com/</cite></p>
      </div>
      </div>

      </div>


    </div>
    </div>

  `,
})
export class AppComponent  { 
  data= 'Column';
 }