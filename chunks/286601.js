function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var r, o = n("470079"),
        i = n("153832"),
        a = n("870331"),
        u = n("943959"),
        s = n("281767");

    function l(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function d(e) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _(e, t) {
        return (_ = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var E = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _(e, t)
        }(m, e);
        var t, n, r, s, E, p = (t = m, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = d(t);
            if (n) {
                var a = d(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : l(e)
        });

        function m(e) {
            var t;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, m), f(l(t = p.call(this, e)), "_loadId", null), f(l(t), "_loadDate", t.props.root ? Date.now() : null), f(l(t), "getLocation", (0, u.cachedFunction)(function(e, t, n, r) {
                var o = {};
                return null != e && (o.page = e), null != t && (o.section = t), null != n && (o.object = n), null != r && (o.objectType = r), o
            })), f(l(t), "mergeLocation", (0, u.cachedFunction)(function(e, t) {
                return function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            f(e, t, n[t])
                        })
                    }
                    return e
                }({}, e, t)
            })), f(l(t), "getContext", (0, u.cachedFunction)(function(e, t, n) {
                return {
                    location: e,
                    loadDate: t,
                    loadId: n
                }
            })), null != e.loadId ? t._loadId = e.loadId : e.root && (t._loadId = (0, i.v4)()), t
        }
        return r = m, s = [{
            key: "renderProvider",
            value: function(e) {
                var t, n, r = this.props,
                    i = r.section,
                    u = r.page,
                    s = r.object,
                    l = r.objectType,
                    c = r.children,
                    f = this.mergeLocation(e.location, this.getLocation(u, i, s, l)),
                    d = this.getContext(f, null !== (t = this._loadDate) && void 0 !== t ? t : e.loadDate, null !== (n = this._loadId) && void 0 !== n ? n : e.loadId);
                return o.createElement(a.AnalyticsContext.Provider, {
                    value: d
                }, c)
            }
        }, {
            key: "render",
            value: function() {
                var e = this,
                    t = this.props.context;
                return null != t ? this.renderProvider(t) : o.createElement(a.AnalyticsContext.Consumer, null, function(t) {
                    return e.renderProvider(t)
                })
            }
        }], c(r.prototype, s), E && c(r, E), m
    }(o.Component);
    f(E, "Pages", s.AnalyticsPages), f(E, "Sections", s.AnalyticsSections), f(E, "Objects", s.AnalyticsObjects), f(E, "ObjectTypes", s.AnalyticsObjectTypes), f(E, "defaultProps", {
        root: !1
    })
}