import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const LoginForm = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === 'admin' && password === '123456') {
      history.push('/products');
      //    LoggedIn(true);
    } else {
      setError('Invalid username or password');
      alert('Invalid username or password')
    }
  };

  return (
    <div className="container w-25 mt-5">
      <h1 className='text-center mb-5'>Login</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="username">Username:</Label>
          <Input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password:</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button color="primary" type="submit">
          Login
        </Button>
        {error && <div className="text-danger mt-2">{error}</div>}
      </Form>
    </div>
  );
};

export default withRouter(LoginForm);