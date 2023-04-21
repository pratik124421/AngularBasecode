import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAddressBlockComponent } from './add-address-block.component';

describe('AddAddressBlockComponent', () => {
  let component: AddAddressBlockComponent;
  let fixture: ComponentFixture<AddAddressBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAddressBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAddressBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
