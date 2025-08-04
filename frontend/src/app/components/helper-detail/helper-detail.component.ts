import { Component ,Input} from '@angular/core';
import { HelperUser } from '../../models/helper.model';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../shared/material.module';
import { DividerComponent } from '../../shared/divider/divider.component';
import { InfoRowComponent } from '../../shared/info-row/info-row.component';

@Component({
  selector: 'app-helper-detail',
  standalone: true,
  imports: [CommonModule,MaterialModule,DividerComponent,InfoRowComponent],
  templateUrl: './helper-detail.component.html',
  styleUrl: './helper-detail.component.scss'
})
export class HelperDetailComponent {
  @Input() helper?: HelperUser
  constructor() {}
  editHelper() {
  }
  deleteHelper(){

  }


}
