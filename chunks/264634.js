function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ImageModal: function() {
            return A
        },
        VideoModal: function() {
            return b
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("56300"),
        u = n("784184"),
        s = n("325666"),
        l = n("134981"),
        c = n("120447"),
        f = n("182425"),
        d = n("851094"),
        _ = n("378294"),
        E = n("204315"),
        p = n("778653"),
        m = n("281767"),
        y = n("941504"),
        I = n("873415");

    function h(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function O(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function T(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                O(e, t, n[t])
            })
        }
        return e
    }

    function S(e, t) {
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
    }

    function v(e) {
        var t = e.onClose,
            n = r.useRef(null);
        return r.createElement("div", {
            className: I.mobileCloseWrapper,
            ref: n
        }, r.createElement(u.FocusRingScope, {
            containerRef: n
        }, r.createElement("div", null, r.createElement(s.default, {
            closeAction: t,
            keybind: "ESC"
        }))))
    }
    var g = function(e) {
        var t, n, o = e.children,
            a = e.hasMediaControls,
            u = e.isObscured,
            s = e.src;
        var c = (t = r.useState(!1), n = 2, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
                var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != o) {
                    var i = [],
                        a = !0,
                        u = !1;
                    try {
                        for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                    } catch (e) {
                        u = !0, r = e
                    } finally {
                        try {
                            !a && null != o.return && o.return()
                        } finally {
                            if (u) throw r
                        }
                    }
                    return i
                }
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return h(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            f = c[0],
            d = c[1],
            _ = r.useRef(s);
        return (r.useEffect(function() {
            s !== _.current && d(!u)
        }, [s, u]), u) ? r.createElement(p.ObscuredDisplayContext.Provider, {
            value: f
        }, r.createElement(p.default, {
            key: s,
            type: p.default.Types.ATTACHMENT,
            reason: l.ObscureReason.EXPLICIT_CONTENT,
            className: I.obscureContainer,
            obscured: !0,
            isSingleMosaicItem: !0,
            obscurityControlClassName: i()(O({}, I.controlsOffset, a && f)),
            onToggleObscurity: function(e) {
                e.stopPropagation(), e.nativeEvent.stopPropagation(), d(function(e) {
                    return !e
                })
            }
        }, function(e) {
            return r.createElement(r.Fragment, null, r.createElement("div", {
                className: i()(I.obscureWrapper, O({}, I.obscure, e))
            }, o(e)))
        })) : r.createElement(r.Fragment, null, o(!1))
    };

    function A(e) {
        var t = e.src,
            n = e.original,
            o = e.placeholder,
            i = e.width,
            u = e.height,
            s = e.animated,
            l = e.children,
            d = e.responsive,
            E = e.renderLinkComponent,
            p = (e.maxWidth, e.maxHeight, e.shouldAnimate, e.onClose),
            h = e.shouldHideMediaOptions,
            O = void 0 !== h && h,
            A = e.obscure,
            b = S(e, ["src", "original", "placeholder", "width", "height", "animated", "children", "responsive", "renderLinkComponent", "maxWidth", "maxHeight", "shouldAnimate", "onClose", "shouldHideMediaOptions", "obscure"]),
            N = (0, f.zoomFit)(i, u),
            R = N.width,
            C = N.height,
            P = a.isMobile && null != p;
        r.useEffect(function() {
            if (null != p) return c.ComponentDispatch.subscribe(m.ComponentActions.MEDIA_MODAL_CLOSE, p),
                function() {
                    c.ComponentDispatch.unsubscribe(m.ComponentActions.MEDIA_MODAL_CLOSE, p)
                }
        }, [p]);
        var D = O ? function(e) {
            e.stopPropagation(), e.preventDefault()
        } : b.onContextMenu;
        return r.createElement("div", {
            className: I.wrapper
        }, P ? r.createElement(v, {
            onClose: p
        }) : null, r.createElement(g, {
            isObscured: void 0 !== A && A,
            src: t
        }, function(e) {
            return r.createElement(_.default, T({
                key: t,
                src: t,
                placeholder: o,
                shouldLink: !1,
                width: i,
                height: u,
                maxWidth: R,
                maxHeight: C,
                children: l,
                animated: !e && s,
                autoPlay: !e,
                responsive: d,
                onContextMenu: D
            }, b))
        }), null != n && !O && E({
            href: n,
            target: "_blank",
            rel: "noreferrer noopener",
            className: I.downloadLink,
            children: y.default.Messages.OPEN_IN_BROWSER
        }))
    }

    function b(e) {
        var t = e.src,
            n = e.width,
            o = e.height,
            u = e.onClose,
            s = e.renderLinkComponent,
            l = e.shouldHideMediaOptions,
            c = void 0 !== l && l,
            _ = e.obscure,
            p = S(e, ["src", "width", "height", "onClose", "renderLinkComponent", "shouldHideMediaOptions", "obscure"]),
            m = (0, f.zoomFit)(n, o),
            h = m.width,
            O = m.height,
            A = a.isMobile && null != u,
            b = c ? function(e) {
                e.stopPropagation(), e.preventDefault()
            } : p.onContextMenu;
        return r.createElement("div", {
            className: i()(I.wrapper, I.videoWrapper)
        }, A ? r.createElement(v, {
            onClose: u
        }) : null, r.createElement(g, {
            hasMediaControls: !0,
            isObscured: void 0 !== _ && _,
            src: t
        }, function(e) {
            return r.createElement(E.default, T({
                key: t,
                src: t,
                width: n,
                height: o,
                maxWidth: h,
                maxHeight: O,
                renderLinkComponent: s,
                volume: d.getVolume,
                autoMute: d.getMuted,
                onVolumeChange: d.setVolume,
                onMute: d.setMuted,
                autoPlay: !e,
                onContextMenu: b
            }, p))
        }), !c && s({
            href: t,
            target: "_blank",
            rel: "noreferrer noopener",
            className: I.downloadLink,
            children: y.default.Messages.OPEN_IN_BROWSER
        }))
    }
}