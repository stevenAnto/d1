const mediaQuery= window.matchMedia('(max-width: 720px)');

function cambiarDisposicion(){
const iconosInteriores = document.getElementsByClassName('interiorIcones');
const menuDesplegable = document.getElementsByClassName('hamburgerMenu');
console.log("menuDesplegable",menuDesplegable[0]);
console.log("iconosInteriores",iconosInteriores[0]);
    if(mediaQuery.matches ){
        console.log("entro mediaQuery");
    }
}

cambiarDisposicion(mediaQuery);

mediaQuery.addListener(cambiarDisposicion);

window.addEventListener('resize',()=>{
    cambiarDisposicion(mediaQuery);
});
