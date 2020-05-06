document.addEventListener('DOMContentLoaded', function() {
    loadFromLocalStorage();
    let list = document.querySelector('ul');
    let btn = document.querySelector('button');
    btn.addEventListener('click', function(e) {
        let todo = document.querySelector('input[name="todoitem"]').value;
        addItem(list, todo);
        saveToDo(todo, '');
        todo.value = '';
    });

    function addItem(list,todo, status) {
      let listItem = document.createElement('li');
      listItem.innerText = todo;
      if (status) {
        listItem.classList = status;
      }
      list.append(listItem);
    }


    list.addEventListener('click', function(e){
       if (e.target.tagName == 'LI') {
           if (e.target.className == 'done') {
               e.target.className = '';
               } else {
                   e.target.className = 'done';
               }
           }
           var itemText = e.target.innerText;
           saveToDo(itemText, 'done');
    });

    list.addEventListener('dblclick', function(e){
       if (e.target.tagName == 'LI') {
          var todoItem = e.target.innerText;
           e.target.remove();
           localStorage.removeItem(todoItem);
           }
    });

    function saveToDo(todoValue, status) {
        var item = {todoName: todoValue, todoStatus: status};

        if (localStorage.getItem(todoValue)) {
            var stored = JSON.parse(localStorage.getItem(todoValue));
            if (status != stored["todoStatus"]) {
              localStorage.setItem(todoValue, JSON.stringify(item));
              console.log("updated");
            }
        } else {
            localStorage.setItem(todoValue, JSON.stringify(item));
            console.log('added!');
            }

    }

    function adjustStatus(e, status) {
      e.target.className = status;
    }

    function loadFromLocalStorage() {
      let list = document.querySelector('ul');
        if (localStorage.length > 0) {
          for (item in localStorage) {
            var todoItem = JSON.parse(localStorage.getItem(item));
            if (typeof todoItem === 'object' && todoItem !== null) {
              addItem(list, todoItem['todoName'], todoItem['todoStatus']);
            }
          }
        } else {
          console.log('storage empty');
        }
    }

});
