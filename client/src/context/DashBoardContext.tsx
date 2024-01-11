import { createContext } from "react";

interface IDashBoardContext {
  data: Array<any>
  cookies: any
  buttonFilter(): void
  stateFilters: any
  handleChange(x: any): void
  states: Array<any>
  cities: Array<any>
  setCookie(x: any, y: any): void
  removeCookie(x: any): void
  deletePet(x: any): void
  navigate(x: any): void
}

const DashBoardContext = createContext<IDashBoardContext>({
  data: [],
  cookies: {},
  buttonFilter() {},
  stateFilters: {},
  handleChange() {},
  states: [],
  cities: [],
  setCookie() {},
  removeCookie() {},
  deletePet() {},
  navigate() {}
});

export default DashBoardContext;
