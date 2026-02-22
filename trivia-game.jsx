import React, { useState } from 'react';
import { Shuffle, RotateCcw, Trophy, Users } from 'lucide-react';

const TriviaGame = () => {
  const allQuestions = {
    Geography: [
      { question: "What is the capital of Australia?", answers: ["Sydney", "Melbourne", "Canberra", "Brisbane"], correct: 2 },
      { question: "Which river is the longest in the world?", answers: ["Amazon", "Nile", "Yangtze", "Mississippi"], correct: 1 },
      { question: "How many countries are in Africa?", answers: ["48", "52", "54", "58"], correct: 2 },
      { question: "What is the smallest country in the world?", answers: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"], correct: 1 },
      { question: "Which ocean is the largest?", answers: ["Atlantic", "Indian", "Arctic", "Pacific"], correct: 3 },
      { question: "What is the capital of Canada?", answers: ["Toronto", "Ottawa", "Vancouver", "Montreal"], correct: 1 },
      { question: "Which desert is the largest in the world?", answers: ["Sahara", "Arabian", "Gobi", "Antarctic"], correct: 3 },
      { question: "What mountain range separates Europe from Asia?", answers: ["Himalayas", "Alps", "Ural Mountains", "Andes"], correct: 2 },
      { question: "Which country has the most natural lakes?", answers: ["United States", "Russia", "Canada", "Brazil"], correct: 2 },
      { question: "What is the capital of Brazil?", answers: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"], correct: 2 },
      { question: "Which U.S. state is the largest by area?", answers: ["Texas", "California", "Alaska", "Montana"], correct: 2 },
      { question: "What strait separates Africa from Europe?", answers: ["Bering Strait", "Strait of Gibraltar", "Strait of Hormuz", "Bosporus Strait"], correct: 1 },
      { question: "Which country is home to the Great Barrier Reef?", answers: ["Indonesia", "Philippines", "Australia", "Fiji"], correct: 2 },
      { question: "What is the deepest point in Earth's oceans?", answers: ["Mariana Trench", "Puerto Rico Trench", "Java Trench", "Philippine Trench"], correct: 0 },
      { question: "Which European city is known as the 'City of Canals'?", answers: ["Amsterdam", "Venice", "Bruges", "Stockholm"], correct: 1 },
    ],
    "Pop Culture": [
      { question: "Who directed the movie 'Inception'?", answers: ["Steven Spielberg", "Christopher Nolan", "Martin Scorsese", "Quentin Tarantino"], correct: 1 },
      { question: "Which band released the album 'Abbey Road'?", answers: ["The Rolling Stones", "Led Zeppelin", "The Beatles", "Pink Floyd"], correct: 2 },
      { question: "What year was the first iPhone released?", answers: ["2005", "2006", "2007", "2008"], correct: 2 },
      { question: "Who painted the Mona Lisa?", answers: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"], correct: 2 },
      { question: "Which artist released the album 'Thriller' in 1982?", answers: ["Prince", "Michael Jackson", "Madonna", "Whitney Houston"], correct: 1 },
      { question: "What TV show features a chemistry teacher turned drug manufacturer?", answers: ["Breaking Bad", "Better Call Saul", "Ozark", "The Wire"], correct: 0 },
      { question: "Who played Jack Dawson in Titanic?", answers: ["Brad Pitt", "Tom Cruise", "Leonardo DiCaprio", "Matt Damon"], correct: 2 },
      { question: "Which female artist has won the most Grammy Awards?", answers: ["Taylor Swift", "Adele", "Beyoncé", "Alicia Keys"], correct: 2 },
      { question: "What is the highest-grossing film of all time?", answers: ["Avatar", "Avengers: Endgame", "Titanic", "Star Wars"], correct: 0 },
      { question: "Who is known as the 'King of Pop'?", answers: ["Elvis Presley", "Michael Jackson", "Prince", "Freddie Mercury"], correct: 1 },
      { question: "Which streaming service created 'Stranger Things'?", answers: ["Hulu", "Amazon Prime", "Netflix", "Disney+"], correct: 2 },
      { question: "What year did MTV launch?", answers: ["1979", "1981", "1983", "1985"], correct: 1 },
      { question: "Who wrote the Harry Potter book series?", answers: ["J.R.R. Tolkien", "C.S. Lewis", "J.K. Rowling", "Suzanne Collins"], correct: 2 },
      { question: "Which rapper's real name is Marshall Mathers?", answers: ["Jay-Z", "Eminem", "Drake", "Kanye West"], correct: 1 },
      { question: "What is the longest-running animated TV show?", answers: ["Family Guy", "South Park", "The Simpsons", "SpongeBob"], correct: 2 },
    ],
    History: [
      { question: "What year did the Berlin Wall fall?", answers: ["1987", "1989", "1991", "1985"], correct: 1 },
      { question: "Who was the first person to walk on the moon?", answers: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Alan Shepard"], correct: 1 },
      { question: "Which ancient wonder is the only one still standing?", answers: ["Colossus of Rhodes", "Hanging Gardens", "Great Pyramid of Giza", "Lighthouse of Alexandria"], correct: 2 },
      { question: "In what year did World War II end?", answers: ["1943", "1944", "1945", "1946"], correct: 2 },
      { question: "Who was the first President of the United States?", answers: ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin"], correct: 1 },
      { question: "What year did Christopher Columbus reach the Americas?", answers: ["1482", "1492", "1502", "1512"], correct: 1 },
      { question: "Which empire built Machu Picchu?", answers: ["Aztec", "Maya", "Inca", "Olmec"], correct: 2 },
      { question: "Who was the first Roman Emperor?", answers: ["Julius Caesar", "Augustus", "Nero", "Caligula"], correct: 1 },
      { question: "What year did World War I begin?", answers: ["1912", "1914", "1916", "1918"], correct: 1 },
      { question: "Who was the longest-reigning British monarch?", answers: ["Queen Victoria", "Queen Elizabeth II", "King George III", "King Edward VII"], correct: 1 },
      { question: "In what year did the Titanic sink?", answers: ["1910", "1912", "1914", "1916"], correct: 1 },
      { question: "Which ancient city was destroyed by a volcano in 79 AD?", answers: ["Athens", "Rome", "Pompeii", "Carthage"], correct: 2 },
      { question: "Who led the French Revolution?", answers: ["Napoleon Bonaparte", "Louis XVI", "Robespierre", "Multiple leaders"], correct: 3 },
      { question: "What year did the American Civil War end?", answers: ["1863", "1865", "1867", "1869"], correct: 1 },
      { question: "Who discovered penicillin?", answers: ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Jonas Salk"], correct: 1 },
    ],
    "Art & Literature": [
      { question: "Who wrote '1984'?", answers: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "Ernest Hemingway"], correct: 1 },
      { question: "What is the bestselling book of all time (excluding religious texts)?", answers: ["Don Quixote", "A Tale of Two Cities", "The Lord of the Rings", "Harry Potter"], correct: 0 },
      { question: "Who wrote 'To Kill a Mockingbird'?", answers: ["Harper Lee", "Truman Capote", "John Steinbeck", "F. Scott Fitzgerald"], correct: 0 },
      { question: "Who painted the Sistine Chapel ceiling?", answers: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Donatello"], correct: 2 },
      { question: "Which artist cut off part of his own ear?", answers: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet", "Salvador Dalí"], correct: 1 },
      { question: "Who wrote 'Romeo and Juliet'?", answers: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"], correct: 1 },
      { question: "What is the first book of the Bible?", answers: ["Exodus", "Genesis", "Leviticus", "Matthew"], correct: 1 },
      { question: "Who painted 'The Starry Night'?", answers: ["Claude Monet", "Vincent van Gogh", "Pablo Picasso", "Edvard Munch"], correct: 1 },
      { question: "Which author created Sherlock Holmes?", answers: ["Agatha Christie", "Edgar Allan Poe", "Arthur Conan Doyle", "Charles Dickens"], correct: 2 },
      { question: "What art movement is Salvador Dalí associated with?", answers: ["Impressionism", "Cubism", "Surrealism", "Expressionism"], correct: 2 },
      { question: "Who wrote 'The Great Gatsby'?", answers: ["Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck", "William Faulkner"], correct: 1 },
      { question: "Which museum is home to the Mona Lisa?", answers: ["The Met", "The Louvre", "The Uffizi", "The Prado"], correct: 1 },
      { question: "Who wrote 'Pride and Prejudice'?", answers: ["Charlotte Brontë", "Emily Brontë", "Jane Austen", "Mary Shelley"], correct: 2 },
      { question: "What style of art uses small dots of color?", answers: ["Impressionism", "Pointillism", "Cubism", "Fauvism"], correct: 1 },
      { question: "Who wrote 'The Odyssey'?", answers: ["Virgil", "Homer", "Sophocles", "Euripides"], correct: 1 },
    ],
    Science: [
      { question: "What is the chemical symbol for gold?", answers: ["Go", "Gd", "Au", "Ag"], correct: 2 },
      { question: "What is the largest planet in our solar system?", answers: ["Saturn", "Jupiter", "Neptune", "Uranus"], correct: 1 },
      { question: "How many bones are in the adult human body?", answers: ["196", "206", "216", "226"], correct: 1 },
      { question: "What is the speed of light?", answers: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"], correct: 0 },
      { question: "What is H2O commonly known as?", answers: ["Hydrogen peroxide", "Water", "Oxygen", "Salt"], correct: 1 },
      { question: "What planet is known as the Red Planet?", answers: ["Venus", "Mars", "Jupiter", "Saturn"], correct: 1 },
      { question: "What is the powerhouse of the cell?", answers: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"], correct: 2 },
      { question: "How many elements are in the periodic table?", answers: ["108", "112", "118", "124"], correct: 2 },
      { question: "What gas do plants absorb from the atmosphere?", answers: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], correct: 2 },
      { question: "What is the hardest natural substance on Earth?", answers: ["Gold", "Iron", "Diamond", "Titanium"], correct: 2 },
      { question: "What is the smallest unit of life?", answers: ["Atom", "Molecule", "Cell", "Organ"], correct: 2 },
      { question: "What type of animal is a Komodo dragon?", answers: ["Snake", "Lizard", "Crocodile", "Dinosaur"], correct: 1 },
      { question: "What is the chemical formula for table salt?", answers: ["NaCl", "KCl", "CaCl2", "MgCl2"], correct: 0 },
      { question: "How many chambers does the human heart have?", answers: ["2", "3", "4", "5"], correct: 2 },
      { question: "What is the study of earthquakes called?", answers: ["Meteorology", "Geology", "Seismology", "Volcanology"], correct: 2 },
    ],
    Sports: [
      { question: "How many players are on a soccer team on the field?", answers: ["9", "10", "11", "12"], correct: 2 },
      { question: "In what country were the first modern Olympics held?", answers: ["France", "Greece", "Italy", "England"], correct: 1 },
      { question: "What is the diameter of a basketball hoop in inches?", answers: ["16", "18", "20", "22"], correct: 1 },
      { question: "Who has won the most Grand Slam titles in tennis?", answers: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Serena Williams"], correct: 2 },
      { question: "How many points is a touchdown worth in American football?", answers: ["5", "6", "7", "8"], correct: 1 },
      { question: "What sport is known as 'the beautiful game'?", answers: ["Basketball", "Soccer", "Tennis", "Baseball"], correct: 1 },
      { question: "How many strikes are in a perfect game of bowling?", answers: ["10", "11", "12", "13"], correct: 2 },
      { question: "What is the national sport of Canada?", answers: ["Ice Hockey", "Lacrosse", "Both A and B", "Baseball"], correct: 2 },
      { question: "In golf, what is one under par called?", answers: ["Bogey", "Birdie", "Eagle", "Albatross"], correct: 1 },
      { question: "How long is a marathon?", answers: ["24.2 miles", "25.2 miles", "26.2 miles", "27.2 miles"], correct: 2 },
      { question: "What do you call it when a bowler makes three strikes in a row?", answers: ["Turkey", "Eagle", "Hat Trick", "Triple"], correct: 0 },
      { question: "How many periods are in a hockey game?", answers: ["2", "3", "4", "5"], correct: 1 },
      { question: "What is the maximum break in snooker?", answers: ["147", "150", "155", "160"], correct: 0 },
      { question: "How many bases are on a baseball field?", answers: ["3", "4", "5", "6"], correct: 1 },
      { question: "In tennis, what does 'love' mean?", answers: ["Game point", "Zero", "Tie", "Match point"], correct: 1 },
    ],
  };

  const bonusQuestions = [
    { question: "What is the only mammal capable of true flight?", answers: ["Flying squirrel", "Bat", "Sugar glider", "Flying lemur"], correct: 1, category: "Tiebreaker" },
    { question: "What is the smallest bone in the human body?", answers: ["Stapes", "Malleus", "Incus", "Phalanx"], correct: 0, category: "Tiebreaker" },
    { question: "What is the rarest blood type?", answers: ["O negative", "AB positive", "AB negative", "B negative"], correct: 2, category: "Tiebreaker" },
    { question: "Which planet has the most moons?", answers: ["Jupiter", "Saturn", "Uranus", "Neptune"], correct: 1, category: "Tiebreaker" },
    { question: "What is the official language of Brazil?", answers: ["Spanish", "Portuguese", "French", "English"], correct: 1, category: "Tiebreaker" },
  ];

  const categories = ["Geography", "Pop Culture", "History", "Art & Literature", "Science", "Sports"];

  const [gameStarted, setGameStarted] = useState(false);
  const [numPlayers, setNumPlayers] = useState(2);
  const [players, setPlayers] = useState([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [currentCategory, setCurrentCategory] = useState("Geography");
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [usedQuestionsByCategory, setUsedQuestionsByCategory] = useState({});
  const [shuffledQuestions, setShuffledQuestions] = useState({});
  const [roundNumber, setRoundNumber] = useState(0);
  const [tiebreaker, setTiebreaker] = useState(false);
  const [tiebreakerPlayers, setTiebreakerPlayers] = useState([]);
  const [showPlayerSetup, setShowPlayerSetup] = useState(false);
  const [playerNames, setPlayerNames] = useState([]);

  const startGame = () => {
    setPlayerNames(Array(numPlayers).fill(''));
    setShowPlayerSetup(true);
  };

  const handlePlayerNamesSubmit = (playerNames) => {
    const initialPlayers = playerNames.map(name => ({
      name: name,
      completedCategories: [],
      finishedRound: null,
    }));
    
    setPlayers(initialPlayers);
    
    // Shuffle all questions for each category
    const shuffled = {};
    const used = {};
    categories.forEach(cat => {
      shuffled[cat] = [...allQuestions[cat]].sort(() => Math.random() - 0.5);
      used[cat] = 0;
    });
    setShuffledQuestions(shuffled);
    setUsedQuestionsByCategory(used);
    
    // Start with first player and first category they need
    setCurrentPlayerIndex(0);
    setCurrentCategory(categories[0]);
    setCurrentQuestion(shuffled[categories[0]][0]);
    setGameStarted(true);
    setShowPlayerSetup(false);
  };

  const getNextCategory = (player) => {
    for (let cat of categories) {
      if (!player.completedCategories.includes(cat)) {
        return cat;
      }
    }
    return null;
  };

  const handleAnswerClick = (answerIndex) => {
    if (showResult) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    const currentPlayer = players[currentPlayerIndex];
    const isCorrect = selectedAnswer === currentQuestion.correct;
    
    if (isCorrect) {
      // Mark category as complete
      const updatedPlayers = [...players];
      updatedPlayers[currentPlayerIndex].completedCategories.push(currentCategory);
      
      // Check if player finished all categories
      if (updatedPlayers[currentPlayerIndex].completedCategories.length === 6) {
        updatedPlayers[currentPlayerIndex].finishedRound = roundNumber;
      }
      
      setPlayers(updatedPlayers);
      
      // Get next category for this player
      const nextCat = getNextCategory(updatedPlayers[currentPlayerIndex]);
      
      if (nextCat) {
        // Player has more categories to complete
        setCurrentCategory(nextCat);
        const questionIndex = usedQuestionsByCategory[nextCat] % shuffledQuestions[nextCat].length;
        setCurrentQuestion(shuffledQuestions[nextCat][questionIndex]);
        setUsedQuestionsByCategory({
          ...usedQuestionsByCategory,
          [nextCat]: usedQuestionsByCategory[nextCat] + 1,
        });
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        // Player completed all categories, move to next player
        moveToNextPlayer(updatedPlayers);
      }
    } else {
      // Wrong answer, give them another question in same category
      const questionIndex = usedQuestionsByCategory[currentCategory] % shuffledQuestions[currentCategory].length;
      setCurrentQuestion(shuffledQuestions[currentCategory][questionIndex]);
      setUsedQuestionsByCategory({
        ...usedQuestionsByCategory,
        [currentCategory]: usedQuestionsByCategory[currentCategory] + 1,
      });
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const moveToNextPlayer = (updatedPlayers) => {
    const nextPlayerIndex = (currentPlayerIndex + 1) % players.length;
    
    // Check if we've completed a round
    if (nextPlayerIndex === 0) {
      const newRoundNumber = roundNumber + 1;
      setRoundNumber(newRoundNumber);
      
      // Check for winners and tiebreakers
      const finishersThisRound = updatedPlayers.filter(p => p.finishedRound === roundNumber);
      const allFinishers = updatedPlayers.filter(p => p.finishedRound !== null);
      
      if (finishersThisRound.length > 1) {
        // Multiple people finished this round - tiebreaker needed
        setTiebreaker(true);
        setTiebreakerPlayers(finishersThisRound);
        setCurrentPlayerIndex(0);
        setCurrentQuestion(bonusQuestions[0]);
        setSelectedAnswer(null);
        setShowResult(false);
        return;
      } else if (allFinishers.length > 0) {
        // Someone finished, game over
        setGameOver(true);
        return;
      }
    }
    
    // Move to next player
    if (updatedPlayers[nextPlayerIndex].completedCategories.length === 6) {
      // This player already finished, skip them
      const nextIndex = (nextPlayerIndex + 1) % players.length;
      if (updatedPlayers.filter(p => p.completedCategories.length < 6).length === 0) {
        setGameOver(true);
        return;
      }
      setCurrentPlayerIndex(nextIndex);
      const nextCat = getNextCategory(updatedPlayers[nextIndex]);
      setCurrentCategory(nextCat);
      const questionIndex = usedQuestionsByCategory[nextCat] % shuffledQuestions[nextCat].length;
      setCurrentQuestion(shuffledQuestions[nextCat][questionIndex]);
      setUsedQuestionsByCategory({
        ...usedQuestionsByCategory,
        [nextCat]: usedQuestionsByCategory[nextCat] + 1,
      });
    } else {
      setCurrentPlayerIndex(nextPlayerIndex);
      const nextCat = getNextCategory(updatedPlayers[nextPlayerIndex]);
      setCurrentCategory(nextCat);
      const questionIndex = usedQuestionsByCategory[nextCat] % shuffledQuestions[nextCat].length;
      setCurrentQuestion(shuffledQuestions[nextCat][questionIndex]);
      setUsedQuestionsByCategory({
        ...usedQuestionsByCategory,
        [nextCat]: usedQuestionsByCategory[nextCat] + 1,
      });
    }
    
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const handleTiebreakerNext = () => {
    if (selectedAnswer === currentQuestion.correct) {
      // Current player won the tiebreaker
      setGameOver(true);
    } else {
      // Move to next tiebreaker player
      const nextIndex = currentPlayerIndex + 1;
      if (nextIndex < tiebreakerPlayers.length) {
        setCurrentPlayerIndex(nextIndex);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        // All missed, game over with original finishers
        setGameOver(true);
      }
    }
  };

  const resetGame = () => {
    setGameStarted(false);
    setPlayers([]);
    setCurrentPlayerIndex(0);
    setCurrentCategory("Geography");
    setCurrentQuestion(null);
    setSelectedAnswer(null);
    setShowResult(false);
    setGameOver(false);
    setUsedQuestionsByCategory({});
    setShuffledQuestions({});
    setRoundNumber(0);
    setTiebreaker(false);
    setTiebreakerPlayers([]);
    setShowPlayerSetup(false);
  };

  // Number of players selection screen
  if (!gameStarted && !showPlayerSetup) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
          <div className="text-center mb-8">
            <Users className="w-16 h-16 mx-auto mb-4 text-purple-600" />
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Category Challenge</h1>
            <p className="text-gray-600">How many players?</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[2, 3, 4].map(num => (
              <button
                key={num}
                onClick={() => setNumPlayers(num)}
                className={`p-6 rounded-lg font-bold text-2xl transition-all border-4 ${
                  numPlayers === num
                    ? 'bg-purple-600 text-white border-purple-700'
                    : 'bg-white text-gray-800 border-gray-300 hover:border-purple-400'
                }`}
              >
                {num} Players
              </button>
            ))}
          </div>

          <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4 mb-6">
            <h3 className="font-bold text-purple-900 mb-2">How to Play:</h3>
            <ul className="text-sm text-purple-800 space-y-1">
              <li>• Answer questions from 6 categories</li>
              <li>• Get ONE question correct in each category to win</li>
              <li>• Questions are randomized - no two players get the same questions</li>
              <li>• If multiple players finish on the same round, there's a tiebreaker!</li>
            </ul>
          </div>
          
          <button
            onClick={startGame}
            className="w-full bg-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-purple-700 transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  // Player names setup screen
  if (showPlayerSetup) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Enter Player Names</h2>
            <p className="text-gray-600">All players required</p>
          </div>
          
          <div className="space-y-4 mb-8">
            {Array(numPlayers).fill(0).map((_, index) => (
              <div key={index}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Player {index + 1} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={playerNames[index]}
                  onChange={(e) => {
                    const newNames = [...playerNames];
                    newNames[index] = e.target.value;
                    setPlayerNames(newNames);
                  }}
                  placeholder={`Enter name for Player ${index + 1}`}
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                />
              </div>
            ))}
          </div>
          
          <button
            onClick={() => {
              if (playerNames.every(name => name.trim() !== '')) {
                handlePlayerNamesSubmit(playerNames);
              } else {
                alert('Please enter all player names!');
              }
            }}
            className="w-full bg-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-purple-700 transition-colors"
          >
            Start Game
          </button>
        </div>
      </div>
    );
  }

  // Game Over Screen
  if (gameOver) {
    let winner;
    if (tiebreaker && selectedAnswer === currentQuestion.correct) {
      winner = tiebreakerPlayers[currentPlayerIndex];
    } else {
      const finishers = players.filter(p => p.finishedRound !== null).sort((a, b) => a.finishedRound - b.finishedRound);
      winner = finishers[0];
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
          <div className="text-center mb-8">
            <Trophy className="w-20 h-20 mx-auto mb-4 text-yellow-500" />
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Winner!</h1>
            <p className="text-3xl text-purple-600 font-semibold">
              {winner.name} wins! 🎉
            </p>
            {tiebreaker && <p className="text-sm text-gray-600 mt-2">Won by tiebreaker</p>}
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Final Results</h2>
            <div className="space-y-3">
              {players.map((player, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg ${
                    player.name === winner.name
                      ? 'bg-gradient-to-r from-yellow-100 to-yellow-200 border-2 border-yellow-400'
                      : 'bg-gray-100'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-lg">{player.name}</span>
                    <span className="text-sm text-gray-600">
                      {player.completedCategories.length}/6 categories
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {categories.map(cat => (
                      <span
                        key={cat}
                        className={`text-xs px-2 py-1 rounded ${
                          player.completedCategories.includes(cat)
                            ? 'bg-green-200 text-green-800'
                            : 'bg-gray-200 text-gray-600'
                        }`}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={resetGame}
            className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
          >
            <RotateCcw size={20} />
            Play Again
          </button>
        </div>
      </div>
    );
  }

  // Tiebreaker Screen
  if (tiebreaker) {
    const currentTiebreakerPlayer = tiebreakerPlayers[currentPlayerIndex];
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-3xl w-full">
          <div className="text-center mb-6 bg-yellow-100 border-2 border-yellow-400 rounded-lg p-4">
            <h1 className="text-3xl font-bold text-yellow-900 mb-2">🏆 TIEBREAKER! 🏆</h1>
            <p className="text-yellow-800">First correct answer wins!</p>
          </div>

          <div className="mb-6 p-4 bg-orange-50 rounded-lg border-2 border-orange-200">
            <p className="text-center text-orange-800 font-semibold text-lg">
              {currentTiebreakerPlayer.name}'s Turn
            </p>
          </div>

          <div className="mb-4">
            <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">
              {currentQuestion.category}
            </span>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-8">
            {currentQuestion.question}
          </h2>

          <div className="space-y-3 mb-8">
            {currentQuestion.answers.map((answer, index) => {
              let buttonClass = "w-full p-4 text-left rounded-lg font-semibold transition-all border-2 ";
              
              if (showResult) {
                if (index === currentQuestion.correct) {
                  buttonClass += "bg-green-100 border-green-500 text-green-800";
                } else if (index === selectedAnswer) {
                  buttonClass += "bg-red-100 border-red-500 text-red-800";
                } else {
                  buttonClass += "bg-gray-100 border-gray-300 text-gray-600";
                }
              } else {
                buttonClass += "bg-white border-gray-300 text-gray-800 hover:bg-orange-50 hover:border-orange-400 cursor-pointer";
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  disabled={showResult}
                  className={buttonClass}
                >
                  {answer}
                </button>
              );
            })}
          </div>

          {showResult && (
            <div className="text-center">
              <button
                onClick={handleTiebreakerNext}
                className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                {selectedAnswer === currentQuestion.correct ? "See Winner" : "Next Player"}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Main Game Screen
  const currentPlayer = players[currentPlayerIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-3xl w-full">
        {/* Player Progress Cards */}
        <div className="mb-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          {players.map((player, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg ${
                index === currentPlayerIndex
                  ? 'bg-purple-600 text-white ring-4 ring-purple-300'
                  : player.completedCategories.length === 6
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              <div className="font-bold text-sm truncate">{player.name}</div>
              <div className="text-xl font-bold">{player.completedCategories.length}/6</div>
              <div className="text-xs mt-1">
                {player.completedCategories.length === 6 ? '✓ Done' : index === currentPlayerIndex ? '▶ Playing' : '⏳ Waiting'}
              </div>
            </div>
          ))}
        </div>

        {/* Current Player Turn Banner */}
        <div className="mb-6 p-4 bg-purple-50 rounded-lg border-2 border-purple-200">
          <p className="text-center text-purple-800 font-semibold text-lg">
            {currentPlayer.name}'s Turn
          </p>
        </div>

        {/* Category Progress */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <span
                key={cat}
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  currentPlayer.completedCategories.includes(cat)
                    ? 'bg-green-200 text-green-800'
                    : cat === currentCategory
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {cat} {currentPlayer.completedCategories.includes(cat) && '✓'}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
            Current Category: {currentCategory}
          </span>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          {currentQuestion.question}
        </h2>

        <div className="space-y-3 mb-8">
          {currentQuestion.answers.map((answer, index) => {
            let buttonClass = "w-full p-4 text-left rounded-lg font-semibold transition-all border-2 ";
            
            if (showResult) {
              if (index === currentQuestion.correct) {
                buttonClass += "bg-green-100 border-green-500 text-green-800";
              } else if (index === selectedAnswer) {
                buttonClass += "bg-red-100 border-red-500 text-red-800";
              } else {
                buttonClass += "bg-gray-100 border-gray-300 text-gray-600";
              }
            } else {
              buttonClass += "bg-white border-gray-300 text-gray-800 hover:bg-purple-50 hover:border-purple-400 cursor-pointer";
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                disabled={showResult}
                className={buttonClass}
              >
                {answer}
              </button>
            );
          })}
        </div>

        {showResult && (
          <div className="text-center">
            <div className="mb-4">
              {selectedAnswer === currentQuestion.correct ? (
                <p className="text-green-600 font-bold text-lg">Correct! Moving to next category.</p>
              ) : (
                <p className="text-red-600 font-bold text-lg">Wrong! Try another question in {currentCategory}.</p>
              )}
            </div>
            <button
              onClick={handleNextQuestion}
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Continue
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TriviaGame;