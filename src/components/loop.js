import React, { useState, useEffect } from "react"
import Typist from 'react-typist'
import '../styling/loop.scss'

function Loop (props) {
    const [count, setCount] = useState(1);
    const { typingText, theme } = props

    useEffect(() => {
      setCount(1);
    }, [count]);
  
    return (
      <div>
        {count ? (
          <Typist className={theme.TEXT === '#FFFFFF' ? 'typist' : ''} avgTypingDelay={100} onTypingDone={() => setCount(0)}>
            {typingText.map((textObj) => {
                return (
                    [
                    <span style={{ color: theme.TEXT, fontSize: '16px' }}>{textObj.text}</span>,
                    <Typist.Backspace count={textObj.backspaceCount} delay={2000}/> 
                    ]
                )
            })}
          </Typist>
        ) : (
          null
        )}
      </div>
    );
}

export default Loop