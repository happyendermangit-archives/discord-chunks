function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getStickerAltText: function() {
            return L
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("512722"),
        l = n.n(o),
        u = n("718017"),
        d = n("442837"),
        _ = n("622535"),
        c = n("481060"),
        E = n("607070"),
        I = n("134432"),
        T = n("641749"),
        f = n("153850"),
        S = n("506071"),
        h = n("453070"),
        A = n("373228"),
        m = n("378233"),
        N = n("689938"),
        O = n("430690");
    let p = e => e.preventDefault(),
        R = {
            tension: 1100,
            friction: 40
        },
        C = {
            tension: 1600,
            friction: 60
        };

    function g(e, t) {
        return r.cloneElement(e, {
            "data-type": "sticker",
            "data-id": t
        })
    }

    function L(e) {
        let t = "description" in e && null != e.description ? "".concat(e.name, ", ").concat(e.description) : e.name;
        return N.default.Messages.STICKER_A11Y_LABEL.format({
            stickerName: t
        })
    }
    let D = e => {
            let {
                children: t,
                hasError: n,
                isLoading: r,
                maskAsset: s,
                size: o,
                withLoadingIndicator: l = !0
            } = e, u = o >= 33;
            return (0, i.jsxs)("div", {
                className: a()(O.assetWrapper, {
                    [O.assetWrapperMasked]: n || s
                }),
                style: {
                    height: o,
                    width: o
                },
                children: [n ? (0, i.jsxs)("div", {
                    className: O.error,
                    children: [(0, i.jsx)(T.default, {
                        className: O.errorIcon
                    }), u && (0, i.jsx)(c.Text, {
                        className: O.errorText,
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: N.default.Messages.STICKER_ASSET_LOAD_ERROR
                    })]
                }) : t, l && r && (0, i.jsx)("div", {
                    className: O.loadingIndicator
                })]
            })
        },
        v = e => {
            let {
                shouldAnimate: t,
                size: s,
                sticker: a,
                fileUri: o,
                assetData: u,
                isFocused: d,
                className: _,
                maskAsset: c,
                positionRef: E,
                withLoadingIndicator: T,
                onError: f
            } = e, S = r.useRef(null), h = r.useRef(null), [A, p] = r.useState(!0), [R, C] = r.useState(!1), v = r.useRef(!1);
            v.current = t && d;
            let M = null == o ? (0, m.getStickerAssetUrl)(a) : o;
            return (l()(null != M, "Unable to determine sticker asset URL. Sticker ID: ".concat(a.id)), r.useEffect(() => {
                if (null == S.current || null == M) return;
                let e = Math.min(2, (0, I.getDevicePixelRatio)());
                S.current.width = s * e, S.current.height = s * e;
                let t = !1;
                return (async () => {
                    let {
                        default: e
                    } = await n.e("21617").then(n.bind(n, "186952"));
                    null != S.current && (h.current = new e({
                        canvas: S.current,
                        animationId: a.id,
                        assetUrl: M,
                        assetData: u,
                        onInitialDraw: () => {
                            !t && p(!1)
                        },
                        onError: () => {
                            !t && (p(!1), C(!0), null == f || f())
                        }
                    }), v.current && h.current.setState(!0))
                })(), () => {
                    var e;
                    null === (e = h.current) || void 0 === e || e.drop(), h.current = null, t = !0
                }
            }, [M, s, a.id, u, f]), r.useEffect(() => {
                var e;
                let n;
                !t && (n = 0), null === (e = h.current) || void 0 === e || e.setState(t && d, n)
            }, [a, t, d]), null == M) ? null : (0, i.jsx)("div", {
                role: "img",
                className: _,
                "aria-label": R ? N.default.Messages.ERROR_LOADING_STICKER : L(a),
                ref: E,
                children: (0, i.jsx)(D, {
                    hasError: R,
                    isLoading: A,
                    maskAsset: c,
                    size: s,
                    withLoadingIndicator: T,
                    children: g((0, i.jsx)("canvas", {
                        className: O.lottieCanvas,
                        ref: S
                    }), a.id)
                })
            })
        },
        M = e => {
            let {
                shouldAnimate: t,
                sticker: n,
                isFocused: s,
                size: o,
                className: l,
                maskAsset: u,
                positionRef: d,
                withLoadingIndicator: c,
                fileUri: E
            } = e, [I, T] = r.useState(!1), [f, S] = r.useState(!0), [h, A] = r.useState(!1), N = r.useRef(null), R = r.useRef(null), C = null != E ? E : (0, m.getStickerAssetUrl)(n, {
                isPreview: !t || !I || !s,
                size: o
            }), v = r.useCallback(() => {
                S(!1)
            }, []), M = r.useCallback(() => {
                A(!0)
            }, []);
            return (r.useEffect(() => {
                if (null != N.current) {
                    let {
                        isVisible: e
                    } = N.current;
                    T(e)
                }
            }, []), r.useLayoutEffect(() => {
                var e;
                (null === (e = R.current) || void 0 === e ? void 0 : e.complete) === !0 && S(!1)
            }, []), null == C) ? null : (0, i.jsx)(_.VisibilitySensor, {
                ref: N,
                onChange: T,
                threshold: .7,
                children: (0, i.jsx)("div", {
                    className: a()(l, O.pngImageWrapper),
                    ref: d,
                    children: (0, i.jsx)(D, {
                        hasError: h,
                        isLoading: f,
                        maskAsset: u,
                        size: o,
                        withLoadingIndicator: c,
                        children: g((0, i.jsx)("img", {
                            className: O.pngImage,
                            alt: L(n),
                            src: C,
                            draggable: !1,
                            onError: M,
                            onLoad: v,
                            onContextMenu: p,
                            ref: R
                        }), n.id)
                    })
                })
            })
        },
        y = e => {
            let {
                disableAnimation: t,
                enlargeScaleFactor: n,
                enlargeWithName: s,
                isInteracting: a,
                positionRef: o,
                size: l,
                sticker: _
            } = e, I = (0, d.useStateFromStores)([E.default], () => E.default.useReducedMotion), T = r.useRef(null), S = {
                transform: "scale(".concat(I ? 1 : 1 / n, ")"),
                opacity: 0
            }, h = (0, u.useTransition)(a, {
                ref: T,
                from: S,
                enter: {
                    transform: "scale(1)",
                    opacity: 1
                },
                leave: S,
                config: R
            }), A = r.useRef(null), m = (0, u.useSpring)({
                ref: A,
                transform: a || I ? "translateY(0)" : "translateY(-25px)",
                opacity: a ? 1 : 0,
                config: C
            });
            return (0, u.useChain)(a ? [T, A] : [A, T], a ? [0, .0625] : [0, 0]), h((e, r) => r && (0, i.jsx)(f.AppReferencePositionLayer, {
                className: O.positionedLayer,
                fixed: !0,
                align: "center",
                position: "center",
                reference: o,
                children: () => (0, i.jsxs)("div", {
                    className: O.overlayWrapper,
                    children: [(0, i.jsx)(u.animated.div, {
                        className: O.overlayStickerWrapper,
                        style: e,
                        children: (0, i.jsx)(P, {
                            className: O.overlaySticker,
                            disableAnimation: t,
                            enlargeOnInteraction: !1,
                            isInteracting: a,
                            maskAsset: !1,
                            sticker: _,
                            size: Math.round(l * n),
                            withLoadingIndicator: !1
                        })
                    }), s && (0, i.jsx)(u.animated.div, {
                        className: O.overlayLabelWrapper,
                        style: m,
                        children: (0, i.jsx)(c.Text, {
                            variant: "text-sm/medium",
                            className: O.overlayLabel,
                            children: _.name
                        })
                    })]
                })
            }))
        },
        P = e => {
            let {
                isInteracting: t = !1,
                disableAnimation: n = !1,
                enlargeOnInteraction: s = !1,
                enlargeWithName: a = !0,
                enlargeScaleFactor: o = 1.55,
                maskAsset: l = !1,
                size: u,
                sticker: d,
                className: _,
                withLoadingIndicator: c,
                assetData: E,
                fileUri: I,
                onError: T
            } = e, f = (0, S.useIsWindowFocused)(), m = (0, h.useShouldAnimateSticker)(t) && !n, N = r.useRef(null);
            if (null == d) return null;
            let O = d.format_type === A.StickerFormat.LOTTIE ? v : M;
            return (0, i.jsxs)(r.Fragment, {
                children: [(0, i.jsx)(O, {
                    shouldAnimate: m,
                    isFocused: f,
                    size: u,
                    sticker: d,
                    className: _,
                    maskAsset: l,
                    positionRef: N,
                    withLoadingIndicator: c,
                    assetData: E,
                    fileUri: I,
                    onError: T
                }), s && (0, i.jsx)(y, {
                    disableAnimation: n,
                    enlargeScaleFactor: o,
                    enlargeWithName: a,
                    isInteracting: t,
                    positionRef: N,
                    size: u,
                    sticker: d
                })]
            }, "".concat(d.id, ",").concat(u))
        };
    t.default = P
}