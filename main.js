let list = document.querySelectorAll('ol li')
let list2 = document.querySelectorAll('ul li')
let dinos = document.querySelectorAll('#row')
let button = document.querySelector('#destroy-all')



const lineThrough = function(event){
  const trigger = event.target;
    trigger.style.textDecoration = 'line-through'
}

const opacity = function(event){
    const trigger = event.target;
    trigger.style.opacity = '0'
}

const destroy = function(){
   death = document.querySelector('*');
   death.style.opacity = '0'
}

const smoosh = function(event){
    const trigger = event.target;
    trigger.style.opacity = '0';
    trigger.remove()

}

button.addEventListener('click', destroy)


for(const item of dinos){
    item.addEventListener('click', smoosh)
}


for(const item of list){
    item.addEventListener('click', lineThrough)
}

for(const item of list2){
    item.addEventListener('click', opacity)
}

