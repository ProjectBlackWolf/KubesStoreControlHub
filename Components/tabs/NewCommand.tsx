import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createCmd } from '../../services/cmds-api';

const [name, setName] = useState("");
const [cmd, setCmd] = useState("");

const Inputter = () => {

    return (
        <>
            <form action="submit">
                <label htmlFor="name">Name of Command</label>
                <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                <br />
                <label htmlFor="name">Command</label>
                <input type="text" id="cmd" name="cmd" value={cmd} onChange={(e) => setCmd(e.target.value)} />
            </form>
        </>
    )
}


const NewCommand = () => {
    return (
        <>
            <h1>Input a NewCommand</h1>
            <Inputter />
            <button onClick={() => createCmd(name, cmd)}>Submit</button>
        </>
    )
}

export default NewCommand