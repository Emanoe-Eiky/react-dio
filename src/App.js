import Item from './components/Item';
import Card from './components/Card';

const App = () => {
  return(
    <>
      <h1>Minha primeira aplicaçao com react</h1>
      <ul>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
        <Item>Item 4</Item>
      </ul>
       
      <Card/> 
    </>
  )
}
//Acima temos uma arel function
export default App;