
import { useState } from 'react'

export default function Admin(){

  const [url,setUrl] = useState("")
  const [match,setMatch] = useState("")

  const run = async ()=>{
    await fetch('/api/processMatch',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({url,match})
    })
    alert("Match processed")
  }

  return(
    <div style={{padding:40,fontFamily:"Arial"}}>
      <h1>Admin Panel</h1>

      <input placeholder="Match Number"
      value={match}
      onChange={e=>setMatch(e.target.value)}
      style={{padding:10}}/>

      <br/><br/>

      <input placeholder="Cricinfo scorecard URL"
      value={url}
      onChange={e=>setUrl(e.target.value)}
      style={{width:400,padding:10}}/>

      <br/><br/>

      <button onClick={run} style={{padding:15}}>
        Process Match
      </button>
    </div>
  )
}
