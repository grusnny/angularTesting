import { TestBed } from '@angular/core/testing';

import { RomanoService } from './romano.service';

describe('RomanoService', () => {
  let service: RomanoService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RomanoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('the conversion is correct I', (()=>{
    expect(service.ToRomano(1)).toEqual("I")
  }));
  it('the conversion is correct IV', (()=>{
    expect(service.ToRomano(4)).toEqual("IV")
  }));
  it('the conversion is correct V', (()=>{
    expect(service.ToRomano(5)).toEqual("V")
  }));
  it('the conversion is correct IX', (()=>{
    expect(service.ToRomano(9)).toEqual("IX")
  }));
  it('the conversion is correct X', (()=>{
    expect(service.ToRomano(10)).toEqual("X")
  }));
  it('the conversion is correct XL', (()=>{
    expect(service.ToRomano(40)).toEqual("XL")
  }));
  it('the conversion is correct L', (()=>{
    expect(service.ToRomano(50)).toEqual("L")
  }));
  it('the conversion is correct XC', (()=>{
    expect(service.ToRomano(90)).toEqual("XC")
  }));
  it('the conversion is correct C', (()=>{
    expect(service.ToRomano(100)).toEqual("C")
  }));
  it('the conversion is correct CD', (()=>{
    expect(service.ToRomano(400)).toEqual("CD")
  }));
  it('the conversion is correct D', (()=>{
    expect(service.ToRomano(500)).toEqual("D")
  }));
  it('the conversion is correct CM', (()=>{
    expect(service.ToRomano(900)).toEqual("CM")
  }));
  it('the conversion is correct M', (()=>{
    expect(service.ToRomano(1000)).toEqual("M")
  }));
});
