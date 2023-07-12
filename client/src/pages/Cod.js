import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_POSTS_BY_GAME, ADD_POST } from '../utils/queries';
import { Container, Row, Col } from 'react-bootstrap';

import PostList from '../component/Postlist';
import NewPostForm from '../component/NewPostform';

const CodpostPage = ({ gameId }) => {
  const { loading, error, data } = useQuery(GET_POSTS_BY_GAME, {
    variables: { gameId },
  });

  const [addPost] = useMutation(ADD_POST);

  const handleSubmitPost = (content) => {
    addPost({
      variables: {
        content,
        gameId,
      },
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const codStyle = {
    fontFamily: 'Phasmaphobia',
    backgroundColor: '#0F100B',
    padding: '20px',
  };

  const codHead = {
    color: '#eae7e7',
    fontSize: '48px',
    marginBottom: '10px',
    backgroundColor: '#404622',
    padding: '20px',
  };

  const codP = {
    color: '#eae7e7',
    fontSize: '24px',
    marginBottom: '10px',
    backgroundColor: '#404622',
    padding: '20px',
  };

  return (
    <Container>
     <div style={codStyle}>
      <h1 style={codHead}>Call of Duty</h1>
      <p style={codP}>Welcome to the Call of Duty page!</p>
      <img src={``} alt="Call of Duty" />
      <button>Call of Duty</button>
    </div>
      <Row>
        <Col>
          <PostList posts={data.postsByGame} />
        </Col>
      </Row>
      <Row>
        <Col>
          <NewPostForm onSubmit={handleSubmitPost} />
        </Col>
      </Row>
    </Container>
  );
};

export default CodpostPage;

