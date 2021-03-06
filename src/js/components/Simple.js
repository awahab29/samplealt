var React = require('react');

class Simple extends React.Component {

  constructor(props) {
    super(props);

    var mockData = [];
        for (var i=1;i<=10;i++){
              mockData.push({id:i,name:'London '+i, fav:false});
              var a = i;
        }

    this.state = {data: mockData};
    this.addData = this.addData.bind(this);

    this.addFave = this.addFave.bind(this);

  }


  addData(){
       var stateMock = this.state.data;
       stateMock.push({id:Math.random(),name:'Another', fav:false})
        this.setState({data: stateMock});
  }

  addFave(ev) { 

    var id =Number(ev.target.getAttribute('data-id'));

    var stateMock = this.state.data;
    for (var i = 1; i <= stateMock.length; i += 1) {

            // set has_favorite to true
            if (stateMock[i].id === id) {
              stateMock[i].fav = true;
              break;
            }
          }

    this.setState({data: stateMock});
  }

  render() {
    return (
      <div className='four'>
      <h4>Simple component without Flux</h4>
      <button onClick={this.addData} data-id={location.id} className="waves-effect waves-light btn">
              Add
            </button>
      <ul className="collection">
        {this.state.data.map((location, i) => {
          var faveButton = (
            <button onClick={this.addFave} data-id={location.id} className="waves-effect waves-light btn">
              Favorite
            </button>
          );

          var heart = (<img src='./src/img/heart.png' />);

          return (
            <li key={i} className="collection-item">
              {location.name} {location.fav ? heart : faveButton}
            </li>
          );
        })}
      </ul>
      </div>
    );
  }

}

module.exports = Simple;