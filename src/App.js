import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

// Components
import Navigation from './components/Navigation';
import Search from './components/Search';
import Home from './components/Home';

// ABIs
import RealEstate from './abis/RealEstate.json'
import Escrow from './abis/Escrow.json'

// Config
import config from './config.json';

function App() {

  const [provider, setProvider] = useState(null)
  const [account, setAccount] = useState(null)

  const loadBlockchainData = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    setProvider(provider)

    const network = await provider.getNetwork()

    const realEstate = new ethers.Contract(config[network.chainId].realEstate.address, RealEstate, provider)
    const totalSupply = await realEstate.totalSupply() // bug coming from here in Console
    // console.log('homes total supply:', totalSupply)

    // config[network.chainId].realEstate.address
    // config[network.chainId].escrow.address

    // console.log('realEstate Address:', config[network.chainId].realEstate.address)
    // console.log('escrow Address:', config[network.chainId].escrow.address)

    window.ethereum.on('accountsChanged', async () => {
      const accounts = await window.ethereum.request({method: 'eth_requestAccounts'})
      const account = ethers.utils.getAddress(accounts[0])
      setAccount(account)
    })

  }

  useEffect(() => {
    loadBlockchainData()
  }, [])

  return (
    <div>

      <Navigation account={account} setAccount={setAccount} />
      <Search />
      <div className='cards__section'>

        <h3>Homes for you</h3>
        <hr />
        <div className='cards'>
          <div className='card'>
            <div className='card__image'>
              <img src="" alt='Home' />
            </div>
            <div className='card__info'>
              <h4>1 ETH</h4>
              <p>
                <strong>1</strong> beds |
                <strong>2</strong> baths |
                <strong>3</strong> sqft |
              </p>
              <p>123 Elm St</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
