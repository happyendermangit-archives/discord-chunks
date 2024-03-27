function(t, n, e) {
    "use strict";
    e.r(n), e.d(n, {
        SyncPromise: function() {
            return s
        }
    });
    var r, i, o = e("11979");
    (r = i || (i = {})).PENDING = "PENDING", r.RESOLVED = "RESOLVED", r.REJECTED = "REJECTED";
    var s = function() {
        function t(t) {
            var n = this;
            this._state = i.PENDING, this._handlers = [], this._resolve = function(t) {
                n._setResult(i.RESOLVED, t)
            }, this._reject = function(t) {
                n._setResult(i.REJECTED, t)
            }, this._setResult = function(t, e) {
                if (n._state === i.PENDING) {
                    if ((0, o.isThenable)(e)) {
                        e.then(n._resolve, n._reject);
                        return
                    }
                    n._state = t, n._value = e, n._executeHandlers()
                }
            }, this._attachHandler = function(t) {
                n._handlers = n._handlers.concat(t), n._executeHandlers()
            }, this._executeHandlers = function() {
                n._state !== i.PENDING && (n._state === i.REJECTED ? n._handlers.forEach(function(t) {
                    t.onrejected && t.onrejected(n._value)
                }) : n._handlers.forEach(function(t) {
                    t.onfulfilled && t.onfulfilled(n._value)
                }), n._handlers = [])
            };
            try {
                t(this._resolve, this._reject)
            } catch (t) {
                this._reject(t)
            }
        }
        return t.prototype.toString = function() {
            return "[object SyncPromise]"
        }, t.resolve = function(n) {
            return new t(function(t) {
                t(n)
            })
        }, t.reject = function(n) {
            return new t(function(t, e) {
                e(n)
            })
        }, t.all = function(n) {
            return new t(function(e, r) {
                if (!Array.isArray(n)) {
                    r(TypeError("Promise.all requires an array as input."));
                    return
                }
                if (0 === n.length) {
                    e([]);
                    return
                }
                var i = n.length,
                    o = [];
                n.forEach(function(n, s) {
                    t.resolve(n).then(function(t) {
                        o[s] = t, 0 == (i -= 1) && e(o)
                    }).then(null, r)
                })
            })
        }, t.prototype.then = function(n, e) {
            var r = this;
            return new t(function(t, i) {
                r._attachHandler({
                    onfulfilled: function(e) {
                        if (!n) {
                            t(e);
                            return
                        }
                        try {
                            t(n(e));
                            return
                        } catch (t) {
                            i(t);
                            return
                        }
                    },
                    onrejected: function(n) {
                        if (!e) {
                            i(n);
                            return
                        }
                        try {
                            t(e(n));
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
        }, t.prototype.finally = function(n) {
            var e = this;
            return new t(function(t, r) {
                var i, o;
                return e.then(function(t) {
                    o = !1, i = t, n && n()
                }, function(t) {
                    o = !0, i = t, n && n()
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