function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("700111"),
        o = n("481060"),
        l = n("239091"),
        u = n("782568"),
        d = n("364640"),
        _ = n("198620"),
        c = n("797053"),
        E = n("746878"),
        I = n("981631"),
        T = n("863538"),
        f = n("785232");

    function S(e) {
        return {
            react(t, r, S) {
                let h = S.noStyleAndInteraction ? void 0 : async n => {
                    let i = await (0, _.maybeRefreshAttachmentUrl)(t.attachmentUrl);
                    e.shouldStopPropagation && (null == n || n.stopPropagation()), d.default.trackLinkClicked(i), e.shouldCloseDefaultModals && (0, o.closeAllModals)(), (0, u.default)(i)
                }, A = S.noStyleAndInteraction ? I.NOOP : e => {
                    (0, l.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.e("98466").then(n.bind(n, "151578"));
                        return n => (0, i.jsx)(e, {
                            ...n,
                            attachmentUrl: t.attachmentUrl,
                            attachmentName: t.attachmentName
                        })
                    })
                };
                return (0, i.jsxs)(c.default, {
                    role: "link",
                    href: t.attachmentUrl,
                    onClick: h,
                    onContextMenu: A,
                    className: "attachmentLink",
                    children: [(0, i.jsx)(a.AttachmentIcon, {
                        className: s()(f.icon, T.icon),
                        color: o.tokens.colors.MENTION_FOREGROUND,
                        width: 16,
                        height: 16
                    }), (0, E.smartOutput)(t, r, S)]
                }, S.key)
            }
        }
    }
}