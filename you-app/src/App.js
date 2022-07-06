
import React from 'react';
import './App.css';
import Header from  './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

export default class App extends React.Component {


  state ={

    name:'Hasan',
    age:'45',
    course: 'react',
    no:'442',
    school:'Giessen University',
   
  }
  render() {
    return (

      <>
     
       <Header content ={['Home', 'About', 'Contact']}
        />
       <Body
        name= {this.state.name}
        age= {this.state.age}
        course={this.state.course}
       
       />
       
       <Footer
       platform ='Amazon'
       phone='Iphone'
       beverage='Tea'
       />
     
      </>
    )
  }
}
