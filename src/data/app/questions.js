import React from 'react';
// import Two from '../../components/2048/2048';
// import Stepper from '../../components/Stepper/Stepper';

import '../../../assets/crypts/you.jpg';
import '../../../assets/crypts/chessboard.gif';
import '../../../assets/crypts/equation.jpg';
// import '../../../assets/crypts/12_1.jpg';
// import '../../../assets/crypts/12_2.jpg';
// import '../../../assets/crypts/12_3.jpg';
// import '../../../assets/crypts/18_1.jpg';
// import '../../../assets/crypts/18_2.jpg';
// import '../../../assets/crypts/18_3.jpg';

// const steps = num => [ {
//   imgPath: `./img/${num}_1.jpg`,
// }, {
//   imgPath: `./img/${num}_2.jpg`,
// }, {
//   imgPath: `./img/${num}_3.jpg`,
// } ];

export default [
  {},
  {
    question: <img src="./img/you.jpg" style={{ width: 200 }} />,
    answer: '639bae9ac6b3e1a84cebb7b403297b79',
    clues: [ 'Workforce', 'Whats he pointing at?' ],
  },
  {
    question: "Where kings and queens contend.",
    answer: '53fb40c0dfc82831d472d01bb651216c',
    clues: [ '64^2', 'Black & White' ],
  },
  {
    question: 'Blue Red Yellow Blue Green Red',
    answer: 'c822c1b63853ed273b89687ac505f9fa',
    clues: [ 'MNC', 'Logo' ],
  },
  {
    question: 'Dbqjubm pg Fohmboe',
    answer: 'bc180dbc583491c00f8a1cd134f7517b',
    clues: [ 'Cipher', 'Letter shift' ],
  },
  {
    question: 'S O E N S Y A',
    answer: '172a8327fcd3685ab3c0f740d031da09',
    clues: [ 'What constists of 7 things?', 'Happens all the time' ],
  },
  {
    question: 'vs[oys; pg omfos',
    answer: 'a0ad3c74ad3b4ce8355e606fa1fd2ce4',
    clues: [ 'Keyboard', 'Right shift' ],
  },
  {
    question: 'Centre of Gravity',
    answer: '9e3669d19b675bd57058fd4664205d2a',
    clues: [ 'Focus on the word', 'Vendetta' ],
  },
  {
    question: 'Taxi cabs are everywhere. Whats the most famous one?',
    answer: '25e2a30f44898b9f3e978b1786dcd85c',
    clues: [ 'It happened in a taxi from London.', '4 digits' ],
  },
  {
    question: 'VGhlIGxhbmQgb2YgdGhlIHJpc2luZyBzdW4=',
    answer: '578ed5a4eecf5a15803abdc49f6152d6',
    clues: [ 'Encode', 'base64' ],
  },
  {
    question: <img src="./img/chessboard.gif" style={{ height: 200, width: 200 }} />,
    answer: 'cf26e29f41ea1a29ba20fd84c0caf55d',
    clues: [ 'Short & sweet', 'Checkmate' ],
  },
  {
    question: "🇮🇳 6238607069",
    answer: 'd02c4c4cde7ae76252540d116a40f23a',
    clues: [ 'Facebook acquistion', 'Mathematics' ],
  },
  // {
  //   question: "Your \\Velocity",
  //   answer: '17d49ab14f0d4a8bbffe14ad3d6b7b13',
  //   clues: [ 'Space', "Programming character" ],
  // },
  {
    question: '6232427227 in a Nokia phone',
    answer: 'fb2a54d637484c4ca8adb2343237b89f',
    clues: [ 'TTT TTT TTT', 'Dictionary' ],
  },
  // {
  //   question: 'Brave as the sun',
  //   answer: '2ad5e093c82244036ee1d034a3465321',
  //   clues: [ 'King', 'India' ],
  // },
  // {
  //   question: <div><div>What do they have in common?</div>
  //     <div>Akbar, Kanishka, Ashoka, Raja Raja Chola</div></div>,
  //   answer: '7731cb5d9476fca493531b8ba005d4cb',
  //   clues: [ 'Alexander', "'E azam'" ],
  // },
  {
    question: <img src="/img/equation.jpg" style={{ width: 200 }} />,
    answer: '9f05aa4202e4ce8d6a72511dc735cce9',
    clues: [ 'Shade the closed region', 'Webweaver' ],
  },
  {
    question: 'In an alternate world, there is a city called Lilliput. In Lilliput, there are 12 places named A - L. If 4 places at equal distances can be connected by a straight line in a map, they can be considered to be of the same map code. Your task is to arrange these places in such a way there are 6 map codes.',
    answer: 'bb05862dea4d7c1175586c17df9fc6ee',
    clues: [ 'Places can overlap', 'Rephrase the question cleverly.' ],
  },
  // {
  //   // eslint-disable-next-line no-magic-numbers
  //   question: <div><Stepper steps={steps(18)} /><p>They ____ ____ ____.</p></div>,
  //   answer: '41b54445e957125e6f23470e6c6e6e80',
  //   clues: [ 'First citizen of USA', 'Fan of Jodie Foster' ],
  // },
  // {
  //   question: <Two winningScore={2048} question={'64027'} variant={1} />,
  //   answer: '1857f958831f749a4beaf711063f3b4a',
  //   clues: [ '5 digit number', 'Unique digits' ],
  // },
]