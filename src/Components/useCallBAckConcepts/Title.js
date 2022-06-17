import React from 'react';

function Title(props) {
    console.log('rendering title')
    return (
        <div>
            <h2>CallBackHook Exampls</h2>
        </div>
    );
}

export default React.memo(Title)