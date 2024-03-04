function(e, t, n) {
    "use strict";
    var r, i = n("390493");

    function o(e, t, n) {
        return (t = function(e) {
            var t = function(e, t) {
                if ("object" != typeof e || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" != typeof r) return r;
                    throw TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" == typeof t ? t : String(t)
        }(t)) in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    n("70102");
    var s = n("362796"),
        a = Symbol("lastResolve"),
        c = Symbol("lastReject"),
        u = Symbol("error"),
        d = Symbol("ended"),
        l = Symbol("lastPromise"),
        f = Symbol("handlePromise"),
        p = Symbol("stream");

    function h(e, t) {
        return {
            value: e,
            done: t
        }
    }

    function v(e) {
        var t = e[a];
        if (null !== t) {
            var n = e[p].read();
            null !== n && (e[l] = null, e[a] = null, e[c] = null, t(h(n, !1)))
        }
    }

    function g(e) {
        i.nextTick(v, e)
    }
    var b = Object.getPrototypeOf(function() {}),
        m = Object.setPrototypeOf((o(r = {
            get stream() {
                return this[p]
            },
            next: function() {
                var e, t, n, r = this,
                    o = this[u];
                if (null !== o) return Promise.reject(o);
                if (this[d]) return Promise.resolve(h(void 0, !0));
                if (this[p].destroyed) return new Promise(function(e, t) {
                    i.nextTick(function() {
                        r[u] ? t(r[u]) : e(h(void 0, !0))
                    })
                });
                var s = this[l];
                if (s) {
                    ;
                    n = new Promise((e = s, t = this, function(n, r) {
                        e.then(function() {
                            if (t[d]) {
                                n(h(void 0, !0));
                                return
                            }
                            t[f](n, r)
                        }, r)
                    }))
                } else {
                    var a = this[p].read();
                    if (null !== a) return Promise.resolve(h(a, !1));
                    n = new Promise(this[f])
                }
                return this[l] = n, n
            }
        }, Symbol.asyncIterator, function() {
            return this
        }), o(r, "return", function() {
            var e = this;
            return new Promise(function(t, n) {
                e[p].destroy(null, function(e) {
                    if (e) {
                        n(e);
                        return
                    }
                    t(h(void 0, !0))
                })
            })
        }), r), b);
    e.exports = function(e) {
        var t, n = Object.create(m, (o(t = {}, p, {
            value: e,
            writable: !0
        }), o(t, a, {
            value: null,
            writable: !0
        }), o(t, c, {
            value: null,
            writable: !0
        }), o(t, u, {
            value: null,
            writable: !0
        }), o(t, d, {
            value: e._readableState.endEmitted,
            writable: !0
        }), o(t, f, {
            value: function(e, t) {
                var r = n[p].read();
                r ? (n[l] = null, n[a] = null, n[c] = null, e(h(r, !1))) : (n[a] = e, n[c] = t)
            },
            writable: !0
        }), t));
        return n[l] = null, s(e, function(e) {
            if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
                var t = n[c];
                null !== t && (n[l] = null, n[a] = null, n[c] = null, t(e)), n[u] = e;
                return
            }
            var r = n[a];
            null !== r && (n[l] = null, n[a] = null, n[c] = null, r(h(void 0, !0))), n[d] = !0
        }), e.on("readable", g.bind(null, n)), n
    }
}