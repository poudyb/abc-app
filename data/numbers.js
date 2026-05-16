const NUMBER_WORDS = {
  '0': 'zero',
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine'
};

const LEARNING_SYMBOLS_CONFIG = {
  items: '0123456789'.split(''),
  sessionKey: 'ariaNumbersSession',
  statsKey: 'ariaNumbersStats',
  freeplayStatField: 'freeNumbers',
  defaultStats: function() { return createModeStats('freeNumbers'); },
  normalizeStats: function(parsed) { return normalizeModeStats(parsed, 'freeNumbers'); },
  touchHint: 'Tap any number!',
  keyboardHint: 'Press any number!',
  summary: {
    freeplayEmpty: 'You opened Free play - next time, tap lots of numbers to count along! 🔢',
    freeplayCount: function(count) {
      return 'You explored ' + count + ' ' + (count === 1 ? 'number' : 'numbers') + '! 🔢';
    },
    quizEmpty: 'You opened Quiz - try solving number puzzles next time! 🧩',
    quizStruggled: function(info) {
      return info.correct > 0
        ? 'These numbers took an extra try (you got them!):'
        : 'These numbers needed another try:';
    },
    chaseEmpty: 'You opened Chase - tap the right number next time! 🎯'
  },
  speakItem: function(item) {
    return NUMBER_WORDS[item] || item;
  }
};
