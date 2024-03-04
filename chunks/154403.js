function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return u
        }
    }), E("222007");
    var t = E("37983"),
        o = E("884691"),
        n = E("414456"),
        r = E.n(n),
        a = E("446674"),
        i = E("77078"),
        I = E("368694"),
        T = E("313915"),
        s = E("578706"),
        S = E("381546"),
        N = E("655804"),
        O = E("238500"),
        A = E("983782"),
        R = E("939011"),
        l = E("440296");

    function u() {
        let {
            debugTrackedData: e,
            impressions: _
        } = (0, R.useImpressionStore)(e => ({
            debugTrackedData: e.debugTrackedData,
            impressions: e.impressions
        })), E = (0, a.useStateFromStores)([T.default], () => T.default.isAnalyticsDebuggerEnabled), n = (0, a.useStateFromStores)([I.default], () => I.default.isDeveloper), [u, L] = o.useState(!1), {
            name: C,
            ...D
        } = null != e ? e : {}, c = null != C;
        return n && E ? (0, t.jsx)(A.default, {
            children: (0, t.jsxs)("div", {
                className: r(l.container, {
                    [l.containerMinimized]: u,
                    [l.notTracked]: !c
                }),
                children: [(0, t.jsx)(i.Clickable, {
                    className: l.minimizeButton,
                    onClick: () => {
                        L(!u)
                    },
                    children: u ? (0, t.jsx)(N.default, {}) : (0, t.jsx)(O.default, {})
                }), (0, t.jsxs)("div", {
                    className: r(l.content, {
                        [l.contentMinimized]: u
                    }),
                    children: [(0, t.jsxs)(i.Text, {
                        className: r(l.label, {
                            [l.notTracked]: !c
                        }),
                        variant: "text-xxs/normal",
                        children: [c ? (0, t.jsx)(s.default, {
                            className: l.iconTracked
                        }) : (0, t.jsx)(S.default, {
                            className: l.iconNotTracked
                        }), null != C ? C : "(untracked)"]
                    }), (0, t.jsx)("div", {
                        className: l.current,
                        children: JSON.stringify(D, void 0, 2)
                    }), (0, t.jsx)(i.Text, {
                        className: r(l.label, {
                            [l.notTracked]: !c
                        }),
                        variant: "text-xxs/normal",
                        children: "impressions stack"
                    }), (0, t.jsx)("div", {
                        className: l.stack,
                        children: JSON.stringify(_, void 0, 2)
                    })]
                })]
            })
        }) : null
    }
}