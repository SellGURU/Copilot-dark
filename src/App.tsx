import './App.css'
import "symphony-ui/Themes/index.scss"
import "./Themes/index.scss"
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { TabsWrapper } from './components/Tabs/Tabswrapper'


function App() {
  return (
    <>
      <div>
        <RouterProvider router={router} />
        <TabsWrapper />
      </div>
    </>
  )
}

export default App
