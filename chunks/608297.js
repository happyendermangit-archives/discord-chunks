function(e, t, n) {
    "use strict";

    function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && a(e, t)
    }

    function a(e, t) {
        return (a = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function o(e) {
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
            var n, i = u(e);
            if (t) {
                var a = u(this).constructor;
                n = Reflect.construct(i, arguments, a)
            } else n = i.apply(this, arguments);
            return function(e, t) {
                return t && ("object" === r(t) || "function" == typeof t) ? t : s(e)
            }(this, n)
        }
    }
    n.r(t), n.d(t, {
        DateToSystemTimezoneSetter: function() {
            return m
        },
        ValueSetter: function() {
            return h
        }
    });

    function s(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function u(e) {
        return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function c(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function l(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function d(e, t, n) {
        return t && l(e.prototype, t), n && l(e, n), e
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
                c(this, e), f(this, "subPriority", 0)
            }
            return d(e, [{
                key: "validate",
                value: function(e, t) {
                    return !0
                }
            }]), e
        }(),
        h = function(e) {
            i(n, e);
            var t = o(n);

            function n(e, r, i, a, o) {
                var s;
                return c(this, n), (s = t.call(this)).value = e, s.validateValue = r, s.setValue = i, s.priority = a, o && (s.subPriority = o), s
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
            i(n, e);
            var t = o(n);

            function n() {
                var e;
                c(this, n);
                for (var r = arguments.length, i = Array(r), a = 0; a < r; a++) i[a] = arguments[a];
                return f(s(e = t.call.apply(t, [this].concat(i))), "priority", 10), f(s(e), "subPriority", -1), e
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