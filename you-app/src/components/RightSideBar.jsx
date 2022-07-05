import React, { Component } from 'react'
import { List,SideBarContainer } from './Styles'

export default class RightSideBar extends Component {
  render() {
    return (
      

   
      <SideBarContainer>
          {/* <ul> */}<List>
          {
              this.props.content.map((element, index) =>(

              <li key= {index}>{element}</li>
            ))
          }
        {/* </ul> */} 
        </List>
          
      </SideBarContainer>
      
    )
  }
}
