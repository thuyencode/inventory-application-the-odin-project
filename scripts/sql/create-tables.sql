CREATE TABLE IF NOT EXISTS
    category (
        id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        create_time TIMESTAMP NOT NULL DEFAULT NOW(),
        name VARCHAR(255) UNIQUE NOT NULL
    );

CREATE TABLE IF NOT EXISTS
    product (
        id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        create_time TIMESTAMP NOT NULL DEFAULT NOW(),
        name VARCHAR(255) UNIQUE NOT NULL,
        description VARCHAR(500),
        price FLOAT NOT NULL,
        stock INT NOT NULL,
        brand VARCHAR(255),
        sku VARCHAR(255) NOT NULL,
        weight INT NOT NULL,
        category_id INT NOT NULL,
        image_url VARCHAR(255) DEFAULT 'https://dummyjson.com/image/400?text=No+Image&fontFamily=quicksand',
        CONSTRAINT fk_category FOREIGN KEY (category_id) REFERENCES category (id)
    );