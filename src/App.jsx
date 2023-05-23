import React, { lazy, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";

const Home = lazy(()=> import('./pages/Home/Home'));
const Tweets = lazy(()=> import('./pages/Tweets'));

export const Context = React.createContext()

function App() {
  const [select, setSelect] = useState('all')
	console.log(select);
  return (
    <Context.Provider value={{select, setSelect}}>
      <Routes>
       <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Context.Provider>
  )
}

export default App
