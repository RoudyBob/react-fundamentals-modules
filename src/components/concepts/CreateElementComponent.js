import React from 'react';

const CreateElementComponent = () => {
    return (
        React.createElement ("div", {style: {border: '2px solid black'}},
            React.createElement ("h1", null, "CreateElement Component"),
            React.createElement ("p", null, "This was constructed with React.createElement calls in the return."),
            React.createElement("img",{src: "https://cdn-images-1.medium.com/max/1200/1*jJZHFQmhkq_7ohn18KrMhA.png"}, null)
        )
    );
};

export default CreateElementComponent;