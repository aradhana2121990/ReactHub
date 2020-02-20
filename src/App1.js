import React,{Component} from 'react';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App1 extends Component{
    render(){
        return(
            <div>
                <Layout>
                    <BurgerBuilder/>
                </Layout>
            </div>
        );
    };
}
export default App1;