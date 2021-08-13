import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('fr') signupForm: NgForm;

  defaultChoice = "teacher";
  answer = "";
  genders = ['male', 'female'];
  user = {
    username:"",
    email:"",
    secretQuestion:"",
    answer:"",
    gender:""
  }

  submited = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData:
    //   {
    //     gender: "male",
    //     username: suggestedName,
    //     email: "El@Dupa.com"
    //   },
    //   userData2: {
    //     secret: 'pet',
    //     questionAnswer: "GhostFarter"
    //   }
    // })
    this.signupForm.form.patchValue({userData:{username:suggestedName},userData2:{secret:"pet"}})

  }

  // onSubmit(form:NgForm){
  //   console.log("Submitted! ", form)
  // }

  onSubmit() {
    console.log("Submitted 2 : ", this.signupForm)
    console.log("secret 2 : ", this.signupForm.value)

    this.submited = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.gender=this.signupForm.value.userData.gender;
    this.user.email=this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.userData2.secret;
    this.user.answer=this.signupForm.value.userData2.questionAnswer;

    this.signupForm.setValue({userData2:{secret:"teacher",questionAnswer:""},userData:{username:"Blanky Mac Blinkblank",email:"i-mister@blank.com",gender:"male"}}); //
    setTimeout(() => {
      this.signupForm.reset();
    },1500)
  }
}
