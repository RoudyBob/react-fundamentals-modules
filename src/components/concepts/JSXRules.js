import React from 'react';
import NormalComponent from './NormalComponent';
import CreateElementComponent from './CreateElementComponent';

const JSXRules = () => {
    return (
        <div className="main">
            <div classNamr="mainDiv">
                <h1 className="section-title">JSX</h1>
                <dl>
                    <dt>Resembles HTML</dt>
                    <dd>It&#39;s not. It&#39;s actually closer to Javascript.</dd>
                    <dt>React Elements</dt>
                    <dd>These are used to construct and update the DOM, or what you see on the screen.</dd>
                    <dt>Not Required</dt>
                    <dd>You can write in vanilla JS, but most sane people use JSX.</dd>
                    <dt>'className' instead of 'class'</dt>
                    <dd>Because 'class' is a reserved word in JavaScript, we can assign classes to our JSX elements with the 'className' attribute.</dd>
                    <dt>Event handler differences</dt>
                    <dd>React camel cases all of its event handler names, unlike HTML.  For instance, React gives us access to 'onChange' rather than 'onchange', or 'onClick' instead of 'onclick'.  There are more event handlers out there, but React camel cases them.</dd>
                    <dt>JavaScript interpolation</dt>
                    <dd>We saw this a few pages ago, but JSX allows us to write JavaScript within braces, { }, and it interprets that JS in the context of the JSX.  This allows us to use variables and function names directly inside our JSX code.  We'll see later how this allows us to build more dynamic components.</dd>
                </dl>
                <hr />
                <NormalComponent />
                <br />
                <CreateElementComponent />
            </div>
        </div>
    );
};

export default JSXRules;