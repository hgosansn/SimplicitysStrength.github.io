import { Injectable } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

declare const tinycolor: any;

export interface Color {
  name: string;
  hex: string;
  darkContrast: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ThemingService {

  constructor() { }

  setTheme(primary: string, accent: string, warn: string, background: string, foreground: string) {
    this.saveColor('primary', primary);
    this.saveColor('accent', accent);
    this.saveColor('warn', warn);
    this.saveColor('background', background);
    this.saveColor('foreground', foreground);
  }

  createRandomTheme() {
    return Array.from(Array(5).keys()).map(() => this.getRandomColor());
  }

  setRandomTheme() {
    this.saveColor('primary', this.getRandomColor());
    this.saveColor('accent', this.getRandomColor());
    this.saveColor('warn', this.getRandomColor());
    this.saveColor('background', this.getRandomColor());
    this.saveColor('foreground', this.getRandomColor());
  }

  // https://stackoverflow.com/a/1484514/4217907
  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  saveColor(key: string, value: string) {
    const colorArray = computeColors(value);
    console.log(colorArray);

    for (const color of colorArray) {
      const key1 = `--theme-${key}-${color.name}`;
      const value1 = color.hex;
      const key2 = `--theme-${key}-contrast-${color.name}`;
      const value2 = color.darkContrast ? 'rgba(black, 0.87)' : 'white';
      document.documentElement.style.setProperty(key1, value1);
      document.documentElement.style.setProperty(key2, value2);
    }
  }

}

// @ts-ignore
function computeColors(hex: string): Color[] {
  return [
    getColorObject(tinycolor(hex).lighten(52), '50'),
    getColorObject(tinycolor(hex).lighten(37), '100'),
    getColorObject(tinycolor(hex).lighten(26), '200'),
    getColorObject(tinycolor(hex).lighten(12), '300'),
    getColorObject(tinycolor(hex).lighten(6), '400'),
    getColorObject(tinycolor(hex), '500'),
    getColorObject(tinycolor(hex).darken(6), '600'),
    getColorObject(tinycolor(hex).darken(12), '700'),
    getColorObject(tinycolor(hex).darken(18), '800'),
    getColorObject(tinycolor(hex).darken(24), '900'),
    getColorObject(tinycolor(hex).lighten(50).saturate(30), 'A100'),
    getColorObject(tinycolor(hex).lighten(30).saturate(30), 'A200'),
    getColorObject(tinycolor(hex).lighten(10).saturate(15), 'A400'),
    getColorObject(tinycolor(hex).lighten(5).saturate(5), 'A700')
  ];
}

// @ts-ignore
function getColorObject(value, name): Color {
  const c = tinycolor(value);
  return {
    name: name,
    hex: c.toHexString(),
    darkContrast: c.isLight()
  };
}
