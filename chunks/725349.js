function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var r = n("864842");

    function o(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
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

    function s(e, t) {
        return (s = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var l = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && s(e, t)
        }(l, e);
        var t, n, r = (t = l, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, i, u = a(t);
            if (n) {
                var s = a(this).constructor;
                i = Reflect.construct(u, arguments, s)
            } else i = u.apply(this, arguments);
            return e = this, (r = i) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : o(e)
        });

        function l(e) {
            var t;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, l), i(o(t = r.call(this)), "id", void 0), i(o(t), "layoutId", void 0), i(o(t), "type", void 0), i(o(t), "anchor", void 0), i(o(t), "size", void 0), i(o(t), "pinned", void 0), i(o(t), "zIndex", void 0), i(o(t), "meta", void 0), t.id = e.id || "", t.layoutId = e.layoutId || "", t.type = e.type, t.anchor = u({
                left: 0,
                top: 0
            }, e.anchor), t.size = u({
                width: 0,
                height: 0
            }, e.size), t.pinned = !!e.pinned, t.zIndex = e.zIndex || 0, t.meta = u({}, e.meta), t
        }
        return l
    }(r.default)
}