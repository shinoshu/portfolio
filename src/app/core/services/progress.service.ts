import { Injectable } from '@angular/core';
import { MatSpinner } from '@angular/material/progress-spinner';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root',
})
export class ProgressService {
  overlayRef: OverlayRef;

  constructor(private overlay: Overlay) {
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
    });
  }

  showProgress() {
    this.overlayRef.attach(new ComponentPortal(MatSpinner));
  }

  hideProgress() {
    this.overlayRef.detach();
  }
}
