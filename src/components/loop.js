import React, { useState, useEffect, useContext } from "react"
import Typist from 'react-typist'
import '../styling/loop.scss'
import ThemeContext from "../themeContext";

function Loop(props) {
  const [count, setCount] = useState(1);
  const { typingText } = props
  const theme = useContext(ThemeContext)

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
                <Typist.Backspace count={textObj.backspaceCount} delay={1500} />
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