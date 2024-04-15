function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CenterControlButton: function() {
            return f
        },
        default: function() {
            return I
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("481060"),
        o = n("131388"),
        l = n("259580"),
        u = n("806519"),
        d = n("618158"),
        _ = n("362267"),
        c = n("689938"),
        E = n("524841");

    function I(e) {
        let {
            label: t,
            onClick: n,
            onKeyDown: r,
            onMouseEnter: o,
            onMouseLeave: l,
            onContextMenu: u,
            className: _,
            wrapperClassName: c,
            iconClassName: I,
            iconComponent: T,
            themeable: f = !1,
            disabled: S = !1,
            isActive: h = !1,
            tooltipPosition: A = "top",
            shouldShowTooltip: m = !0,
            forceTooltipOpen: N = !1,
            buttonRef: p,
            grow: O,
            "aria-label": R
        } = e;
        return (0, i.jsx)(d.default, {
            children: (0, i.jsx)(a.Tooltip, {
                position: A,
                text: t,
                "aria-label": R,
                shouldShow: m,
                forceOpen: N,
                children: e => {
                    let {
                        onClick: t,
                        onContextMenu: d,
                        onMouseEnter: A,
                        onMouseLeave: m,
                        ...N
                    } = e;
                    return (0, i.jsx)(a.Button, {
                        look: a.Button.Looks.BLANK,
                        size: a.Button.Sizes.NONE,
                        onKeyDown: e => {
                            null == r || r(e)
                        },
                        onClick: e => {
                            null == t || t(), null == n || n(e)
                        },
                        onMouseEnter: e => {
                            null == A || A(), null == o || o(e)
                        },
                        onMouseLeave: e => {
                            null == m || m(), null == l || l(e)
                        },
                        onContextMenu: e => {
                            null == d || d(), null == u || u(e)
                        },
                        onFocus: e => {
                            null == A || A(), null == o || o(e)
                        },
                        onBlur: e => {
                            null == m || m(), null == l || l(e)
                        },
                        disabled: S,
                        innerClassName: E.lineHeightReset,
                        className: s()({
                            [E.active]: h
                        }, _),
                        wrapperClassName: c,
                        buttonRef: p,
                        grow: O,
                        "aria-label": R,
                        ...N,
                        children: (0, i.jsx)(T, {
                            className: s()(E.controlIcon, I, {
                                [E.themeable]: f,
                                [E.active]: h
                            }),
                            color: "currentColor"
                        })
                    })
                }
            })
        })
    }
    let T = {
        red: E.red,
        white: E.white,
        green: E.green,
        yellow: E.yellow,
        primaryDark: E.primaryDark,
        primaryLight: E.primaryLight,
        activeLight: E.activeLight
    };

    function f(e) {
        let {
            color: t,
            isActive: n = !1,
            className: r,
            iconClassName: f,
            onPopoutClick: S,
            popoutOpen: h = !1,
            premiumGlow: A = !1,
            ...m
        } = e, N = (0, _.default)(t, n), p = (0, o.default)("(max-width: 456px)"), O = (0, i.jsx)(I, {
            ...m,
            grow: !1,
            onContextMenu: S,
            iconClassName: s()(f, E.centerIcon),
            className: s()(p ? r : null, E.staticButton, E.centerButton, T[N])
        });
        return p ? O : (0, i.jsxs)("div", {
            className: s()(r, E.contextMenuContainer),
            children: [(0, i.jsx)(u.default, {
                className: s()({
                    [E.buttonPremiumGlow]: A
                }),
                mask: null == S ? null : u.MaskIDs.CHANNEL_CALL_CONTROL_BUTTON,
                width: 56,
                height: 56,
                children: O
            }), null != S ? (0, i.jsx)(d.default, {
                children: (0, i.jsx)(a.Clickable, {
                    "aria-label": c.default.Messages.MORE_OPTIONS,
                    onClick: S,
                    onContextMenu: S,
                    className: s()(E.contextMenuNub, T[N], {
                        [E.active]: h
                    }),
                    children: (0, i.jsx)(l.default, {
                        className: s()(E.contextMenuCaret, {
                            [E.open]: h
                        })
                    })
                })
            }) : null]
        })
    }
}