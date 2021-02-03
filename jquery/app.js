let $button = $('<button>Click Me!</button>');
$button.appendTo('body');
$button.click(function () {
    alert('switzerland is great. i know nothing about them, but their flag is a big plus')
});

let $button2 = $('#button2');
$button2.click( function () {
    let btnText = $('#text-box').val();
    console.log(btnText);
    alert(btnText);
});

let $div = $('#hoverDiv');
$('#hoverDiv').css('height', '200px');    
$('#hoverDiv').css('width', '200px');    

$('#hoverDiv').css('background-color', 'purple');    
$div.hover(function() {
    $('#hoverDiv').css('background-color', 'purple');    
}, function() {
    $('#hoverDiv').css('background-color', 'maroon');    
});

let $p = $('<p>$GME go brrr</p>');
$p.click( function() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    $($p).css('color',"#" + randomColor);
    $($randomColor).appendTo($p);
});

let $button3 = $('#button3');
let $div2 = $('#div');
$button.click( function() {
    let $span = $('<span>Shawn</span>');
    $($span).appendTo($div2);
});


let $friends = ['chevy', 'angelica', 'josh', 'charles', 'ethan', 'prim', 'jose', 'athena', 'justin', 'drew'];
let $button4 = $('#button4');
let $ul = $('#ul');
$($button).click( function () {
    for (let i = 0; i < $friends.length; i++) {
        let $li = $('<li>' + ($friends[i]) + '</li>');
        $($li).appendTo($ul);
    }
});
