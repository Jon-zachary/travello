\c travello_development
INSERT INTO "Users" (username, email, password)
VALUES ('Jon', 'jon@jon.com', 'jonhash');

INSERT INTO "Users" (username, email, password)
VALUES ('Treniese', 'treniese@treniese.com','treniesehash');

INSERT INTO "Users" (username, email, password)
VALUES ('Jason', 'jason@jason.com', 'jasonhash');

INSERT INTO "Users" (username, email,password)
VALUES ('Val', 'val@val.com', 'valhash');

INSERT INTO "Trips" (tripname, description, password)
VALUES ('FL Adventure', 'disneyland here we come!', 'flhash');

INSERT INTO "Trips" (tripname, description, password)
VALUES ('New Orleans', 'voooodooooo', 'nohash');

INSERT INTO "Itineraries" (userid,tripid,content)
VALUES (1,2,'bought voodoo doll of treniese, its on!');

INSERT INTO "Itineraries" (userid,tripid,content)
VALUES (1,1,'I love Mickey Mouse!!!!');

INSERT INTO "Itineraries" (userid,tripid,content)
VALUES (2,1,'ugh these lines!');

INSERT INTO "Itineraries" (userid,tripid,content)
VALUES (2,2,'Tomorrow Im gonna by a gator!');

INSERT INTO "Itineraries" (userid,tripid,content)
VALUES (3,1,'Its a small world after all!');

INSERT INTO "Itineraries" (userid,tripid,content)
VALUES (3,2,'bought voodoo doll of val, its on!');

INSERT INTO "Itineraries" (userid,tripid,content)
VALUES (4,1,'I want goth disneyland');

INSERT INTO "Itineraries" (userid,tripid,content)
VALUES (4,2,'bought voodoo doll of Jason, its on!');

INSERT INTO "Joins" (userid,tripid)
VALUES (1,1);

INSERT INTO "Joins" (userid,tripid)
VALUES (1,2);

INSERT INTO "Joins" (userid,tripid)
VALUES (2,1);

INSERT INTO "Joins" (userid,tripid)
VALUES (2,2);

INSERT INTO "Joins" (userid,tripid)
VALUES (3,1);

INSERT INTO "Joins" (userid,tripid)
VALUES (3,2);

INSERT INTO "Joins" (userid,tripid)
VALUES (4,1);

INSERT INTO "Joins" (userid,tripid)
VALUES (4,2);










