/**
 * Created by Alain on 2017-04-17.
 */
import { NgModule } from '@angular/core';
import {MdButtonModule, MdCheckboxModule,MdSidenavModule,MdToolbarModule} from '@angular/material';

@NgModule({
    imports: [MdButtonModule, MdCheckboxModule,MdSidenavModule,MdToolbarModule],
    exports: [MdButtonModule, MdCheckboxModule,MdSidenavModule,MdToolbarModule],
})
export class MaterialModule { }