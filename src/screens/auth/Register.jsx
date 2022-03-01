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
            <h1 className="text-center">Sign Up</h1>
          </Card.Header>
          <Form className="m-3" onSubmit={handleSubmit(onSubmitHandler)}>
            <Row className="py-3">
              <Col md={6}>
                <Form.Group controlId="firstName ">
                  <Form.Label>FirstName</Form.Label>
                  <Form.Control
                    type="text"
                    {...register("firstName")}
                    name="firstName"
                    className={`${errors.firstName && "is-invalid"}`}
                    placeholder="Enter firstName"
                  ></Form.Control>
                  <p className="small text-danger pt-1">
                    {errors.firstName?.message}
                  </p>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group controlId="lastName">
                  <Form.Label>LastName</Form.Label>
                  <Form.Control
                    type="text"
                    {...register("lastName")}
                    name="lastName"
                    className={`${errors.lastName && "is-invalid"}`}
                    placeholder="Enter lastName"
                  ></Form.Control>
                  <p className="small text-danger ">
                    {errors.lastName?.message}
                  </p>
                </Form.Group>
              </Col>
            </Row>

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

            <Row className="py-3">
              <Col md={6}>
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    {...register("password")}
                    name="password"
                    className={`${errors.password && "is-invalid"}`}
                    placeholder="Enter password"
                  ></Form.Control>
                  <p className="small text-danger">
                    {errors.password?.message}
                  </p>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group controlId="confirm-password">
                  <Form.Label>confirm-password</Form.Label>
                  <Form.Control
                    type="password"
                    {...register("confirmPassword")}
                    name="confirmPassword"
                    className={`${errors.confirmPassword && "is-invalid"}`}
                    placeholder="confirm-password"
                  ></Form.Control>
                  <p className="small text-danger">
                    {errors.confirmPassword?.message}
                  </p>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Button className="btn-block" type="submit" variant="primary">
                  Register
                </Button>
              </Col>
              <Col>
                <p className="small pt-2">
                  Already have an account? <Link to="/login">login</Link>
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
