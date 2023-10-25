'use client'

import { Button , Box} from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [showMsg, setShowMsg] = useState(false);
  const [cats, setCats] = useState<string[]>([]);


  const showMoreCats = () =>{
    fetch('https://cataas.com/cat')
    .then(resp => resp.blob())
    .then(blob=> {
      setCats(list => {
        return [URL.createObjectURL(blob), ...list]
      })
    })
  }


  return (
    <main>
      <h1>Hello WORLD</h1>
      <Box>
              <Button onClick={showMoreCats} variant="contained" >press me</Button>  

      </Box>
      {showMsg && <p>Welcome to WEBDEV Club</p>}
      {cats.map(cat => (<img src={cat}/>))}


    </main>
  )
}
 