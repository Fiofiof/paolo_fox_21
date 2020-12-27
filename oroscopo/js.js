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
	    	quote:"xxx",
	    	name:"Non ti va bene? Vuoi un altro futuro?"
	    },
	    {
	    	quote:"Always do whatever's next.",
	    	name:"Non ti va bene? Vuoi un altro futuro?"
	    },
	    {
	    	quote:"Atheism is a non-prophet organization.",
	    	name:"Non ti va bene? Vuoi un altro futuro?"
	    },
	    {
	    	quote:"Hapiness is not something ready made. It comes from your own actions.",
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

