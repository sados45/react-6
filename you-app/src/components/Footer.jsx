import React from 'react'
import Footer2 from './Footer2';
import { FooterContainer } from './Styles'

// export default class Footer extends Component {
//   render() {
//     return (

//          <FooterContainer>

//          <h5>Contact Number: 02122122123</h5>
//          <h5>Social Media Account</h5>
//          </FooterContainer>
         

      // <div // style= {{backgroundColor:'darkblue', height:'10rem', color:'white', fontSize:'1.5rem', display:'flex', justifyContent:'space-evenly'}} 
      // >

      //   <h5>Contact Number: 02122122123</h5>
      //   <h5>Social Media Account</h5>
      // </div>
//     )
//   }
// }

const Footer = ({platform,...props}) => {
  
  


    return (
  <FooterContainer>

  <h5>Contact Number: 02122122123</h5>
  <h5>Social Media Account</h5>
  <p>{platform}</p>
  <Footer2
  object={props}
  />
  </FooterContainer>
)
}
export default Footer;
