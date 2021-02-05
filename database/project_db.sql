CREATE TABLE IF NOT EXISTS Project(
    projectId integer primary key,
    title text,
    projectType text,
    shortTitle text,
    tabletTitle text,
    year text,
    keywords text,
    details text
);

CREATE TABLE IF NOT EXISTS Description(
    descriptionId integer primary key,
    projectId integer references Project(projectId),
    content text
);

CREATE TABLE IF NOT EXISTS Credits(
    creditsId integer primary key,
    projectId integer references Project(projectId),
    title text,
    content text
);

CREATE TABLE IF NOT EXISTS Image(
    imageId integer primary key,
    projectId integer references Project(projectId),
    imageOrder integer,
    description text
);

/*Project 1*/
INSERT INTO Project VALUES(
    1, 
    'Leslie Tynik Consulting - Branding', 
    'Graphic identity for Leslie Tynik, founder of LTC in NYC',
    'Leslie Tynik Consulting',
    'Leslie Tynik Consulting<br><span>Branding</span>',
    '2020',
    'Graphic Identity,Branding,NYC,Logo,Monogram',
    NULL
);

INSERT INTO Description VALUES(
    1,
    1,
    'Leslie Tynik Consulting offers clients a wide range of professional services including Visual Merchandising, Window Design, Creative Services, and more. Brutus had the pleasure of designing her brand, focusing on the exploration of space and collaboration, both of which makes a big part on Leslie''s work.'
);

INSERT INTO Credits VALUES(
    1,
    1,
    'Project Team',
    'Shannon Jagger,Catarina Freitas,Lourenço Providência'
);

INSERT INTO Credits VALUES(
    NULL,
    1,
    'Studio',
    'Brutus Studio (NYC)'
);

INSERT INTO Credits VALUES(
    NULL,
    1,
    'Client',
    'Leslie Tynik'
);

INSERT INTO Credits VALUES(
    NULL,
    1,
    'Year',
    '2020'
);

INSERT INTO Credits VALUES(
    NULL,
    1,
    'Discipline',
    'Identity Design'
);

INSERT INTO Credits VALUES(
    NULL,
    1,
    'Website',
    'Yet to launch'
);

INSERT INTO Image VALUES(1,1,1,'Leslie Tynik');
INSERT INTO Image VALUES(NULL,1,2,'Leslie Tynik');
INSERT INTO Image VALUES(NULL,1,3,'Leslie Tynik');
INSERT INTO Image VALUES(NULL,1,4,'Leslie Tynik');
INSERT INTO Image VALUES(NULL,1,5,'Leslie Tynik');
INSERT INTO Image VALUES(NULL,1,6,'Leslie Tynik');
INSERT INTO Image VALUES(NULL,1,7,'Leslie Tynik');


/*Project 2*/
INSERT INTO Project VALUES(
    2, 
    'Grace Hartnett Website', 
    'Website for the NYC director and set designer',
    'Grace Hartnett',
    'Grace Hartnett Website<br><span>Website for the NYC director<span>',
    '2020',
    'Website Design,Art Direction,NYC,UX/UI',
    NULL
);

INSERT INTO Description VALUES(
    NULL,
    2,
    'Grace Hartnett is a multidisciplinary artist who primarily focuses on film direction and set design, with a concentration on still life environments.'
);

INSERT INTO Description VALUES(
    NULL,
    2,
    'A delicate balance between visual simplicity and carefully crafted chaos, Grace''s work is informed by a fascination with human behavior, organic forms, and non-linear movement within time and space. By balancing surreal sculptural elements with the exploration of the human psyche, she delivers complex, cerebral experiences to the viewer.'
);

INSERT INTO Description VALUES(
    NULL,
    2,
    'Grace is based in New York and works internationally.'
);

INSERT INTO Credits VALUES(
    NULL,
    2,
    'Project Team',
    'Shannon Jagger,Catarina Freitas,Jacob McDonald'
);

INSERT INTO Credits VALUES(
    NULL,
    2,
    'Studio',
    'Brutus Studio (NYC)'
);

INSERT INTO Credits VALUES(
    NULL,
    2,
    'Client',
    'Grace Hartnett'
);

INSERT INTO Credits VALUES(
    NULL,
    2,
    'Year',
    '2020'
);

INSERT INTO Credits VALUES(
    NULL,
    2,
    'Discipline',
    'Website Design'
);

INSERT INTO Credits VALUES(
    NULL,
    2,
    'Website',
    'gracehartnett.com'
);

INSERT INTO Image VALUES(NULL,2,1,'GRACE HARTNETT WEBSITE');
INSERT INTO Image VALUES(NULL,2,2,'GRACE HARTNETT WEBSITE');
INSERT INTO Image VALUES(NULL,2,3,'GRACE HARTNETT WEBSITE');
INSERT INTO Image VALUES(NULL,2,4,'GRACE HARTNETT WEBSITE');
INSERT INTO Image VALUES(NULL,2,5,'GRACE HARTNETT WEBSITE');
INSERT INTO Image VALUES(NULL,2,6,'GRACE HARTNETT WEBSITE');
INSERT INTO Image VALUES(NULL,2,7,'GRACE HARTNETT WEBSITE');
INSERT INTO Image VALUES(NULL,2,8,'GRACE HARTNETT WEBSITE');
INSERT INTO Image VALUES(NULL,2,9,'GRACE HARTNETT WEBSITE');
INSERT INTO Image VALUES(NULL,2,10,'GRACE HARTNETT WEBSITE');

/*Project 3*/
INSERT INTO Project VALUES(
    3,
    "Mecha Studio Website -",
    'Welcome to our intimate landscape',
    'Mecha Studio Website',
    'Mecha Studio<br><span>Website<span>',
    '2021',
    'Website Design,Art Direction,UX/UI,Mecha Studio',
    'June 2020'
);

INSERT INTO Description VALUES(
    NULL,
    3,
    'Mecha is a Porto-based independent studio obsessed with making the unbelievable come true. We create meticulous disruption to communicate bold ideas, always locked on an iconic future-focused interactive approach. While humanity rashly embraces singularity, Mecha merges layers of technology and creativity as an entirely new way of connecting people, unlocking new ways of feeling, to generate realities never experienced before. Welcome to our new website.'
);

INSERT INTO Credits VALUES(
    NULL,
    3,
    'Front-end / Graphic Design',
    'Catarina Freitas'
);

INSERT INTO Credits VALUES(
    NULL,
    3,
    'Web Design / Motion & Interaction',
    'Pedro Galego'
);

INSERT INTO Credits VALUES(
    NULL,
    3,
    'Homepage interactive 3D animation',
    'Luís Lima,Pedro Galego'
);

INSERT INTO Credits VALUES(
    NULL,
    3,
    'Previous Contributions',
    'João Jesus,Joana Carneiro'
);

INSERT INTO Credits VALUES(
    NULL,
    3,
    'Inorganic Future (2020)',
    'Luís Lima,Pedro Galego,Catarina Freitas'
);

INSERT INTO Credits VALUES(
    NULL,
    3,
    'Shattered Unicorn (2019)',
    'Joana Carneiro,José Morais,Pedro Galego'
);

INSERT INTO Credits VALUES(
    NULL,
    3,
    'I saw a sign(2018)',
    'Pedro Ribeiro'
);

INSERT INTO Credits VALUES(
    NULL,
    3,
    'Typeface contributions',
    'Hanol by Bouk Ra,Salmanazar by Juliette Collin'
);


INSERT INTO Image VALUES(NULL,3,1,"Mecha Studio Website");
INSERT INTO Image VALUES(NULL,3,2,"Mecha Studio Website");
INSERT INTO Image VALUES(NULL,3,3,"Mecha Studio Website");
INSERT INTO Image VALUES(NULL,3,4,"Mecha Studio Website");
INSERT INTO Image VALUES(NULL,3,5,"Mecha Studio Website");
INSERT INTO Image VALUES(NULL,3,6,"Mecha Studio Website");


/*Project 4*/
INSERT INTO Project VALUES(
    4,
    '"Repeat after me: We do not Live in a bubble.<br>What we do matters" - Series of Posters',
    NULL,
    'SELF-INITIATED',
    'We do not live in a bubble<br><span>Series of Posters</span>',
    '2020',
    'Poster Design,COVID—2019,Black Lives Matter,No more deaths,Hyper Text',
    'March—October 2020'
);

INSERT INTO Description VALUES(
    NULL,
    4,
    '"And the people stayed home. And read books, and listened, and rested, and exercised, and made art, and played games, and learned new ways of being, and were still. And listened more deeply. Some meditated, some prayed, some danced. Some met their shadows. And the people began to think differently. And the people healed. And, in the absence of people living in ignorant, dangerous, mindless, and heartless ways, the earth began to heal. And when the danger passed, and the people joined together again, they grieved their losses, and made new choices, and dreamed new images, and created new ways to live and heal the earth fully, as they had been healed."'
    );

INSERT INTO Description VALUES(
    NULL,
    4,
    'These few days, I started using Instagram as a form of hypertext, sharing books, movies or other relevant context, relating it to our current situation. "At its most sophisticated level, hypertext is a software environment for collaborative work, communication, and knowledge acquisition. It mimics the brain''s ability to store and retrieve information by referential links for quick and intuitive access."
    <br><span class="italic">Janet Fiderio</span>'
);

INSERT INTO Description VALUES(
    NULL,
    4,
    'Inspired by <span class="italic">First Love Studio</span> and <span class="italic">Subliming.jpg</span>, I decided to make a poster about what has been happening outside our lives. Being black is not a crime.'
);

INSERT INTO Description VALUES(
    NULL,
    4,
    '"Right of revolution is the right and duty of the people of a nation to overthrow a government that acts against their common interests and threatens the safety of the people without cause." Using the words of Jane Elliott: "You know what''s happening, you know you don''t want it for you... I want to know why are you so willing to accept it or to allow it to happen for others." 
    No more deaths. End police brutality.'
);

INSERT INTO Credits VALUES(
    NULL,
    4,
    'Editorial Coordination',
    'Catarina Freitas'
);

INSERT INTO Credits VALUES(
    NULL,
    4,
    'Art Direction',
    'Catarina Freitas'
);

INSERT INTO Credits VALUES(
    NULL,
    4,
    'Graphic Design',
    'Catarina Freitas'
);

INSERT INTO Credits VALUES(
    NULL,
    4,
    'Texts',
    'Law Magazine,"The Truman Show" Movie, "The Farewell" Movie,"I have a weekness for a touch of Red",First Love Studio,Subliming.jpg,Jane Elliott'
);

INSERT INTO Credits VALUES(
    NULL,
    4,
    'Collected by',
    'Catarina Freitas'
);

INSERT INTO Image VALUES(NULL,4,1,"WE DO NOT LIVE IN A BUBBLE");
INSERT INTO Image VALUES(NULL,4,2,"WE DO NOT LIVE IN A BUBBLE");
INSERT INTO Image VALUES(NULL,4,3,"WE DO NOT LIVE IN A BUBBLE");
INSERT INTO Image VALUES(NULL,4,4,"WE DO NOT LIVE IN A BUBBLE");
INSERT INTO Image VALUES(NULL,4,5,"WE DO NOT LIVE IN A BUBBLE");
INSERT INTO Image VALUES(NULL,4,6,"Black Lives matter");

/*Project 5*/
INSERT INTO Project VALUES(
    5, 
    'Graphic Design as a Subject, a Method and a Practice<br>A Resource Book on Graphic Design', 
    NULL,
    'MA PROJECT',
    'Graphic Design as a Subject,<br>a Method and a Practice',
    '2020',
    'Resource Book,Education,Print is not dead,Commitment to the Future',
    '220x150mm,607 pages,Paperback,PT,February 2020'
);

INSERT INTO Description VALUES(
    NULL,
    5,
    '"Graphic Design as a Subject, a Method and a Practice" consists in 3 graphic objects that work together to create a set of resources, designed to integrate and assist the beginning of the study (independent or formal) of Graphic Design.'
);

INSERT INTO Description VALUES(
    NULL,
    5,
    'The project aims, in addition to providing an entry into the study/practice of graphic design, to address some problems related to the commitment to written texts and historical discourses, together with examining the possibilities for creating an open resource (hyper text/ infinitive canvas). The publication aims to include critical and challenging texts from the design teaching paradigms, while exposing the uncertainties of competing methodologies. In case you want to participate with original texts for the book, please contact me via email.'
);

INSERT INTO Credits VALUES(
    NULL,
    5,
    'Editorial Coordination',
    'Catarina Freitas'
);

INSERT INTO Credits VALUES(
    NULL,
    5,
    'Texts',
    'Steven Heller-"The Education of a Graphic Designer",Collective-"Teaching for people who prefer not to teach"'
);

INSERT INTO Credits VALUES(
    NULL,
    5,
    'Art Direction',
    'Catarina Freitas'
);

INSERT INTO Credits VALUES(
    NULL,
    5,
    'Graphic Design',
    'Catarina Freitas'
);

INSERT INTO Credits VALUES(
    NULL,
    5,
    'Print',
    'Gráfica Saúde Sá'
);

INSERT INTO Image VALUES(NULL,5,1,'A RESOURCE BOOK ON GRAPHIC DESIGN');
INSERT INTO Image VALUES(NULL,5,2,'A RESOURCE BOOK ON GRAPHIC DESIGN');
INSERT INTO Image VALUES(NULL,5,3,'A RESOURCE BOOK ON GRAPHIC DESIGN');
INSERT INTO Image VALUES(NULL,5,4,'A RESOURCE BOOK ON GRAPHIC DESIGN');
INSERT INTO Image VALUES(NULL,5,5,'A RESOURCE BOOK ON GRAPHIC DESIGN');
INSERT INTO Image VALUES(NULL,5,6,'A RESOURCE BOOK ON GRAPHIC DESIGN');
INSERT INTO Image VALUES(NULL,5,7,'A RESOURCE BOOK ON GRAPHIC DESIGN');
INSERT INTO Image VALUES(NULL,5,8,'A RESOURCE BOOK ON GRAPHIC DESIGN');
INSERT INTO Image VALUES(NULL,5,9,'A RESOURCE BOOK ON GRAPHIC DESIGN');
INSERT INTO Image VALUES(NULL,5,10,'A RESOURCE BOOK ON GRAPHIC DESIGN');


/*Project 6*/
INSERT INTO Project VALUES(
    6, 
    'SINAL – 100 Anos de Design das Telecomunicações<br>e dos Correios em Portugal -  Catalogue', 
    NULL,
    'Catalogue',
    'SINAL - 100 Anos de Design<br>das Telecomunicações e dos Correios em Portugal',
    '2019',
    'Transmission,Network,Equipment,Message,Identity,Emission',
    '235x165mm,200 pages,Paperback,PT,978-989-8829-57-3,July 2019'
);

INSERT INTO Description VALUES(
    NULL,
    6,
    'The logos, advertising materials, buildings, equipment and uniforms of Post Office and Telecommunications companies are part of Portugal''s imagination and collective experience, following the country''s technological, cultural, social and political evolution.'
);

INSERT INTO Description VALUES(
    NULL,
    6,
    'Stemming from the exhibition Sinal – 100 Years of Telecommunications and Postal Service Design in Portugal, this catalogue is the first to focus on the relationship between Portuguese design and telecommunications and postal services throughout the 20th century. It also reflects the structure of the exhibition as it is divided into six richly contextualized, documented and illustrated nuclei: Transmission, Network, Equipment, Message, Identity and Emission.'
);

INSERT INTO Credits VALUES(
    NULL,
    6,
    'Co-Edition',
    'Câmera Municipal de Matosinhos'
);

INSERT INTO Credits VALUES(
    NULL,
    6,
    'Editorial Coordination',
    'José Bártolo,Sara Pinheiro'
);

INSERT INTO Credits VALUES(
    NULL,
    6,
    'Texts',
    'Fernando Rocha,José Bártolo,Luísa Salgueiro'
);

INSERT INTO Credits VALUES(
    NULL,
    6,
    'Art Direction',
    'Inês Nepomuceno'
);

INSERT INTO Credits VALUES(
    NULL,
    6,
    'Graphic Design',
    'Catarina Freitas,Susana Martins'
);

INSERT INTO Image VALUES(NULL,6,1,'SINAL');
INSERT INTO Image VALUES(NULL,6,2,'SINAL');
INSERT INTO Image VALUES(NULL,6,3,'SINAL');
INSERT INTO Image VALUES(NULL,6,4,'SINAL');
INSERT INTO Image VALUES(NULL,6,5,'SINAL');
INSERT INTO Image VALUES(NULL,6,6,'SINAL');


/*Project 7*/
INSERT INTO Project VALUES(
    7, 
    'A project on Surveillance - Protection, Privacy and Fear<br>What to do, when you are not being watched?',
    NULL,
    '3 BOOKS',
    'A project on Surveillance<br><span>Protection, Privacy and Fear</span>',
    '2019',
    'Surveillance,Security,Editorial,Visual Essay,Pocket Book',
    '180x110mm,200 pages,Paperback,PT,April 2019'
);

INSERT INTO Description VALUES(
    NULL,
    7,
    'With the intention of exploring the theme "Surveillance", 3 completely different graphic objects were made, each of them exploring one particular side of that same word: 01 Protection/Security; 02 Privacy and Fear; 03 Hiding Places and what do you do when you''re not being watched.'
);

INSERT INTO Description VALUES(
    NULL,
    7,
    'The first editorial piece is a Visual Essay that works with materials, transparency and sensitivity, combining pictures that have been taken of surveillance cameras on the streets of Porto. This first object explores the surveillance point of view where you are being watched, supposedly for your security and protection. The idea of the transparent object is to demonstrate that, even when everything is as visible as possible, visibility is sometimes compromised. This object arises as an antithesis to the conventional idea that one has of transparency. The idea that someone is transparent always referred to a person who has no problem in demonstrating everything that goes on in their life. In this case, the images of the filming cameras printed in acetate, overlap each other, creating an object and a narrative only that, although being transparent, becomes impossible to visualize.'
);

INSERT INTO Description VALUES(
    NULL,
    7,
    'The second object is a small sized book that explores the surveillance point of view of being watched without permission, and the fear of it, by collecting pictures taken by covered computer cameras. "Shall I say it, or will you? We are not human. They could spy upon you night and day. Are you prepared to give your lives? Folly, folly, his heart kept saying: conscious, gratuitous, suicidal folly. I assume that you have a hiding-place of some kind? Under the window somebody was singing."'
);

INSERT INTO Description VALUES(
    NULL,
    7,
    'The last book is in a pocketbook format inspired by the 1984 film diary, and portrays the view of the hideout as the place where we are safe and alone. In fact, it is not quite so. The spread dedicated to each of the images appears as reinforcement of the idea of zoom, observation, espionage: the idea of Surveillance.'
);

INSERT INTO Credits VALUES(
    NULL,
    7,
    'Editorial Coordination',
    'Catarina Freitas'
);

INSERT INTO Credits VALUES(
    NULL,
    7,
    'Texts',
    'George Orwell-"1984",FOAM Magazine #43,Ai Weiwei-"Freedom of Expression under Surveillance"'
);

INSERT INTO Credits VALUES(
    NULL,
    7,
    'Art Direction',
    'Catarina Freitas'
);

INSERT INTO Credits VALUES(
    NULL,
    7,
    'Graphic Design',
    'Catarina Freitas'
);

INSERT INTO Credits VALUES(
    NULL,
    7,
    'Pictures',
    'Collected from Google Maps by Jon Rafman in "9-eyes.com"'
);

INSERT INTO Credits VALUES(
    NULL,
    7,
    'Print',
    'Gráfica Saúde Sá'
);

INSERT INTO Image VALUES(NULL,7,1,'A project on surveillance');
INSERT INTO Image VALUES(NULL,7,2,'A project on surveillance');
INSERT INTO Image VALUES(NULL,7,3,'A project on surveillance');
INSERT INTO Image VALUES(NULL,7,4,'A project on surveillance');
INSERT INTO Image VALUES(NULL,7,5,'A project on surveillance');
INSERT INTO Image VALUES(NULL,7,6,'A project on surveillance');


/*Project 8*/
INSERT INTO Project VALUES(
    8, 
    'Alternative Society - We escaped', 
    'A Book by Catarina Freitas',
    'Short Story',
    'Alternative Society<br>We escaped',
    '2019',
    'Tale,Alternative Society,Editorial,New World,MA Project',
    '165x125 mm,64 pages,Paperback,PT,November 2019'
);

INSERT INTO Description VALUES(
    NULL,
    8,
    '"Alternative Society — We escaped" is a short story, written by me, that consists mainly on a cry for change: an appeal for the change and renewal of values, by not only the new generations, but also the older ones.'
);

INSERT INTO Description VALUES(
    NULL,
    8,
    'This book tells Vicente''s story, a character who used to live in our world and is later recovered into a parallel Society (better known as an Alternative Society). He presents us, in a sincere and attentive way, two very different realities: a polluted, degraded and silenced society, and an almost ideal one.'
);

INSERT INTO Description VALUES(
    NULL,
    8,
    'In the book, our world is characterised by disinterest in the life of books, forgetfulness, devaluation of dreams, laziness, carelessness and conflict. On the other hand, the Alternative Society explores the desires, the various senses, leisure and observation tome, the care in dealing with all the matters, creativity, as well as experimentalism, proactivity and dialogue.'
);

INSERT INTO Credits VALUES(
    NULL,
    8,
    'Editorial Coordination',
    'Catarina Freitas'
);

INSERT INTO Credits VALUES(
    NULL,
    8,
    'Texts',
    'Catarina Freitas'
);

INSERT INTO Credits VALUES(
    NULL,
    8,
    'Art Direction',
    'Catarina Freitas'
);

INSERT INTO Credits VALUES(
    NULL,
    8,
    'Graphic Design',
    'Catarina Freitas'
);

INSERT INTO Credits VALUES(
    NULL,
    8,
    'Photography',
    'Catarina Freitas'
);

INSERT INTO Credits VALUES(
    NULL,
    8,
    'Print',
    'Screen Printing (cover),Digital Printing'
);

INSERT INTO Image VALUES(NULL,8,1,'Alternative Society');
INSERT INTO Image VALUES(NULL,8,2,'Alternative Society');
INSERT INTO Image VALUES(NULL,8,3,'Alternative Society');
INSERT INTO Image VALUES(NULL,8,4,'Alternative Society');


/*Project 9*/
INSERT INTO Project VALUES(
    9, 
    'Catcher in the Rye + The Revolution of Everyday Life', 
    'Book Redesign',
    'MAY 1968',
    'Catcher in the Rye + The Revolution of Everyday Life<br><span>Book Redesign</span>',
    '2019',
    '1968,Student Revolution,Education,Progress,Editorial',
    '180x110 mm,359 pages,Paperback,PT,November 2019'
);

INSERT INTO Description VALUES(
    NULL,
    9,
    'We are in an age "where the renewal of values was accompanied by the prominent strength of a youth culture". Both books ("Catcher in the Rye", by J.D Salinger, and "The Revolution of Everyday Life" by Raoul Vaneigem) and images (taken in 1968, during the Students Protests) portray events or thoughts originating in a huge discontent with the environment, values and the surrounding dynamics, not only in the educational sector, but also in the social, sexual, political and civil sectors.'
);

INSERT INTO Description VALUES(
    NULL,
    9,
    '"Once you get past all the Mr. Vinsons, you''re going to start getting closer and closer - that is, if you want to, and if you look for it and wait for it - to the kind of information that will be very, very dear to your heart. Among other things, you''ll find that you''re not the first person who was ever confused and frightened and even sickened by human behaviour. You''re by no means alone on that score, you''ll be excited and stimulated to know. Many, many men have been just as troubled morally and spiritually as you are right now. Happily, some of them kept records of their troubles. You''ll learn from them - if you want to. Just as someday, if you have something to offer, someone will learn something from you. It''s a beautiful reciprocal arrangement. And it isn''t education. It''s history. It''s poetry."
    <br><span class="italic">J. D. Salinger</span>'
);

INSERT INTO Description VALUES(
    NULL,
    9,
    '"But what about the impossibility of living, what about this stifling mediocrity and this absence of passion? What about this feeling of never really being inside your own skin? Let nobody say these are minor details or secondary points. (...) If you go for revolution and neglect your own self, then you''re going about it backwards."
    <br><span class="italic">Raoul Vaneigem</span>'
);

INSERT INTO Credits VALUES(
    NULL,
    9,
    'Editorial Coordination',
    'Catarina Freitas'
);

INSERT INTO Credits VALUES(
    NULL,
    9,
    'Texts',
    'J. D Salinger-"Catcher in the Rye",Raoul Vaneigem-"The Revolution of Everyday Life"'
);

INSERT INTO Credits VALUES(
    NULL,
    9,
    'Art Direction',
    'Catarina Freitas'
);

INSERT INTO Credits VALUES(
    NULL,
    9,
    'Graphic Design',
    'Catarina Freitas'
);

INSERT INTO Credits VALUES(
    NULL,
    9,
    'Photography',
    'Archive from the 1968,Student Protests'
);

INSERT INTO Credits VALUES(
    NULL,
    9,
    'Print',
    'Gráfica Saúde Sá'
);

INSERT INTO Image VALUES(NULL,9,1,'Catcher in the rye');
INSERT INTO Image VALUES(NULL,9,2,'Catcher in the rye');
INSERT INTO Image VALUES(NULL,9,3,'Catcher in the rye');
INSERT INTO Image VALUES(NULL,9,4,'Catcher in the rye');
INSERT INTO Image VALUES(NULL,9,5,'Catcher in the rye');
INSERT INTO Image VALUES(NULL,9,6,'Catcher in the rye');
INSERT INTO Image VALUES(NULL,9,7,'Catcher in the rye');

/*Project 10*/
INSERT INTO Project VALUES(
    10, 
    'The Palace of Dreams', 
    'Publication by Catarina Freitas',
    'Dreams',
    'The Palace of Dreams<br><span>Publication</span>',
    '2019',
    'Zine,Risography,Print,Sleeping,Exploration,Editorial',
    '140x85mm,52 pages,Paperback,PT,May 2019'
);

INSERT INTO Description VALUES(
    NULL,
    10,
    '"The Palace of Dreams" is a publication that show that dreams are made up of materiais, thoughts, songs and ideas that we bring from behind, from all places, from all people, from all memories. The publication intends to establish a parallel relation between my daily routine and my dreams, being the mapping concretised through images and narrative (in the form of memories). It analyses the day, the period of the year in which the dream takes place; the weather, the activities done during each day, the number of hour spent sleeping and the number of breaks during the night.'
);

INSERT INTO Description VALUES(
    NULL,
    10,
    '"People say, "I''m going to sleep now," as if it were nothing. But it''s really a bizarre activity. "For the next several hours, while the sun is gone, I''m going to become unconscious, temporarily losing command over everything I know and understand. When the sun returns, I will resume my life."'
);

INSERT INTO Description VALUES(
    NULL,
    10,
    'If you didn''t know what sleep was, and you had only seen it in a science fiction movie, you would think it was weird and tell all your friends about the movie you''d seen. They had these people, you know? And they would walk around all day and be ok? And then, once a day, usually after dark, they would lie down on these special platforms and become unconscious. They would stop functioning almost completely, except deep in their minds they would have adventures and experiences that were completely impossible in real life. As they lay there, completely vulnerable to their enemies, their only movements were to occasionally shift from one position to another; or, if one of the "mind adventures" got too real, they would sit up and scream and be glad they weren''t unconscious anymore. Then they would drink a lot of coffee. 
    <br><span class="italic">George Carlin</span>'
);

INSERT INTO Credits VALUES(
    NULL,
    10,
    'Editorial Coordination',
    'Catarina Freitas'
);

INSERT INTO Credits VALUES(
    NULL,
    10,
    'Texts',
    'Catarina Freitas,Reto Pulfer-"Fabric Island",George Carlin'
);

INSERT INTO Credits VALUES(
    NULL,
    10,
    'Art Direction',
    'Catarina Freitas'
);

INSERT INTO Credits VALUES(
    NULL,
    10,
    'Graphic Design',
    'Catarina Freitas'
);

INSERT INTO Credits VALUES(
    NULL,
    10,
    'Photography',
    'Catarina Freitas'
);

INSERT INTO Credits VALUES(
    NULL,
    10,
    'Print',
    'Risography'
);

INSERT INTO Image VALUES(NULL,10,1,'The Palace of dreams');
INSERT INTO Image VALUES(NULL,10,2,'The Palace of dreams');
INSERT INTO Image VALUES(NULL,10,3,'The Palace of dreams');
INSERT INTO Image VALUES(NULL,10,4,'The Palace of dreams');
INSERT INTO Image VALUES(NULL,10,5,'The Palace of dreams');
INSERT INTO Image VALUES(NULL,10,6,'The Palace of dreams');
INSERT INTO Image VALUES(NULL,10,7,'The Palace of dreams');
INSERT INTO Image VALUES(NULL,10,8,'The Palace of dreams');



/*Project 11*/
INSERT INTO Project VALUES(
    11,
    "For the Future we present: Thought, Action, Conduct<br>The Project of a Total Life",
    NULL,
    'Risography Publication',
    "For the Future we present: Thought, Action, Conduct<br>The Project of a Total Life",
    '2020',
    'Printing Techniques,Risography,Editorial,Values,Education',
    '225x150mm,16 pages,Paperback,PT,Feb 2020'
);

INSERT INTO Description VALUES(
    NULL,
    11,
    'The booklet "For the Future we present: thought, action, conduct" consists on a small manifest publication, which not only introduces the technique of Risograph Printing, but also invites the reader to analyse his own actions, in a direct and provocative way.
    With the subtitle "The New Season starts now, hopefully everywhere", this is a publication entirely composed from excerpts of several other books. A parade of works, authors and reflections occupies the narrative in the form of small individual posters, which coexist together in what aims to be achieve a Manifesto that ends with the statement: "The Project of Total Life".'
);

INSERT INTO Description VALUES(
    NULL,
    11,
    'Topics such as indifference, the importance of acting in favor of our ideals, self-exploration and self-knowledge, the importance of observation and leisure time, or even honest outpouring about cynicism and arrogance, cover this section, making it a flashy and colourful parade of thoughts that I consider relevant.'
);

INSERT INTO Description VALUES(
    NULL,
    11,
    'Phrases and expressions taken not only from books, but also from lectures, exhibitions or interviews now take the form of a poster, with the aim of drawing attention to the younger and more novice public, inviting them to think about subjects that are really worthwhile and , hopefully, challenge them to find solutions.'
);

INSERT INTO Credits VALUES(
    NULL,
    11,
    'Editorial Coordination',
    'Catarina Freitas'
);

INSERT INTO Credits VALUES(
    NULL,
    11,
    'Texts',
    'Mateus Brandão-"Para Poder Voltar",Raoul Vaneigen-"The Revolution of Everyday Life",J. Krishnamurti-"Carta às Escolas",Enzo Mari-"Nothing is more Radical than facts",Que Força é essa-"Cartazes Artesanais do Arquivo Ephemera",Bruno Munari-"Design e Comunicação Visual",Ivan Illinch-"Descholling Society"'
);

INSERT INTO Credits VALUES(
    NULL,
    11,
    'Art Direction',
    'Catarina Freitas'
);

INSERT INTO Credits VALUES(
    NULL,
    11,
    'Graphic Design',
    'Catarina Freitas'
);

INSERT INTO Credits VALUES(
    NULL,
    11,
    'Photography',
    'Catarina Freitas'
);

INSERT INTO Credits VALUES(
    NULL,
    11,
    'Print',
    'Risography'
);

INSERT INTO Image VALUES(NULL,11,1,'THE PROJECT OF A TOTAL LIFE');
INSERT INTO Image VALUES(NULL,11,2,'THE PROJECT OF A TOTAL LIFE');
INSERT INTO Image VALUES(NULL,11,3,'THE PROJECT OF A TOTAL LIFE');
INSERT INTO Image VALUES(NULL,11,4,'THE PROJECT OF A TOTAL LIFE');
INSERT INTO Image VALUES(NULL,11,5,'THE PROJECT OF A TOTAL LIFE');
INSERT INTO Image VALUES(NULL,11,6,'THE PROJECT OF A TOTAL LIFE');
INSERT INTO Image VALUES(NULL,11,7,'THE PROJECT OF A TOTAL LIFE');


/*Project 12*/
INSERT INTO Project VALUES(
    12,
    "There's a secret parade in our hometown<br>Here's what our mothers don't share",
    NULL,
    '1000 pages book',
    'There''s a secret parade<br>in our hometown',
    '2019',
    'Editorial,Conspiracy Theories,Secret,Invisible Ink',
    '250x170mm,1000 pages,Paperback,PT,Jun 2019'
);

INSERT INTO Description VALUES(
    NULL,
    12,
    'Like all monsters, it all shower up in he middle of the night. It was a regular Sunday when… well, I''m happy to see what happens (of course this is not entirely true, especially these days…). This is pretty silly, but it was all their idea! I don''t think they are super crazy, sick, alternative, fucked-up, you know. Where do they get the information? I don''t know and I don''t care. I know they know… I guess so… it makes sense that you say that, but this is not something I had thought of before. From here till now, we have always been close. It could actually be anything else, there is nothing essential here. But there is a secret parade in our hometown. I''m choosing to share the secrets.'
);

INSERT INTO Description VALUES(
    NULL,
    12,
    'The title and the premise of the book arises as a humorous interpretation of the conspiracy theme. Being the idea of distance always present, we do not intend to support or destroy any theory but, at the same time, to do both.'
);

INSERT INTO Description VALUES(
    NULL,
    12,
    '"There''s a secret parade in our hometown" characterises the narrative of the entire book. The object functions as a parade of theories, represented graphically, filled and consecutive. As in a parade, little is the empty space to breathe. All theories scroll visually, without any textual component supporting it.'
);

INSERT INTO Description VALUES(
    NULL,
    12,
    'The word "hometown" has a peculiar feature. Because it is where all theories begin, "hometown" suggests a secret and subtle character. Suddenly, "hometown" becomes a 1000 page book, which is not as discreet as one might think.
    "Here''s what out mothers don''t share" comes up as subtitle, and suggests to us the maternal figure of the mother involved in whatever conspiracy. A mother, someone whom we never associate with conspiracy, is also involved in the Parade.'
);

INSERT INTO Credits VALUES(
    NULL,
    12,
    'Editorial Coordination',
    'Catarina Freitas'
);

INSERT INTO Credits VALUES(
    NULL,
    12,
    'Texts',
    'Google'
);

INSERT INTO Credits VALUES(
    NULL,
    12,
    'Collected by',
    'Francisco Sá,Catarina Cunha'
);

INSERT INTO Credits VALUES(
    NULL,
    12,
    'Art Direction',
    'Catarina Freitas'
);

INSERT INTO Credits VALUES(
    NULL,
    12,
    'Graphic Design',
    'Catarina Freitas,Alexandre Oliveira'
);

INSERT INTO Credits VALUES(
    NULL,
    12,
    'Photography',
    'Google Images'
);

INSERT INTO Credits VALUES(
    NULL,
    12,
    'Print',
    'ESAD—Matosinhos'
);

INSERT INTO Image VALUES(NULL, 12,1,'THERE''S A SECRET PARADE IN OUR HOMETOWN HERE''S WHAT OUR MOTHERS DON''T SHARE');
INSERT INTO Image VALUES(NULL, 12,2,'THERE''S A SECRET PARADE IN OUR HOMETOWN HERE''S WHAT OUR MOTHERS DON''T SHARE');
INSERT INTO Image VALUES(NULL, 12,3,'THERE''S A SECRET PARADE IN OUR HOMETOWN HERE''S WHAT OUR MOTHERS DON''T SHARE');
INSERT INTO Image VALUES(NULL, 12,4,'THERE''S A SECRET PARADE IN OUR HOMETOWN HERE''S WHAT OUR MOTHERS DON''T SHARE');
INSERT INTO Image VALUES(NULL, 12,5,'THERE''S A SECRET PARADE IN OUR HOMETOWN HERE''S WHAT OUR MOTHERS DON''T SHARE');
INSERT INTO Image VALUES(NULL, 12,6,'THERE''S A SECRET PARADE IN OUR HOMETOWN HERE''S WHAT OUR MOTHERS DON''T SHARE');

/*Project 13*/
INSERT INTO Project VALUES(
    13,
    '751 DIAS – O tempo não consome a Eternidade', 
    'Developed in ESAD—idea with Inês Nepomuceno',
    'Meta-Livro',
    '751 DIAS – O tempo não consome a Eternidade',
    '2018',
    'Editorial,Paulo Cunha e Silva,Tribute,Culture',
    '265x150mm,548 pages,Paperback,978-989-99871-8-0,June 2018'
);

INSERT INTO Description VALUES(
    NULL,
    13,
    '"751 dias – O tempo não consome a Eternidade."
    Paulo Cunha e Silva por Helena Teixeira da Silva. Developed in esad—idea.'
);

INSERT INTO Description VALUES(
    NULL,
    13,
    '"A verdade é que foram muitas as pessoas que, de forma pensada ou espontânea, testemunharam o seu apreço e admiração e deixaram relatos da sua convivência com o Paulo. Havia que registar, para a posteridade, alguns desses testemunhos e, também, deixar impressas as suas notas pessoais, que nos deixou na sua imperdível página de Facebook."
    <br><span class="italic">Rui Moreira</span>'
);

INSERT INTO Description VALUES(
    NULL,
    13,
    '"A intenção passou a ser, também, a de guardar uma fatia muito particular do tempo de um homem e de uma cidade."
    <br><span class="italic">Helena Teixeira da Silva</span>'
);

INSERT INTO Credits VALUES(
    NULL,
    13,
    'Edition',
    'Câmara Municipal do Porto'
);

INSERT INTO Credits VALUES(
    NULL,
    13,
    'Authorship',
    'Helena Teixeira da Silva'
);

INSERT INTO Credits VALUES(
    NULL,
    13,
    'Review',
    'Andreia Faria'
);

INSERT INTO Credits VALUES(
    NULL,
    13,
    'Graphic Design',
    'Inês Nepomuceno,Catarina Freitas,ESAD—idea'
);

INSERT INTO Credits VALUES(
    NULL,
    13,
    'Photography',
    'Miguel Nogueira,Bárbara Moreira'
);

INSERT INTO Credits VALUES(
    NULL,
    13,
    'Facebook Support',
    'Fernando Miranda'
);

INSERT INTO Credits VALUES(
    NULL,
    13,
    'Print',
    'Gráfica Maiadouro'
);

INSERT INTO Credits VALUES(
    NULL,
    13,
    'ISBN',
    'Andreia Faria'
);

INSERT INTO Credits VALUES(
    NULL,
    13,
    'Legal Deposit',
    '441 848/18'
);

INSERT INTO Image VALUES(NULL,13,1,'751 DIAS – O TEMPO NÃO CONSOME A ETERNIDADE');
INSERT INTO Image VALUES(NULL,13,2,'751 DIAS – O TEMPO NÃO CONSOME A ETERNIDADE');
INSERT INTO Image VALUES(NULL,13,3,'751 DIAS – O TEMPO NÃO CONSOME A ETERNIDADE');
INSERT INTO Image VALUES(NULL,13,4,'751 DIAS – O TEMPO NÃO CONSOME A ETERNIDADE');
INSERT INTO Image VALUES(NULL,13,5,'751 DIAS – O TEMPO NÃO CONSOME A ETERNIDADE');
INSERT INTO Image VALUES(NULL,13,6,'751 DIAS – O TEMPO NÃO CONSOME A ETERNIDADE');
INSERT INTO Image VALUES(NULL,13,7,'751 DIAS – O TEMPO NÃO CONSOME A ETERNIDADE');
INSERT INTO Image VALUES(NULL,13,8,'751 DIAS – O TEMPO NÃO CONSOME A ETERNIDADE');
INSERT INTO Image VALUES(NULL,13,9,'751 DIAS – O TEMPO NÃO CONSOME A ETERNIDADE');


/*Project 14*/
INSERT INTO Project VALUES(
    14,
    'Printing Techniques',
    'Screen Printing/ Risography/ Letterpress',
    'Print is not dead',
    'Printing Techniques<br><span>Screen Printing/ Risography/ Letterpress</span>',
    '2019',
    'Printing Techniques,Screen Printing,Risography,Letterpress',
    NULL
);

INSERT INTO Description VALUES(
    NULL,
    14,
    '"Let me state this for the record: the internet is not dead. Digital will not disappear. Print will not kill the web. (...) We are in a print world now. People have now come to understand that once a print book is purchased, they truly own their personal edition of that story. There are no limitations to what they can do with it or to it. (...)'
);

INSERT INTO Description VALUES(
    NULL,
    14,
    'With print books, we have come to understand what it is like not to be forever leasing information. (...) By occupying space, by having weight and heft, by utilizing smells and tactility as part of their own stories, print have impact.'
);

INSERT INTO Description VALUES(
    NULL,
    14,
    'Unlike an ever-reproducible digital file or webpage, a physical book is a solitary experience that can only be enjoyed by one person at a time. When we finish a book, we close the cover and are left in peace; there is no online store pushing us instantly to buy and read more. There are no in-book purchases to be made as we read. No advertisements will ever pop up related to our reading experience. Numerous studies have shown that since the arrival of print, people ́s ability and duration of maintaining attention on a single idea has increased. Print is literally changing how we think, and how we look at the worlds around us. The two are engaged not in a fight, but a dance. Print or digital? That question is as redundant as asking which is better, red or green?"
    <br><span class="italic">Fully Booked — Ink On Paper — Design & Concepts for New Publications</span>'
);

INSERT INTO Credits VALUES(
    NULL,
    14,
    'Print',
    'ESAD Matosinhos'
);

INSERT INTO Credits VALUES(
    NULL,
    14,
    'Editorial Coordination',
    'Catarina Freitas'
);

INSERT INTO Credits VALUES(
    NULL,
    14,
    'Art Direction',
    'Catarina Freitas'
);

INSERT INTO Credits VALUES(
    NULL,
    14,
    'Graphic Design',
    'Catarina Freitas'
);

INSERT INTO Image VALUES(NULL,14,1,'PRINTING TECHNIQUES');
INSERT INTO Image VALUES(NULL,14,2,'PRINTING TECHNIQUES');
INSERT INTO Image VALUES(NULL,14,3,'PRINTING TECHNIQUES');
INSERT INTO Image VALUES(NULL,14,4,'PRINTING TECHNIQUES');
INSERT INTO Image VALUES(NULL,14,5,'PRINTING TECHNIQUES');
INSERT INTO Image VALUES(NULL,14,6,'PRINTING TECHNIQUES');
INSERT INTO Image VALUES(NULL,14,7,'PRINTING TECHNIQUES');
INSERT INTO Image VALUES(NULL,14,8,'PRINTING TECHNIQUES');
INSERT INTO Image VALUES(NULL,14,9,'PRINTING TECHNIQUES');


/*Project 15*/
INSERT INTO Project VALUES(
    15,
    'Complete Love',
    'Photography Analog Series',
    'Photography',
    'Complete Love<br><span>Photography Analog Series</span>',
    '2017-Now',
    'Love,Analog Photography,Summer Bodies',
    'PT,2017—Present'
);

INSERT INTO Description VALUES(
    NULL,
    15,
    'Motivated by the book "Complete Love", by Ingo Niermann, I decided to creat this series of on-going photographs. Like Ingo, I believe that all people, with all types of bodies, are sexy. This project intends to function as an infinite exposure of bodies, portraying their behavior on hot days, giving preference to beautiful elder bodies. With this, I intend to create a space that values bodies, identities and experiences.'
);

INSERT INTO Description VALUES(
    NULL,
    15,
    '"To avoid any physical discrimination whatsoever, an employer shouldn''t be able to see applicants before or after hiring them. Telecommunications had long made this a possibility. Physical discrimination would then be reserved for private life only. And even there you could postpone it until after the alliance, as demonstrated by Islam. Covering up was a great egalitarian measure - if only men were required to do it as well. It meant an enormous civilising capacity, loving someone regardless of how they looked. Western modernity had distanced itself from this more and more. We might of course wonder whether love was ever regarded as very important traditionally."
    <br><span class="italic">Ingo Niermann on Complete Love</span>'
);

INSERT INTO Credits VALUES(
    NULL,
    15,
    'Photography',
    'Catarina Freitas'
);

INSERT INTO Credits VALUES(
    NULL,
    15,
    'Texts',
    'Ingo Niermann'
);

INSERT INTO Credits VALUES(
    NULL,
    15,
    'Art Direction',
    'Catarina Freitas'
);

INSERT INTO Credits VALUES(
    NULL,
    15,
    'Laboratory',
    'Lab Center PT'
);

INSERT INTO Image VALUES(NULL,15,1,'COMPLETE LOVE');
INSERT INTO Image VALUES(NULL,15,2,'COMPLETE LOVE');
INSERT INTO Image VALUES(NULL,15,3,'COMPLETE LOVE');
INSERT INTO Image VALUES(NULL,15,4,'COMPLETE LOVE');
INSERT INTO Image VALUES(NULL,15,5,'COMPLETE LOVE');
INSERT INTO Image VALUES(NULL,15,6,'COMPLETE LOVE');
INSERT INTO Image VALUES(NULL,15,7,'COMPLETE LOVE');
INSERT INTO Image VALUES(NULL,15,8,'COMPLETE LOVE');
INSERT INTO Image VALUES(NULL,15,9,'COMPLETE LOVE');
INSERT INTO Image VALUES(NULL,15,10,'COMPLETE LOVE');
INSERT INTO Image VALUES(NULL,15,11,'COMPLETE LOVE');
INSERT INTO Image VALUES(NULL,15,12,'COMPLETE LOVE');
INSERT INTO Image VALUES(NULL,15,13,'COMPLETE LOVE');
INSERT INTO Image VALUES(NULL,15,14,'COMPLETE LOVE');


/*Project 16*/
INSERT INTO Project VALUES(
    16,
    'ESAD — Escola Superior de Artes e Design , Matosinhos',
    'Work developed in ESAD-idea',
    'ESAD/ ESAD-idea Editorial Poster',
    'ESAD — Escola Superior de Artes e Design , Matosinhos<br><span>Work developed in ESAD-idea</span>',
    '2017-2020',
    'Editorial,Poster Design,Photography,Education',
    'PT,2017—2020'
);

INSERT INTO Description VALUES(
    NULL,
    16,
    'Work developed in ESAD — idea.'
);

INSERT INTO Credits VALUES(
    NULL,
    16,
    'Art Direction',
    'Inês Nepomuceno'
);

INSERT INTO Credits VALUES(
    NULL,
    16,
    'Graphic Design',
    'Catarina Freitas,Inês Nepomuceno,Susana Martins,Susana Carreiras,Estepheny Abreu'
);

INSERT INTO Credits VALUES(
    NULL,
    16,
    'Photography',
    'Catarina Freitas'
);

INSERT INTO Credits VALUES(
    NULL,
    16,
    'Print',
    'ESAD—Matosinhos'
);

INSERT INTO Image VALUES(NULL,16,1,'ESAD — ESCOLA SUPERIOR DE ARTES E DESIGN');
INSERT INTO Image VALUES(NULL,16,2,'ESAD — ESCOLA SUPERIOR DE ARTES E DESIGN');
INSERT INTO Image VALUES(NULL,16,3,'ESAD — ESCOLA SUPERIOR DE ARTES E DESIGN');
INSERT INTO Image VALUES(NULL,16,4,'ESAD — ESCOLA SUPERIOR DE ARTES E DESIGN');
INSERT INTO Image VALUES(NULL,16,5,'ESAD — ESCOLA SUPERIOR DE ARTES E DESIGN');
INSERT INTO Image VALUES(NULL,16,6,'ESAD — ESCOLA SUPERIOR DE ARTES E DESIGN');
