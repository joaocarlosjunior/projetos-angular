import { NgModule } from "@angular/core";
import { BalanceCardComponent } from "./balance-card/balance-card.component";
import { CreditCardComponent } from './credit-card/credit-card.component';
import { DebitCardComponent } from './debit-card/debit-card.component';
import { ClientInfosCardComponent } from './client-infos-card/client-infos-card.component';
import { TitleCardComponent } from './title-card/title-card.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { CardLineComponent } from './card-line/card-line.component';

@NgModule({
    declarations: [
        BalanceCardComponent,
        CreditCardComponent,
        DebitCardComponent,
        ClientInfosCardComponent,
        TitleCardComponent,
        ItemCardComponent,
        CardLineComponent,
    ],
    exports:[
        BalanceCardComponent,
        CreditCardComponent,
        DebitCardComponent,
        ClientInfosCardComponent,
    ]
})
export class CardsMoudle{}