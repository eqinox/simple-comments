import "./App.css";

import { Route, Switch } from "react-router-dom";
import CommentPage from "./comment/CommentPage";
import CommentEditPage from "./comment/CommentEditPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          Just a little change here
          <CommentPage />
        </Route>
        <Route path="/comment/edit/:id" component={CommentEditPage} />
      </Switch>
    </div>
  );
}

export default App;
