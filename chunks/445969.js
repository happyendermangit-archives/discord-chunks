function(e, t, n) {
    "use strict";

    function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function a(e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && o(e, t)
    }

    function o(e, t) {
        return (o = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function i(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var n, a = u(e);
            if (t) {
                var o = u(this).constructor;
                n = Reflect.construct(a, arguments, o)
            } else n = a.apply(this, arguments);
            return function(e, t) {
                return t && ("object" === r(t) || "function" == typeof t) ? t : s(e)
            }(this, n)
        }
    }
    n.r(t), n.d(t, {
        ValueSetter: function() {
            return h
        },
        DateToSystemTimezoneSetter: function() {
            return m
        }
    }), n("222007"), n("70102"), n("426094"), n("854508");

    function s(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function u(e) {
        return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function l(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function d(e, t, n) {
        return t && c(e.prototype, t), n && c(e, n), e
    }

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var p = function() {
            function e() {
                l(this, e), f(this, "subPriority", 0)
            }
            return d(e, [{
                key: "validate",
                value: function(e, t) {
                    return !0
                }
            }]), e
        }(),
        h = function(e) {
            a(n, e);
            var t = i(n);

            function n(e, r, a, o, i) {
                var s;
                return l(this, n), (s = t.call(this)).value = e, s.validateValue = r, s.setValue = a, s.priority = o, i && (s.subPriority = i), s
            }
            return d(n, [{
                key: "validate",
                value: function(e, t) {
                    return this.validateValue(e, this.value, t)
                }
            }, {
                key: "set",
                value: function(e, t, n) {
                    return this.setValue(e, t, this.value, n)
                }
            }]), n
        }(p),
        m = function(e) {
            a(n, e);
            var t = i(n);

            function n() {
                var e;
                l(this, n);
                for (var r = arguments.length, a = Array(r), o = 0; o < r; o++) a[o] = arguments[o];
                return f(s(e = t.call.apply(t, [this].concat(a))), "priority", 10), f(s(e), "subPriority", -1), e
            }
            return d(n, [{
                key: "set",
                value: function(e, t) {
                    if (t.timestampIsSet) return e;
                    var n = new Date(0);
                    return n.setFullYear(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()), n.setHours(e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()), n
                }
            }]), n
        }(p)
}