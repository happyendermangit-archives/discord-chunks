function(e, t, n) {
    "use strict";
    n("426094"), n("70102"), n("424973"), n("843762");
    var r, a = "object" == typeof Reflect ? Reflect : null,
        o = a && "function" == typeof a.apply ? a.apply : function(e, t, n) {
            return Function.prototype.apply.call(e, t, n)
        };
    r = a && "function" == typeof a.ownKeys ? a.ownKeys : Object.getOwnPropertySymbols ? function(e) {
        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
    } : function(e) {
        return Object.getOwnPropertyNames(e)
    };
    var i = Number.isNaN || function(e) {
        return e != e
    };

    function s() {
        s.init.call(this)
    }
    e.exports = s, e.exports.once = function(e, t) {
        return new Promise(function(n, r) {
            function a(n) {
                e.removeListener(t, o), r(n)
            }

            function o() {
                "function" == typeof e.removeListener && e.removeListener("error", a), n([].slice.call(arguments))
            }
            _(e, t, o, {
                once: !0
            }), "error" !== t && function(e, t, n) {
                "function" == typeof e.on && _(e, "error", t, n)
            }(e, a, {
                once: !0
            })
        })
    }, s.EventEmitter = s, s.prototype._events = void 0, s.prototype._eventsCount = 0, s.prototype._maxListeners = void 0;
    var u = 10;

    function l(e) {
        if ("function" != typeof e) throw TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
    }

    function c(e) {
        return void 0 === e._maxListeners ? s.defaultMaxListeners : e._maxListeners
    }

    function d(e, t, n, r) {
        if (l(n), void 0 === (i = e._events) ? (i = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== i.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), i = e._events), s = i[t]), void 0 === s) s = i[t] = n, ++e._eventsCount;
        else if ("function" == typeof s ? s = i[t] = r ? [n, s] : [s, n] : r ? s.unshift(n) : s.push(n), (o = c(e)) > 0 && s.length > o && !s.warned) {
            s.warned = !0;
            var a, o, i, s, u = Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = s.length, a = u, console && console.warn && console.warn(a)
        }
        return e
    }

    function f() {
        if (!this.fired) return (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 == arguments.length) ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
    }

    function p(e, t, n) {
        var r = {
                fired: !1,
                wrapFn: void 0,
                target: e,
                type: t,
                listener: n
            },
            a = f.bind(r);
        return a.listener = n, r.wrapFn = a, a
    }

    function h(e, t, n) {
        var r = e._events;
        if (void 0 === r) return [];
        var a = r[t];
        return void 0 === a ? [] : "function" == typeof a ? n ? [a.listener || a] : [a] : n ? function(e) {
            for (var t = Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
            return t
        }(a) : y(a, a.length)
    }

    function m(e) {
        var t = this._events;
        if (void 0 !== t) {
            var n = t[e];
            if ("function" == typeof n) return 1;
            if (void 0 !== n) return n.length
        }
        return 0
    }

    function y(e, t) {
        for (var n = Array(t), r = 0; r < t; ++r) n[r] = e[r];
        return n
    }
    Object.defineProperty(s, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return u
        },
        set: function(e) {
            if ("number" != typeof e || e < 0 || i(e)) throw RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
            u = e
        }
    }), s.init = function() {
        (void 0 === this._events || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
    }, s.prototype.setMaxListeners = function(e) {
        if ("number" != typeof e || e < 0 || i(e)) throw RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
        return this._maxListeners = e, this
    }, s.prototype.getMaxListeners = function() {
        return c(this)
    }, s.prototype.emit = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
        var r = "error" === e,
            a = this._events;
        if (void 0 !== a) r = r && void 0 === a.error;
        else if (!r) return !1;
        if (r) {
            if (t.length > 0 && (i = t[0]), i instanceof Error) throw i;
            var i, s = Error("Unhandled error." + (i ? " (" + i.message + ")" : ""));
            throw s.context = i, s
        }
        var u = a[e];
        if (void 0 === u) return !1;
        if ("function" == typeof u) o(u, this, t);
        else {
            for (var l = u.length, c = y(u, l), n = 0; n < l; ++n) o(c[n], this, t)
        }
        return !0
    }, s.prototype.addListener = function(e, t) {
        return d(this, e, t, !1)
    }, s.prototype.on = s.prototype.addListener, s.prototype.prependListener = function(e, t) {
        return d(this, e, t, !0)
    }, s.prototype.once = function(e, t) {
        return l(t), this.on(e, p(this, e, t)), this
    }, s.prototype.prependOnceListener = function(e, t) {
        return l(t), this.prependListener(e, p(this, e, t)), this
    }, s.prototype.removeListener = function(e, t) {
        var n, r, a, o, i;
        if (l(t), void 0 === (r = this._events) || void 0 === (n = r[e])) return this;
        if (n === t || n.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));
        else if ("function" != typeof n) {
            for (a = -1, o = n.length - 1; o >= 0; o--)
                if (n[o] === t || n[o].listener === t) {
                    i = n[o].listener, a = o;
                    break
                } if (a < 0) return this;
            0 === a ? n.shift() : function(e, t) {
                for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                e.pop()
            }(n, a), 1 === n.length && (r[e] = n[0]), void 0 !== r.removeListener && this.emit("removeListener", e, i || t)
        }
        return this
    }, s.prototype.off = s.prototype.removeListener, s.prototype.removeAllListeners = function(e) {
        var t, n, r;
        if (void 0 === (n = this._events)) return this;
        if (void 0 === n.removeListener) return 0 == arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e]), this;
        if (0 == arguments.length) {
            var a, o = Object.keys(n);
            for (r = 0; r < o.length; ++r) "removeListener" !== (a = o[r]) && this.removeAllListeners(a);
            return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
        }
        if ("function" == typeof(t = n[e])) this.removeListener(e, t);
        else if (void 0 !== t)
            for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
        return this
    }, s.prototype.listeners = function(e) {
        return h(this, e, !0)
    }, s.prototype.rawListeners = function(e) {
        return h(this, e, !1)
    }, s.listenerCount = function(e, t) {
        return "function" == typeof e.listenerCount ? e.listenerCount(t) : m.call(e, t)
    }, s.prototype.listenerCount = m, s.prototype.eventNames = function() {
        return this._eventsCount > 0 ? r(this._events) : []
    };

    function _(e, t, n, r) {
        if ("function" == typeof e.on) r.once ? e.once(t, n) : e.on(t, n);
        else if ("function" == typeof e.addEventListener) e.addEventListener(t, function a(o) {
            r.once && e.removeEventListener(t, a), n(o)
        });
        else throw TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e)
    }
}