
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Leaderboard(){

  const [rows,setRows] = useState([])

  useEffect(()=>{load()},[])

  async function load(){
    const { data } = await supabase
      .from('leaderboard')
      .select('*')
      .order('points',{ascending:false})

    setRows(data || [])
  }

  return (
    <div style={{padding:40,fontFamily:"Arial"}}>
      <h1>Leaderboard</h1>

      {rows.map((r,i)=>(
        <div key={i}>
          {i+1}. {r.team} — {r.points}
        </div>
      ))}
    </div>
  )
}
