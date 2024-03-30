function(e, t, n) {
    "use strict";

    function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    n.r(t), n.d(t, {
        NON_TOKEN_TYPE: function() {
            return c
        },
        Token: function() {
            return E
        }
    });

    function o(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function a(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e
    }

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function s(e) {
        return function(e) {
            if (Array.isArray(e)) return r(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return r(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var l = /.+/g,
        c = "NON_TOKEN";

    function f(e, t, n) {
        if (null == t) return null;
        for (var r = 0; r < t.length; r++) {
            var o = t[r],
                i = d(e.match(o.regex), n),
                a = void 0;
            if (null != i) {
                var u = o.cache;
                if (null != u && null != (a = u.get(i[0])) && ((a = new E(a)).start = i.index), null == a) {
                    if (a = new E(i, o.type), null != o.validator && !o.validator(a)) continue;
                    null != u && !(null == u ? void 0 : u.has(i[0])) && u.set(i[0], a)
                }
                return a
            }
        }
        return null
    }

    function d(e, t) {
        if (null == e) return null;
        var n = s(e);
        return n.index = t, n
    }
    var _ = function() {
        function e() {
            var t = this,
                n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                r = arguments.length > 1 ? arguments[1] : void 0;
            o(this, e), u(this, "_rules", []), u(this, "_followers", {}), u(this, "_nonTokenType", c), this.reset(r), n.forEach(function(e) {
                return t.addRule(e)
            })
        }
        return a(e, [{
            key: "reset",
            value: function(e) {
                this._rules = [], this._followers = {}, this._nonTokenType = null != e ? e : c
            }
        }, {
            key: "addRule",
            value: function(e) {
                var t, n = this,
                    r = e.type,
                    o = e.follows,
                    i = e.validator,
                    a = e.regex;
                if ("^" !== a.source.charAt(0) && (a = new RegExp("^".concat(a.source), a.flags)), null != i && (t = new Map), null == o) {
                    this._rules.push({
                        regex: a,
                        type: r,
                        validator: i,
                        cache: t
                    });
                    return
                }
                o.forEach(function(e) {
                    null == n._followers[e] && (n._followers[e] = []), n._followers[e].push({
                        regex: a,
                        type: r,
                        validator: i,
                        cache: t
                    })
                })
            }
        }, {
            key: "tokenize",
            value: function(e) {
                for (var t, n = e, r = "", o = 0, i = []; n.length > 0;) {
                    var a = this._getMatch(n, t, o + r.length);
                    null != a ? (null != r && "" !== r && i.push(new E(d(r.match(l), o), this._nonTokenType)), t = a, i.push(a), o += t.length + r.length, n = n.substring(t.length), r = "") : (r += n[0], n = n.substring(1))
                }
                return null != r && "" !== r && i.push(new E(d(r.match(l), o), this._nonTokenType)), i
            }
        }, {
            key: "clearCache",
            value: function() {
                for (var e in this._rules.forEach(function(e) {
                        var t;
                        return null === (t = e.cache) || void 0 === t ? void 0 : t.clear()
                    }), this._followers) this._followers[e].forEach(function(e) {
                    var t;
                    return null === (t = e.cache) || void 0 === t ? void 0 : t.clear()
                })
            }
        }, {
            key: "_getMatch",
            value: function(e, t, n) {
                var r, o = null != t ? t.type : null;
                return (null == t ? void 0 : t.end) === n && (r = f(e, this._followers[String(o)], n)), null == r && (r = f(e, this._rules, n)), r
            }
        }]), e
    }();
    u(_, "NON_TOKEN_TYPE", void 0), u(_, "Token", void 0);
    var E = function() {
        function e(t, n) {
            var r, i, a;
            if (o(this, e), u(this, "match", void 0), u(this, "start", void 0), u(this, "type", void 0), u(this, "_data", void 0), r = t, null != (i = e) && "undefined" != typeof Symbol && i[Symbol.hasInstance] ? !!i[Symbol.hasInstance](r) : r instanceof i) this.match = s(t.match), this.start = t.start, this.type = t.type, null != t._data && (this._data = t._data);
            else if (null != t) {
                ;
                this.match = s(t), this.start = "string" == typeof t ? 0 : null !== (a = t.index) && void 0 !== a ? a : 0, this.type = n
            } else this.match = [], this.start = 0, this.type = n
        }
        return a(e, [{
            key: "end",
            get: function() {
                return this.start + this.length
            }
        }, {
            key: "length",
            get: function() {
                return this.match[0].length
            }
        }, {
            key: "valueOf",
            value: function() {
                return this.match[0]
            }
        }, {
            key: "getFullMatch",
            value: function() {
                return this.match[0]
            }
        }, {
            key: "getMatch",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return this.match[e]
            }
        }, {
            key: "setData",
            value: function(e, t) {
                null == this._data && (this._data = new Map), this._data.set(e, t)
            }
        }, {
            key: "getData",
            value: function(e) {
                if (null != this._data) return this._data.get(e)
            }
        }]), e
    }();
    _.NON_TOKEN_TYPE = c, _.Token = E, t.default = _
}