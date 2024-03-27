function(e, t, n) {
    var r, i, a = n("957578").Buffer,
        o = n("180756"),
        s = n("138031"),
        u = n("275227"),
        c = n("871230"),
        l = n.g.crypto && n.g.crypto.subtle,
        d = {
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
        return l.importKey("raw", e, {
            name: "PBKDF2"
        }, !1, ["deriveBits"]).then(function(e) {
            return l.deriveBits({
                name: "PBKDF2",
                salt: t,
                iterations: n,
                hash: {
                    name: i
                }
            }, e, r << 3)
        }).then(function(e) {
            return a.from(e)
        })
    }
    e.exports = function(e, t, i, m, g, _) {
        "function" == typeof g && (_ = g, g = void 0);
        var b = d[(g = g || "sha1").toLowerCase()];
        if (!b || "function" != typeof n.g.Promise) {
            p()(function() {
                var n;
                try {
                    n = u(e, t, i, m, g)
                } catch (e) {
                    return _(e)
                }
                _(null, n)
            });
            return
        }
        if (o(i, m), e = c(e, s, "Password"), t = c(t, s, "Salt"), "function" != typeof _) throw Error("No callback provided to pbkdf2");
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
            if (n.g.process && !n.g.process.browser || !l || !l.importKey || !l.deriveBits) return Promise.resolve(!1);
            if (void 0 !== f[e]) return f[e];
            var t = h(r = r || a.alloc(8), r, 10, 128, e).then(function() {
                return !0
            }).catch(function() {
                return !1
            });
            return f[e] = t, t
        })(b).then(function(n) {
            return n ? h(e, t, i, m, b) : u(e, t, i, m, g)
        }), _)
    }
}