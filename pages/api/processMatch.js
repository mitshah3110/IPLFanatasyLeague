import fetch from 'node-fetch'
import cheerio from 'cheerio'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default async function handler(req,res){

  const { url, match } = req.body

  const html = await fetch(url).then(r=>r.text())
  const $ = cheerio.load(html)

  // Example parse placeholder
  const players = []

  $('table tbody tr').each((i,row)=>{
    const cols = $(row).find('td')
    const name = $(cols[0]).text().trim()
    const runs = parseInt($(cols[2]).text()) || 0
    players.push({name,runs})
  })

  // store example stats
  for(const p of players){
    await supabase.from('match_stats').insert({
      match_no: match,
      player_name: p.name,
      runs: p.runs
    })
  }

  res.status(200).json({message:'ok'})
}
