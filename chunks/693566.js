function(e, t, n) {
    n("854508"), n("222007"), n("843762"), e.exports = u;
    var r, Map = n("333222"),
        i = n("151293"),
        o = n("860860"),
        s = {};

    function a(e, t, n) {
        var i;
        return (s[t] ? i = s[t] : (i = r(t), s[t] = i), 2 == arguments.length) ? e[i] : (e[i] = n, n)
    }

    function c() {
        return 1
    }

    function u(e) {
        if (!(this instanceof u)) return new u(e);
        "number" == typeof e && (e = {
            max: e
        }), !e && (e = {});
        var t = a(this, "max", e.max);
        (!t || "number" != typeof t || t <= 0) && a(this, "max", 1 / 0);
        var n = e.length || c;
        "function" != typeof n && (n = c), a(this, "lengthCalculator", n), a(this, "allowStale", e.stale || !1), a(this, "maxAge", e.maxAge || 0), a(this, "dispose", e.dispose), this.reset()
    }

    function d(e, t, n, r) {
        var i = n.value;
        f(e, i) && (h(e, n), !a(e, "allowStale") && (i = void 0)), i && t.call(r, i.value, i.key, e)
    }

    function l(e, t, n) {
        var r = a(e, "cache").get(t);
        if (r) {
            var i = r.value;
            f(e, i) ? (h(e, r), !a(e, "allowStale") && (i = void 0)) : n && a(e, "lruList").unshiftNode(r), i && (i = i.value)
        }
        return i
    }

    function f(e, t) {
        if (!t || !t.maxAge && !a(e, "maxAge")) return !1;
        var n = !1,
            r = Date.now() - t.now;
        return n = t.maxAge ? r > t.maxAge : a(e, "maxAge") && r > a(e, "maxAge")
    }

    function p(e) {
        if (a(e, "length") > a(e, "max"))
            for (var t = a(e, "lruList").tail; a(e, "length") > a(e, "max") && null !== t;) {
                var n = t.prev;
                h(e, t), t = n
            }
    }

    function h(e, t) {
        if (t) {
            var n = t.value;
            a(e, "dispose") && a(e, "dispose").call(this, n.key, n.value), a(e, "length", a(e, "length") - n.length), a(e, "cache").delete(n.key), a(e, "lruList").removeNode(t)
        }
    }

    function v(e, t, n, r, i) {
        this.key = e, this.value = t, this.length = n, this.now = r, this.maxAge = i || 0
    }
    r = "function" == typeof Symbol ? function(e) {
        return Symbol.for(e)
    } : function(e) {
        return "_" + e
    }, Object.defineProperty(u.prototype, "max", {
        set: function(e) {
            (!e || "number" != typeof e || e <= 0) && (e = 1 / 0), a(this, "max", e), p(this)
        },
        get: function() {
            return a(this, "max")
        },
        enumerable: !0
    }), Object.defineProperty(u.prototype, "allowStale", {
        set: function(e) {
            a(this, "allowStale", !!e)
        },
        get: function() {
            return a(this, "allowStale")
        },
        enumerable: !0
    }), Object.defineProperty(u.prototype, "maxAge", {
        set: function(e) {
            (!e || "number" != typeof e || e < 0) && (e = 0), a(this, "maxAge", e), p(this)
        },
        get: function() {
            return a(this, "maxAge")
        },
        enumerable: !0
    }), Object.defineProperty(u.prototype, "lengthCalculator", {
        set: function(e) {
            "function" != typeof e && (e = c), e !== a(this, "lengthCalculator") && (a(this, "lengthCalculator", e), a(this, "length", 0), a(this, "lruList").forEach(function(e) {
                e.length = a(this, "lengthCalculator").call(this, e.value, e.key), a(this, "length", a(this, "length") + e.length)
            }, this)), p(this)
        },
        get: function() {
            return a(this, "lengthCalculator")
        },
        enumerable: !0
    }), Object.defineProperty(u.prototype, "length", {
        get: function() {
            return a(this, "length")
        },
        enumerable: !0
    }), Object.defineProperty(u.prototype, "itemCount", {
        get: function() {
            return a(this, "lruList").length
        },
        enumerable: !0
    }), u.prototype.rforEach = function(e, t) {
        t = t || this;
        for (var n = a(this, "lruList").tail; null !== n;) {
            var r = n.prev;
            d(this, e, n, t), n = r
        }
    }, u.prototype.forEach = function(e, t) {
        t = t || this;
        for (var n = a(this, "lruList").head; null !== n;) {
            var r = n.next;
            d(this, e, n, t), n = r
        }
    }, u.prototype.keys = function() {
        return a(this, "lruList").toArray().map(function(e) {
            return e.key
        }, this)
    }, u.prototype.values = function() {
        return a(this, "lruList").toArray().map(function(e) {
            return e.value
        }, this)
    }, u.prototype.reset = function() {
        a(this, "dispose") && a(this, "lruList") && a(this, "lruList").length && a(this, "lruList").forEach(function(e) {
            a(this, "dispose").call(this, e.key, e.value)
        }, this), a(this, "cache", new Map), a(this, "lruList", new o), a(this, "length", 0)
    }, u.prototype.dump = function() {
        return a(this, "lruList").map(function(e) {
            if (!f(this, e)) return {
                k: e.key,
                v: e.value,
                e: e.now + (e.maxAge || 0)
            }
        }, this).toArray().filter(function(e) {
            return e
        })
    }, u.prototype.dumpLru = function() {
        return a(this, "lruList")
    }, u.prototype.inspect = function(e, t) {
        var n = "LRUCache {",
            r = !1;
        a(this, "allowStale") && (n += "\n  allowStale: true", r = !0);
        var o = a(this, "max");
        o && o !== 1 / 0 && (r && (n += ","), n += "\n  max: " + i.inspect(o, t), r = !0);
        var s = a(this, "maxAge");
        s && (r && (n += ","), n += "\n  maxAge: " + i.inspect(s, t), r = !0);
        var u = a(this, "lengthCalculator");
        u && u !== c && (r && (n += ","), n += "\n  length: " + i.inspect(a(this, "length"), t), r = !0);
        var d = !1;
        return a(this, "lruList").forEach(function(e) {
            d ? n += ",\n  " : (r && (n += ",\n"), d = !0, n += "\n  ");
            var o = i.inspect(e.key).split("\n").join("\n  "),
                a = {
                    value: e.value
                };
            e.maxAge !== s && (a.maxAge = e.maxAge), u !== c && (a.length = e.length), f(this, e) && (a.stale = !0), a = i.inspect(a, t).split("\n").join("\n  "), n += o + " => " + a
        }), (d || r) && (n += "\n"), n += "}"
    }, u.prototype.set = function(e, t, n) {
        var r = (n = n || a(this, "maxAge")) ? Date.now() : 0,
            i = a(this, "lengthCalculator").call(this, t, e);
        if (a(this, "cache").has(e)) {
            if (i > a(this, "max")) return h(this, a(this, "cache").get(e)), !1;
            var o = a(this, "cache").get(e).value;
            return a(this, "dispose") && a(this, "dispose").call(this, e, o.value), o.now = r, o.maxAge = n, o.value = t, a(this, "length", a(this, "length") + (i - o.length)), o.length = i, this.get(e), p(this), !0
        }
        var s = new v(e, t, i, r, n);
        return s.length > a(this, "max") ? (a(this, "dispose") && a(this, "dispose").call(this, e, t), !1) : (a(this, "length", a(this, "length") + s.length), a(this, "lruList").unshift(s), a(this, "cache").set(e, a(this, "lruList").head), p(this), !0)
    }, u.prototype.has = function(e) {
        return !(!a(this, "cache").has(e) || f(this, a(this, "cache").get(e).value)) && !0
    }, u.prototype.get = function(e) {
        return l(this, e, !0)
    }, u.prototype.peek = function(e) {
        return l(this, e, !1)
    }, u.prototype.pop = function() {
        var e = a(this, "lruList").tail;
        return e ? (h(this, e), e.value) : null
    }, u.prototype.del = function(e) {
        h(this, a(this, "cache").get(e))
    }, u.prototype.load = function(e) {
        this.reset();
        for (var t = Date.now(), n = e.length - 1; n >= 0; n--) {
            var r = e[n],
                i = r.e || 0;
            if (0 === i) this.set(r.k, r.v);
            else {
                var o = i - t;
                o > 0 && this.set(r.k, r.v, o)
            }
        }
    }, u.prototype.prune = function() {
        var e = this;
        a(this, "cache").forEach(function(t, n) {
            l(e, n, !1)
        })
    }
}