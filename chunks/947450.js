function(e, t, n) {
    var r = n("952133"),
        i = Object.create,
        o = function() {
            function e() {}
            return function(t) {
                if (!r(t)) return {};
                if (i) return i(t);
                e.prototype = t;
                var n = new e;
                return e.prototype = void 0, n
            }
        }();
    e.exports = o
}