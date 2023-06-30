/* eslint-disable constructor-super */
import React from "react";

class App extends React.Component {
  // sometime need constructor or not 
  constructor(props) {
    super(props);
    console.log('call in constructor')
    // pass any default value
    this.state({
      studentName:'Gina',
      collegeName: 'VCC',
      address: 'Van'

    })
  }

  componentDidMount() {
    console.log('called in component mount'); // call the end
  }

  //upating pjase
  handleNameChange() {
    this.setState(() => {
      this.state({
        studentName:'Alex',
        collegeName: 'VCC',
        address: 'Van'
  
      })
    })
  }


  render() {
    console.log('call in render');
    return(
      <div>Hello world
        <ul>
          Student Infomation
          <li>
            {this.state.studentName}
          </li>
          <li>
            {this.state.collegeName}
          </li>
          <li>
            {this.state.address}
          </li>
        </ul>
      </div>
    )
  }

}

export default App;
