function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("414456"),
        a = n.n(i),
        s = n("641531"),
        r = n("77078"),
        o = n("272030"),
        u = n("545158"),
        d = n("765089"),
        c = n("787336"),
        f = n("666897"),
        m = n("844659"),
        p = n("49111"),
        h = n("912303"),
        E = n("263218");

    function g(e) {
        return {
            react(t, i, g) {
                let S = g.noStyleAndInteraction ? void 0 : async n => {
                    let l = await (0, c.maybeRefreshAttachmentUrl)(t.attachmentUrl);
                    e.shouldStopPropagation && (null == n || n.stopPropagation()), d.default.trackLinkClicked(l), e.shouldCloseDefaultModals && (0, r.closeAllModals)(), (0, u.default)(l)
                }, C = g.noStyleAndInteraction ? p.NOOP : e => {
                    (0, o.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("136394").then(n.bind(n, "136394"));
                        return n => (0, l.jsx)(e, {
                            ...n,
                            attachmentUrl: t.attachmentUrl,
                            attachmentName: t.attachmentName
                        })
                    })
                };
                return (0, l.jsxs)(f.default, {
                    role: "link",
                    href: t.attachmentUrl,
                    onClick: S,
                    onContextMenu: C,
                    className: "attachmentLink",
                    children: [(0, l.jsx)(s.AttachmentIcon, {
                        className: a(E.icon, h.icon),
                        color: r.tokens.colors.MENTION_FOREGROUND,
                        width: 16,
                        height: 16
                    }), (0, m.smartOutput)(t, i, g)]
                }, g.key)
            }
        }
    }
}