/* eslint-env es6 */
/* eslint-disable */
const cmp = {
    greater: function (a, b) {
        return a > b;
    },
    smaller: function (a, b) {
        return a < b;
    }
}

const isMultipleOf = {
    // is 'a' a multiple of 'b'
   m: function(a, b) { 
        if (a%b == 0 && a >= b){
            return true;
        }
        return false;
   }
}

const isBetween = (x, a, b) => {
    if (x >= a && x <= b) {
        return true
    }
    return false
}


module.exports = {cmp, isMultipleOf, isBetween}