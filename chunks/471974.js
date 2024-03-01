function(t, e, s) {
    "use strict";
    var r, i = s("390493");

    function n(t, e, s) {
        return (e = function(t) {
            var e = function(t, e) {
                if ("object" != typeof t || null === t) return t;
                var s = t[Symbol.toPrimitive];
                if (void 0 !== s) {
                    var r = s.call(t, e || "default");
                    if ("object" != typeof r) return r;
                    throw TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(t, "string");
            return "symbol" == typeof e ? e : String(e)
        }(e)) in t ? Object.defineProperty(t, e, {
            value: s,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = s, t
    }
    s("70102");
    var c = s("362796"),
        o = Symbol("lastResolve"),
        f = Symbol("lastReject"),
        u = Symbol("error"),
        a = Symbol("ended"),
        d = Symbol("lastPromise"),
        p = Symbol("handlePromise"),
        b = Symbol("stream");

    function h(t, e) {
        return {
            value: t,
            done: e
        }
    }

    function l(t) {
        var e = t[o];
        if (null !== e) {
            var s = t[b].read();
            null !== s && (t[d] = null, t[o] = null, t[f] = null, e(h(s, !1)))
        }
    }

    function g(t) {
        i.nextTick(l, t)
    }
    var v = Object.getPrototypeOf(function() {}),
        x = Object.setPrototypeOf((n(r = {
            get stream() {
                return this[b]
            },
            next: function() {
                var t, e, s, r = this,
                    n = this[u];
                if (null !== n) return Promise.reject(n);
                if (this[a]) return Promise.resolve(h(void 0, !0));
                if (this[b].destroyed) return new Promise(function(t, e) {
                    i.nextTick(function() {
                        r[u] ? e(r[u]) : t(h(void 0, !0))
                    })
                });
                var c = this[d];
                if (c) {
                    ;
                    s = new Promise((t = c, e = this, function(s, r) {
                        t.then(function() {
                            if (e[a]) {
                                s(h(void 0, !0));
                                return
                            }
                            e[p](s, r)
                        }, r)
                    }))
                } else {
                    var o = this[b].read();
                    if (null !== o) return Promise.resolve(h(o, !1));
                    s = new Promise(this[p])
                }
                return this[d] = s, s
            }
        }, Symbol.asyncIterator, function() {
            return this
        }), n(r, "return", function() {
            var t = this;
            return new Promise(function(e, s) {
                t[b].destroy(null, function(t) {
                    if (t) {
                        s(t);
                        return
                    }
                    e(h(void 0, !0))
                })
            })
        }), r), v);
    t.exports = function(t) {
        var e, s = Object.create(x, (n(e = {}, b, {
            value: t,
            writable: !0
        }), n(e, o, {
            value: null,
            writable: !0
        }), n(e, f, {
            value: null,
            writable: !0
        }), n(e, u, {
            value: null,
            writable: !0
        }), n(e, a, {
            value: t._readableState.endEmitted,
            writable: !0
        }), n(e, p, {
            value: function(t, e) {
                var r = s[b].read();
                r ? (s[d] = null, s[o] = null, s[f] = null, t(h(r, !1))) : (s[o] = t, s[f] = e)
            },
            writable: !0
        }), e));
        return s[d] = null, c(t, function(t) {
            if (t && "ERR_STREAM_PREMATURE_CLOSE" !== t.code) {
                var e = s[f];
                null !== e && (s[d] = null, s[o] = null, s[f] = null, e(t)), s[u] = t;
                return
            }
            var r = s[o];
            null !== r && (s[d] = null, s[o] = null, s[f] = null, r(h(void 0, !0))), s[a] = !0
        }), t.on("readable", g.bind(null, s)), s
    }
}