import React from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import coronaImage from './images/image.png';


class App extends React.Component {
    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        const fetchDatas = await fetchData();
        this.setState({ data: fetchDatas });
    }

    handleCountryChange = async (country) => {
        const fetchDatas = await fetchData(country);
        this.setState({ data: fetchDatas, country: country });
    }


    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="coronaImage"></img>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        );
    }
}

export default App;