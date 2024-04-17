function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    }), n("47120");
    var i, r = n("735250"),
        s = n("470079"),
        a = n("120356"),
        o = n.n(a),
        l = n("780384"),
        u = n("481060"),
        d = n("410030"),
        _ = n("446108"),
        c = n("956664"),
        E = n("921948"),
        I = n("575190"),
        T = n("768760"),
        f = n("981631"),
        S = n("689938"),
        h = n("457731"),
        A = n("167969"),
        m = n("557256");

    function N(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class p extends(i = s.PureComponent) {
        render() {
            let e;
            let {
                className: t,
                imageClassName: n,
                readyState: i,
                src: s,
                placeholder: a,
                placeholderVersion: l,
                alt: d,
                width: E,
                height: A,
                maxWidth: m = E,
                maxHeight: N = A,
                minWidth: p,
                minHeight: C,
                mediaLayoutType: g,
                limitResponsiveWidth: L = !0,
                accessory: D,
                zoomable: v,
                original: M,
                children: y,
                renderAccessory: P,
                onClick: U,
                tabIndex: b,
                useFullWidth: G = !1,
                ...w
            } = this.props;
            if (1 === E && 1 === A) return null;
            let B = (0, c.fit)({
                    width: E,
                    height: A,
                    maxWidth: m,
                    maxHeight: N,
                    minWidth: p,
                    minHeight: C
                }),
                k = 0 !== B.width ? B.width / B.height : 1;
            "" !== s && i !== f.ImageReadyStates.ERROR ? e = y({
                src: s,
                size: B,
                alt: d,
                className: n,
                mediaLayoutType: g
            }) : i !== f.ImageReadyStates.LOADING && (e = (0, r.jsx)(O, {
                size: B,
                mediaLayoutType: g,
                alt: d
            })), e = (0, r.jsx)(I.ImageLoadingOverlay, {
                readyState: i,
                aspectRatio: k,
                placeholder: a,
                placeholderVersion: l,
                placeholderStyle: R(B, g),
                children: e
            });
            let F = null != P ? P() : null;
            return F = null != F ? F : D, (0, r.jsx)(u.FocusRing, {
                ringTarget: this._containerRef,
                focusTarget: this._clickableRef,
                children: (0, r.jsxs)("div", {
                    className: o()(h.imageWrapper, {
                        [h.imageZoom]: v,
                        [h.imageWrapperBackground]: i !== f.ImageReadyStates.READY,
                        [h.clickable]: null != U
                    }, t),
                    style: function(e, t, n, i) {
                        return i === T.MediaLayoutType.MOSAIC ? {
                            display: "block",
                            maxHeight: "inherit",
                            margin: "auto",
                            width: !n && e.width <= T.MEDIA_MOSAIC_MAX_WIDTH ? e.width : "100%",
                            height: "100%"
                        } : i === T.MediaLayoutType.RESPONSIVE ? {
                            maxWidth: t ? e.width : void 0,
                            width: "100%",
                            aspectRatio: "".concat(e.width, " / ").concat(e.height)
                        } : e
                    }(B, L, G, g),
                    ...w,
                    children: [null != M && (0, r.jsx)("a", {
                        tabIndex: -1,
                        onClick: U,
                        "aria-hidden": !0,
                        className: h.originalLink,
                        href: M,
                        ref: this._containerRef,
                        "data-role": "img",
                        "data-safe-src": s
                    }), null != U ? (0, r.jsx)(u.Clickable, {
                        className: h.clickableWrapper,
                        tabIndex: null != b ? b : 0,
                        onClick: U,
                        "aria-label": null != d ? d : S.default.Messages.IMAGE,
                        "aria-describedby": _.IMAGE_OPEN_DIALOG_DESCRIPTION,
                        innerRef: this._clickableRef,
                        focusProps: {
                            enabled: !1
                        },
                        children: e
                    }) : e, null != F ? (0, r.jsx)("div", {
                        className: h.imageAccessory,
                        children: F
                    }) : null]
                })
            })
        }
        constructor(...e) {
            super(...e), N(this, "_containerRef", s.createRef()), N(this, "_clickableRef", s.createRef())
        }
    }

    function O(e) {
        let {
            size: t,
            mediaLayoutType: n,
            alt: i
        } = e, s = (0, d.default)();
        return (0, r.jsx)("div", {
            className: h.imageErrorWrapper,
            style: function(e, t) {
                switch (t) {
                    case T.MediaLayoutType.MOSAIC:
                        return {
                            width: "100%", height: "100%", aspectRatio: "".concat(e.width, " / ").concat(e.height), display: "flex", maxHeight: "inherit"
                        };
                    case T.MediaLayoutType.RESPONSIVE:
                        return {
                            ...C(e), display: "flex"
                        };
                    default:
                        return e
                }
            }(t, n),
            children: (0, r.jsx)("img", {
                src: (0, l.isThemeLight)(s) ? m : A,
                className: h.imageError,
                alt: null != i ? i : S.default.Messages.IMAGE
            })
        })
    }
    N(p, "defaultProps", {
        readyState: f.ImageReadyStates.READY,
        zoomable: !0,
        children: e => {
            let {
                src: t,
                size: n,
                alt: i,
                className: s,
                mediaLayoutType: a
            } = e;
            return (0, r.jsx)("img", {
                className: null != s ? s : void 0,
                alt: null != i ? i : S.default.Messages.IMAGE,
                src: t,
                style: R(n, a)
            })
        },
        minWidth: 0,
        minHeight: 0
    });

    function R(e, t) {
        switch (t) {
            case T.MediaLayoutType.MOSAIC:
                return {
                    display: "block", objectFit: "cover", minWidth: "100%", minHeight: "100%", maxWidth: 1 === (0, E.default)() ? "calc(100% + 1px)" : "100%"
                };
            case T.MediaLayoutType.RESPONSIVE:
                return C(e);
            default:
                return e
        }
    }

    function C(e) {
        let {
            width: t,
            height: n
        } = e;
        return {
            maxWidth: t,
            maxHeight: n,
            width: "100%",
            display: "block",
            aspectRatio: "".concat(t, " / ").concat(n)
        }
    }
}