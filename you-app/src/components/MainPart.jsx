import React, { Component } from 'react'

export default class MainPart extends Component {
  render() {
    const { name, age, course} = this.props
    return (
      <div>
        <h1>User's name is {name}</h1>
        <h1>User's age is {age}</h1>
        <h1>User's applied course is {course}</h1>
        {/* diger kullanim sekli  */}
        {/* <h1>User's name is {this.props.name}</h1>
        <h1>User's age is {this.props.age}</h1>
        <h1>User's applied course is {this.props.course}</h1>*/}
      </div> 
    )
  }
}
