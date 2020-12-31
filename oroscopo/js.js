$(document).ready(function(){
		var quoteSource=[
		{
			quote: "Ci sarà uno scambio di identità e diventerai Partner KPMG. Te la godrai alla grande, prima della bancarotta fraudolenta. Peccato!",
			name:"Non ti va bene? Vuoi un altro futuro?"
	    },
	    {
	    	quote:"Mentre stai camminando al Duomo, canticchiando, ti noterà Mara Maionchi e diventerai famoso/a.",
	    	name:"Non ti va bene? Vuoi un altro futuro?"
	    },
	    {
	    	quote:"Mi spiace, ma anche il 2021 sarà un po' una merda. Vabeh dai, ce l'hai fatta nel 2020, ce la farai anche ora.",
	    	name:"Non ti va bene? Vuoi un altro futuro?"
	    },
	    {
	    	quote:"Troverai 10 euro per terra. Non è un granchè, ma io mi accontenterei.",
	    	name:"Non ti va bene? Vuoi un altro futuro?"
	    },
	    {
	    	quote:"Ti licenzierai per fare un viaggio avventura in solitaria in Nuova Zelanda. Sbaglierai aereo, volerai in Australia e troverai la tua strada come stylist di canguri.",
	    	name:"Non ti va bene? Vuoi un altro futuro?"
	    },
	    {
	    	quote:"Ti chiuderanno per sbaglio nel Planetario, una notte, e lì scoprirai i segreti dell'universo. Una volta uscito/a, fonderai una nuova religione, con te unico/a messia.",
	    	name:"Non ti va bene? Vuoi un altro futuro?"
	    },
	    {
	    	quote:"Accarezzerai molti gatti. Interpretala un po' come ti pare.",
	    	name:"Non ti va bene? Vuoi un altro futuro?"
	    },
	    {
	    	quote:"Scoprirai la tua nuova vocazione: il canto lirico. Ti cacceranno via di casa perchè i vicini non ti sopportano più, certo, ma adesso piazza Duomo ha un nuovo idolo.",
	    	name:"Non ti va bene? Vuoi un altro futuro?"
	    },
	    {
	    	quote:"Inizia a correre.",
	    	name:"Non ti va bene? Vuoi un altro futuro?"
	    },
	    {
	    	quote:"Continuerai a cliccare sul tuo segno finchè non uscirà un futuro che ti piaccia. Whew. Stai un po messo/a male.",
	    	name:"Non ti va bene? Vuoi un altro futuro?"
	    },
	    {
	    	quote:"Mentre stai camminando verso l'Arco della Pace, sarai inglobato da un gruppo no-vax 5G anti-immigrati. A fine anno sarai presidente della Lega.",
	    	name:"Non ti va bene? Vuoi un altro futuro?"
	    },
	    {
	    	quote:"Finalmente capirai tutto ciò che non va nella tua vita e lo sistemerai. Sarà un bell'anno. Complimenti.",
	    	name:"Non ti va bene? Vuoi un altro futuro?"
	    },
	    {
	    	quote:"Una sera, al Panika, in preda ad una sbroza cosmica, suggerirai di aggiungere del cioccolato fondente al Toast classico. Barbieri, che era lì a farsi una birra, ti noterà e ti eleggerà vincitore di MasterChef 11.",
	    	name:"Non ti va bene? Vuoi un altro futuro?"
	    },
	    {
	    	quote:"La Juve NON vincerà lo scudetto. A me basta. A te no?",
	    	name:"Non ti va bene? Vuoi un altro futuro?"
	    },
	    {
	    	quote:"Troverai la felicità nelle piccole cose. Sarà tutto piccolo, quest'anno: il tuo conto in banca, la tua nuova stanza, le tue speranze, sbaglierai a far la lavatrice, ed i vestiti saran piccoli pure loro...beh, anche i capelli non se la passeranno bene. Ma c'è della felicità, te lo giuro.",
	    	name:"Non ti va bene? Vuoi un altro futuro?"
	    },
	    {
	    	quote:"Giocherai a morra cinese con un ubriaco, che si scoprirà essere Satya Nadella. Adesso sei il propretario/a della Microsoft.",
	    	name:"Non ti va bene? Vuoi un altro futuro?"
	    },
	    {
	    	quote:"Non so cosa tu combinerai nel 2021, ma ti ritroveremo accanto a Mattarella nel discorso di fine anno.",
	    	name:"Non ti va bene? Vuoi un altro futuro?"
	    },
	    {
	    	quote:"Farai una presentazione talmente bella che sarà esposta al Louvre. Sia formato PDF che PPT.",
	    	name:"Non ti va bene? Vuoi un altro futuro?"
	    },
	    {
	    	quote:"Inizierai ad inviare curriculum a chiunque su Linkedin, a qualsiasi HR, finchè non lo manderai a te stesso, ti assumerai ed il cerchio della vita sarà completo.",
	    	name:"Non ti va bene? Vuoi un altro futuro?"
	    },
	    {
	    	quote:"Ti farai una foto con la fotocamera frontale per sbaglio e, sempre per sbaglio, la posterai su instagram. Sarai il nuovo meme del 2021.",
	    	name:"Non ti va bene? Vuoi un altro futuro?"
	    },
	    {
	    	quote:"Deciderai di adottare un bradipo. Verrò sempre a casa tua per coccolarlo. Si chiamerà Gilberto.",
	    	name:"Non ti va bene? Vuoi un altro futuro?"
	    },
	    {
	    	quote:"Ti accrediteranno per sbaglio un milione di euro sul conto. Stranamente, nessuno noterà l'errore e tu potrai vivere felicemente da mantenuto.",
	    	name:"Non ti va bene? Vuoi un altro futuro?"
	    },
	    {
	    	quote:"Riuscirai a non perdere nessun calzino quest'anno. Io, onestamente, ti ammiro.",
	    	name:"Non ti va bene? Vuoi un altro futuro?"
	    },
	    {
	    	quote:"Durante una corsetta al Sempione ti distrarrai un po' troppo e ti ritroverai in un bosco incantato. Lì inizierà la tua seconda vita come spacciatore di scivolizia incantata.",
	    	name:"Non ti va bene? Vuoi un altro futuro?"
	    },
		{
	    	quote:"Ti dimenticherai il microfono acceso durante una call...proprio in un giorno in cui ti eri svegliato particolarmente ironico. Per fortuna i clienti son tutti presi bene e ridono alle tue battute. Il manager un po' meno. Ti licenziano.",
	    	name:"Non ti va bene? Vuoi un altro futuro?"
	    },
		{
	    	quote:"Ti dimenticherai il microfono acceso durante una call...proprio in un giorno in cui ti eri svegliato particolarmente ironico. Per fortuna i clienti son tutti presi bene e ridono alle tue battute. Anche il manager. Da quel giorno ti chiederanno sempre di aprire i meeting con un piccolo cabaret.",
	    	name:"Non ti va bene? Vuoi un altro futuro?"
	    },
		{
	    	quote:"Pogherai troppo forte al tuo prossimo concerto e darai una capocciata alla persone davanti a te. Trauma cranico per entrambi, ma durante le ore in ospedale vi innamorate. E' una storia carina da raccontare ai posteri, no?",
	    	name:"Non ti va bene? Vuoi un altro futuro?"
	    },
		{
	    	quote:"Diventerai l'eroe di noialtri ed andrai a zappare la terra. Ti verremo a trovare quasi una volta al mese, con gli occhi sognanti e le braccia piene di pomodori e zucchine. Grandissimo/a.",
	    	name:"Non ti va bene? Vuoi un altro futuro?"
	    },
		{
	    	quote:"Ti fulminerai cambiando una lampadina. Lo shock ti renderà superintelligente e vincerai il nobel per la fisica. Ricordati di me, ok?",
	    	name:"Non ti va bene? Vuoi un altro futuro?"
	    },
		{
	    	quote:"Ti pagheranno degli straordinari. Già, lo so, roba da non crederci.",
	    	name:"Non ti va bene? Vuoi un altro futuro?"
	    },
		{
	    	quote:"Troverai un typo in un libro e chiamerai la casa editrice per farlo notare. Ti manderanno a cagare. No, davvero, che ti aspettavi?",
	    	name:"Non ti va bene? Vuoi un altro futuro?"
	    },
		{
	    	quote:"Una notte buia e di tempesta, apparirà un fantasma nella tua stanza. Diventerete migliori amici. Non potrà bere birre con te, ma di sicuro non dirà di no ad un paio di tiri.",
	    	name:"Non ti va bene? Vuoi un altro futuro?"
	    },
		{
	    	quote:"Taylor Swift scriverà una canzone su di te. Fortunello/a. (#giustiziapertaylor)",
	    	name:"Non ti va bene? Vuoi un altro futuro?"
	    },
		{
	    	quote:"Continuerai a fare acquisti online come un/a folle, e sarai ben preso sommerso da scatoloni. Felice, ma sommerso. Faranno un programma di Real Time su di te.",
	    	name:"Non ti va bene? Vuoi un altro futuro?"
	    },
		{
	    	quote:"Inventerai la macchina del tempo e deciderai di tornare indietro nel passato per cambiare le cose (cose personali che non sto qui a dire, insomma). Il punto è che l'idea ti è venuta dopo aver letto questo pronostico. Abbiamo creato un bel paradosso temporale eh?",
	    	name:"Non ti va bene? Vuoi un altro futuro?"
	    },
		{
	    	quote:"Leggerai ad alta voce un codice incomprensibile scritto dal cliente. Evocherai un demone e diventerete grandi amici. Peccato che il vostro rapporto si distruggerà quando sarà assunto come stagista. (Questo non glielo dovevi fare eh.)",
	    	name:"Non ti va bene? Vuoi un altro futuro?"
	    },
		{
	    	quote:"Stai bevendo dal 31 dicembre, se non dal 24. E non hai intenzione di smettere. Fidati, non smetterai.",
	    	name:"Non ti va bene? Vuoi un altro futuro?"
	    },
		{
	    	quote:"Durante la prima serata del 2021 ti prenderai una sbronza così forte che il giorno dopo ti sveglierai in Valle d'Aosta. Beh si insomma, non è una meta esotica...però dai. Ti sei divertito/a lo stesso.",
	    	name:"Non ti va bene? Vuoi un altro futuro?"
	    },
		{
	    	quote:"Pensa ad un futuro, pure uno che ti piace. Fatto? Ok. Si avvererà. Scusa, davvero, ma sto finendo le idee.",
	    	name:"Non ti va bene? Vuoi un altro futuro?"
	    },
		{
	    	quote:" Ciao, questo è l'ultimo futuro che ho scritto, quante probabilità c'erano che lo beccassi?? 1/40. Non bassissime effettivamente. Vabeh, dato che è un po' speciale, ti accadrà tutto quello che vorrai, hai la mia benedizione.",
	    	name:"Non ti va bene? Vuoi un altro futuro?"
	    }
	];
		

		$('#quoteButton1, #quoteButton2,#quoteButton3, #quoteButton4,#quoteButton5,#quoteButton6, #quoteButton7,#quoteButton8,#quoteButton9,#quoteButton10,#quoteButton11,#quoteButton12').click(function(evt){
			//define the containers of the info we target
			var quote = $('#quoteContainer p').text();
			var quoteGenius = $('#quoteGenius').text();
			//prevent browser's default action
			evt.preventDefault();
			//getting a new random number to attach to a quote and setting a limit
			var sourceLength = quoteSource.length;
			var randomNumber= Math.floor(Math.random()*sourceLength);
			//set a new quote
			for(i=0;i<=sourceLength;i+=1){
			var newQuoteText = quoteSource[randomNumber].quote;
			var newQuoteGenius = quoteSource[randomNumber].name;
			//console.log(newQuoteText,newQuoteGenius);
      var timeAnimation = 500;
      var quoteContainer = $('#quoteContainer');
      //fade out animation with callback
      quoteContainer.fadeOut(timeAnimation, function(){
        quoteContainer.html('');
				quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="quoteGenius">'+'-								'+newQuoteGenius+'</p>');
        //fadein animation.
        quoteContainer.fadeIn(timeAnimation);
      });  
			
			break;
		};//end for loop
	
	});//end quoteButton function
		
		
});//end document ready

