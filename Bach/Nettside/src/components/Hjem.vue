<template>
  <div>
  	<center><h1>Velkommen til opplæring i databruk</h1></center>

  	<div id="padded_content">


	    <h2>Hva går dette kurset ut på?</h2>
	    <p>Dette er et kurs for deg som vil være forberedt på teknologiske utfordringene du vil møte i hverdagen. I Norge i dag er teknologien på vei opp med stormskritt. For eksempel er kontantbetaling på vei ut og selv kortbetaling i kassa er ikke lenger blant de nyeste teknologiene. Her gjelder det å holde seg oppdatert på hva vi har i vente, slik at vi kan benytte oss av de tjenestene vi er avhengige av i hverdagen, uten at man blir hengende etter. Kurset består av tekst, bilder men også videoer som kan illustrere for deg hvordan ting fungerer.</p>

	    <h2>Hva gjør jeg nå?</h2>
	    <p>Vi anbefaler deg å starte på det enkleste nivået. Hvis det blir for enkelt for deg kan du gå videre til et annet tema. Temaene henger ikke i rekkefølge, så du kan trykke deg inn på hvilket som helst tema. Vi har satt opp dette kurset slik at du kan velge vanskelighetsgrad fra menyen til høyre. Den første heter "Start" og inneholder temaer vi mener alle burde vite om, "Middels nivå" tar opp litt mer kompliserte temaer for deg som vil vite mer. "Ekspert nivå" er hovedsakelig ment for de med spesielt god teknisk forståelse som ønsker å lære om datasikkerhet på et høyere nivå.</p>

	    <h2>Hvem har laget dette kurset?</h2>
	    <p>Dette kurset er et bachelorprosjekt laget av 3 IT studenter ved Høgskolen i Østfold i oppdrag for Indre Østfold Fengsel. Vi har som mål at flest mulig innsatte i norske fengsler skal kunne føle seg tryggere på teknologien som venter i hverdagen etter endt soning. Teknologien vi benytter i hverdagen endrer seg hele tiden, og vi vet at det er vanskelig å holde seg oppdatert på hva som skjer. Vi håper at dette kurset gir deg en grei introduksjon til teknologiverdenen vi befinner oss i. </p>
      <h2> Hvorfor burde jeg benytte meg av dette kurset?</h2>
      <p> Dette kurset hjelper deg til å få bedre kunnskap om hvordan du kan være trygg på internett. Det gir deg en forklaring på hvordan du kan beskytte deg mot diverse forsøk på svindel og hva konsekvensene kan være dersom du skulle være så uheldig å bli utsatt for noen av disse. Det er flere millioner svindelforsøk daglig som skjer og vi ønsker at du skal være mest mulig klar over de enkelte farene som kan oppstå slik at du kan unngå dem hvis det skulle være et forsøk på svindel mot deg. Du vil også få en innføring på nye teknologier i dette kurset som kanskje du ikke er vandt med fra før eller har hatt et ønske om å lære deg. </p>


	    <div class="w3-panel w3-pale-green w3-bottombar w3-border-green w3-border">
  			<p>Hvis du vil tilbake til denne siden senere så kan du trykke på "Tilbake til forsiden"-knappen som du finner øverst på denne siden.</p>
  		</div>

	    <div id="intro_footer">Trykk <router-link :to="{ name: 'Passord' }">her</router-link> for å sette igang</div>
	</div>
  </div>
</template>

<style>
	#padded_content {
		padding-left: 150px;
		padding-right: 150px;
		opacity: 0.8;

		-webkit-transition: padding 150ms, margin 150ms; /* Safari */
		transition: padding 150ms, margin 150ms;
	}

	#intro_footer {
		margin-top: 30px;
		font-size: 150%;
		text-align: center;
	}

	/* Resize Homescreen */
	@media only screen and (max-width : 1200px) {
		#padded_content { padding: 0; }
	}
</style>
