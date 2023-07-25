const ItList = document.querySelector('.itemList');
const Carts = document.querySelector('.carts');

if (ItList) {
  ItList.addEventListener('click', async (e) => {
    if (e.target.classList.contains('favBut')) {
      const id = e.target.dataset.id;
      const res = await fetch('/api/carts', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          iteId: id,
        }),
      });
      const data = await res.json();
    }
  });
}

if (Carts) {
  Carts.addEventListener('click', async (e) => {
    if (e.target.classList.contains('delFavBut')) {
      const oneCard = e.target.closest('.itemOne');
      const res = await fetch(`/api/carts/${e.target.dataset.id}/delete`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.delCart) {
        oneCard.remove();
      }
    }
  });
}
