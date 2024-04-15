function(e, t, n) {
    "use strict";
    let i, r;
    n.r(t), n.d(t, {
        encryptAndStoreTokens: function() {
            return C
        },
        getToken: function() {
            return m
        },
        hideToken: function() {
            return p
        },
        init: function() {
            return A
        },
        removeToken: function() {
            return R
        },
        setToken: function() {
            return N
        },
        showToken: function() {
            return O
        }
    }), n("47120"), n("724458");
    var s = n("433517"),
        a = n("231338");
    let o = "dQw4w9WgXcQ:";

    function l(e) {
        return [...e].reduce((e, t) => {
            let [n, i] = t;
            return e[n] = i, e
        }, {})
    }
    let u = null,
        d = window.DiscordNative;
    null != d && (u = d.safeStorage);
    let _ = !1,
        c = {},
        E = {},
        I = !1,
        T = !1;

    function f() {
        if (I) {
            s.Storage.remove(a.TOKEN_KEY), s.Storage.remove(a.TOKENS_KEY);
            return
        }
        null != r ? s.Storage.set(a.TOKEN_KEY, r) : s.Storage.remove(a.TOKEN_KEY), s.Storage.set(a.TOKENS_KEY, E)
    }

    function S(e) {
        return null == e || 0 === e.length ? {
            decryptedToken: null,
            wasEncrypted: !1
        } : (null == u ? void 0 : u.isEncryptionAvailable()) && e.startsWith(o) ? {
            decryptedToken: u.decryptString(e.substring(o.length)),
            wasEncrypted: !0
        } : {
            decryptedToken: e,
            wasEncrypted: !1
        }
    }

    function h(e) {
        return (null == u ? void 0 : u.isEncryptionAvailable()) && !e.startsWith(o) ? "".concat(o).concat(u.encryptString(e)) : e
    }

    function A() {
        if (T) return;
        r = s.Storage.get(a.TOKEN_KEY), E = s.Storage.get(a.TOKENS_KEY) || {};
        let {
            decryptedToken: e,
            wasEncrypted: t
        } = S(r);
        _ = t, i = e, c = l(Object.entries(E).map(e => {
            let [t, n] = e, {
                decryptedToken: i,
                wasEncrypted: r
            } = S(n);
            return _ = r || _, [t, i]
        }).filter(e => {
            let [t, n] = e;
            return null != n
        })), T = !0
    }

    function m(e) {
        return (A(), null != e) ? c[e] : i
    }

    function N(e, t) {
        if (null == e) {
            R(t);
            return
        }
        i = e, null != t && (c[t] = e), _ ? C() : (r = i, E = c, f())
    }

    function p() {
        !I && (I = !0, f())
    }

    function O() {
        I && (I = !1, f())
    }

    function R(e) {
        let t = i;
        null != e && (t = c[e], delete c[e], delete E[e]), t === i && (i = null, r = null), f()
    }

    function C() {
        (null == u ? void 0 : u.isEncryptionAvailable()) ? (null != i && (r = h(i)), E = l(Object.entries(c).map(e => {
            let [t, n] = e;
            return [t, h(n)]
        })), _ = !0) : (r = i, E = c), f()
    }
}