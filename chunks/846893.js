function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        a = n("898511"),
        o = n("784184"),
        l = n("970930"),
        i = n("239492"),
        u = n("935741"),
        c = n("896508"),
        s = n("905113"),
        d = n("372094"),
        f = n("260186"),
        m = n("766063"),
        p = n("941504"),
        v = n("286424");
    t.default = function(e) {
        var t = e.message,
            n = (0, l.default)(t),
            y = (0, a.useStateFromStores)([u.default], function() {
                return u.default.getChannel(t.channel_id)
            }),
            E = (0, i.default)(t, {
                hideSimpleEmbedContent: !1
            }).content;
        return null == y ? null : r.createElement("div", {
            className: v.container
        }, r.createElement(o.Heading, {
            className: v.header,
            variant: "heading-sm/semibold"
        }, p.default.Messages.MOBILE_REPORTS_MESSAGE_PREVIEW_TITLE), r.createElement(o.Scroller, {
            className: v.messagePreviewContainer
        }, r.createElement(c.default, {
            childrenMessageContent: null == E || "" === E || Array.isArray(E) && 0 === E.length ? (0, f.renderSingleLineMessage)(t, E, !1, "", {
                iconClass: v.attachmentIcon,
                iconSize: m.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
            }).icon : r.createElement(s.default, {
                message: t,
                content: E
            }),
            childrenHeader: r.createElement(d.default, {
                message: t,
                channel: y,
                author: n,
                guildId: y.guild_id
            }),
            disableInteraction: !0
        })))
    }
}