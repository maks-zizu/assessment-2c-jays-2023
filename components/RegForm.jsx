const React = require('react');
const Layout = require('./Layout');

module.exports = function RegForm({ title, userLogin }) {
  return (
    <Layout title={title} userLogin={userLogin}>
      <form className="regForm" action="/api/auth/reg" method="POST">
        <div className="row">
          <div className="input-field">
            <input
              name="login"
              id="login"
              className="validate"
              placeholder="login"
              required
            />
          </div>
          <div className="input-field">
            <input
              name="password"
              id="password"
              className="validate"
              placeholder="password"
              required
            />
          </div>
          <div className="input-field">
            <input
              name="passwordCheck"
              id="passwordCheck"
              className="validate"
              placeholder="passwordCheck"
              required
            />
          </div>
          <select name="isAdmin" id="isAdmin" className="input-field col s6">
            <option value="true">Продавец</option>
            <option value="false">Покупатель</option>
          </select>
          <button
            className="btn waves-effect waves-light amber darken-1"
            type="submit"
          >
            Регистрация
            <i className="material-icons right">send</i>
          </button>
        </div>
        <h2 className="regError"></h2>
      </form>
    </Layout>
  );
};
