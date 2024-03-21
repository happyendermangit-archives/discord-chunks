function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        getStickerAltText: function() {
            return L
        },
        default: function() {
            return N
        }
    }), i("222007");
    var r = i("37983"),
        n = i("884691"),
        s = i("414456"),
        a = i.n(s),
        l = i("627445"),
        u = i.n(l),
        c = i("146606"),
        o = i("446674"),
        d = i("290381"),
        f = i("77078"),
        S = i("206230"),
        h = i("407063"),
        m = i("54560"),
        E = i("983782"),
        I = i("866190"),
        p = i("256860"),
        k = i("161585"),
        C = i("24373"),
        g = i("782340"),
        T = i("419664");
    let v = e => e.preventDefault(),
        y = {
            tension: 1100,
            friction: 40
        },
        _ = {
            tension: 1600,
            friction: 60
        };

    function R(e, t) {
        return n.cloneElement(e, {
            "data-type": "sticker",
            "data-id": t
        })
    }

    function L(e) {
        let t = "description" in e && null != e.description ? "".concat(e.name, ", ").concat(e.description) : e.name;
        return g.default.Messages.STICKER_A11Y_LABEL.format({
            stickerName: t
        })
    }
    let x = e => {
            let {
                children: t,
                hasError: i,
                isLoading: n,
                maskAsset: s,
                size: l,
                withLoadingIndicator: u = !0
            } = e, c = l >= 33;
            return (0, r.jsxs)("div", {
                className: a(T.assetWrapper, {
                    [T.assetWrapperMasked]: i || s
                }),
                style: {
                    height: l,
                    width: l
                },
                children: [i ? (0, r.jsxs)("div", {
                    className: T.error,
                    children: [(0, r.jsx)(m.default, {
                        className: T.errorIcon
                    }), c && (0, r.jsx)(f.Text, {
                        className: T.errorText,
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: g.default.Messages.STICKER_ASSET_LOAD_ERROR
                    })]
                }) : t, u && n && (0, r.jsx)("div", {
                    className: T.loadingIndicator
                })]
            })
        },
        A = e => {
            let {
                shouldAnimate: t,
                size: s,
                sticker: a,
                fileUri: l,
                assetData: c,
                isFocused: o,
                className: d,
                maskAsset: f,
                positionRef: S,
                withLoadingIndicator: m,
                onError: E
            } = e, I = n.useRef(null), p = n.useRef(null), [k, v] = n.useState(!0), [y, _] = n.useState(!1), A = n.useRef(!1);
            A.current = t && o;
            let P = null == l ? (0, C.getStickerAssetUrl)(a) : l;
            return (u(null != P, "Unable to determine sticker asset URL. Sticker ID: ".concat(a.id)), n.useEffect(() => {
                if (null == I.current || null == P) return;
                let e = Math.min(2, (0, h.getDevicePixelRatio)());
                I.current.width = s * e, I.current.height = s * e;
                let t = !1,
                    r = async () => {
                        let {
                            default: e
                        } = await i.el("619596").then(i.bind(i, "619596"));
                        null != I.current && (p.current = new e({
                            canvas: I.current,
                            animationId: a.id,
                            assetUrl: P,
                            assetData: c,
                            onInitialDraw: () => {
                                !t && v(!1)
                            },
                            onError: () => {
                                !t && (v(!1), _(!0), null == E || E())
                            }
                        }), A.current && p.current.setState(!0))
                    };
                return r(), () => {
                    var e;
                    null === (e = p.current) || void 0 === e || e.drop(), p.current = null, t = !0
                }
            }, [P, s, a.id, c, E]), n.useEffect(() => {
                var e;
                let i;
                !t && (i = 0), null === (e = p.current) || void 0 === e || e.setState(t && o, i)
            }, [a, t, o]), null == P) ? null : (0, r.jsx)("div", {
                role: "img",
                className: d,
                "aria-label": y ? g.default.Messages.ERROR_LOADING_STICKER : L(a),
                ref: S,
                children: (0, r.jsx)(x, {
                    hasError: y,
                    isLoading: k,
                    maskAsset: f,
                    size: s,
                    withLoadingIndicator: m,
                    children: R((0, r.jsx)("canvas", {
                        className: T.lottieCanvas,
                        ref: I
                    }), a.id)
                })
            })
        },
        P = e => {
            let {
                shouldAnimate: t,
                sticker: i,
                isFocused: s,
                size: l,
                className: u,
                maskAsset: c,
                positionRef: o,
                withLoadingIndicator: f,
                fileUri: S
            } = e, [h, m] = n.useState(!1), [E, I] = n.useState(!0), [p, k] = n.useState(!1), g = n.useRef(null), y = n.useRef(null), _ = null != S ? S : (0, C.getStickerAssetUrl)(i, {
                isPreview: !t || !h || !s,
                size: l
            }), A = n.useCallback(() => {
                I(!1)
            }, []), P = n.useCallback(() => {
                k(!0)
            }, []);
            return (n.useEffect(() => {
                if (null != g.current) {
                    let {
                        isVisible: e
                    } = g.current;
                    m(e)
                }
            }, []), n.useLayoutEffect(() => {
                var e;
                (null === (e = y.current) || void 0 === e ? void 0 : e.complete) === !0 && I(!1)
            }, []), null == _) ? null : (0, r.jsx)(d.VisibilitySensor, {
                ref: g,
                onChange: m,
                threshold: .7,
                children: (0, r.jsx)("div", {
                    className: a(u, T.pngImageWrapper),
                    ref: o,
                    children: (0, r.jsx)(x, {
                        hasError: p,
                        isLoading: E,
                        maskAsset: c,
                        size: l,
                        withLoadingIndicator: f,
                        children: R((0, r.jsx)("img", {
                            className: T.pngImage,
                            alt: L(i),
                            src: _,
                            draggable: !1,
                            onError: P,
                            onLoad: A,
                            onContextMenu: v,
                            ref: y
                        }), i.id)
                    })
                })
            })
        },
        U = e => {
            let {
                disableAnimation: t,
                enlargeScaleFactor: i,
                enlargeWithName: s,
                isInteracting: a,
                positionRef: l,
                size: u,
                sticker: d
            } = e, h = (0, o.useStateFromStores)([S.default], () => S.default.useReducedMotion), m = n.useRef(null), I = {
                transform: "scale(".concat(h ? 1 : 1 / i, ")"),
                opacity: 0
            }, p = (0, c.useTransition)(a, {
                ref: m,
                from: I,
                enter: {
                    transform: "scale(1)",
                    opacity: 1
                },
                leave: I,
                config: y
            }), k = n.useRef(null), C = (0, c.useSpring)({
                ref: k,
                transform: a || h ? "translateY(0)" : "translateY(-25px)",
                opacity: a ? 1 : 0,
                config: _
            });
            return (0, c.useChain)(a ? [m, k] : [k, m], a ? [0, .0625] : [0, 0]), p((e, n) => n && (0, r.jsx)(E.AppReferencePositionLayer, {
                className: T.positionedLayer,
                fixed: !0,
                align: "center",
                position: "center",
                reference: l,
                children: () => (0, r.jsxs)("div", {
                    className: T.overlayWrapper,
                    children: [(0, r.jsx)(c.animated.div, {
                        className: T.overlayStickerWrapper,
                        style: e,
                        children: (0, r.jsx)(M, {
                            className: T.overlaySticker,
                            disableAnimation: t,
                            enlargeOnInteraction: !1,
                            isInteracting: a,
                            maskAsset: !1,
                            sticker: d,
                            size: Math.round(u * i),
                            withLoadingIndicator: !1
                        })
                    }), s && (0, r.jsx)(c.animated.div, {
                        className: T.overlayLabelWrapper,
                        style: C,
                        children: (0, r.jsx)(f.Text, {
                            variant: "text-sm/medium",
                            className: T.overlayLabel,
                            children: d.name
                        })
                    })]
                })
            }))
        },
        M = e => {
            let {
                isInteracting: t = !1,
                disableAnimation: i = !1,
                enlargeOnInteraction: s = !1,
                enlargeWithName: a = !0,
                enlargeScaleFactor: l = 1.55,
                maskAsset: u = !1,
                size: c,
                sticker: o,
                className: d,
                withLoadingIndicator: f,
                assetData: S,
                fileUri: h,
                onError: m
            } = e, E = (0, I.useIsWindowFocused)(), C = (0, p.useShouldAnimateSticker)(t) && !i, g = n.useRef(null);
            if (null == o) return null;
            let T = o.format_type === k.StickerFormat.LOTTIE ? A : P;
            return (0, r.jsxs)(n.Fragment, {
                children: [(0, r.jsx)(T, {
                    shouldAnimate: C,
                    isFocused: E,
                    size: c,
                    sticker: o,
                    className: d,
                    maskAsset: u,
                    positionRef: g,
                    withLoadingIndicator: f,
                    assetData: S,
                    fileUri: h,
                    onError: m
                }), s && (0, r.jsx)(U, {
                    disableAnimation: i,
                    enlargeScaleFactor: l,
                    enlargeWithName: a,
                    isInteracting: t,
                    positionRef: g,
                    size: c,
                    sticker: o
                })]
            }, "".concat(o.id, ",").concat(c))
        };
    var N = M
}