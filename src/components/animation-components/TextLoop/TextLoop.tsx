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
      enter: direction => {
        return {
          y: -20,
          opacity: 0
        };
      },
      center: {
        zIndex: 1,
        y: 0,
        opacity: 1
      },
      exit: direction => {
        return {
          zIndex: 0,
          opacity: 0
        };
      }
      }
    return(
<AnimatePresence >
        <motion.span
                  style={{ position: "absolute", textAlign: "center" }}
          key={index}
          layout
          variants={loopVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            y: { type: "spring", stiffness: 300, damping: 200 },
            opacity: { duration: 0.5 }
          }}
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    )
}

export default TextLoop
