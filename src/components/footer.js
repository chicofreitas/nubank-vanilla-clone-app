import fragmentBuilder from "../helpers/fragmentBuilder.js"
const footer = `
    <footer>
        <div id='footer-logo'>
            Logo goes here
        <div>

        <div>
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Contact us</li>
            </ul>
        </div>

        <div>
            3rd column
        </div>
    </footer>
`
export default fragmentBuilder(footer)