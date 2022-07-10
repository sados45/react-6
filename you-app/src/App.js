
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

  // import React, { Component } from 'react'
  
  // export default class App extends Component {

  //   constructor(){

  //     super()

  //     this.state ={

  //       latitude: '',
  //       message: ''
  //     }
     
      
  //       }

  //       // biz acilma islemi bittikten sonra bu navigasyon isleminin calismasini istiyorsak. componentDidMount yapmak zorundayiz. 

  //       componentDidMount(){
  //         window.navigator.geolocation.getCurrentPosition(

  //           position => this.setState({latitude:position.coords.latitude}),
  //           error => {
  //             setTimeout( () =>{
  //              this.setState({message:error.message}) 
  //             },1000)
              
  //       }
  //         )
  //       } //normalde error => this.setState({message:error.message}) bu yazili idi ama timeout koyarak error, loading yazmasini navigasyon kapatarak döngü icerisinde takip edecegi islem sirasini görmek istedik. basarili oldu. 

  //       componentDidUpdate() {

  //         console.log('componentDidUpdate') //asagida latitude ve error bilgilerini de girdikten sonra bilgi update oldugu icin console ile bunu görmek istedik  ve bilginin dogru oldugunu teyit ettik. 
  //       }

  //   render() {
  //     // return (

  //       {

  //         if(this.state.latitude && ! this.state.message){

  //           return <h1>Latitude: {this.state.latitude} </h1>
  //         }

  //         if(!this.state.latitude && ! this.state.message){
  //           return <h1>Error Message: {this.state.message}</h1>

  //         }
  //         return <h1>Loading...</h1>
  //       }
  //       // <div>

  //       //   <h1> Latitude:{this.state.latitude} </h1>
  //       //   <h1> Error: {this.state.message} </h1>
  //       // </div> 
  //     // )
  //   }
  // }
  

  //REACT EVENT _________________________-.Ders React -9:


  import React, { Component } from 'react'
  import "./App.css"
  
  export default class App extends Component {
    

    state={
      value: ''
     
    }


    handleClick=() =>{
      console.log('this element is clicked');
    }
    handleLabelClick =() =>{
      console.log('label clicked');
      console.log('input changed');

    handleInputChange =(event) => { //icinde event bircok özelligi barindirir. 

      // console.log('event.target.value') // ÖNEMLI bu sekilde yazarak input icersinde yaptigim en kucuk degisiklik consolda görülmekte. 
      this.setState({value:e.target.value}) //biz burada state icinde value acarak ve asagida h1 icinde value ile ilgili cagirarak, aslinda input icersinde yazilan degeri yakalayip bunu arama yapmayi ileride hedefleyecegiz. star wars kelimesini yakala mesela, bunula ilgili filmleri getirmek icin kullancagiz. 
    }

    render () {

      return (
        <div className='input-card'>
        <form>

          <label onClick={this.handleLabelClick}>Enter a search term</label> 
          <br/>
          <input 
          onClick={this.handleClick}
          style = {{width:'50%', height:'60%'}} 
          // onChange ={this.handleInputChange} //bir diger yöntem üstte yazili.
          // onChange= {() => console.log('input changed')} //bu sekilde kisaca yazilabilir. cleankod...
          // onChange={(event) => console.log(event.target.value)}// eventleri sadece e harfi yazarak da gösterebiliriz.
          onChange={this.handleInputChange}
          type='text'
          value= {this.state.value} //biz input icersine value deger girmemistik kontrol tipi inoutta bu sekilde deger giriyoruz. 
          />
                    
        </form>
          {/* <button onClick= {this.handleClick}>Submit</button> */}
          {/* <h1> Value: {this.state.value}</h1>  */}
        </div>
      )
    }
  
  } //burada onClick tanimlandiktan sonra istedigimiz her yere onClik tanimlamasi yapip köseli parantez icerisinde aciklamasiyla aktif hale getirebiliyoruz. 
  }

  //inputlar iki türlu kontrol ve uncontrol diye ayriliyor. biz unkontrolu görduk. 