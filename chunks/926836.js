function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ImageModal: function() {
            return p
        },
        VideoModal: function() {
            return O
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("873546"),
        l = n("481060"),
        u = n("425493"),
        d = n("169525"),
        _ = n("585483"),
        c = n("956664"),
        E = n("589530"),
        I = n("261922"),
        T = n("133910"),
        f = n("68588"),
        S = n("981631"),
        h = n("689938"),
        A = n("59664");

    function m(e) {
        let {
            onClose: t
        } = e, n = r.useRef(null);
        return (0, i.jsx)("div", {
            className: A.mobileCloseWrapper,
            ref: n,
            children: (0, i.jsx)(l.FocusRingScope, {
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
    let N = e => {
        let {
            children: t,
            hasMediaControls: n,
            isObscured: s,
            src: o
        } = e, [l, u] = r.useState(!1), _ = r.useRef(o);
        return (r.useEffect(() => {
            o !== _.current && u(!s)
        }, [o, s]), s) ? (0, i.jsx)(f.ObscuredDisplayContext.Provider, {
            value: l,
            children: (0, i.jsx)(f.default, {
                type: f.default.Types.ATTACHMENT,
                reason: d.ObscureReason.EXPLICIT_CONTENT,
                className: A.obscureContainer,
                obscured: !0,
                isSingleMosaicItem: !0,
                obscurityControlClassName: a()({
                    [A.controlsOffset]: n && l
                }),
                onToggleObscurity: e => {
                    e.stopPropagation(), e.nativeEvent.stopPropagation(), u(e => !e)
                },
                children: e => (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)("div", {
                        className: a()(A.obscureWrapper, {
                            [A.obscure]: e
                        }),
                        children: t(e)
                    })
                })
            }, o)
        }) : (0, i.jsx)(i.Fragment, {
            children: t(!1)
        })
    };

    function p(e) {
        let {
            src: t,
            original: n,
            placeholder: s,
            width: a,
            height: l,
            animated: u,
            children: d,
            responsive: E,
            renderLinkComponent: T,
            maxWidth: f,
            maxHeight: p,
            shouldAnimate: O,
            onClose: R,
            shouldHideMediaOptions: C = !1,
            obscure: g = !1,
            ...L
        } = e, {
            width: v,
            height: D
        } = (0, c.zoomFit)(a, l), M = o.isMobile && null != R;
        r.useEffect(() => {
            if (null != R) return _.ComponentDispatch.subscribe(S.ComponentActions.MEDIA_MODAL_CLOSE, R), () => {
                _.ComponentDispatch.unsubscribe(S.ComponentActions.MEDIA_MODAL_CLOSE, R)
            }
        }, [R]);
        let y = C ? e => {
            e.stopPropagation(), e.preventDefault()
        } : L.onContextMenu;
        return (0, i.jsxs)("div", {
            className: A.wrapper,
            children: [M ? (0, i.jsx)(m, {
                onClose: R
            }) : null, (0, i.jsx)(N, {
                isObscured: g,
                src: t,
                children: e => (0, i.jsx)(I.default, {
                    src: t,
                    placeholder: s,
                    shouldLink: !1,
                    width: a,
                    height: l,
                    maxWidth: v,
                    maxHeight: D,
                    children: d,
                    animated: !e && u,
                    autoPlay: !e,
                    responsive: E,
                    onContextMenu: y,
                    ...L
                }, t)
            }), null != n && !C && T({
                href: n,
                target: "_blank",
                rel: "noreferrer noopener",
                className: A.downloadLink,
                children: h.default.Messages.OPEN_IN_BROWSER
            })]
        })
    }

    function O(e) {
        let {
            src: t,
            width: n,
            height: r,
            onClose: s,
            renderLinkComponent: l,
            shouldHideMediaOptions: u = !1,
            obscure: d = !1,
            ..._
        } = e, {
            width: I,
            height: f
        } = (0, c.zoomFit)(n, r), S = o.isMobile && null != s, p = u ? e => {
            e.stopPropagation(), e.preventDefault()
        } : _.onContextMenu;
        return (0, i.jsxs)("div", {
            className: a()(A.wrapper, A.videoWrapper),
            children: [S ? (0, i.jsx)(m, {
                onClose: s
            }) : null, (0, i.jsx)(N, {
                hasMediaControls: !0,
                isObscured: d,
                src: t,
                children: e => (0, i.jsx)(T.default, {
                    src: t,
                    width: n,
                    height: r,
                    maxWidth: I,
                    maxHeight: f,
                    renderLinkComponent: l,
                    volume: E.getVolume,
                    autoMute: E.getMuted,
                    onVolumeChange: E.setVolume,
                    onMute: E.setMuted,
                    autoPlay: !e,
                    onContextMenu: p,
                    ..._
                }, t)
            }), !u && l({
                href: t,
                target: "_blank",
                rel: "noreferrer noopener",
                className: A.downloadLink,
                children: h.default.Messages.OPEN_IN_BROWSER
            })]
        })
    }
}