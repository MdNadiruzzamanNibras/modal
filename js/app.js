document.getElementById('open').addEventListener('click', ()=>{
    console.log('click')
    document.getElementById('modal-container').classList.add('show')
})
document.getElementById('close').addEventListener('click', ()=>{
    document.getElementById('modal-container').classList.remove('show')
})