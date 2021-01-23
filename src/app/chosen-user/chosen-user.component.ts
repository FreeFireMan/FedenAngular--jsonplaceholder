import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-chosen-user',
  templateUrl: './chosen-user.component.html',
  styleUrls: ['./chosen-user.component.css']
})
export class ChosenUserComponent implements OnInit {

  // chosenId: number;
  chosenUser: User;

  constructor(
    private activatedRoute: ActivatedRoute, private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      // this.chosenId = +value;
      this.userService.getUserById(+value).subscribe(user => this.chosenUser = user);
  });


}


}
