
// import React from 'react';
// import './App.css';
// import Header from  './components/Header';
// import Body from './components/Body';
// import Footer from './components/Footer';

// export default class App extends React.Component {


//   state ={

//     name:'Hasan',
//     age:'45',
//     course: 'react',
//     no:'442',
//     school:'Giessen University',
   
//   }
//   render() {
//     return (

//       <>
     
//        <Header content ={['Home', 'About', 'Contact']}
//         />
//        <Body
//         name= {this.state.name}
//         age= {this.state.age}
//         course={this.state.course}
       
//        />
       
//        <Footer
//        platform ='Amazon'
//        phone='Iphone'
//        beverage='Tea'
//        />
     
//       </>
//     )
//   }
// }

//REACT Lifecycle konusunu isliyoruz: ______________________


// import React, { Component } from 'react'

// export default class App extends Component {

//   constructor () {

//     super()
//     this.state={
//       number:0
//     }

//     console.log('constructor ici')

//     componentDidMount () {

//       console.log('componentDidMount ici')
//     }
    
//     componentDidUpdate(){

//       console.log('componentDidUpdate ici')
//     }

//   } //componentDidMount demek; mounting islemi bittiginde calisir demek. aslinda ilk acilma sureci bittiginde, yani ilk yukleme ani bittikten sonra calisir. yani constructor ile yapiyi kurup render ile bilgiler, elementler sayfaya islendikten sonra artik yüklemesi bitti.demek. 
//   //ilk önce constructor, sonra render ici, daha sonra en son componentDidMount yani yuklemenin bittigini haber veriyorum diyor. 

//   changeName= () => {

//     this.setState{{number: this.state.number + 1}}
//   }

//   componentWillUnmount(){
//     console.log('componentWillUnmount ici')

//   } //normal sartlarda biz bunu calistigini göremiyoruz. bekleme sürecinde yani settimeout halinde islemi sonuclanmamis islemleri sonlandirmaya yariyor. kapatma isleminden hemen once yapildigi icin biz bunu consolda göremiyoruz. 
//   render() {

//     console.log('render ici')
//     return (
//       <div>

//         <button onClick= {this.changeName}>Degistir</button>
//       </div>
//     )
//   }
// }

// YERINI BULMA________ NAVIGASYON ILE___________

  import React, { Component } from 'react'
  
  export default class App extends Component {

    constructor(){

      super()

      this.state ={

        latitude: '',
        message: ''
      }
     
      
        }

        // biz acilma islemi bittikten sonra bu navigasyon isleminin calismasini istiyorsak. componentDidMount yapmak zorundayiz. 

        componentDidMount(){
          window.navigator.geolocation.getCurrentPosition(

            position => this.setState({latitude:position.coords.latitude}),
            error => {
              setTimeout( () =>{
               this.setState({message:error.message}) 
              },1000)
              
        }
          )
        } //normalde error => this.setState({message:error.message}) bu yazili idi ama timeout koyarak error, loading yazmasini navigasyon kapatarak döngü icerisinde takip edecegi islem sirasini görmek istedik. basarili oldu. 

        componentDidUpdate() {

          console.log('componentDidUpdate') //asagida latitude ve error bilgilerini de girdikten sonra bilgi update oldugu icin console ile bunu görmek istedik  ve bilginin dogru oldugunu teyit ettik. 
        }

    render() {
      // return (

        {

          if(this.state.latitude && ! this.state.message){

            return <h1>Latitude: {this.state.latitude} </h1>
          }

          if(!this.state.latitude && ! this.state.message){
            return <h1>Error Message: {this.state.message}</h1>

          }
          return <h1>Loading...</h1>
        }
        // <div>

        //   <h1> Latitude:{this.state.latitude} </h1>
        //   <h1> Error: {this.state.message} </h1>
        // </div> 
      // )
    }
  }
  
