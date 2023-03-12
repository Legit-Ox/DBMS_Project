CREATE TABLE restaurants(
    rest_id BIGSERIAL NOT NULL PRIMARY KEY,
    rest_name VARCHAR(50) NOT NULL,
    rest_veg VARCHAR(7) NOT NULL,
    rest_location VARCHAR(30)    NOT NULL,
    rest_type VARCHAR(30) NOT NULL,
    rest_rating INT NOT NULL check (rest_rating >=1 and rest_rating<=5 ),
    rest_image TEXT  NOT NULL, 
    rest_description TEXT NOT NULL 
),
INSERT INTO restaurants(rest_name,rest_veg,rest_location,rest_type,rest_rating,rest_image,rest_description) VALUES('Burger King','veg','Kolkata','Fast Food',4,'https://www.burgerking.in/sites/default/files/2019-03/BK_Logo_White.png',  'Burger King is an American global chain of hamburger fast food restaurants. Headquartered in the unincorporated area of Miami-Dade County, Florida, the company was founded in 1953 as Insta-Burger King, a Jacksonville, Florida-based restaurant chain. After Insta-Burger King ran into financial difficulties in 1954, its two Miami-based franchisees David Edgerton and James McLamore purchased the company and renamed it Burger King.');
INSERT INTO restaurants(rest_name,rest_veg,rest_location,rest_type,rest_rating,rest_image,rest_description) VALUES('KFC','non-veg','Kolkata','Fast Food',4,'https://www.kfc.co.in/sites/default/files/2019-03/KFC_Logo_White.png',  'KFC, also known as Kentucky Fried Chicken, is an American fast food restaurant chain that specializes in fried chicken. Headquartered in Louisville, Kentucky, it is the worlds second-largest restaurant chain (as measured by sales) after McDonalds, with almost 20,000 locations globally in 123 countries and territories as of December 2018. The chain is a subsidiary of Yum! Brands, Inc., one of the worlds largest restaurant companies.');
INSERT INTO restaurants(rest_name,rest_veg,rest_location,rest_type,rest_rating,rest_image,rest_description) VALUES('McDonalds','veg','Kolkata','Fast Food',4,'https://www.mcdonalds.com/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Double-Quarter-Pounder-with-Cheese.jpg',  'McDonalds Corporation is an American fast food company, founded in 1940 as a restaurant operated by Richard and Maurice McDonald, in San Bernardino, California, United States. They rechristened their business as a hamburger stand, and later turned the company into a franchise, with the Golden Arches logo being introduced in 1953 at a location in Phoenix, Arizona.');
INSERT INTO restaurants(rest_name,rest_veg,rest_location,rest_type,rest_rating,rest_image,rest_description) VALUES('Pizza Hut','veg','Kolkata','Fast Food',4,'https://www.pizzahut.co.in/sites/default/files/2019-03/PH_Logo_White.png',  'Pizza Hut is an American restaurant chain and international franchise founded in 1958 in Wichita, Kansas by Dan and Frank Carney. The company is known for its Italian-American cuisine menu, including pizza and pasta, as well as side dishes and desserts. It is a subsidiary of Yum! Brands, Inc., one of the worlds largest restaurant companies.');
INSERT INTO restaurants(rest_name,rest_veg,rest_location,rest_type,rest_rating,rest_image,rest_description) VALUES('Dominos','veg','Kolkata','Fast Food',4,'https://www.dominos.co.in/sites/default/files/2019-03/Domino_Logo_White.png',  'Dominos Pizza, Inc. is an American pizza restaurant chain founded in 1960. The corporation is headquartered at the Dominos Farms Office Park in Ann Arbor, Michigan, and incorporated in Delaware. In February 2019, the chain had 17,703 stores in 85 markets. It is the second-largest pizza chain in the United States after Pizza Hut and the largest worldwide.');
//more sample data
INSERT INTO restaurants(rest_name,rest_veg,rest_location,rest_type,rest_rating,rest_image,rest_description) VALUES('Subway','veg','Kolkata','Fast Food',4,'https://www.subway.com/content/dam/subway/US/en/Menu/Menu-Items/hero/hero-6.jpg',  'Subway is an American fast food restaurant franchise that primarily sells submarine sandwiches (subs) and salads. It is owned and operated by Doctor’s Associates Inc., a North American company that also owns the Arby’s fast food chain. Subway is one of the fastest-growing franchises in the world, with 44,000 locations in more than 100 countries.');
INSERT INTO restaurants(rest_name,rest_veg,rest_location,rest_type,rest_rating,rest_image,rest_description) VALUES('Wendys','veg','Kolkata','Fast Food',4,'https://www.wendys.com/content/dam/wendys/US/en/Menu/Menu-Items/hero/hero-6.jpg',  'Wendys is an American international fast food restaurant chain founded by Dave Thomas on November 15, 1969, in Columbus, Ohio. The company moved its headquarters to Dublin, Ohio, on January 29, 2006. In 2011, Wendys was the third largest hamburger fast food chain in the United States, after McDonalds and Burger King, with 6,711 locations, following a 1.6% increase in domestic locations.');

-- Path: backend\db.sql
CREATE TABLE users(
    user_id BIGSERIAL NOT NULL PRIMARY KEY,
    user_name VARCHAR(50) NOT NULL,
    user_email VARCHAR(50) NOT NULL,
    user_password VARCHAR(50) NOT NULL,
    user_phone VARCHAR(10) NOT NULL,
    user_address VARCHAR(100) NOT NULL,
    user_image VARCHAR(100) NOT NULL,
    user_type VARCHAR(10) NOT NULL
),
//create menu table
-- Path: backend\db.sql
CREATE TABLE menu(
    menu_id BIGSERIAL NOT NULL PRIMARY KEY,
    menu_name VARCHAR(50) NOT NULL,
    menu_price INT NOT NULL,
    menu_image VARCHAR(100) NOT NULL,
    menu_description TEXT NOT NULL,
    rest_id BIGINT NOT NULL,
    FOREIGN KEY (rest_id) REFERENCES restaurants(rest_id)
),

//Create a table for a restaurant owner with their authentication details
-- Path: backend\db.sql
CREATE TABLE rest_owner(
    rest_owner_id BIGSERIAL NOT NULL PRIMARY KEY,
    rest_owner_name VARCHAR(50) NOT NULL,
    rest_owner_email VARCHAR(50) NOT NULL,
    rest_owner_password VARCHAR(50) NOT NULL,
    rest_owner_phone VARCHAR(10) NOT NULL,
    rest_owner_address VARCHAR(100) NOT NULL,
    rest_owner_image VARCHAR(100) NOT NULL,
    //add a createdAt and UpdatedAt field
    rest_owner_createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    rest_owner_updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP

),
//Create a table for restaurants which has a rest_owner_id field which is a foreign key from rest_owner table and all the other details
-- Path: backend\db.sql
CREATE TABLE restaurants(
    rest_id BIGSERIAL NOT NULL PRIMARY KEY,
    rest_name VARCHAR(50) NOT NULL,
    rest_veg VARCHAR(10) NOT NULL,
    rest_city VARCHAR(50) NOT NULL,
    rest_area VARCHAR(50) NOT NULL,
    rest_type VARCHAR(50) NOT NULL,
    rest_rating INT NOT NULL,
    rest_image VARCHAR(100) NOT NULL,
    rest_description TEXT NOT NULL,
    rest_owner_id BIGINT NOT NULL,
    FOREIGN KEY (rest_owner_id) REFERENCES rest_owner(rest_owner_id)

),
//Create a table for menu which has a foreign key of rest_id from restaurants table and all the other details
-- Path: backend\db.sql
CREATE TABLE menu(
    menu_id BIGSERIAL NOT NULL PRIMARY KEY,
    menu_title VARCHAR(50) NOT NULL,
    menu_image VARCHAR(100) NOT NULL,
    menu_description TEXT NOT NULL,
    rest_id BIGINT NOT NULL,
    FOREIGN KEY (rest_id) REFERENCES restaurants(rest_id),
    //add a createdAt and UpdatedAt field
    menu_createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    menu_updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
),
 
 //Users table pls
-- Path: backend\db.sql
CREATE TABLE users(
    user_id BIGSERIAL NOT NULL PRIMARY KEY,
    user_email VARCHAR(225) NOT NULL,
    user_password VARCHAR(225) NOT NULL,
    user_createdAt date default current_date

),
ALTER TABLE restaurants ADD COLUMN rest_owner_id INTEGER REFERENCES users(user_id);
UPDATE restaurants SET rest_owner_id = 3 WHERE rest_id = 3;
UPDATE restaurants SET rest_owner_id = 4 WHERE rest_id = 4;
alter table users add isOwner boolean;
update users set isOwner = true where user_id = 3;
