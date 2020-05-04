document.addEventListener('DOMContentLoaded', function() {
    let list = document.querySelector('ul');
    console.log(list);
    let btn = document.querySelector('button');
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        let todo = document.querySelector('input[name="todoitem"]');
        let listItem = document.createElement('li');
        listItem.innerText = todo.value;
        list.append(listItem);
    })
    
    list.addEventListener('click', function(e){
       if (e.target.tagName == 'LI') {
           if (e.target.className == 'done') {
               e.target.className = '';
               } else {
                   e.target.className = 'done';
               }
           }
    });
    
    list.addEventListener('dblclick', function(e){
       if (e.target.tagName == 'LI') {
           e.target.remove();
           }
    });
});