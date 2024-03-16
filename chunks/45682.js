function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("907002"),
        o = n("446674"),
        u = n("151426"),
        d = n("856567"),
        c = n("77078"),
        f = n("206230"),
        p = n("384997"),
        m = n("697218"),
        h = n("181114"),
        x = n("216422"),
        E = n("719923"),
        y = n("994428"),
        g = n("782340"),
        S = n("577827");
    let C = {
        tension: 750,
        mass: 2.5,
        friction: 70
    };

    function I(e) {
        let {
            tooltipText: t,
            headingText: n,
            textColor: l
        } = e, a = null != n;
        return (0, i.jsxs)("span", {
            className: a ? void 0 : S.tooltipContainer,
            children: [(0, i.jsxs)("span", {
                className: S.tooltipContainer,
                children: [(0, i.jsx)(x.default, {
                    className: S.nitroWheel
                }), a ? (0, i.jsx)(c.Heading, {
                    color: null != l ? l : "text-normal",
                    variant: "heading-sm/semibold",
                    children: n
                }) : null]
            }), (0, i.jsx)(c.Text, {
                variant: a ? "text-xs/normal" : "text-sm/medium",
                color: null != l ? l : "text-normal",
                children: t
            })]
        })
    }

    function T(e) {
        let {
            checked: t,
            onClick: n,
            id: a = "burst-reaction-toggle-button"
        } = e, x = (0, o.useStateFromStores)([f.default], () => f.default.useReducedMotion), T = m.default.getCurrentUser(), _ = null != T && !(0, E.isPremium)(T), v = _ ? [] : [u.DismissibleContent.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP], [N, A] = (0, p.useSelectedDismissibleContent)(v), [O, M] = l.useState(!1), [R, k] = (0, r.useSpring)(() => ({})), L = (0, r.animated)(d.SuperReactionIcon);
        l.useEffect(() => {
            let e = N === u.DismissibleContent.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
            e && (A(y.ContentDismissActionType.DISMISS), setTimeout(() => M(e), 200))
        }, [N, A]);
        let b = O ? g.default.Messages.SUPER_REACTIONS_UNLIMITED_NOTICE_DESCRIPTION_DESKTOP_V2 : t ? g.default.Messages.SUPER_REACTION_TOGGLE_ENABLED : g.default.Messages.SUPER_REACTION_TOGGLE_DISABLED,
            P = O ? g.default.Messages.SUPER_REACTIONS_UNLIMITED_NOTICE_TITLE : void 0;
        return (0, i.jsxs)(c.TooltipContainer, {
            position: "top",
            text: (0, i.jsx)(I, {
                textColor: "always-white",
                tooltipText: b,
                headingText: P
            }),
            color: c.Tooltip.Colors.BRAND,
            forceOpen: O,
            "aria-label": b,
            tooltipClassName: S.tooltip,
            children: [(0, i.jsx)("input", {
                className: S.visuallyHidden,
                checked: t,
                onChange: function() {
                    k({
                        from: {
                            rotate: t ? "360deg" : "0deg"
                        },
                        to: {
                            rotate: t ? "0deg" : "360deg"
                        },
                        config: C
                    }), null == n || n(), M(!1)
                },
                id: a,
                type: "checkbox"
            }), (0, i.jsxs)("label", {
                htmlFor: a,
                className: s(S.label, {
                    [S.labelChecked]: t
                }),
                children: [t ? (0, i.jsx)(h.Shine, {
                    className: S.shine,
                    shinePaused: x
                }) : null, (0, i.jsx)(L, {
                    style: x ? void 0 : R,
                    width: 20,
                    height: 20,
                    color: t ? "white" : void 0,
                    className: S.icon
                }), (0, i.jsx)("span", {
                    children: (0, i.jsx)(c.Text, {
                        className: S.visuallyHidden,
                        variant: "text-sm/semibold",
                        children: g.default.Messages.SUPER_REACTION_TOGGLE_DISABLED
                    })
                })]
            })]
        })
    }
}