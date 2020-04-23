import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {base64ToFile, Dimensions, ImageCroppedEvent, ImageTransform} from 'ngx-image-cropper';
export interface DialogData {
  img: any;
}



@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
  panelOpenState = false;
  img: any;
  ngOnInit(): void {
    // document.body.classList.add('my-profile');
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogUploadImage, {

      data: {image: this.img}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }



}
@Component({
 templateUrl: 'dialog-image-upload.html',
  styleUrls: ['dialog-image-upload.css']
})
// tslint:disable-next-line:component-class-suffix
export class DialogUploadImage {

  constructor(
    public dialogRef: MatDialogRef<DialogUploadImage>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  imageChangedEvent: any = '';
  croppedImage: any = '';
  canvasRotation = 0;
  rotation = 0;
  scale = 1;
  showCropper = false;
  containWithinAspectRatio = false;
  transform: ImageTransform = {};

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    console.log(event, base64ToFile(event.base64));
  }

  imageLoaded() {
    this.showCropper = true;
    console.log('Image loaded');
  }

  cropperReady(sourceImageDimensions: Dimensions) {
    console.log('Cropper ready', sourceImageDimensions);
  }

  loadImageFailed() {
    console.log('Load failed');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
