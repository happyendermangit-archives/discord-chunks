function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("470079"),
        i = n("803997"),
        a = n.n(i),
        u = n("784184"),
        s = n("639378");

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
    var E = {
            SMALL: s.sizeSmall,
            MEDIUM: s.sizeMedium,
            LARGE: s.sizeLarge
        },
        p = function(e) {
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
            var t, n, r, i, E, p = (t = m, n = function() {
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
                }(this, m), f(l(t = p.call(this, e)), "_scroller", null), f(l(t), "setRef", function(e) {
                    t._scroller = e, null != e && t.calculateScroll()
                }), f(l(t), "handleScroll", function(e) {
                    t.calculateScroll();
                    var n = t.props.onScroll;
                    null == n || n(e)
                }), t.state = {
                    hideSeparator: !1
                }, t
            }
            return r = m, i = [{
                key: "calculateScroll",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._scroller;
                    if (null != e) {
                        var t = e.getScrollerState().scrollTop,
                            n = this.state.hideSeparator;
                        0 !== t || n ? t > 0 && n && this.setState({
                            hideSeparator: !1
                        }) : this.setState({
                            hideSeparator: !0
                        })
                    }
                }
            }, {
                key: "getScroller",
                value: function() {
                    return this._scroller
                }
            }, {
                key: "renderChildren",
                value: function() {
                    var e = this,
                        t = this.state.hideSeparator;
                    return o.Children.map(this.props.children, function(n) {
                        return o.isValidElement(n) ? n.type === u.ModalContent || n.type === u.ModalListContent ? o.cloneElement(n, {
                            scrollerRef: e.setRef,
                            onScroll: e.handleScroll,
                            onResize: e.handleScroll
                        }) : n.type === u.ModalHeader && t ? o.cloneElement(n, {
                            separator: !1
                        }) : n : n
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.className,
                        n = (e.children, e.tag),
                        r = e.size,
                        i = e.fullscreenOnMobile,
                        u = function(e, t) {
                            if (null == e) return {};
                            var n, r, o = function(e, t) {
                                if (null == e) return {};
                                var n, r, o = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                                return o
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(e);
                                for (r = 0; r < i.length; r++) {
                                    if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                                }
                            }
                            return o
                        }(e, ["className", "children", "tag", "size", "fullscreenOnMobile"]);
                    return o.createElement(n, function(e) {
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
                    }({
                        className: a()(s.modal, t, r, f({}, s.fullscreenOnMobile, i))
                    }, u), this.renderChildren())
                }
            }], c(r.prototype, i), E && c(r, E), m
        }(o.PureComponent);
    f(p, "Header", u.ModalHeader), f(p, "Footer", u.ModalFooter), f(p, "Content", u.ModalContent), f(p, "ListContent", u.ModalListContent), f(p, "CloseButton", u.ModalCloseButton), f(p, "Sizes", E), f(p, "defaultProps", {
        fullscreenOnMobile: !0,
        size: E.SMALL,
        tag: "div"
    }), t.default = p
}