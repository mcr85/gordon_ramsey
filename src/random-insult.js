const initiation = [
  'Fuck off!',
  'Shut the fuck up!',
  'Piss off!',
  'Get out!',
  'It\'s RAAW!',
  'WTF are you doing?',
  'Move your ass!',
  'More saunce!',
  'Wake up!',
  'Get a grip!',
  'Gimmie your jacket!'
];

const subject = 'You';

const adjective = [
  'stupid',
  'lazy',
  'pathetic',
  'useless',
  'silliy',
  'ignorant',
  'fat',
  'dumb',
  'little',
  'fucking',
  'bloody',
  'ugly',
  'weird',
  'hopeless',
  'wimpy',
  'goddamn',
  'brainless',
  'slow',
  'proud',
  'fat-mouthed',
  'blasted',
  'wasted',
  'dopey',
  'right',
  'worthless',
  'stinky'
];

const insult = [
  'piece of shit',
  'asshole',
  'donut',
  'idiot',
  'jerk',
  'pig',
  'donkey',
  'fuckface',
  'wanker',
  'cow',
  'dumbo',
  'imbecile',
  'bitch',
  'muppet',
  'banana',
  'dickface',
  'gremlin',
  'bozo',
  'fucker',
  'fatass',
  'dog',
  'plank',
  'dick',
  'giraffe',
  'tosser',
  'crybaby'
];

exports.insult = function() {
  const randomInitiation = Math.round(Math.random() * initiation.length);
  const randomAdjective = Math.round(Math.random() * adjective.length);
  const randomInsult = Math.round(Math.random() * insult.length);

  return `${initiation[randomInitiation]} ${subject} ${adjective[randomAdjective]} ${insult[randomInsult]}`;
}
