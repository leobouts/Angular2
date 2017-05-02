import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Angular 2 and Bootstrap</h1>
  
 
  <div class="container">
  <div class="row">
  <div class="col-lg-10     col-md-12 col-sm-9 col-xs-12  "  style="background-color:#1f509e;">
<h3  style="color:white;text-align:center;">test </h3>
</div>
  </div>
  <div class="row">
      <div class="col-lg-5  col-md-4 col-sm-4 col-xs-4"   style="background-color:red;color:blue"> {{ data }}1
        <button type="button" class="btn btn-default">1</button>
        <button type="button" class="btn btn-primary">2</button>
        <button type="button" class="btn btn-success">3</button>
        <button type="button" class="btn btn-primary">4</button>
        <button type="button" class="btn btn-success">5</button>
        <br>
      </div>

      <div class="col-lg-5  col-md-4 col-sm-4 col-xs-4 "   style="background-color:green;color:blue"> {{ data }}2
        <br>
        <p>Το Lorem Ipsum είναι απλά ένα κείμενο χωρίς νόημα για τους επαγγελματίες της τυπογραφίας και στοιχειοθεσίας. Το Lorem Ipsum είναι το επαγγελματικό πρότυπο όσον αφορά το κείμενο χωρίς νόημα, από τον 15ο αιώνα, όταν ένας ανώνυμος τυπογράφος πήρε ένα δοκίμιο και ανακάτεψε τις λέξεις για να δημιουργήσει ένα δείγμα βιβλίου. Όχι μόνο επιβίωσε πέντε αιώνες, αλλά κυριάρχησε στην ηλεκτρονική στοιχειοθεσία, παραμένοντας με κάθε τρόπο αναλλοίωτο. Έγινε δημοφιλές τη δεκαετία του '60 με την έκδοση των δειγμάτων της Letraset όπου περιελάμβαναν αποσπάσματα του Lorem Ipsum, και πιο πρόσφατα με το λογισμικό ηλεκτρονικής σελιδοποίησης όπως το Aldus PageMaker που περιείχαν εκδοχές του Lorem Ipsum.
        <cite>http://el.lipsum.com/</cite></p>
      </div>
  </div>

  `,
})
export class AppComponent  { 
  data= 'Column';
 }