import React from "react";

var util = require('../../util.js');

const ItemList = React.createClass({

  renderList: function() {
    return this.props.items.map((item, i) =>
      <div class="item" key={i}>
        {item.Name}
        <input type="button" class="detail-button" onClick={() => this.props.onShowDetail(item, this.props.header)} value="Show" />
        <br />
        {item.Description}
        <hr class="separator"/>
      </div>
    );
  },

  render: function() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  },
});

ItemList.defaultProps = { items: [], header: ""};

export default ItemList;
