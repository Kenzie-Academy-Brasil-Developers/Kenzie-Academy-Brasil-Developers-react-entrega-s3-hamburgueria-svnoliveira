import { GlobalStyle } from "./globalStyles/GlobalStyle.js"
import { Reset } from "./globalStyles/Reset.js"
import { Feed } from "./pages/feed"

export const App = () => {  
  
  return (
    <>
    <Reset />
    <GlobalStyle />
    <Feed />
    </>
  )
}
