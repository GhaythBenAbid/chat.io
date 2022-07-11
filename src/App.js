import {useAuth0} from '@auth0/auth0-react'

function App() {
  const {loginWithRedirect , logout , user} = useAuth0();


  return (
    <div>
      <button onClick={loginWithRedirect}>Login</button>
      <button onClick={logout} className="mx-5 text-red-500">Logout</button>
      <h1>{JSON.stringify(user)}</h1>
    </div>
  );
}

export default App;
