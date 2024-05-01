function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        a = n("442837"),
        s = n("481060"),
        o = n("913663"),
        l = n("268350"),
        u = n("419922"),
        d = n("696202"),
        _ = n("132338"),
        c = n("689938"),
        E = n("902153");
    t.default = r.memo(function(e) {
        var t;
        let {
            channelId: n,
            chatInputType: I
        } = e, [T, f] = r.useState(null), S = (0, a.useStateFromStores)([o.default], () => o.default.getStickerPreview(n, I.drafts.type));
        return (null === (t = I.stickers) || void 0 === t ? void 0 : t.allowSending) && null != S && 0 !== S.length ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("div", {
                className: E.stickerPreviews,
                children: S.map(e => (0, i.jsxs)("div", {
                    className: E.stickerPreviewContainer,
                    children: [(0, i.jsx)(s.Clickable, {
                        onFocus: () => f(e.id),
                        onBlur: () => f(null),
                        className: E.closeButton,
                        "aria-label": c.default.Messages.GUILD_STICKER_A11Y_REMOVE_STICKER.format({
                            name: e.name
                        }),
                        onClick: () => (0, l.clearStickerPreview)(n, I.drafts.type),
                        children: (0, i.jsx)("div", {
                            className: E.closeIconContainer,
                            children: (0, i.jsx)(d.default, {
                                className: E.closeIcon
                            })
                        })
                    }), (0, i.jsx)(u.default, {
                        isInteracting: T === e.id,
                        className: E.stickerPreview,
                        size: 48,
                        sticker: e
                    })]
                }, e.id))
            }), (0, i.jsx)(_.default, {
                className: E.stickerPreviewDivider
            })]
        }) : null
    })
}