import { createContext } from "react";

type State = {
    email: string;
    password: string;
    error: string;
    accountLogin: string;
}

interface ISideBarContext {
    state: State
    handleChange(event: React.ChangeEvent<HTMLInputElement>): void
    setState(x: any): void
    onSubmit(e: any): void
    cookies: any
  }

const AppContext = createContext<ISideBarContext>({
  state: {
    email: "",
    password: "",
    error: "",
    accountLogin: "",
  },
  handleChange() {},
  setState() {},
  onSubmit() {},
  cookies: {},
});

export default AppContext;
