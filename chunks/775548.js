function(e, t, n) {
    "use strict";
    var r = n("29513");

    function i() {
        var e = {},
            t = 0,
            n = 0,
            r = 0;
        return {
            add: function(i, a) {
                !a && (a = i, i = 0), i > n ? n = i : i < r && (r = i), !e[i] && (e[i] = []), e[i].push(a), t++
            },
            process: function() {
                for (var t = r; t <= n; t++) {
                    for (var i = e[t], a = 0; a < i.length; a++)(0, i[a])()
                }
            },
            size: function() {
                return t
            }
        }
    }
    e.exports = function(e) {
        var t, n = (e = e || {}).reporter,
            a = r.getOption(e, "async", !0),
            o = r.getOption(e, "auto", !0);
        o && !a && (n && n.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."), a = !0);
        var s = i(),
            u = !1;

        function c() {
            for (u = !0; s.size();) {
                var e = s;
                s = i(), e.process()
            }
            u = !1
        }

        function l() {
            t = d(c)
        }

        function d(e) {
            return setTimeout(e, 0)
        }
        return {
            add: function(e, n) {
                !u && o && a && 0 === s.size() && function() {
                    t = d(c)
                }(), s.add(e, n)
            },
            force: function(e) {
                !u && (void 0 === e && (e = a), t && (function(e) {
                    clearTimeout(e)
                }(t), t = null), e ? function() {
                    t = d(c)
                }() : c())
            }
        }
    }
}