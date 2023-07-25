const Layout = require('./Layout');
const React = require('react');
const Item = require('./Item');
const AddForm = require('./AddForm');

module.exports = function ItemList({ title, items, carts, userLogin, userStat, userId }) {
  return (
    <Layout title={title} userLogin={userLogin}>
      {userStat && <AddForm />}
      <div className="row itemList">
        {items.map((item) => (
          <Item item={item} key={item.id} carts={carts} userLogin={userLogin} userStat={userStat} userId={userId} />
        ))}
      </div>
    </Layout>
  );
};
