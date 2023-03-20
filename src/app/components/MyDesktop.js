import React, { useLayoutEffect, useState } from 'react'

const MyDesktop = ({ children }) => {
  const [windowSize, setWindowSize] = useState(0);

  useLayoutEffect(() => {
    function updateSize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <>
      {windowSize > 1050 ? children : null}
    </>
  )
}

export default MyDesktop