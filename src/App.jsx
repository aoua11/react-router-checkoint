import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'

function App() {


  return (
    <>

      <Router>
        <Switch>
          <Route exact path="/">
            <Moviecard />
          </Route>
          <Route path="/movies/:id">
            <MovieDetailsPage />
          </Route>
        </Switch>
      </Router>

    </>
  )
}

export default App
