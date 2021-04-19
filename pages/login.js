import React from "react";
import { Button, Form } from "semantic-ui-react";

const Login = () => {
  return (
    <div style={{ padding: "100px 0", textAlign: "center" }}>
      <Form>
        <Form.Field inline>
          <input placeholder="ID" />
        </Form.Field>
        <Form.Field inline>
          <input type="password" placeholder="Password" />
        </Form.Field>
        <Button color="blue">Login</Button>
      </Form>
    </div>
  );
};

export default Login;
