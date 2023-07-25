const React = require('react');
const Layout = require('./Layout');
const Item = require('./Item');

module.exports = function Carts({ carts, title, userLogin }) {
  return (
    <Layout title={title} userLogin={userLogin}>
      <div className="carts">
        {carts.map((cart) => {
          return (
            <Item
              item={cart.Item}
              key={cart.id}
              userLogin={userLogin}
              cart={cart}
            />
          );
        })}
      </div>
    </Layout>
  );
};
