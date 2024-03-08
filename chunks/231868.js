function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("446674"),
        s = n("77078"),
        r = n("328511"),
        o = n("467094"),
        u = n("41170"),
        d = n("381546"),
        c = n("898260"),
        f = n("782340"),
        p = n("308747"),
        m = l.memo(function(e) {
            var t;
            let {
                channelId: n,
                chatInputType: m
            } = e, [h, x] = l.useState(null), E = (0, a.useStateFromStores)([r.default], () => r.default.getStickerPreview(n, m.drafts.type));
            return (null === (t = m.stickers) || void 0 === t ? void 0 : t.allowSending) && null != E && 0 !== E.length ? (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                    className: p.stickerPreviews,
                    children: E.map(e => (0, i.jsxs)("div", {
                        className: p.stickerPreviewContainer,
                        children: [(0, i.jsx)(s.Clickable, {
                            onFocus: () => x(e.id),
                            onBlur: () => x(null),
                            className: p.closeButton,
                            "aria-label": f.default.Messages.GUILD_STICKER_A11Y_REMOVE_STICKER.format({
                                name: e.name
                            }),
                            onClick: () => (0, o.clearStickerPreview)(n, m.drafts.type),
                            children: (0, i.jsx)("div", {
                                className: p.closeIconContainer,
                                children: (0, i.jsx)(d.default, {
                                    className: p.closeIcon
                                })
                            })
                        }), (0, i.jsx)(u.default, {
                            isInteracting: h === e.id,
                            className: p.stickerPreview,
                            size: 48,
                            sticker: e
                        })]
                    }, e.id))
                }), (0, i.jsx)(c.default, {
                    className: p.stickerPreviewDivider
                })]
            }) : null
        })
}