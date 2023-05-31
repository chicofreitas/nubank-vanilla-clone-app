import fragmentBuilder from "../helpers/fragmentBuilder.js"
const styles = {
    navWrapper: `
        background-color: #a21caf;
    `,
    navigation: `
        list-style:none;
    `,
    anchor: `
        text-decoration:none;
        color: #000;
    `
}
const navbar = `
    <nav style="${styles.navWrapper}">
        <ul style="${styles.navigation}">
            <li>
                <a href='/' style="${styles.anchor}">Home</a>
            </li>
        </ul>
    </nav>
`
export default fragmentBuilder(navbar)
