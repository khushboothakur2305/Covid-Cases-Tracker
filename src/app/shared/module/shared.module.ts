import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { SnackbarService } from '../services/snackbar.service';
@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule],
  providers: [SnackbarService],
  exports: [CommonModule, MaterialModule],
})
export class SharedModule {}
