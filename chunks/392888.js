function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        openMigrationModal: function() {
            return I
        }
    }), n("47120");
    var i = n("735250");
    n("470079");
    var r = n("544891"),
        s = n("433517"),
        a = n("481060"),
        o = n("147913"),
        l = n("480294"),
        u = n("9156"),
        d = n("312400"),
        _ = n("115345"),
        c = n("981631");
    class E extends o.default {
        handlePostConnectionOpen() {
            if (!s.Storage.get("turnedOffNewNotifications") && !!l.default.hasConsented(c.Consents.PERSONALIZATION) && !!d.NotificationsExperiment.getCurrentConfig({
                    location: "NotificationMigrationManager"
                }, {
                    autoTrackExposure: !1
                }).enabled) !u.default.useNewNotifications && (this.checkOldUserExperiment(), this.checkNewUserExperiment())
        }
        async checkOldUserExperiment() {
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
                    guild_noise: s,
                    usage: o
                }
            } = await r.HTTP.get("/users/@me/notification-migration-data2"), l = (0, _.transformUsageData)(o), {
                default: u
            } = await Promise.all([n.e("99387"), n.e("53512")]).then(n.bind(n, "753521"));
            if (!(0, a.hasAnyModalOpen)()) d.UnreadsEntryPointExperiment.trackExposure({
                location: "NotificationMigrationManager"
            }), t && ((0, _.hasGoodCandidateServers)(s, l) ? (0, a.openModal)(e => (0, i.jsx)(u, {
                ...e,
                dismissable: !1,
                guildPain: s,
                myUsage: l
            }), {
                onCloseRequest: () => {}
            }) : (0, _.autoMigrateToNewSystem)())
        }
        checkNewUserExperiment() {
            let {
                logExposure: e,
                enabled: t
            } = d.NewUserUnreadsEntryPointExperiment.getCurrentConfig({
                location: "NotificationMigrationManager"
            }, {
                autoTrackExposure: !1
            });
            e && (d.NewUserUnreadsEntryPointExperiment.trackExposure({
                location: "NotificationMigrationManager"
            }), t && (0, _.autoMigrateToNewSystem)())
        }
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "actions", i = {
                POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    async function I(e) {
        let {
            body: {
                guild_noise: t,
                usage: s
            }
        } = await r.HTTP.get("/users/@me/notification-migration-data2"), o = (0, _.transformUsageData)(s);
        (0, a.openModalLazy)(async () => {
            let {
                default: r
            } = await Promise.all([n.e("99387"), n.e("53512")]).then(n.bind(n, "753521"));
            return n => (0, i.jsx)(r, {
                ...n,
                dismissable: e,
                guildPain: t,
                myUsage: o
            })
        })
    }
    t.default = new E
}