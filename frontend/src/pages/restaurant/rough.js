import React from 'react';

function Rough() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Restaurants</a></li>
            <li><a href="#">Cuisines</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero">
          <div className="container">
            <h1>Discover the Best Restaurants Near You</h1>
            <p>With our extensive collection of restaurants and cuisines, you're sure to find something you love.</p>
            <form>
              <label htmlFor="location">Location:</label>
              <input type="text" id="location" name="location" />
              <button type="submit">Search</button>
            </form>
          </div>
        </section>
        <section className="featured-restaurants">
          <div className="container">
            <h2>Featured Restaurants</h2>
            <ul>
              <li>
                <img src="https://via.placeholder.com/150" alt="Restaurant Name" />
                <div>
                  <h3>Restaurant Name</h3>
                  <p>Cuisine Type</p>
                  <p>Location</p>
                  <a href="#">View Menu</a>
                </div>
              </li>
              <li>
                <img src="https://via.placeholder.com/150" alt="Restaurant Name" />
                <div>
                  <h3>Restaurant Name</h3>
                  <p>Cuisine Type</p>
                  <p>Location</p>
                  <a href="#">View Menu</a>
                </div>
              </li>
              <li>
                <img src="https://via.placeholder.com/150" alt="Restaurant Name" />
                <div>
                  <h3>Restaurant Name</h3>
                  <p>Cuisine Type</p>
                  <p>Location</p>
                  <a href="#">View Menu</a>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2023 MyZomato. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Rough;

