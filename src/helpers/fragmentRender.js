const fragmentRender = (template, options) => {
    
    const fragment = document.createElement('div')

    fragment.insertAdjacentHTML('beforeend', template)

    options.binders.map( (item)  => {
            
            if(item.init) {
                fragment.querySelector(`[${item.name}]`).textContent = item.init
            }
    
            if(item.onClick){
                fragment.addEventListener('click', e => item.onClick(e) )
            } 
        })
    
    return fragment
}

export default fragmentRender