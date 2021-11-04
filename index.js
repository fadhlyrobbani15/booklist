const filterInput= document.querySelector('#filterInput');

filterInput = addEventListener('keyup', bookTitles);

function bookTitles(){
    const filterValue = document.querySelector('#filterInput').value.toUpperCase();
    
    const ul = document.querySelector('#books');
    const li = ul.querySelectorAll('li.collection-item');

    for(let i=0; i < li.length; i++){
        let a = li[i].getElementsByTagName('a')[0];

        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            li[i].style.display= '';
        } else {
            li[i].style.display = 'none';
        }
    }
}