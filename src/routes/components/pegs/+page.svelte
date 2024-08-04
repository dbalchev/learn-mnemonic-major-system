<script lang='ts'>
    interface Peg {
        word: string
        digits: string
        pos: 'noun' | 'verb' | 'adjective'
    }
    console.log(1 + 1)
    let entries: Peg[] = []
    const appendWords = (startIndex: number, nDigits: number, pos: 'noun' | 'verb' | 'adjective', words: string) => {
        words.split('\t').forEach((word, index) => {
            entries.push({
                word,
                digits: (startIndex + index).toString().padStart(nDigits, '0'),
                pos,
            })
        })
    }
    appendWords(0, 1, 'noun', "hose	hat	hen	home	arrow	whale	shoe	cow	hoof	pie")
    appendWords(0, 1, 'verb', "sew	hate	know	aim	row	heal	chew	hook	view	buy")
    appendWords(0, 1, 'adjective', "easy	hot	new	yummy	hairy	oily	itchy	gay	heavy	happy")
    appendWords(0, 2, 'noun', "sauce	seed	sun	sumo	sierra	soil	sewage	sky	sofa	soap")
    appendWords(0, 2, 'verb', "assess	swat	assign	assume	sorrow	sell	switch	soak	save	sob")
    appendWords(0, 2, 'adjective', "sissy	sad	snowy	awesome	sorry	slow	swishy	sick	savvy	sappy")
    appendWords(10, 2, 'noun', "daisy	tattoo	tuna	dome	diary	tail	dish	dog	dove	tuba")
    appendWords(10, 2, 'verb', "tease	edit	widen	time	draw	tell	teach	take	defy	type")
    appendWords(10, 2, 'adjective', "dizzy	tight	wooden	tame	dry	tall	whitish	thick	deaf	deep")
    appendWords(20, 2, 'noun', "nose	net	onion	enemy	winery	nail	nacho	neck	knife	honeybee")
    appendWords(20, 2, 'verb', "ionize	unite	nanny	name	honour	inhale	enjoy	knock	envy	nab")
    appendWords(20, 2, 'adjective', "noisy	neat	neon	numb	narrow	annual	nudgy	naggy	naïve	wannabe")
    appendWords(30, 2, 'noun', "mouse	meadow	moon	mummy	emery	mole	match	mug	movie	map")
    appendWords(30, 2, 'verb', "amuse	meet	mine	mime	marry	mail	mash	mock	move	mop")
    appendWords(30, 2, 'adjective', "messy	mute	mean	mum[c]	merry	male	mushy	mucky	mauve	wimpy")
    appendWords(40, 2, 'noun', "rice	road	rain	rum	aurora	railway	roach	rag	roof	rope")
    appendWords(40, 2, 'verb', "erase	read	ruin	ram	rear	rule	reach	rake	arrive	wrap")
    appendWords(40, 2, 'adjective', "rosy	ready	runny	haram	rare	royal	rich	rocky	rough	ripe")
    appendWords(50, 2, 'noun', "louse	lady	lion	lime	lorry	lily	leech	leg	lava	lip")
    appendWords(50, 2, 'verb', "lose	let	align	loom	lure	lull	latch	lick	love	help")
    appendWords(50, 2, 'adjective', "lazy	elite	alien	lame	leery	loyal	lush	lucky	leafy	loopy")
    appendWords(60, 2, 'noun', "cheese	cheetah	chin	gem	shrew	chilli	cha-cha	chick	chef	jeep")
    appendWords(60, 2, 'verb', "chase	cheat	chain	jam	jury	chill	judge	check	achieve	chop")
    appendWords(60, 2, 'adjective', "choosy	chatty	shiny	sham	cherry	jolly	Jewish	shaky	chief	cheap")
    appendWords(70, 2, 'noun', "goose	cat	coin	game	crow	clay	cage	cake	cave	cube")
    appendWords(70, 2, 'verb', "kiss	quote	weaken	comb	carry	kill	coach	cook	give	copy")
    appendWords(70, 2, 'adjective', "cosy	good	keen	gummy	grey	cool	catchy	quick	goofy	agape")
    appendWords(80, 2, 'noun', "vase	video	fan	ovum	fairy	fool	veggie	fig	fife	vibe")
    appendWords(80, 2, 'verb', "fuse	fight	fine	fume	fry	fly	fetch	fake	viva	fob")
    appendWords(80, 2, 'adjective', "fussy	fat	funny	foamy	furry	foul	fishy	foggy	fave	fab")
    appendWords(90, 2, 'noun', "boss	bead	pony	puma	berry	bell	pouch	bike	beef	pipe")
    appendWords(90, 2, 'verb', "oppose	bite	ban	bomb	bury	peel	patch	poke	pave	pop")
    appendWords(90, 2, 'adjective', "busy	bad	bony	balmy	pro	blue	bushy	back	puffy	baby")
</script>

{entries.length}
<pre>
    {JSON.stringify(entries, null, "    ")}
</pre>