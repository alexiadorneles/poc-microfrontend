import { by, element } from "protractor";

export default function listOptionsFrom(bytext:string) {
  return element(by.cssContainingText('.list-app-options li a', bytext));
}
 