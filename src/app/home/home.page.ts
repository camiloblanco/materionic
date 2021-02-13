import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TermsComponent } from '../components/terms/terms.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, public modalController: ModalController) {
    
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: TermsComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  //Metodo en el boton entrar para enlazar a pages/main
  enterMain(){
    this.router.navigateByUrl("main");
  }

}
