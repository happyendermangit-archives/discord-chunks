function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("442837"),
        s = n("481060"),
        a = n("739566"),
        o = n("25015"),
        l = n("592125"),
        u = n("998951"),
        d = n("113039"),
        _ = n("778947"),
        c = n("512665"),
        E = n("768760"),
        I = n("689938"),
        T = n("286424");
    t.default = e => {
        let {
            message: t
        } = e, n = (0, a.default)(t), f = (0, r.useStateFromStores)([l.default], () => l.default.getChannel(t.channel_id)), {
            content: S
        } = (0, o.default)(t, {
            hideSimpleEmbedContent: !1
        });
        return null == f ? null : (0, i.jsxs)("div", {
            className: T.container,
            children: [(0, i.jsx)(s.Heading, {
                className: T.header,
                variant: "heading-sm/semibold",
                children: I.default.Messages.MOBILE_REPORTS_MESSAGE_PREVIEW_TITLE
            }), (0, i.jsx)(s.Scroller, {
                className: T.messagePreviewContainer,
                children: (0, i.jsx)(u.default, {
                    childrenMessageContent: (() => {
                        if (null == S || "" === S || Array.isArray(S) && 0 === S.length) {
                            let {
                                icon: e
                            } = (0, c.renderSingleLineMessage)(t, S, !1, "", {
                                iconClass: T.attachmentIcon,
                                iconSize: E.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
                            });
                            return e
                        }
                        return (0, i.jsx)(d.default, {
                            message: t,
                            content: S
                        })
                    })(),
                    childrenHeader: (0, i.jsx)(_.default, {
                        message: t,
                        channel: f,
                        author: n,
                        guildId: f.guild_id
                    }),
                    disableInteraction: !0
                })
            })]
        })
    }
}