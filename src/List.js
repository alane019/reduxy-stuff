// src/js/components/List.js
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { articles: state.articles };
};

let List = (state) => (
  <ul className="list-group list-group-flush">
    {state.articles.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>
);

List = connect(mapStateToProps)(List);
export default List;