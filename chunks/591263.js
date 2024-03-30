function(e, t, r) {
    "use strict";
    r.r(t);
    var n = r("470079"),
        l = r("784184"),
        i = r("140817"),
        a = r("930350"),
        o = r("366960"),
        c = r("935741"),
        u = r("894288"),
        s = r("311839"),
        f = r("870331"),
        d = r("281767"),
        m = r("941504"),
        h = r("61593");
    t.default = function(e) {
        var t = e.guild,
            r = e.message,
            p = e.onClose,
            g = c.default.getChannel(u.default.getChannelId(t.id));
        return (n.useEffect(function() {
            f.default.track(d.AnalyticEvents.OPEN_POPOUT, {
                type: "New Member Badge Popout",
                guild_id: t.id,
                channel_id: null == g ? void 0 : g.id
            })
        }, []), null == g) ? null : n.createElement(a.MessagePopoutContent, null, n.createElement("div", {
            className: h.popoutContainer
        }, n.createElement("div", {
            className: h.mainContent
        }, n.createElement("div", {
            className: h.iconContainer
        }, n.createElement(s.default, {
            width: 40,
            height: 40
        })), n.createElement("div", null, n.createElement(l.Heading, {
            variant: "heading-md/semibold",
            className: h.header
        }, m.default.Messages.NEW_MEMBER_BADGE_TOOLTIP_TEXT), n.createElement(l.Text, {
            variant: "text-sm/normal"
        }, m.default.Messages.NEW_MEMBER_BADGE_POPOUT_TEXT))), n.createElement(l.Button, {
            size: l.Button.Sizes.SMALL,
            color: l.Button.Colors.BRAND,
            className: h.ctaButton,
            innerClassName: h.ctaButtonContent,
            fullWidth: !0,
            onClick: function() {
                i.default.trackWithMetadata(d.AnalyticEvents.NEW_MEMBER_MENTION_CTA_CLICKED, {
                    target_user_id: r.author.id
                }), p(), (0, o.mentionUser)(r.author, g.id)
            }
        }, m.default.Messages.MENTION_USER.format({
            username: r.author.username
        }))))
    }
}