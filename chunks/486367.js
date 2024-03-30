function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return b
        }
    });
    var r, o = n("470079"),
        i = n("803997"),
        a = n.n(i),
        u = n("751848"),
        s = n("784184"),
        l = n("523263"),
        c = n("839582"),
        f = n("182425"),
        d = n("930097"),
        _ = n("846645"),
        E = n("766063"),
        p = n("281767"),
        m = n("941504"),
        y = n("457731"),
        I = n("167969"),
        h = n("557256");

    function O(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function T(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function S(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function v(e) {
        return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function g(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                S(e, t, n[t])
            })
        }
        return e
    }

    function A(e, t) {
        return (A = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var b = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && A(e, t)
        }(d, e);
        var t, n, r, i, u, l = (t = d, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = v(t);
            if (n) {
                var a = v(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : O(e)
        });

        function d() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, d), e = l.apply(this, arguments), S(O(e), "_containerRef", o.createRef()), S(O(e), "_clickableRef", o.createRef()), e
        }
        return r = d, i = [{
            key: "render",
            value: function() {
                var e, t, n = this.props,
                    r = n.className,
                    i = n.imageClassName,
                    u = n.readyState,
                    l = n.src,
                    d = n.placeholder,
                    I = n.placeholderVersion,
                    h = n.alt,
                    O = n.width,
                    T = n.height,
                    v = n.maxWidth,
                    A = void 0 === v ? O : v,
                    b = n.maxHeight,
                    C = void 0 === b ? T : b,
                    P = n.minWidth,
                    D = n.minHeight,
                    L = n.mediaLayoutType,
                    M = n.limitResponsiveWidth,
                    U = n.accessory,
                    w = n.zoomable,
                    k = n.original,
                    G = n.children,
                    B = n.renderAccessory,
                    j = n.onClick,
                    F = n.tabIndex,
                    V = n.useFullWidth,
                    H = function(e, t) {
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
                    }(n, ["className", "imageClassName", "readyState", "src", "placeholder", "placeholderVersion", "alt", "width", "height", "maxWidth", "maxHeight", "minWidth", "minHeight", "mediaLayoutType", "limitResponsiveWidth", "accessory", "zoomable", "original", "children", "renderAccessory", "onClick", "tabIndex", "useFullWidth"]);
                if (1 === O && 1 === T) return null;
                var x = (0, f.fit)({
                        width: O,
                        height: T,
                        maxWidth: A,
                        maxHeight: C,
                        minWidth: P,
                        minHeight: D
                    }),
                    Y = 0 !== x.width ? x.width / x.height : 1;
                "" !== l && u !== p.ImageReadyStates.ERROR ? e = G({
                    src: l,
                    size: x,
                    alt: h,
                    className: i,
                    mediaLayoutType: L
                }) : u !== p.ImageReadyStates.LOADING && (e = o.createElement(N, {
                    size: x,
                    mediaLayoutType: L,
                    alt: h
                })), e = o.createElement(_.ImageLoadingOverlay, {
                    readyState: u,
                    aspectRatio: Y,
                    placeholder: d,
                    placeholderVersion: I,
                    placeholderStyle: R(x, L)
                }, e);
                var W = null != B ? B() : null;
                return W = null != W ? W : U, o.createElement(s.FocusRing, {
                    ringTarget: this._containerRef,
                    focusTarget: this._clickableRef
                }, o.createElement("div", g({
                    className: a()(y.imageWrapper, (S(t = {}, y.imageZoom, w), S(t, y.imageWrapperBackground, u !== p.ImageReadyStates.READY), S(t, y.clickable, null != j), t), r),
                    style: function(e, t, n, r) {
                        return r === E.MediaLayoutType.MOSAIC ? {
                            display: "block",
                            maxHeight: "inherit",
                            margin: "auto",
                            width: !n && e.width <= E.MEDIA_MOSAIC_MAX_WIDTH ? e.width : "100%",
                            height: "100%"
                        } : r === E.MediaLayoutType.RESPONSIVE ? {
                            maxWidth: t ? e.width : void 0,
                            width: "100%",
                            aspectRatio: "".concat(e.width, " / ").concat(e.height)
                        } : e
                    }(x, void 0 === M || M, void 0 !== V && V, L)
                }, H), null != k && o.createElement("a", {
                    tabIndex: -1,
                    onClick: j,
                    "aria-hidden": !0,
                    className: y.originalLink,
                    href: k,
                    ref: this._containerRef,
                    "data-role": "img",
                    "data-safe-src": l
                }), null != j ? o.createElement(s.Clickable, {
                    className: y.clickableWrapper,
                    tabIndex: null != F ? F : 0,
                    onClick: j,
                    "aria-label": null != h ? h : m.default.Messages.IMAGE,
                    "aria-describedby": c.IMAGE_OPEN_DIALOG_DESCRIPTION,
                    innerRef: this._clickableRef,
                    focusProps: {
                        enabled: !1
                    }
                }, e) : e, null != W ? o.createElement("div", {
                    className: y.imageAccessory
                }, W) : null))
            }
        }], T(r.prototype, i), u && T(r, u), d
    }(o.PureComponent);

    function N(e) {
        var t = e.size,
            n = e.mediaLayoutType,
            r = e.alt,
            i = (0, l.default)();
        return o.createElement("div", {
            className: y.imageErrorWrapper,
            style: function(e, t) {
                switch (t) {
                    case E.MediaLayoutType.MOSAIC:
                        return {
                            width: "100%", height: "100%", aspectRatio: "".concat(e.width, " / ").concat(e.height), display: "flex", maxHeight: "inherit"
                        };
                    case E.MediaLayoutType.RESPONSIVE:
                        var n, r;
                        return n = g({}, C(e)), r = (r = {
                            display: "flex"
                        }, r), Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                            var n = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                n.push.apply(n, r)
                            }
                            return n
                        })(Object(r)).forEach(function(e) {
                            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
                        }), n;
                    default:
                        return e
                }
            }(t, n)
        }, o.createElement("img", {
            src: (0, u.isThemeLight)(i) ? h : I,
            className: y.imageError,
            alt: null != r ? r : m.default.Messages.IMAGE
        }))
    }
    S(b, "defaultProps", {
        readyState: p.ImageReadyStates.READY,
        zoomable: !0,
        children: function(e) {
            var t = e.src,
                n = e.size,
                r = e.alt,
                i = e.className,
                a = e.mediaLayoutType;
            return o.createElement("img", {
                className: null != i ? i : void 0,
                alt: null != r ? r : m.default.Messages.IMAGE,
                src: t,
                style: R(n, a)
            })
        },
        minWidth: 0,
        minHeight: 0
    });

    function R(e, t) {
        switch (t) {
            case E.MediaLayoutType.MOSAIC:
                return {
                    display: "block", objectFit: "cover", minWidth: "100%", minHeight: "100%", maxWidth: 1 === (0, d.default)() ? "calc(100% + 1px)" : "100%"
                };
            case E.MediaLayoutType.RESPONSIVE:
                return C(e);
            default:
                return e
        }
    }

    function C(e) {
        var t = e.width,
            n = e.height;
        return {
            maxWidth: t,
            maxHeight: n,
            width: "100%",
            display: "block",
            aspectRatio: "".concat(t, " / ").concat(n)
        }
    }
}