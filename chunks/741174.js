function(e) {
    function t(e, t, n, r, i, a, o) {
        try {
            var s = e[a](o),
                u = s.value
        } catch (e) {
            n(e);
            return
        }
        s.done ? t(u) : Promise.resolve(u).then(r, i)
    }
    e.exports = function(e) {
        return function() {
            var n = this,
                r = arguments;
            return new Promise(function(i, a) {
                var o = e.apply(n, r);

                function s(e) {
                    t(o, i, a, s, u, "next", e)
                }

                function u(e) {
                    t(o, i, a, s, u, "throw", e)
                }
                s(void 0)
            })
        }
    }, e.exports.__esModule = !0, e.exports.default = e.exports
}