function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("414456"),
        r = n.n(s),
        a = n("414055"),
        o = n("996554"),
        l = n("486952"),
        u = n("988268"),
        d = n("782340"),
        c = n("639670");
    let f = e => {
        let t, {
                invertColor: n = !1,
                type: s = u.BotTagTypes.BOT,
                className: f,
                verified: _,
                hideIcon: E = !1,
                useRemSizes: h = !1,
                children: g = []
            } = e,
            m = null,
            p = d.default.Messages.VERIFIED_BOT_TOOLTIP,
            {
                enabled: S
            } = o.AppLauncherOnboardingExperiment.useExperiment({
                location: "Bot Tag"
            }, {
                autoTrackExposure: !1
            });
        switch (s) {
            case u.BotTagTypes.SYSTEM_DM:
            case u.BotTagTypes.OFFICIAL:
                _ = !0, p = d.default.Messages.DISCORD_SYSTEM_MESSAGE_BOT_TAG_TOOLTIP, m = d.default.Messages.SYSTEM_DM_TAG_SYSTEM;
                break;
            case u.BotTagTypes.SERVER:
                m = d.default.Messages.BOT_TAG_SERVER;
                break;
            case u.BotTagTypes.ORIGINAL_POSTER:
                m = d.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER;
                break;
            case u.BotTagTypes.STAFF_ONLY_DM:
                m = d.default.Messages.STAFF_BADGE_TOOLTIP;
                break;
            case u.BotTagTypes.AI:
                _ = !0, p = d.default.Messages.AI_GENERATED_TOOLTIP, m = d.default.Messages.AI_TAG;
                break;
            case u.BotTagTypes.REMIX:
                _ = !1, m = d.default.Messages.REMIXING_TAG;
                break;
            case u.BotTagTypes.BOT:
            default:
                m = S ? d.default.Messages.APP_TAG : d.default.Messages.BOT_TAG_BOT
        }
        let v = s === u.BotTagTypes.ORIGINAL_POSTER,
            T = s === u.BotTagTypes.REMIX,
            I = null;
        _ && (I = (0, i.jsx)(a.Tooltip, {
            text: p,
            align: "center",
            position: "top",
            children: e => (0, i.jsx)(l.default, {
                ...e,
                className: c.botTagVerified
            })
        })), t = s === u.BotTagTypes.AI ? c.botTagAI : n ? c.botTagInvert : c.botTagRegular;
        let C = e => (0, i.jsxs)("span", {
            ...e,
            className: r(f, t, h ? c.rem : c.px, {
                [c.botTagOP]: v,
                [c.botTagRemix]: T
            }),
            children: [E ? null : I, g, (0, i.jsx)("span", {
                className: c.botText,
                children: m
            })]
        });
        switch (s) {
            case u.BotTagTypes.REMIX:
                return (0, i.jsx)(a.Tooltip, {
                    text: d.default.Messages.REMIXING_DOWNLOAD_APP,
                    position: "top",
                    children: e => C(e)
                });
            case u.BotTagTypes.ORIGINAL_POSTER:
                return (0, i.jsx)(a.Tooltip, {
                    text: d.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER_TOOLTIP,
                    position: "top",
                    children: e => C(e)
                });
            default:
                return C()
        }
    };
    f.Types = u.BotTagTypes;
    var _ = f
}