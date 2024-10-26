import { useEffect, useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Toggle from './components/Toggle'

function App() {

  // toggle funtionality
  const [isActive, setIsActive] = useState({
    cart: true,
    status: 'Available'
  })

  const handleIsActive = (status) => {
    if (status == 'Available') {
      setIsActive({
        cart: true,
        status: 'Available'
      })
    }
    else {
      setIsActive({
        cart: false,
        status: 'Selected'
      })
    }
  }

  // selected count 
  const [selectedCount, setSelectedCount] = useState(0);

  // coin count
  const [coin, setCoin] = useState(0);

  const handleCoin = () => {
    const total = coin + 2000000;
    setCoin(total);
  }



  // players
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('players.json')
      .then(res => res.json())
      .then(data => setPlayers(data))
  }, [])


  // add players
  const [addNewPlayer, setAddNewPlayer] = useState([]);

  const handleCoinDecrease = (rate, addPlayer) => {
    const isExist = addNewPlayer.find(p => p.id == addPlayer.id);
    if (coin >= rate && selectedCount < 6 && !isExist) {
      const total = coin - rate;
      setCoin(total);
      setSelectedCount(selectedCount + 1);
      const newPlayer = [...addNewPlayer, addPlayer];
      setAddNewPlayer(newPlayer);
    }
    else if (selectedCount >= 6) {
      alert('Already 6 added')
    }
    else if (isExist) {
      alert('Already exist')
    }
    else {
      alert('insufficient balance')
    }
  }


  // cashback coin
  const handleCashback = (deletedPlayer) => {
    setCoin(coin + parseInt(deletedPlayer.price));
  }


  // remove selected players 
  const handleDelete = (newPlayer) => {
    handleCashback(newPlayer);
    const remaining = addNewPlayer.filter(p => p != newPlayer);
    setAddNewPlayer(remaining);
    setSelectedCount(selectedCount - 1);
  }



  return (
    <>
      {/* Header Sections */}
      <Header handleCoin={handleCoin} coin={coin}></Header>

      {/* Players Sections */}
      <Toggle
        handleDelete={handleDelete}
        addNewPlayer={addNewPlayer}
        players={players}
        selectedCount={selectedCount}
        handleCoinDecrease={handleCoinDecrease}
        coin={coin}
        isActive={isActive}
        handleIsActive={handleIsActive}
      ></Toggle>

      {/* Newsletter and Footer Sections */}
      <Footer></Footer>
    </>
  )
}

export default App
