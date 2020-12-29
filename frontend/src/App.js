import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './component/Header'
import Footer from './component/Footer'
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ProducScreen from './screens/ProducScreen'
import CartScreen from './screens/CartScreen'



function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
         <Route path='/' component={HomeScreen} exact />
         <Route path='/product/:id' component={ProducScreen}/>
         <Route path='/cart/:id?' component={CartScreen}/>

        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
