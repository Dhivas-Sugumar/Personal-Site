import React from "react"
import { AnimatePresence, motion } from "framer-motion";
import { TextLoopProps } from "../../../../lib/types"

const TextLoop : React.FC<TextLoopProps> = ( {texts} ) => {
    const [index, setIndex] = React.useState<number>(0);

    React.useEffect(() => {
      setTimeout(() => {
        let next = index + 1;
        setIndex(next % texts.length);
      }, 3 * 1000);
    }, [index, setIndex, texts]);


    const loopVariants = {
        enter: {
          translateY: 20,
          opacity: 0,
          height: 0
        },
        center: {
          zIndex: 1,
          translateY: 0,
          opacity: 1,
          height: "auto"
        },
        exit: {
          zIndex: 0,
          translateY: -20,
          opacity: 0,
          height: 0
        },
      }
    return(
<AnimatePresence initial={false}>
        <motion.span
          key={index}
          layout
          variants={loopVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            translateY: { type: "tween", ease: 'easeInOut'},
            opacity: { duration: 0.25 }
          }}
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    )
}

export default TextLoop
