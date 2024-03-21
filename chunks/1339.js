function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        guildEventDetailsParser: function() {
            return i
        }
    });
    var l = n("367376"),
        a = n("180161"),
        s = n("47677");
    let r = {
            ...l.default.guildEventRules.link,
            react: (0, s.default)({
                enableBuildOverrides: !1,
                mustConfirmExternalLink: !0
            }).react
        },
        u = {
            ...l.default.guildEventRules.channelMention,
            react: (0, a.default)({
                enableBuildOverrides: !1,
                shouldCloseDefaultModals: !0,
                shouldStopPropagation: !0
            }).react
        },
        i = l.default.reactParserFor({
            ...l.default.guildEventRules,
            link: r,
            channelMention: u
        })
}