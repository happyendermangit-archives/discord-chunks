function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isInGuildMemberModViewExperiment: function() {
            return s
        },
        useGuildMemberModViewExperiment: function() {
            return a
        }
    });
    var i = n("100527");
    let r = (0, n("818083").createExperiment)({
            kind: "guild",
            id: "2023-08_guild_member_mod_view",
            label: "Guild Member Mod View",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 1,
                label: "Guild Member Mod View",
                config: {
                    enabled: !0
                }
            }]
        }),
        s = function(e) {
            let {
                autoTrackExposure: t = !1,
                disable: n = !1,
                location: s = i.default.GUILD_MEMBER_MOD_VIEW
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                enabled: a
            } = r.getCurrentConfig({
                guildId: e,
                location: s
            }, {
                autoTrackExposure: t,
                disable: n
            });
            return a
        },
        a = function(e) {
            let {
                autoTrackExposure: t = !1,
                disable: n = !1,
                location: s = i.default.GUILD_MEMBER_MOD_VIEW
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                enabled: a
            } = r.useExperiment({
                guildId: null != e ? e : void 0,
                location: s
            }, {
                autoTrackExposure: t,
                disable: n
            });
            return a
        }
}