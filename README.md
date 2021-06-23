# int 4 frontend code team 14

Front end code (nextJS) voor een digitaal bordspel. Dit digitaal bordspel maakt gebruik van Arduino (https://github.com/cesardg/int4-team14-arduino). Als er een pion op een vakje komt wordt er een toestenbord commando verstuud naar de computer. Dit signaal wordt opgevangen voor javascript. 

Er wordt gebruik gemaakt van websockets om de beide schemren realtime up to date houden (het is een spel met 2 spelers, met elk twee aparte schermen). 

We gebruiken strapi als node js backend (https://github.com/cesardg/int4-team14-backend) om alle gegevens op te slaan. 

Te bewonderen op https://hack-tic.vercel.app/