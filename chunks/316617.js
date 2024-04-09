function(e, t, n) {
    "use strict";
    n.r(t);
    var a = n("735250");
    n("470079");
    var l = n("442837"),
        r = n("481060"),
        s = n("739566"),
        i = n("25015"),
        d = n("592125"),
        o = n("998951"),
        u = n("113039"),
        c = n("778947"),
        m = n("512665"),
        _ = n("768760"),
        f = n("689938"),
        E = n("286424");
    t.default = e => {
        let {
            message: t
        } = e, n = (0, s.default)(t), h = (0, l.useStateFromStores)([d.default], () => d.default.getChannel(t.channel_id)), {
            content: v
        } = (0, i.default)(t, {
            hideSimpleEmbedContent: !1
        });
        return null == h ? null : (0, a.jsxs)("div", {
            className: E.container,
            children: [(0, a.jsx)(r.Heading, {
                className: E.header,
                variant: "heading-sm/semibold",
                children: f.default.Messages.MOBILE_REPORTS_MESSAGE_PREVIEW_TITLE
            }), (0, a.jsx)(r.Scroller, {
                className: E.messagePreviewContainer,
                children: (0, a.jsx)(o.default, {
                    childrenMessageContent: (() => {
                        if (null == v || "" === v || Array.isArray(v) && 0 === v.length) {
                            let {
                                icon: e
                            } = (0, m.renderSingleLineMessage)(t, v, !1, "", {
                                iconClass: E.attachmentIcon,
                                iconSize: _.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
                            });
                            return e
                        }
                        return (0, a.jsx)(u.default, {
                            message: t,
                            content: v
                        })
                    })(),
                    childrenHeader: (0, a.jsx)(c.default, {
                        message: t,
                        channel: h,
                        author: n,
                        guildId: h.guild_id
                    }),
                    disableInteraction: !0
                })
            })]
        })
    }
}