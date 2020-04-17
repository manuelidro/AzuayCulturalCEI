import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    SignupRoutingModule,
  ],
  declarations: [SignupComponent]
})
export class SignupModule { }
