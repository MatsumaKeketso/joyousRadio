import { HttpClientModule } from '@angular/common/http';

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ContactPageRoutingModule } from "./contact-routing.module";

import { ContactPage } from "./contact.page";
import { EmailComposer } from "@ionic-native/email-composer/ngx";
import { ComponentsModule } from "../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
    HttpClientModule
  ],
  declarations: [ContactPage,],
  providers: [EmailComposer],
})
export class ContactPageModule {}
