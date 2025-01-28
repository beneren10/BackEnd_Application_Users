DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_id INT GENERATED ALWAYS AS IDENTITY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    address VARCHAR(100) NOT NULL,
    category VARCHAR(100) NOT NULL, 
    PRIMARY KEY (user_id)
);

INSERT INTO users (first_name, last_name, address, category)
VALUES
('Adam', 'Smith', '123 Maple Street, Springfield, USA', 'Home Insurance'),
('Maria', 'Gonzalez', '456 Avenida Central, Mexico City, Mexico', 'Earthquake Insurance'),
('Hans', 'Meier', '789 Berliner Strasse, Berlin, Germany', 'Home & Contents Insurance'),
('Akira', 'Tanaka', '1-2-3 Shibuya, Tokyo, Japan', 'Earthquake and Fire Insurance'),
('Emily', 'Davis', '321 High Street, London, UK', 'Flood Insurance'),
('Carlos', 'Silva', 'Rua das Flores 567, São Paulo, Brazil', 'Home Insurance'),
('Liam', 'O’Connor', '789 Clover Lane, Dublin, Ireland', 'All-Risk Home Insurance'),
('Chloe', 'Martin', '12 Rue Lafayette, Paris, France', 'Fire and Theft Insurance'),
('Ahmed', 'Khan', '45 Green Crescent, Dubai, UAE', 'Comprehensive Home Insurance'),
('Sophia', 'Rossi', 'Via Roma 89, Milan, Italy', 'Earthquake Insurance');



