function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("446674"),
        s = n("77078"),
        r = n("328511"),
        o = n("467094"),
        u = n("41170"),
        d = n("381546"),
        c = n("898260"),
        f = n("782340"),
        m = n("308747"),
        p = i.memo(function(e) {
            var t;
            let {
                channelId: n,
                chatInputType: p
            } = e, [h, E] = i.useState(null), g = (0, a.useStateFromStores)([r.default], () => r.default.getStickerPreview(n, p.drafts.type));
            return (null === (t = p.stickers) || void 0 === t ? void 0 : t.allowSending) && null != g && 0 !== g.length ? (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)("div", {
                    className: m.stickerPreviews,
                    children: g.map(e => (0, l.jsxs)("div", {
                        className: m.stickerPreviewContainer,
                        children: [(0, l.jsx)(s.Clickable, {
                            onFocus: () => E(e.id),
                            onBlur: () => E(null),
                            className: m.closeButton,
                            "aria-label": f.default.Messages.GUILD_STICKER_A11Y_REMOVE_STICKER.format({
                                name: e.name
                            }),
                            onClick: () => (0, o.clearStickerPreview)(n, p.drafts.type),
                            children: (0, l.jsx)("div", {
                                className: m.closeIconContainer,
                                children: (0, l.jsx)(d.default, {
                                    className: m.closeIcon
                                })
                            })
                        }), (0, l.jsx)(u.default, {
                            isInteracting: h === e.id,
                            className: m.stickerPreview,
                            size: 48,
                            sticker: e
                        })]
                    }, e.id))
                }), (0, l.jsx)(c.default, {
                    className: m.stickerPreviewDivider
                })]
            }) : null
        })
}