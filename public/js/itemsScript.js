const addForm = document.querySelector('.addForm');
const itemList = document.querySelector('.itemList');
const updForm = document.querySelector('.updForm');

if (updForm) {
  updForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
      name, url, description, price, article,
    } = e.target;
    const { id } = e.target.dataset;
    // const  id  = e.target.dataset.id;
    const res = await fetch(`/api/items/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        url: url.value,
        price: price.value,
        description: description.value,
        article: article.value,
      }),
    });
    const data = await res.json();
    if (data.itemUpd[0] > 0) {
      window.location.href = '/';
    }
  });
}

if (itemList) {
  itemList.addEventListener('click', async (e) => {
    if (e.target.classList.contains('deleteItem')) {
      const itemOne = e.target.closest('.itemOne');
      const res = await fetch(`/api/items/${itemOne.dataset.id}/delete`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.delItem) {
        itemOne.remove();
      }
    }
  });
}

if (addForm) {
  addForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
      name, url, description, price, article, action, method,
    } = e.target;
    const res = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        url: url.value,
        description: description.value,
        price: price.value,
        article: article.value,
      }),
    });
    const data = await res.json();
    if (data.html) {
      itemList.insertAdjacentHTML('beforeend', data.html);
    }
    if (data.message) {
      document.querySelector('.errorAdd').innerHTML = data.message;
    }
  });
}
