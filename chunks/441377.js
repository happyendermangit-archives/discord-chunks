function(e, t, n) {
    n("860677"), n("70102");
    var r, i, o = n("912065").Buffer,
        s = n("463316"),
        a = n("408475"),
        c = n("58492"),
        u = n("127368"),
        d = n.g.crypto && n.g.crypto.subtle,
        l = {
            sha: "SHA-1",
            "sha-1": "SHA-1",
            sha1: "SHA-1",
            sha256: "SHA-256",
            "sha-256": "SHA-256",
            sha384: "SHA-384",
            "sha-384": "SHA-384",
            "sha-512": "SHA-512",
            sha512: "SHA-512"
        },
        f = [];

    function p() {
        return i ? i : i = n.g.process && n.g.process.nextTick ? n.g.process.nextTick : n.g.queueMicrotask ? n.g.queueMicrotask : n.g.setImmediate ? n.g.setImmediate : n.g.setTimeout
    }

    function h(e, t, n, r, i) {
        return d.importKey("raw", e, {
            name: "PBKDF2"
        }, !1, ["deriveBits"]).then(function(e) {
            return d.deriveBits({
                name: "PBKDF2",
                salt: t,
                iterations: n,
                hash: {
                    name: i
                }
            }, e, r << 3)
        }).then(function(e) {
            return o.from(e)
        })
    }
    e.exports = function(e, t, i, v, g, b) {
        "function" == typeof g && (b = g, g = void 0);
        var m = l[(g = g || "sha1").toLowerCase()];
        if (!m || "function" != typeof n.g.Promise) {
            p()(function() {
                var n;
                try {
                    n = c(e, t, i, v, g)
                } catch (e) {
                    return b(e)
                }
                b(null, n)
            });
            return
        }
        if (s(i, v), e = u(e, a, "Password"), t = u(t, a, "Salt"), "function" != typeof b) throw Error("No callback provided to pbkdf2");
        ! function(e, t) {
            e.then(function(e) {
                p()(function() {
                    t(null, e)
                })
            }, function(e) {
                p()(function() {
                    t(e)
                })
            })
        }((function(e) {
            if (n.g.process && !n.g.process.browser || !d || !d.importKey || !d.deriveBits) return Promise.resolve(!1);
            if (void 0 !== f[e]) return f[e];
            var t = h(r = r || o.alloc(8), r, 10, 128, e).then(function() {
                return !0
            }).catch(function() {
                return !1
            });
            return f[e] = t, t
        })(m).then(function(n) {
            return n ? h(e, t, i, v, m) : c(e, t, i, v, g)
        }), b)
    }
}