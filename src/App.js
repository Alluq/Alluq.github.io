import { useState } from 'react'
import TimelineMenu from './components/TimelineMenu';


const App = () => {
  const [data, setData] = useState([
    {
      text: 'Home Page',
      active: true
    },
    {
      text: 'About'
    },
    {
      text: 'Experiences'
    },
    {
      text: 'Projects'
    },
    {
      text: 'Extra Details'
    }
  ])
  return (
      <TimelineMenu data={data}/>
  )
}

export default App
