
export default function Home(){
  return (
    <div style={{padding:40,fontFamily:"Arial"}}>
      <h1>IPL FRIENDS FANTASY LEAGUE</h1>
      <p>Admin managed fantasy league</p>

      <ul>
        <li><a href="/leaderboard">Leaderboard</a></li>
        <li><a href="/teams">Teams</a></li>
        <li><a href="/admin">Admin</a></li>
      </ul>
    </div>
  )
}
