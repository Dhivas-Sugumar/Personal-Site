import styled from '@emotion/styled';
import {motion } from "framer-motion";


const Glow = styled(motion.div)`
  background: 'linear-gradient(90deg, #ffa0ae 0%, #aacaef 75%)',
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  WebkitFilter: 'blur(15px)',
  filter: 'blur(15px)',
  borderRadius: '16px',
`

const GlowWrapper = styled(motion.div)`
    position: 'relative',
    width: '300px',
    height: '120px',
`

export {Glow, GlowWrapper}
