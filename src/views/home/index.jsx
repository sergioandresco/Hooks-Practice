import { RedirectionButton } from '../../components/button-hook'

import './home.css'

function Home() {

  return (
    <div>
        <RedirectionButton url='menu-hooks-native' nameHook='React Hooks Native' />
        <RedirectionButton url='menu-hooks-react-router' nameHook='React Router Hooks' />
    </div>
  )
}

export default Home
