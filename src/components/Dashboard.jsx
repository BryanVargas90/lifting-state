export default function Dashboard({user, setUser}) {
    return (
    <>
    <h2>Dashborard</h2>
    <h3>Welcome {user || 'Guest'} </h3>
    <button onClick={() => setUser()}>Log out</button>
    </>
    )
}

