function reverse(str, start, end) {
    const begining = str.slice(0, start);
    const middle = str.slice(start + 1, end);
    const ending = str.slice(end + 1);
    let reversed = `${begining}${str[end]}${middle}${str[start]}${ending}`;
    if (start >= Math.floor(str.length / 2)) {
      return str;  
    }
    return reverse(reversed, ++start, --end);
}

// My solution is working, but it's horrible. 
// Here's the solution from the course
function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}

const str = '12345678';
console.log(reverse(str, 0, str.length-1));