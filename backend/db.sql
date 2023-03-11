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
INSERT INTO restaurants(rest_name,rest_veg,rest_location,rest_type,rest_rating,rest_image,rest_description) VALUES('Pizza Hut','veg','Kolkata','Fast Food',4,'https://www.pizzahut.co.in/sites/default/files/2019-03/PH_Logo_White.png',  'Pizza Hut is an American restaurant chain and international franchise founded in 1958 in Wichita, Kansas by Dan and Frank Carney. The company is known for its Italian-American cuisine menu, including pizza and pasta, as well as side dishes and desserts. It is a subsidiary of Yum! Brands, Inc., one of the world’s largest restaurant companies.');
INSERT INTO restaurants(rest_name,rest_veg,rest_location,rest_type,rest_rating,rest_image,rest_description) VALUES('Dominos','veg','Kolkata','Fast Food',4,'https://www.dominos.co.in/sites/default/files/2019-03/Domino_Logo_White.png',  'Dominos Pizza, Inc. is an American pizza restaurant chain founded in 1960. The corporation is headquartered at the Dominos Farms Office Park in Ann Arbor, Michigan, and incorporated in Delaware. In February 2019, the chain had 17,703 stores in 85 markets. It is the second-largest pizza chain in the United States after Pizza Hut and the largest worldwide.');


CREATE TABLE users(
    user_id BIGSERIAL NOT NULL PRIMARY KEY,
    user_name VARCHAR(50) NOT NULL,
    user_email VARCHAR(50) NOT NULL,
    user_password VARCHAR(50) NOT NULL,
    user_phone VARCHAR(50) NOT NULL,
    user_address VARCHAR(50) NOT NULL,
    user_image VARCHAR(50) NOT NULL,
    user_type VARCHAR(50) NOT NULL,
),
CREATE TABLE orders(
    order_id BIGSERIAL NOT NULL PRIMARY KEY,
    order_rest_id BIGINT NOT NULL,
    order_user_id BIGINT NOT NULL,
    order_status VARCHAR(50) NOT NULL,
    order_date DATE NOT NULL,
    order_time TIME NOT NULL,
    order_total INT NOT NULL,
    order_address VARCHAR(50) NOT NULL,
    order_phone VARCHAR(50) NOT NULL,
    order_payment VARCHAR(50) NOT NULL,
    order_delivery VARCHAR(50) NOT NULL,
    order_items TEXT NOT NULL,
),
CREATE TABLE menu(
    menu_id BIGSERIAL NOT NULL PRIMARY KEY,
    menu_rest_id BIGINT NOT NULL,
    menu_name VARCHAR(50) NOT NULL,
    menu_price INT NOT NULL,
    menu_image VARCHAR(50) NOT NULL,
    menu_description TEXT NOT NULL,
),
CREATE TABLE reviews(
    review_id BIGSERIAL NOT NULL PRIMARY KEY,
    review_rest_id BIGINT NOT NULL,
    review_user_id BIGINT NOT NULL,
    review_rating INT NOT NULL,
    review_text TEXT NOT NULL,
),
CREATE TABLE favourites(
    fav_id BIGSERIAL NOT NULL PRIMARY KEY,
    fav_rest_id BIGINT NOT NULL,
    fav_user_id BIGINT NOT NULL,
),
CREATE TABLE cart(
    cart_id BIGSERIAL NOT NULL PRIMARY KEY,
    cart_rest_id BIGINT NOT NULL,
    cart_user_id BIGINT NOT NULL,
    cart_items TEXT NOT NULL,
),
CREATE TABLE notifications(
    notif_id BIGSERIAL NOT NULL PRIMARY KEY,
    notif_user_id BIGINT NOT NULL,
    notif_text TEXT NOT NULL,
    notif_date DATE NOT NULL,
    notif_time TIME NOT NULL,
),
CREATE TABLE messages(
    message_id BIGSERIAL NOT NULL PRIMARY KEY,
    message_user_id BIGINT NOT NULL,
    message_text TEXT NOT NULL,
    message_date DATE NOT NULL,
    message_time TIME NOT NULL,
),


