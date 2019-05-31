import React from 'react';

import CardImage from './CardImage';
import './MemoryCard.scss';
import { BackLogo } from './config';

class MemoryCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardPos: null
        }
    }

    componentDidMount() {
        const cardPos = Math.floor(Math.random() * this.props.cardNum);
        this.setState({ cardPos });
    }

    render() {
        const { title, img, handleClick } = this.props;
        return (
            <div className='memory-card' data-framework={title} onClick={handleClick} style={{ order: this.state.cardPos }} >
                <CardImage
                    img={img}
                    title={title}
                    name='front-face' />
                <CardImage
                    img={BackLogo}
                    title='BackLogo'
                    name='back-face' />
            </div>
        );
    }
}

export default MemoryCard;