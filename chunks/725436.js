function(e, t, a) {
    "use strict";
    a.r(t), a.d(t, {
        guildEventDetailsParser: function() {
            return i
        }
    });
    var l = a("454585"),
        n = a("551452"),
        s = a("532901");
    let r = {
            ...l.default.guildEventRules.link,
            react: (0, s.default)({
                enableBuildOverrides: !1,
                mustConfirmExternalLink: !0
            }).react
        },
        u = {
            ...l.default.guildEventRules.channelMention,
            react: (0, n.default)({
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