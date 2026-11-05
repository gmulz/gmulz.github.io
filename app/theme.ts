import { Josefin_Sans, Lato } from 'next/font/google'
import { createSystem, defaultConfig, defineConfig, mergeConfigs } from '@chakra-ui/react'

const josefinSans = Josefin_Sans({ subsets: ['latin']})
const lato = Lato({ subsets: ['latin'], weight: ['400', '700']})

const theme = defineConfig({
  globalCss: {
    "html, body": {
      background: "black",
      color: "white",
    },
  },
  theme: {
    tokens: {
      colors: {
        green: {
          value: "#54D27E"
        },
        grey: {
          value: "#1d1d1d"
        },
        // Slightly lighter than `grey`, used for borders / hover states
        greyLight: {
          value: "#2c2c2c"
        },
        // Secondary body copy
        muted: {
          value: "#b5b5b5"
        }
      },
      fonts: {
        heading: {
          value: josefinSans.style.fontFamily
        },
        subHeading: {
          value: josefinSans.style.fontFamily
        },
        body: {
          value: lato.style.fontFamily
        }
      }
    }
  }
})

const config = mergeConfigs(defaultConfig, theme)

export default createSystem(config)
