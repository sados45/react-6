import React, { Component } from 'react'
import { HeaderContainer, List } from './Styles'
// import styles from 'styled-components' //burada yukledigimiz styled componenets ikullandik ve cagirdik. 


export default class Header extends Component {
  render() {

    // const HeaderContainer= styles.div`
    // background-color: purple;
    // height: 3rem
    // ` //bu yapiyi unutma efendi...
    return (
      <HeaderContainer>
        <List header> 
        {/* burada header i yazarak home about ve contact dikeyden yatay hale geldi. display: ${props=>props.header ? 'flex' : 'block'} ;    bu degisikligi malum Styles.jsx icinde yaptigimiz icin.   */}
      {/* <div style= {{backgroundColor:'black', margin:'0', height:'3rem'}}> */}
         {/* <ul style={{listStyleType:'none', display:'flex', width:'100%', justifyContent:'space-evenly', color:'white'}}> */}
           
           {
            this.props.content.map((el, index) =>(
              <li key={index}>{el}</li>
            ))
            } 
             {/* REACTTA EN COK KULLANILAN SEY: iki sekilde de buradaki gibi map codu yazilabilir. return yazmayacaksak parantez kullanmak zorundayiz.  */}
           
            {/* {
            this.props.content.map((el) => {

              return <li>{el}</li>
            })
          }
             */}
            {/* <li>Home</li>
            <li>About</li>
            <li>Contact</li> */}
        {/* </ul> */}
        </List>
      </HeaderContainer>
    )
  }
}
