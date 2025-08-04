import { Component ,inject, OnInit} from '@angular/core';
import { HelperUser } from './../../models/helper.model';
import { CommonModule } from '@angular/common';
import { HelperDetailComponent } from '../../components/helper-detail/helper-detail.component';
import { HelperListComponent } from '../../components/helper-list/helper-list.component';
import { MatCardModule } from '@angular/material/card';
import { MaterialModule } from '../../shared/material.module';
import { AddHelperComponent } from '../add-helper/add-helper.component';
import { Router } from '@angular/router'
import { HelpersService } from '../../services/helpers.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HelperDetailComponent,HelperListComponent,MaterialModule,AddHelperComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  selectedHelper?: HelperUser;
  router = inject(Router);
  helperService = inject(HelpersService);
  helperUsers: HelperUser[] = [];
  totalCount: number = 0;
  sortTerm: string = '';
  searchTerm: string = '';
  serviceList = ['Maid','Cook','Nurse','Driver'];
  service = new FormControl('');
  organizationList = ['ASBL', 'Springs Helpers'];
  organization = new FormControl('');

  onSelectedHelper(helper: HelperUser){
    this.selectedHelper = helper;
  }
  navigateToAddHelper() {
    this.router.navigate(['/add-helper']);
  }
  getHelperUsers() {
    this.helperService.getHelpers(this.sortTerm,this.searchTerm)
      .subscribe((helpers: HelperUser[]) => {
        this.helperUsers = helpers;
        this.selectedHelper = this.helperUsers.length > 0 ? this.helperUsers[0] : undefined;
      });
    
  }
  getCount(){
    this.helperService.getCount()
    .subscribe((response)=>{
      this.totalCount = response.count;
    })
  }
  onSortChange(sortTerm: string){
    this.sortTerm = sortTerm;
    this.getHelperUsers();
  }

  ngOnInit(){
    this.getHelperUsers();
    this.getCount();
  }

}

