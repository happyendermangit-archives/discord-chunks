function(e, t, r) {
    var n = r("285162"),
        u = Object.create,
        a = function() {
            function e() {}
            return function(t) {
                if (!n(t)) return {};
                if (u) return u(t);
                e.prototype = t;
                var r = new e;
                return e.prototype = void 0, r
            }
        }();
    e.exports = a
}