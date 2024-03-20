function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        getStickerAltText: function() {
            return A
        },
        default: function() {
            return P
        }
    }), r("222007");
    var i = r("37983"),
        n = r("884691"),
        s = r("414456"),
        a = r.n(s),
        l = r("627445"),
        c = r.n(l),
        u = r("146606"),
        d = r("446674"),
        o = r("290381"),
        f = r("77078"),
        S = r("206230"),
        k = r("407063"),
        E = r("54560"),
        p = r("983782"),
        I = r("866190"),
        h = r("256860"),
        m = r("161585"),
        y = r("24373"),
        g = r("782340"),
        C = r("419664");
    let v = e => e.preventDefault(),
        T = {
            tension: 1100,
            friction: 40
        },
        R = {
            tension: 1600,
            friction: 60
        };

    function _(e, t) {
        return n.cloneElement(e, {
            "data-type": "sticker",
            "data-id": t
        })
    }

    function A(e) {
        let t = "description" in e && null != e.description ? "".concat(e.name, ", ").concat(e.description) : e.name;
        return g.default.Messages.STICKER_A11Y_LABEL.format({
            stickerName: t
        })
    }
    let x = e => {
            let {
                children: t,
                hasError: r,
                isLoading: n,
                maskAsset: s,
                size: l,
                withLoadingIndicator: c = !0
            } = e, u = l >= 33;
            return (0, i.jsxs)("div", {
                className: a(C.assetWrapper, {
                    [C.assetWrapperMasked]: r || s
                }),
                style: {
                    height: l,
                    width: l
                },
                children: [r ? (0, i.jsxs)("div", {
                    className: C.error,
                    children: [(0, i.jsx)(E.default, {
                        className: C.errorIcon
                    }), u && (0, i.jsx)(f.Text, {
                        className: C.errorText,
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: g.default.Messages.STICKER_ASSET_LOAD_ERROR
                    })]
                }) : t, c && n && (0, i.jsx)("div", {
                    className: C.loadingIndicator
                })]
            })
        },
        L = e => {
            let {
                shouldAnimate: t,
                size: s,
                sticker: a,
                fileUri: l,
                assetData: u,
                isFocused: d,
                className: o,
                maskAsset: f,
                positionRef: S,
                withLoadingIndicator: E,
                onError: p
            } = e, I = n.useRef(null), h = n.useRef(null), [m, v] = n.useState(!0), [T, R] = n.useState(!1), L = n.useRef(!1);
            L.current = t && d;
            let N = null == l ? (0, y.getStickerAssetUrl)(a) : l;
            return (c(null != N, "Unable to determine sticker asset URL. Sticker ID: ".concat(a.id)), n.useEffect(() => {
                if (null == I.current || null == N) return;
                let e = Math.min(2, (0, k.getDevicePixelRatio)());
                I.current.width = s * e, I.current.height = s * e;
                let t = !1,
                    i = async () => {
                        let {
                            default: e
                        } = await r.el("619596").then(r.bind(r, "619596"));
                        null != I.current && (h.current = new e({
                            canvas: I.current,
                            animationId: a.id,
                            assetUrl: N,
                            assetData: u,
                            onInitialDraw: () => {
                                !t && v(!1)
                            },
                            onError: () => {
                                !t && (v(!1), R(!0), null == p || p())
                            }
                        }), L.current && h.current.setState(!0))
                    };
                return i(), () => {
                    var e;
                    null === (e = h.current) || void 0 === e || e.drop(), h.current = null, t = !0
                }
            }, [N, s, a.id, u, p]), n.useEffect(() => {
                var e;
                let r;
                !t && (r = 0), null === (e = h.current) || void 0 === e || e.setState(t && d, r)
            }, [a, t, d]), null == N) ? null : (0, i.jsx)("div", {
                role: "img",
                className: o,
                "aria-label": T ? g.default.Messages.ERROR_LOADING_STICKER : A(a),
                ref: S,
                children: (0, i.jsx)(x, {
                    hasError: T,
                    isLoading: m,
                    maskAsset: f,
                    size: s,
                    withLoadingIndicator: E,
                    children: _((0, i.jsx)("canvas", {
                        className: C.lottieCanvas,
                        ref: I
                    }), a.id)
                })
            })
        },
        N = e => {
            let {
                shouldAnimate: t,
                sticker: r,
                isFocused: s,
                size: l,
                className: c,
                maskAsset: u,
                positionRef: d,
                withLoadingIndicator: f,
                fileUri: S
            } = e, [k, E] = n.useState(!1), [p, I] = n.useState(!0), [h, m] = n.useState(!1), g = n.useRef(null), T = n.useRef(null), R = null != S ? S : (0, y.getStickerAssetUrl)(r, {
                isPreview: !t || !k || !s,
                size: l
            }), L = n.useCallback(() => {
                I(!1)
            }, []), N = n.useCallback(() => {
                m(!0)
            }, []);
            return (n.useEffect(() => {
                if (null != g.current) {
                    let {
                        isVisible: e
                    } = g.current;
                    E(e)
                }
            }, []), n.useLayoutEffect(() => {
                var e;
                (null === (e = T.current) || void 0 === e ? void 0 : e.complete) === !0 && I(!1)
            }, []), null == R) ? null : (0, i.jsx)(o.VisibilitySensor, {
                ref: g,
                onChange: E,
                threshold: .7,
                children: (0, i.jsx)("div", {
                    className: a(c, C.pngImageWrapper),
                    ref: d,
                    children: (0, i.jsx)(x, {
                        hasError: h,
                        isLoading: p,
                        maskAsset: u,
                        size: l,
                        withLoadingIndicator: f,
                        children: _((0, i.jsx)("img", {
                            className: C.pngImage,
                            alt: A(r),
                            src: R,
                            draggable: !1,
                            onError: N,
                            onLoad: L,
                            onContextMenu: v,
                            ref: T
                        }), r.id)
                    })
                })
            })
        },
        M = e => {
            let {
                disableAnimation: t,
                enlargeScaleFactor: r,
                enlargeWithName: s,
                isInteracting: a,
                positionRef: l,
                size: c,
                sticker: o
            } = e, k = (0, d.useStateFromStores)([S.default], () => S.default.useReducedMotion), E = n.useRef(null), I = {
                transform: "scale(".concat(k ? 1 : 1 / r, ")"),
                opacity: 0
            }, h = (0, u.useTransition)(a, {
                ref: E,
                from: I,
                enter: {
                    transform: "scale(1)",
                    opacity: 1
                },
                leave: I,
                config: T
            }), m = n.useRef(null), y = (0, u.useSpring)({
                ref: m,
                transform: a || k ? "translateY(0)" : "translateY(-25px)",
                opacity: a ? 1 : 0,
                config: R
            });
            return (0, u.useChain)(a ? [E, m] : [m, E], a ? [0, .0625] : [0, 0]), h((e, n) => n && (0, i.jsx)(p.AppReferencePositionLayer, {
                className: C.positionedLayer,
                fixed: !0,
                align: "center",
                position: "center",
                reference: l,
                children: () => (0, i.jsxs)("div", {
                    className: C.overlayWrapper,
                    children: [(0, i.jsx)(u.animated.div, {
                        className: C.overlayStickerWrapper,
                        style: e,
                        children: (0, i.jsx)(F, {
                            className: C.overlaySticker,
                            disableAnimation: t,
                            enlargeOnInteraction: !1,
                            isInteracting: a,
                            maskAsset: !1,
                            sticker: o,
                            size: Math.round(c * r),
                            withLoadingIndicator: !1
                        })
                    }), s && (0, i.jsx)(u.animated.div, {
                        className: C.overlayLabelWrapper,
                        style: y,
                        children: (0, i.jsx)(f.Text, {
                            variant: "text-sm/medium",
                            className: C.overlayLabel,
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
                enlargeWithName: a = !0,
                enlargeScaleFactor: l = 1.55,
                maskAsset: c = !1,
                size: u,
                sticker: d,
                className: o,
                withLoadingIndicator: f,
                assetData: S,
                fileUri: k,
                onError: E
            } = e, p = (0, I.useIsWindowFocused)(), y = (0, h.useShouldAnimateSticker)(t) && !r, g = n.useRef(null);
            if (null == d) return null;
            let C = d.format_type === m.StickerFormat.LOTTIE ? L : N;
            return (0, i.jsxs)(n.Fragment, {
                children: [(0, i.jsx)(C, {
                    shouldAnimate: y,
                    isFocused: p,
                    size: u,
                    sticker: d,
                    className: o,
                    maskAsset: c,
                    positionRef: g,
                    withLoadingIndicator: f,
                    assetData: S,
                    fileUri: k,
                    onError: E
                }), s && (0, i.jsx)(M, {
                    disableAnimation: r,
                    enlargeScaleFactor: l,
                    enlargeWithName: a,
                    isInteracting: t,
                    positionRef: g,
                    size: u,
                    sticker: d
                })]
            }, "".concat(d.id, ",").concat(u))
        };
    var P = F
}