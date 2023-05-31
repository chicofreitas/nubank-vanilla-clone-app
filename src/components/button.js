import fragmentBuilder from "../helpers/fragmentRender.js"
const styles = {
    main: `
        padding: 5px 10px;
    `,
    button: `
        padding: 4px 8px;
        color: #fff;
        background-color: #a21caf;
        border: solid 1px #a21caf;
        border-radius: 5px;
    `
}
const template = `
<div style="${styles.main}">
    <button s-button style="${styles.button}">Click me</button>
</div>
`
const options = {
    binders: [
        {   
            name: 's-button',
            init: 'Me clica',
            onClick: (e) => {
                e.target.textContent = e.target.hasAttribute('s-button') ? "Clicado" : e.target.textContent
            }
        },
    ]
}
export default fragmentBuilder(template, options)