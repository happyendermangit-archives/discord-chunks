function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        guildEventDetailsParser: function() {
            return l
        }
    });
    var i = n("454585"),
        r = n("551452"),
        a = n("532901");
    let s = {
            ...i.default.guildEventRules.link,
            react: (0, a.default)({
                enableBuildOverrides: !1,
                mustConfirmExternalLink: !0
            }).react
        },
        o = {
            ...i.default.guildEventRules.channelMention,
            react: (0, r.default)({
                enableBuildOverrides: !1,
                shouldCloseDefaultModals: !0,
                shouldStopPropagation: !0
            }).react
        },
        l = i.default.reactParserFor({
            ...i.default.guildEventRules,
            link: s,
            channelMention: o
        })
}