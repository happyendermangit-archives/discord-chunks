function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return k
        }
    });
    var r = n("470079"),
        o = n("803997"),
        u = n.n(o),
        c = n("658722"),
        a = n.n(c),
        i = n("392711"),
        l = n.n(i),
        s = n("126271"),
        f = n("784184"),
        p = n("32637"),
        y = n("143953"),
        h = n("941504"),
        d = n("426736"),
        v = n("344534");

    function m(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function b(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function g(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function C(e) {
        return (C = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function O(e, t) {
        return (O = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var k = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && O(e, t)
        }(w, e);
        var t, n, o, c, i, k = (t = w, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, u = C(t);
            if (n) {
                var c = C(this).constructor;
                o = Reflect.construct(u, arguments, c)
            } else o = u.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : m(e)
        });

        function w(e) {
            var t;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, w), g(m(t = k.call(this, e)), "onChangeQuery", function(e) {
                t.setState({
                    query: e
                })
            }), g(m(t), "onClearQuery", function() {
                t.setState({
                    query: ""
                })
            }), g(m(t), "onClick", function(e) {
                var n, r;
                null === (n = (r = t.props).onClick) || void 0 === n || n.call(r, e)
            }), t.state = {
                query: ""
            }, t
        }
        return o = w, c = [{
            key: "renderItems",
            value: function() {
                var e = this,
                    t = this.state.query,
                    n = s.default.flatMap(function(e, t) {
                        var n = e.alpha2,
                            o = e.phoneCountryCodes,
                            u = e.name,
                            c = (0, p.getI18NCountryName)(n);
                        return o.map(function(e) {
                            return {
                                key: "".concat(t, "-").concat(e),
                                name: u,
                                translatedName: c,
                                countryData: {
                                    name: u,
                                    alpha2: n,
                                    code: e
                                },
                                children: r.createElement(y.default, {
                                    className: d.countryItem,
                                    justify: y.default.Justify.CENTER,
                                    align: y.default.Align.CENTER
                                }, r.createElement(y.default.Child, {
                                    className: d.countryName
                                }, c), r.createElement(y.default.Child, {
                                    className: d.countryCode,
                                    grow: 0,
                                    shrink: 0
                                }, e))
                            }
                        })
                    }),
                    o = l()(n).filter(function(e) {
                        return 0 === t.length || a()(t.toLowerCase(), e.name.toLowerCase()) || a()(t.toLowerCase(), e.translatedName.toLowerCase())
                    }).map(function(t) {
                        var n, o;
                        return r.createElement(f.PopoutList.Item, (n = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))), r.forEach(function(t) {
                                    g(e, t, n[t])
                                })
                            }
                            return e
                        }({}, t), o = (o = {
                            key: t.key,
                            onClick: function() {
                                return e.onClick(t.countryData)
                            }
                        }, o), Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                            var n = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                n.push.apply(n, r)
                            }
                            return n
                        })(Object(o)).forEach(function(e) {
                            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
                        }), n))
                    }).value();
                return 0 === o.length ? r.createElement(f.PopoutList.Empty, null, h.default.Messages.NONE) : r.createElement(f.ScrollerAuto, {
                    className: d.phoneFieldScroller
                }, o)
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props.className;
                return r.createElement(f.PopoutList, {
                    className: u()(d.phoneFieldPopout, v.elevationBorderLow, e)
                }, r.createElement(f.PopoutList.SearchBar, {
                    query: this.state.query,
                    placeholder: h.default.Messages.SEARCH_COUNTRY,
                    onChange: this.onChangeQuery,
                    onClear: this.onClearQuery,
                    autoComplete: "off"
                }), r.createElement(f.PopoutList.Divider, null), this.renderItems())
            }
        }], b(o.prototype, c), i && b(o, i), w
    }(r.PureComponent)
}