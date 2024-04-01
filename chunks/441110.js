function(t, e, i) {
    "use strict";
    i.r(e);
    var l = i("735250"),
        r = i("470079"),
        a = i("481060"),
        n = i("367907"),
        s = i("524444"),
        o = i("297047"),
        d = i("592125"),
        c = i("944486"),
        h = i("289447"),
        u = i("626135"),
        f = i("981631"),
        x = i("689938"),
        m = i("61593");
    e.default = function(t) {
        let {
            guild: e,
            message: i,
            onClose: g
        } = t, j = d.default.getChannel(c.default.getChannelId(e.id));
        return (r.useEffect(() => {
            u.default.track(f.AnalyticEvents.OPEN_POPOUT, {
                type: "New Member Badge Popout",
                guild_id: e.id,
                channel_id: null == j ? void 0 : j.id
            })
        }, []), null == j) ? null : (0, l.jsx)(s.MessagePopoutContent, {
            children: (0, l.jsxs)("div", {
                className: m.popoutContainer,
                children: [(0, l.jsxs)("div", {
                    className: m.mainContent,
                    children: [(0, l.jsx)("div", {
                        className: m.iconContainer,
                        children: (0, l.jsx)(h.default, {
                            width: 40,
                            height: 40
                        })
                    }), (0, l.jsxs)("div", {
                        children: [(0, l.jsx)(a.Heading, {
                            variant: "heading-md/semibold",
                            className: m.header,
                            children: x.default.Messages.NEW_MEMBER_BADGE_TOOLTIP_TEXT
                        }), (0, l.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            children: x.default.Messages.NEW_MEMBER_BADGE_POPOUT_TEXT
                        })]
                    })]
                }), (0, l.jsx)(a.Button, {
                    size: a.Button.Sizes.SMALL,
                    color: a.Button.Colors.BRAND,
                    className: m.ctaButton,
                    innerClassName: m.ctaButtonContent,
                    fullWidth: !0,
                    onClick: () => {
                        n.default.trackWithMetadata(f.AnalyticEvents.NEW_MEMBER_MENTION_CTA_CLICKED, {
                            target_user_id: i.author.id
                        }), g(), (0, o.mentionUser)(i.author, j.id)
                    },
                    children: x.default.Messages.MENTION_USER.format({
                        username: i.author.username
                    })
                })]
            })
        })
    }
}