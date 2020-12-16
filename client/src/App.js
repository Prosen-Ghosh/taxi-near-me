import { useState } from 'react'
import { Button, Select, Input, Container, Card } from 'semantic-ui-react'

const options = [
  { key: 'all', text: 'All', value: 'all' },
  { key: 'normal', text: 'Normal', value: 'Normal' },
  { key: 'premium', text: 'Premium', value: 'Premium' },
]

const App = () => {
  const [searchKey, setSearchKey] = useState('');
  const [serviceType, setServiceType] = useState('all')
  const [taxiCab, setTaxiCab] = useState([]);

  const inputChnage = (e, data) => {
    setSearchKey(data.value);
  }

  const selectChnage = (e, data) => {
    setServiceType(data.value)
  }

  const handleSearch = async () => {
    let url = `${process.env.REACT_APP_BASE_URL}?search=${searchKey}`;
    if (serviceType) {
      url = `${url}&type=${serviceType}`;
    }

    fetch(url).then(res => res.json()).then(res => setTaxiCab(res));

  }

  return (
    <Container>
      <h1 style={{ textAlign: 'center' }}>Taxi Near You</h1>
      <div style={{ marginTop: 10 }}>
        <Input fluid type='text' placeholder='Search...' action onChange={inputChnage}>
          <input />
          <Select compact options={options} defaultValue={serviceType} style={{ minWidth: "100px" }} onChange={selectChnage} />
          <Button type='submit' onClick={handleSearch}>Search</Button>
        </Input>
      </div>

      <div style={{ marginTop: 10 }}>
        <Card.Group>
          {
            taxiCab.map(taxi => (
              <Card
                link
                header={taxi.driverName}
                meta={`Phone: ${taxi.phone}`}
                description={[
                  `Service Type: ${taxi.serviceType}`,
                  `\n`,
                  ` CurrentLocation: ${taxi.currentLocation.coordinates[0]}, ${taxi.currentLocation.coordinates[1]}`
                ].join('')}
              />
            ))
          }
        </Card.Group>
      </div>
    </Container>
  )
}


export default App;
