//your code here!
const list = document.getElementById('infi-list');
let count = 10;

list.addEventListener('scroll', () => {
if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
for (let i = 0; i < 2; i++) {
const listItem = document.createElement('li');
listItem.innerText = Item ${++count};
list.appendChild(listItem);
}
}
});
