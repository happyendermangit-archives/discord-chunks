function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ImageModal: function() {
            return I
        },
        VideoModal: function() {
            return T
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("394846"),
        o = n("77078"),
        u = n("304580"),
        d = n("605160"),
        c = n("659500"),
        f = n("103603"),
        p = n("874276"),
        m = n("952368"),
        h = n("888673"),
        x = n("505684"),
        E = n("49111"),
        y = n("782340"),
        g = n("554399");

    function S(e) {
        let {
            onClose: t
        } = e, n = l.useRef(null);
        return (0, i.jsx)("div", {
            className: g.mobileCloseWrapper,
            ref: n,
            children: (0, i.jsx)(o.FocusRingScope, {
                containerRef: n,
                children: (0, i.jsx)("div", {
                    children: (0, i.jsx)(u.default, {
                        closeAction: t,
                        keybind: "ESC"
                    })
                })
            })
        })
    }
    let C = e => {
        let {
            children: t,
            hasMediaControls: n,
            isObscured: a,
            src: r
        } = e, [o, u] = l.useState(!1), c = l.useRef(r);
        return (l.useEffect(() => {
            r !== c.current && u(!a)
        }, [r, a]), a) ? (0, i.jsx)(x.ObscuredDisplayContext.Provider, {
            value: o,
            children: (0, i.jsx)(x.default, {
                type: x.default.Types.ATTACHMENT,
                reason: d.ObscureReason.EXPLICIT_CONTENT,
                className: g.obscureContainer,
                obscured: !0,
                isSingleMosaicItem: !0,
                obscurityControlClassName: s({
                    [g.controlsOffset]: n && o
                }),
                onToggleObscurity: e => {
                    e.stopPropagation(), e.nativeEvent.stopPropagation(), u(e => !e)
                },
                children: e => (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)("div", {
                        className: s(g.obscureWrapper, {
                            [g.obscure]: e
                        }),
                        children: t(e)
                    })
                })
            }, r)
        }) : (0, i.jsx)(i.Fragment, {
            children: t(!1)
        })
    };

    function I(e) {
        let {
            src: t,
            original: n,
            placeholder: a,
            width: s,
            height: o,
            animated: u,
            children: d,
            responsive: p,
            renderLinkComponent: h,
            maxWidth: x,
            maxHeight: I,
            shouldAnimate: T,
            onClose: _,
            shouldHideMediaOptions: v = !1,
            obscure: N = !1,
            ...A
        } = e, {
            width: O,
            height: R
        } = (0, f.zoomFit)(s, o), M = r.isMobile && null != _;
        l.useEffect(() => {
            if (null != _) return c.ComponentDispatch.subscribe(E.ComponentActions.MEDIA_MODAL_CLOSE, _), () => {
                c.ComponentDispatch.unsubscribe(E.ComponentActions.MEDIA_MODAL_CLOSE, _)
            }
        }, [_]);
        let k = v ? e => {
            e.stopPropagation(), e.preventDefault()
        } : A.onContextMenu;
        return (0, i.jsxs)("div", {
            className: g.wrapper,
            children: [M ? (0, i.jsx)(S, {
                onClose: _
            }) : null, (0, i.jsx)(C, {
                isObscured: N,
                src: t,
                children: e => (0, i.jsx)(m.default, {
                    src: t,
                    placeholder: a,
                    shouldLink: !1,
                    width: s,
                    height: o,
                    maxWidth: O,
                    maxHeight: R,
                    children: d,
                    animated: !e && u,
                    autoPlay: !e,
                    responsive: p,
                    onContextMenu: k,
                    ...A
                }, t)
            }), null != n && !v && h({
                href: n,
                target: "_blank",
                rel: "noreferrer noopener",
                className: g.downloadLink,
                children: y.default.Messages.OPEN_IN_BROWSER
            })]
        })
    }

    function T(e) {
        let {
            src: t,
            width: n,
            height: l,
            onClose: a,
            renderLinkComponent: o,
            shouldHideMediaOptions: u = !1,
            obscure: d = !1,
            ...c
        } = e, {
            width: m,
            height: x
        } = (0, f.zoomFit)(n, l), E = r.isMobile && null != a, I = u ? e => {
            e.stopPropagation(), e.preventDefault()
        } : c.onContextMenu;
        return (0, i.jsxs)("div", {
            className: s(g.wrapper, g.videoWrapper),
            children: [E ? (0, i.jsx)(S, {
                onClose: a
            }) : null, (0, i.jsx)(C, {
                hasMediaControls: !0,
                isObscured: d,
                src: t,
                children: e => (0, i.jsx)(h.default, {
                    src: t,
                    width: n,
                    height: l,
                    maxWidth: m,
                    maxHeight: x,
                    renderLinkComponent: o,
                    volume: p.getVolume,
                    autoMute: p.getMuted,
                    onVolumeChange: p.setVolume,
                    onMute: p.setMuted,
                    autoPlay: !e,
                    onContextMenu: I,
                    ...c
                }, t)
            }), !u && o({
                href: t,
                target: "_blank",
                rel: "noreferrer noopener",
                className: g.downloadLink,
                children: y.default.Messages.OPEN_IN_BROWSER
            })]
        })
    }
}