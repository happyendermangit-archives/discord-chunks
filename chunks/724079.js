function(e, t, n) {
    "use strict";
    n("424973");
    var i = n("590484");

    function r() {
        var e = {},
            t = 0,
            n = 0,
            i = 0;
        return {
            add: function(r, o) {
                !o && (o = r, r = 0), r > n ? n = r : r < i && (i = r), !e[r] && (e[r] = []), e[r].push(o), t++
            },
            process: function() {
                for (var t = i; t <= n; t++) {
                    for (var r = e[t], o = 0; o < r.length; o++)(0, r[o])()
                }
            },
            size: function() {
                return t
            }
        }
    }
    e.exports = function(e) {
        var t, n = (e = e || {}).reporter,
            o = i.getOption(e, "async", !0),
            a = i.getOption(e, "auto", !0);
        a && !o && (n && n.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."), o = !0);
        var s = r(),
            l = !1;

        function c() {
            for (l = !0; s.size();) {
                var e = s;
                s = r(), e.process()
            }
            l = !1
        }

        function d() {
            t = u(c)
        }

        function u(e) {
            return setTimeout(e, 0)
        }
        return {
            add: function(e, n) {
                !l && a && o && 0 === s.size() && function() {
                    t = u(c)
                }(), s.add(e, n)
            },
            force: function(e) {
                !l && (void 0 === e && (e = o), t && (function(e) {
                    clearTimeout(e)
                }(t), t = null), e ? function() {
                    t = u(c)
                }() : c())
            }
        }
    }
}