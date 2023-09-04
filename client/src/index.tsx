import { log } from 'console';
import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Store from './utils/Store';
import userStore from './utils/userStore';
import { ThemeProvider } from "@material-tailwind/react";
import './app/assets/styles/standard.module.scss'
//new token 
interface State{
  useStore:userStore,
  store:Store,
}
const useStore = new userStore();
const store = new Store()

export const Context = createContext<State>({
    useStore,
    store,
})
console.log(store)
console.log(process.env.REACT_APP_API_URL)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Context.Provider value={{
      useStore,
      store
  }}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
  </Context.Provider>
);