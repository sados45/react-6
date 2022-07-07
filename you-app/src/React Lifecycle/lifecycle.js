//Mounting
//bir komponenetin baslamasina denir.
//Updating
//update sürecidir. state degistiginde yada props degisikliginde ki surec
//Unmounting
//artik hayatini bitiriyor. internet sayfasindan kaldirma sureci kapanmasi yani. 
//Error Handling
//bir hata durumunda ele aldigimiz durumdur.


//Asagidaki ifadelerle duruma göre kalip codlar kullanilabilir. 

// Mounting => constructor, static getDerivedStateFromProps, render and componentDidMount
//Updating => static, getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshshotBeforeUpdate and componentDidUpdate
//Unmouting => componentWillUnmount (sonsoz)artik gidiyor. 
//Error Handling => static getDerivedStateFromError and componentDidCatch


//Component Lifecycle:
//1. constructor
//2. render
//content visible on screen
//3. componentDidMount
//Sit and wait for updates
//4. componentDidUpdate
//Sit and Wait until this component is not longer shown
//5. componentWillUnmount

//ilk önce constructor ici calisir.

// export default class App extends React.Component {

//constructor(){
//   super()
//    this.state ={
  
//       name:'Hasan',
//       age:'45',
//       course: 'react',
//       no:'442',
//       school:'Giessen University',
  
//     }

//DAHA SONRA RENDER METODU CALISIR: yani render icindeki yazdiklarimiz sayfaya aktariliyor. 
// render() {
//     return (

//       <>

//        <Header content ={['Home', 'About', 'Contact']}
//         />
//        <Body
//         name= {this.state.name}
//         age= {this.state.age}
//         course={this.state.course}

//        />

//        <Footer/>

//       </>
//     )
//   }
// }

//SONRAKI ASAMA.

// ComponentDidMount => yani komponent kuruldu. diyor. 

//sonra kullanici herhangi bir degisiklik yaparsa onu bekler. 
//Sonra component kurulurduktan sonra gosterilmesini bekler. 


// bu yapilarin hepsini ayni anda kullanmak zorunda degiliz. 