const React = require('react');

module.exports = function Item({ item, userLogin, cart, userId, userStat }) {
  return (
    <div className="col s4 itemOne " data-id={item.id}>
      <div className="card item grey lighten-2">
        <div className="card-name">
          <span className="card-title">{item.name}</span>
        </div>
        <div className="card-image">
          <img className="imgItem" src={item.url} />
        </div>
        <div className="card-content">
          <span className="card-title">Артикул: {item.article}</span>
        </div>
        <div className="card-content">
          <span className="card-title">Стоимость: {item.price}</span>
        </div>
        <div className="card-content">
          <span className="card-title description">Описание: {item.description}</span>
        </div>
        <div className="button_box">
          {
            userId === item.userId && <><button className='deleteItem btn_inner'>Удалить</button>
            <a href={`/updForm/${item.id}`}><button className='updItem btn_inner'>Изменить</button></a>
            </>
          }
          {/* <button className="deleteAnimal btn_inner">Удалить</button>
          <a href={`/api/animals/updForm/${animal.id}`}>
            <button className="updAnimal btn_inner">Изменить</button>
          </a> */}
        </div>
        <div className="card-action grey darken-4">
          <a href={`/${item.id}`}>Узнать подробнее</a>

          {userLogin && !cart && (
            <button className="favBut" data-id={item.id}> 
            Добавить в корзину
            </button>
          )}

          {userLogin && cart && (
            <button className="delFavBut" data-id={cart.id}>
              Удалить из корзины
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
