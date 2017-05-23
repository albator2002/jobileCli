/**
 * Created by Alain on 2017-04-17.
 */
import { NgModule } from '@angular/core';
import {MdButtonModule, MdCheckboxModule,MdSidenavModule,MdToolbarModule,MdInputModule,MdListModule,MdDialogModule,MdTabsModule,MdCardModule,MdSelectModule} from '@angular/material';

@NgModule({
    imports: [MdButtonModule, MdCheckboxModule,MdSidenavModule,MdToolbarModule,MdInputModule,MdListModule,MdDialogModule,MdTabsModule,MdCardModule,MdSelectModule],
    exports: [MdButtonModule, MdCheckboxModule,MdSidenavModule,MdToolbarModule,MdInputModule,MdListModule,MdDialogModule,MdTabsModule,MdCardModule,MdSelectModule],
})
export class MaterialModule { }