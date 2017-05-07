/**
 * Created by Alain on 2017-04-17.
 */
import { NgModule } from '@angular/core';
import {MdButtonModule, MdCheckboxModule,MdSidenavModule,MdToolbarModule,MdInputModule,MdListModule,MdDialogModule} from '@angular/material';

@NgModule({
    imports: [MdButtonModule, MdCheckboxModule,MdSidenavModule,MdToolbarModule,MdInputModule,MdListModule,MdDialogModule],
    exports: [MdButtonModule, MdCheckboxModule,MdSidenavModule,MdToolbarModule,MdInputModule,MdListModule,MdDialogModule],
})
export class MaterialModule { }