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

//Statement to add a field named restaurant_total_revenue whose default is set to 0 without the not null constraint;
ALTER TABLE restaurants ADD COLUMN rest_total_revenue DECIMAL DEFAULT 0;

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
//change the menu_image type to TEXT
ALTER TABLE menu ALTER COLUMN menu_image TYPE TEXT USING menu_image::TEXT;


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
ALTER TABLE menu_item ADD COLUMN menu_item_discount DECIMAL CHECK (menu_item_discount >= 0 AND menu_item_discount <= 100);
// Also set the default to zero

ALTER TABLE menu_item ALTER COLUMN menu_item_discount SET DEFAULT 0;

//Update menu_item_discount=20 in the table where menu_item_id = 2

UPDATE menu_item SET menu_item_discount = 20 WHERE menu_item_id = 2;










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
-- alter cart_item_quantity to be default 0c
ALTER TABLE cart_item ALTER COLUMN cart_item_quantity SET DEFAULT 0;
{
    "cart_item_quantity":"1",
    "cart_id":"1",
    "menu_item_id":"1"
}

//A procedure that creates an order by taking order_status, order_total, user_id and rest_id as parameters. It checks if the user_id is an owner or not and then creates the order if it a customer. 


CREATE OR REPLACE PROCEDURE create_order(
    order_status VARCHAR(255),
    order_total DECIMAL,
    o_user_id INTEGER,
    rest_id INTEGER
)
AS $$
BEGIN
    -- Check if the user is an owner
    IF EXISTS (
        SELECT u.user_id FROM users u WHERE u.user_id = o_user_id AND isOwner = false
    ) THEN
        -- Insert the order into the orders table
        INSERT INTO orders (order_status, order_total, user_id, rest_id)
        VALUES (order_status, order_total, o_user_id, rest_id);
    ELSE
        -- Raise an exception with custom error message and error code
        RAISE EXCEPTION 'User is an owner' USING ERRCODE = 401;
    END IF;
END;
$$ LANGUAGE plpgsql;





CREATE OR REPLACE FUNCTION create_order(
    order_status VARCHAR(255),
    order_total DECIMAL,
    o_user_id INTEGER,
    rest_id INTEGER,
    OUT status_code INTEGER
)
RETURNS INT AS $$
BEGIN
    -- Check if the user is an owner
    IF EXISTS (
        SELECT u.user_id FROM users u WHERE u.user_id = o_user_id AND isOwner = false
    ) THEN
        -- Insert the order into the orders table
        INSERT INTO orders (order_status, order_total, user_id, rest_id)
        VALUES (order_status, order_total, o_user_id, rest_id);
        
        -- Set the status code to 200 (OK)
        status_code := 200;
    ELSE
        -- Raise an exception with custom error message and error code
        RAISE EXCEPTION 'User is not an owner' USING ERRCODE = 401;
    END IF;
END;
$$ LANGUAGE plpgsql;
 
//Write A procedure to create a menu_item where user_id is provided
//INSERT INTO menu_item (menu_item_name,menu_item_image,menu_item_description,menu_item_category,menu_item_price,menu_item_quantity,menu_id) SELECT $1 ,$2,$3,$4,$5,$6, m.menu_id FROM menu m WHERE m.rest_id = (SELECT r.rest_id FROM restaurants r WHERE r.rest_owner_id = $7 LIMIT 1) LIMIT 1 Refer to this

CREATE OR REPLACE PROCEDURE create_menu_item(
    menu_item_name VARCHAR(255),
    menu_item_image VARCHAR(255),
    menu_item_description VARCHAR(255),
    menu_item_category VARCHAR(255),
    menu_item_price DECIMAL,
    menu_item_quantity VARCHAR(100),
    o_user_id INTEGER
)
AS $$
BEGIN
    -- Check if the user is an owner
    IF EXISTS (
        SELECT u.user_id FROM users u WHERE u.user_id = o_user_id AND isOwner = true
    ) THEN
        -- Insert the menu item into the menu_item table
        INSERT INTO menu_item (menu_item_name,menu_item_image,menu_item_description,menu_item_category,menu_item_price,menu_item_quantity,menu_id) SELECT menu_item_name,menu_item_image,menu_item_description,menu_item_category,menu_item_price,menu_item_quantity, m.menu_id FROM menu m WHERE m.rest_id = (SELECT r.rest_id FROM restaurants r WHERE r.rest_owner_id = o_user_id LIMIT 1) LIMIT 1;
    ELSE
        -- Raise an exception with custom error message and error code
        RAISE EXCEPTION 'User is not an owner' USING ERRCODE = 401;
    END IF;
END;
$$ LANGUAGE plpgsql;

//Write a function that can be used to cancel an order in the database. It takes the order ID as a parameter and sets the order status to "cancelled".
//FUNCTION TO CANCEL AN ORDER

CREATE OR REPLACE FUNCTION cancel_order(
    o_order_id INTEGER,
    OUT status_code INTEGER
)
RETURNS INT AS $$
BEGIN
    -- Check if the order exists
    IF EXISTS (
        SELECT o.order_id FROM orders o WHERE o.order_id = o_order_id
    ) THEN
        -- Update the order status to "cancelled"
        UPDATE orders SET order_status = 'cancelled' WHERE order_id = o_order_id;
        
        -- Set the status code to 200 (OK)
        status_code := 200;
    ELSE
        -- Raise an exception with custom error message and error code
        RAISE EXCEPTION 'Order does not exist' USING ERRCODE = 404;
    END IF;
END;
$$ LANGUAGE plpgsql;



//Write a function that can be used to update the status of an order in the database. It takes the order ID and a new status as parameters and updates the order status field in the orders table.

//FUNCTION TO UPDATE ORDER STATUS


CREATE OR REPLACE FUNCTION update_order_status(
    o_order_id INTEGER,
    o_order_status VARCHAR(255),
    OUT status_code INTEGER
)
RETURNS INT AS $$
BEGIN
    -- Check if the order exists
    IF EXISTS (
        SELECT o.order_id FROM orders o WHERE o.order_id = o_order_id
    ) THEN
        -- Update the order status
        UPDATE orders SET order_status = o_order_status WHERE order_id = o_order_id;
        
        -- Set the status code to 200 (OK)
        status_code := 200;
    ELSE
        -- Raise an exception with custom error message and error code
        RAISE EXCEPTION 'Order does not exist' USING ERRCODE = 404;
    END IF;
END;
$$ LANGUAGE plpgsql;



//Write a  procedure that can be used to calculate the total cost of an order. It takes the order ID as a parameter, retrieves the prices of all the items in the order, and calculates the total cost. Which is also updated in the order_total of orders table

//PROCEDURE TO CALCULATE ORDER TOTAL

CREATE OR REPLACE PROCEDURE calculate_order_total(
    o_order_id INTEGER
)
AS $$
BEGIN
    -- Check if the order exists
    IF EXISTS (
        SELECT o.order_id FROM orders o WHERE o.order_id = o_order_id
    ) THEN
        -- Calculate the order total
        UPDATE orders SET order_total = (
            SELECT SUM(menu_item_price * order_item_quantity) FROM order_item oi
            INNER JOIN menu_item mi ON oi.menu_item_id = mi.menu_item_id
            WHERE oi.order_id = o_order_id
        ) WHERE order_id = o_order_id;
    ELSE
        -- Raise an exception with custom error message and error code
        RAISE EXCEPTION 'Order does not exist' USING ERRCODE = 404;
    END IF;
END;
$$ LANGUAGE plpgsql;



//A procedure to create menu, with user id as a parameter to check if it's an owner and then add the menu to the restaurant corresponding to that user id. The total parameters include menu_title, menu_image, menu_description and user_id. If the user_id is an owner it should enter the rest_id associated with that rest_owner_id.


//PROCEDURE TO CREATE MENU


CREATE OR REPLACE PROCEDURE create_menu(
    menu_title VARCHAR(255),
    menu_image VARCHAR(255),
    menu_description VARCHAR(255),
    o_user_id INTEGER
)
AS $$
BEGIN
    -- Check if the user is an owner
    IF EXISTS (
        SELECT u.user_id FROM users u WHERE u.user_id = o_user_id AND isOwner = true
    ) THEN
        -- Insert the menu into the menu table
        INSERT INTO menu (menu_title, menu_image, menu_description, rest_id)
        SELECT $1, $2, $3, r.rest_id FROM restaurants r WHERE r.rest_owner_id = $4 LIMIT 1;
    ELSE
        -- Raise an exception with custom error message and error code
        RAISE EXCEPTION 'User is not an owner' USING ERRCODE = 401;
    END IF;
END;
$$ LANGUAGE plpgsql;



//A procedure to create cart given a user id. First it will check if the user has a cart or not. if he doesn't create one.

//PROCEDURE TO CREATE CART

CREATE OR REPLACE PROCEDURE create_cart(
    o_user_id INTEGER
)
AS $$
BEGIN
    -- Check if the user has a cart
    IF NOT EXISTS (
        SELECT c.cart_id FROM cart c WHERE c.user_id = o_user_id
    ) THEN
        -- Insert the cart into the cart table
        INSERT INTO cart (user_id) VALUES (o_user_id);
    END IF;
END;
$$ LANGUAGE plpgsql;

// A procedure to create a restaurant with serveral parmeters along with current user_id to check if the user is an owner and if he is then allow him to create a restaurant. refer to the following query
//INSERT INTO restaurants (rest_name,rest_veg,rest_area,rest_city,rest_type,rest_rating,rest_image,rest_description,rest_owner_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8,$9) returning *

//PROCEDURE TO CREATE RESTAURANT

CREATE OR REPLACE PROCEDURE create_restaurant(
    rest_name VARCHAR(255),
    rest_veg BOOLEAN,
    rest_area VARCHAR(255),
    rest_city VARCHAR(255),
    rest_type VARCHAR(255),
    rest_rating DECIMAL,
    rest_image VARCHAR(255),
    rest_description VARCHAR(255),
    o_user_id INTEGER
)
AS $$
BEGIN
    -- Check if the user is an owner
    IF EXISTS (
        SELECT u.user_id FROM users u WHERE u.user_id = o_user_id AND isOwner = true
    ) THEN
        -- Insert the restaurant into the restaurants table
        INSERT INTO restaurants (rest_name,rest_veg,rest_area,rest_city,rest_type,rest_rating,rest_image,rest_description,rest_owner_id) VALUES (rest_name, rest_veg, rest_area, rest_city, rest_type, rest_rating, rest_image, rest_description, o_user_id);
    ELSE
        -- Raise an exception with custom error message and error code
        RAISE EXCEPTION 'User is not an owner' USING ERRCODE = 401;
    END IF;
END;
$$ LANGUAGE plpgsql;

//A procedure to create a table with user_id as one of the parameters. The procedure will get user_id and then check for isOwner, if he is the owner it will search for a restaurant with rest_owner_id same as the user_id and enter the correspondint rest_id in the tables table.
-- INSERT INTO tables (table_name,table_capacity,table_status,rest_id) VALUES ($1,$2,$3,$4) 

//PROCEDURE TO CREATE TABLE

CREATE OR REPLACE PROCEDURE create_table(
    table_name VARCHAR(255),
    table_capacity INTEGER,
    table_status VARCHAR(255),
    o_user_id INTEGER
)
AS $$
BEGIN
    -- Check if the user is an owner
    IF EXISTS (
        SELECT u.user_id FROM users u WHERE u.user_id = o_user_id AND isOwner = true
    ) THEN
        -- Insert the table into the tables table
        INSERT INTO tables (table_name,table_capacity,table_status,rest_id) VALUES (table_name, table_capacity, table_status, (SELECT r.rest_id FROM restaurants r WHERE r.rest_owner_id = o_user_id LIMIT 1));
    ELSE
        -- Raise an exception with custom error message and error code
        RAISE EXCEPTION 'User is not an owner' USING ERRCODE = 401;
    END IF;
END;
$$ LANGUAGE plpgsql;




// Create a function named increment_cart_item. Refer this query:- UPDATE cart_item SET quantity = quantity + 1 WHERE cart_id = $1 AND cart_item_id = $2 returning *

//FUNCTION TO INCREMENT CART ITEM


CREATE OR REPLACE FUNCTION increment_cart_item(
    cart_id INTEGER,
    cart_item_id INTEGER
)
RETURNS cart_item AS $$
BEGIN
    -- Update the cart_item table
    UPDATE cart_item SET cart_item_quantity = cart_item_quantity + 1 WHERE cart_id = cart_id AND cart_item_id = cart_item_id returning *;
END;
$$ LANGUAGE plpgsql;


//Write a statement to Add a field cart_item_total in the table cart_item with default 0;

ALTER TABLE cart_item ADD COLUMN cart_item_total DECIMAL DEFAULT 0;

//Do the same for the order_item

ALTER TABLE order_item ADD COLUMN order_item_total DECIMAL DEFAULT 0;

//Create a trigger which updates the cart_item_total when quantity is updated by fetching it's price from the menu_item table using the menu_item_id whenever there is an update in the cart_item_quantity which is fired after the cart_item_quantity is updated

//TRIGGER TO UPDATE CART ITEM TOTAL

CREATE OR REPLACE FUNCTION update_cart_item_total() RETURNS TRIGGER AS $$
BEGIN
    NEW.cart_item_total = NEW.cart_item_quantity * (SELECT m.menu_item_price FROM menu_item m WHERE m.menu_item_id = NEW.menu_item_id);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_cart_item_total
BEFORE UPDATE ON cart_item
FOR EACH ROW
EXECUTE FUNCTION update_cart_item_total();

//Do the same for order_item

//A trigger to calculate order_item_total after applying discount of the menu items on the current cart_items


CREATE OR REPLACE FUNCTION update_order_item_total() RETURNS TRIGGER AS $$
BEGIN
    NEW.order_item_total = NEW.order_item_quantity * (SELECT m.menu_item_price FROM menu_item m WHERE m.menu_item_id = NEW.menu_item_id) * ((1 - (SELECT m.menu_item_discount FROM menu_item m WHERE m.menu_item_id = NEW.menu_item_id))/100);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_order_item_total
BEFORE INSERT OR UPDATE ON order_item
FOR EACH ROW
EXECUTE FUNCTION update_order_item_total();


//Create a trigger which updates the cart_total whenever there is an update in the cart_item_total which is fired after the cart_item_total is updated

//TRIGGER TO UPDATE CART TOTAL

CREATE OR REPLACE FUNCTION update_cart_total() RETURNS TRIGGER AS $$
BEGIN
    UPDATE cart SET cart_total = (SELECT SUM(cart_item_total) FROM cart_item WHERE cart_item.cart_id = NEW.cart_id) WHERE cart_id = NEW.cart_id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_cart_total
AFTER UPDATE OR INSERT ON cart_item
FOR EACH ROW
EXECUTE FUNCTION update_cart_total();


//Do the same for order_total

//TRIGGER TO UPDATE ORDER TOTAL

CREATE OR REPLACE FUNCTION update_order_total() RETURNS TRIGGER AS $$
BEGIN
    UPDATE orders SET order_total = (SELECT SUM(order_item_total) FROM order_item WHERE order_item.order_id = NEW.order_id) WHERE order_id = NEW.order_id;
    RETURN NEW;
END;

$$ LANGUAGE plpgsql;

CREATE TRIGGER update_order_total
AFTER INSERT OR UPDATE ON order_item
FOR EACH ROW
EXECUTE FUNCTION update_order_total();


//Create a trigger to calculate the total revenue of the restaurant by adding up all orders of that particular restaurant

//TRIGGER TO UPDATE REVENUE

CREATE OR REPLACE FUNCTION update_revenue() RETURNS TRIGGER AS $$
BEGIN
    UPDATE restaurants SET rest_total_revenue = (SELECT SUM(order_total) FROM orders WHERE orders.rest_id = NEW.rest_id) WHERE rest_id = NEW.rest_id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_revenue
AFTER INSERT ON orders
FOR EACH ROW
EXECUTE FUNCTION update_revenue();












//CCreate a function which takes the current user_id as a parameter and finds the associated cart and then finds the associated cart_item and then it makes a new order with the user_id and then inserts the cart_item into order_item with the new order_id. It also takes rest_id as a parameter which it simply puts in the orders table. There should be no ambiguity errors in the function.
//INSERT INTO orders (user_id, order_total, order_status) VALUES ($1, $2, $3) returning *

//FUNCTION TO PLACE ORDER

//Remove the ambiguity



CREATE OR REPLACE FUNCTION place_order(
    c_user_id INTEGER,
    c_rest_id INTEGER
)
RETURNS orders AS $$
DECLARE
    orders orders;
    cart cart;
    cart_item cart_item;
    order_item order_item;
BEGIN
    SELECT * FROM cart WHERE user_id = c_user_id INTO cart;

    -- Insert into orders table
    INSERT INTO orders (user_id, rest_id, order_total, order_status)
    VALUES (c_user_id, c_rest_id, cart.cart_total, 'PLACED') RETURNING * INTO orders;

    -- Fetch cart_items associated with the cart_id
    FOR cart_item IN (SELECT * FROM cart_item WHERE cart_id = cart.cart_id)
    LOOP
        -- Insert into order_item table
        INSERT INTO order_item (order_id, menu_item_id, order_item_quantity, )
        VALUES (orders.order_id, cart_item.menu_item_id, cart_item.cart_item_quantity)
        RETURNING * INTO order_item;
    END LOOP;

    RETURN orders;
END;
$$ LANGUAGE plpgsql;












//Create a function to increase cart_item_quantity

CREATE OR REPLACE FUNCTION increase_cart_item_quantity(
    c_cart_id INTEGER,
    c_cart_item_id INTEGER
)

RETURNS cart_item AS $$
DECLARE
    cart_item cart_item;
BEGIN
    UPDATE cart_item SET cart_item_quantity = cart_item_quantity + 1 WHERE cart_id = c_cart_id AND cart_item_id = c_cart_item_id returning * INTO cart_item;
    RETURN cart_item;
END;
$$ LANGUAGE plpgsql;


//Similarly a function in decrement cart_item_quantity

CREATE OR REPLACE FUNCTION decrease_cart_item_quantity(
    c_cart_id INTEGER,
    c_cart_item_id INTEGER
)

RETURNS cart_item AS $$

DECLARE

    cart_item cart_item;

BEGIN
    
        UPDATE cart_item SET cart_item_quantity = cart_item_quantity - 1 WHERE cart_id = c_cart_id AND cart_item_id = c_cart_item_id returning * INTO cart_item;
    
        RETURN cart_item;
    
    END;
$$ LANGUAGE plpgsql;


//A procedure to remove a cart_item based on cart_item_id

CREATE OR REPLACE PROCEDURE remove_cart_item(
    c_cart_item_id INTEGER
)

AS $$
BEGIN
    DELETE FROM cart_item WHERE cart_item_id = c_cart_item_id;
END;
$$ LANGUAGE plpgsql;


//Write a procedure which will display details of invoices of current month. Also, display year wise





