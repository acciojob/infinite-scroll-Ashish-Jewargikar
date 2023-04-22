const list = document.getElementById("infi-list");

// Add 10 items to the list by default
for (let i = 1; i <= 10; i++) {
  const item = document.createElement("li");
  item.textContent = "Item " + i;
  list.appendChild(item);
}

// Add 2 more items when the user reaches the end of the list
list.addEventListener("scroll", () => {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    for (let i = 1; i <= 2; i++) {
      const item = document.createElement("li");
      item.textContent = "Item " + (list.children.length + i);
      list.appendChild(item);
    }
  }
});
