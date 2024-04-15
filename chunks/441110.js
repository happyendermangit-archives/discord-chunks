function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        s = n("481060"),
        a = n("367907"),
        o = n("524444"),
        l = n("297047"),
        u = n("592125"),
        d = n("944486"),
        _ = n("490504"),
        c = n("626135"),
        E = n("981631"),
        I = n("689938"),
        T = n("61593");
    t.default = function(e) {
        let {
            guild: t,
            message: n,
            onClose: f
        } = e, S = u.default.getChannel(d.default.getChannelId(t.id));
        return (r.useEffect(() => {
            c.default.track(E.AnalyticEvents.OPEN_POPOUT, {
                type: "New Member Badge Popout",
                guild_id: t.id,
                channel_id: null == S ? void 0 : S.id
            })
        }, []), null == S) ? null : (0, i.jsx)(o.MessagePopoutContent, {
            children: (0, i.jsxs)("div", {
                className: T.popoutContainer,
                children: [(0, i.jsxs)("div", {
                    className: T.mainContent,
                    children: [(0, i.jsx)("div", {
                        className: T.iconContainer,
                        children: (0, i.jsx)(_.default, {
                            width: 40,
                            height: 40
                        })
                    }), (0, i.jsxs)("div", {
                        children: [(0, i.jsx)(s.Heading, {
                            variant: "heading-md/semibold",
                            className: T.header,
                            children: I.default.Messages.NEW_MEMBER_BADGE_TOOLTIP_TEXT
                        }), (0, i.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            children: I.default.Messages.NEW_MEMBER_BADGE_POPOUT_TEXT
                        })]
                    })]
                }), (0, i.jsx)(s.Button, {
                    size: s.Button.Sizes.SMALL,
                    color: s.Button.Colors.BRAND,
                    className: T.ctaButton,
                    innerClassName: T.ctaButtonContent,
                    fullWidth: !0,
                    onClick: () => {
                        a.default.trackWithMetadata(E.AnalyticEvents.NEW_MEMBER_MENTION_CTA_CLICKED, {
                            target_user_id: n.author.id
                        }), f(), (0, l.mentionUser)(n.author, S.id)
                    },
                    children: I.default.Messages.MENTION_USER.format({
                        username: n.author.username
                    })
                })]
            })
        })
    }
}