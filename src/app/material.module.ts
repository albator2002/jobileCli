/**
 * Created by Alain on 2017-04-17.
 */
import { NgModule } from '@angular/core';
import {MdButtonModule, MdCheckboxModule,MdSidenavModule,MdToolbarModule,MdInputModule,MdListModule} from '@angular/material';

@NgModule({
    imports: [MdButtonModule, MdCheckboxModule,MdSidenavModule,MdToolbarModule,MdInputModule,MdListModule],
    exports: [MdButtonModule, MdCheckboxModule,MdSidenavModule,MdToolbarModule,MdInputModule,MdListModule],
})
export class MaterialModule { }