import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { PartnersService } from 'src/app/core/services/partners.service';
import { AddEditModalComponent } from 'src/app/shared/add-edit-modal/add-edit-modal.component';

@Component({
  selector: 'dashboard-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent {

 public dataSource = new MatTableDataSource<any>();
 public displayedColumns: string[] = [
   'name',
   'repository',
   'delete',
 ];
 public dataRowAssociate: any;

 private $unsubscribe = new Subject<void>();

 constructor(
   private router: Router,
   private partnerService: PartnersService,
   private _liveAnnouncer: LiveAnnouncer,
   private dialog: MatDialog,
 ) { }

 @ViewChild(MatPaginator) paginator!: MatPaginator;
 @ViewChild(MatSort) sort!: MatSort;

 ngOnInit(): void {
   this.getPartners();
 }

 ngOnDestroy(): void {
   this.$unsubscribe.next();
   this.$unsubscribe.complete();
 }

 public goToAuth() {
   this.router.navigate(['/auth']);
 }

 openDialog() {
   this.dialog.open(AddEditModalComponent);
 }

 public onEdit(associate: any) {
  console.log("Associado", associate);
  this.dataRowAssociate = associate;
   const dialogConfig = new MatDialogConfig();
   const dialog = this.dialog.open(AddEditModalComponent, dialogConfig);
 }

 public announceSortChange(sortState: Sort) {
   if (sortState.direction) {
     this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
   } else {
     this._liveAnnouncer.announce('Sorting cleared');
   }
 }

 private getPartners(): void {
   this.partnerService.getListPartners()
     .pipe(takeUntil(this.$unsubscribe))
     .subscribe({
       next: (res) => {
         this.dataSource = new MatTableDataSource<any>(res);
         this.dataSource.sort = this.sort;
         this.dataSource.paginator = this.paginator;
       },
       error: (err) => {
         console.error(err);
       }
     });
 }

 public onDelete(id: number): void {
   this.partnerService
     .deletePartner(id)
     .pipe(takeUntil(this.$unsubscribe))
     .subscribe({
       next: () => this.getPartners(),
     });
 }

 onEditRow(row: any) {
  console.log("Linha", row)
 }

}
