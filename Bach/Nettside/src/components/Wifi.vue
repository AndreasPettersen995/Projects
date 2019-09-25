<template>
    <div>
      <h1>Hvordan sikre WiFi nettverket ditt</h1>

      <h3> Hva er et WiFi nettverk? </h3>
      <p> Et WiFi nettverk er et trådløst nettverk og er oftest kjent med dette symbolet:  </p>
      <figure>
          <img height="100" width="100" src='../assets/images/SWDND.png'>


          </figure>
      <p> Det et WiFi nettverk gjør er å koble enheten din til et nettverk og sender mottar denne informasjonen gjennom elektromagnetiske bølger.  </p>
      <h3> Hvorfor sikre Wifi nettverket ditt?</h3>
      <p> Det kan være flere grunner til å sikre WiFi nettverket ditt. Det ene kan være for at du ikke ønsker at andre personer skal bruke nettverket ditt, bruke nettverket ditt for å gjøre ulovlige handlinger på nett. Eller for å unngå at de skal følge med på hva du gjør på nettverket ditt. </p>
      <h3> Hvordan sikre Wifi nettverket? </h3>
      <p> Det første å beste er å sette et passord på det trådløse nettverket ditt. Dette gjøres ved å logge inn på ruteren din. Hvis man har fått et firma til å installere ruteren for deg vil dette allerede ha vært gjort og det står som regel brukernavn og passord på denne ruteren. Hvis det ikke er et firma som har gjort dette for deg så må du først koble deg til ruteren. Dette kan gjøres ved å koble en internett kabel direkte fra din maskin til ruteren eller finne det tilhørende nettverket på nettverkslisten og koble seg på gjennom der. </p>
      <figure>
          <img height="350" width="200" src='../assets/images/SWDND1.png'>

              <figcaption>
                  <p>Denne listen kan være lik denne, med en navn som f.eks «ASUS 1212» hvis du benytter deg av Asus ruter</p>
              </figcaption>
          </figure>
      <p>Etter dette har blitt gjort skriver du inn 192.168.1.1 i søkefeltet på nettleseren din. Dette er da IP-adressen til ruteren. Denne IP-adressen kan variere så hvis 192.168.1.1 eller 192.168.2.1 ikke fungerer kan det hende at det står riktig adresse i manualen du fikk ruteren fra. Det er også mulig å skrive «ipconfig» i CMD/Ledetekst og finner den som heter Default gateway. Hvordan finne adressen blir vist under.   </p>
      <p>Etter du har gjort dette vil du få noe lignende vil du få et bilde lignende dette i nettleseren din:  </p>
      <figure>
          <img height="350" width="200" src='../assets/images/SWDND2.png'>

              <figcaption>
                  <p> Dette bildet viser hvordan oppsettet på min ruter fungerer. Dette kan variere på produsenten av ruteren</p>
              </figcaption>
          </figure>
      <p> Her skriver du inn Brukernavn og passordet på ruteren. Hva brukernavnet og passordet på din ruter er det firmaet som har laget den som har satt, men ofte kan det være: <br> Brukernavn: Admin <br> Passord: Root </p>
      <p> Eller andre variasjoner av denne som Brukernavn: Admin, Passord: Admin eller Root, Root. Etter vi har fått logget oss inn får vi opp dette:  </p>
      <figure>
          <img height="400" width="400" src='../assets/images/SWDND3.png'>

              <figcaption>
                  <p> Husk at eksemplene ble gjort på den ruteren jeg benyttet meg av når jeg skrev dette, men navnene og forkortelsene er mest sannsynlig like på den ruteren du vil benytte deg av</p>
              </figcaption>
      </figure>
      <p> Først anbefales det å gå inn på «Administration» og bytte passordet for å logge seg inn på ruteren din dette vil bli forklart under.  </p>
      <p> Som vi ser på høyre side står det System Status. Først kan vi velge Network Name (SSID) dette vil være navnet på nettverket ditt. Dette navnet har ikke noen særlig annen betydning enn hva du vil ønsker å kalle det eventuelt finne nettverket som. Under ser du at vi har «Authentication Method» Dette er krypteringen på nettverk det beste er å bruke den seneste versjonen. På min ruter er dette WPA2 kryptering (kryptering gås igjennom på en annen side) og «WPA Encryption» er også en del av denne krypteringen. Det siste alternativet før Apply er «WPA-PSK Key» dette er da der du setter passordet på det trådløse nettverket ditt. Her er det like viktig å ha et sikkert passord for å unngå at andre skal få tilgang som du ikke ønsker. Etter dette har blitt gjort trykker du Apply og du har da satt på et passord på ditt trådløse nettverk.  </p>
      <p>MERK: Som du kan se står det 2.4 GHz og 5 GHz dette betyr da at min ruter gir ut to forskjellige nettverk og det anbefales å sette passord på begge disse nettverkene.  </p>
      <h3> Hvordan finne IP adresse på Ruter med ledetekst? </h3>
      <p> Hvis du ønsker å finne IP adressen på ruteren din trykker du på: </p>
      <figure>
          <img height="100" width="100" src='../assets/images/SWDND4.png'>


      </figure>
      <p> Skriver så inn CMD eller ledetekst og får opp dette:  </p>
      <figure>
          <img height="400" width="400" src='../assets/images/SWDND5.png'>


      </figure>
      <p> Deretter åpner du denne og vil få opp et vindu lignende:  </p>
      <figure>
          <img height="350" width="200" src='../assets/images/SWDND6.png'>

      </figure>
      <p>Hvis du så skriver inn ipconfig og trykker enter så vil du få opp en del informasjon. Det du er på utkikk etter er denne delen:  </p>
      <figure>
          <img height="100" width="100" src='../assets/images/SWDND7.png'>

      </figure>
      <p>Default Gateway er da den du var på utkikk etter og du skriver så inn dette i søkefeltet på din nettleser.  </p>
      <h3> Endre administrator brukernavn og passord </h3>
      <p> Når vi skal endre administrator brukernavn og passord trykker vi oss inn på "Administration" deretter "System" dette varier som sagt fra produsent til produsent. Etter dette har blitt gjort vil vi få opp bildet under og det er bare å skrive inn ønsket brukernavn og passord. Dette kan være greit å skrive ned et sted ettersom at hvis du glemmer dette må du du sette ruteren tilbake til fabrikkinstillinger og sette opp alt på nytt igjen.  </p>
      </figure>
      <p>Hvis du så skriver inn ipconfig og trykker enter så vil du få opp en del informasjon. Det du er på utkikk etter er denne delen:  </p>
      <figure>
          <img height="400" width="400" src='../assets/images/SWDND8.png'>

      </figure>
      <p> Hvis det skulle ha seg sånn at du må glemmer det du setter som brukernavn og passord på administrator må du holde inne en knapp på ruteren i 10 sekunder. Denne knappen pleier som regel å være i et lite hull </p>
  </div>
</template>
