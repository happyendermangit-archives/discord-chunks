function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        hasUserTrialOfferExpired: function() {
            return c
        },
        useTrialOffer: function() {
            return f
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("945816"),
        a = n("208454"),
        u = n("432683"),
        s = n("830721");

    function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function c(e) {
        return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
    }

    function f(e) {
        var t, n, f = (0, o.useStateFromStores)([u.default], function() {
            return u.default.getUserTrialOffer(e)
        });
        var d = (t = r.useState(c(f)), n = 2, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
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
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return l(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            _ = d[0],
            E = d[1],
            p = (0, o.useStateFromStores)([a.default], function() {
                return (0, s.isPremium)(a.default.getCurrentUser())
            });
        return r.useEffect(function() {
            if (null != f && null != f.expires_at) {
                var e = new i.Timeout,
                    t = function() {
                        var n = null != f.expires_at ? Date.parse(f.expires_at) - Date.now() : 0;
                        null == e || e.start(n, function() {
                            !_ && c(f) ? E(!0) : t()
                        })
                    };
                return t(),
                    function() {
                        return e.stop()
                    }
            }
        }, [_, f]), _ || p ? null : f
    }
}