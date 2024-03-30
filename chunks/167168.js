function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return v
        }
    });
    var r, o = n("470079"),
        i = n("188104"),
        a = n("784184"),
        u = n("813970"),
        s = n("378294"),
        l = n("264634"),
        c = n("182425"),
        f = n("796454"),
        d = n("941504"),
        _ = n("988517");

    function E(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function p(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function m(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function y(e) {
        return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function I(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                m(e, t, n[t])
            })
        }
        return e
    }

    function h(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function O(e, t) {
        return (O = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var T = "Zoomed Lazy Image Modal",
        S = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && O(e, t)
            }(v, e);
            var t, n, r, u, f, S = (t = v, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = y(t);
                if (n) {
                    var a = y(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : E(e)
            });

            function v() {
                var e;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, v), e = S.apply(this, arguments), m(E(e), "onMouseEnter", function(t, n) {
                    var r = n.preloadImage,
                        o = e.props,
                        i = o.width,
                        a = o.height;
                    r((0, c.zoomFit)(i, a))
                }), m(E(e), "modalContext", (0, a.modalContextFromAppContext)(e.props.appContext)), m(E(e), "onCloseImage", function() {
                    (0, a.closeModal)(T, e.modalContext)
                }), m(E(e), "onZoom", function(t, n) {
                    var r = n.zoomThumbnailPlaceholder,
                        u = n.trigger;
                    t.preventDefault();
                    var s = e.props,
                        c = s.alt,
                        f = s.src,
                        E = s.original,
                        p = s.width,
                        m = s.height,
                        y = s.animated,
                        O = s.children,
                        S = s.renderLinkComponent,
                        v = s.isWindowFocused,
                        g = s.shouldHideMediaOptions,
                        A = void 0 !== g && g,
                        b = {
                            alt: c,
                            src: f,
                            original: null != E ? E : f,
                            width: p,
                            height: m,
                            animated: y,
                            children: O,
                            zoomThumbnailPlaceholder: r,
                            renderLinkComponent: S,
                            onContextMenu: A ? function(e) {
                                e.stopPropagation(), e.preventDefault()
                            } : void 0,
                            trigger: u
                        };
                    (0, i.isElement)(t.currentTarget) && t.currentTarget.blur(), (0, a.openModal)(function(t) {
                        return o.createElement(a.ModalRoot, h(I({
                            className: _.modal
                        }, t), {
                            size: a.ModalSize.DYNAMIC,
                            "aria-label": d.default.Messages.IMAGE
                        }), o.createElement(l.ImageModal, h(I({}, b), {
                            className: _.image,
                            shouldAnimate: v,
                            onClose: e.onCloseImage,
                            shouldHideMediaOptions: A
                        })))
                    }, {
                        modalKey: T
                    }, e.modalContext)
                }), e
            }
            return r = v, u = [{
                key: "render",
                value: function() {
                    var e = this.props,
                        t = (e.appContext, e.isWindowFocused),
                        n = function(e, t) {
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
                        }(e, ["appContext", "isWindowFocused"]);
                    return o.createElement(s.default, h(I({}, n), {
                        onZoom: this.onZoom,
                        onMouseEnter: this.onMouseEnter,
                        shouldAnimate: t
                    }))
                }
            }], p(r.prototype, u), f && p(r, f), v
        }(o.PureComponent);

    function v(e) {
        var t = (0, u.useAppContext)(),
            n = (0, f.useIsWindowFocused)();
        return o.createElement(S, h(I({}, e), {
            isWindowFocused: n,
            appContext: t
        }))
    }
    m(S, "defaultProps", {
        shouldLink: !0,
        autoPlay: !1,
        animated: !1
    })
}