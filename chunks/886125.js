function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("414456"),
        a = n.n(l),
        s = n("641531"),
        r = n("77078"),
        o = n("272030"),
        u = n("545158"),
        d = n("765089"),
        c = n("787336"),
        f = n("666897"),
        p = n("844659"),
        m = n("49111"),
        h = n("912303"),
        x = n("263218");

    function E(e) {
        return {
            react(t, l, E) {
                let y = E.noStyleAndInteraction ? void 0 : async n => {
                    let i = await (0, c.maybeRefreshAttachmentUrl)(t.attachmentUrl);
                    e.shouldStopPropagation && (null == n || n.stopPropagation()), d.default.trackLinkClicked(i), e.shouldCloseDefaultModals && (0, r.closeAllModals)(), (0, u.default)(i)
                }, g = E.noStyleAndInteraction ? m.NOOP : e => {
                    (0, o.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("136394").then(n.bind(n, "136394"));
                        return n => (0, i.jsx)(e, {
                            ...n,
                            attachmentUrl: t.attachmentUrl,
                            attachmentName: t.attachmentName
                        })
                    })
                };
                return (0, i.jsxs)(f.default, {
                    role: "link",
                    href: t.attachmentUrl,
                    onClick: y,
                    onContextMenu: g,
                    className: "attachmentLink",
                    children: [(0, i.jsx)(s.AttachmentIcon, {
                        className: a(x.icon, h.icon),
                        color: r.tokens.colors.MENTION_FOREGROUND,
                        width: 16,
                        height: 16
                    }), (0, p.smartOutput)(t, l, E)]
                }, E.key)
            }
        }
    }
}