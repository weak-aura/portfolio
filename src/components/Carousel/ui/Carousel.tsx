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
      let items = React.Children.map(children, (child, index) => (
        <li className={styles.slide} key={index}>{child}</li>
      ));

      return [
        <li key={children.length - 1} className={styles.slide}>{children[children.length - 1]}</li>,
        // @ts-ignore
        ...items,
        <li key={children.length - children.length} className={styles.slide}>{children[0]}</li>,
      ]
    }

  }, [children])

  React.useEffect(() => {
    if(containerRef.current !== null) {
      containerRef.current.style.transitionDuration = "0ms"
      setTranslateX(containerRef.current.clientWidth * current)
    }
  },[])

  const clickHandler = (mode: string) => {
    if(mode === "prev") {
      if(current === current && containerRef.current !== null) {
        setTranslateX(containerRef.current.clientWidth * (current - 1))
      }else {
        setCurrent(3)
      }
    }
  }


  return (
    <div className={styles.root}>
      <MdKeyboardArrowLeft className={styles.arrow_icon} onClick={() => clickHandler("prev")}/>
      <div className={styles.window}>
        <ul ref={containerRef} className={styles.container}
            style={{transform: `translateX(${-translateX}px`}}>
          {slides}
        </ul>
      </div>
      <MdKeyboardArrowRight className={styles.arrow_icon} onClick={() => clickHandler("next")}/>
    </div>
  );
};

