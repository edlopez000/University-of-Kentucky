import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    styles: {
        global: {
          "html, body": {
            bg: "#2F303A",
            fontFamily: 'AvenirNextLT'
          }
        },
    },
    colors: {
        brand: {
            100: "#f7fafc",
            300: "#041E42",
            900: "#0033A0"
        },
        teasers: {
            100: "#1f2c5e"
        },
        hover: {
            100: "#1897d4"
        },
        sideNavSection: {
            100: " #B1C9E8"
        }

    }
})

export default theme