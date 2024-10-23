'use client';

import { useState } from 'react';

export default function LikeButton() {
    //A state, the first value (likes) is the state value
    //the second (setLikes) is the update function
    const [likes, setLikes] = useState(0);

    //The function which is called when the button is clicked
    //It increases likes by calling setLikes from the state
    function handleClick(){
        setLikes(likes + 1);
    }

    {/*A button with a click event listener the {likes} is 0 from the state*/}
    return <button onClick={handleClick}>Like ({likes})</button>;
}