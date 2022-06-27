CREATE TABLE users (
  id INT AUTO_INCREMENT,
  user_id varchar(255) UNIQUE NOT NULL,
  userName varchar(255),
  password varchar(255),
  address varchar(255),
  privateKey varchar(255),
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE history (
  id INT AUTO_INCREMENT,
  user_id INT,
  amount INT,
  txhash varchar(255),
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE post (
  id INT AUTO_INCREMENT,
  user_id INT,
  content varchar(255),
  post_img varchar(255),
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE reply (
  id INT AUTO_INCREMENT,
  reply_id INT, 
  reply varchar(255),
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

ALTER TABLE history ADD FOREIGN KEY (user_id) REFERENCES users (id);

ALTER TABLE post ADD FOREIGN KEY (user_id) REFERENCES users (id);

ALTER TABLE reply ADD FOREIGN KEY (reply_id) REFERENCES post (id);