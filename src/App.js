import React, { useState, lazy, Suspense, } from 'react'
import Switch from "react-switch"
import { Icon } from 'semantic-ui-react'
import StyledContentLoader from 'styled-content-loader'

import { LIGHT, DARK, COLOR } from './constants/theme'
import { EXPERIENCES, COMMUNITY_PROJECTS } from './assets/data'
import Credit from './components/credit'

const smiskiPromise = import('./components/smiskiCollection')

const Intro = lazy(() => import('./components/intro'))
const Experience = lazy(() => import('./components/experience'))
const Project = lazy(() => import('./components/project'))
const SmiskiCollection = lazy(() => smiskiPromise)

function App() {
  const [isDark, setIsDark] = useState(true)
  const [showSmiskiCollection, setShowSmiskiCollection] = useState(false)
  const theme = isDark ? DARK : LIGHT
  document.body.style = `background: ${theme.BACKGROUND}`

  const onSmiskiLoad = () => {
    if (showSmiskiCollection) {
      const element = document.getElementById("SMISKI Collection")
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const onSmiskiClick = () => {
    setShowSmiskiCollection(!showSmiskiCollection)
  }

  const handleChange = () => {
    setIsDark(!isDark)
  }

  const iconStyle = {
    color: theme.SUBHEADER
  }

  const ContentLoader = () => {
    return (
      <StyledContentLoader backgroundColor={theme.SIDE_BAR_BACKGROUND} foreGroundColor={theme.CARD_BACKGROUND}>
        <div style={{ width: '700px', height: '200px', margin: '0 auto', marginBottom: '20px', borderRadius: '8px'}}></div>
      </StyledContentLoader>
    )
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
      <Suspense fallback={<ContentLoader />}>
        <Intro theme={theme} onSmiskiClick={onSmiskiClick} />
      </Suspense>

      <Suspense fallback={<ContentLoader />}>
        <Experience theme={theme} experiences={EXPERIENCES} header={'Where I\'ve Worked'} />
      </Suspense>

      <Suspense fallback={<ContentLoader />}>
        <Experience theme={theme} experiences={COMMUNITY_PROJECTS} header={'Community Projects'} />
      </Suspense>

      <Suspense fallback={<ContentLoader />}>
        <Project theme={theme} onSmiskiClick={onSmiskiClick} />
      </Suspense>

      {
        showSmiskiCollection &&
        <Suspense fallback={<ContentLoader />}>
          <div onLoad={() => onSmiskiLoad()}>
            <SmiskiCollection setShowSmiskiCollection={setShowSmiskiCollection} />
          </div>
        </Suspense>
      }

      <Credit theme={theme} />

    </div>
  )
}

export default App
