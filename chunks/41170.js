function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        getStickerAltText: function() {
            return _
        },
        default: function() {
            return M
        }
    }), r("222007");
    var n = r("37983"),
        i = r("884691"),
        s = r("414456"),
        l = r.n(s),
        a = r("627445"),
        u = r.n(a),
        c = r("907002"),
        d = r("446674"),
        o = r("290381"),
        f = r("77078"),
        S = r("206230"),
        k = r("407063"),
        p = r("54560"),
        y = r("983782"),
        m = r("866190"),
        E = r("256860"),
        h = r("161585"),
        I = r("24373"),
        v = r("782340"),
        g = r("419664");
    let C = e => e.preventDefault(),
        T = {
            tension: 1100,
            friction: 40
        },
        R = {
            tension: 1600,
            friction: 60
        };

    function x(e, t) {
        return i.cloneElement(e, {
            "data-type": "sticker",
            "data-id": t
        })
    }

    function _(e) {
        let t = "description" in e && null != e.description ? "".concat(e.name, ", ").concat(e.description) : e.name;
        return v.default.Messages.STICKER_A11Y_LABEL.format({
            stickerName: t
        })
    }
    let A = e => {
            let {
                children: t,
                hasError: r,
                isLoading: i,
                maskAsset: s,
                size: a,
                withLoadingIndicator: u = !0
            } = e, c = a >= 33;
            return (0, n.jsxs)("div", {
                className: l(g.assetWrapper, {
                    [g.assetWrapperMasked]: r || s
                }),
                style: {
                    height: a,
                    width: a
                },
                children: [r ? (0, n.jsxs)("div", {
                    className: g.error,
                    children: [(0, n.jsx)(p.default, {
                        className: g.errorIcon
                    }), c && (0, n.jsx)(f.Text, {
                        className: g.errorText,
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: v.default.Messages.STICKER_ASSET_LOAD_ERROR
                    })]
                }) : t, u && i && (0, n.jsx)("div", {
                    className: g.loadingIndicator
                })]
            })
        },
        N = e => {
            let {
                shouldAnimate: t,
                size: s,
                sticker: l,
                fileUri: a,
                assetData: c,
                isFocused: d,
                className: o,
                maskAsset: f,
                positionRef: S,
                withLoadingIndicator: p,
                onError: y
            } = e, m = i.useRef(null), E = i.useRef(null), [h, C] = i.useState(!0), [T, R] = i.useState(!1), N = i.useRef(!1);
            N.current = t && d;
            let L = null == a ? (0, I.getStickerAssetUrl)(l) : a;
            return (u(null != L, "Unable to determine sticker asset URL. Sticker ID: ".concat(l.id)), i.useEffect(() => {
                if (null == m.current || null == L) return;
                let e = Math.min(2, (0, k.getDevicePixelRatio)());
                m.current.width = s * e, m.current.height = s * e;
                let t = !1,
                    n = async () => {
                        let {
                            default: e
                        } = await r.el("619596").then(r.bind(r, "619596"));
                        null != m.current && (E.current = new e({
                            canvas: m.current,
                            animationId: l.id,
                            assetUrl: L,
                            assetData: c,
                            onInitialDraw: () => {
                                !t && C(!1)
                            },
                            onError: () => {
                                !t && (C(!1), R(!0), null == y || y())
                            }
                        }), N.current && E.current.setState(!0))
                    };
                return n(), () => {
                    var e;
                    null === (e = E.current) || void 0 === e || e.drop(), E.current = null, t = !0
                }
            }, [L, s, l.id, c, y]), i.useEffect(() => {
                var e;
                let r;
                !t && (r = 0), null === (e = E.current) || void 0 === e || e.setState(t && d, r)
            }, [l, t, d]), null == L) ? null : (0, n.jsx)("div", {
                role: "img",
                className: o,
                "aria-label": T ? v.default.Messages.ERROR_LOADING_STICKER : _(l),
                ref: S,
                children: (0, n.jsx)(A, {
                    hasError: T,
                    isLoading: h,
                    maskAsset: f,
                    size: s,
                    withLoadingIndicator: p,
                    children: x((0, n.jsx)("canvas", {
                        className: g.lottieCanvas,
                        ref: m
                    }), l.id)
                })
            })
        },
        L = e => {
            let {
                shouldAnimate: t,
                sticker: r,
                isFocused: s,
                size: a,
                className: u,
                maskAsset: c,
                positionRef: d,
                withLoadingIndicator: f,
                fileUri: S
            } = e, [k, p] = i.useState(!1), [y, m] = i.useState(!0), [E, h] = i.useState(!1), v = i.useRef(null), T = i.useRef(null), R = null != S ? S : (0, I.getStickerAssetUrl)(r, {
                isPreview: !t || !k || !s,
                size: a
            }), N = i.useCallback(() => {
                m(!1)
            }, []), L = i.useCallback(() => {
                h(!0)
            }, []);
            return (i.useEffect(() => {
                if (null != v.current) {
                    let {
                        isVisible: e
                    } = v.current;
                    p(e)
                }
            }, []), i.useLayoutEffect(() => {
                var e;
                (null === (e = T.current) || void 0 === e ? void 0 : e.complete) === !0 && m(!1)
            }, []), null == R) ? null : (0, n.jsx)(o.VisibilitySensor, {
                ref: v,
                onChange: p,
                threshold: .7,
                children: (0, n.jsx)("div", {
                    className: l(u, g.pngImageWrapper),
                    ref: d,
                    children: (0, n.jsx)(A, {
                        hasError: E,
                        isLoading: y,
                        maskAsset: c,
                        size: a,
                        withLoadingIndicator: f,
                        children: x((0, n.jsx)("img", {
                            className: g.pngImage,
                            alt: _(r),
                            src: R,
                            draggable: !1,
                            onError: L,
                            onLoad: N,
                            onContextMenu: C,
                            ref: T
                        }), r.id)
                    })
                })
            })
        },
        P = e => {
            let {
                disableAnimation: t,
                enlargeScaleFactor: r,
                enlargeWithName: s,
                isInteracting: l,
                positionRef: a,
                size: u,
                sticker: o
            } = e, k = (0, d.useStateFromStores)([S.default], () => S.default.useReducedMotion), p = i.useRef(null), m = {
                transform: "scale(".concat(k ? 1 : 1 / r, ")"),
                opacity: 0
            }, E = (0, c.useTransition)(l, {
                ref: p,
                from: m,
                enter: {
                    transform: "scale(1)",
                    opacity: 1
                },
                leave: m,
                config: T
            }), h = i.useRef(null), I = (0, c.useSpring)({
                ref: h,
                transform: l || k ? "translateY(0)" : "translateY(-25px)",
                opacity: l ? 1 : 0,
                config: R
            });
            return (0, c.useChain)(l ? [p, h] : [h, p], l ? [0, .0625] : [0, 0]), E((e, i) => i && (0, n.jsx)(y.AppReferencePositionLayer, {
                className: g.positionedLayer,
                fixed: !0,
                align: "center",
                position: "center",
                reference: a,
                children: () => (0, n.jsxs)("div", {
                    className: g.overlayWrapper,
                    children: [(0, n.jsx)(c.animated.div, {
                        className: g.overlayStickerWrapper,
                        style: e,
                        children: (0, n.jsx)(F, {
                            className: g.overlaySticker,
                            disableAnimation: t,
                            enlargeOnInteraction: !1,
                            isInteracting: l,
                            maskAsset: !1,
                            sticker: o,
                            size: Math.round(u * r),
                            withLoadingIndicator: !1
                        })
                    }), s && (0, n.jsx)(c.animated.div, {
                        className: g.overlayLabelWrapper,
                        style: I,
                        children: (0, n.jsx)(f.Text, {
                            variant: "text-sm/medium",
                            className: g.overlayLabel,
                            children: o.name
                        })
                    })]
                })
            }))
        },
        F = e => {
            let {
                isInteracting: t = !1,
                disableAnimation: r = !1,
                enlargeOnInteraction: s = !1,
                enlargeWithName: l = !0,
                enlargeScaleFactor: a = 1.55,
                maskAsset: u = !1,
                size: c,
                sticker: d,
                className: o,
                withLoadingIndicator: f,
                assetData: S,
                fileUri: k,
                onError: p
            } = e, y = (0, m.useIsWindowFocused)(), I = (0, E.useShouldAnimateSticker)(t) && !r, v = i.useRef(null);
            if (null == d) return null;
            let g = d.format_type === h.StickerFormat.LOTTIE ? N : L;
            return (0, n.jsxs)(i.Fragment, {
                children: [(0, n.jsx)(g, {
                    shouldAnimate: I,
                    isFocused: y,
                    size: c,
                    sticker: d,
                    className: o,
                    maskAsset: u,
                    positionRef: v,
                    withLoadingIndicator: f,
                    assetData: S,
                    fileUri: k,
                    onError: p
                }), s && (0, n.jsx)(P, {
                    disableAnimation: r,
                    enlargeScaleFactor: a,
                    enlargeWithName: l,
                    isInteracting: t,
                    positionRef: v,
                    size: c,
                    sticker: d
                })]
            }, "".concat(d.id, ",").concat(c))
        };
    var M = F
}