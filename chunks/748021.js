function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        openMigrationModal: function() {
            return m
        },
        default: function() {
            return h
        }
    }), n("222007");
    var i = n("37983");
    n("884691");
    var a = n("872717"),
        l = n("95410"),
        s = n("77078"),
        o = n("689988"),
        r = n("350522"),
        u = n("282109"),
        d = n("640497"),
        c = n("699668"),
        f = n("49111");
    class g extends o.default {
        async handlePostConnectionOpen() {
            if (l.default.get("turnedOffNewNotifications") || !r.default.hasConsented(f.Consents.PERSONALIZATION) || !d.NotificationsExperiment.getCurrentConfig({
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
                    guild_noise: o,
                    usage: g
                }
            } = await a.default.get("/users/@me/notification-migration-data2"), m = (0, c.transformUsageData)(g), {
                default: h
            } = await n.el("923660").then(n.bind(n, "923660"));
            if (!(0, s.hasAnyModalOpen)()) d.UnreadsEntryPointExperiment.trackExposure({
                location: "NotificationMigrationManager"
            }), t && ((0, c.hasGoodCandidateServers)(o, m) ? (0, s.openModal)(e => (0, i.jsx)(h, {
                ...e,
                dismissable: !1,
                guildPain: o,
                myUsage: m
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
    async function m(e) {
        let {
            body: {
                guild_noise: t,
                usage: l
            }
        } = await a.default.get("/users/@me/notification-migration-data2"), o = (0, c.transformUsageData)(l);
        (0, s.openModalLazy)(async () => {
            let {
                default: a
            } = await n.el("923660").then(n.bind(n, "923660"));
            return n => (0, i.jsx)(a, {
                ...n,
                dismissable: e,
                guildPain: t,
                myUsage: o
            })
        })
    }
    var h = new g
}