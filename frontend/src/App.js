import "./App.css";

import { Route, Switch } from "react-router-dom";
import CommentPage from "./comment/CommentPage";
import EditCommentPage from "./comment/CommentEditPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <CommentPage />
        </Route>
        <Route path="/comment/edit/:id" component={EditCommentPage} />
      </Switch>
    </div>
  );
}

export default App;
