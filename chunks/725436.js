function(e, t, l) {
    "use strict";
    l.r(t), l.d(t, {
        guildEventDetailsParser: function() {
            return i
        }
    });
    var a = l("454585"),
        n = l("551452"),
        s = l("532901");
    let r = {
            ...a.default.guildEventRules.link,
            react: (0, s.default)({
                enableBuildOverrides: !1,
                mustConfirmExternalLink: !0
            }).react
        },
        u = {
            ...a.default.guildEventRules.channelMention,
            react: (0, n.default)({
                enableBuildOverrides: !1,
                shouldCloseDefaultModals: !0,
                shouldStopPropagation: !0
            }).react
        },
        i = a.default.reactParserFor({
            ...a.default.guildEventRules,
            link: r,
            channelMention: u
        })
}