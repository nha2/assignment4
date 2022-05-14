import React from 'react';
import './stocks.css';
import { Route, Link} from 'react-router-dom';

const StockDetails = ({match}) => <p>{match.params.id}</p>

const url = 'http://localhost:3000/stocks';

class Stocks extends React.Component {

    constructor() {
        super();
        this.state ={
            stocks :[]
        }
    }
    render() {
        const stockTemplate = this.state.stocks.map(stock => {
            return (<div className="stock-container" id={stock.id}>
                        <div>{stock.stockMarketCap}</div>
                        <p>{stock.stockMSector}</p>
                        <p>{stock.stockName}</p>
                    </div>
                   )
        })
        return(
            <div>
            <h1>Stocks</h1> 
            <section className="stock-section">{stockTemplate}</section>
            <ul>
                    <li><Link to="/stocks/stockname, Microsoft, Adani Group, GFLA">Stock Name</Link></li>
                    <li><Link to="/stocks/stockmartketcap,1,2,3">Stock Market Cap</Link></li>
                    <li><Link to="/stocks/stockindustry,software,infra,semiconductor">Stock Industry</Link></li>
                </ul>
                <Route path="/stocks/:id" component={StockDetails}></Route>
            </div>
        )
    }
    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                stocks:data
            })
        })
    }
}

export default Stocks