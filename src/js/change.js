export const Change = {
    
    One() {
       const  body = document.querySelector('#one')

        body.classList.add('one')
        body.classList.remove('three')
        body.classList.remove('two')
    },

    Two() {
        const  body = document.querySelector('#one')

        body.classList.add('two')
        body.classList.remove('three')
        body.classList.remove('one')
    },

    Three() {
        const  body = document.querySelector('#one')

        body.classList.add('three')
        body.classList.remove('two')
        body.classList.remove('one')
    }
}