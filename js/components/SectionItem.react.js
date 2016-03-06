var React = require('react');
var ReactPropTypes = React.PropTypes;
var NavActions = require('../actions/NavActions');

var classNames = require('classnames');

var SectionItem = React.createClass({

    propTypes: {
      //TODO: use parent property to only show one node at a time
        sectionItem: ReactPropTypes.object.isRequired
    },

    getInitialState: function() {
        //if (typeof this.props.sectionItem["node"] === 'undefined') {
        //  return {
        //    isLeaf: true
        //  };
        //} else {
          return {
              isLeaf: false,
              loadDoc: false
          };
        //}
    },

    render: function() {
        var sectionItem = this.props.sectionItem;

        if (this.state.isLeaf) {
          return null;
        } else if (this.state.loadDoc) {
          return (
              <p>{sectionItem.load}</p>
          );
        } else {
          return (
            <div key={sectionItem.id} className="col-xs-6 col-sm-3 extra-padding">
              <span className="glyphicon glyphicon-cloud menu-item" onClick={this._onClick}> </span>
              <h4 onClick={this._onClick}>
                {sectionItem.title}
              </h4>
            </div>
          );
        }
    },

    _onClick: function() {
        var sectionItem = this.props.sectionItem;
        if (typeof sectionItem["node"] != 'undefined') {
          NavActions.next(sectionItem.id);
        } else if (typeof sectionItem["load"] != 'undefined') {
          this.setState({
              loadDoc: true
          });
        }
        /*} else {
          this.setState({
              isLeaf: true
          });
        }*/
    }

});

module.exports = SectionItem;
