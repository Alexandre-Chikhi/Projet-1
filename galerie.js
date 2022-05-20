(function(){
    // je crée un tableau pour mes images
    const gallery = [
        "source/stand/showroomskp1.jpg",
        "source/stand/standskp1.jpg",
        "source/stand/stickers.jpg",
        "source/stand/stickers2.jpg",
        "source/shooting/fabienv1.jpg",
        "source/designangry/francky-pub.jpg",
        "source/shooting/fabienv2.jpg",
        "source/shooting/franckyv2.jpg",
        
       

    ];
    // je selectionne l'element parent 
    const content = document.querySelector('.gallery-container');
    //je fais une boucle forEach pour recuperer mes images dans mon tableau.
    gallery.forEach(source => {
        // je crée une balise IMG <img>
        const img = document.createElement('img');
        // j'injecte le chemin de mes images
        img.src = source;
        // j'injecte le titre des images 
        img.alt = 'image gallery'
        // j'injecte mes images dans le parent - gallery-container
        content.appendChild(img);
    });
})();


