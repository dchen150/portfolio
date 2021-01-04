import React, { useState } from 'react'
import Switch from "react-switch"
import { Icon } from 'semantic-ui-react'

import { LIGHT, DARK, COLOR } from './constants/theme'
import Intro from './components/intro'
import Experience from './components/experience'
import Project from './components/project'
import { EXPERIENCES } from './assets/data'

function App() {
  const [isDark, setIsDark] = useState(true)

  document.body.style = `background: ${isDark ? DARK.BACKGROUND : LIGHT.BACKGROUND}`

  const handleChange = () => {
    setIsDark(!isDark)
  }

  const iconStyle = {
    color: isDark ? DARK.SUBHEADER : LIGHT.SUBHEADER
  }

  return (
    <div>
      <div style={{ display: 'flex', float: 'right', margin: '10px' }}>
        <Icon style={iconStyle} name='sun' size='large' />
        <Switch 
          onChange={handleChange}
          checked={isDark}
          onColor={COLOR.GREEN}
          onHandleColor={COLOR.WHITE}
          handleDiameter={20}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={15}
          width={40}
        />
        <Icon style={iconStyle} name='moon' size='large' />
      </div>
      <Intro theme={isDark ? DARK : LIGHT} />
      <Experience theme={isDark ? DARK : LIGHT} experiences={EXPERIENCES} header={'Where I\'ve Worked'} />
      <Project theme={isDark ? DARK : LIGHT} />
    </div>
  )
}

export default App
