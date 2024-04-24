function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        autoMigrateToNewSystem: function() {
            return w
        },
        hasGoodCandidateServers: function() {
            return G
        },
        revertToOldSystem: function() {
            return H
        },
        transformUsageData: function() {
            return Y
        },
        useGuildMigrationSteps: function() {
            return b
        },
        useSaveSettings: function() {
            return k
        }
    }), n("47120"), n("789020"), n("724458"), n("411104");
    var i = n("470079"),
        r = n("392711"),
        s = n.n(r),
        a = n("442837"),
        o = n("433517"),
        l = n("570140"),
        u = n("668781"),
        d = n("92114"),
        _ = n("181945"),
        c = n("149071"),
        E = n("516373"),
        I = n("480294"),
        T = n("650774"),
        f = n("888369"),
        S = n("430824"),
        h = n("771845"),
        A = n("9156"),
        m = n("626135"),
        N = n("630388"),
        p = n("823379"),
        O = n("960048"),
        R = n("709054"),
        C = n("223683"),
        g = n("630114"),
        L = n("506712"),
        D = n("468788"),
        v = n("789662"),
        M = n("981631"),
        y = n("490897"),
        P = n("526761"),
        U = n("689938");

    function b(e, t) {
        let [n, r] = i.useState(v.defaultThresholds), [o, l] = i.useState({});
        (0, E.useFrecencySettings)();
        let u = (0, a.useStateFromStoresArray)([S.default], () => Object.values(S.default.getGuilds())),
            d = i.useCallback(() => {
                let i = {};
                for (let r of u) i[r.id] = function(e, t, n, i, r) {
                    var s;
                    let [a, o, l] = I.default.hasConsented(M.Consents.PERSONALIZATION) ? (0, L.guessGuildModeWithRemoteData)(e, t, n, i, !0) : (0, L.guessGuildModeWithLocalData)(e, n), u = null !== (s = n.filter(t => t.guild_id === e.id)[0]) && void 0 !== s ? s : {}, d = (0, g.default)(e, null != r ? r : a, u, i, t);
                    return {
                        guildId: e.id,
                        mode: a,
                        debugReason: l,
                        actions: d,
                        overrideMode: r,
                        messagePain: u.messages === v.PainLevel.High,
                        visitsALot: o,
                        muted: A.default.isMuted(e.id) && !A.default.isTemporarilyMuted(e.id)
                    }
                }(r, n, e, t, o[r.id]);
                return i
            }, [u, n, e, t, o]),
            [_, c] = i.useState(() => d());
        return i.useEffect(() => c(d()), [d]), {
            guildPlans: _,
            overrideGuild: i.useCallback((e, t) => {
                l(n => ({
                    ...n,
                    [e]: t
                }))
            }, []),
            setThresholds: r,
            getDebug: () => (function(e, t) {
                let n = t.reduce((e, t) => {
                        var n;
                        return e + Number(null !== (n = t.num_year_opens) && void 0 !== n ? n : 0)
                    }, 0),
                    i = t.reduce((e, t) => {
                        var n;
                        return e + Number(null !== (n = t.num_month_opens) && void 0 !== n ? n : 0)
                    }, 0),
                    r = h.default.getFlattenedGuildIds(),
                    a = s().sortBy(Object.values(e), e => {
                        let t = r.indexOf(e.guildId);
                        return -1 === t ? r.length : t
                    }),
                    o = [
                        ["Use Grey Dot", new Set([v.Mode.UseGreyDot])],
                        ["Keep As Is", new Set([v.Mode.KeepAsIs])]
                    ].map(e => {
                        let [t, n] = e, i = a.filter(e => {
                            var t;
                            return n.has(null !== (t = e.overrideMode) && void 0 !== t ? t : e.mode)
                        }).map(e => {
                            let t = S.default.getGuild(e.guildId),
                                n = e.actions.map(e => {
                                    var t;
                                    return "- ".concat(e.label).concat(null !== (t = e.debug) && void 0 !== t ? t : "")
                                }).join("\n");
                            return "### ".concat(t.name, "\n**Reasoning**: ").concat(e.debugReason, "**ActionPlan**:\n").concat(n)
                        });
                        return "# ".concat(t, "\n\n").concat(i.join("\n\n"))
                    });
                return "\n# Basic Stats\n- Total channel visits (yr): ".concat(n, "\n- Total channel visits (month): ").concat(i, "\n\n").concat(o.join("\n\n"))
            })(Object.values(_), t)
        }
    }

    function G(e, t) {
        return Object.values(S.default.getGuilds()).some(n => {
            let [i] = I.default.hasConsented(M.Consents.PERSONALIZATION) ? (0, L.guessGuildModeWithRemoteData)(n, v.defaultThresholds, e, t, !1) : (0, L.guessGuildModeWithLocalData)(n, e);
            return i === v.Mode.UseGreyDot
        })
    }

    function w() {
        let e = Object.values(S.default.getGuilds()),
            t = {};
        for (let r of e) {
            var n, i;
            let e = null !== (i = (null !== (n = A.default.getAllSettings().userGuildSettings[r.id]) && void 0 !== n ? n : {}).flags) && void 0 !== i ? i : 0;
            e = (0, N.setFlag)(e, P.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, !0), e = (0, N.setFlag)(e, P.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS, !1), t[r.id] = {
                flags: e
            }
        }
        V(t), m.default.track(M.AnalyticEvents.NOTIFICATION_MIGRATION_COMPLETED, {
            auto_migrated: !0,
            num_unread_guids_after: e.filter(e => f.default.hasUnread(e.id)).length
        })
    }

    function k(e) {
        let [t, n] = i.useState(!1), [r, s] = i.useState(!1), a = i.useCallback(async t => {
            if (r) throw Error("Already submitted notifications migration");
            n(!0);
            try {
                await B(t, e), s(!0)
            } finally {
                n(!1)
            }
        }, [r, e]);
        return {
            submitting: t,
            submitted: r,
            saveSettings: a
        }
    }
    async function B(e, t) {
        if (A.default.useNewNotifications) {
            u.default.show({
                title: "Info",
                body: "It looks like you are already using the new notifications system so skipping saving any changes this time because that will almost certainly mess up your account!"
            });
            return
        }
        let n = function(e) {
            let t = Object.values(e).filter(e => {
                    var t;
                    return (null !== (t = e.overrideMode) && void 0 !== t ? t : e.mode) === v.Mode.UseGreyDot
                }).map(e => {
                    var t;
                    return {
                        plan: e,
                        memberCount: null !== (t = T.default.getMemberCount(e.guildId)) && void 0 !== t ? t : 0
                    }
                }),
                n = {
                    num_unread_guilds_before: R.default.keys(e).filter(e => f.default.hasUnread(e)).length,
                    unmuted_server_ids: t.filter(e => A.default.isMuted(e.plan.guildId)).map(e => e.plan.guildId)
                };
            return () => {
                m.default.track(M.AnalyticEvents.NOTIFICATION_MIGRATION_COMPLETED, {
                    ...n,
                    auto_migrated: !0,
                    pre_selected_server_ids: Object.values(e).filter(e => e.mode === v.Mode.UseGreyDot).map(e => e.guildId),
                    final_selected_server_ids: t.map(e => e.plan.guildId),
                    num_unread_guids_after: R.default.keys(e).filter(e => f.default.hasUnread(e)).length,
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
                var i, r;
                let e = null !== (i = A.default.getAllSettings().userGuildSettings[n.guildId]) && void 0 !== i ? i : {},
                    s = {};
                for (let t of n.actions) null === (r = t.apply) || void 0 === r || r.call(t, s, e);
                t[n.guildId] = s
            }
            await V(t);
            let s = Object.values(e).filter(e => e.actions.some(e => e.needsMarkedAsRead)).map(e => e.guildId);
            if (s.length > 0) {
                let e = setTimeout(n, 5e3);
                (0, _.default)(s, void 0, () => {
                    l.default.dispatch({
                        type: "RECOMPUTE_READ_STATES"
                    }), clearTimeout(e), n()
                })
            } else n()
        } catch (e) {
            O.default.captureException(e), u.default.show({
                title: U.default.Messages.ERROR,
                body: U.default.Messages.NOTIF_MIGRATION_ERROR,
                onConfirm: t
            })
        }
    }
    async function V(e) {
        await x(() => F()), await x(() => d.default.setAccountFlag(D.AccountNotificationFlags.USE_NEW_NOTIFICATIONS, !0));
        let t = await x(() => c.default.saveUserGuildSettingsBulk(e));
        l.default.dispatch({
            type: "USER_GUILD_SETTINGS_FULL_UPDATE",
            userGuildSettings: t
        }), l.default.dispatch({
            type: "RECOMPUTE_READ_STATES"
        })
    }
    async function x(e) {
        for (let t = 0; t < 3; t++) try {
            return await e()
        } catch (e) {
            await new Promise(e => setTimeout(e, 1e3 * (t + 1)))
        }
        return await e()
    }
    async function F() {
        let e = await (0, C.listSnapshots)();
        e.length > 0 ? await
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
        }() && (0, C.backupSettings)(e): (0, C.takeSnapshot)("Backup from ".concat(new Date().toLocaleDateString()))
    }
    async function H() {
        o.Storage.set("turnedOffNewNotifications", !0), m.default.track(M.AnalyticEvents.NOTIFICATION_MIGRATION_OPTOUT, {
            num_guilds_with_new_setting: Object.values(S.default.getGuilds()).filter(e => A.default.resolveGuildUnreadSetting(e) === y.UnreadSetting.ONLY_MENTIONS).length
        });
        let e = await (0, C.listSnapshots)(),
            t = s().sortBy(e, e => new Date(e.recorded_at).getTime());
        if (t.length > 0) {
            let e = t[t.length - 1];
            await new Promise(t => u.default.show({
                title: "Please Confirm",
                body: "This will turn off the new notification system and restore your " + "notification settings to a backup created on ".concat(new Date(e.recorded_at).toLocaleDateString()),
                onConfirm: t,
                cancelText: "Cancel",
                onCancel: () => {}
            })), await (0, C.restoreSnapshot)(e.id), await d.default.setAccountFlag(D.AccountNotificationFlags.USE_NEW_NOTIFICATIONS, !1)
        } else await d.default.setAccountFlag(D.AccountNotificationFlags.USE_NEW_NOTIFICATIONS, !1)
    }

    function Y(e) {
        var t, n, i;
        if (null == e) return [];
        let r = s().keyBy(null !== (t = e.voice_joins) && void 0 !== t ? t : [], "channel_id"),
            a = s().keyBy(null !== (n = e.message_sends) && void 0 !== n ? n : [], "channel_id");
        return (null !== (i = e.channel_opens) && void 0 !== i ? i : []).map(e => {
            var t, n, i, s, o, l, u, d, _, c, E;
            let I = null !== (t = r[e.channel_id]) && void 0 !== t ? t : {},
                T = null !== (n = a[e.channel_id]) && void 0 !== n ? n : {};
            return {
                channel_id: e.channel_id,
                num_year_opens: Number(null !== (i = e.year_opens) && void 0 !== i ? i : 0),
                num_month_opens: Number(null !== (s = e.one_month_opens) && void 0 !== s ? s : 0),
                num_three_month_opens: Number(null !== (o = e.three_month_opens) && void 0 !== o ? o : 0),
                num_six_month_opens: Number(null !== (l = e.six_month_opens) && void 0 !== l ? l : 0),
                num_messages: Number(null !== (u = null == T ? void 0 : T.num_messages) && void 0 !== u ? u : 0),
                num_year_voice_joins: Number(null !== (d = null == I ? void 0 : I.year_opens) && void 0 !== d ? d : 0),
                num_month_voice_joins: Number(null !== (_ = null == I ? void 0 : I.one_month_opens) && void 0 !== _ ? _ : 0),
                num_three_month_voice_joins: Number(null !== (c = null == I ? void 0 : I.three_month_opens) && void 0 !== c ? c : 0),
                num_six_month_voice_joins: Number(null !== (E = null == I ? void 0 : I.six_month_opens) && void 0 !== E ? E : 0)
            }
        }).filter(p.isNotNullish)
    }
}