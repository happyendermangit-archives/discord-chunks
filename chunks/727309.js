function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SecondaryIndexMap: function() {
            return f
        }
    });
    var r = n("740436"),
        o = n.n(r);

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

    function s(e, t) {
        if (e) {
            if ("string" == typeof e) return i(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
        }
    }

    function l(e, t, n, r) {
        null != t && e.splice(o()(e, t, r), 1), null != n && e.splice(o()(e, n, r), 0, n)
    }
    var c = [],
        f = function() {
            var e, t, n;

            function r(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function(e, t) {
                    return e === t
                };
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, r), u(this, "indexBy", void 0), u(this, "sortBy", void 0), u(this, "isEqual", void 0), u(this, "valueMap", new Map), u(this, "valueArray", []), u(this, "valueIndexes", {}), u(this, "dirty", !1), u(this, "_version", 0), this.indexBy = e, this.sortBy = t, this.isEqual = n
            }
            return e = r, t = [{
                key: "version",
                get: function() {
                    return this._version
                }
            }, {
                key: "indexes",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (!e && this.dirty) {
                        var t = {},
                            n = !0,
                            r = !1,
                            o = void 0;
                        try {
                            for (var a, u = Object.entries(this.valueIndexes)[Symbol.iterator](); !(n = (a = u.next()).done); n = !0) {
                                var l, c, f, d = (l = a.value, c = 2, function(e) {
                                        if (Array.isArray(e)) return e
                                    }(l) || function(e, t) {
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
                                    }(l, c) || s(l, c) || function() {
                                        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }()),
                                    _ = d[0],
                                    E = d[1];
                                t[_] = (f = E, function(e) {
                                    if (Array.isArray(e)) return i(e)
                                }(f) || function(e) {
                                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                                }(f) || s(f) || function() {
                                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }())
                            }
                        } catch (e) {
                            r = !0, o = e
                        } finally {
                            try {
                                !n && null != u.return && u.return()
                            } finally {
                                if (r) throw o
                            }
                        }
                        this.valueIndexes = t, this.dirty = !1
                    }
                    return this.valueIndexes
                }
            }, {
                key: "keys",
                value: function() {
                    return this.valueMap.keys()
                }
            }, {
                key: "values",
                value: function(e) {
                    var t, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return null == e ? this.valueArray : null !== (t = this.indexes(n)[e]) && void 0 !== t ? t : c
                }
            }, {
                key: "size",
                value: function(e) {
                    var t, n;
                    return null == e ? this.valueArray.length : null !== (n = null === (t = this.valueIndexes[e]) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0
                }
            }, {
                key: "clear",
                value: function() {
                    this.valueMap.clear(), this.valueArray = [], this.valueIndexes = {}
                }
            }, {
                key: "has",
                value: function(e) {
                    return this.valueMap.has(e)
                }
            }, {
                key: "get",
                value: function(e) {
                    return this.valueMap.get(e)
                }
            }, {
                key: "set",
                value: function(e, t) {
                    var n = this,
                        r = this.get(e);
                    return !(null == r && null == t || null != r && null != t && this.isEqual(r, t)) && (null != t ? this.valueMap.set(e, t) : this.valueMap.delete(e), l(this.valueArray, r, t, this.sortBy), null != r && this.indexBy(r).forEach(function(e) {
                        return l(n.getIndex(e), r, null, n.sortBy)
                    }), null != t && this.indexBy(t).forEach(function(e) {
                        return l(n.getIndex(e), null, t, n.sortBy)
                    }), this.dirty = !0, this._version++, !0)
                }
            }, {
                key: "delete",
                value: function(e) {
                    return this.set(e, null)
                }
            }, {
                key: "getIndex",
                value: function(e) {
                    var t = this.valueIndexes[e];
                    return null == t && (t = [], this.valueIndexes[e] = t), t
                }
            }], a(e.prototype, t), n && a(e, n), r
        }()
}