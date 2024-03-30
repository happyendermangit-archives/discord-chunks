function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        encryptAndStoreTokens: function() {
            return R
        },
        getToken: function() {
            return v
        },
        hideToken: function() {
            return A
        },
        init: function() {
            return S
        },
        removeToken: function() {
            return N
        },
        setToken: function() {
            return g
        },
        showToken: function() {
            return b
        }
    });
    var r, o, i = n("242880"),
        a = n("563090");

    function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function s(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
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
        }(e, t) || l(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function l(e, t) {
        if (e) {
            if ("string" == typeof e) return u(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
        }
    }
    var c = "dQw4w9WgXcQ:";

    function f(e) {
        var t;
        return ((function(e) {
            if (Array.isArray(e)) return u(e)
        })(t = e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(t) || l(t) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()).reduce(function(e, t) {
            var n = s(t, 2),
                r = n[0],
                o = n[1];
            return e[r] = o, e
        }, {})
    }
    var d = null,
        _ = window.DiscordNative;
    null != _ && (d = _.safeStorage);
    var E = !1,
        p = {},
        m = {},
        y = !1,
        I = !1;

    function h() {
        if (y) {
            i.Storage.remove(a.TOKEN_KEY), i.Storage.remove(a.TOKENS_KEY);
            return
        }
        null != o ? i.Storage.set(a.TOKEN_KEY, o) : i.Storage.remove(a.TOKEN_KEY), i.Storage.set(a.TOKENS_KEY, m)
    }

    function O(e) {
        return null == e || 0 === e.length ? {
            decryptedToken: null,
            wasEncrypted: !1
        } : (null == d ? void 0 : d.isEncryptionAvailable()) && e.startsWith(c) ? {
            decryptedToken: d.decryptString(e.substring(c.length)),
            wasEncrypted: !0
        } : {
            decryptedToken: e,
            wasEncrypted: !1
        }
    }

    function T(e) {
        return (null == d ? void 0 : d.isEncryptionAvailable()) && !e.startsWith(c) ? "".concat(c).concat(d.encryptString(e)) : e
    }

    function S() {
        if (!I) {
            o = i.Storage.get(a.TOKEN_KEY), m = i.Storage.get(a.TOKENS_KEY) || {};
            var e = O(o),
                t = e.decryptedToken;
            E = e.wasEncrypted, r = t, p = f(Object.entries(m).map(function(e) {
                var t = s(e, 2),
                    n = t[0],
                    r = O(t[1]),
                    o = r.decryptedToken;
                return E = r.wasEncrypted || E, [n, o]
            }).filter(function(e) {
                var t = s(e, 2);
                return null != (t[0], t[1])
            })), I = !0
        }
    }

    function v(e) {
        return (S(), null != e) ? p[e] : r
    }

    function g(e, t) {
        if (null == e) {
            N(t);
            return
        }
        r = e, null != t && (p[t] = e), E ? R() : (o = r, m = p, h())
    }

    function A() {
        !y && (y = !0, h())
    }

    function b() {
        y && (y = !1, h())
    }

    function N(e) {
        var t = r;
        null != e && (t = p[e], delete p[e], delete m[e]), t === r && (r = null, o = null), h()
    }

    function R() {
        (null == d ? void 0 : d.isEncryptionAvailable()) ? (null != r && (o = T(r)), m = f(Object.entries(p).map(function(e) {
            var t = s(e, 2);
            return [t[0], T(t[1])]
        })), E = !0) : (o = r, m = p), h()
    }
}