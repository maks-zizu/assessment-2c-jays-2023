const Layout = require('./Layout');
const React = require('react');

module.exports = function UpdateForm({ item, title, userLogin }) {
  return (
    <Layout title={title} userLogin={userLogin}>
      <div className="form row">
        <div className="s12 deep-purple darken-1">
          <form className="col s12 updForm" data-id={item.id}>
            <div className="row">
              <div className="input-field col s6">
                <input
                  name="name"
                  id="name"
                  className="validate"
                  placeholder="name"
                  defaultValue={item.name}
                  required
                />
              </div>
              <div className="input-field col s6">
                <input
                  name="price"
                  id="price"
                  className="validate"
                  placeholder="price"
                  defaultValue={item.price}
                  required
                />
              </div>
              <div className="input-field col s6">
                <input
                  name="description"
                  id="description"
                  className="validate"
                  placeholder="description"
                  defaultValue={item.description}
                  required
                />
              </div>
              <div className="input-field col s6">
                <input
                  name="url"
                  id="url"
                  className="validate"
                  placeholder="url"
                  defaultValue={item.url}
                  required
                />
              </div>
              <div className="input-field col s6">
                <input
                  name="article"
                  id="article"
                  className="validate"
                  placeholder="article"
                  defaultValue={item.article}
                  required
                />
              </div>
              <button
                className="btn waves-effect waves-light purple lighten-3"
                type="submit"
              >
                Добавить
                <i className="material-icons right">send</i>
              </button>
            </div>
            <h2 className="errorAdd"></h2>
          </form>
        </div>
      </div>
    </Layout>
  );
};
