
import teams from '../data/teams.json'

export default function Home(){
  return (
    <div style={{fontFamily:"Arial", padding:40}}>
      <h1>IPL Private Fantasy League</h1>
      <p>Teams participating in the league:</p>
      <ul>
        {teams.teams.map(t=> <li key={t}>{t}</li>)}
      </ul>
      <p>Leaderboard and scoring engine will appear here.</p>
    </div>
  )
}
