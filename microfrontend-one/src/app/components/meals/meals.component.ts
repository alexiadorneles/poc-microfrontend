import { Component, Inject, OnInit } from '@angular/core';
import { queryInjector } from 'src/app/injectors/query.injector';
import { PermissionQuery } from 'src/app/state/queries';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss'],
})
export class MealsComponent implements OnInit {
  public userHasPermission = false;

  constructor(
    @Inject(queryInjector.getQueryInjector('permission'))
    private permissionQuery: PermissionQuery
  ) {}

  ngOnInit(): void {
    this.permissionQuery.userHasMenuViewRole$.subscribe((value) => {
      this.userHasPermission = value;
    });
  }
}
