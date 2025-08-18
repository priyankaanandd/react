const reactelement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'click me to visit google '
}


const main=document.querySelector('#root')


customRender(reactelement,mainContainer)


