function(e, t, n) {
    var r = Object.prototype;
    e.exports = function(e) {
        var t = e && e.constructor;
        return e === ("function" == typeof t && t.prototype || r)
    }
}