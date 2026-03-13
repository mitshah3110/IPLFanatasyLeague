
import teams from '../data/teams.json'

export default function Teams(){
  return (
    <div style={{padding:40,fontFamily:"Arial"}}>
      <h1>League Teams</h1>
      {teams.teams.map(t => (
        <div key={t}>{t}</div>
      ))}
    </div>
  )
}
