import React, { Component } from 'react'
import CategoryCard from './common/categorycard';
import axios from 'axios'

class HomeCards extends Component {
    state = {
        data: [],
        loading: true
    }

    async componentDidMount() {
        const { data } = await axios.get('https://woodworks-api.onrender.com/api/category')
        this.setState({ data })
        this.setState({ loading: false })
    }
    render() {
        return (
            <div>
            {this.state.loading ?
                <div className='col-6 mx-auto my-5'><p className='h6 font-weight-bold text-center'>BACKEND STARTING...PLEASE WAIT. If you are visiting the website for the first time, kindly wait 15-30 seconds. As the server is hosted on a free hosting platform, it takes time to load initially.</p></div> :
                <div className='max-width-900 col-12 col-md-12 col-lg-10 col-xxl-8 mx-auto my-5'>
                    <div className='row justify-content-center'>
                        {
                            this.state.data.map(category => (
                                <div key={category.title} className='col-10 col-sm-6 col-md-4 col-lg-4'>
                                    <CategoryCard category={category} />
                                </div>
                            ))
                        }
                    </div>
                </div >     
    }
    </div>);
}
}

export default HomeCards;