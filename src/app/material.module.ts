/**
 * Created by Alain on 2017-04-17.
 */
import { NgModule } from '@angular/core';
import {MatSlideToggleModule,MatButtonModule, MatCheckboxModule,MatSidenavModule,MatToolbarModule,MatInputModule,MatListModule,MatDialogModule,MatTabsModule,MatCardModule,MatSelectModule} from '@angular/material';

@NgModule({
    imports: [MatSlideToggleModule,MatButtonModule, MatCheckboxModule,MatSidenavModule,MatToolbarModule,MatInputModule,MatListModule,MatDialogModule,MatTabsModule,MatCardModule,MatSelectModule],
    exports: [MatSlideToggleModule,MatButtonModule, MatCheckboxModule,MatSidenavModule,MatToolbarModule,MatInputModule,MatListModule,MatDialogModule,MatTabsModule,MatCardModule,MatSelectModule],
})
export class MaterialModule { }