import React, { Fragment } from 'react';

import MemoryCard from './MemoryCard';
import './MemoryGame.scss';
import * as Images from './config';

function MemoryGame(props) {
    const { handleClick } = props;

    // get all images data
    let images = Object.entries(Images);

    return (
        <div className='memory-game'>
            {
                images.map(image => {
                    const [title, img] = image;
                    return title !== 'BackLogo' ?
                        (
                            <Fragment key={title}>
                                <MemoryCard handleClick={handleClick} img={img} cardNum={images.length} title={title} />
                                <MemoryCard handleClick={handleClick} img={img} cardNum={images.length} title={title} />
                            </Fragment>
                        ) : null;
                })
            }
        </div>
    );
}

export default MemoryGame;