import React, { useContext } from 'react';
import { userContext, workContext } from '../../App';

function ComponentF(props) {
   const user =  useContext(userContext)
   const work = useContext(workContext)
    return (
        <div>
            {user}-{work}
            {/* <userContext.Consumer>
                {
                    user => {
                        return(<workContext.Consumer>
                            {
                                work =>{
                                    return <div>user name is {user}, {work}</div>
                                }
                            }

                        </workContext.Consumer>)
                        
                    }
                }
            </userContext.Consumer> */}
        </div>
    );
}

export default ComponentF;