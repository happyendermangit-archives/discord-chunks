function(e, t, n) {
    "use strict";

    function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function a(e, t) {
        return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
    }

    function u(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                i(e, t, n[t])
            })
        }
        return e
    }
    var s = function() {
        var e, t, n;

        function s() {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, s)
        }
        return e = s, t = [{
            key: "toJS",
            value: function() {
                return u({}, this)
            }
        }, {
            key: "set",
            value: function(e, t) {
                var n, r, o = this[e];
                if (a(t, Date) && a(o, Date) && t.getTime() === o.getTime()) return this;
                if (o !== t) {
                    ;
                    return new this.constructor((n = u({}, this), r = null != (r = i({}, e, t)) ? r : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(r)).forEach(function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
                    }), n))
                }
                return this
            }
        }, {
            key: "merge",
            value: function(e) {
                var t = null;
                for (var n in e) {
                    if (!!e.hasOwnProperty(n)) {
                        var r = this[n],
                            o = e[n];
                        (!(a(o, Date) && a(r, Date)) || o.getTime() !== r.getTime()) && r !== o && (null == t && (t = u({}, this)), t[n] = e[n])
                    }
                }
                return null != t ? new this.constructor(t) : this
            }
        }, {
            key: "update",
            value: function(e, t, n) {
                null == n && (n = t, t = void 0);
                var o, i = this[e];
                if (a(i, s));
                else if (a(i, Array)) {
                    ;
                    i = function(e) {
                        if (Array.isArray(e)) return r(e)
                    }(o = i) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(o) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return r(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t)
                        }
                    }(o) || function() {
                        throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                } else a(i, Object) && (i = u({}, i));
                return void 0 === i && (i = t), this.set(e, n(i))
            }
        }], o(e.prototype, t), n && o(e, n), s
    }()
}