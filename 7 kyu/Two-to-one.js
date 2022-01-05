/* eslint-disable no-unused-vars */

/*
Take 2 strings s1 and s2 including only letters from a to z.
Return a new sorted string, the longest possible, containing distinct letters -
each taken only once - coming from s1 or s2.
*/

const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join('');

/*
1) copying function parameters using ... (spread syntax) into one array;
2) object Set() returns an array without duplicate characters;
3) sorting array by naming (from a to z) with .sort() method;
4) unite array elements and create string with .join('') method without comas;
*/
