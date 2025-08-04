import { Component, EventEmitter, Output ,OnInit, Input} from '@angular/core';
import {HelperUser} from '../../models/helper.model';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../shared/material.module';
import { HelpersService } from '../../services/helpers.service';

@Component({
  selector: 'app-helper-list',
  standalone: true,
  imports: [CommonModule,MaterialModule],
  templateUrl: './helper-list.component.html',
  styleUrl: './helper-list.component.scss'
})
export class HelperListComponent {
  @Input() helperUsers: HelperUser[] = [];
  @Output() selectedHelper = new EventEmitter<HelperUser>();
  constructor(private HelperService: HelpersService){} 
  onSelect(helper : HelperUser){
    this.selectedHelper.emit(helper);
  }
}


