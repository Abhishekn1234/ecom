import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const containerStyle = {
    textAlign: 'center',
    padding: '20px',
    margin: '50px',
    background: 'linear-gradient(to bottom, #3498db, #2980b9)',
    color: 'white',
  };

  const cardStyle = {
    width: '18rem',
    margin: '20px',
  };

  const [data, setData] = useState([
    { id: 1, title: 'Item 1', description: 'Description 1', imageUrl: 'data:image/jpeg;base64,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' },
    { id: 2, title: 'Item 2', description: 'Description 2', imageUrl: 'data:image/jpeg;base64,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' },
    
  ]);

  const [selectedItem, setSelectedItem] = useState(null);

  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate('/');
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  const handleUpdateItem = () => {
    
    setData((prevData) =>
      prevData.map((item) => (item.id === selectedItem.id ? { ...item, title: 'Updated Title' } : item))
    );
    
  };

  const handleDeleteItem = () => {
    
    setData((prevData) => prevData.filter((item) => item.id !== selectedItem.id));
    setSelectedItem(null);
  };

  return (
    <div style={containerStyle}>
      <h2>Welcome to the Dashboard</h2>

      <div className="card-columns">
        {data.map((item) => (
          <div key={item.id} className="card" style={cardStyle}>
            <img src={item.imageUrl} className="card-img-top" alt={item.title} />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.description}</p>
              <button onClick={() => handleSelectItem(item)}>Select</button>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div>
          <h3>Selected Item</h3>
          <img src={selectedItem.imageUrl} alt={selectedItem.title} />
          <p>Title: {selectedItem.title}</p>
          <p>Description: {selectedItem.description}</p>
          <button onClick={handleUpdateItem}>Update</button>
          <button onClick={handleDeleteItem}>Delete</button>
        </div>
      )}

      <button onClick={handleNavigateHome}>Go to Home</button>
    </div>
  );
}

export default Dashboard;