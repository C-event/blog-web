import { BrowserRouter, Switch, Route } from "react-router-dom"
import Login from './login'

export default function index() {
  return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Login} />
        <Route path="*">{/* <ErrorPage /> */ "ErrorPage"}</Route>
      </Switch>
  )
}
