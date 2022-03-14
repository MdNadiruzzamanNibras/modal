document.getElementById('open').addEventListener('click', ()=>{
    
    document.getElementById('modal-container').classList.add('show')
})
document.getElementById('close').addEventListener('click', ()=>{
    document.getElementById('modal-container').classList.remove('show')
})