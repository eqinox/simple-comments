import "./App.css";

import { Route, Routes } from "react-router-dom";
import CommentPage from "./comment/CommentPage";
import CommentEditPage from "./comment/CommentEditPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<CommentPage />} />

        <Route path="/comment/edit/:id" element={<CommentEditPage />} />
      </Routes>
    </div>
  );
}

export default App;
