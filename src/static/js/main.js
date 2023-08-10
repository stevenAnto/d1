import { ruta } from "../../api/jspost.js";

export async function ChangeTags(){
  let dir = ruta + "tag/"
    try {
        let newpost = await fetch(dir, {
          method: 'GET',
        });
      
        if (!newpost.ok) {
          throw new Error('Network response was not ok');
        }
      
        let data = await newpost.json();
        data.sort(function(a, b) {
          return a.id - b.id;
        });
        const nombres = data.map(item => item.name);

        const elementos = document.querySelectorAll('.numtag');

        elementos.forEach(elemento => {
          elemento.textContent= nombres[elemento.textContent-1]
        });
    }catch (error){
        console.error('There was a problem with the fetch operation:', error);
    }
}

export function indexTag(){
  const tagInput = document.getElementById('TagInput');
  const opciones = document.getElementById('opciones');
  const valorSeleccionado = tagInput.value;      
  for (let i = 0; i < opciones.options.length; i++) {
    if (opciones.options[i].value === valorSeleccionado) {
      return i + 1;
    }
  }
  return 0;
}

export function dislike(id){
  const ic= document.getElementById("icdlk" + id);
  const lkcount= document.getElementById("dlk" + id);
  if(ic.getAttribute("data-active") == "0"){
    if(document.getElementById("iclk" + id).getAttribute("data-active") == "1"){
      like(id);
    }
    const nlike = parseInt(lkcount.textContent) + 1;
    lkcount.textContent = nlike;
    lkcount.setAttribute("style","color:#831617");
    ic.setAttribute("style","color:#831617");
    ic.setAttribute("data-active", 1);
  }else{
    const nlike = parseInt(lkcount.textContent) - 1;
    lkcount.textContent = nlike;
    lkcount.removeAttribute("style");
    ic.removeAttribute("style");
    ic.setAttribute("data-active", 0);
  }
}

export function like(id){
  const ic= document.getElementById("iclk" + id);
  const lkcount= document.getElementById("lk" + id);
  if(ic.getAttribute("data-active") == "0"){
    if(document.getElementById("icdlk" + id).getAttribute("data-active") == "1"){
      dislike(id);
    }
    const nlike = parseInt(lkcount.textContent) + 1;
    lkcount.textContent = nlike;
    lkcount.setAttribute("style","color:#831617");
    ic.setAttribute("style","color:#831617");
    ic.setAttribute("data-active", 1);
  }else{
    const nlike = parseInt(lkcount.textContent) - 1;
    lkcount.textContent = nlike;
    lkcount.removeAttribute("style");
    ic.removeAttribute("style");
    ic.setAttribute("data-active", 0);
  }
  
  /*let formdata= new FormData()
      formdata.append('post', id)
      formdata.append('user', 2)
      formdata.append('post_reaction')
  lkcount.textContent = nlike;
  let dir= ruta + "post/" + id + "/"
  let newpost = await fetch(dir,{
    method: 'PATCH',
    body: formdata
  }).then(responde => responde.json).catch(error =>{
    console.error(error);
  })*/
}