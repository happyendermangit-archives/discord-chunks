function(e, t, n) {
    n("854508"), n("222007"), n("843762"), e.exports = l;
    var r, Map = n("333222"),
        a = n("151293"),
        i = n("860860"),
        o = {};

    function s(e, t, n) {
        var a;
        return (o[t] ? a = o[t] : (a = r(t), o[t] = a), 2 == arguments.length) ? e[a] : (e[a] = n, n)
    }

    function c() {
        return 1
    }

    function l(e) {
        if (!(this instanceof l)) return new l(e);
        "number" == typeof e && (e = {
            max: e
        }), !e && (e = {});
        var t = s(this, "max", e.max);
        (!t || "number" != typeof t || t <= 0) && s(this, "max", 1 / 0);
        var n = e.length || c;
        "function" != typeof n && (n = c), s(this, "lengthCalculator", n), s(this, "allowStale", e.stale || !1), s(this, "maxAge", e.maxAge || 0), s(this, "dispose", e.dispose), this.reset()
    }

    function u(e, t, n, r) {
        var a = n.value;
        p(e, a) && (m(e, n), !s(e, "allowStale") && (a = void 0)), a && t.call(r, a.value, a.key, e)
    }

    function d(e, t, n) {
        var r = s(e, "cache").get(t);
        if (r) {
            var a = r.value;
            p(e, a) ? (m(e, r), !s(e, "allowStale") && (a = void 0)) : n && s(e, "lruList").unshiftNode(r), a && (a = a.value)
        }
        return a
    }

    function p(e, t) {
        if (!t || !t.maxAge && !s(e, "maxAge")) return !1;
        var n = !1,
            r = Date.now() - t.now;
        return n = t.maxAge ? r > t.maxAge : s(e, "maxAge") && r > s(e, "maxAge")
    }

    function f(e) {
        if (s(e, "length") > s(e, "max"))
            for (var t = s(e, "lruList").tail; s(e, "length") > s(e, "max") && null !== t;) {
                var n = t.prev;
                m(e, t), t = n
            }
    }

    function m(e, t) {
        if (t) {
            var n = t.value;
            s(e, "dispose") && s(e, "dispose").call(this, n.key, n.value), s(e, "length", s(e, "length") - n.length), s(e, "cache").delete(n.key), s(e, "lruList").removeNode(t)
        }
    }

    function h(e, t, n, r, a) {
        this.key = e, this.value = t, this.length = n, this.now = r, this.maxAge = a || 0
    }
    r = "function" == typeof Symbol ? function(e) {
        return Symbol.for(e)
    } : function(e) {
        return "_" + e
    }, Object.defineProperty(l.prototype, "max", {
        set: function(e) {
            (!e || "number" != typeof e || e <= 0) && (e = 1 / 0), s(this, "max", e), f(this)
        },
        get: function() {
            return s(this, "max")
        },
        enumerable: !0
    }), Object.defineProperty(l.prototype, "allowStale", {
        set: function(e) {
            s(this, "allowStale", !!e)
        },
        get: function() {
            return s(this, "allowStale")
        },
        enumerable: !0
    }), Object.defineProperty(l.prototype, "maxAge", {
        set: function(e) {
            (!e || "number" != typeof e || e < 0) && (e = 0), s(this, "maxAge", e), f(this)
        },
        get: function() {
            return s(this, "maxAge")
        },
        enumerable: !0
    }), Object.defineProperty(l.prototype, "lengthCalculator", {
        set: function(e) {
            "function" != typeof e && (e = c), e !== s(this, "lengthCalculator") && (s(this, "lengthCalculator", e), s(this, "length", 0), s(this, "lruList").forEach(function(e) {
                e.length = s(this, "lengthCalculator").call(this, e.value, e.key), s(this, "length", s(this, "length") + e.length)
            }, this)), f(this)
        },
        get: function() {
            return s(this, "lengthCalculator")
        },
        enumerable: !0
    }), Object.defineProperty(l.prototype, "length", {
        get: function() {
            return s(this, "length")
        },
        enumerable: !0
    }), Object.defineProperty(l.prototype, "itemCount", {
        get: function() {
            return s(this, "lruList").length
        },
        enumerable: !0
    }), l.prototype.rforEach = function(e, t) {
        t = t || this;
        for (var n = s(this, "lruList").tail; null !== n;) {
            var r = n.prev;
            u(this, e, n, t), n = r
        }
    }, l.prototype.forEach = function(e, t) {
        t = t || this;
        for (var n = s(this, "lruList").head; null !== n;) {
            var r = n.next;
            u(this, e, n, t), n = r
        }
    }, l.prototype.keys = function() {
        return s(this, "lruList").toArray().map(function(e) {
            return e.key
        }, this)
    }, l.prototype.values = function() {
        return s(this, "lruList").toArray().map(function(e) {
            return e.value
        }, this)
    }, l.prototype.reset = function() {
        s(this, "dispose") && s(this, "lruList") && s(this, "lruList").length && s(this, "lruList").forEach(function(e) {
            s(this, "dispose").call(this, e.key, e.value)
        }, this), s(this, "cache", new Map), s(this, "lruList", new i), s(this, "length", 0)
    }, l.prototype.dump = function() {
        return s(this, "lruList").map(function(e) {
            if (!p(this, e)) return {
                k: e.key,
                v: e.value,
                e: e.now + (e.maxAge || 0)
            }
        }, this).toArray().filter(function(e) {
            return e
        })
    }, l.prototype.dumpLru = function() {
        return s(this, "lruList")
    }, l.prototype.inspect = function(e, t) {
        var n = "LRUCache {",
            r = !1;
        s(this, "allowStale") && (n += "\n  allowStale: true", r = !0);
        var i = s(this, "max");
        i && i !== 1 / 0 && (r && (n += ","), n += "\n  max: " + a.inspect(i, t), r = !0);
        var o = s(this, "maxAge");
        o && (r && (n += ","), n += "\n  maxAge: " + a.inspect(o, t), r = !0);
        var l = s(this, "lengthCalculator");
        l && l !== c && (r && (n += ","), n += "\n  length: " + a.inspect(s(this, "length"), t), r = !0);
        var u = !1;
        return s(this, "lruList").forEach(function(e) {
            u ? n += ",\n  " : (r && (n += ",\n"), u = !0, n += "\n  ");
            var i = a.inspect(e.key).split("\n").join("\n  "),
                s = {
                    value: e.value
                };
            e.maxAge !== o && (s.maxAge = e.maxAge), l !== c && (s.length = e.length), p(this, e) && (s.stale = !0), s = a.inspect(s, t).split("\n").join("\n  "), n += i + " => " + s
        }), (u || r) && (n += "\n"), n += "}"
    }, l.prototype.set = function(e, t, n) {
        var r = (n = n || s(this, "maxAge")) ? Date.now() : 0,
            a = s(this, "lengthCalculator").call(this, t, e);
        if (s(this, "cache").has(e)) {
            if (a > s(this, "max")) return m(this, s(this, "cache").get(e)), !1;
            var i = s(this, "cache").get(e).value;
            return s(this, "dispose") && s(this, "dispose").call(this, e, i.value), i.now = r, i.maxAge = n, i.value = t, s(this, "length", s(this, "length") + (a - i.length)), i.length = a, this.get(e), f(this), !0
        }
        var o = new h(e, t, a, r, n);
        return o.length > s(this, "max") ? (s(this, "dispose") && s(this, "dispose").call(this, e, t), !1) : (s(this, "length", s(this, "length") + o.length), s(this, "lruList").unshift(o), s(this, "cache").set(e, s(this, "lruList").head), f(this), !0)
    }, l.prototype.has = function(e) {
        return !(!s(this, "cache").has(e) || p(this, s(this, "cache").get(e).value)) && !0
    }, l.prototype.get = function(e) {
        return d(this, e, !0)
    }, l.prototype.peek = function(e) {
        return d(this, e, !1)
    }, l.prototype.pop = function() {
        var e = s(this, "lruList").tail;
        return e ? (m(this, e), e.value) : null
    }, l.prototype.del = function(e) {
        m(this, s(this, "cache").get(e))
    }, l.prototype.load = function(e) {
        this.reset();
        for (var t = Date.now(), n = e.length - 1; n >= 0; n--) {
            var r = e[n],
                a = r.e || 0;
            if (0 === a) this.set(r.k, r.v);
            else {
                var i = a - t;
                i > 0 && this.set(r.k, r.v, i)
            }
        }
    }, l.prototype.prune = function() {
        var e = this;
        s(this, "cache").forEach(function(t, n) {
            d(e, n, !1)
        })
    }
}