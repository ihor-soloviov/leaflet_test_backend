CREATE TABLE places(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  description VARCHAR(255),
  latitude NUMERIC,
  longitude NUMERIC
);