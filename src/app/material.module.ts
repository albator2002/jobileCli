/**
 * Created by Alain on 2017-04-17.
 */
import { NgModule } from '@angular/core';
import {MdButtonModule, MdCheckboxModule,MdSidenavModule,MdToolbarModule,MdInputModule,MdListModule,MdDialogModule,MdTabsModule} from '@angular/material';

@NgModule({
    imports: [MdButtonModule, MdCheckboxModule,MdSidenavModule,MdToolbarModule,MdInputModule,MdListModule,MdDialogModule,MdTabsModule],
    exports: [MdButtonModule, MdCheckboxModule,MdSidenavModule,MdToolbarModule,MdInputModule,MdListModule,MdDialogModule,MdTabsModule],
})
export class MaterialModule { }