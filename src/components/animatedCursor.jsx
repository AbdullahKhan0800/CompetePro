import { useCallback, useEffect, useRef, useState } from "react"

function useEventListener(eventName, handler, element = document) {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;

    const eventListener = (event) => savedHandler.current(event);

    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}

function AnimatedCursor({
  color = '255, 255, 255',
  dragColor = '255, 255, 255',
  outerAlpha = 0.2,
  innerSize = 8,
  outerSize = 8,
  outerScale = 1.5,
  dragOuterScale = 2,
  innerScale = 0.7,
  dragInnerScale = 0.1
}) {
  const cursorOuterRef = useRef()
  const cursorInnerRef = useRef()
  const requestRef = useRef()
  const previousTimeRef = useRef()
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(true)
  const [dragIsVisible, setDragIsVisible] = useState(true)
  const [isActive, setIsActive] = useState(false)
  const [dragIsActive, setdragIsActive] = useState(false)
  const [isActiveClickable, setIsActiveClickable] = useState(false)
  let endX = useRef(0)
  let endY = useRef(0)

  const onMouseMove = useCallback(({ clientX, clientY }) => {
    setCoords({ x: clientX, y: clientY })
    cursorInnerRef.current.style.top = clientY + 'px'
    cursorInnerRef.current.style.left = clientX + 'px'
    endX.current = clientX
    endY.current = clientY
  }, [])

  const animateOuterCursor = useCallback(
    (time) => {
      if (previousTimeRef.current !== undefined) {
        coords.x += (endX.current - coords.x) / 8
        coords.y += (endY.current - coords.y) / 8
        cursorOuterRef.current.style.top = coords.y + 'px'
        cursorOuterRef.current.style.left = coords.x + 'px'
      }
      previousTimeRef.current = time
      requestRef.current = requestAnimationFrame(animateOuterCursor)
    },
    [requestRef] // eslint-disable-line
  )

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateOuterCursor)
  }, [])


  const onMouseDown = useCallback(() => {
    setIsActive(true);
    setdragIsActive(true)
  }, [])
  const onMouseUp = useCallback(() => {
    setIsActive(false);
    setdragIsActive(false);
  }, [])
  const onMouseEnter = useCallback(() => {
    setIsVisible(true);
    setDragIsVisible(true);
  }, [])
  const onMouseLeave = useCallback(() => {
    setIsVisible(false);
    setDragIsVisible(false);
  }, [])

  useEventListener('mousemove', onMouseMove, document)
  useEventListener('mousedown', onMouseDown, document)
  useEventListener('mouseup', onMouseUp, document)
  useEventListener('mouseenter', onMouseEnter, document)
  useEventListener('mouseleave', onMouseLeave, document)

  useEffect(() => {
    if (isActive) {
      cursorInnerRef.current.style.transform = `scale(${innerScale})`
      cursorOuterRef.current.style.transform = `scale(${outerScale})`
    } else if (dragIsActive) {
      cursorInnerRef.current.style.transform = `scale(${dragInnerScale})`
      cursorOuterRef.current.style.transform = `scale(${dragOuterScale})`
      cursorOuterRef.current.style.backgroundColor = `rgba(${dragColor},0.2)`
      cursorOuterRef.current.style.color = `rgb(${color})`
      cursorOuterRef.current.innerHTML = `DRAG`
      cursorOuterRef.current.style.fontSize = `1px`

    } else {
      cursorInnerRef.current.style.transform = 'scale(1)'
      cursorOuterRef.current.style.transform = 'scale(1)'
      cursorOuterRef.current.innerHTML = ``
      cursorOuterRef.current.style.backgroundColor = `rgba(${color},0.4)`
    }
  }, [innerScale, outerScale, dragOuterScale, dragInnerScale, dragColor, color, isActive, dragIsActive])

  useEffect(() => {
    if (isActiveClickable) {
      cursorInnerRef.current.style.transform = `scale(${innerScale * 1.3})`
      cursorOuterRef.current.style.transform = `scale(${outerScale * 1.4})`
    }
  }, [innerScale, outerScale, isActiveClickable])

  useEffect(() => {
    if (isVisible) {
      cursorInnerRef.current.style.opacity = 1
      cursorOuterRef.current.style.opacity = 1
    } else if (dragIsVisible) {
      cursorInnerRef.current.style.opacity = 1
      cursorOuterRef.current.style.opacity = 1
    }
    else {
      cursorInnerRef.current.style.opacity = 0
      cursorOuterRef.current.style.opacity = 0
    }
  }, [isVisible, dragIsVisible])

  useEffect(() => {
    const dragCarousel = document.querySelectorAll(
      '.dragCarousel *'
    )
    const clickables = document.querySelectorAll(
      'a, input[type="submit"], input[type="image"], label[for], select, button, .link'
    )
    dragCarousel.forEach((el) => {
      el.style.cursor = 'none'
      el.addEventListener('mouseover', () => {
        setdragIsActive(true)
      })
      el.addEventListener('click', () => {
        setdragIsActive(true)
        setIsActiveClickable(true)
      })
      el.addEventListener('mouseup', () => {
        setdragIsActive(true)
      })
      el.addEventListener('mouseout', () => {
        setdragIsActive(false)
      })
    })
    clickables.forEach((el) => {
      el.style.cursor = 'none'
      el.addEventListener('mouseover', () => {
        setIsActive(true)
      })
      el.addEventListener('click', () => {
        setIsActive(true)
        setIsActiveClickable(false)
      })
      el.addEventListener('mousedown', () => {
        setIsActiveClickable(true)
      })
      el.addEventListener('mouseup', () => {
        setIsActive(true)
      })
      el.addEventListener('mouseout', () => {
        setIsActive(false)
        setIsActiveClickable(false)
      })
    })

    return () => {
      dragCarousel.forEach((el) => {
        el.removeEventListener('mouseover', () => {
          setdragIsActive(true)
        })
        el.removeEventListener('click', () => {
          setdragIsActive(true)
        })
        el.removeEventListener('mouseup', () => {
          setdragIsActive(true)
        })
        el.removeEventListener('mouseout', () => {
          setdragIsActive(false)
        })
      })
      clickables.forEach((el) => {
        el.removeEventListener('mouseover', () => {
          setIsActive(true)
        })
        el.removeEventListener('click', () => {
          setIsActive(true)
          setIsActiveClickable(false)
        })
        el.removeEventListener('mousedown', () => {
          setIsActiveClickable(true)
        })
        el.removeEventListener('mouseup', () => {
          setIsActive(true)
        })
        el.removeEventListener('mouseout', () => {
          setIsActive(false)
          setIsActiveClickable(false)
        })
      })
    }
  }, [isActive])

  const styles = {
    cursor: {
      position: 'fixed',
      zIndex: 999,
      opacity: 1,
      pointerEvents: 'none',
      transition: 'opacity 0.15s ease-in-out, transform 0.15s ease-in-out'
    },
    cursorInner: {
      zIndex: 999,
      position: 'fixed',
      borderRadius: '50%',
      width: innerSize,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: innerSize,
      pointerEvents: 'none',
      backgroundColor: `rgba(${color}, 1)`,
      transition: 'opacity 0.15s ease-in-out, transform 0.25s ease-in-out'
    },
    cursorOuter: {
      position: 'fixed',
      borderRadius: '50%',
      zIndex: 999,
      pointerEvents: 'none',
      display: 'flex',
      scale: '7',
      justifyContent: 'center',
      alignItems: 'center',
      width: outerSize,
      height: outerSize,
      // padding:'30px',
      backgroundColor: `rgba(${color}, ${outerAlpha})`,
      transition: 'opacity 0.15s ease-in-out, transform 0.15s ease-in-out'
    }
  }

  return (
    <>
      <div ref={cursorOuterRef} style={styles.cursorOuter} />
      <div ref={cursorInnerRef} style={styles.cursorInner} />
    </>
  )
}

export default AnimatedCursor