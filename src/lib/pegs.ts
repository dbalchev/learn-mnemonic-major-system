interface Peg {
	word: string;
	digits: string;
	pos: 'noun' | 'verb' | 'adjective';
}
export const PEGS: Peg[] = [
	{
		word: 'hose',
		digits: '0',
		pos: 'noun'
	},
	{
		word: 'hat',
		digits: '1',
		pos: 'noun'
	},
	{
		word: 'hen',
		digits: '2',
		pos: 'noun'
	},
	{
		word: 'home',
		digits: '3',
		pos: 'noun'
	},
	{
		word: 'arrow',
		digits: '4',
		pos: 'noun'
	},
	{
		word: 'whale',
		digits: '5',
		pos: 'noun'
	},
	{
		word: 'shoe',
		digits: '6',
		pos: 'noun'
	},
	{
		word: 'cow',
		digits: '7',
		pos: 'noun'
	},
	{
		word: 'hoof',
		digits: '8',
		pos: 'noun'
	},
	{
		word: 'pie',
		digits: '9',
		pos: 'noun'
	},
	{
		word: 'sew',
		digits: '0',
		pos: 'verb'
	},
	{
		word: 'hate',
		digits: '1',
		pos: 'verb'
	},
	{
		word: 'know',
		digits: '2',
		pos: 'verb'
	},
	{
		word: 'aim',
		digits: '3',
		pos: 'verb'
	},
	{
		word: 'row',
		digits: '4',
		pos: 'verb'
	},
	{
		word: 'heal',
		digits: '5',
		pos: 'verb'
	},
	{
		word: 'chew',
		digits: '6',
		pos: 'verb'
	},
	{
		word: 'hook',
		digits: '7',
		pos: 'verb'
	},
	{
		word: 'view',
		digits: '8',
		pos: 'verb'
	},
	{
		word: 'buy',
		digits: '9',
		pos: 'verb'
	},
	{
		word: 'easy',
		digits: '0',
		pos: 'adjective'
	},
	{
		word: 'hot',
		digits: '1',
		pos: 'adjective'
	},
	{
		word: 'new',
		digits: '2',
		pos: 'adjective'
	},
	{
		word: 'yummy',
		digits: '3',
		pos: 'adjective'
	},
	{
		word: 'hairy',
		digits: '4',
		pos: 'adjective'
	},
	{
		word: 'oily',
		digits: '5',
		pos: 'adjective'
	},
	{
		word: 'itchy',
		digits: '6',
		pos: 'adjective'
	},
	{
		word: 'gay',
		digits: '7',
		pos: 'adjective'
	},
	{
		word: 'heavy',
		digits: '8',
		pos: 'adjective'
	},
	{
		word: 'happy',
		digits: '9',
		pos: 'adjective'
	},
	{
		word: 'sauce',
		digits: '00',
		pos: 'noun'
	},
	{
		word: 'seed',
		digits: '01',
		pos: 'noun'
	},
	{
		word: 'sun',
		digits: '02',
		pos: 'noun'
	},
	{
		word: 'sumo',
		digits: '03',
		pos: 'noun'
	},
	{
		word: 'sierra',
		digits: '04',
		pos: 'noun'
	},
	{
		word: 'soil',
		digits: '05',
		pos: 'noun'
	},
	{
		word: 'sewage',
		digits: '06',
		pos: 'noun'
	},
	{
		word: 'sky',
		digits: '07',
		pos: 'noun'
	},
	{
		word: 'sofa',
		digits: '08',
		pos: 'noun'
	},
	{
		word: 'soap',
		digits: '09',
		pos: 'noun'
	},
	{
		word: 'assess',
		digits: '00',
		pos: 'verb'
	},
	{
		word: 'swat',
		digits: '01',
		pos: 'verb'
	},
	{
		word: 'assign',
		digits: '02',
		pos: 'verb'
	},
	{
		word: 'assume',
		digits: '03',
		pos: 'verb'
	},
	{
		word: 'sorrow',
		digits: '04',
		pos: 'verb'
	},
	{
		word: 'sell',
		digits: '05',
		pos: 'verb'
	},
	{
		word: 'switch',
		digits: '06',
		pos: 'verb'
	},
	{
		word: 'soak',
		digits: '07',
		pos: 'verb'
	},
	{
		word: 'save',
		digits: '08',
		pos: 'verb'
	},
	{
		word: 'sob',
		digits: '09',
		pos: 'verb'
	},
	{
		word: 'sissy',
		digits: '00',
		pos: 'adjective'
	},
	{
		word: 'sad',
		digits: '01',
		pos: 'adjective'
	},
	{
		word: 'snowy',
		digits: '02',
		pos: 'adjective'
	},
	{
		word: 'awesome',
		digits: '03',
		pos: 'adjective'
	},
	{
		word: 'sorry',
		digits: '04',
		pos: 'adjective'
	},
	{
		word: 'slow',
		digits: '05',
		pos: 'adjective'
	},
	{
		word: 'swishy',
		digits: '06',
		pos: 'adjective'
	},
	{
		word: 'sick',
		digits: '07',
		pos: 'adjective'
	},
	{
		word: 'savvy',
		digits: '08',
		pos: 'adjective'
	},
	{
		word: 'sappy',
		digits: '09',
		pos: 'adjective'
	},
	{
		word: 'daisy',
		digits: '10',
		pos: 'noun'
	},
	{
		word: 'tattoo',
		digits: '11',
		pos: 'noun'
	},
	{
		word: 'tuna',
		digits: '12',
		pos: 'noun'
	},
	{
		word: 'dome',
		digits: '13',
		pos: 'noun'
	},
	{
		word: 'diary',
		digits: '14',
		pos: 'noun'
	},
	{
		word: 'tail',
		digits: '15',
		pos: 'noun'
	},
	{
		word: 'dish',
		digits: '16',
		pos: 'noun'
	},
	{
		word: 'dog',
		digits: '17',
		pos: 'noun'
	},
	{
		word: 'dove',
		digits: '18',
		pos: 'noun'
	},
	{
		word: 'tuba',
		digits: '19',
		pos: 'noun'
	},
	{
		word: 'tease',
		digits: '10',
		pos: 'verb'
	},
	{
		word: 'edit',
		digits: '11',
		pos: 'verb'
	},
	{
		word: 'widen',
		digits: '12',
		pos: 'verb'
	},
	{
		word: 'time',
		digits: '13',
		pos: 'verb'
	},
	{
		word: 'draw',
		digits: '14',
		pos: 'verb'
	},
	{
		word: 'tell',
		digits: '15',
		pos: 'verb'
	},
	{
		word: 'teach',
		digits: '16',
		pos: 'verb'
	},
	{
		word: 'take',
		digits: '17',
		pos: 'verb'
	},
	{
		word: 'defy',
		digits: '18',
		pos: 'verb'
	},
	{
		word: 'type',
		digits: '19',
		pos: 'verb'
	},
	{
		word: 'dizzy',
		digits: '10',
		pos: 'adjective'
	},
	{
		word: 'tight',
		digits: '11',
		pos: 'adjective'
	},
	{
		word: 'wooden',
		digits: '12',
		pos: 'adjective'
	},
	{
		word: 'tame',
		digits: '13',
		pos: 'adjective'
	},
	{
		word: 'dry',
		digits: '14',
		pos: 'adjective'
	},
	{
		word: 'tall',
		digits: '15',
		pos: 'adjective'
	},
	{
		word: 'whitish',
		digits: '16',
		pos: 'adjective'
	},
	{
		word: 'thick',
		digits: '17',
		pos: 'adjective'
	},
	{
		word: 'deaf',
		digits: '18',
		pos: 'adjective'
	},
	{
		word: 'deep',
		digits: '19',
		pos: 'adjective'
	},
	{
		word: 'nose',
		digits: '20',
		pos: 'noun'
	},
	{
		word: 'net',
		digits: '21',
		pos: 'noun'
	},
	{
		word: 'onion',
		digits: '22',
		pos: 'noun'
	},
	{
		word: 'enemy',
		digits: '23',
		pos: 'noun'
	},
	{
		word: 'winery',
		digits: '24',
		pos: 'noun'
	},
	{
		word: 'nail',
		digits: '25',
		pos: 'noun'
	},
	{
		word: 'nacho',
		digits: '26',
		pos: 'noun'
	},
	{
		word: 'neck',
		digits: '27',
		pos: 'noun'
	},
	{
		word: 'knife',
		digits: '28',
		pos: 'noun'
	},
	{
		word: 'honeybee',
		digits: '29',
		pos: 'noun'
	},
	{
		word: 'ionize',
		digits: '20',
		pos: 'verb'
	},
	{
		word: 'unite',
		digits: '21',
		pos: 'verb'
	},
	{
		word: 'nanny',
		digits: '22',
		pos: 'verb'
	},
	{
		word: 'name',
		digits: '23',
		pos: 'verb'
	},
	{
		word: 'honour',
		digits: '24',
		pos: 'verb'
	},
	{
		word: 'inhale',
		digits: '25',
		pos: 'verb'
	},
	{
		word: 'enjoy',
		digits: '26',
		pos: 'verb'
	},
	{
		word: 'knock',
		digits: '27',
		pos: 'verb'
	},
	{
		word: 'envy',
		digits: '28',
		pos: 'verb'
	},
	{
		word: 'nab',
		digits: '29',
		pos: 'verb'
	},
	{
		word: 'noisy',
		digits: '20',
		pos: 'adjective'
	},
	{
		word: 'neat',
		digits: '21',
		pos: 'adjective'
	},
	{
		word: 'neon',
		digits: '22',
		pos: 'adjective'
	},
	{
		word: 'numb',
		digits: '23',
		pos: 'adjective'
	},
	{
		word: 'narrow',
		digits: '24',
		pos: 'adjective'
	},
	{
		word: 'annual',
		digits: '25',
		pos: 'adjective'
	},
	{
		word: 'nudgy',
		digits: '26',
		pos: 'adjective'
	},
	{
		word: 'naggy',
		digits: '27',
		pos: 'adjective'
	},
	{
		word: 'naïve',
		digits: '28',
		pos: 'adjective'
	},
	{
		word: 'wannabe',
		digits: '29',
		pos: 'adjective'
	},
	{
		word: 'mouse',
		digits: '30',
		pos: 'noun'
	},
	{
		word: 'meadow',
		digits: '31',
		pos: 'noun'
	},
	{
		word: 'moon',
		digits: '32',
		pos: 'noun'
	},
	{
		word: 'mummy',
		digits: '33',
		pos: 'noun'
	},
	{
		word: 'emery',
		digits: '34',
		pos: 'noun'
	},
	{
		word: 'mole',
		digits: '35',
		pos: 'noun'
	},
	{
		word: 'match',
		digits: '36',
		pos: 'noun'
	},
	{
		word: 'mug',
		digits: '37',
		pos: 'noun'
	},
	{
		word: 'movie',
		digits: '38',
		pos: 'noun'
	},
	{
		word: 'map',
		digits: '39',
		pos: 'noun'
	},
	{
		word: 'amuse',
		digits: '30',
		pos: 'verb'
	},
	{
		word: 'meet',
		digits: '31',
		pos: 'verb'
	},
	{
		word: 'mine',
		digits: '32',
		pos: 'verb'
	},
	{
		word: 'mime',
		digits: '33',
		pos: 'verb'
	},
	{
		word: 'marry',
		digits: '34',
		pos: 'verb'
	},
	{
		word: 'mail',
		digits: '35',
		pos: 'verb'
	},
	{
		word: 'mash',
		digits: '36',
		pos: 'verb'
	},
	{
		word: 'mock',
		digits: '37',
		pos: 'verb'
	},
	{
		word: 'move',
		digits: '38',
		pos: 'verb'
	},
	{
		word: 'mop',
		digits: '39',
		pos: 'verb'
	},
	{
		word: 'messy',
		digits: '30',
		pos: 'adjective'
	},
	{
		word: 'mute',
		digits: '31',
		pos: 'adjective'
	},
	{
		word: 'mean',
		digits: '32',
		pos: 'adjective'
	},
	{
		word: 'mum[c]',
		digits: '33',
		pos: 'adjective'
	},
	{
		word: 'merry',
		digits: '34',
		pos: 'adjective'
	},
	{
		word: 'male',
		digits: '35',
		pos: 'adjective'
	},
	{
		word: 'mushy',
		digits: '36',
		pos: 'adjective'
	},
	{
		word: 'mucky',
		digits: '37',
		pos: 'adjective'
	},
	{
		word: 'mauve',
		digits: '38',
		pos: 'adjective'
	},
	{
		word: 'wimpy',
		digits: '39',
		pos: 'adjective'
	},
	{
		word: 'rice',
		digits: '40',
		pos: 'noun'
	},
	{
		word: 'road',
		digits: '41',
		pos: 'noun'
	},
	{
		word: 'rain',
		digits: '42',
		pos: 'noun'
	},
	{
		word: 'rum',
		digits: '43',
		pos: 'noun'
	},
	{
		word: 'aurora',
		digits: '44',
		pos: 'noun'
	},
	{
		word: 'railway',
		digits: '45',
		pos: 'noun'
	},
	{
		word: 'roach',
		digits: '46',
		pos: 'noun'
	},
	{
		word: 'rag',
		digits: '47',
		pos: 'noun'
	},
	{
		word: 'roof',
		digits: '48',
		pos: 'noun'
	},
	{
		word: 'rope',
		digits: '49',
		pos: 'noun'
	},
	{
		word: 'erase',
		digits: '40',
		pos: 'verb'
	},
	{
		word: 'read',
		digits: '41',
		pos: 'verb'
	},
	{
		word: 'ruin',
		digits: '42',
		pos: 'verb'
	},
	{
		word: 'ram',
		digits: '43',
		pos: 'verb'
	},
	{
		word: 'rear',
		digits: '44',
		pos: 'verb'
	},
	{
		word: 'rule',
		digits: '45',
		pos: 'verb'
	},
	{
		word: 'reach',
		digits: '46',
		pos: 'verb'
	},
	{
		word: 'rake',
		digits: '47',
		pos: 'verb'
	},
	{
		word: 'arrive',
		digits: '48',
		pos: 'verb'
	},
	{
		word: 'wrap',
		digits: '49',
		pos: 'verb'
	},
	{
		word: 'rosy',
		digits: '40',
		pos: 'adjective'
	},
	{
		word: 'ready',
		digits: '41',
		pos: 'adjective'
	},
	{
		word: 'runny',
		digits: '42',
		pos: 'adjective'
	},
	{
		word: 'haram',
		digits: '43',
		pos: 'adjective'
	},
	{
		word: 'rare',
		digits: '44',
		pos: 'adjective'
	},
	{
		word: 'royal',
		digits: '45',
		pos: 'adjective'
	},
	{
		word: 'rich',
		digits: '46',
		pos: 'adjective'
	},
	{
		word: 'rocky',
		digits: '47',
		pos: 'adjective'
	},
	{
		word: 'rough',
		digits: '48',
		pos: 'adjective'
	},
	{
		word: 'ripe',
		digits: '49',
		pos: 'adjective'
	},
	{
		word: 'louse',
		digits: '50',
		pos: 'noun'
	},
	{
		word: 'lady',
		digits: '51',
		pos: 'noun'
	},
	{
		word: 'lion',
		digits: '52',
		pos: 'noun'
	},
	{
		word: 'lime',
		digits: '53',
		pos: 'noun'
	},
	{
		word: 'lorry',
		digits: '54',
		pos: 'noun'
	},
	{
		word: 'lily',
		digits: '55',
		pos: 'noun'
	},
	{
		word: 'leech',
		digits: '56',
		pos: 'noun'
	},
	{
		word: 'leg',
		digits: '57',
		pos: 'noun'
	},
	{
		word: 'lava',
		digits: '58',
		pos: 'noun'
	},
	{
		word: 'lip',
		digits: '59',
		pos: 'noun'
	},
	{
		word: 'lose',
		digits: '50',
		pos: 'verb'
	},
	{
		word: 'let',
		digits: '51',
		pos: 'verb'
	},
	{
		word: 'align',
		digits: '52',
		pos: 'verb'
	},
	{
		word: 'loom',
		digits: '53',
		pos: 'verb'
	},
	{
		word: 'lure',
		digits: '54',
		pos: 'verb'
	},
	{
		word: 'lull',
		digits: '55',
		pos: 'verb'
	},
	{
		word: 'latch',
		digits: '56',
		pos: 'verb'
	},
	{
		word: 'lick',
		digits: '57',
		pos: 'verb'
	},
	{
		word: 'love',
		digits: '58',
		pos: 'verb'
	},
	{
		word: 'help',
		digits: '59',
		pos: 'verb'
	},
	{
		word: 'lazy',
		digits: '50',
		pos: 'adjective'
	},
	{
		word: 'elite',
		digits: '51',
		pos: 'adjective'
	},
	{
		word: 'alien',
		digits: '52',
		pos: 'adjective'
	},
	{
		word: 'lame',
		digits: '53',
		pos: 'adjective'
	},
	{
		word: 'leery',
		digits: '54',
		pos: 'adjective'
	},
	{
		word: 'loyal',
		digits: '55',
		pos: 'adjective'
	},
	{
		word: 'lush',
		digits: '56',
		pos: 'adjective'
	},
	{
		word: 'lucky',
		digits: '57',
		pos: 'adjective'
	},
	{
		word: 'leafy',
		digits: '58',
		pos: 'adjective'
	},
	{
		word: 'loopy',
		digits: '59',
		pos: 'adjective'
	},
	{
		word: 'cheese',
		digits: '60',
		pos: 'noun'
	},
	{
		word: 'cheetah',
		digits: '61',
		pos: 'noun'
	},
	{
		word: 'chin',
		digits: '62',
		pos: 'noun'
	},
	{
		word: 'gem',
		digits: '63',
		pos: 'noun'
	},
	{
		word: 'shrew',
		digits: '64',
		pos: 'noun'
	},
	{
		word: 'chilli',
		digits: '65',
		pos: 'noun'
	},
	{
		word: 'cha-cha',
		digits: '66',
		pos: 'noun'
	},
	{
		word: 'chick',
		digits: '67',
		pos: 'noun'
	},
	{
		word: 'chef',
		digits: '68',
		pos: 'noun'
	},
	{
		word: 'jeep',
		digits: '69',
		pos: 'noun'
	},
	{
		word: 'chase',
		digits: '60',
		pos: 'verb'
	},
	{
		word: 'cheat',
		digits: '61',
		pos: 'verb'
	},
	{
		word: 'chain',
		digits: '62',
		pos: 'verb'
	},
	{
		word: 'jam',
		digits: '63',
		pos: 'verb'
	},
	{
		word: 'jury',
		digits: '64',
		pos: 'verb'
	},
	{
		word: 'chill',
		digits: '65',
		pos: 'verb'
	},
	{
		word: 'judge',
		digits: '66',
		pos: 'verb'
	},
	{
		word: 'check',
		digits: '67',
		pos: 'verb'
	},
	{
		word: 'achieve',
		digits: '68',
		pos: 'verb'
	},
	{
		word: 'chop',
		digits: '69',
		pos: 'verb'
	},
	{
		word: 'choosy',
		digits: '60',
		pos: 'adjective'
	},
	{
		word: 'chatty',
		digits: '61',
		pos: 'adjective'
	},
	{
		word: 'shiny',
		digits: '62',
		pos: 'adjective'
	},
	{
		word: 'sham',
		digits: '63',
		pos: 'adjective'
	},
	{
		word: 'cherry',
		digits: '64',
		pos: 'adjective'
	},
	{
		word: 'jolly',
		digits: '65',
		pos: 'adjective'
	},
	{
		word: 'Jewish',
		digits: '66',
		pos: 'adjective'
	},
	{
		word: 'shaky',
		digits: '67',
		pos: 'adjective'
	},
	{
		word: 'chief',
		digits: '68',
		pos: 'adjective'
	},
	{
		word: 'cheap',
		digits: '69',
		pos: 'adjective'
	},
	{
		word: 'goose',
		digits: '70',
		pos: 'noun'
	},
	{
		word: 'cat',
		digits: '71',
		pos: 'noun'
	},
	{
		word: 'coin',
		digits: '72',
		pos: 'noun'
	},
	{
		word: 'game',
		digits: '73',
		pos: 'noun'
	},
	{
		word: 'crow',
		digits: '74',
		pos: 'noun'
	},
	{
		word: 'clay',
		digits: '75',
		pos: 'noun'
	},
	{
		word: 'cage',
		digits: '76',
		pos: 'noun'
	},
	{
		word: 'cake',
		digits: '77',
		pos: 'noun'
	},
	{
		word: 'cave',
		digits: '78',
		pos: 'noun'
	},
	{
		word: 'cube',
		digits: '79',
		pos: 'noun'
	},
	{
		word: 'kiss',
		digits: '70',
		pos: 'verb'
	},
	{
		word: 'quote',
		digits: '71',
		pos: 'verb'
	},
	{
		word: 'weaken',
		digits: '72',
		pos: 'verb'
	},
	{
		word: 'comb',
		digits: '73',
		pos: 'verb'
	},
	{
		word: 'carry',
		digits: '74',
		pos: 'verb'
	},
	{
		word: 'kill',
		digits: '75',
		pos: 'verb'
	},
	{
		word: 'coach',
		digits: '76',
		pos: 'verb'
	},
	{
		word: 'cook',
		digits: '77',
		pos: 'verb'
	},
	{
		word: 'give',
		digits: '78',
		pos: 'verb'
	},
	{
		word: 'copy',
		digits: '79',
		pos: 'verb'
	},
	{
		word: 'cosy',
		digits: '70',
		pos: 'adjective'
	},
	{
		word: 'good',
		digits: '71',
		pos: 'adjective'
	},
	{
		word: 'keen',
		digits: '72',
		pos: 'adjective'
	},
	{
		word: 'gummy',
		digits: '73',
		pos: 'adjective'
	},
	{
		word: 'grey',
		digits: '74',
		pos: 'adjective'
	},
	{
		word: 'cool',
		digits: '75',
		pos: 'adjective'
	},
	{
		word: 'catchy',
		digits: '76',
		pos: 'adjective'
	},
	{
		word: 'quick',
		digits: '77',
		pos: 'adjective'
	},
	{
		word: 'goofy',
		digits: '78',
		pos: 'adjective'
	},
	{
		word: 'agape',
		digits: '79',
		pos: 'adjective'
	},
	{
		word: 'vase',
		digits: '80',
		pos: 'noun'
	},
	{
		word: 'video',
		digits: '81',
		pos: 'noun'
	},
	{
		word: 'fan',
		digits: '82',
		pos: 'noun'
	},
	{
		word: 'ovum',
		digits: '83',
		pos: 'noun'
	},
	{
		word: 'fairy',
		digits: '84',
		pos: 'noun'
	},
	{
		word: 'fool',
		digits: '85',
		pos: 'noun'
	},
	{
		word: 'veggie',
		digits: '86',
		pos: 'noun'
	},
	{
		word: 'fig',
		digits: '87',
		pos: 'noun'
	},
	{
		word: 'fife',
		digits: '88',
		pos: 'noun'
	},
	{
		word: 'vibe',
		digits: '89',
		pos: 'noun'
	},
	{
		word: 'fuse',
		digits: '80',
		pos: 'verb'
	},
	{
		word: 'fight',
		digits: '81',
		pos: 'verb'
	},
	{
		word: 'fine',
		digits: '82',
		pos: 'verb'
	},
	{
		word: 'fume',
		digits: '83',
		pos: 'verb'
	},
	{
		word: 'fry',
		digits: '84',
		pos: 'verb'
	},
	{
		word: 'fly',
		digits: '85',
		pos: 'verb'
	},
	{
		word: 'fetch',
		digits: '86',
		pos: 'verb'
	},
	{
		word: 'fake',
		digits: '87',
		pos: 'verb'
	},
	{
		word: 'viva',
		digits: '88',
		pos: 'verb'
	},
	{
		word: 'fob',
		digits: '89',
		pos: 'verb'
	},
	{
		word: 'fussy',
		digits: '80',
		pos: 'adjective'
	},
	{
		word: 'fat',
		digits: '81',
		pos: 'adjective'
	},
	{
		word: 'funny',
		digits: '82',
		pos: 'adjective'
	},
	{
		word: 'foamy',
		digits: '83',
		pos: 'adjective'
	},
	{
		word: 'furry',
		digits: '84',
		pos: 'adjective'
	},
	{
		word: 'foul',
		digits: '85',
		pos: 'adjective'
	},
	{
		word: 'fishy',
		digits: '86',
		pos: 'adjective'
	},
	{
		word: 'foggy',
		digits: '87',
		pos: 'adjective'
	},
	{
		word: 'fave',
		digits: '88',
		pos: 'adjective'
	},
	{
		word: 'fab',
		digits: '89',
		pos: 'adjective'
	},
	{
		word: 'boss',
		digits: '90',
		pos: 'noun'
	},
	{
		word: 'bead',
		digits: '91',
		pos: 'noun'
	},
	{
		word: 'pony',
		digits: '92',
		pos: 'noun'
	},
	{
		word: 'puma',
		digits: '93',
		pos: 'noun'
	},
	{
		word: 'berry',
		digits: '94',
		pos: 'noun'
	},
	{
		word: 'bell',
		digits: '95',
		pos: 'noun'
	},
	{
		word: 'pouch',
		digits: '96',
		pos: 'noun'
	},
	{
		word: 'bike',
		digits: '97',
		pos: 'noun'
	},
	{
		word: 'beef',
		digits: '98',
		pos: 'noun'
	},
	{
		word: 'pipe',
		digits: '99',
		pos: 'noun'
	},
	{
		word: 'oppose',
		digits: '90',
		pos: 'verb'
	},
	{
		word: 'bite',
		digits: '91',
		pos: 'verb'
	},
	{
		word: 'ban',
		digits: '92',
		pos: 'verb'
	},
	{
		word: 'bomb',
		digits: '93',
		pos: 'verb'
	},
	{
		word: 'bury',
		digits: '94',
		pos: 'verb'
	},
	{
		word: 'peel',
		digits: '95',
		pos: 'verb'
	},
	{
		word: 'patch',
		digits: '96',
		pos: 'verb'
	},
	{
		word: 'poke',
		digits: '97',
		pos: 'verb'
	},
	{
		word: 'pave',
		digits: '98',
		pos: 'verb'
	},
	{
		word: 'pop',
		digits: '99',
		pos: 'verb'
	},
	{
		word: 'busy',
		digits: '90',
		pos: 'adjective'
	},
	{
		word: 'bad',
		digits: '91',
		pos: 'adjective'
	},
	{
		word: 'bony',
		digits: '92',
		pos: 'adjective'
	},
	{
		word: 'balmy',
		digits: '93',
		pos: 'adjective'
	},
	{
		word: 'pro',
		digits: '94',
		pos: 'adjective'
	},
	{
		word: 'blue',
		digits: '95',
		pos: 'adjective'
	},
	{
		word: 'bushy',
		digits: '96',
		pos: 'adjective'
	},
	{
		word: 'back',
		digits: '97',
		pos: 'adjective'
	},
	{
		word: 'puffy',
		digits: '98',
		pos: 'adjective'
	},
	{
		word: 'baby',
		digits: '99',
		pos: 'adjective'
	}
];
