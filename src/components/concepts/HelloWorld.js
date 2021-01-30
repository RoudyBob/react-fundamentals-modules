import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const HelloWorld = function () {
    return (
        <div className="helloWorld">
            <Card>
                <CardImg top width="100%" src="/assets/jsfunction.png" alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">Regular Old Function</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">A JS Library</CardSubtitle>
                    <CardText>const HelloWorld = function ()</CardText>
                    <Button>Go Somewhere Man</Button>
            </CardBody>
            </Card>
        </div>
    );
};

export default HelloWorld;