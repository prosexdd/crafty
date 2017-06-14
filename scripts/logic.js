var navbar = document.getElementById('navbar');
var active = navbar.getElementsByTagName('li');
console.log(active);

navbar.addEventListener( 'click', function(event){
    if( event.target && event.target.className !== 'search'){
        var child = event.target.parentNode;
        console.log(event.target);
        //console.log(child);
        for( var i = 0; i< active.length-1; i++ ){
            var removal = active[i].getElementsByTagName('a');
            //console.log(removal[0].classList);
            removal[0].classList = '';
        }
        child.childNodes[0].className = 'active';
    }  
}, {passive: true});

