function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EmbedIFrameWithLoadingBackground: function() {
            return v
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("482033"),
        u = n("153832"),
        s = n("898511"),
        l = n("423731"),
        c = n("511152"),
        f = n("798206"),
        d = n("120447"),
        _ = n("589694"),
        E = n("141582"),
        p = n("997133"),
        m = n("281767"),
        y = n("735809");

    function I(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function h(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function O(e, t) {
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

    function T(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
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
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return I(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return I(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function S(e) {
        var t = e.url,
            n = e.className,
            o = e.style,
            i = e.onLoad,
            y = e.shouldRefocus,
            I = e.queryParams,
            S = e.allowPopups,
            v = e.referrerPolicy,
            g = (0, s.useStateFromStores)([l.default], function() {
                return l.default.getWindow(m.PopoutWindowKeys.CHANNEL_CALL_POPOUT)
            }),
            A = (0, a.useMemoOne)(function() {
                return (0, u.v4)()
            }, [t]),
            b = r.useRef(null),
            N = (0, _.default)(b, y, null == g ? window : g),
            R = O(h({}, I), {
                frame_id: A,
                platform: p.ActivityPlatform.DESKTOP
            }),
            C = T(r.useState(!1), 2),
            P = C[0],
            D = C[1],
            L = f.default.theme,
            M = h({}, o);
        return L === m.ThemeTypes.LIGHT ? M.colorScheme = "light" : M.colorScheme = "dark", r.useEffect(function() {
            return d.ComponentDispatch.dispatch(m.ComponentActions.IFRAME_MOUNT, {
                    id: A
                }),
                function() {
                    d.ComponentDispatch.dispatch(m.ComponentActions.IFRAME_UNMOUNT, {
                        id: A
                    })
                }
        }, [A]), d.ComponentDispatch.subscribe(m.ComponentActions.MANUAL_IFRAME_RESIZING, function(e) {
            D(e.resizing)
        }), P && (M.pointerEvents = "none"), null != t ? r.createElement("iframe", {
            style: M,
            allow: "autoplay; encrypted-media",
            referrerPolicy: void 0 === v ? "origin" : v,
            onLoad: function(e) {
                var n;
                null == i || i(e.target), b.current = e.target, N(!0), null === (n = e.target.contentWindow) || void 0 === n || n.postMessage([c.default.HELLO, R], null != t ? t : "")
            },
            sandbox: (0, E.default)({
                allowPopups: void 0 !== S && S
            }),
            className: n,
            src: "".concat(t, "?").concat(new URLSearchParams(R))
        }) : null
    }

    function v(e) {
        var t = e.onLoad,
            n = T(r.useState(!1), 2),
            o = n[0],
            a = n[1],
            u = r.useCallback(function(e) {
                a(!0), null == t || t(e)
            }, [t]);
        return r.createElement("div", {
            className: y.fillParent
        }, !o && r.createElement("div", {
            className: i()(y.fillParent, y.iframePlaceholder)
        }), r.createElement("div", {
            className: i()(y.fillParent, o ? void 0 : y.hiddenIframeContainer)
        }, r.createElement(S, O(h({}, e), {
            onLoad: u
        }))))
    }
}