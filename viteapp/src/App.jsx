import React from "react";
import collegeTeachers, {collegeName, collegeStudentName} from "./constant";
// import constants from "./constant";
// class based
class App extends React.Component {
  render() {
    return (
      <div>
          {/*  */}
          {collegeStudentName} studies in this {collegeName} college
          Hi Gina!
      </div>
    )
  }
}

export default App;


// function based