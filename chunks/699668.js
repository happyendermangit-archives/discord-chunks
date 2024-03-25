function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useGuildMigrationSteps: function() {
            return L
        },
        hasGoodCandidateServers: function() {
            return x
        },
        autoMigrateToNewSystem: function() {
            return U
        },
        useSaveSettings: function() {
            return G
        },
        revertToOldSystem: function() {
            return B
        },
        transformUsageData: function() {
            return V
        }
    }), n("222007"), n("702976"), n("808653"), n("70102");
    var i = n("884691"),
        a = n("917351"),
        s = n.n(a),
        l = n("446674"),
        o = n("95410"),
        r = n("913144"),
        u = n("404118"),
        d = n("519705"),
        c = n("542827"),
        f = n("679428"),
        g = n("42507"),
        m = n("350522"),
        h = n("525065"),
        _ = n("952451"),
        p = n("305961"),
        E = n("677099"),
        S = n("282109"),
        T = n("599110"),
        v = n("568734"),
        N = n("449008"),
        I = n("286235"),
        y = n("299039"),
        C = n("649649"),
        M = n("845868"),
        A = n("287223"),
        O = n("76618"),
        b = n("380353"),
        P = n("49111"),
        w = n("133335"),
        R = n("397336"),
        D = n("782340");

    function L(e, t) {
        let [n, a] = i.useState(b.defaultThresholds), [o, r] = i.useState({});
        (0, g.useFrecencySettings)();
        let u = (0, l.useStateFromStoresArray)([p.default], () => Object.values(p.default.getGuilds())),
            d = i.useCallback(() => {
                let i = {};
                for (let a of u) i[a.id] = function(e, t, n, i, a) {
                    var s;
                    let [l, o, r] = m.default.hasConsented(P.Consents.PERSONALIZATION) ? (0, A.guessGuildModeWithRemoteData)(e, t, n, i, !0) : (0, A.guessGuildModeWithLocalData)(e, n), u = null !== (s = n.filter(t => t.guild_id === e.id)[0]) && void 0 !== s ? s : {}, d = (0, M.default)(e, null != a ? a : l, u, i, t);
                    return {
                        guildId: e.id,
                        mode: l,
                        debugReason: r,
                        actions: d,
                        overrideMode: a,
                        messagePain: u.messages === b.PainLevel.High,
                        visitsALot: o,
                        muted: S.default.isMuted(e.id) && !S.default.isTemporarilyMuted(e.id)
                    }
                }(a, n, e, t, o[a.id]);
                return i
            }, [u, n, e, t, o]),
            [c, f] = i.useState(() => d());
        i.useEffect(() => f(d()), [d]);
        let h = i.useCallback((e, t) => {
            r(n => ({
                ...n,
                [e]: t
            }))
        }, []);
        return {
            guildPlans: c,
            overrideGuild: h,
            setThresholds: a,
            getDebug: () => (function(e, t) {
                let n = t.reduce((e, t) => {
                        var n;
                        return e + Number(null !== (n = t.num_year_opens) && void 0 !== n ? n : 0)
                    }, 0),
                    i = t.reduce((e, t) => {
                        var n;
                        return e + Number(null !== (n = t.num_month_opens) && void 0 !== n ? n : 0)
                    }, 0),
                    a = E.default.getFlattenedGuildIds(),
                    l = s.sortBy(Object.values(e), e => {
                        let t = a.indexOf(e.guildId);
                        return -1 === t ? a.length : t
                    }),
                    o = [
                        ["Use Grey Dot", new Set([b.Mode.UseGreyDot])],
                        ["Keep As Is", new Set([b.Mode.KeepAsIs])]
                    ].map(e => {
                        let [t, n] = e, i = l.filter(e => {
                            var t;
                            return n.has(null !== (t = e.overrideMode) && void 0 !== t ? t : e.mode)
                        }), a = i.map(e => {
                            let t = p.default.getGuild(e.guildId),
                                n = e.actions.map(e => {
                                    var t;
                                    return "- ".concat(e.label).concat(null !== (t = e.debug) && void 0 !== t ? t : "")
                                }).join("\n");
                            return "### ".concat(t.name, "\n**Reasoning**: ").concat(e.debugReason, "**ActionPlan**:\n").concat(n)
                        });
                        return "# ".concat(t, "\n\n").concat(a.join("\n\n"))
                    });
                return "\n# Basic Stats\n- Total channel visits (yr): ".concat(n, "\n- Total channel visits (month): ").concat(i, "\n\n").concat(o.join("\n\n"))
            })(Object.values(c), t)
        }
    }

    function x(e, t) {
        return Object.values(p.default.getGuilds()).some(n => {
            let [i] = m.default.hasConsented(P.Consents.PERSONALIZATION) ? (0, A.guessGuildModeWithRemoteData)(n, b.defaultThresholds, e, t, !1) : (0, A.guessGuildModeWithLocalData)(n, e);
            return i === b.Mode.UseGreyDot
        })
    }

    function U() {
        let e = Object.values(p.default.getGuilds()),
            t = {};
        for (let a of e) {
            var n, i;
            let e = null !== (n = S.default.getAllSettings().userGuildSettings[a.id]) && void 0 !== n ? n : {},
                s = null !== (i = e.flags) && void 0 !== i ? i : 0;
            s = (0, v.setFlag)(s, R.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, !0), s = (0, v.setFlag)(s, R.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS, !1), t[a.id] = {
                flags: s
            }
        }
        k(t), T.default.track(P.AnalyticEvents.NOTIFICATION_MIGRATION_COMPLETED, {
            auto_migrated: !0,
            num_unread_guids_after: e.filter(e => _.default.hasUnread(e.id)).length
        })
    }

    function G(e) {
        let [t, n] = i.useState(!1), [a, s] = i.useState(!1), l = i.useCallback(async t => {
            if (a) throw Error("Already submitted notifications migration");
            n(!0);
            try {
                await j(t, e), s(!0)
            } finally {
                n(!1)
            }
        }, [a, e]);
        return {
            submitting: t,
            submitted: a,
            saveSettings: l
        }
    }
    async function j(e, t) {
        if (S.default.useNewNotifications) {
            u.default.show({
                title: "Info",
                body: "It looks like you are already using the new notifications system so skipping saving any changes this time because that will almost certainly mess up your account!"
            });
            return
        }
        let n = function(e) {
            let t = Object.values(e).filter(e => {
                    var t;
                    return (null !== (t = e.overrideMode) && void 0 !== t ? t : e.mode) === b.Mode.UseGreyDot
                }).map(e => {
                    var t;
                    return {
                        plan: e,
                        memberCount: null !== (t = h.default.getMemberCount(e.guildId)) && void 0 !== t ? t : 0
                    }
                }),
                n = {
                    num_unread_guilds_before: y.default.keys(e).filter(e => _.default.hasUnread(e)).length,
                    unmuted_server_ids: t.filter(e => S.default.isMuted(e.plan.guildId)).map(e => e.plan.guildId)
                };
            return () => {
                T.default.track(P.AnalyticEvents.NOTIFICATION_MIGRATION_COMPLETED, {
                    ...n,
                    auto_migrated: !0,
                    pre_selected_server_ids: Object.values(e).filter(e => e.mode === b.Mode.UseGreyDot).map(e => e.guildId),
                    final_selected_server_ids: t.map(e => e.plan.guildId),
                    num_unread_guids_after: y.default.keys(e).filter(e => _.default.hasUnread(e)).length,
                    num_tiny_servers_selected: t.filter(e => e.memberCount <= 20).length,
                    num_small_servers_selected: t.filter(e => e.memberCount > 20 && e.memberCount <= 200).length,
                    num_medium_servers_selected: t.filter(e => e.memberCount > 200 && e.memberCount <= 1e3).length,
                    num_large_servers_selected: t.filter(e => e.memberCount > 1e3).length,
                    num_quiet_servers_selected: t.filter(e => !e.plan.messagePain).length,
                    num_busy_servers_selected: t.filter(e => e.plan.messagePain).length,
                    num_frequent_visited_servers_selected: t.filter(e => e.plan.visitsALot).length,
                    num_infrequent_visited_servers_selected: t.filter(e => !e.plan.visitsALot).length
                })
            }
        }(e);
        try {
            let t = {};
            for (let n of Object.values(e)) {
                var i, a;
                let e = null !== (i = S.default.getAllSettings().userGuildSettings[n.guildId]) && void 0 !== i ? i : {},
                    s = {};
                for (let t of n.actions) null === (a = t.apply) || void 0 === a || a.call(t, s, e);
                t[n.guildId] = s
            }
            await k(t);
            let s = Object.values(e).filter(e => e.actions.some(e => e.needsMarkedAsRead)).map(e => e.guildId);
            if (s.length > 0) {
                let e = setTimeout(n, 5e3);
                (0, c.default)(s, void 0, () => {
                    r.default.dispatch({
                        type: "RECOMPUTE_READ_STATES"
                    }), clearTimeout(e), n()
                })
            } else n()
        } catch (e) {
            I.default.captureException(e), u.default.show({
                title: D.default.Messages.ERROR,
                body: D.default.Messages.NOTIF_MIGRATION_ERROR,
                onConfirm: t
            })
        }
    }
    async function k(e) {
        await H(() => F()), await H(() => d.default.setAccountFlag(O.AccountNotificationFlags.USE_NEW_NOTIFICATIONS, !0));
        let t = await H(() => f.default.saveUserGuildSettingsBulk(e));
        r.default.dispatch({
            type: "USER_GUILD_SETTINGS_FULL_UPDATE",
            userGuildSettings: t
        }), r.default.dispatch({
            type: "RECOMPUTE_READ_STATES"
        })
    }
    async function H(e) {
        for (let e = 0; e < 3; e++) try {
            break
        } catch (t) {
            await new Promise(t => setTimeout(t, 1e3 * (e + 1)))
        }
        return await e()
    }
    async function F() {
        let e = await (0, C.listSnapshots)();
        if (e.length > 0) {
            let t = await
            function() {
                return new Promise(e => {
                    u.default.show({
                        title: "Create new Backup?",
                        body: "It looks like you already have one notification settings backup. Would you like us to delete the old backup and take a new one, or skip taking a new backup and keep the old one?",
                        confirmText: "Take New Backup",
                        cancelText: "Skip Backup",
                        onConfirm: () => e(!0),
                        onCancel: () => e(!1)
                    })
                })
            }();
            t && (0, C.backupSettings)(e)
        } else(0, C.takeSnapshot)("Backup from ".concat(new Date().toLocaleDateString()))
    }
    async function B() {
        o.Storage.set("turnedOffNewNotifications", !0), T.default.track(P.AnalyticEvents.NOTIFICATION_MIGRATION_OPTOUT, {
            num_guilds_with_new_setting: Object.values(p.default.getGuilds()).filter(e => S.default.resolveGuildUnreadSetting(e) === w.UnreadSetting.ONLY_MENTIONS).length
        });
        let e = await (0, C.listSnapshots)(),
            t = s.sortBy(e, e => new Date(e.recorded_at).getTime());
        if (t.length > 0) {
            let e = t[t.length - 1];
            await new Promise(t => u.default.show({
                title: "Please Confirm",
                body: "This will turn off the new notification system and restore your " + "notification settings to a backup created on ".concat(new Date(e.recorded_at).toLocaleDateString()),
                onConfirm: t,
                cancelText: "Cancel",
                onCancel: () => {}
            })), await (0, C.restoreSnapshot)(e.id), await d.default.setAccountFlag(O.AccountNotificationFlags.USE_NEW_NOTIFICATIONS, !1)
        } else await d.default.setAccountFlag(O.AccountNotificationFlags.USE_NEW_NOTIFICATIONS, !1)
    }

    function V(e) {
        var t, n, i;
        if (null == e) return [];
        let a = s.keyBy(null !== (t = e.voice_joins) && void 0 !== t ? t : [], "channel_id"),
            l = s.keyBy(null !== (n = e.message_sends) && void 0 !== n ? n : [], "channel_id");
        return (null !== (i = e.channel_opens) && void 0 !== i ? i : []).map(e => {
            var t, n, i, s, o, r, u, d, c, f, g;
            let m = null !== (t = a[e.channel_id]) && void 0 !== t ? t : {},
                h = null !== (n = l[e.channel_id]) && void 0 !== n ? n : {};
            return {
                channel_id: e.channel_id,
                num_year_opens: Number(null !== (i = e.year_opens) && void 0 !== i ? i : 0),
                num_month_opens: Number(null !== (s = e.one_month_opens) && void 0 !== s ? s : 0),
                num_three_month_opens: Number(null !== (o = e.three_month_opens) && void 0 !== o ? o : 0),
                num_six_month_opens: Number(null !== (r = e.six_month_opens) && void 0 !== r ? r : 0),
                num_messages: Number(null !== (u = null == h ? void 0 : h.num_messages) && void 0 !== u ? u : 0),
                num_year_voice_joins: Number(null !== (d = null == m ? void 0 : m.year_opens) && void 0 !== d ? d : 0),
                num_month_voice_joins: Number(null !== (c = null == m ? void 0 : m.one_month_opens) && void 0 !== c ? c : 0),
                num_three_month_voice_joins: Number(null !== (f = null == m ? void 0 : m.three_month_opens) && void 0 !== f ? f : 0),
                num_six_month_voice_joins: Number(null !== (g = null == m ? void 0 : m.six_month_opens) && void 0 !== g ? g : 0)
            }
        }).filter(N.isNotNullish)
    }
}