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
        buttons: {
            main: "#0033A0"
        }
    }
})

export default theme