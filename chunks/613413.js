function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
        o = n("442837"),
        l = n("481060"),
        u = n("906467"),
        d = n("857192"),
        _ = n("441674"),
        c = n("696202"),
        E = n("835225"),
        I = n("117795"),
        T = n("153850"),
        f = n("565384"),
        S = n("55835");

    function h() {
        let {
            debugTrackedData: e,
            impressions: t
        } = (0, f.useImpressionStore)(e => ({
            debugTrackedData: e.debugTrackedData,
            impressions: e.impressions
        })), n = (0, o.useStateFromStores)([d.default], () => d.default.isAnalyticsDebuggerEnabled), a = (0, o.useStateFromStores)([u.default], () => u.default.isDeveloper), [h, A] = r.useState(!1), {
            name: m,
            ...N
        } = null != e ? e : {}, p = null != m;
        return a && n ? (0, i.jsx)(T.default, {
            children: (0, i.jsxs)("div", {
                className: s()(S.container, {
                    [S.containerMinimized]: h,
                    [S.notTracked]: !p
                }),
                children: [(0, i.jsx)(l.Clickable, {
                    className: S.minimizeButton,
                    onClick: () => {
                        A(!h)
                    },
                    children: h ? (0, i.jsx)(E.default, {}) : (0, i.jsx)(I.default, {})
                }), (0, i.jsxs)("div", {
                    className: s()(S.content, {
                        [S.contentMinimized]: h
                    }),
                    children: [(0, i.jsxs)(l.Text, {
                        className: s()(S.label, {
                            [S.notTracked]: !p
                        }),
                        variant: "text-xxs/normal",
                        children: [p ? (0, i.jsx)(_.default, {
                            className: S.iconTracked
                        }) : (0, i.jsx)(c.default, {
                            className: S.iconNotTracked
                        }), null != m ? m : "(untracked)"]
                    }), (0, i.jsx)("div", {
                        className: S.current,
                        children: JSON.stringify(N, void 0, 2)
                    }), (0, i.jsx)(l.Text, {
                        className: s()(S.label, {
                            [S.notTracked]: !p
                        }),
                        variant: "text-xxs/normal",
                        children: "impressions stack"
                    }), (0, i.jsx)("div", {
                        className: S.stack,
                        children: JSON.stringify(t, void 0, 2)
                    })]
                })]
            })
        }) : null
    }
}