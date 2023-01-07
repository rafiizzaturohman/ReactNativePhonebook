import React from "react";
import { Provider } from "react-redux";
import { store } from './src/app/store';
import Contact from "./src/features/contact/contact";


export default function App() {
  return (
    <Provider store={store}>
      <Contact />
    </Provider>
  )
}