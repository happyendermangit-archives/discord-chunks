function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ImageModal: function() {
            return v
        },
        VideoModal: function() {
            return _
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("394846"),
        o = n("77078"),
        u = n("304580"),
        d = n("605160"),
        c = n("659500"),
        f = n("103603"),
        m = n("874276"),
        p = n("952368"),
        h = n("888673"),
        E = n("505684"),
        g = n("49111"),
        C = n("782340"),
        S = n("554399");

    function T(e) {
        let {
            onClose: t
        } = e, n = i.useRef(null);
        return (0, l.jsx)("div", {
            className: S.mobileCloseWrapper,
            ref: n,
            children: (0, l.jsx)(o.FocusRingScope, {
                containerRef: n,
                children: (0, l.jsx)("div", {
                    children: (0, l.jsx)(u.default, {
                        closeAction: t,
                        keybind: "ESC"
                    })
                })
            })
        })
    }
    let I = e => {
        let {
            children: t,
            hasMediaControls: n,
            isObscured: a,
            src: r
        } = e, [o, u] = i.useState(!1), c = i.useRef(r);
        return (i.useEffect(() => {
            r !== c.current && u(!a)
        }, [r, a]), a) ? (0, l.jsx)(E.ObscuredDisplayContext.Provider, {
            value: o,
            children: (0, l.jsx)(E.default, {
                type: E.default.Types.ATTACHMENT,
                reason: d.ObscureReason.EXPLICIT_CONTENT,
                className: S.obscureContainer,
                obscured: !0,
                isSingleMosaicItem: !0,
                obscurityControlClassName: s({
                    [S.controlsOffset]: n && o
                }),
                onToggleObscurity: e => {
                    e.stopPropagation(), e.nativeEvent.stopPropagation(), u(e => !e)
                },
                children: e => (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)("div", {
                        className: s(S.obscureWrapper, {
                            [S.obscure]: e
                        }),
                        children: t(e)
                    })
                })
            }, r)
        }) : (0, l.jsx)(l.Fragment, {
            children: t(!1)
        })
    };

    function v(e) {
        let {
            src: t,
            original: n,
            placeholder: a,
            width: s,
            height: o,
            animated: u,
            children: d,
            responsive: m,
            renderLinkComponent: h,
            maxWidth: E,
            maxHeight: v,
            shouldAnimate: _,
            onClose: N,
            shouldHideMediaOptions: A = !1,
            obscure: x = !1,
            ...y
        } = e, {
            width: O,
            height: R
        } = (0, f.zoomFit)(s, o), M = r.isMobile && null != N;
        i.useEffect(() => {
            if (null != N) return c.ComponentDispatch.subscribe(g.ComponentActions.MEDIA_MODAL_CLOSE, N), () => {
                c.ComponentDispatch.unsubscribe(g.ComponentActions.MEDIA_MODAL_CLOSE, N)
            }
        }, [N]);
        let L = A ? e => {
            e.stopPropagation(), e.preventDefault()
        } : y.onContextMenu;
        return (0, l.jsxs)("div", {
            className: S.wrapper,
            children: [M ? (0, l.jsx)(T, {
                onClose: N
            }) : null, (0, l.jsx)(I, {
                isObscured: x,
                src: t,
                children: e => (0, l.jsx)(p.default, {
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
                    responsive: m,
                    onContextMenu: L,
                    ...y
                }, t)
            }), null != n && !A && h({
                href: n,
                target: "_blank",
                rel: "noreferrer noopener",
                className: S.downloadLink,
                children: C.default.Messages.OPEN_IN_BROWSER
            })]
        })
    }

    function _(e) {
        let {
            src: t,
            width: n,
            height: i,
            onClose: a,
            renderLinkComponent: o,
            shouldHideMediaOptions: u = !1,
            obscure: d = !1,
            ...c
        } = e, {
            width: p,
            height: E
        } = (0, f.zoomFit)(n, i), g = r.isMobile && null != a, v = u ? e => {
            e.stopPropagation(), e.preventDefault()
        } : c.onContextMenu;
        return (0, l.jsxs)("div", {
            className: s(S.wrapper, S.videoWrapper),
            children: [g ? (0, l.jsx)(T, {
                onClose: a
            }) : null, (0, l.jsx)(I, {
                hasMediaControls: !0,
                isObscured: d,
                src: t,
                children: e => (0, l.jsx)(h.default, {
                    src: t,
                    width: n,
                    height: i,
                    maxWidth: p,
                    maxHeight: E,
                    renderLinkComponent: o,
                    volume: m.getVolume,
                    autoMute: m.getMuted,
                    onVolumeChange: m.setVolume,
                    onMute: m.setMuted,
                    autoPlay: !e,
                    onContextMenu: v,
                    ...c
                }, t)
            }), !u && o({
                href: t,
                target: "_blank",
                rel: "noreferrer noopener",
                className: S.downloadLink,
                children: C.default.Messages.OPEN_IN_BROWSER
            })]
        })
    }
}