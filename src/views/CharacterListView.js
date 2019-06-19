import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { CharacterList } from "../components";
import { getChar } from "../actions";
import { POINT_CONVERSION_COMPRESSED } from "constants";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getChar();
  }

  render() {
    if (this.props.isLoading) {
      <div>
        <h2>Fetching Character Information</h2>
        <Loader type="Circles" color="black" height={80} width={80} />
      </div>;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  isLoading: state.charsReducer.isLoading
});

export default connect(
  mapStateToProps,
  { getChar }
)(CharacterListView);
