CREATE TABLE users(
    user_id BIGSERIAL NOT NULL PRIMARY KEY,
    user_email VARCHAR(225) NOT NULL,
    user_password VARCHAR(225) NOT NULL,
    user_createdAt date default current_date,
    isOwner boolean NOT NULL

),
{
    "user_email":"doshisaahil34@gmail.com",
    "user_password":"12312312",
    "isowner":true
}
{
    "user_email": "saahil.d@ahduni.edu.in"
    "user_email": "4567890",
    "isowner":false
}
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
    FOREIGN KEY (rest_owner_id) REFERENCES users(user_id)
),

{
    "rest_name": "The ristretto ABC",
    "rest_veg": "veg",
    "rest_area": "Shahibaug",
    "rest_city": "Ahmedabad",
    "rest_type": "Fast Food",
    "rest_rating": 5,
    "rest_image": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F20%2F18%2Fd9%2F2018d9cef8de0f14d74d27e325a9ed6d.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F796855727796430538%2F&tbnid=tXN6faUQSOcj-M&vet=12ahUKEwjn58ntpdL9AhV-0nMBHZouAWoQMygDegUIARC5AQ..i&docid=TbVWAa3ZMeOGjM&w=640&h=640&q=the%20ristretto&ved=2ahUKEwjn58ntpdL9AhV-0nMBHZouAWoQMygDegUIARC5AQ",
    "rest_description": "Burger King is an American global chain of hamburger fast food restaurants. Headquartered in the unincorporated area of Miami-Dade County, Florida, the company was founded in 1953 as Insta-Burger King, a Jacksonville, Florida-based restaurant chain. After Insta-Burger King ran into financial difficulties in 1954, its two Miami-based franchisees David Edgerton and James McLamore purchased the company and renamed it Burger King."
}


CREATE TABLE menu(
    menu_id BIGSERIAL NOT NULL PRIMARY KEY,
    menu_title VARCHAR(50) NOT NULL,
    menu_image VARCHAR(100) NOT NULL,
    menu_description TEXT NOT NULL,
    rest_id BIGINT NOT NULL,
    FOREIGN KEY (rest_id) REFERENCES restaurants(rest_id),
    menu_createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    menu_updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
),
{
    
    "menu_title":"Menu 1",
    "menu_image":"https://img.freepik.com/free-vector/burgers-restaurant-menu-template_23-2149005028.jpg?w=2000",
    "menu_description":"Menu Description xyz lorem ipsumId duis occaecat eiusmod aliquip magna dolore Lorem ea Lorem sunt qui. Deserunt ullamco labore veniam mollit adipisicing irure do magna nostrud enim cillum. Elit eu cillum pariatur enim irure nostrud. Esse qui exercitation dolor laborum."
}

CREATE TABLE menu_item(
    menu_item_id BIGSERIAL NOT NULL PRIMARY KEY,
    menu_item_name VARCHAR(50) NOT NULL,
    menu_item_image VARCHAR(100) NOT NULL,
    menu_item_description TEXT NOT NULL,
    menu_item_quantity VARCHAR(100) NOT NULL,
    menu_item_category VARCHAR(100) NOT NULL,
    menu_id BIGINT NOT NULL,
    FOREIGN KEY (menu_id) REFERENCES menu(menu_id),
    menu_item_createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    menu_item_updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)
//add a field menu_item_price in menu_item table

{
    "menu_item_name":"Burger",
    "menu_item_image":"https://img.freepik.com/free-vector/burgers-restaurant-menu-template_23-2149005028.jpg?w=2000",
    "menu_item_description":"Burger Description xyz lorem ipsumId duis occaecat eiusmod aliquip magna dolore Lorem ea Lorem sunt qui. Deserunt ullamco labore veniam mollit adipisicing irure do magna nostrud enim cillum. Elit eu cillum pariatur enim irure nostrud. Esse qui exercitation dolor laborum.",
    "menu_item_category":"Main Course",
    "menu_item_quantity":"1 pc"
}
{
    "menu_item_name":"Pizza",
    "menu_item_image":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg",
    "menu_item_description":"Pizza Description xyz lorem ipsumId duis occaecat eiusmod aliquip magna dolore Lorem ea Lorem sunt qui. Deserunt ullamco labore veniam mollit adipisicing irure do magna nostrud enim cillum. Elit eu cillum pariatur enim irure nostrud. Esse qui exercitation dolor laborum.",
    "menu_item_category":"Main Course",
    "menu_item_price":"40",
    "menu_item_quantity":"1 pc"
}










ALTER TABLE menu_item ADD menu_item_price INT,
UPDATE menu_item SET menu_item_price=40 WHERE menu_item_id=2;
ALTER TABLE menu_item ALTER COLUMN menu_item_price SET NOT NULL;
//Alter table to alter the column menu_item_image from varchar to TEXT

ALTER TABLE menu_item ALTER COLUMN menu_item_image TYPE TEXT;
//Alter table to alter the column menu_item_quantity to varchar
ALTER TABLE menu_item ALTER COLUMN menu_item_quantity TYPE VARCHAR(100);


//Create table order
CREATE TABLE orders(
    order_id BIGSERIAL NOT NULL PRIMARY KEY,
    order_status VARCHAR(50) NOT NULL,
    order_total INT NOT NULL,
    order_createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    order_updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    rest_id INT NOT NULL,
    FOREIGN KEY (rest_id) REFERENCES restaurants(rest_id),
    user_id BIGINT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
),
{
    "order_status":"pending",
    "order_total":"100",
    "rest_id":"1"
}
//create table order_item with menu_item_id from menu_item table
CREATE TABLE order_item(
    order_item_id BIGSERIAL NOT NULL PRIMARY KEY,
    order_item_quantity INT NOT NULL,
    order_item_createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    order_item_updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    order_id BIGINT NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    menu_item_id BIGINT NOT NULL,
    FOREIGN KEY (menu_item_id) REFERENCES menu_item(menu_item_id)
),
{
    "order_item_quantity":"1",
    "order_item_price":"100",
    "order_id":"1",
    "menu_item_id":"1"
}
//Create a table named table which contains the availibility of tables in a restaurant
CREATE TABLE tables(
    table_id BIGSERIAL NOT NULL PRIMARY KEY,
    table_name VARCHAR(50) NOT NULL,
    table_status VARCHAR(50) NOT NULL,
    table_capacity INT NOT NULL,
    table_createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    table_updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    rest_id BIGINT NOT NULL,
    FOREIGN KEY (rest_id) REFERENCES restaurants(rest_id)
),
{
    "table_name":"Table 1",
    "table_status":"available",
    "table_capacity":"4",
    "rest_id":"1"
}

//Create a cart table
CREATE TABLE cart(
    cart_id BIGSERIAL NOT NULL PRIMARY KEY,
    cart_total INT NOT NULL,
    cart_createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    cart_updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    user_id BIGINT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
),
//To add rest_id as a fk
ALTER TABLE cart ADD COLUMN rest_id BIGINT,
ALTER TABLE cart ADD FOREIGN KEY (rest_id) REFERENCES restaurants(rest_id),
//To remove not null in cart
ALTER TABLE cart ALTER COLUMN cart_total DROP NOT NULL,
//To add default 0 in cart_total
ALTER TABLE cart ALTER COLUMN cart_total SET DEFAULT 0, 

{
    "cart_total":"100",
    "user_id":"1"
}
//Create a cart_item table
CREATE TABLE cart_item(
    cart_item_id BIGSERIAL NOT NULL PRIMARY KEY,
    cart_item_quantity INT NOT NULL,
    cart_item_createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    cart_item_updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    cart_id BIGINT NOT NULL,
    FOREIGN KEY (cart_id) REFERENCES cart(cart_id),
    menu_item_id BIGINT NOT NULL,
    FOREIGN KEY (menu_item_id) REFERENCES menu_item(menu_item_id)
),
-- alter cart_item_quantity to be default 0
ALTER TABLE cart_item ALTER COLUMN cart_item_quantity SET DEFAULT 0;
{
    "cart_item_quantity":"1",
    "cart_id":"1",
    "menu_item_id":"1"
}