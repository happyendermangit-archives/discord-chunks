function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        openMigrationModal: function() {
            return h
        },
        default: function() {
            return g
        }
    }), n("222007");
    var i = n("37983");
    n("884691");
    var a = n("872717"),
        s = n("95410"),
        l = n("77078"),
        r = n("689988"),
        o = n("350522"),
        u = n("282109"),
        d = n("640497"),
        c = n("699668"),
        f = n("49111");
    class m extends r.default {
        async handlePostConnectionOpen() {
            if (s.default.get("turnedOffNewNotifications") || !o.default.hasConsented(f.Consents.PERSONALIZATION) || !d.NotificationsExperiment.getCurrentConfig({
                    location: "NotificationMigrationManager"
                }, {
                    autoTrackExposure: !1
                }).enabled || u.default.useNewNotifications) return;
            let {
                logExposure: e,
                autoOpen: t
            } = d.UnreadsEntryPointExperiment.getCurrentConfig({
                location: "NotificationMigrationManager"
            }, {
                autoTrackExposure: !1
            });
            if (!e) return;
            let {
                body: {
                    guild_noise: r,
                    usage: m
                }
            } = await a.default.get("/users/@me/notification-migration-data2"), h = (0, c.transformUsageData)(m), {
                default: g
            } = await n.el("923660").then(n.bind(n, "923660"));
            if (!(0, l.hasAnyModalOpen)()) d.UnreadsEntryPointExperiment.trackExposure({
                location: "NotificationMigrationManager"
            }), t && ((0, c.hasGoodCandidateServers)(r, h) ? (0, l.openModal)(e => (0, i.jsx)(g, {
                ...e,
                dismissable: !1,
                guildPain: r,
                myUsage: h
            }), {
                onCloseRequest: () => {}
            }) : (0, c.autoMigrateToNewSystem)())
        }
        constructor(...e) {
            super(...e), this.actions = {
                POST_CONNECTION_OPEN: this.handlePostConnectionOpen
            }
        }
    }
    async function h(e) {
        let {
            body: {
                guild_noise: t,
                usage: s
            }
        } = await a.default.get("/users/@me/notification-migration-data2"), r = (0, c.transformUsageData)(s);
        (0, l.openModalLazy)(async () => {
            let {
                default: a
            } = await n.el("923660").then(n.bind(n, "923660"));
            return n => (0, i.jsx)(a, {
                ...n,
                dismissable: e,
                guildPain: t,
                myUsage: r
            })
        })
    }
    var g = new m
}