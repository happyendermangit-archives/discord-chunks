function(t) {
    var e = Object.prototype;
    t.exports = function(t) {
        var n = t && t.constructor;
        return t === ("function" == typeof n && n.prototype || e)
    }
}