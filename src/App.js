import Pages from './component2/Pages'
import GroceryList from './components/GroceryList'
import UseMemo from './components/UseMemo';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';


function App() {
  let [count,setCount]=useState(0)
  function clickFun(){
   setCount(++count);
   if(count%2===0)
   {
    return(alert('hi'))
   }
  }
  return (
    <div >
        {/* <GroceryList/> */}
        {/* <UseMemo/> */}
        <Button variant ="contained" startIcon={<DeleteIcon/> }onClick={clickFun}>Click here

        </Button>
        <Button></Button>
       
     
      
    </div>
  );
}

export default App;
