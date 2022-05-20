(function () {
    // Je selectionne le parent "main"
                             // STYLE JAVASCRIPT FORMULAIRE

    const contact = document.querySelector('.main');
    // contact.style.display = 'flex';
    // contact.style.flexDirection = 'column';
    // contact.style.justifyContent = 'center';

                    // ---------------------------------------------

                                    // FORMULAIRE DE CONTACT

    const title = document.createElement('h1');
    title.textContent = 'Contact Us';
    title.style.color = '#fff';
    contact.appendChild(title);
    //je crée un element section avec une class "contact"
    const section = document.createElement('section');
    section.classList.add('contact');
    //J'inject la section dans le parent "main"
    contact.appendChild(section);
    //je creer un element form avec une class "form-contact" 
    const form = document.createElement('form');
    form.classList.add('form-contact');
    section.appendChild(form)

    const divOne = document.createElement('div');
    divOne.classList.add('name');
    form.appendChild(divOne);

    const labelOne = document.createElement('label');
    labelOne.textContent = 'name';
    divOne.appendChild(labelOne);

    const inputOne = document.createElement('input');
    inputOne.setAttribute('type', 'text');
    inputOne.placeholder = 'Your name';
    divOne.appendChild(inputOne);

                        // ----EMAIL----

    const divtwo = document.createElement('div');
    divtwo.classList.add('email');
    form.appendChild(divtwo);

    const labeltwo = document.createElement('label')
    labeltwo.textContent = 'email';
    divtwo.appendChild(labeltwo);

    const inputtwo = document.createElement('input');
    inputtwo.setAttribute('type', 'text');
    inputtwo.placeholder = 'your email';
    divtwo.appendChild(inputtwo);

    // ------MESSAGE-------

    const divthree = document.createElement('div');
    divthree.classList.add('message');
    form.appendChild(divthree);

    const labelthree = document.createElement('label')
    labelthree.textContent = 'message';
    divthree.appendChild(labelthree);

    const inputthree = document.createElement('textarea');
    inputthree.setAttribute('type', 'text');
    inputthree.placeholder = 'your message';
    divthree.appendChild(inputthree);

    // -----SEND-----
    const inputfor = document.createElement('a');
    inputfor.textContent = 'Envoyer';
    inputfor.href = '#';
    inputfor.classList.add('btn');
    form.appendChild(inputfor);

})();