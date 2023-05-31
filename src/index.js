import Navbar from "./components/navbar.js"
import Conta from "./components/conta.js"
import FooterFragment from "./components/footer.js"
import button from "./components/button.js"

const rootElement = document.getElementById('root')

rootElement.appendChild(Navbar)
rootElement.appendChild(Conta)
rootElement.appendChild(button)
rootElement.appendChild(FooterFragment)