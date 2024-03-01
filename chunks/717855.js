function(e, t, r) {
    var n = r("285162"),
        i = Object.create,
        o = function() {
            function e() {}
            return function(t) {
                if (!n(t)) return {};
                if (i) return i(t);
                e.prototype = t;
                var r = new e;
                return e.prototype = void 0, r
            }
        }();
    e.exports = o
}