import React, { Component } from "react";
import PropTypes from "prop-types";
import * as Animated from "animated/lib/targets/react-dom";
import shortid from "shortid";
import GameHeader from "../GameHeader/GameHeader";
import Card from "../Card/Card";
import games from "../../games.json";
import names from "../../names.json"
import "./Game.css";
import Overlay from "../Overlay/Overlay";

const AnimatedCard = Animated.createAnimatedComponent(Card);

const data = [{ "name": "test1" }, { "name": "test2" }];

class Game extends Component {
    constructor(props) {
        super(props);



        this.setOverlay = this.setOverlay.bind(this);
        this.state = {
            cards: [],
            found: [],
            explanatorycards: [],
            flippedCards: [],
            dealCards: [],
            scaleCards: [],
            rotateCards: [],
            locked: false,
            status: "stopped",
            overlay: false,
            images: [],
            explanation: ""
        };
    }

    componentDidMount() {
        const difficulty = this.props.difficulty;

        // find all card-types of the selected level
        const selectedLevel = games.find(game => game.difficulty === difficulty);

        const cards = [];
        for (let card in selectedLevel.cards) {
            let cardValue = selectedLevel.cards[card];

            const currentValue = names.find(element => element.name === cardValue);

            for (let i = 0; i < 3; i++) {

                cards.push(
                    {
                        id: shortid.generate(),
                        symbol: currentValue.image_paths[i],
                        type: cardValue,
                        matched: false
                    });
            }
        }


        const explanatorycards = selectedLevel.cards.map(symbol => ({
            id: shortid.generate(),
            symbol,
            matched: false
        }));

        this.renderCards(cards);
    }



    /**
 * Method-Call for showing/hidding the overlay
 * @param {boolean} toDisplay - if true, overlay is rendered
 * @param {string} explanation  - explanationText
 * @param {URL} img - image which is shown over the text (can be null)
 */
    setOverlay(toDisplay, explanation, images) {
        this.setState({
            overlay: toDisplay,
            explanation: explanation,
            images: images,
        });
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

        const numCardsToMatch = 3;
        const cards = this.state.cards.slice();

        flippedCards.push(cardIndex);

        this.setState({ locked: true });
        this.flipCard(cardIndex, "forward").start();

        if (flippedCards.length > 1) {
            const allFlippedCardsMatch = flippedCards.every(flippedCardIndex => cards[cardIndex].type === cards[flippedCardIndex].type);

            if (allFlippedCardsMatch) {
                if (flippedCards.length === numCardsToMatch) {
                    flippedCards.forEach(flippedCardIndex => {
                        cards[flippedCardIndex].matched = true;
                    });

                    this.state.found.push(names.find(element => element.name === cards[flippedCards[0]].type));

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

        return Animated.stagger(100, [
            Animated.timing(this.state.scaleCards[cardIndex], {
                toValue: 1.2,
                duration: 100
            }),
            Animated.timing(this.state.rotateCards[cardIndex], {
                toValue: rotateValue,
                duration: 200
            }),
            Animated.timing(this.state.scaleCards[cardIndex], {
                toValue: 1,
                duration: 100
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
            found: [],
            flippedCards: [],
            locked: false,
            status: "reset"
        });

        this.renderCards(cardsReset);
    }


    render() {
        const cards = this.state.cards;
        const reference = this;
        return (
            <div className="column">
                <Overlay display={this.state.overlay} explanation={this.state.explanation} image1={this.state.images[0]} image2={this.state.images[1]} image3={this.state.images[2]} stop={() => this.setOverlay(false,"",[])}></Overlay>
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
                <div className="pictureFruits">
                    <h1>Gefunden!</h1>
                    <h4> klicke auf deine gesammelten Früchte und Gemüse um mehr zu erfahren :-)</h4>
                    {
                        this.state.found.map(function (d, idx) {
                            return (<li key={idx}>{d.name}
                                <img src={window.location.origin + d.image_paths[0]} alt={d.name} width="100" height="100" onClick={() => reference.setOverlay(true, d.text, d.image_paths)}></img>
                            </li>)
                        })}

                </div>
            </div>
        );
    }
}

Game.propTypes = {
    difficulty: PropTypes.string.isRequired
};

export default Game;
