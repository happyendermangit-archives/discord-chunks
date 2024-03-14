function(e, t, n) {
    "use strict";
    let i, s;
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    }), n("222007"), n("808653");
    var r = n("95410"),
        a = n("843455");
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
    let c = !1,
        f = {},
        _ = {},
        E = !1,
        h = !1;

    function g() {
        if (E) {
            r.default.remove(a.TOKEN_KEY), r.default.remove(a.TOKENS_KEY);
            return
        }
        null != s ? r.default.set(a.TOKEN_KEY, s) : r.default.remove(a.TOKEN_KEY), r.default.set(a.TOKENS_KEY, _)
    }

    function m(e) {
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

    function p(e) {
        return (null == u ? void 0 : u.isEncryptionAvailable()) && !e.startsWith(o) ? "".concat(o).concat(u.encryptString(e)) : e
    }
    var S = {
        init() {
            if (h) return;
            s = r.default.get(a.TOKEN_KEY), _ = r.default.get(a.TOKENS_KEY) || {};
            let {
                decryptedToken: e,
                wasEncrypted: t
            } = m(s);
            c = t, i = e, f = l(Object.entries(_).map(e => {
                let [t, n] = e, {
                    decryptedToken: i,
                    wasEncrypted: s
                } = m(n);
                return c = s || c, [t, i]
            }).filter(e => {
                let [t, n] = e;
                return null != n
            })), h = !0
        },
        getToken(e) {
            return (this.init(), null != e) ? f[e] : i
        },
        setToken(e, t) {
            if (null == e) {
                this.removeToken(t);
                return
            }
            i = e, null != t && (f[t] = e), c ? this.encryptAndStoreTokens() : (s = i, _ = f, g())
        },
        hideToken() {
            !E && (E = !0, g())
        },
        showToken() {
            E && (E = !1, g())
        },
        removeToken(e) {
            let t = i;
            null != e && (t = f[e], delete f[e], delete _[e]), t === i && (i = null, s = null), g()
        },
        encryptAndStoreTokens() {
            (null == u ? void 0 : u.isEncryptionAvailable()) ? (null != i && (s = p(i)), _ = l(Object.entries(f).map(e => {
                let [t, n] = e;
                return [t, p(n)]
            })), c = !0) : (s = i, _ = f), g()
        }
    }
}