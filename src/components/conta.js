import fragmentBuilder from "../helpers/fragmentBuilder.js"

const styles = {
    main: `
        padding: 5px 10px;
    `,
    saldo: `
        margin: 10px 0;
        padding: 15px;
    `
}

const states = {
    counter: 100.00
}

const contaFragment = fragmentBuilder(
`
    <div style="${styles.main}">
        <div>
        <p>Conta</p>
        <span s-counter style="${styles.saldo}"></span>
        </div>
    </div>
`
)

contaFragment.querySelector('[s-counter]').textContent = `R$ ${states.counter}`

contaFragment.addEventListener('click', (e) => {
    e.target.textContent = e.target.hasAttribute('s-counter') ?`R$ ${++states.counter}` : e.target.textContent
})

export default contaFragment