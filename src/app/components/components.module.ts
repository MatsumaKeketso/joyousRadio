import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { BlockQuoteComponent } from './block-quote/block-quote.component';

@NgModule({
    imports: [IonicModule],
    declarations: [FooterComponent, BlockQuoteComponent],
    exports: [FooterComponent, BlockQuoteComponent]
})
export class ComponentsModule{}