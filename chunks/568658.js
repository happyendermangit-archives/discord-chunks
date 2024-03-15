function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("77078"),
        o = n("272030"),
        u = n("298878"),
        d = n("701909"),
        c = n("317041"),
        f = n("49111"),
        p = n("782340"),
        m = n("485700");

    function h(e) {
        var t;
        let {
            className: a,
            activeCommand: h
        } = e, x = l.useCallback(e => {
            var t;
            let l = null == h ? void 0 : null === (t = h.rootCommand) || void 0 === t ? void 0 : t.id;
            if (null == l) {
                e.preventDefault();
                return
            }(0, o.openContextMenuLazy)(e, async () => {
                let {
                    default: e
                } = await n.el("443070").then(n.bind(n, "443070"));
                return t => (0, i.jsx)(e, {
                    ...t,
                    id: l,
                    label: p.default.Messages.COPY_ID_COMMAND
                })
            })
        }, [null == h ? void 0 : null === (t = h.rootCommand) || void 0 === t ? void 0 : t.id]);
        return null == h ? null : (0, i.jsxs)("div", {
            className: s(a, m.bar),
            onContextMenu: x,
            children: [(0, i.jsx)(u.default, {}), (0, i.jsxs)(r.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: [p.default.Messages.APPLICATION_COMMAND_USER_INSTALL_EDUCATION.format({
                    betaUserLimit: c.APPLICATION_USER_INSTALL_BETA_USER_LIMIT
                }), p.default.Messages.APPLICATION_COMMAND_USER_INSTALL_LEARN_MORE.format({
                    learnMoreUrl: d.default.getArticleURL(f.HelpdeskArticles.USING_APPS_FAQ)
                })]
            })]
        })
    }
}