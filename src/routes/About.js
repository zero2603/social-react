import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchPokemons} from '../actions';

class About extends Component {
    componentDidMount() {
        this.props.fetchPokemons();
    }

    render() {
        console.log(this.props.pokemons);
        return (
            <main className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
                <div className="ui-block">
                    <ul className='list-group'>
                        {
                            this.props.pokemons.map((item, index) => {
                                return (
                                    <li className="list-group-item" key={index}>{item.name}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </main>
        );
    }
}

function mapStateToProps(state) {
    return {
        pokemons: state.pokemonReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchPokemons: () => dispatch(fetchPokemons())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(About));