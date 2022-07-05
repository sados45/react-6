import React, { Component } from 'react'
import { List, SideBarContainer } from './Styles'

export default class LeftSideBar extends Component {
  render() {
    return (
      // <div>
        <SideBarContainer>
        {/* <ul> */}<List>   {/* sol taraftaki Lorem ler gitti ekrandan ama consolda var.  */}
          
          {
            this.props.content.map((element, index) =>(

              <li key= {index}>{element}</li>
            ))
          }
        {/* </ul>*/}  </List> 
        {/* map codu icerisindeki element ve index ve key standart yazim kurali. header.jsx icerisindeki yazdigimiz map kismi ile baglanti kurduk.  */}
        </SideBarContainer>

      //  </div>
    )
  }
}
