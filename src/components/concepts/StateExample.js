import React, {useState} from 'react';

const StateExample = () => {

    const [text, setText] = useState('');
    const [likeNum, setLikeNum] = useState(0);
    const [textColor, setTextColor] = useState('blue');

    return (
        <div>
            <input value={text} onChange={e => setText(e.target.value)}/>
            <br />
            <br />
            <img
                style={{width: '100px', height: '100px'}}
                src="https://upload.wikimedia.org/wikipedia/commons/1/13/Facebook_like_thumb.png"
                onClick={e => setLikeNum(likeNum + 1)}
            />
            <br />
            <span>{likeNum}</span>
            <br />
            <br />
            <p
                style={{color: textColor}}
                onMouseEnter = {e => setTextColor('red')}
                onMouseLeave = {e => setTextColor('blue')}
            >
                This text should change colors!
            </p>

        </div>
    );
};

export default StateExample;