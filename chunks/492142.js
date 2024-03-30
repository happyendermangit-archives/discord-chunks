function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i = n("470079"),
        a = n("713339");

    function u(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function c(e) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function f(e, t) {
        return (f = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function d(e, t, n) {
        return Math.min(Math.max(Math.floor(e / t), 1), n)
    }
    t.default = (0, a.default)((o = function(e) {
        (function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && f(e, t)
        })(_, e);
        var t, n, r, o, i, a = (t = _, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = c(t);
            if (n) {
                var a = c(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : u(e)
        });

        function _() {
            var e;
            return function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, _), e = a.apply(this, arguments), l(u(e), "state", {
                columns: d(e.props.width, e.props.desiredItemWidth, e.props.maxColumns)
            }), e
        }
        return r = _, o = [{
            key: "render",
            value: function() {
                var e = this.props,
                    t = e.width,
                    n = e.height;
                return (0, e.children)(this.state.columns, t, n)
            }
        }], i = [{
            key: "getDerivedStateFromProps",
            value: function(e, t) {
                var n = d(e.width, e.desiredItemWidth, e.maxColumns);
                return n !== t.columns ? {
                    columns: n
                } : null
            }
        }], o && s(r.prototype, o), i && s(r, i), _
    }(i.Component), l(o, "defaultProps", {
        desiredItemWidth: 200
    }), o))
}