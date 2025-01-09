import React from 'react';
import styles from "./Carousel.module.scss";
import {MdKeyboardArrowLeft} from "react-icons/md";
import {MdKeyboardArrowRight} from "react-icons/md";

interface ChildrenTypes {
  children: React.ReactNode[]
}


export const Carousel = ({children}: ChildrenTypes) => {
  const containerRef = React.useRef<HTMLUListElement | null>(null);
  const [current, setCurrent] = React.useState(1);
  const [translateX, setTranslateX] = React.useState(0)

  const slides: React.JSX.Element[] | undefined | null = React.useMemo(() => {

    if (children.length > 1) {
      let items = React.Children.map(children, (child, i) => (
        <li className={styles.slide} key={i}>{child}</li>
      ));

      return [
        <li key={children.length + 1} className={styles.slide}>{children[children.length - 1]}</li>,
        // @ts-ignore
        ...items,
        <li key={children.length - 1} className={styles.slide}>{children[0]}</li>,
      ]
    }

  }, [children])

  React.useLayoutEffect(() => {

    if (containerRef.current !== null) {
      setTranslateX(containerRef.current.clientWidth * current)
    }
  }, [])

  const clickHandler = (mode: string) => {
    if (mode === "prev") {
      if (current <= 1) {
        setTranslateX(0)
        setCurrent(children.length)
      } else {
        if (containerRef.current !== null) {
          setTranslateX(containerRef.current.clientWidth * (current - 1))
          setCurrent((prev) => --prev)
        }
      }
    } else if (mode === "next") {
      if (current >= children.length) {
        if (containerRef.current !== null) {
          setTranslateX(containerRef.current.clientWidth * (children.length + 1))
        }
        setCurrent(1)
      } else {
        if (containerRef.current !== null) {
          setTranslateX(containerRef.current.clientWidth * (current + 1))
          setCurrent((prev) => ++prev)
        }
      }
    }
  }

  React.useEffect(() => {
    const transitionEnd = () => {
      // if (current <= 1 && containerRef.current !== null) {
      //   containerRef.current.style.transitionDuration = "0ms"
      //   setTranslateX(containerRef.current.clientWidth * (current - 1))
      // }

      // if (current >= children.length && containerRef.current !== null) {
      //   containerRef.current.style.transitionDuration = "0ms"
      //   setTranslateX(containerRef.current.clientWidth * children.length)
      // }
    }

    document.addEventListener("transitionend", transitionEnd)

    // return () => document.removeEventListener("transitionend", transitionEnd)
    
  }, [current, children])


  return (
    <div className={styles.root}>
      <MdKeyboardArrowLeft className={styles.arrow_icon} onClick={() => clickHandler("prev")}/>
      <div className={styles.window}>
        <ul ref={containerRef} className={styles.container}
            style={{transform: `translate3d(${-translateX}px, 0, 0)`}}>
          {slides}
        </ul>
      </div>
      <MdKeyboardArrowRight className={styles.arrow_icon} onClick={() => clickHandler("next")}/>
    </div>
  );
};

