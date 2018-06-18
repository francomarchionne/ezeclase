// Creador de li 
function liCreator(url, width, height){
    // Crear el li 
    var li = document.createElement("li");
    //Agregar los estilos al li
     li.style = "width:"+width+";height:"+height+";float:left;"; 
   //Crear un img 
   var img = document.createElement("img"); 
   // Asignarle el url
    img.src = url; 
   // Agregar el img al li
    li.appendChild(img); 
   //Devolver el li 
   return li; } 
   // Crear el Array 
   var urlImageList = [ "img/argentina.png" ,"img/croacia.png" ,"img/nigeria.png","img/islandia.png" ] 
   //Definir el ancho en pixels de cada LI
    var liWidth = 300; 
   // Definir el ancho del LI 
   var liHeight = 250; 
   // Tomar la referencia del container 
   var container = document.getElementById("slider"); 
   // Crear el UL 
   var ul = document.createElement("ul"); 
   //Obtener el largo del array
    var totalLi = urlImageList.length; 
   // De acuerdo al largo del array asignar el ancho de container
    // multiplicando el ancho de cada LI por el largo del array 
    var containerWidth = totalLi * liWidth; container.style = "width:" + liWidth + "px;height:"+liHeight+";overflow:hidden;";
    // asignar estilos al uls
     ul.style = "width:"+ containerWidth +"px;list-style-type:none;transition:margin-left 0.7s;"; var li; 
   //Por cada elemento del Array
    for(var index=0; index < totalLi; index++ ){ 
   // Crear un LI 
   var url = urlImageList[index]; li = liCreator(url, liWidth+"px", liHeight+"px"); 
   //Agregarlo al UL
    ul.appendChild(li); 
   //Agregar ul al container
    container.appendChild(ul); 
   } 
   //Mueve al UL en base a un index
    function mover(index){ 
   //la posicion es igual a multiplicar: index * liWidth y hacerlo negativo 
   ul.style.marginLeft = -(index*liWidth)+"px"; }
    var index = 0; function indexHandler(){ index ++; if(index >= totalLi){ index = 0; } } 
   setInterval(function(){ indexHandler(); mover(index); }, 1000);
   