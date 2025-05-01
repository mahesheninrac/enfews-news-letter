import React, { useEffect, useState } from 'react'
import withLoading from './hoc/withLoading'
import DataDisplay from './components/datafetch'

const EnhancedDataDisplay = withLoading(DataDisplay);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setData({ name: "Eninrac Consulting", description: 'Here is your awesome data fetched!' });
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div style={{ padding:"20px",textAlign: 'center', marginTop: '50px' }}>
      <EnhancedDataDisplay data={data} isLoading={isLoading} />
    </div>
  )
}

export default App