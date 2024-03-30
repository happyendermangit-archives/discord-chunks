function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("392711"),
        o = n.n(r),
        i = n("340310"),
        a = n("242880"),
        u = n("807471"),
        s = n("855286"),
        l = n("292222"),
        c = n("300983"),
        f = n("705442"),
        d = n("834306"),
        _ = n("493549"),
        E = n("388990"),
        p = n("968574"),
        m = n("851285"),
        y = n("428249"),
        I = n("382021");

    function h(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function O(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function T(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function S(e) {
        return (S = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function v(e, t) {
        return (v = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var g = "lastFrecencySavedTime",
        A = 5 * E.default.Millis.MINUTE * Math.random(),
        b = 1 * E.default.Millis.DAY + Math.floor(1 * E.default.Millis.HOUR * Math.random()),
        N = null,
        R = Date.now(),
        C = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && v(e, t)
            }(O, e);
            var t, n, r, a, u, E = (t = O, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = S(t);
                if (n) {
                    var a = S(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : h(e)
            });

            function O() {
                var e, t, n, r;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, O), e = E.apply(this, arguments), t = h(e), n = "actions", r = {
                    POST_CONNECTION_OPEN: P,
                    CONNECTION_RESUMED: P,
                    CONNECTION_CLOSED: D
                }, n in t ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = r, e
            }
            return r = O, a = [{
                key: "_initialize",
                value: function() {
                    p.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
                        hasChanges: function() {
                            return !1
                        },
                        processProto: function() {
                            U(!0)
                        }
                    }), p.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
                        hasChanges: function() {
                            return d.default.hasPendingUsage() && m.default.hasLoaded(I.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS)
                        },
                        processProto: function(e) {
                            if (!!d.default.hasPendingUsage()) m.default.hasLoaded(I.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) && (e.stickerFrecency = i.StickerFrecency.create(), e.stickerFrecency.stickers = (0, y.serializeUsageHistory)(d.default.stickerFrecencyWithoutFetchingLatest.usageHistory, 100))
                        }
                    }), p.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
                        hasChanges: function() {
                            return c.default.hasPendingUsage() && m.default.hasLoaded(I.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS)
                        },
                        processProto: function(e) {
                            if (!!c.default.hasPendingUsage()) m.default.hasLoaded(I.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) && (e.emojiFrecency = i.EmojiFrecency.create(), e.emojiFrecency.emojis = (0, y.serializeUsageHistory)(c.default.emojiFrecencyWithoutFetchingLatest.usageHistory, 100))
                        }
                    }), p.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
                        hasChanges: function() {
                            return f.default.hasPendingUsage() && m.default.hasLoaded(I.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS)
                        },
                        processProto: function(e) {
                            if (!!f.default.hasPendingUsage()) m.default.hasLoaded(I.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) && !o().isEmpty(f.default.playedSoundHistory) && (e.playedSoundFrecency = i.PlayedSoundFrecency.create(), e.playedSoundFrecency.playedSounds = (0, y.serializeUsageHistory)(f.default.playedSoundHistory, 100))
                        }
                    }), p.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
                        hasChanges: function() {
                            return s.default.hasPendingUsage() && m.default.hasLoaded(I.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS)
                        },
                        processProto: function(e) {
                            if (!!s.default.hasPendingUsage()) m.default.hasLoaded(I.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) && (e.applicationCommandFrecency = i.ApplicationCommandFrecency.create(), e.applicationCommandFrecency.applicationCommands = (0, y.serializeUsageHistory)(s.default.getCommandFrecencyWithoutLoadingLatest().usageHistory, 500))
                        }
                    }), p.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
                        hasChanges: function() {
                            return l.default.hasPendingUsage() && m.default.hasLoaded(I.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS)
                        },
                        processProto: function(e) {
                            if (!!l.default.hasPendingUsage()) m.default.hasLoaded(I.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) && (e.applicationFrecency = i.ApplicationFrecency.create(), e.applicationFrecency.applications = (0, y.serializeUsageHistory)(l.default.getApplicationFrecencyWithoutLoadingLatest().usageHistory, l.FREQUENCY_ITEM_LIMIT))
                        }
                    }), p.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
                        hasChanges: function() {
                            return _.default.hasPendingUsage() && m.default.hasLoaded(I.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS)
                        },
                        processProto: function(e) {
                            if (!!_.default.hasPendingUsage()) m.default.hasLoaded(I.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) && (e.guildAndChannelFrecency = i.GuildAndChannelFrecency.create(), e.guildAndChannelFrecency.guildAndChannels = (0, y.serializeUsageHistory)(_.default.frecencyWithoutFetchingLatest.usageHistory, _.MAX_NUM_SELECTED_ITEMS))
                        }
                    })
                }
            }], T(r.prototype, a), u && T(r, u), O
        }(u.default);

    function P() {
        var e;
        R = null !== (e = a.Storage.get(g)) && void 0 !== e ? e : Date.now(), U(!1)
    }

    function D() {
        clearTimeout(N), N = null
    }

    function L() {
        return M.apply(this, arguments)
    }

    function M() {
        var e;
        return e = function() {
            return function(e, t) {
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
            }(this, function(e) {
                switch (e.label) {
                    case 0:
                        if (R = Date.now(), U(!0), m.default.hasLoaded(I.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) || !(d.default.hasPendingUsage() || c.default.hasPendingUsage() || s.default.hasPendingUsage() || l.default.hasPendingUsage() || _.default.hasPendingUsage())) return [3, 2];
                        return [4, p.FrecencyUserSettingsActionCreators.loadIfNecessary()];
                    case 1:
                        e.sent(), e.label = 2;
                    case 2:
                        return o().forEach(p.UserSettingsActionCreatorsByType, function(e) {
                            e.markDirtyIfHasPendingChange()
                        }), [2]
                }
            })
        }, (M = function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    O(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    O(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }).apply(this, arguments)
    }

    function U(e) {
        e && (R = Date.now(), a.Storage.set(g, R)), null != N && clearTimeout(N);
        var t = Date.now() - R;
        N = setTimeout(L, Math.max(A, b - t))
    }
    t.default = new C
}