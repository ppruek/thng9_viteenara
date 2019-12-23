import React, { Component } from 'react'
import FlippingPages from 'flipping-pages'
import 'flipping-pages/FlippingPages.css'

import menu1 from '../../img/menu1.jpg';
import menu2 from '../../img/menu2.jpg';
import menu3 from '../../img/menu3.jpg';

import './flippage.css'

class FlipPage extends Component {
    constructor(props) {
        super(props)
        this.totalPages = 4
        this.state = {
            selected: 0,
        }
        this.handleSelectedChange = this.handleSelectedChange.bind(this)
        this.previous = this.previous.bind(this)
        this.next = this.next.bind(this)
    }

    handleSelectedChange(selected) {
        this.setState({ selected })
    }

    previous() {
        this.setState(state => ({
            selected: state.selected - 1
        }))
    }

    next() {
        this.setState(state => ({
            selected: state.selected + 1
        }))
    }

    render() {
        return (
            <div className="App">
                <FlippingPages
                    className="App-pages"
                    direction="horizontal"
                    selected={this.state.selected}
                    onSelectedChange={this.handleSelectedChange}
                    touch-action="none"
                >
                    <img src={menu1} />
                    <img src={menu2} />
                    <img src={menu3} />
                </FlippingPages>
                <button
                    onClick={this.previous}
                    disabled={!this.state.selected}
                >Previous</button>
                <button
                    onClick={this.next}
                    disabled={this.state.selected + 1 === this.totalPages}
                >Next</button>
            </div>
        )
    }

}

export default FlipPage