const fragmentBuilder  = (el) => {
    const fragment = document.createElement('div')
    fragment.insertAdjacentHTML('beforeend', el)
    return fragment
}
export default fragmentBuilder