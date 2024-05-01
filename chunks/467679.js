function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        a = n.n(r),
        s = n("981729"),
        o = n("507957"),
        l = n("674563"),
        u = n("689938"),
        d = n("542713");
    let _ = e => {
        let t, {
                invertColor: n = !1,
                type: r = l.BotTagTypes.BOT,
                className: _,
                verified: c,
                hideIcon: E = !1,
                useRemSizes: I = !1,
                children: T = []
            } = e,
            f = null,
            S = u.default.Messages.VERIFIED_BOT_TOOLTIP;
        switch (r) {
            case l.BotTagTypes.SYSTEM_DM:
            case l.BotTagTypes.OFFICIAL:
                c = !0, S = u.default.Messages.DISCORD_SYSTEM_MESSAGE_BOT_TAG_TOOLTIP, f = u.default.Messages.SYSTEM_DM_TAG_SYSTEM;
                break;
            case l.BotTagTypes.SERVER:
                f = u.default.Messages.BOT_TAG_SERVER;
                break;
            case l.BotTagTypes.ORIGINAL_POSTER:
                f = u.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER;
                break;
            case l.BotTagTypes.STAFF_ONLY_DM:
                f = u.default.Messages.STAFF_BADGE_TOOLTIP;
                break;
            case l.BotTagTypes.AI:
                c = !0, S = u.default.Messages.AI_GENERATED_TOOLTIP, f = u.default.Messages.AI_TAG;
                break;
            case l.BotTagTypes.REMIX:
                c = !1, f = u.default.Messages.REMIXING_TAG;
                break;
            case l.BotTagTypes.BOT:
            default:
                f = u.default.Messages.APP_TAG
        }
        let h = r === l.BotTagTypes.ORIGINAL_POSTER,
            A = r === l.BotTagTypes.REMIX,
            m = null;
        c && (m = (0, i.jsx)(s.Tooltip, {
            text: S,
            align: "center",
            position: "top",
            children: e => (0, i.jsx)(o.default, {
                ...e,
                className: d.botTagVerified
            })
        })), t = r === l.BotTagTypes.AI ? d.botTagAI : n ? d.botTagInvert : d.botTagRegular;
        let N = e => (0, i.jsxs)("span", {
            ...e,
            className: a()(_, t, I ? d.rem : d.px, {
                [d.botTagOP]: h,
                [d.botTagRemix]: A
            }),
            children: [E ? null : m, T, (0, i.jsx)("span", {
                className: d.botText,
                children: f
            })]
        });
        switch (r) {
            case l.BotTagTypes.REMIX:
                return (0, i.jsx)(s.Tooltip, {
                    text: u.default.Messages.REMIXING_DOWNLOAD_APP,
                    position: "top",
                    children: e => N(e)
                });
            case l.BotTagTypes.ORIGINAL_POSTER:
                return (0, i.jsx)(s.Tooltip, {
                    text: u.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER_TOOLTIP,
                    position: "top",
                    children: e => N(e)
                });
            default:
                return N()
        }
    };
    _.Types = l.BotTagTypes, t.default = _
}