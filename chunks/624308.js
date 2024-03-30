function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getStickerAltText: function() {
            return C
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("512722"),
        u = n.n(a),
        s = n("718017"),
        l = n("898511"),
        c = n("513967"),
        f = n("784184"),
        d = n("622780"),
        _ = n("896299"),
        E = n("81332"),
        p = n("244749"),
        m = n("796454"),
        y = n("295030"),
        I = n("294463"),
        h = n("443699"),
        O = n("941504"),
        T = n("430690");

    function S(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function v(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function g(e, t) {
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
                if ("string" == typeof e) return S(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return S(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var A = function(e) {
            return e.preventDefault()
        },
        b = {
            tension: 1100,
            friction: 40
        },
        N = {
            tension: 1600,
            friction: 60
        };

    function R(e, t) {
        return r.cloneElement(e, {
            "data-type": "sticker",
            "data-id": t
        })
    }

    function C(e) {
        var t = "description" in e && null != e.description ? "".concat(e.name, ", ").concat(e.description) : e.name;
        return O.default.Messages.STICKER_A11Y_LABEL.format({
            stickerName: t
        })
    }
    var P = function(e) {
            var t, n, o, a = e.children,
                u = e.hasError,
                s = e.isLoading,
                l = e.maskAsset,
                c = e.size,
                d = e.withLoadingIndicator,
                _ = c >= 33;
            return r.createElement("div", {
                className: i()(T.assetWrapper, (t = {}, n = T.assetWrapperMasked, o = u || l, n in t ? Object.defineProperty(t, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = o, t)),
                style: {
                    height: c,
                    width: c
                }
            }, u ? r.createElement("div", {
                className: T.error
            }, r.createElement(E.default, {
                className: T.errorIcon
            }), _ && r.createElement(f.Text, {
                className: T.errorText,
                color: "header-secondary",
                variant: "text-sm/normal"
            }, O.default.Messages.STICKER_ASSET_LOAD_ERROR)) : a, (void 0 === d || d) && s && r.createElement("div", {
                className: T.loadingIndicator
            }))
        },
        D = function(e) {
            var t = e.shouldAnimate,
                o = e.size,
                i = e.sticker,
                a = e.fileUri,
                s = e.assetData,
                l = e.isFocused,
                c = e.className,
                f = e.maskAsset,
                d = e.positionRef,
                E = e.withLoadingIndicator,
                p = e.onError,
                m = r.useRef(null),
                y = r.useRef(null),
                I = g(r.useState(!0), 2),
                S = I[0],
                A = I[1],
                b = g(r.useState(!1), 2),
                N = b[0],
                D = b[1],
                L = r.useRef(!1);
            L.current = t && l;
            var M = null == a ? (0, h.getStickerAssetUrl)(i) : a;
            return (u()(null != M, "Unable to determine sticker asset URL. Sticker ID: ".concat(i.id)), r.useEffect(function() {
                if (null != m.current && null != M) {
                    var e, t, r = Math.min(2, (0, _.getDevicePixelRatio)());
                    m.current.width = o * r, m.current.height = o * r;
                    var a = !1;
                    return (t = (e = function() {
                            var e;
                            return function(e, t) {
                                var n, r, o, i, a = {
                                    label: 0,
                                    sent: function() {
                                        if (1 & o[0]) throw o[1];
                                        return o[1]
                                    },
                                    trys: [],
                                    ops: []
                                };
                                return i = {
                                    next: u(0),
                                    throw: u(1),
                                    return: u(2)
                                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                    return this
                                }), i;

                                function u(i) {
                                    return function(u) {
                                        return function(i) {
                                            if (n) throw TypeError("Generator is already executing.");
                                            for (; a;) try {
                                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                                    case 0:
                                                    case 1:
                                                        o = i;
                                                        break;
                                                    case 4:
                                                        return a.label++, {
                                                            value: i[1],
                                                            done: !1
                                                        };
                                                    case 5:
                                                        a.label++, r = i[1], i = [0];
                                                        continue;
                                                    case 7:
                                                        i = a.ops.pop(), a.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                            a = 0;
                                                            continue
                                                        }
                                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                            a.label = i[1];
                                                            break
                                                        }
                                                        if (6 === i[0] && a.label < o[1]) {
                                                            a.label = o[1], o = i;
                                                            break
                                                        }
                                                        if (o && a.label < o[2]) {
                                                            a.label = o[2], a.ops.push(i);
                                                            break
                                                        }
                                                        o[2] && a.ops.pop(), a.trys.pop();
                                                        continue
                                                }
                                                i = t.call(e, a)
                                            } catch (e) {
                                                i = [6, e], r = 0
                                            } finally {
                                                n = o = 0
                                            }
                                            if (5 & i[0]) throw i[1];
                                            return {
                                                value: i[0] ? i[1] : void 0,
                                                done: !0
                                            }
                                        }([i, u])
                                    }
                                }
                            }(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, n.e("34734").then(n.bind(n, "169882"))];
                                    case 1:
                                        if (e = t.sent().default, null == m.current) return [2];
                                        return y.current = new e({
                                            canvas: m.current,
                                            animationId: i.id,
                                            assetUrl: M,
                                            assetData: s,
                                            onInitialDraw: function() {
                                                !a && A(!1)
                                            },
                                            onError: function() {
                                                !a && (A(!1), D(!0), null == p || p())
                                            }
                                        }), L.current && y.current.setState(!0), [2]
                                }
                            })
                        }, function() {
                            var t = this,
                                n = arguments;
                            return new Promise(function(r, o) {
                                var i = e.apply(t, n);

                                function a(e) {
                                    v(i, r, o, a, u, "next", e)
                                }

                                function u(e) {
                                    v(i, r, o, a, u, "throw", e)
                                }
                                a(void 0)
                            })
                        }), function() {
                            return t.apply(this, arguments)
                        })(),
                        function() {
                            var e;
                            null === (e = y.current) || void 0 === e || e.drop(), y.current = null, a = !0
                        }
                }
            }, [M, o, i.id, s, p]), r.useEffect(function() {
                var e, n;
                !t && (n = 0), null === (e = y.current) || void 0 === e || e.setState(t && l, n)
            }, [i, t, l]), null == M) ? null : r.createElement("div", {
                role: "img",
                className: c,
                "aria-label": N ? O.default.Messages.ERROR_LOADING_STICKER : C(i),
                ref: d
            }, r.createElement(P, {
                hasError: N,
                isLoading: S,
                maskAsset: f,
                size: o,
                withLoadingIndicator: E
            }, R(r.createElement("canvas", {
                className: T.lottieCanvas,
                ref: m
            }), i.id)))
        },
        L = function(e) {
            var t = e.shouldAnimate,
                n = e.sticker,
                o = e.isFocused,
                a = e.size,
                u = e.className,
                s = e.maskAsset,
                l = e.positionRef,
                f = e.withLoadingIndicator,
                d = e.fileUri,
                _ = g(r.useState(!1), 2),
                E = _[0],
                p = _[1],
                m = g(r.useState(!0), 2),
                y = m[0],
                I = m[1],
                O = g(r.useState(!1), 2),
                S = O[0],
                v = O[1],
                b = r.useRef(null),
                N = r.useRef(null),
                D = null != d ? d : (0, h.getStickerAssetUrl)(n, {
                    isPreview: !t || !E || !o,
                    size: a
                }),
                L = r.useCallback(function() {
                    I(!1)
                }, []),
                M = r.useCallback(function() {
                    v(!0)
                }, []);
            return (r.useEffect(function() {
                null != b.current && p(b.current.isVisible)
            }, []), r.useLayoutEffect(function() {
                var e;
                (null === (e = N.current) || void 0 === e ? void 0 : e.complete) === !0 && I(!1)
            }, []), null == D) ? null : r.createElement(c.VisibilitySensor, {
                ref: b,
                onChange: p,
                threshold: .7
            }, r.createElement("div", {
                className: i()(u, T.__invalid_pngImageWrapper),
                ref: l
            }, r.createElement(P, {
                hasError: S,
                isLoading: y,
                maskAsset: s,
                size: a,
                withLoadingIndicator: f
            }, R(r.createElement("img", {
                className: T.pngImage,
                alt: C(n),
                src: D,
                draggable: !1,
                onError: M,
                onLoad: L,
                onContextMenu: A,
                ref: N
            }), n.id))))
        },
        M = function(e) {
            var t = e.disableAnimation,
                n = e.enlargeScaleFactor,
                o = e.enlargeWithName,
                i = e.isInteracting,
                a = e.positionRef,
                u = e.size,
                c = e.sticker,
                _ = (0, l.useStateFromStores)([d.default], function() {
                    return d.default.useReducedMotion
                }),
                E = r.useRef(null),
                m = {
                    transform: "scale(".concat(_ ? 1 : 1 / n, ")"),
                    opacity: 0
                },
                y = (0, s.useTransition)(i, {
                    ref: E,
                    from: m,
                    enter: {
                        transform: "scale(1)",
                        opacity: 1
                    },
                    leave: m,
                    config: b
                }),
                I = r.useRef(null),
                h = (0, s.useSpring)({
                    ref: I,
                    transform: i || _ ? "translateY(0)" : "translateY(-25px)",
                    opacity: i ? 1 : 0,
                    config: N
                });
            return (0, s.useChain)(i ? [E, I] : [I, E], i ? [0, .0625] : [0, 0]), y(function(e, l) {
                return l && r.createElement(p.AppReferencePositionLayer, {
                    className: T.positionedLayer,
                    fixed: !0,
                    align: "center",
                    position: "center",
                    reference: a
                }, function() {
                    return r.createElement("div", {
                        className: T.overlayWrapper
                    }, r.createElement(s.animated.div, {
                        className: T.overlayStickerWrapper,
                        style: e
                    }, r.createElement(U, {
                        className: T.__invalid_overlaySticker,
                        disableAnimation: t,
                        enlargeOnInteraction: !1,
                        isInteracting: i,
                        maskAsset: !1,
                        sticker: c,
                        size: Math.round(u * n),
                        withLoadingIndicator: !1
                    })), o && r.createElement(s.animated.div, {
                        className: T.overlayLabelWrapper,
                        style: h
                    }, r.createElement(f.Text, {
                        variant: "text-sm/medium",
                        className: T.overlayLabel
                    }, c.name)))
                })
            })
        },
        U = function(e) {
            var t = e.isInteracting,
                n = void 0 !== t && t,
                o = e.disableAnimation,
                i = void 0 !== o && o,
                a = e.enlargeOnInteraction,
                u = e.enlargeWithName,
                s = e.enlargeScaleFactor,
                l = e.maskAsset,
                c = e.size,
                f = e.sticker,
                d = e.className,
                _ = e.withLoadingIndicator,
                E = e.assetData,
                p = e.fileUri,
                h = e.onError,
                O = (0, m.useIsWindowFocused)(),
                T = (0, y.useShouldAnimateSticker)(n) && !i,
                S = r.useRef(null);
            if (null == f) return null;
            var v = f.format_type === I.StickerFormat.LOTTIE ? D : L;
            return r.createElement(r.Fragment, {
                key: "".concat(f.id, ",").concat(c)
            }, r.createElement(v, {
                shouldAnimate: T,
                isFocused: O,
                size: c,
                sticker: f,
                className: d,
                maskAsset: void 0 !== l && l,
                positionRef: S,
                withLoadingIndicator: _,
                assetData: E,
                fileUri: p,
                onError: h
            }), void 0 !== a && a && r.createElement(M, {
                disableAnimation: i,
                enlargeScaleFactor: void 0 === s ? 1.55 : s,
                enlargeWithName: void 0 === u || u,
                isInteracting: n,
                positionRef: S,
                size: c,
                sticker: f
            }))
        };
    t.default = U
}