import { RouteLocationRaw } from "vue-router";

export interface GameCardInfo {
  name: String;
  info: String;
  routerLink: RouteLocationRaw;
  picSrc?: String;
  picSrcPhone?: String;
}
