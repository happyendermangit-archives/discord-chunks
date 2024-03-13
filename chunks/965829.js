function(e, t, n) {
    var r = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
    e.exports = function(e) {
        return e.match(r) || []
    }
}