function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return Image
        }
    }), n("222007");
    var r, Image, i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        o = n("819855"),
        u = n("77078"),
        c = n("841098"),
        d = n("862013"),
        f = n("103603"),
        m = n("547630"),
        _ = n("193513"),
        E = n("719347"),
        I = n("49111"),
        T = n("782340"),
        C = n("366822"),
        p = n("653240"),
        S = n("140802");

    function P(e) {
        let {
            size: t,
            mediaLayoutType: n,
            alt: r
        } = e, l = (0, c.default)();
        return (0, i.jsx)("div", {
            className: C.imageErrorWrapper,
            style: function(e, t) {
                switch (t) {
                    case E.MediaLayoutType.MOSAIC:
                        return {
                            width: "100%", height: "100%", aspectRatio: "".concat(e.width, " / ").concat(e.height), display: "flex", maxHeight: "inherit"
                        };
                    case E.MediaLayoutType.RESPONSIVE:
                        return {
                            ...O(e), display: "flex"
                        };
                    default:
                        return e
                }
            }(t, n),
            children: (0, i.jsx)("img", {
                src: (0, o.isThemeLight)(l) ? S : p,
                className: C.imageError,
                alt: null != r ? r : T.default.Messages.IMAGE
            })
        })
    }(r = class extends l.PureComponent {
        render() {
            let e;
            let {
                className: t,
                imageClassName: n,
                readyState: r,
                src: l,
                placeholder: a,
                placeholderVersion: o,
                alt: c,
                width: m,
                height: p,
                maxWidth: S = m,
                maxHeight: O = p,
                minWidth: L,
                minHeight: M,
                mediaLayoutType: g,
                limitResponsiveWidth: h = !0,
                accessory: x,
                zoomable: N,
                original: v,
                children: A,
                renderAccessory: U,
                onClick: b,
                tabIndex: D,
                useFullWidth: y = !1,
                ...j
            } = this.props;
            if (1 === m && 1 === p) return null;
            let F = (0, f.fit)({
                    width: m,
                    height: p,
                    maxWidth: S,
                    maxHeight: O,
                    minWidth: L,
                    minHeight: M
                }),
                B = 0 !== F.width ? F.width / F.height : 1;
            "" !== l && r !== I.ImageReadyStates.ERROR ? e = A({
                src: l,
                size: F,
                alt: c,
                className: n,
                mediaLayoutType: g
            }) : r !== I.ImageReadyStates.LOADING && (e = (0, i.jsx)(P, {
                size: F,
                mediaLayoutType: g,
                alt: c
            })), e = (0, i.jsx)(_.ImageLoadingOverlay, {
                readyState: r,
                aspectRatio: B,
                placeholder: a,
                placeholderVersion: o,
                placeholderStyle: R(F, g),
                children: e
            });
            let H = null != U ? U() : null;
            return H = null != H ? H : x, (0, i.jsx)(u.FocusRing, {
                ringTarget: this._containerRef,
                focusTarget: this._clickableRef,
                children: (0, i.jsxs)("div", {
                    className: s(C.imageWrapper, {
                        [C.imageZoom]: N,
                        [C.imageWrapperBackground]: r !== I.ImageReadyStates.READY,
                        [C.clickable]: null != b
                    }, t),
                    style: function(e, t, n, r) {
                        return r === E.MediaLayoutType.MOSAIC ? {
                            display: "block",
                            maxHeight: "inherit",
                            margin: "auto",
                            width: !n && e.width <= E.MEDIA_MOSAIC_MAX_WIDTH ? e.width : "100%",
                            height: "100%"
                        } : r === E.MediaLayoutType.RESPONSIVE ? {
                            maxWidth: t ? e.width : void 0,
                            width: "100%",
                            aspectRatio: "".concat(e.width, " / ").concat(e.height)
                        } : e
                    }(F, h, y, g),
                    ...j,
                    children: [null != v && (0, i.jsx)("a", {
                        tabIndex: -1,
                        onClick: b,
                        "aria-hidden": !0,
                        className: C.originalLink,
                        href: v,
                        ref: this._containerRef,
                        "data-role": "img",
                        "data-safe-src": l
                    }), null != b ? (0, i.jsx)(u.Clickable, {
                        className: C.clickableWrapper,
                        tabIndex: null != D ? D : 0,
                        onClick: b,
                        "aria-label": null != c ? c : T.default.Messages.IMAGE,
                        "aria-describedby": d.IMAGE_OPEN_DIALOG_DESCRIPTION,
                        innerRef: this._clickableRef,
                        focusProps: {
                            enabled: !1
                        },
                        children: e
                    }) : e, null != H ? (0, i.jsx)("div", {
                        className: C.imageAccessory,
                        children: H
                    }) : null]
                })
            })
        }
        constructor(...e) {
            super(...e), this._containerRef = l.createRef(), this._clickableRef = l.createRef()
        }
    }).defaultProps = {
        readyState: I.ImageReadyStates.READY,
        zoomable: !0,
        children: e => {
            let {
                src: t,
                size: n,
                alt: r,
                className: l,
                mediaLayoutType: a
            } = e;
            return (0, i.jsx)("img", {
                className: null != l ? l : void 0,
                alt: null != r ? r : T.default.Messages.IMAGE,
                src: t,
                style: R(n, a)
            })
        },
        minWidth: 0,
        minHeight: 0
    }, Image = r;

    function R(e, t) {
        switch (t) {
            case E.MediaLayoutType.MOSAIC:
                return {
                    display: "block", objectFit: "cover", minWidth: "100%", minHeight: "100%", maxWidth: 1 === (0, m.default)() ? "calc(100% + 1px)" : "100%"
                };
            case E.MediaLayoutType.RESPONSIVE:
                return O(e);
            default:
                return e
        }
    }

    function O(e) {
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