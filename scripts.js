document.addEventListener('DOMContentLoaded', () => {
    const hamburguerDestaque = {
        nome: 'Hambúrguer Especial da Casa',
        descricao: 'Um hambúrguer artesanal com carne suculenta, queijo cheddar derretido, alface, tomate e molho especial.',
        imagem: 'assets/img/hamburguer_grande.jpg'
    };

    const outrosHamburgueres = [
        {
            nome: 'Hambúrguer Clássico',
            descricao: 'Carne bovina grelhada com queijo, alface, tomate e maionese.',
            imagem: 'assets/img/hamburguer_classico.jpg'
        },
        {
            nome: 'Cheeseburguer Duplo',
            descricao: 'Dois hambúrgueres suculentos com queijo duplo, picles e molho especial.',
            imagem: 'assets/img/cheeseburguer_duplo.jpg'
        },
        {
            nome: 'Hambúrguer de Frango Crocante',
            descricao: 'Peito de frango empanado com alface, tomate e molho de maionese.',
            imagem: 'assets/img/hamburguer_frango.jpg'
        },
        {
            nome: 'Veggie Burger',
            descricao: 'Hambúrguer de grão-de-bico com alface, tomate, e molho de ervas.',
            imagem: 'assets/img/veggie_burger.jpg'
        }
    ];

    const destaqueContainer = document.getElementById('hamburguer-destaque');
    const cardDestaque = document.createElement('div');
    cardDestaque.classList.add('card-destaque');

    const imgDestaque = document.createElement('img');
    imgDestaque.src = hamburguerDestaque.imagem;
    imgDestaque.alt = hamburguerDestaque.nome;

    const destaqueBody = document.createElement('div');
    destaqueBody.classList.add('destaque-body');

    const h2Destaque = document.createElement('h2');
    h2Destaque.textContent = hamburguerDestaque.nome;

    const pDestaque = document.createElement('p');
    pDestaque.textContent = hamburguerDestaque.descricao;

    destaqueBody.appendChild(h2Destaque);
    destaqueBody.appendChild(pDestaque);
    cardDestaque.appendChild(imgDestaque);
    cardDestaque.appendChild(destaqueBody);
    destaqueContainer.appendChild(cardDestaque);

    const listaContainer = document.getElementById('lista-hamburgueres');
    outrosHamburgueres.forEach(hamburguer => {
        const item = document.createElement('div');
        item.classList.add('hamburguer-item');

        const img = document.createElement('img');
        img.src = hamburguer.imagem;
        img.alt = hamburguer.nome;
        img.classList.add('hamburguer-img');

        const itemBody = document.createElement('div');
        itemBody.classList.add('item-body');

        const h3 = document.createElement('h3');
        h3.textContent = hamburguer.nome;

        const p = document.createElement('p');
        p.textContent = hamburguer.descricao;

        itemBody.appendChild(h3);
        itemBody.appendChild(p);
        item.appendChild(img);
        item.appendChild(itemBody);
        listaContainer.appendChild(item);
    });
});
