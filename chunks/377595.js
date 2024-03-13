function(e, t, n) {
    var r = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
    e.exports = function(e) {
        return r.test(e)
    }
}