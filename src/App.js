import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import { Component } from 'react';

const customer = {
  'id': 1,
  'image': 'https://loremflickr.com/128/128',
  'name': 'mr.gold',
  'birthday': '910423',
  'gender': 'man',
  'job': 'doctor'
}

class App extends Component {
  render() {
    return (
      <Customer
        id={customer.id}
        image={customer.image}
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender} 
        job={customer.job}
      />
    )
  }
}

export default App;
