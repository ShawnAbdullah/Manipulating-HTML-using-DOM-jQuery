document.addEventListener('DOMContentLoaded', function() {
    let button = document.createElement('button');
    let btnText = document.createTextNode('click here');
    button.appendChild(btnText);
    document.body.appendChild(button);
    
    button.addEventListener('click', function () {
        alert('switzerland is great. i know nothing about them, but their flag is a big plus')
    })

    let button2 = document.getElementById('button2');
     button2.addEventListener('click', function () {
        let text = document.getElementById('textbox').value;
        alert(text);
    })

    let hoverDiv = document.getElementById('hoverDiv')
    hoverDiv.style.backgroundColor = 'purple';
    hoverDiv.style.height = '200px';
    hoverDiv.style.width = '200px';
    hoverDiv.addEventListener('mouseover', function() {
        hoverDiv.style.backgroundColor = 'maroon';
    })
    hoverDiv.addEventListener('mouseout', function() {
        hoverDiv.style.backgroundColor = 'purple'
    })

    let paragraph = document.createElement ('paragraph');
    let ptext = document.createTextNode ('$GME go brrr');
    paragraph.appendChild(ptext);
    document.body.appendChild(paragraph);
    paragraph.style.color = 'green';

    paragraph.addEventListener('click', function getRandomColor() {
        let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        paragraph.style.color = randomColor;
    })
    
    let button3 = document.createElement('button');
    let btn3Text = document.createTextNode('empty div');
    button3.appendChild(btn3Text);
    document.body.appendChild(button3);

    let div = document.createElement('div');

    button3.addEventListener('click', function () {
        let span = document.createElement('span');
        let spanText = document.createTextNode(div.localName);
        span.appendChild(spanText);
        document.body.appendChild(span);
    })

    let friends = ['chevy', 'angelica', 'josh', 'charles', 'ethan', 'prim', 'jose', 'athena', 'justin', 'drew']
    let button4 = document.getElementById('friendslist')
    let ul = document.getElementById('ul')
    button4.addEventListener('click', function() {
        for (let i = 0; i < friends.length; i++) {
            let li = document.createElement('li');
            let name = document.createTextNode(friends[i]);
            li.appendChild(name);
            ul.appendChild(li);
        }

})
})