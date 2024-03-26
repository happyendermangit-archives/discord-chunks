function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    });
    var a = n("37983");
    n("884691");
    var l = n("446674"),
        r = n("77078"),
        s = n("574073"),
        i = n("39331"),
        d = n("42203"),
        o = n("780571"),
        u = n("497880"),
        c = n("93332"),
        m = n("93427"),
        _ = n("719347"),
        f = n("782340"),
        E = n("767162"),
        h = e => {
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
                            let e = null == v || "" === v || Array.isArray(v) && 0 === v.length;
                            if (e) {
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