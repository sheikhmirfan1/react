import Welcome from './Welcome.jsx'
import './App.css'
import User from './User.jsx'
import Avatar from './Avatar.jsx'

function App() {

  const users = [
    {
      name: 'batman',
      power: 45,
      identity: false
    },
    {
      name: 'superman',
      power: 60,
      identity: false
    },
    {
      name: 'spiderman',
      power: 34,
      identity: true
    }
  ]

  const bart = {
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
    firstName: "Bart",
    lastName: "Simpson"
  };


  const homer = {
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2245-homer-simpson-donut.png",
    firstName: "James",
    lastName: "Simpson"
  };


  return (
    <>
    <Avatar{...homer}/>
    <Avatar{...bart}/>
    
    </>
  )
}

export default App
