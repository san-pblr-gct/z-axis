import React, { Component } from 'react';
import Markdown from '../Markdown/Markdown';
import Content from '../Content/Content';

class Post extends Component {
  render() {
    const { children } = this.props;
    return <Content>
      <Markdown className="post">
        {children}
      </Markdown>
    </Content>;
  }
}

export default Post;