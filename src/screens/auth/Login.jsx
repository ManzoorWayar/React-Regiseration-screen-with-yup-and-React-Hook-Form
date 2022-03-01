import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormContainer from "../../components/FormContainer";
import Schema from "../../utils/ValidationSchema";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };

  return (
    <FormContainer>
      <Col xs={12} md={6}>
        <Card>
          <Card.Header>
            <h1 className="text-center">Sign In</h1>
          </Card.Header>
          <Form className="m-3" onSubmit={handleSubmit(onSubmitHandler)}>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                {...register("email")}
                name="email"
                placeholder="Enter email"
                className={`${errors.email && "is-invalid"}`}
              ></Form.Control>
              <p className="small text-danger">{errors.email?.message}</p>
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                {...register("password")}
                name="password"
                className={`pb-2 ${errors.password && "is-invalid"}`}
                placeholder="Enter password"
              ></Form.Control>
              <p className="small text-danger">{errors.password?.message}</p>
            </Form.Group>

            <Row>
              <Col>
                <Button className="btn-block" type="submit" variant="primary">
                  Login
                </Button>
              </Col>
              <Col>
                <p className="small pt-2">
                  Don't have an account?{" "}
                  <Link to="/register">Create Account</Link>
                </p>
              </Col>
            </Row>
          </Form>
        </Card>
      </Col>
    </FormContainer>
  );
};

export default Register;
