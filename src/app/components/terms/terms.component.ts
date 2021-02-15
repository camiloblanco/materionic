import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MaterialModule } from '../../modules/material/material.module';



@Component({
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss'],
})
export class TermsComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  closeModal(){
    this.modalController.dismiss();
  }

}
