
import styles from 'styled-components'

export const HeaderContainer= styles.div`
    background-color: purple;
    height: 3rem
    `


    export const FooterContainer= styles.div`
    background-color: darkblue;
    height:10rem;
    color:white;
    font-size:1.5rem;
    display:flex;
    justify-content: space-evenly

    `


    export const List =styles.ul`
    list-style-type: none;
    display: ${props=>props.header ? 'flex' : 'block'} ;     
    width: 100%;
    ${ props => props.header && "justify-content: space-evenly"};
    color: ${props => props.header ? 'white': 'black'} ;
    `
    // home About Contact yazisi yataydan cikti. dikey oldu.

    export const SideBarContainer = styles.div`
    
    border: 1px solid black;
    margin:2rem;
    width:14rem;
    text.align:center;
    `