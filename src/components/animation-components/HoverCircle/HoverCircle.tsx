import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Glow, GlowWrapper } from "./HoverCircle.styles";
import { HoverCircleProps } from "../../../../lib/types";




const HoverCircle : React.FC<HoverCircleProps> = ({child}) => {


        const cardVariants = {
          hover: {
            scale: 1.05,
          },
          initial: {
            scale: 1,
          },
        };
      
        const glowVariants = {
          hover: {
            opacity: 0.8,
          },
          initial: {
            scale: 1.05,
            opacity: 0,
          },
        };

    return(
        <GlowWrapper initial="initial" whileHover="hover">
        <Glow
        variants={glowVariants}
        transition={{
          ease: 'easeOut',
          delay: 0.15,
        }}
      />
              <motion.div 
              className="rounded-full"
              variants={cardVariants}
              transition={{
                ease: 'easeOut',
                delay: 0.15,
                duration: 0.5,
              }}>
                {child}
              </motion.div>
        </GlowWrapper>
      
    )
}

export default HoverCircle