import React from 'react';

class Customer extends React.Component{
    render(){
        const {params} = this.props.match // by defualt in react react router will be adding the router params to props and can be consumed in components hence the code
        return(
            <div>
              <h1>Customer</h1>
              <p>{params.id}</p>
              <p>{params.name}</p>
        </div>)
    }
}
export default Customer