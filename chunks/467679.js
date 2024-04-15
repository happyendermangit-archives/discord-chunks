function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("981729"),
        o = n("424602"),
        l = n("507957"),
        u = n("674563"),
        d = n("689938"),
        _ = n("868598");
    let c = e => {
        let t, {
                invertColor: n = !1,
                type: r = u.BotTagTypes.BOT,
                className: c,
                verified: E,
                hideIcon: I = !1,
                useRemSizes: T = !1,
                children: f = []
            } = e,
            S = null,
            h = d.default.Messages.VERIFIED_BOT_TOOLTIP,
            {
                enabled: A
            } = o.AppLauncherOnboardingExperiment.useExperiment({
                location: "Bot Tag"
            }, {
                autoTrackExposure: !1
            });
        switch (r) {
            case u.BotTagTypes.SYSTEM_DM:
            case u.BotTagTypes.OFFICIAL:
                E = !0, h = d.default.Messages.DISCORD_SYSTEM_MESSAGE_BOT_TAG_TOOLTIP, S = d.default.Messages.SYSTEM_DM_TAG_SYSTEM;
                break;
            case u.BotTagTypes.SERVER:
                S = d.default.Messages.BOT_TAG_SERVER;
                break;
            case u.BotTagTypes.ORIGINAL_POSTER:
                S = d.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER;
                break;
            case u.BotTagTypes.STAFF_ONLY_DM:
                S = d.default.Messages.STAFF_BADGE_TOOLTIP;
                break;
            case u.BotTagTypes.AI:
                E = !0, h = d.default.Messages.AI_GENERATED_TOOLTIP, S = d.default.Messages.AI_TAG;
                break;
            case u.BotTagTypes.REMIX:
                E = !1, S = d.default.Messages.REMIXING_TAG;
                break;
            case u.BotTagTypes.BOT:
            default:
                S = A ? d.default.Messages.APP_TAG : d.default.Messages.BOT_TAG_BOT
        }
        let m = r === u.BotTagTypes.ORIGINAL_POSTER,
            N = r === u.BotTagTypes.REMIX,
            p = null;
        E && (p = (0, i.jsx)(a.Tooltip, {
            text: h,
            align: "center",
            position: "top",
            children: e => (0, i.jsx)(l.default, {
                ...e,
                className: _.botTagVerified
            })
        })), t = r === u.BotTagTypes.AI ? _.botTagAI : n ? _.botTagInvert : _.botTagRegular;
        let O = e => (0, i.jsxs)("span", {
            ...e,
            className: s()(c, t, T ? _.rem : _.px, {
                [_.botTagOP]: m,
                [_.botTagRemix]: N
            }),
            children: [I ? null : p, f, (0, i.jsx)("span", {
                className: _.botText,
                children: S
            })]
        });
        switch (r) {
            case u.BotTagTypes.REMIX:
                return (0, i.jsx)(a.Tooltip, {
                    text: d.default.Messages.REMIXING_DOWNLOAD_APP,
                    position: "top",
                    children: e => O(e)
                });
            case u.BotTagTypes.ORIGINAL_POSTER:
                return (0, i.jsx)(a.Tooltip, {
                    text: d.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER_TOOLTIP,
                    position: "top",
                    children: e => O(e)
                });
            default:
                return O()
        }
    };
    c.Types = u.BotTagTypes, t.default = c
}