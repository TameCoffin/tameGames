INSERT INTO genre (genre)
VALUES 
    ('action horror'),
    ('action rougelike'),
    ('arena shooter'),
    ('first-person-shooter'),
    ('horde shooter'),
    ('looter shooter'),
    ('platformer'),
    ('real-time-strategy'),
    ('soulslike'),
    ('survival horror'),
    ('turn-based-rpg');

INSERT INTO developer (lName, fName, alias)
VALUE 
    ('mair', 'talia bob', 'itsthetalia'),
    ('lindroth', 'mason', NULL),
    ('slahuschek', 'lino', 'rarebyte');

INSERT INTO company (company_title)
VALUE 
    ('croteam'),
    ('from software'),
    ('gearbox'),
    ('grasshopper manufacture'),
    ('monolith productions'),
    ('nintendo'),
    ('tripwire interactive');

INSERT INTO games (game_title, yr_released, cover, company_id, price)
VALUES 
    ('borderlands 2', 2012, 'borderlands.jpg', 3, 30.00),
    ('brutal orchestra', 2021, 'brutal.jpg', NULL, 30.00 ),
    ('dark souls III', 2016, 'darksouls.jpg', 2, 30.00),
    ('f.e.a.r', 2005, 'fear.jpg', 5, 30.00),
    ('killing floor 2', 2016, 'kf2.jpg', 7, 30.00),
    ('let it die', 2016, 'lid.jpg', 4, 30.00),
    ("luigi's mansion", 2001, 'lmansion.jpg', 6, 30.00),
    ('pikmin 2', 2004, 'pikmin.jpg', 6, 30.00),
    ('ratz instagib', 2016, 'ratz.jpg', NULL, 30.00),
    ('serious sam: the first encounter', 2001, 'serioussam.jpg', 1, 30.00),
    ('super paper mario', 2007, 'spm.jpg', 6, 30.00);

INSERT INTO game_to_dev (game_id, developer_id)
VALUE 
    (2, 1),
    (2, 2),
    (9, 3);

INSERT INTO game_to_genre (game_id, genre_id)
VALUE 
    (1, 6),
    (2, 11),
    (3, 9),
    (4, 1),
    (5, 5),
    (6, 2),
    (7, 10),
    (8, 8),
    (9, 3),
    (10, 4),
    (11, 7);
