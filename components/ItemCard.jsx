const React = require('react');
const Layout = require('./Layout');

module.exports = function ApartmentCard({ title, item, userLogin }) {
  return (
    <Layout title={title} userLogin={userLogin}>
      <div className="itemOne_card" data-id={item.id}>
        <div className="apartment_card grey darken-1">
          <div className="card-image">
            <img className="photo" src={item.url} />
          </div>
          <div className="description_container">
            <span className="oneCard-title">{item.name}</span>
            <div className="card-content">
              Стоимость:
              <span className="oneCard-price">{item.price}</span>
            </div>
            <div className="card-content">
              <span className="oneCard-title">
                Описание: {item.description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
