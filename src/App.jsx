import { GlobalStyle } from "./globalStyles/GlobalStyle"
import { Reset } from "./globalStyles/reset"
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
