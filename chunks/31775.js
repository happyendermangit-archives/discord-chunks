function(e, t, n) {
    e.exports = l;
    var r, i = n("54673"),
        a = n("435210"),
        o = n("465170"),
        s = {};

    function u(e, t, n) {
        var i;
        return (s[t] ? i = s[t] : (i = r(t), s[t] = i), 2 == arguments.length) ? e[i] : (e[i] = n, n)
    }

    function c() {
        return 1
    }

    function l(e) {
        if (!(this instanceof l)) return new l(e);
        "number" == typeof e && (e = {
            max: e
        }), !e && (e = {});
        var t = u(this, "max", e.max);
        (!t || "number" != typeof t || t <= 0) && u(this, "max", 1 / 0);
        var n = e.length || c;
        "function" != typeof n && (n = c), u(this, "lengthCalculator", n), u(this, "allowStale", e.stale || !1), u(this, "maxAge", e.maxAge || 0), u(this, "dispose", e.dispose), this.reset()
    }

    function d(e, t, n, r) {
        var i = n.value;
        p(e, i) && (m(e, n), !u(e, "allowStale") && (i = void 0)), i && t.call(r, i.value, i.key, e)
    }

    function f(e, t, n) {
        var r = u(e, "cache").get(t);
        if (r) {
            var i = r.value;
            p(e, i) ? (m(e, r), !u(e, "allowStale") && (i = void 0)) : n && u(e, "lruList").unshiftNode(r), i && (i = i.value)
        }
        return i
    }

    function p(e, t) {
        if (!t || !t.maxAge && !u(e, "maxAge")) return !1;
        var n = !1,
            r = Date.now() - t.now;
        return n = t.maxAge ? r > t.maxAge : u(e, "maxAge") && r > u(e, "maxAge")
    }

    function h(e) {
        if (u(e, "length") > u(e, "max"))
            for (var t = u(e, "lruList").tail; u(e, "length") > u(e, "max") && null !== t;) {
                var n = t.prev;
                m(e, t), t = n
            }
    }

    function m(e, t) {
        if (t) {
            var n = t.value;
            u(e, "dispose") && u(e, "dispose").call(this, n.key, n.value), u(e, "length", u(e, "length") - n.length), u(e, "cache").delete(n.key), u(e, "lruList").removeNode(t)
        }
    }

    function g(e, t, n, r, i) {
        this.key = e, this.value = t, this.length = n, this.now = r, this.maxAge = i || 0
    }
    r = "function" == typeof Symbol ? function(e) {
        return Symbol.for(e)
    } : function(e) {
        return "_" + e
    }, Object.defineProperty(l.prototype, "max", {
        set: function(e) {
            (!e || "number" != typeof e || e <= 0) && (e = 1 / 0), u(this, "max", e), h(this)
        },
        get: function() {
            return u(this, "max")
        },
        enumerable: !0
    }), Object.defineProperty(l.prototype, "allowStale", {
        set: function(e) {
            u(this, "allowStale", !!e)
        },
        get: function() {
            return u(this, "allowStale")
        },
        enumerable: !0
    }), Object.defineProperty(l.prototype, "maxAge", {
        set: function(e) {
            (!e || "number" != typeof e || e < 0) && (e = 0), u(this, "maxAge", e), h(this)
        },
        get: function() {
            return u(this, "maxAge")
        },
        enumerable: !0
    }), Object.defineProperty(l.prototype, "lengthCalculator", {
        set: function(e) {
            "function" != typeof e && (e = c), e !== u(this, "lengthCalculator") && (u(this, "lengthCalculator", e), u(this, "length", 0), u(this, "lruList").forEach(function(e) {
                e.length = u(this, "lengthCalculator").call(this, e.value, e.key), u(this, "length", u(this, "length") + e.length)
            }, this)), h(this)
        },
        get: function() {
            return u(this, "lengthCalculator")
        },
        enumerable: !0
    }), Object.defineProperty(l.prototype, "length", {
        get: function() {
            return u(this, "length")
        },
        enumerable: !0
    }), Object.defineProperty(l.prototype, "itemCount", {
        get: function() {
            return u(this, "lruList").length
        },
        enumerable: !0
    }), l.prototype.rforEach = function(e, t) {
        t = t || this;
        for (var n = u(this, "lruList").tail; null !== n;) {
            var r = n.prev;
            d(this, e, n, t), n = r
        }
    }, l.prototype.forEach = function(e, t) {
        t = t || this;
        for (var n = u(this, "lruList").head; null !== n;) {
            var r = n.next;
            d(this, e, n, t), n = r
        }
    }, l.prototype.keys = function() {
        return u(this, "lruList").toArray().map(function(e) {
            return e.key
        }, this)
    }, l.prototype.values = function() {
        return u(this, "lruList").toArray().map(function(e) {
            return e.value
        }, this)
    }, l.prototype.reset = function() {
        u(this, "dispose") && u(this, "lruList") && u(this, "lruList").length && u(this, "lruList").forEach(function(e) {
            u(this, "dispose").call(this, e.key, e.value)
        }, this), u(this, "cache", new i), u(this, "lruList", new o), u(this, "length", 0)
    }, l.prototype.dump = function() {
        return u(this, "lruList").map(function(e) {
            if (!p(this, e)) return {
                k: e.key,
                v: e.value,
                e: e.now + (e.maxAge || 0)
            }
        }, this).toArray().filter(function(e) {
            return e
        })
    }, l.prototype.dumpLru = function() {
        return u(this, "lruList")
    }, l.prototype.inspect = function(e, t) {
        var n = "LRUCache {",
            r = !1;
        u(this, "allowStale") && (n += "\n  allowStale: true", r = !0);
        var i = u(this, "max");
        i && i !== 1 / 0 && (r && (n += ","), n += "\n  max: " + a.inspect(i, t), r = !0);
        var o = u(this, "maxAge");
        o && (r && (n += ","), n += "\n  maxAge: " + a.inspect(o, t), r = !0);
        var s = u(this, "lengthCalculator");
        s && s !== c && (r && (n += ","), n += "\n  length: " + a.inspect(u(this, "length"), t), r = !0);
        var l = !1;
        return u(this, "lruList").forEach(function(e) {
            l ? n += ",\n  " : (r && (n += ",\n"), l = !0, n += "\n  ");
            var i = a.inspect(e.key).split("\n").join("\n  "),
                u = {
                    value: e.value
                };
            e.maxAge !== o && (u.maxAge = e.maxAge), s !== c && (u.length = e.length), p(this, e) && (u.stale = !0), u = a.inspect(u, t).split("\n").join("\n  "), n += i + " => " + u
        }), (l || r) && (n += "\n"), n += "}"
    }, l.prototype.set = function(e, t, n) {
        var r = (n = n || u(this, "maxAge")) ? Date.now() : 0,
            i = u(this, "lengthCalculator").call(this, t, e);
        if (u(this, "cache").has(e)) {
            if (i > u(this, "max")) return m(this, u(this, "cache").get(e)), !1;
            var a = u(this, "cache").get(e).value;
            return u(this, "dispose") && u(this, "dispose").call(this, e, a.value), a.now = r, a.maxAge = n, a.value = t, u(this, "length", u(this, "length") + (i - a.length)), a.length = i, this.get(e), h(this), !0
        }
        var o = new g(e, t, i, r, n);
        return o.length > u(this, "max") ? (u(this, "dispose") && u(this, "dispose").call(this, e, t), !1) : (u(this, "length", u(this, "length") + o.length), u(this, "lruList").unshift(o), u(this, "cache").set(e, u(this, "lruList").head), h(this), !0)
    }, l.prototype.has = function(e) {
        return !(!u(this, "cache").has(e) || p(this, u(this, "cache").get(e).value)) && !0
    }, l.prototype.get = function(e) {
        return f(this, e, !0)
    }, l.prototype.peek = function(e) {
        return f(this, e, !1)
    }, l.prototype.pop = function() {
        var e = u(this, "lruList").tail;
        return e ? (m(this, e), e.value) : null
    }, l.prototype.del = function(e) {
        m(this, u(this, "cache").get(e))
    }, l.prototype.load = function(e) {
        this.reset();
        for (var t = Date.now(), n = e.length - 1; n >= 0; n--) {
            var r = e[n],
                i = r.e || 0;
            if (0 === i) this.set(r.k, r.v);
            else {
                var a = i - t;
                a > 0 && this.set(r.k, r.v, a)
            }
        }
    }, l.prototype.prune = function() {
        var e = this;
        u(this, "cache").forEach(function(t, n) {
            f(e, n, !1)
        })
    }
}