function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return O
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("513715"),
        l = n("442837"),
        u = n("524437"),
        d = n("389710"),
        _ = n("481060"),
        c = n("607070"),
        E = n("243778"),
        I = n("594174"),
        T = n("976644"),
        f = n("466111"),
        S = n("74538"),
        h = n("921944"),
        A = n("689938"),
        m = n("170799");
    let N = {
        tension: 750,
        mass: 2.5,
        friction: 70
    };

    function p(e) {
        let {
            tooltipText: t,
            headingText: n,
            textColor: r
        } = e, s = null != n;
        return (0, i.jsxs)("span", {
            className: s ? void 0 : m.tooltipContainer,
            children: [(0, i.jsxs)("span", {
                className: m.tooltipContainer,
                children: [(0, i.jsx)(f.default, {
                    className: m.nitroWheel
                }), s ? (0, i.jsx)(_.Heading, {
                    color: null != r ? r : "text-normal",
                    variant: "heading-sm/semibold",
                    children: n
                }) : null]
            }), (0, i.jsx)(_.Text, {
                variant: s ? "text-xs/normal" : "text-sm/medium",
                color: null != r ? r : "text-normal",
                children: t
            })]
        })
    }

    function O(e) {
        let {
            checked: t,
            onClick: n,
            id: s = "burst-reaction-toggle-button"
        } = e, f = (0, l.useStateFromStores)([c.default], () => c.default.useReducedMotion), O = I.default.getCurrentUser(), R = null == O || (0, S.isPremium)(O) ? [u.DismissibleContent.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP] : [], [C, g] = (0, E.useSelectedDismissibleContent)(R), [L, D] = r.useState(!1), [v, M] = (0, o.useSpring)(() => ({})), y = (0, o.animated)(d.SuperReactionIcon);
        r.useEffect(() => {
            let e = C === u.DismissibleContent.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
            e && (g(h.ContentDismissActionType.DISMISS), setTimeout(() => D(e), 200))
        }, [C, g]);
        let P = L ? A.default.Messages.SUPER_REACTIONS_UNLIMITED_NOTICE_DESCRIPTION_DESKTOP_V2 : t ? A.default.Messages.SUPER_REACTION_TOGGLE_ENABLED : A.default.Messages.SUPER_REACTION_TOGGLE_DISABLED,
            U = L ? A.default.Messages.SUPER_REACTIONS_UNLIMITED_NOTICE_TITLE : void 0;
        return (0, i.jsxs)(_.TooltipContainer, {
            position: "top",
            text: (0, i.jsx)(p, {
                textColor: "always-white",
                tooltipText: P,
                headingText: U
            }),
            color: _.Tooltip.Colors.BRAND,
            forceOpen: L,
            "aria-label": P,
            tooltipClassName: m.tooltip,
            children: [(0, i.jsx)("input", {
                className: m.visuallyHidden,
                checked: t,
                onChange: function() {
                    M({
                        from: {
                            rotate: t ? "360deg" : "0deg"
                        },
                        to: {
                            rotate: t ? "0deg" : "360deg"
                        },
                        config: N
                    }), null == n || n(), D(!1)
                },
                id: s,
                type: "checkbox"
            }), (0, i.jsxs)("label", {
                htmlFor: s,
                className: a()(m.label, {
                    [m.labelChecked]: t
                }),
                children: [t ? (0, i.jsx)(T.Shine, {
                    className: m.shine,
                    shinePaused: f
                }) : null, (0, i.jsx)(y, {
                    style: f ? void 0 : v,
                    width: 20,
                    height: 20,
                    color: t ? "white" : void 0,
                    className: m.icon
                }), (0, i.jsx)("span", {
                    children: (0, i.jsx)(_.Text, {
                        className: m.visuallyHidden,
                        variant: "text-sm/semibold",
                        children: A.default.Messages.SUPER_REACTION_TOGGLE_DISABLED
                    })
                })]
            })]
        })
    }
}