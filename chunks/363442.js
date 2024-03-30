function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ExtendedMemoryLru: function() {
            return s
        }
    });
    var r = n("290429"),
        o = n("577969");

    function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var s = function() {
        var e, t, n;

        function s(e, t) {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, s), u(this, "primary", void 0), u(this, "extended", void 0), this.primary = new o.Lru(e), this.extended = new o.Lru(t)
        }
        return e = s, t = [{
            key: "totalLength",
            get: function() {
                return this.primary.length + this.extended.length
            }
        }, {
            key: "primaryCapacity",
            get: function() {
                return this.primary.capacity
            }
        }, {
            key: "extendedCapacity",
            get: function() {
                return this.extended.capacity
            }
        }, {
            key: "clear",
            value: function() {
                this.primary.clear(), this.extended.clear()
            }
        }, {
            key: "has",
            value: function(e) {
                return this.primary.has(e)
            }
        }, {
            key: "hasExtended",
            value: function(e) {
                return this.primary.has(e) || this.extended.has(e)
            }
        }, {
            key: "get",
            value: function(e) {
                return this.primary.get(e)
            }
        }, {
            key: "put",
            value: function(e, t) {
                var n = this.primary.put(e, t);
                void 0 !== n && this.extended.put(n[0], n[1])
            }
        }, {
            key: "delete",
            value: function(e) {
                var t = this.primary.delete(e),
                    n = this.extended.delete(e);
                return this.upstreamItems(), t || n
            }
        }, {
            key: "upstreamItems",
            value: function() {
                if (this.canUpstreamItems()) {
                    var e = !0,
                        t = !1,
                        n = void 0;
                    try {
                        for (var r, o = this.extended.entries()[Symbol.iterator](); !(e = (r = o.next()).done); e = !0) {
                            var a, u, s = (a = r.value, u = 2, function(e) {
                                    if (Array.isArray(e)) return e
                                }(a) || function(e, t) {
                                    var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                    if (null != o) {
                                        var i = [],
                                            a = !0,
                                            u = !1;
                                        try {
                                            for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                                        } catch (e) {
                                            u = !0, r = e
                                        } finally {
                                            try {
                                                !a && null != o.return && o.return()
                                            } finally {
                                                if (u) throw r
                                            }
                                        }
                                        return i
                                    }
                                }(a, u) || function(e, t) {
                                    if (e) {
                                        if ("string" == typeof e) return i(e, t);
                                        var n = Object.prototype.toString.call(e).slice(8, -1);
                                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
                                    }
                                }(a, u) || function() {
                                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }()),
                                l = s[0],
                                c = s[1];
                            if (this.primary.put(l, c), this.extended.delete(l), !this.canUpstreamItems()) break
                        }
                    } catch (e) {
                        t = !0, n = e
                    } finally {
                        try {
                            !e && null != o.return && o.return()
                        } finally {
                            if (t) throw n
                        }
                    }
                }
            }
        }, {
            key: "canUpstreamItems",
            value: function() {
                return this.primary.length < this.primary.capacity && this.extended.length > 0
            }
        }, {
            key: "entries",
            value: function() {
                return this.primary.entries()
            }
        }, {
            key: "keys",
            value: function() {
                return this.primary.keys()
            }
        }, {
            key: "values",
            value: function() {
                return this.primary.values()
            }
        }, {
            key: "allEntries",
            value: function() {
                return r.chain(this.extended.entries(), this.primary.entries())
            }
        }, {
            key: "allKeys",
            value: function() {
                return r.chain(this.extended.keys(), this.primary.keys())
            }
        }, {
            key: "allValues",
            value: function() {
                return r.chain(this.extended.values(), this.primary.values())
            }
        }], a(e.prototype, t), n && a(e, n), s
    }()
}