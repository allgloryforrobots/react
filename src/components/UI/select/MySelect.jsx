import React from 'react'

const MySelect = ({ options, defaultValue }) => {
    return (
        <div>
            <select name="" id="">
                <option value="">{defaultValue}</option>
                { options.map(option => <option value={option.value}>{option.title}</option>) }
            </select>
        </div>
    );
};

export default MySelect