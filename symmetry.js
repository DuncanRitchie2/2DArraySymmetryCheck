// My solution to this challenge on Edabit: https://edabit.com/challenge/3Z26nkfwANCBguJCu
// Input is a 2D array, whose elements are all arrays of the same length.

// Examples: 
//   [
//    ['a','b','c']
//   ]
//    is horizontally symmetric (trivially), but not vertically.
// 
//   [
//    ['d', 'a', 'a', 'a'],
//    ['b', 'b', 'a', 'a'],
//    ['d', 'a', 'a', 'a']
//   ]
//    is horizontally symmetric, but not vertically.
//
//   [
//    ['a','b','c','b','a'],
//    ['a','b','b','b','a'],
//    ['c','c','a','c','c'],
//    ['c','c','a','c','c'],
//    ['a','b','b','b','a']
//   ]
//    is vertically symmetric, but not horizontally.
//
//   [
//    ['a','b','c','b','a'],
//    ['a','b','b','b','a'],
//    ['c','c','a','c','c'],
//    ['c','c','a','c','c'],
//    ['a','b','b','b','a'],
//    ['a','b','c','b','a']
//   ]
//    is perfect, i.e. both horizontally and vertically symmetric.
//
//   [
//    ['a','b'],
//    ['a','c']
//   ]
//    is imperfect, i.e. neither horizontally nor vertically symmetric.


function isPatternHorizontallySymmetric(pattern) {
    let rows = pattern.length;
    // A pattern with no or one row is horizontally symmetric (trivially).
	if (rows <= 1) {
		return true;
    }
    // If there are plural rows, we check every row in the top half of the pattern against its mirror in the bottom half.
    // That is, we're checking pattern[i] against pattern[rows-i-1] where 'rows' is the number of rows.
    // If ever the two values for comparing differ, the pattern is not horizontally symmetric.
	let isSymmetric = true;
	let cols = pattern[0].length;
	for (let i = 0; i < (rows+1)/2; i++) {
		for (let j = 0; j < cols; j++) {
			if (pattern[i][j] !== pattern[rows-i-1][j]) {
				isSymmetric = false;
				break;
			}
		}
	}
	return isSymmetric;
}

function isPatternVerticallySymmetric(pattern) {
	let cols = pattern[0].length;
    // A pattern with no or one column is vertically symmetric (trivially).
	if (cols <= 1) {
		return true;
	}
    // If there are plural columns, we check every column in the left-hand half of the pattern against its mirror in the right-hand half.
    // If ever the two values for comparing differ, the pattern is not vertically symmetric.
	let isSymmetric = true;
	let rows = pattern.length;
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < (cols+1)/2; j++) {
			if (pattern[i][j] !== pattern[i][cols-j-1]) {
				isSymmetric = false;
				break;
			}
		}
	}
	return isSymmetric;
}

// classifyPattern() combines both functions above to return a string describing the pattern.
function classifyPattern(pattern) {
	let count = 0;
	if (isPatternHorizontallySymmetric(pattern)) {
		count += 1;
	}
	if (isPatternVerticallySymmetric(pattern)) {
		count += 2;
	}
	switch (count) {
		case 0:
			return "imperfect"; // I.e. the rug is neither horizontally nor vertically symmetric.
		case 1:
			return "horizontally symmetric"; // I.e. the rug is horizontally but not vertically symmetric.
		case 2:
			return "vertically symmetric"; // I.e. the rug is vertically but not horizontally symmetric.
		case 3:
			return "perfect"; // I.e. the rug is both horizontally and vertically symmetric.
	}
}