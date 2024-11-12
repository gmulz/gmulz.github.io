import { Josefin_Sans, Lato } from 'next/font/google'
import { createSystem, defaultConfig, defineConfig, mergeConfigs } from '@chakra-ui/react'

const josefinSans = Josefin_Sans({ subsets: ['latin']})
const lato = Lato({ subsets: ['latin'], weight: '400'})

const theme = defineConfig({
  theme: {
    tokens: {
      colors: {
        green: {
          value: "#54D27E"
        },
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