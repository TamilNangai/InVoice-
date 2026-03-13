import { useState } from "react"
import Header from "@/Components/Nav/Header"
import Buttons from "@/Components/Button/Buttons"
import Companyform from "@/Components/Form/Companyform"
import Banner from "@/Components/Cards/Banner"
import { saveSettings } from "@/utils/SaveSetting"
import cap from "@/assets/settings/cap.png"
import pro from "@/assets/settings/pro.png"
import other from "@/assets/settings/other.png"

type SaveSettingData = {
  companyName: string
  companyEmail: string
  companyPhone: string
  companyAddress: string
}

const Settings = () => {

  const [settingsData, setSettingsData] = useState<SaveSettingData>({
    companyName: "",
    companyEmail: "",
    companyPhone: "",
    companyAddress: ""
  })

  const handleSave = async () => {

    console.log("Settings Data:", settingsData)

    await saveSettings({
      company: settingsData
    })
    window.print()

  }

  return (
    <div className="w-[1500px]">

      <div>
        <Header
          h1="Settings"
          para="Manage your product catalog and service offerings."
        />

        <div className="absolute right-10 top-4">
          <Buttons
            h1="Save Settings"
            h2=""
            src1=""
            src2=""
            onClick={handleSave}
          />        </div>
      </div>

      <div className="mt-10">
        <Banner
          h1="Invoice Types Configuration"
          para1="Enable/Disable invoice types and configure their templates and rules."
          h2="Internship Invoice"
          para2="For training programs and certifications"
          h3="Product Invoice"
          para3="For physical goods and inventory sales"
          h4="Other / Custom Invoice"
          para4="Flexible billing for misc services"
          h5="Configure Template"
          h6="Configure Template"
          h7="Configure Template"
          src1={cap}
          src2={pro}
          src3={other}
        />
      </div>

      <section className="p-4">

        <Companyform
          data={settingsData}
          setData={(data: SaveSettingData) =>
            setSettingsData(data)
          }
        />

      </section>

    </div>
  )
}

export default Settings