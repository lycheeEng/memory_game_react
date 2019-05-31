import React from 'react';

import MemoryGame from './MemoryGame';
import Btn from './Btn';

import './App.scss';

class App extends React.Component {
    state = {
        hasFlipped: false,
        lockBoard: false,
        firstCard: null,
        secondCard: null
        // matched: false
    }

    resetBoard() {
        this.setState({
            hasFlipped: false,
            lockBoard: false,
            firstCard: null,
            secondCard: null
        })
    }

    // resetCard() {
    //     this.resetBoard();
    // }

    unflipCard() {
        this.setState({
            lockBoard: true
        })

        setTimeout(() => {
            if (this.state.firstCard && this.state.secondCard) {
                this.state.firstCard.classList.remove('flip');
                this.state.secondCard.classList.remove('flip');
            };
            this.resetBoard()
        }, 1000);
    }

    checkMatch() {
        const isMatch = this.state.firstCard.dataset.framework === this.state.secondCard.dataset.framework;

        isMatch ? this.resetBoard() : this.unflipCard();
    }

    handleReset = () => {
        this.resetBoard();
        let cards = document.querySelectorAll('.memory-card');
        cards.forEach(card => {
            if (card.classList.contains('flip')) card.classList.remove('flip');
            card.style.order = Math.floor(Math.random() * cards.length);
        });
    }

    handleClick = e => {
        if (this.state.lockBoard) return;
        if (e.currentTarget === this.state.firstCard) return;

        e.preventDefault();

        e.currentTarget.classList.add('flip');

        if (!this.state.hasFlipped) {
            this.setState({
                hasFlipped: true,
                firstCard: e.currentTarget
            });
            return;
        }

        // secondCard ? checkMatch()
        this.setState({
            secondCard: e.currentTarget
        }, () => {
            this.checkMatch();
        })
    }

    render() {
        return (
            <>
                <MemoryGame handleClick={this.handleClick} />
                <Btn title='Play Again 🔄' resetBtn={this.handleReset} />
            </>
        );
    }
}

export default App;