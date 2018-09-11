import React, { Component } from "react";
import PropTypes from "prop-types";
import * as Animated from "animated/lib/targets/react-dom";
import shortid from "shortid";
import GameHeader from "../GameHeader/GameHeader";
import Card from "../Card/Card";
import games from "../../games.json";
import "./Game.css";

const AnimatedCard = Animated.createAnimatedComponent(Card);

class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [],
            flippedCards: [],
            dealCards: [],
            scaleCards: [],
            rotateCards: [],
            locked: false,
            status: "stopped"
        };
    }

    componentDidMount() {
        const difficulty = this.props.difficulty;
        
        const selectedLevel = games.find(game => game.difficulty === difficulty);

                const cards = selectedLevel.cards.map(symbol => ({
                    id: shortid.generate(),
                    symbol,
                    matched: false
                }));

                this.renderCards(cards);
    }

    renderCards(cards) {
        const randomCards = cards.sort(() => 0.5 - Math.random());

        this.setState(
            {
                cards: randomCards,
                dealCards: cards.map(() => new Animated.Value(0)),
                scaleCards: cards.map(() => new Animated.Value(1)),
                rotateCards: cards.map(() => new Animated.Value(0))
            },
            () => {
                Animated.stagger(100, this.state.dealCards.map(anim => Animated.spring(anim, { toValue: 1, speed: 14 }))).start();
            }
        );
    }

    checkMatches(cardIndex) {
        if (this.state.status !== "started") {
            this.setState({ status: "started" });
        }

        const flippedCards = this.state.flippedCards.slice();

        if (this.state.locked || flippedCards.includes(cardIndex)) {
            return;
        }

        const numCardsToMatch = this.props.difficulty === "triples" ? 3 : 2;
        const cards = this.state.cards.slice();

        flippedCards.push(cardIndex);

        this.setState({ locked: true });
        this.flipCard(cardIndex, "forward").start();

        if (flippedCards.length > 1) {
            const allFlippedCardsMatch = flippedCards.every(flippedCardIndex => cards[cardIndex].symbol === cards[flippedCardIndex].symbol);

            if (allFlippedCardsMatch) {
                if (flippedCards.length === numCardsToMatch) {
                    flippedCards.forEach(flippedCardIndex => {
                        cards[flippedCardIndex].matched = true;
                    });

                    Animated.sequence([
                        Animated.delay(1000),
                        Animated.parallel(
                            this.state.scaleCards
                                .filter((anim, index) => flippedCards.includes(index))
                                .map(anim => Animated.spring(anim, { toValue: 0 }))
                        )
                    ]).start(() => {
                        const countMatched = cards.reduce((count, card) => count + card.matched, 0);

                        if (cards.length === countMatched && cards.length > 0) {
                            this.setState({ status: "stopped" });
                            this.props.history.push("/winner");
                        } else {
                            this.setState({
                                cards,
                                flippedCards: [],
                                locked: false
                            });
                        }
                    });
                } else {
                    this.setState({
                        flippedCards,
                        locked: false
                    });
                }
            } else {
                Animated.sequence([
                    Animated.delay(1500),
                    Animated.parallel(flippedCards.map(flippedCardIndex => this.flipCard(flippedCardIndex, "back")))
                ]).start(() => {
                    this.setState({
                        flippedCards: [],
                        locked: false
                    });
                });
            }
        } else {
            this.setState({ flippedCards, locked: false });
        }
    }

    flipCard(cardIndex, direction) {
        const rotateValue = direction === "back" ? 0 : 1;

        return Animated.stagger(200, [
            Animated.timing(this.state.scaleCards[cardIndex], {
                toValue: 1.2,
                duration: 200
            }),
            Animated.spring(this.state.rotateCards[cardIndex], {
                toValue: rotateValue,
                speed: 2,
                bounciness: 5
            }),
            Animated.timing(this.state.scaleCards[cardIndex], {
                toValue: 1,
                duration: 200
            })
        ]);
    }

    resetGame() {
        const cards = this.state.cards.slice();
        const cardsReset = cards.map(card => {
            card.matched = false;
            return card;
        });

        this.setState({
            cards: cardsReset,
            flippedCards: [],
            locked: false,
            status: "reset"
        });

        this.renderCards(cardsReset);
    }

    render() {
        const cards = this.state.cards;

        return (
            <div className="game">
                <GameHeader gameStatus={this.state.status} onReset={() => this.resetGame()} />
                <div className="content">
                    <div className={this.props.difficulty}>
                        <div className="grid-wrapper">
                            <div className="grid">
                                {cards.map((card, cardIndex) => (
                                    <AnimatedCard
                                        key={card.id}
                                        symbol={card.symbol}
                                        onClick={() => this.checkMatches(cardIndex)}
                                        style={{
                                            opacity: this.state.dealCards[cardIndex],
                                            transform: [
                                                {
                                                    translateY: this.state.dealCards[cardIndex].interpolate({
                                                        inputRange: [0, 1],
                                                        outputRange: ["100px", "0px"]
                                                    })
                                                },
                                                {
                                                    scale: this.state.scaleCards[cardIndex]
                                                },
                                                {
                                                    rotateY: this.state.rotateCards[cardIndex].interpolate({
                                                        inputRange: [-1, 0, 1],
                                                        outputRange: ["-180deg", "0deg", "180deg"]
                                                    })
                                                }
                                            ]
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Game.propTypes = {
    difficulty: PropTypes.string.isRequired
};

export default Game;
