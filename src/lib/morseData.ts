// Morse Code Academy - Core Data & Translation Utilities

export interface MorseCharacter {
  char: string;
  morse: string;
  category: 'letter' | 'number' | 'punctuation' | 'prosign';
  name?: string;
  mnemonic?: string;
  exampleWord?: string;
}

export const MORSE_ALPHABET: Record<string, string> = {
  // Letters
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",

  // Numbers
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "0": "-----",

  // Punctuation & Symbols
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "'": ".----.",
  "!": "-.-.--",
  "/": "-..-.",
  "(": "-.--.",
  ")": "-.--.-",
  "&": ".-...",
  ":": "---...",
  ";": "-.-.-.",
  "=": "-...-",
  "+": ".-.-.",
  "-": "-....-",
  "_": "..--.-",
  "\"": ".-..-.",
  "$": "...-..-",
  "@": ".--.-.",
};

// Reverse lookup table
export const REVERSE_MORSE: Record<string, string> = Object.entries(
  MORSE_ALPHABET
).reduce((acc, [char, morse]) => {
  acc[morse] = char;
  return acc;
}, {} as Record<string, string>);

// Special procedural signals (prosigns)
export const PROSIGNS: Record<string, { morse: string; meaning: string }> = {
  SOS: { morse: "...---...", meaning: "International Distress Signal" },
  AR: { morse: ".-.-.", meaning: "End of transmission / Out" },
  AS: { morse: ".-...", meaning: "Wait / Stand by" },
  BK: { morse: "-...-.-", meaning: "Break / Interruption" },
  BT: { morse: "-...-", meaning: "New paragraph / Break" },
  CL: { morse: "-.-..-..", meaning: "Closing station" },
  CQ: { morse: "-.-. --.-", meaning: "Calling any station (General call)" },
  K: { morse: "-.-", meaning: "Invitation to transmit (Over)" },
  KN: { morse: "-.--.", meaning: "Invitation to transmit (specific station only)" },
  SK: { morse: "...-.-", meaning: "End of contact / Final sign-off" },
  HH: { morse: "........", meaning: "Error / Correction follows" },
};

// Rich character catalog for reference & study
export const MORSE_DIRECTORY: MorseCharacter[] = [
  // Letters
  { char: "A", morse: ".-", category: "letter", name: "Alpha", mnemonic: "a-BOUT", exampleWord: "Apple" },
  { char: "B", morse: "-...", category: "letter", name: "Bravo", mnemonic: "BEAT the drum hard", exampleWord: "Beacon" },
  { char: "C", morse: "-.-.", category: "letter", name: "Charlie", mnemonic: "CO-ca CO-la", exampleWord: "Cipher" },
  { char: "D", morse: "-..", category: "letter", name: "Delta", mnemonic: "DAN-ger-ous", exampleWord: "Dot" },
  { char: "E", morse: ".", category: "letter", name: "Echo", mnemonic: "eh (single dit, most common letter)", exampleWord: "Echo" },
  { char: "F", morse: "..-.", category: "letter", name: "Foxtrot", mnemonic: "fetch a FI-re", exampleWord: "Frequency" },
  { char: "G", morse: "--.", category: "letter", name: "Golf", mnemonic: "GOOD GRA-vy", exampleWord: "Ground" },
  { char: "H", morse: "....", category: "letter", name: "Hotel", mnemonic: "hip-pi-ty hop", exampleWord: "Ham" },
  { char: "I", morse: "..", category: "letter", name: "India", mnemonic: "in-it", exampleWord: "Impulse" },
  { char: "J", morse: ".---", category: "letter", name: "Juliett", mnemonic: "in JAWS JAWS JAWS", exampleWord: "Joule" },
  { char: "K", morse: "-.-", category: "letter", name: "Kilo", mnemonic: "KANG-a-ROO", exampleWord: "Key" },
  { char: "L", morse: ".-..", category: "letter", name: "Lima", mnemonic: "to LEM-on-ade", exampleWord: "Loop" },
  { char: "M", morse: "--", category: "letter", name: "Mike", mnemonic: "MAIL MAN", exampleWord: "Modulation" },
  { char: "N", morse: "-.", category: "letter", name: "November", mnemonic: "NA-vy", exampleWord: "Node" },
  { char: "O", morse: "---", category: "letter", name: "Oscar", mnemonic: "OH MY GOD", exampleWord: "Oscillator" },
  { char: "P", morse: ".--.", category: "letter", name: "Papa", mnemonic: "a PEEK-ing PUP", exampleWord: "Pulse" },
  { char: "Q", morse: "--.-", category: "letter", name: "Quebec", mnemonic: "GOD SAVE the QUEEN", exampleWord: "Quartz" },
  { char: "R", morse: ".-.", category: "letter", name: "Romeo", mnemonic: "ro-TA-tion", exampleWord: "Radio" },
  { char: "S", morse: "...", category: "letter", name: "Sierra", mnemonic: "si-er-ra", exampleWord: "Signal" },
  { char: "T", morse: "-", category: "letter", name: "Tango", mnemonic: "TALL (single dah)", exampleWord: "Telegraph" },
  { char: "U", morse: "..-", category: "letter", name: "Uniform", mnemonic: "un-der WHERE", exampleWord: "Ultra" },
  { char: "V", morse: "...-", category: "letter", name: "Victor", mnemonic: "vic-to-ry V", exampleWord: "Vail" },
  { char: "W", morse: ".--", category: "letter", name: "Whiskey", mnemonic: "with WHITE WINE", exampleWord: "Wave" },
  { char: "X", morse: "-..-", category: "letter", name: "X-ray", mnemonic: "X MARKS the SPOT", exampleWord: "Xenon" },
  { char: "Y", morse: "-.--", category: "letter", name: "Yankee", mnemonic: "YEL-low YO-YO", exampleWord: "Yagi" },
  { char: "Z", morse: "--..", category: "letter", name: "Zulu", mnemonic: "ZIN-C ROO-fer", exampleWord: "Zero" },

  // Numbers
  { char: "1", morse: ".----", category: "number", name: "One", mnemonic: "One dit, four dahs" },
  { char: "2", morse: "..---", category: "number", name: "Two", mnemonic: "Two dits, three dahs" },
  { char: "3", morse: "...--", category: "number", name: "Three", mnemonic: "Three dits, two dahs" },
  { char: "4", morse: "....-", category: "number", name: "Four", mnemonic: "Four dits, one dah" },
  { char: "5", morse: ".....", category: "number", name: "Five", mnemonic: "Five dits" },
  { char: "6", morse: "-....", category: "number", name: "Six", mnemonic: "One dah, four dits" },
  { char: "7", morse: "--...", category: "number", name: "Seven", mnemonic: "Two dahs, three dits" },
  { char: "8", morse: "---..", category: "number", name: "Eight", mnemonic: "Three dahs, two dits" },
  { char: "9", morse: "----.", category: "number", name: "Nine", mnemonic: "Four dahs, one dit" },
  { char: "0", morse: "-----", category: "number", name: "Zero", mnemonic: "Five dahs" },

  // Punctuation & Symbols
  { char: ".", morse: ".-.-.-", category: "punctuation", name: "Period / Full Stop", mnemonic: "dit-dah-dit-dah-dit-dah" },
  { char: ",", morse: "--..--", category: "punctuation", name: "Comma", mnemonic: "dah-dah-dit-dit-dah-dah" },
  { char: "?", morse: "..--..", category: "punctuation", name: "Question Mark", mnemonic: "dit-dit-dah-dah-dit-dit" },
  { char: "!", morse: "-.-.--", category: "punctuation", name: "Exclamation Mark", mnemonic: "dah-dit-dah-dit-dah-dah" },
  { char: "'", morse: ".----.", category: "punctuation", name: "Apostrophe / Single Quote", mnemonic: "dit-dah-dah-dah-dah-dit" },
  { char: "/", morse: "-..-.", category: "punctuation", name: "Slash / Fraction Bar", mnemonic: "dah-dit-dit-dah-dit" },
  { char: "(", morse: "-.--.", category: "punctuation", name: "Open Parenthesis", mnemonic: "dah-dit-dah-dah-dit" },
  { char: ")", morse: "-.--.-", category: "punctuation", name: "Close Parenthesis", mnemonic: "dah-dit-dah-dah-dit-dah" },
  { char: "&", morse: ".-...", category: "punctuation", name: "Ampersand", mnemonic: "dit-dah-dit-dit-dit" },
  { char: ":", morse: "---...", category: "punctuation", name: "Colon", mnemonic: "dah-dah-dah-dit-dit-dit" },
  { char: ";", morse: "-.-.-.", category: "punctuation", name: "Semicolon", mnemonic: "dah-dit-dah-dit-dah-dit" },
  { char: "=", morse: "-...-", category: "punctuation", name: "Equals Sign", mnemonic: "dah-dit-dit-dit-dah" },
  { char: "+", morse: ".-.-.", category: "punctuation", name: "Plus Sign", mnemonic: "dit-dah-dit-dah-dit" },
  { char: "-", morse: "-....-", category: "punctuation", name: "Hyphen / Dash", mnemonic: "dah-dit-dit-dit-dit-dah" },
  { char: "_", morse: "..--.-", category: "punctuation", name: "Underscore", mnemonic: "dit-dit-dah-dah-dit-dah" },
  { char: "\"", morse: ".-..-.", category: "punctuation", name: "Quotation Mark", mnemonic: "dit-dah-dit-dit-dah-dit" },
  { char: "$", morse: "...-..-", category: "punctuation", name: "Dollar Sign", mnemonic: "dit-dit-dit-dah-dit-dit-dah" },
  { char: "@", morse: ".--.-.", category: "punctuation", name: "At Sign", mnemonic: "dit-dah-dah-dit-dah-dit" },
];

/**
 * Encodes plain text into Morse code string
 * Words are separated by ' / ' and letters are separated by ' '
 */
export function encodeTextToMorse(text: string): { morse: string; unmapped: string[] } {
  if (!text) return { morse: "", unmapped: [] };

  const unmapped: string[] = [];
  const words = text.trim().split(/\s+/);

  const encodedWords = words.map((word) => {
    const chars = Array.from(word.toUpperCase());
    const encodedChars = chars
      .map((c) => {
        if (MORSE_ALPHABET[c]) {
          return MORSE_ALPHABET[c];
        } else {
          if (!unmapped.includes(c)) unmapped.push(c);
          return `[#${c}?]`;
        }
      })
      .filter(Boolean);
    return encodedChars.join(" ");
  });

  return {
    morse: encodedWords.join(" / "),
    unmapped,
  };
}

/**
 * Decodes a Morse code string back into plain text
 * Understands both ' / ' and '   ' (3 spaces) as word boundaries
 * and single spaces as letter boundaries.
 */
export function decodeMorseToText(morse: string): { text: string; invalidTokens: string[] } {
  if (!morse) return { text: "", invalidTokens: [] };

  const invalidTokens: string[] = [];

  // Normalize slash and multiple spaces
  const normalized = morse
    .trim()
    .replace(/\s*\/\s*/g, " / ")
    .replace(/\s{3,}/g, " / ");

  const words = normalized.split(" / ");

  const decodedWords = words.map((word) => {
    const tokens = word.trim().split(/\s+/);
    const decodedChars = tokens
      .map((token) => {
        if (!token) return "";
        // Clean token of inadvertent non-morse chars
        const clean = token.replace(/[^.\-]/g, "");
        if (REVERSE_MORSE[clean]) {
          return REVERSE_MORSE[clean];
        } else if (clean.length > 0) {
          if (!invalidTokens.includes(token)) invalidTokens.push(token);
          return `?`;
        }
        return "";
      })
      .join("");
    return decodedChars;
  });

  return {
    text: decodedWords.join(" "),
    invalidTokens,
  };
}

/**
 * Compute audio timing according to Paris standard (50 units = 1 word "PARIS")
 * 1 dit = 1200 / WPM milliseconds
 */
export function getDitDurationMs(wpm: number = 18): number {
  const safeWpm = Math.max(5, Math.min(40, wpm));
  return 1200 / safeWpm;
}
