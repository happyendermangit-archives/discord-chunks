function(e, t, n) {
    "use strict";
    var r, i = n("444675");

    function a(e, t, n) {
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
    var o = n("133495"),
        s = Symbol("lastResolve"),
        u = Symbol("lastReject"),
        c = Symbol("error"),
        l = Symbol("ended"),
        d = Symbol("lastPromise"),
        f = Symbol("handlePromise"),
        p = Symbol("stream");

    function h(e, t) {
        return {
            value: e,
            done: t
        }
    }

    function m(e) {
        var t = e[s];
        if (null !== t) {
            var n = e[p].read();
            null !== n && (e[d] = null, e[s] = null, e[u] = null, t(h(n, !1)))
        }
    }

    function g(e) {
        i.nextTick(m, e)
    }
    var _ = Object.getPrototypeOf(function() {}),
        b = Object.setPrototypeOf((a(r = {
            get stream() {
                return this[p]
            },
            next: function() {
                var e, t, n, r = this,
                    a = this[c];
                if (null !== a) return Promise.reject(a);
                if (this[l]) return Promise.resolve(h(void 0, !0));
                if (this[p].destroyed) return new Promise(function(e, t) {
                    i.nextTick(function() {
                        r[c] ? t(r[c]) : e(h(void 0, !0))
                    })
                });
                var o = this[d];
                if (o) {
                    ;
                    n = new Promise((e = o, t = this, function(n, r) {
                        e.then(function() {
                            if (t[l]) {
                                n(h(void 0, !0));
                                return
                            }
                            t[f](n, r)
                        }, r)
                    }))
                } else {
                    var s = this[p].read();
                    if (null !== s) return Promise.resolve(h(s, !1));
                    n = new Promise(this[f])
                }
                return this[d] = n, n
            }
        }, Symbol.asyncIterator, function() {
            return this
        }), a(r, "return", function() {
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
        }), r), _);
    e.exports = function(e) {
        var t, n = Object.create(b, (a(t = {}, p, {
            value: e,
            writable: !0
        }), a(t, s, {
            value: null,
            writable: !0
        }), a(t, u, {
            value: null,
            writable: !0
        }), a(t, c, {
            value: null,
            writable: !0
        }), a(t, l, {
            value: e._readableState.endEmitted,
            writable: !0
        }), a(t, f, {
            value: function(e, t) {
                var r = n[p].read();
                r ? (n[d] = null, n[s] = null, n[u] = null, e(h(r, !1))) : (n[s] = e, n[u] = t)
            },
            writable: !0
        }), t));
        return n[d] = null, o(e, function(e) {
            if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
                var t = n[u];
                null !== t && (n[d] = null, n[s] = null, n[u] = null, t(e)), n[c] = e;
                return
            }
            var r = n[s];
            null !== r && (n[d] = null, n[s] = null, n[u] = null, r(h(void 0, !0))), n[l] = !0
        }), e.on("readable", g.bind(null, n)), n
    }
}