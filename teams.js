
import teams from '../data/teams.json'

export default function Teams(){
  return (
    <div style={{fontFamily:"Arial", padding:40}}>
      <h1>League Teams</h1>
      {teams.teams.map(t => (
        <div key={t} style={{marginBottom:10}}>
          <strong>{t}</strong>
        </div>
      ))}
    </div>
  )
}
