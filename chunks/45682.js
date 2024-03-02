function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("907002"),
        o = n("446674"),
        u = n("151426"),
        d = n("856567"),
        c = n("77078"),
        f = n("206230"),
        m = n("384997"),
        p = n("697218"),
        h = n("181114"),
        E = n("216422"),
        g = n("719923"),
        C = n("994428"),
        S = n("782340"),
        T = n("577827");
    let I = {
        tension: 750,
        mass: 2.5,
        friction: 70
    };

    function v(e) {
        let {
            tooltipText: t,
            headingText: n,
            textColor: i
        } = e, a = null != n;
        return (0, l.jsxs)("span", {
            className: a ? void 0 : T.tooltipContainer,
            children: [(0, l.jsxs)("span", {
                className: T.tooltipContainer,
                children: [(0, l.jsx)(E.default, {
                    className: T.nitroWheel
                }), a ? (0, l.jsx)(c.Heading, {
                    color: null != i ? i : "text-normal",
                    variant: "heading-sm/semibold",
                    children: n
                }) : null]
            }), (0, l.jsx)(c.Text, {
                variant: a ? "text-xs/normal" : "text-sm/medium",
                color: null != i ? i : "text-normal",
                children: t
            })]
        })
    }

    function _(e) {
        let {
            checked: t,
            onClick: n,
            id: a = "burst-reaction-toggle-button"
        } = e, E = (0, o.useStateFromStores)([f.default], () => f.default.useReducedMotion), _ = p.default.getCurrentUser(), N = null != _ && !(0, g.isPremium)(_), A = N ? [] : [u.DismissibleContent.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP], [x, y] = (0, m.useSelectedDismissibleContent)(A), [O, R] = i.useState(!1), [M, L] = (0, r.useSpring)(() => ({})), P = (0, r.animated)(d.SuperReactionIcon);
        i.useEffect(() => {
            let e = x === u.DismissibleContent.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
            e && (y(C.ContentDismissActionType.DISMISS), setTimeout(() => R(e), 200))
        }, [x, y]);
        let b = O ? S.default.Messages.SUPER_REACTIONS_UNLIMITED_NOTICE_DESCRIPTION_DESKTOP_V2 : t ? S.default.Messages.SUPER_REACTION_TOGGLE_ENABLED : S.default.Messages.SUPER_REACTION_TOGGLE_DISABLED,
            j = O ? S.default.Messages.SUPER_REACTIONS_UNLIMITED_NOTICE_TITLE : void 0;
        return (0, l.jsxs)(c.TooltipContainer, {
            position: "top",
            text: (0, l.jsx)(v, {
                textColor: "always-white",
                tooltipText: b,
                headingText: j
            }),
            color: c.Tooltip.Colors.BRAND,
            forceOpen: O,
            "aria-label": b,
            tooltipClassName: T.tooltip,
            children: [(0, l.jsx)("input", {
                className: T.visuallyHidden,
                checked: t,
                onChange: function() {
                    L({
                        from: {
                            rotate: t ? "360deg" : "0deg"
                        },
                        to: {
                            rotate: t ? "0deg" : "360deg"
                        },
                        config: I
                    }), null == n || n(), R(!1)
                },
                id: a,
                type: "checkbox"
            }), (0, l.jsxs)("label", {
                htmlFor: a,
                className: s(T.label, {
                    [T.labelChecked]: t
                }),
                children: [t ? (0, l.jsx)(h.Shine, {
                    className: T.shine,
                    shinePaused: E
                }) : null, (0, l.jsx)(P, {
                    style: E ? void 0 : M,
                    width: 20,
                    height: 20,
                    color: t ? "white" : void 0,
                    className: T.icon
                }), (0, l.jsx)("span", {
                    children: (0, l.jsx)(c.Text, {
                        className: T.visuallyHidden,
                        variant: "text-sm/semibold",
                        children: S.default.Messages.SUPER_REACTION_TOGGLE_DISABLED
                    })
                })]
            })]
        })
    }
}