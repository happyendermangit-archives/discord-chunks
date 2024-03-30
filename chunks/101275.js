function(e, t, n) {
    "use strict";

    function r(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    n.r(t), n.d(t, {
        RPCError: function() {
            return c
        }
    });

    function o(e, t, n) {
        return (o = l() ? Reflect.construct : function(e, t, n) {
            var r = [null];
            r.push.apply(r, t);
            var o = new(Function.bind.apply(e, r));
            return n && u(o, n.prototype), o
        }).apply(null, arguments)
    }

    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function a(e) {
        return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function u(e, t) {
        return (u = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function s(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return (s = function(e) {
            var n;
            if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
            if ("function" != typeof e) throw TypeError("Super expression must either be null or a function");
            if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, r)
            }

            function r() {
                return o(e, arguments, a(this).constructor)
            }
            return r.prototype = Object.create(e.prototype, {
                constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), u(r, e)
        })(e)
    }

    function l() {
        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
        } catch (e) {
            return !1
        }
    }
    var c = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && u(e, t)
        }(s, e);
        var t, n, o = (t = s, n = l(), function() {
            var e, o, i, u = a(t);
            if (n) {
                var s = a(this).constructor;
                i = Reflect.construct(u, arguments, s)
            } else i = u.apply(this, arguments);
            return e = this, (o = i) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(o) || "function" == typeof o) ? o : r(e)
        });

        function s(e, t) {
            var n;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, s), i(r(n = o.call(this, t)), "errorCode", void 0), i(r(n), "closeCode", void 0), i(r(n), "code", void 0), i(r(n), "message", void 0), i(r(n), "name", void 0), "closeCode" in e ? (n.code = e.closeCode, n.closeCode = e.closeCode) : (n.code = e.errorCode, n.errorCode = e.errorCode), n.message = t, n.name = "RPCError", n
        }
        return s
    }(s(Error))
}