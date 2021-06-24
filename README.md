# int 4 frontend code team 14

Front end code (nextJS) voor een digitaal bordspel. Dit digitaal bordspel maakt gebruik van Arduino (https://github.com/cesardg/int4-team14-arduino). Als er een pion op een vakje komt, wordt er een toestenbord commando verstuurd naar de computer. Dit signaal wordt opgevangen voor Javascript. 

Er wordt gebruik gemaakt van websockets om de beide schermen realtime up to date houden en de acties door te geven van de spelers (het is een spel met 2 spelers, elk met twee aparte schermen + het fysieke digitale bordspel). 

We gebruiken strapi als node js backend (https://github.com/cesardg/int4-team14-backend) om alle gegevens op te slaan. 

Te bewonderen op https://hack-tic.vercel.app/

Ons fysiek spelbord niet bij? Niet meteen een probleem, u kunt de pion detecties simuleren door de volgende toetsenbord commando's in te geven:

Tik "RX1" in op uw toestenbord terwijl u in uw browser venster staat om op het start vak te staan (standaard begint het spel op dit vak).
"RX2" is een leeg vak
"RX3" is een actie vak
"RX5" is een random vak
"RX9" is het pikante foto vak
"RXH" is het spam mail vak
"RXA" is het wifi vak
"RXW" is het laatste lege vak (voor als u langs start wilt paseren)

Om het project lokaal te starten moet u eerst de backend servers opstarten (https://github.com/cesardg/int4-team14-backend). Daarna typt u yarn en yarn dev in de terminal om dit project lokaal te runnen (nextJS). 
