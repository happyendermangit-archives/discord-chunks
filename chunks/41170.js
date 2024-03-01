function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        getStickerAltText: function() {
            return L
        },
        default: function() {
            return M
        }
    }), i("222007");
    var r = i("37983"),
        n = i("884691"),
        s = i("414456"),
        l = i.n(s),
        a = i("627445"),
        u = i.n(a),
        c = i("907002"),
        d = i("446674"),
        o = i("290381"),
        f = i("77078"),
        S = i("206230"),
        h = i("407063"),
        m = i("54560"),
        E = i("983782"),
        p = i("866190"),
        I = i("256860"),
        k = i("161585"),
        C = i("24373"),
        v = i("782340"),
        g = i("419664");
    let y = e => e.preventDefault(),
        _ = {
            tension: 1100,
            friction: 40
        },
        R = {
            tension: 1600,
            friction: 60
        };

    function T(e, t) {
        return n.cloneElement(e, {
            "data-type": "sticker",
            "data-id": t
        })
    }

    function L(e) {
        let t = "description" in e && null != e.description ? "".concat(e.name, ", ").concat(e.description) : e.name;
        return v.default.Messages.STICKER_A11Y_LABEL.format({
            stickerName: t
        })
    }
    let x = e => {
            let {
                children: t,
                hasError: i,
                isLoading: n,
                maskAsset: s,
                size: a,
                withLoadingIndicator: u = !0
            } = e, c = a >= 33;
            return (0, r.jsxs)("div", {
                className: l(g.assetWrapper, {
                    [g.assetWrapperMasked]: i || s
                }),
                style: {
                    height: a,
                    width: a
                },
                children: [i ? (0, r.jsxs)("div", {
                    className: g.error,
                    children: [(0, r.jsx)(m.default, {
                        className: g.errorIcon
                    }), c && (0, r.jsx)(f.Text, {
                        className: g.errorText,
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: v.default.Messages.STICKER_ASSET_LOAD_ERROR
                    })]
                }) : t, u && n && (0, r.jsx)("div", {
                    className: g.loadingIndicator
                })]
            })
        },
        A = e => {
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
                withLoadingIndicator: m,
                onError: E
            } = e, p = n.useRef(null), I = n.useRef(null), [k, y] = n.useState(!0), [_, R] = n.useState(!1), A = n.useRef(!1);
            A.current = t && d;
            let P = null == a ? (0, C.getStickerAssetUrl)(l) : a;
            return (u(null != P, "Unable to determine sticker asset URL. Sticker ID: ".concat(l.id)), n.useEffect(() => {
                if (null == p.current || null == P) return;
                let e = Math.min(2, (0, h.getDevicePixelRatio)());
                p.current.width = s * e, p.current.height = s * e;
                let t = !1,
                    r = async () => {
                        let {
                            default: e
                        } = await i.el("619596").then(i.bind(i, "619596"));
                        null != p.current && (I.current = new e({
                            canvas: p.current,
                            animationId: l.id,
                            assetUrl: P,
                            assetData: c,
                            onInitialDraw: () => {
                                !t && y(!1)
                            },
                            onError: () => {
                                !t && (y(!1), R(!0), null == E || E())
                            }
                        }), A.current && I.current.setState(!0))
                    };
                return r(), () => {
                    var e;
                    null === (e = I.current) || void 0 === e || e.drop(), I.current = null, t = !0
                }
            }, [P, s, l.id, c, E]), n.useEffect(() => {
                var e;
                let i;
                !t && (i = 0), null === (e = I.current) || void 0 === e || e.setState(t && d, i)
            }, [l, t, d]), null == P) ? null : (0, r.jsx)("div", {
                role: "img",
                className: o,
                "aria-label": _ ? v.default.Messages.ERROR_LOADING_STICKER : L(l),
                ref: S,
                children: (0, r.jsx)(x, {
                    hasError: _,
                    isLoading: k,
                    maskAsset: f,
                    size: s,
                    withLoadingIndicator: m,
                    children: T((0, r.jsx)("canvas", {
                        className: g.lottieCanvas,
                        ref: p
                    }), l.id)
                })
            })
        },
        P = e => {
            let {
                shouldAnimate: t,
                sticker: i,
                isFocused: s,
                size: a,
                className: u,
                maskAsset: c,
                positionRef: d,
                withLoadingIndicator: f,
                fileUri: S
            } = e, [h, m] = n.useState(!1), [E, p] = n.useState(!0), [I, k] = n.useState(!1), v = n.useRef(null), _ = n.useRef(null), R = null != S ? S : (0, C.getStickerAssetUrl)(i, {
                isPreview: !t || !h || !s,
                size: a
            }), A = n.useCallback(() => {
                p(!1)
            }, []), P = n.useCallback(() => {
                k(!0)
            }, []);
            return (n.useEffect(() => {
                if (null != v.current) {
                    let {
                        isVisible: e
                    } = v.current;
                    m(e)
                }
            }, []), n.useLayoutEffect(() => {
                var e;
                (null === (e = _.current) || void 0 === e ? void 0 : e.complete) === !0 && p(!1)
            }, []), null == R) ? null : (0, r.jsx)(o.VisibilitySensor, {
                ref: v,
                onChange: m,
                threshold: .7,
                children: (0, r.jsx)("div", {
                    className: l(u, g.pngImageWrapper),
                    ref: d,
                    children: (0, r.jsx)(x, {
                        hasError: I,
                        isLoading: E,
                        maskAsset: c,
                        size: a,
                        withLoadingIndicator: f,
                        children: T((0, r.jsx)("img", {
                            className: g.pngImage,
                            alt: L(i),
                            src: R,
                            draggable: !1,
                            onError: P,
                            onLoad: A,
                            onContextMenu: y,
                            ref: _
                        }), i.id)
                    })
                })
            })
        },
        N = e => {
            let {
                disableAnimation: t,
                enlargeScaleFactor: i,
                enlargeWithName: s,
                isInteracting: l,
                positionRef: a,
                size: u,
                sticker: o
            } = e, h = (0, d.useStateFromStores)([S.default], () => S.default.useReducedMotion), m = n.useRef(null), p = {
                transform: "scale(".concat(h ? 1 : 1 / i, ")"),
                opacity: 0
            }, I = (0, c.useTransition)(l, {
                ref: m,
                from: p,
                enter: {
                    transform: "scale(1)",
                    opacity: 1
                },
                leave: p,
                config: _
            }), k = n.useRef(null), C = (0, c.useSpring)({
                ref: k,
                transform: l || h ? "translateY(0)" : "translateY(-25px)",
                opacity: l ? 1 : 0,
                config: R
            });
            return (0, c.useChain)(l ? [m, k] : [k, m], l ? [0, .0625] : [0, 0]), I((e, n) => n && (0, r.jsx)(E.AppReferencePositionLayer, {
                className: g.positionedLayer,
                fixed: !0,
                align: "center",
                position: "center",
                reference: a,
                children: () => (0, r.jsxs)("div", {
                    className: g.overlayWrapper,
                    children: [(0, r.jsx)(c.animated.div, {
                        className: g.overlayStickerWrapper,
                        style: e,
                        children: (0, r.jsx)(U, {
                            className: g.overlaySticker,
                            disableAnimation: t,
                            enlargeOnInteraction: !1,
                            isInteracting: l,
                            maskAsset: !1,
                            sticker: o,
                            size: Math.round(u * i),
                            withLoadingIndicator: !1
                        })
                    }), s && (0, r.jsx)(c.animated.div, {
                        className: g.overlayLabelWrapper,
                        style: C,
                        children: (0, r.jsx)(f.Text, {
                            variant: "text-sm/medium",
                            className: g.overlayLabel,
                            children: o.name
                        })
                    })]
                })
            }))
        },
        U = e => {
            let {
                isInteracting: t = !1,
                disableAnimation: i = !1,
                enlargeOnInteraction: s = !1,
                enlargeWithName: l = !0,
                enlargeScaleFactor: a = 1.55,
                maskAsset: u = !1,
                size: c,
                sticker: d,
                className: o,
                withLoadingIndicator: f,
                assetData: S,
                fileUri: h,
                onError: m
            } = e, E = (0, p.useIsWindowFocused)(), C = (0, I.useShouldAnimateSticker)(t) && !i, v = n.useRef(null);
            if (null == d) return null;
            let g = d.format_type === k.StickerFormat.LOTTIE ? A : P;
            return (0, r.jsxs)(n.Fragment, {
                children: [(0, r.jsx)(g, {
                    shouldAnimate: C,
                    isFocused: E,
                    size: c,
                    sticker: d,
                    className: o,
                    maskAsset: u,
                    positionRef: v,
                    withLoadingIndicator: f,
                    assetData: S,
                    fileUri: h,
                    onError: m
                }), s && (0, r.jsx)(N, {
                    disableAnimation: i,
                    enlargeScaleFactor: a,
                    enlargeWithName: l,
                    isInteracting: t,
                    positionRef: v,
                    size: c,
                    sticker: d
                })]
            }, "".concat(d.id, ",").concat(c))
        };
    var M = U
}