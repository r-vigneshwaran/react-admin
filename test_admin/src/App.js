import React,{useState} from "react";
import { Admin, Resource } from 'react-admin';
import Dashboard from './Dashboard';
import getList from './dataProvider'
import ListGuesser from './ListGuesser'

const App = () => {
  const [open,setOpen]=useState(false)
  return (
    <Admin dashboard={Dashboard} dataProvider={getList}>
        <Resource name="users" list={ListGuesser} />
    </Admin>
);
}

export default App;