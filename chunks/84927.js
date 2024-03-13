function(e, t, n) {
    var r = /\s/;
    e.exports = function(e) {
        for (var t = e.length; t-- && r.test(e.charAt(t)););
        return t
    }
}