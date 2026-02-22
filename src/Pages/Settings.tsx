import Buttons from '@/Components/Button/Buttons'
import Header from '@/Components/Nav/Header'

const Settings = () => {
  return (
    <>
      <Header h1="Settings"
        para="Manage Your product catalog and service offerings." />
        <div className="absolute right-10 top-4">
      <Buttons src="" h1="Save Settings" />
      </div>
    </>
  )
}

export default Settings