import { Fragment } from "react";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  return (
    <Fragment>
      <Header title='News searcher' />
      <div className="container white">
        <Form />
      </div>
    </Fragment>
  )
}

export default App;
