import React from "react";
import ResourceList from "./ResourceList";

var config = require('../../config.js');
var util = require('../../util.js');

const PodList = React.createClass({

  getInitialState() {
    return {pods: []};
  },

  componentWillMount() {
    this.getPods();
  },

  getPods() {
    var url = config.url + '/redfish/v1/Chassis';
    $.ajax({
      url: url,
      type: 'GET',
      dataType: 'json',
      cache: false,
      success: function(resp) {
        var chassis = util.listMembers(resp);
        var pods = util.filterChassis(chassis, 'Pod');
        this.setData(pods);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(url, status, err.toString());
      }.bind(this)
    });
  },

  setData(pods) {
    this.setState({pods: pods});
  },

  render() {
    return (
      <ResourceList onShowDetail={this.props.onShowDetail} items={this.state.pods} header="PODS" />
    );
  }
});

export default PodList