import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const HelloWorldFatArrow = () => {
    return (
        <div className="helloWorldFatArrow">
            <Card>
                <CardImg top width="100%" src="/assets/arrow_function.png" alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">Fat Arrow Function</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">A JS Library</CardSubtitle>
                    <CardText>const HelloWorld = () =></CardText>
                    <Button>Go Somewhere Man</Button>
            </CardBody>
            </Card>
        </div>
    );
};

export default HelloWorldFatArrow;