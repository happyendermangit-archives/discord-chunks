function(e, t, r) {
    var n = /\s/;
    e.exports = function(e) {
        for (var t = e.length; t-- && n.test(e.charAt(t)););
        return t
    }
}