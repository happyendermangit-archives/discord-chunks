function(e, t, n) {
    var r = {}.toString;
    e.exports = Array.isArray || function(e) {
        return "[object Array]" == r.call(e)
    }
}