import React, { Component } from 'react'
import LeftSideBar from  './LeftSideBar'
import MainPart from './MainPart'
import RightSideBar from './RightSideBar';

export default class Body extends Component {
  render() {
    const {name, age, course }= this.props
    return (
      <div style={{display:'flex', justifyContent:'space-evenly'}}>
        <LeftSideBar content={['Lorem','Lorem', 'Lorem', 'Lorem']}
            />
        <MainPart
         name={name}
         age={age}
         course={course}
        // name={this.props.name}
        // age={this.props.age}
        // course={this.props.course}
        />
        <RightSideBar content={['Lorem','Lorem', 'Lorem', 'Lorem']}
        />
      </div>
    )
  }
}
