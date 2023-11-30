import React from 'react';

const Products = ({ data }) => {
  return (
    <div className="container">
      <div className="row">
        {data.map((item, index) => (
          <div className="col-md-4" key={index}>
            <div className="card" style={{ width: '18rem' }}>
              <img className="card-img-top" src={item.recipe.image} alt={`Image of ${item.recipe.label}`} />
              <div className="card-body">
                <div className="text-center">
                  <h5 className="card-title">{item.recipe.label}</h5>
                  <p className="card-text">Total amount of calories: {Math.round(item.recipe.calories)}</p>
                  {/* Use a meaningful link instead of # */}
                  <a href="/" className="btn btn-primary">
                    Buy
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
