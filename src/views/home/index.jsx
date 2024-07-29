import { RedirectionButton } from '../../components/button-hook'

import './home.css'

function Home() {

  return (
    <div className="container-redirection-buttons">
      <div className="container-redirection-buttons--buttons">
        <RedirectionButton url='menu-hooks-native' nameHook='React Hooks Native' />
        <RedirectionButton url='menu-hooks-react-router' nameHook='React Router Hooks' />
      </div>
    </div>
  )
}

export default Home
