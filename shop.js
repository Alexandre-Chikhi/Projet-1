(function(){
    const shop = [

        "Source/teeshirt/teev1.jpg",
        "Source/teeshirt/teev3.jpg",
        "Source/teeshirt/bandana.jpg",
        "Source/teeshirt/itslike.jpg",
        "Source/teeshirt/nwa1.jpg",
        "Source/teeshirt/tagred.jpg",
        "Source/teeshirt/nwa2.jpg",
        "Source/teeshirt/teev5.jpg",
        "Source/teeshirt/teev6.jpg",
        "Source/teeshirt/teev7.jpg",
        "Source/teeshirt/teev8.jpg",
        "Source/teeshirt/teev9.jpg",
        "Source/teeshirt/teev10.jpg",
    ];
    const container = document.querySelector('.container-shop');
    shop.forEach(item => {
        const img = document.createElement('img');
        img.src = item;
        img.alt = 'images shop';
        container.appendChild(img);
    });
})();
