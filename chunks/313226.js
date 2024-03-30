function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        SyncPromise: function() {
            return s
        }
    });
    var r, i, o = n("11979");
    (r = i || (i = {})).PENDING = "PENDING", r.RESOLVED = "RESOLVED", r.REJECTED = "REJECTED";
    var s = function() {
        function t(t) {
            var e = this;
            this._state = i.PENDING, this._handlers = [], this._resolve = function(t) {
                e._setResult(i.RESOLVED, t)
            }, this._reject = function(t) {
                e._setResult(i.REJECTED, t)
            }, this._setResult = function(t, n) {
                if (e._state === i.PENDING) {
                    if ((0, o.isThenable)(n)) {
                        n.then(e._resolve, e._reject);
                        return
                    }
                    e._state = t, e._value = n, e._executeHandlers()
                }
            }, this._attachHandler = function(t) {
                e._handlers = e._handlers.concat(t), e._executeHandlers()
            }, this._executeHandlers = function() {
                e._state !== i.PENDING && (e._state === i.REJECTED ? e._handlers.forEach(function(t) {
                    t.onrejected && t.onrejected(e._value)
                }) : e._handlers.forEach(function(t) {
                    t.onfulfilled && t.onfulfilled(e._value)
                }), e._handlers = [])
            };
            try {
                t(this._resolve, this._reject)
            } catch (t) {
                this._reject(t)
            }
        }
        return t.prototype.toString = function() {
            return "[object SyncPromise]"
        }, t.resolve = function(e) {
            return new t(function(t) {
                t(e)
            })
        }, t.reject = function(e) {
            return new t(function(t, n) {
                n(e)
            })
        }, t.all = function(e) {
            return new t(function(n, r) {
                if (!Array.isArray(e)) {
                    r(TypeError("Promise.all requires an array as input."));
                    return
                }
                if (0 === e.length) {
                    n([]);
                    return
                }
                var i = e.length,
                    o = [];
                e.forEach(function(e, s) {
                    t.resolve(e).then(function(t) {
                        o[s] = t, 0 == (i -= 1) && n(o)
                    }).then(null, r)
                })
            })
        }, t.prototype.then = function(e, n) {
            var r = this;
            return new t(function(t, i) {
                r._attachHandler({
                    onfulfilled: function(n) {
                        if (!e) {
                            t(n);
                            return
                        }
                        try {
                            t(e(n));
                            return
                        } catch (t) {
                            i(t);
                            return
                        }
                    },
                    onrejected: function(e) {
                        if (!n) {
                            i(e);
                            return
                        }
                        try {
                            t(n(e));
                            return
                        } catch (t) {
                            i(t);
                            return
                        }
                    }
                })
            })
        }, t.prototype.catch = function(t) {
            return this.then(function(t) {
                return t
            }, t)
        }, t.prototype.finally = function(e) {
            var n = this;
            return new t(function(t, r) {
                var i, o;
                return n.then(function(t) {
                    o = !1, i = t, e && e()
                }, function(t) {
                    o = !0, i = t, e && e()
                }).then(function() {
                    if (o) {
                        r(i);
                        return
                    }
                    t(i)
                })
            })
        }, t
    }()
}