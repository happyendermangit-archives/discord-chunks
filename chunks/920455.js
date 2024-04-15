function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("481060"),
        l = n("239091"),
        u = n("688465"),
        d = n("63063"),
        _ = n("689079"),
        c = n("981631"),
        E = n("689938"),
        I = n("594379");

    function T(e) {
        var t;
        let {
            className: s,
            activeCommand: T
        } = e, f = r.useCallback(e => {
            var t;
            let r = null == T ? void 0 : null === (t = T.rootCommand) || void 0 === t ? void 0 : t.id;
            if (null == r) {
                e.preventDefault();
                return
            }(0, l.openContextMenuLazy)(e, async () => {
                let {
                    default: e
                } = await n.e("5396").then(n.bind(n, "731646"));
                return t => (0, i.jsx)(e, {
                    ...t,
                    id: r,
                    label: E.default.Messages.COPY_ID_COMMAND
                })
            })
        }, [null == T ? void 0 : null === (t = T.rootCommand) || void 0 === t ? void 0 : t.id]);
        return null == T ? null : (0, i.jsxs)("div", {
            className: a()(s, I.bar),
            onContextMenu: f,
            children: [(0, i.jsx)(u.default, {}), (0, i.jsxs)(o.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: [E.default.Messages.APPLICATION_COMMAND_USER_INSTALL_EDUCATION.format({
                    betaUserLimit: _.APPLICATION_USER_INSTALL_BETA_USER_LIMIT
                }), E.default.Messages.APPLICATION_COMMAND_USER_INSTALL_LEARN_MORE.format({
                    learnMoreUrl: d.default.getArticleURL(c.HelpdeskArticles.USING_APPS_FAQ)
                })]
            })]
        })
    }
}