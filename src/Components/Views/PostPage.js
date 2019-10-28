import React from "react";
class postPage extends React.Component {
  render() {
    const id = this.props.match.params.id;
    return <h1>PostPage = {id}</h1>;
  }
}

export default postPage;
