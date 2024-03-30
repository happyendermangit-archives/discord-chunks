function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        autoMigrateToNewSystem: function() {
            return Y
        },
        hasGoodCandidateServers: function() {
            return x
        },
        revertToOldSystem: function() {
            return Z
        },
        transformUsageData: function() {
            return ee
        },
        useGuildMigrationSteps: function() {
            return H
        },
        useSaveSettings: function() {
            return W
        }
    });
    var r = n("470079"),
        o = n("392711"),
        i = n.n(o),
        a = n("898511"),
        u = n("242880"),
        s = n("629815"),
        l = n("483587"),
        c = n("942791"),
        f = n("895402"),
        d = n("844565"),
        _ = n("419127"),
        E = n("644779"),
        p = n("382199"),
        m = n("318667"),
        y = n("306912"),
        I = n("380512"),
        h = n("848957"),
        O = n("870331"),
        T = n("947248"),
        S = n("162677"),
        v = n("285910"),
        g = n("523018"),
        A = n("318283"),
        b = n("364538"),
        N = n("692963"),
        R = n("124012"),
        C = n("483647"),
        P = n("281767"),
        D = n("24729"),
        L = n("382021"),
        M = n("941504");

    function U(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function w(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function k(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    w(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    w(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function G(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function B(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                G(e, t, n[t])
            })
        }
        return e
    }

    function j(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function F(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return U(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return U(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function V(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(i) {
            return function(u) {
                return function(i) {
                    if (n) throw TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1], o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = t.call(e, a)
                    } catch (e) {
                        i = [6, e], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, u])
            }
        }
    }

    function H(e, t) {
        var n = F(r.useState(C.defaultThresholds), 2),
            o = n[0],
            u = n[1],
            s = F(r.useState({}), 2),
            l = s[0],
            c = s[1];
        (0, _.useFrecencySettings)();
        var f = (0, a.useStateFromStoresArray)([y.default], function() {
                return Object.values(y.default.getGuilds())
            }),
            d = r.useCallback(function() {
                var n = {},
                    r = !0,
                    i = !1,
                    a = void 0;
                try {
                    for (var u, s = f[Symbol.iterator](); !(r = (u = s.next()).done); r = !0) {
                        var c = u.value;
                        n[c.id] = function(e, t, n, r, o) {
                            var i, a = F(E.default.hasConsented(P.Consents.PERSONALIZATION) ? (0, N.guessGuildModeWithRemoteData)(e, t, n, r, !0) : (0, N.guessGuildModeWithLocalData)(e, n), 3),
                                u = a[0],
                                s = a[1],
                                l = a[2],
                                c = null !== (i = n.filter(function(t) {
                                    return t.guild_id === e.id
                                })[0]) && void 0 !== i ? i : {},
                                f = (0, b.default)(e, null != o ? o : u, c, r, t);
                            return {
                                guildId: e.id,
                                mode: u,
                                debugReason: l,
                                actions: f,
                                overrideMode: o,
                                messagePain: c.messages === C.PainLevel.High,
                                visitsALot: s,
                                muted: h.default.isMuted(e.id) && !h.default.isTemporarilyMuted(e.id)
                            }
                        }(c, o, e, t, l[c.id])
                    }
                } catch (e) {
                    i = !0, a = e
                } finally {
                    try {
                        !r && null != s.return && s.return()
                    } finally {
                        if (i) throw a
                    }
                }
                return n
            }, [f, o, e, t, l]),
            p = F(r.useState(function() {
                return d()
            }), 2),
            m = p[0],
            O = p[1];
        return r.useEffect(function() {
            return O(d())
        }, [d]), {
            guildPlans: m,
            overrideGuild: r.useCallback(function(e, t) {
                c(function(n) {
                    return j(B({}, n), G({}, e, t))
                })
            }, []),
            setThresholds: u,
            getDebug: function() {
                return function(e, t) {
                    var n = t.reduce(function(e, t) {
                            var n;
                            return e + Number(null !== (n = t.num_year_opens) && void 0 !== n ? n : 0)
                        }, 0),
                        r = t.reduce(function(e, t) {
                            var n;
                            return e + Number(null !== (n = t.num_month_opens) && void 0 !== n ? n : 0)
                        }, 0),
                        o = I.default.getFlattenedGuildIds(),
                        a = i().sortBy(Object.values(e), function(e) {
                            var t = o.indexOf(e.guildId);
                            return -1 === t ? o.length : t
                        }),
                        u = [
                            ["Use Grey Dot", new Set([C.Mode.UseGreyDot])],
                            ["Keep As Is", new Set([C.Mode.KeepAsIs])]
                        ].map(function(e) {
                            var t = F(e, 2),
                                n = t[0],
                                r = t[1],
                                o = a.filter(function(e) {
                                    var t;
                                    return r.has(null !== (t = e.overrideMode) && void 0 !== t ? t : e.mode)
                                }).map(function(e) {
                                    var t = y.default.getGuild(e.guildId),
                                        n = e.actions.map(function(e) {
                                            var t;
                                            return "- ".concat(e.label).concat(null !== (t = e.debug) && void 0 !== t ? t : "")
                                        }).join("\n");
                                    return "### ".concat(t.name, "\n**Reasoning**: ").concat(e.debugReason, "**ActionPlan**:\n").concat(n)
                                });
                            return "# ".concat(n, "\n\n").concat(o.join("\n\n"))
                        });
                    return "\n# Basic Stats\n- Total channel visits (yr): ".concat(n, "\n- Total channel visits (month): ").concat(r, "\n\n").concat(u.join("\n\n"))
                }(Object.values(m), t)
            }
        }
    }

    function x(e, t) {
        return Object.values(y.default.getGuilds()).some(function(n) {
            return F(E.default.hasConsented(P.Consents.PERSONALIZATION) ? (0, N.guessGuildModeWithRemoteData)(n, C.defaultThresholds, e, t, !1) : (0, N.guessGuildModeWithLocalData)(n, e), 1)[0] === C.Mode.UseGreyDot
        })
    }

    function Y() {
        var e = Object.values(y.default.getGuilds()),
            t = {},
            n = !0,
            r = !1,
            o = void 0;
        try {
            for (var i, a = e[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                var u, s, l = i.value,
                    c = null !== (u = h.default.getAllSettings().userGuildSettings[l.id]) && void 0 !== u ? u : {},
                    f = null !== (s = c.flags) && void 0 !== s ? s : 0;
                f = (0, T.setFlag)(f, L.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, !0), f = (0, T.setFlag)(f, L.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS, !1), t[l.id] = {
                    flags: f
                }
            }
        } catch (e) {
            r = !0, o = e
        } finally {
            try {
                !n && null != a.return && a.return()
            } finally {
                if (r) throw o
            }
        }
        z(t), O.default.track(P.AnalyticEvents.NOTIFICATION_MIGRATION_COMPLETED, {
            auto_migrated: !0,
            num_unread_guids_after: e.filter(function(e) {
                return m.default.hasUnread(e.id)
            }).length
        })
    }

    function W(e) {
        var t, n = F(r.useState(!1), 2),
            o = n[0],
            i = n[1],
            a = F(r.useState(!1), 2),
            u = a[0],
            s = a[1];
        var l = r.useCallback((t = k(function(t) {
            return V(this, function(n) {
                switch (n.label) {
                    case 0:
                        if (u) throw Error("Already submitted notifications migration");
                        i(!0), n.label = 1;
                    case 1:
                        return n.trys.push([1, , 3, 4]), [4, function(e, t) {
                            return K.apply(this, arguments)
                        }(t, e)];
                    case 2:
                        return n.sent(), s(!0), [3, 4];
                    case 3:
                        return i(!1), [7];
                    case 4:
                        return [2]
                }
            })
        }), function(e) {
            return t.apply(this, arguments)
        }), [u, e]);
        return {
            submitting: o,
            submitted: u,
            saveSettings: l
        }
    }

    function K() {
        return (K = k(function(e, t) {
            var n, r, o, i, a, u, c, d, _, E, y, I, T, S, A, b, N, R, D, L, U;
            return V(this, function(w) {
                switch (w.label) {
                    case 0:
                        if (h.default.useNewNotifications) return l.default.show({
                            title: "Info",
                            body: "It looks like you are already using the new notifications system so skipping saving any changes this time because that will almost certainly mess up your account!"
                        }), [2];
                        n = function(e) {
                            var t = Object.values(e).filter(function(e) {
                                    var t;
                                    return (null !== (t = e.overrideMode) && void 0 !== t ? t : e.mode) === C.Mode.UseGreyDot
                                }).map(function(e) {
                                    var t;
                                    return {
                                        plan: e,
                                        memberCount: null !== (t = p.default.getMemberCount(e.guildId)) && void 0 !== t ? t : 0
                                    }
                                }),
                                n = {
                                    num_unread_guilds_before: g.default.keys(e).filter(function(e) {
                                        return m.default.hasUnread(e)
                                    }).length,
                                    unmuted_server_ids: t.filter(function(e) {
                                        return h.default.isMuted(e.plan.guildId)
                                    }).map(function(e) {
                                        return e.plan.guildId
                                    })
                                };
                            return function() {
                                O.default.track(P.AnalyticEvents.NOTIFICATION_MIGRATION_COMPLETED, j(B({}, n), {
                                    auto_migrated: !0,
                                    pre_selected_server_ids: Object.values(e).filter(function(e) {
                                        return e.mode === C.Mode.UseGreyDot
                                    }).map(function(e) {
                                        return e.guildId
                                    }),
                                    final_selected_server_ids: t.map(function(e) {
                                        return e.plan.guildId
                                    }),
                                    num_unread_guids_after: g.default.keys(e).filter(function(e) {
                                        return m.default.hasUnread(e)
                                    }).length,
                                    num_tiny_servers_selected: t.filter(function(e) {
                                        return e.memberCount <= 20
                                    }).length,
                                    num_small_servers_selected: t.filter(function(e) {
                                        return e.memberCount > 20 && e.memberCount <= 200
                                    }).length,
                                    num_medium_servers_selected: t.filter(function(e) {
                                        return e.memberCount > 200 && e.memberCount <= 1e3
                                    }).length,
                                    num_large_servers_selected: t.filter(function(e) {
                                        return e.memberCount > 1e3
                                    }).length,
                                    num_quiet_servers_selected: t.filter(function(e) {
                                        return !e.plan.messagePain
                                    }).length,
                                    num_busy_servers_selected: t.filter(function(e) {
                                        return e.plan.messagePain
                                    }).length,
                                    num_frequent_visited_servers_selected: t.filter(function(e) {
                                        return e.plan.visitsALot
                                    }).length,
                                    num_infrequent_visited_servers_selected: t.filter(function(e) {
                                        return !e.plan.visitsALot
                                    }).length
                                }))
                            }
                        }(e), w.label = 1;
                    case 1:
                        w.trys.push([1, 3, , 4]), r = {}, o = !0, i = !1, a = void 0;
                        try {
                            for (u = Object.values(e)[Symbol.iterator](); !(o = (c = u.next()).done); o = !0) {
                                d = c.value, E = null !== (_ = h.default.getAllSettings().userGuildSettings[d.guildId]) && void 0 !== _ ? _ : {}, y = {}, I = !0, T = !1, S = void 0;
                                try {
                                    for (A = d.actions[Symbol.iterator](); !(I = (b = A.next()).done); I = !0) N = b.value, null === (R = N.apply) || void 0 === R || R.call(N, y, E)
                                } catch (e) {
                                    T = !0, S = e
                                } finally {
                                    try {
                                        !I && null != A.return && A.return()
                                    } finally {
                                        if (T) throw S
                                    }
                                }
                                r[d.guildId] = y
                            }
                        } catch (e) {
                            i = !0, a = e
                        } finally {
                            try {
                                !o && null != u.return && u.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        return [4, z(r)];
                    case 2:
                        return w.sent(), (D = Object.values(e).filter(function(e) {
                            return e.actions.some(function(e) {
                                return e.needsMarkedAsRead
                            })
                        }).map(function(e) {
                            return e.guildId
                        })).length > 0 ? (L = setTimeout(n, 5e3), (0, f.default)(D, void 0, function() {
                            s.default.dispatch({
                                type: "RECOMPUTE_READ_STATES"
                            }), clearTimeout(L), n()
                        })) : n(), [3, 4];
                    case 3:
                        return U = w.sent(), v.default.captureException(U), l.default.show({
                            title: M.default.Messages.ERROR,
                            body: M.default.Messages.NOTIF_MIGRATION_ERROR,
                            onConfirm: t
                        }), [3, 4];
                    case 4:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function z(e) {
        return X.apply(this, arguments)
    }

    function X() {
        return (X = k(function(e) {
            var t;
            return V(this, function(n) {
                switch (n.label) {
                    case 0:
                        return [4, q(function() {
                            return function() {
                                return J.apply(this, arguments)
                            }()
                        })];
                    case 1:
                        return n.sent(), [4, q(function() {
                            return c.default.setAccountFlag(R.AccountNotificationFlags.USE_NEW_NOTIFICATIONS, !0)
                        })];
                    case 2:
                        return n.sent(), [4, q(function() {
                            return d.default.saveUserGuildSettingsBulk(e)
                        })];
                    case 3:
                        return t = n.sent(), s.default.dispatch({
                            type: "USER_GUILD_SETTINGS_FULL_UPDATE",
                            userGuildSettings: t
                        }), s.default.dispatch({
                            type: "RECOMPUTE_READ_STATES"
                        }), [2]
                }
            })
        })).apply(this, arguments)
    }

    function q(e) {
        return Q.apply(this, arguments)
    }

    function Q() {
        return (Q = k(function(e) {
            var t, n, r;
            return V(this, function(o) {
                switch (o.label) {
                    case 0:
                        t = function(t) {
                            var n, r;
                            return V(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return r.trys.push([0, 2, , 4]), n = {}, [4, e()];
                                    case 1:
                                        return [2, (n.v = r.sent(), n)];
                                    case 2:
                                        return r.sent(), [4, new Promise(function(e) {
                                            return setTimeout(e, 1e3 * (t + 1))
                                        })];
                                    case 3:
                                        return r.sent(), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        }, n = 0, o.label = 1;
                    case 1:
                        if (!(n < 3)) return [3, 4];
                        return [5, function(e) {
                            var t = "function" == typeof Symbol && Symbol.iterator,
                                n = t && e[t],
                                r = 0;
                            if (n) return n.call(e);
                            if (e && "number" == typeof e.length) return {
                                next: function() {
                                    return e && r >= e.length && (e = void 0), {
                                        value: e && e[r++],
                                        done: !e
                                    }
                                }
                            };
                            throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                        }(t(n))];
                    case 2:
                        var i;
                        if ("object" == ((i = r = o.sent()) && "undefined" != typeof Symbol && i.constructor === Symbol ? "symbol" : typeof i)) return [2, r.v];
                        o.label = 3;
                    case 3:
                        return n++, [3, 1];
                    case 4:
                        return [4, e()];
                    case 5:
                        return [2, o.sent()]
                }
            })
        })).apply(this, arguments)
    }

    function J() {
        return (J = k(function() {
            var e;
            return V(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, (0, A.listSnapshots)()];
                    case 1:
                        if (!((e = t.sent()).length > 0)) return [3, 3];
                        return [4, function() {
                            return new Promise(function(e) {
                                l.default.show({
                                    title: "Create new Backup?",
                                    body: "It looks like you already have one notification settings backup. Would you like us to delete the old backup and take a new one, or skip taking a new backup and keep the old one?",
                                    confirmText: "Take New Backup",
                                    cancelText: "Skip Backup",
                                    onConfirm: function() {
                                        return e(!0)
                                    },
                                    onCancel: function() {
                                        return e(!1)
                                    }
                                })
                            })
                        }()];
                    case 2:
                        return t.sent() && (0, A.backupSettings)(e), [3, 4];
                    case 3:
                        (0, A.takeSnapshot)("Backup from ".concat(new Date().toLocaleDateString())), t.label = 4;
                    case 4:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function Z() {
        return $.apply(this, arguments)
    }

    function $() {
        return ($ = k(function() {
            var e, t, n;
            return V(this, function(r) {
                switch (r.label) {
                    case 0:
                        return u.Storage.set("turnedOffNewNotifications", !0), O.default.track(P.AnalyticEvents.NOTIFICATION_MIGRATION_OPTOUT, {
                            num_guilds_with_new_setting: Object.values(y.default.getGuilds()).filter(function(e) {
                                return h.default.resolveGuildUnreadSetting(e) === D.UnreadSetting.ONLY_MENTIONS
                            }).length
                        }), [4, (0, A.listSnapshots)()];
                    case 1:
                        if (e = r.sent(), !((t = i().sortBy(e, function(e) {
                                return new Date(e.recorded_at).getTime()
                            })).length > 0)) return [3, 5];
                        return n = t[t.length - 1], [4, new Promise(function(e) {
                            return l.default.show({
                                title: "Please Confirm",
                                body: "This will turn off the new notification system and restore your " + "notification settings to a backup created on ".concat(new Date(n.recorded_at).toLocaleDateString()),
                                onConfirm: e,
                                cancelText: "Cancel",
                                onCancel: function() {}
                            })
                        })];
                    case 2:
                        return r.sent(), [4, (0, A.restoreSnapshot)(n.id)];
                    case 3:
                        return r.sent(), [4, c.default.setAccountFlag(R.AccountNotificationFlags.USE_NEW_NOTIFICATIONS, !1)];
                    case 4:
                        return r.sent(), [3, 7];
                    case 5:
                        return [4, c.default.setAccountFlag(R.AccountNotificationFlags.USE_NEW_NOTIFICATIONS, !1)];
                    case 6:
                        r.sent(), r.label = 7;
                    case 7:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function ee(e) {
        if (null == e) return [];
        var t, n, r, o = i().keyBy(null !== (t = e.voice_joins) && void 0 !== t ? t : [], "channel_id"),
            a = i().keyBy(null !== (n = e.message_sends) && void 0 !== n ? n : [], "channel_id");
        return (null !== (r = e.channel_opens) && void 0 !== r ? r : []).map(function(e) {
            var t, n, r, i, u, s, l, c, f, d, _, E = null !== (t = o[e.channel_id]) && void 0 !== t ? t : {},
                p = null !== (n = a[e.channel_id]) && void 0 !== n ? n : {};
            return {
                channel_id: e.channel_id,
                num_year_opens: Number(null !== (r = e.year_opens) && void 0 !== r ? r : 0),
                num_month_opens: Number(null !== (i = e.one_month_opens) && void 0 !== i ? i : 0),
                num_three_month_opens: Number(null !== (u = e.three_month_opens) && void 0 !== u ? u : 0),
                num_six_month_opens: Number(null !== (s = e.six_month_opens) && void 0 !== s ? s : 0),
                num_messages: Number(null !== (l = null == p ? void 0 : p.num_messages) && void 0 !== l ? l : 0),
                num_year_voice_joins: Number(null !== (c = null == E ? void 0 : E.year_opens) && void 0 !== c ? c : 0),
                num_month_voice_joins: Number(null !== (f = null == E ? void 0 : E.one_month_opens) && void 0 !== f ? f : 0),
                num_three_month_voice_joins: Number(null !== (d = null == E ? void 0 : E.three_month_opens) && void 0 !== d ? d : 0),
                num_six_month_voice_joins: Number(null !== (_ = null == E ? void 0 : E.six_month_opens) && void 0 !== _ ? _ : 0)
            }
        }).filter(S.isNotNullish)
    }
}