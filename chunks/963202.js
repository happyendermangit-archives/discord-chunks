function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isClanGuildExperimentEnabled: function() {
            return _
        },
        useAnyClanGuildExperimentEnabled: function() {
            return c
        },
        useClanGuildExperiment: function() {
            return d
        },
        useClanGuildExperimentDefaultGameId: function() {
            return E
        },
        useClanPrepilotExperimentEnabled: function() {
            return I
        },
        useIsInUserClanExperiment: function() {
            return u
        }
    });
    var i = n("818083"),
        r = n("308083"),
        a = n("981631");
    let s = (0, i.createExperiment)({
            kind: "user",
            id: "2024-02_clans",
            label: "Clans",
            defaultConfig: {
                enableClanCreation: !1,
                defaultGameId: null
            },
            treatments: [{
                id: 1,
                label: "Enable creation of clan guilds",
                config: {
                    enableClanCreation: !0,
                    defaultGameId: null
                }
            }, {
                id: 2,
                label: "Enable creation of clan guilds - Valorant",
                config: {
                    enableClanCreation: !0,
                    defaultGameId: r.VALORANT_ID
                }
            }, {
                id: 3,
                label: "Enable creation of clan guilds - Genshin Impact",
                config: {
                    enableClanCreation: !0,
                    defaultGameId: r.GENSHIN_ID
                }
            }]
        }),
        o = (0, i.createExperiment)({
            kind: "user",
            id: "2024-05_clans_valorant_prepilot",
            label: "Clans Valorant Prepilot",
            defaultConfig: {
                enableClanCreation: !1,
                defaultGameId: null
            },
            treatments: [{
                id: 1,
                label: "Enable creation of clan guilds - Valorant",
                config: {
                    enableClanCreation: !0,
                    defaultGameId: r.VALORANT_ID
                }
            }]
        }),
        l = (0, i.createExperiment)({
            kind: "user",
            id: "2024-05_clans_genshin_prepilot",
            label: "Clans Genshin Prepilot",
            defaultConfig: {
                enableClanCreation: !1,
                defaultGameId: null
            },
            treatments: [{
                id: 1,
                label: "Enable creation of clan guilds - Genshin",
                config: {
                    enableClanCreation: !0,
                    defaultGameId: r.GENSHIN_ID
                }
            }]
        });

    function u() {
        let {
            autoTrackExposure: e = !1,
            disable: t = !1,
            location: n
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = o.useExperiment({
            location: n
        }, {
            autoTrackExposure: e,
            disable: t
        }).enableClanCreation, r = l.useExperiment({
            location: n
        }, {
            autoTrackExposure: e,
            disable: t
        }).enableClanCreation, a = s.useExperiment({
            location: n
        }, {
            autoTrackExposure: e,
            disable: t
        }).enableClanCreation;
        return i || r || a
    }

    function d(e, t) {
        var n, i, r, u, d, _;
        let c = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            E = o.useExperiment({
                location: t
            }, {
                autoTrackExposure: c
            }),
            I = l.useExperiment({
                location: t
            }, {
                autoTrackExposure: c
            }),
            T = s.useExperiment({
                location: t
            }, {
                autoTrackExposure: c
            }),
            f = null !== (n = null == e ? void 0 : e.hasFeature(a.GuildFeatures.CLAN_PILOT_GENSHIN)) && void 0 !== n && n && I.enableClanCreation;
        return {
            enableClanCreation: null !== (i = null == e ? void 0 : e.hasFeature(a.GuildFeatures.CLAN_PILOT_VALORANT)) && void 0 !== i && i && E.enableClanCreation || f || null !== (r = T.enableClanCreation) && void 0 !== r && r,
            defaultGameId: null !== (_ = null !== (d = null !== (u = E.defaultGameId) && void 0 !== u ? u : I.defaultGameId) && void 0 !== d ? d : T.defaultGameId) && void 0 !== _ ? _ : null
        }
    }

    function _(e, t) {
        var n, i, r;
        let u = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            d = o.getCurrentConfig({
                location: t
            }, {
                autoTrackExposure: u
            }),
            _ = l.getCurrentConfig({
                location: t
            }, {
                autoTrackExposure: u
            }),
            c = s.getCurrentConfig({
                location: t
            }, {
                autoTrackExposure: u
            }),
            E = null !== (n = null == e ? void 0 : e.hasFeature(a.GuildFeatures.CLAN_PILOT_GENSHIN)) && void 0 !== n && n && _.enableClanCreation;
        return null !== (i = null == e ? void 0 : e.hasFeature(a.GuildFeatures.CLAN_PILOT_VALORANT)) && void 0 !== i && i && d.enableClanCreation || E || null !== (r = c.enableClanCreation) && void 0 !== r && r
    }

    function c(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = o.useExperiment({
                location: t
            }, {
                autoTrackExposure: n
            }),
            r = l.useExperiment({
                location: t
            }, {
                autoTrackExposure: n
            }),
            u = s.useExperiment({
                location: t
            }, {
                autoTrackExposure: n
            }),
            d = e.some(e => e.hasFeature(a.GuildFeatures.CLAN_PILOT_GENSHIN)) && r.enableClanCreation;
        return e.some(e => e.hasFeature(a.GuildFeatures.CLAN_PILOT_VALORANT)) && i.enableClanCreation || d || u.enableClanCreation
    }

    function E(e) {
        var t, n, i;
        let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            a = o.useExperiment({
                location: e
            }, {
                autoTrackExposure: r
            }),
            u = l.useExperiment({
                location: e
            }, {
                autoTrackExposure: r
            }),
            d = s.useExperiment({
                location: e
            }, {
                autoTrackExposure: r
            });
        return null !== (i = null !== (n = null !== (t = a.defaultGameId) && void 0 !== t ? t : u.defaultGameId) && void 0 !== n ? n : d.defaultGameId) && void 0 !== i ? i : null
    }

    function I(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = o.getCurrentConfig({
                location: e
            }, {
                autoTrackExposure: t
            }).enableClanCreation,
            i = l.getCurrentConfig({
                location: e
            }, {
                autoTrackExposure: t
            }).enableClanCreation;
        return n || i
    }
}