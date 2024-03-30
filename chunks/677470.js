function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        },
        deserializeChannel: function() {
            return u
        },
        deserializeChannelEntries: function() {
            return a
        }
    });
    var r = n("22287");

    function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function i(e) {
        var t = !0,
            n = !1,
            o = void 0;
        try {
            for (var i, a = e[Symbol.iterator](); !(t = (i = a.next()).done); t = !0) {
                var u = i.value.permissionOverwrites_;
                if (null != u)
                    for (var s in u) {
                        var l = u[s];
                        l.allow = r.deserialize(l.allow), l.deny = r.deserialize(l.deny)
                    }
            }
        } catch (e) {
            n = !0, o = e
        } finally {
            try {
                !t && null != a.return && a.return()
            } finally {
                if (n) throw o
            }
        }
    }

    function a(e) {
        var t = !0,
            n = !1,
            r = void 0;
        try {
            for (var a, u = e[Symbol.iterator](); !(t = (a = u.next()).done); t = !0) {
                var s, l, c = (s = a.value, l = 2, function(e) {
                        if (Array.isArray(e)) return e
                    }(s) || function(e, t) {
                        var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != o) {
                            var i = [],
                                a = !0,
                                u = !1;
                            try {
                                for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                            } catch (e) {
                                u = !0, r = e
                            } finally {
                                try {
                                    !a && null != o.return && o.return()
                                } finally {
                                    if (u) throw r
                                }
                            }
                            return i
                        }
                    }(s, l) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return o(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
                        }
                    }(s, l) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    f = (c[0], c[1]);
                i(f)
            }
        } catch (e) {
            n = !0, r = e
        } finally {
            try {
                !t && null != u.return && u.return()
            } finally {
                if (n) throw r
            }
        }
    }

    function u(e) {
        var t = e.permissionOverwrites_;
        if (null != t)
            for (var n in t) {
                var o = t[n];
                o.allow = r.deserialize(o.allow), o.deny = r.deserialize(o.deny)
            }
        return e
    }
}