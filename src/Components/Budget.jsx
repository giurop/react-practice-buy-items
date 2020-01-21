import React from 'react';
import BuyButton from './BuyButton';
import Items from './Items'

/*
praticar:
- fazer os estados no ser um Classe com estado.
- passar a função como prop e chamar ela no componente button (rise up state)
- array de objetos item com name: icon, price.
item Comp: func subtract, size, icon, price, name
*/

class Budget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      budget: 50,
      color: 'darkgreen',
    };
    this.subtract = this.subtract.bind(this);
  }

  subtract(event) {
    const newBudget = this.state.budget - Number(event.target.value)
    let newColor;
    newBudget <= 0 ? (newColor = 'red') : (newColor = 'darkgreen');
    this.setState({
      budget: newBudget,
      color: newColor,
    });
  }

  render() {
    // um objeto com os styles.
    return (
      <>
        <h1 style={{ color: this.state.color }}>{this.state.budget}</h1>
        <Items src="/lala" name="drinks"/>
        <button value='5' onClick={this.subtract}> $ -5 </button>
      </>
    );
  }
}

export default Budget;