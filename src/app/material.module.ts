/**
 * Created by Alain on 2017-04-17.
 */
import { NgModule } from '@angular/core';
import {MdButtonModule, MdCheckboxModule,MdSidenavModule,MdToolbarModule,MdInputModule,MdListModule,MdDialogModule,MdTabsModule,MdCardModule} from '@angular/material';

@NgModule({
    imports: [MdButtonModule, MdCheckboxModule,MdSidenavModule,MdToolbarModule,MdInputModule,MdListModule,MdDialogModule,MdTabsModule,MdCardModule],
    exports: [MdButtonModule, MdCheckboxModule,MdSidenavModule,MdToolbarModule,MdInputModule,MdListModule,MdDialogModule,MdTabsModule,MdCardModule],
})
export class MaterialModule { }