import React from 'react'
import LeftSideBar from  './LeftSideBar'
import MainPart from './MainPart'
import RightSideBar from './RightSideBar';


const Body =(props) =>{ //buraya mutlaka eger props kullaniliyorsa yapida buradada yazilmasi zorunlu.yada const Body =({name,age, course}) yazmaliyim. altindaki const tanimlamasi bir daha yazilmayacak tabiki. burada destructure yapmis olduk.
//ben functional componentte istedigim yerde console.log yapabilirim. ama class base componenet state yapili olan da render ile return arasinda sadece kullanabilirim. 
  return (
    <div style={{display:'flex', justifyContent:'space-evenly'}}>
      <LeftSideBar content={['Lorem','Lorem', 'Lorem', 'Lorem']}
          />
      <MainPart
      
       
      name={name}
      age={age}
      course={course}
      />
      <RightSideBar content={['Lorem','Lorem', 'Lorem', 'Lorem']}
      />
    </div>
  )
}
export default Body;



// export default class Body extends Component {
//   render() {
//     const {name, age, course }= this.props
//     return (
//       <div style={{display:'flex', justifyContent:'space-evenly'}}>
//         <LeftSideBar content={['Lorem','Lorem', 'Lorem', 'Lorem']}
//             />
//         <MainPart
//          name={name}
//          age={age}
//          course={course}
//         // name={this.props.name}
//         // age={this.props.age}
//         // course={this.props.course}
//         />
//         <RightSideBar content={['Lorem','Lorem', 'Lorem', 'Lorem']}
//         />
//       </div>
//     )
//   }
// }
