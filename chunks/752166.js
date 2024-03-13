function(t, r, e) {
    var n = Object.prototype;
    t.exports = function(t) {
        var r = t && t.constructor;
        return t === ("function" == typeof r && r.prototype || n)
    }
}