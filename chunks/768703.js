function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        completeNewMemberAction: function() {
            return b
        },
        fetchGuildHomeSettings: function() {
            return S
        },
        fetchNewMemberActions: function() {
            return v
        },
        getBlockForChannelDeletion: function() {
            return N
        },
        selectHomeResourceChannel: function() {
            return g
        },
        selectNewMemberActionChannel: function() {
            return A
        }
    });
    var r, o, i = n("967888"),
        a = n("629815"),
        u = n("443458"),
        s = n("660939"),
        l = n("717744"),
        c = n("409635"),
        f = n("935741"),
        d = n("870331"),
        _ = n("523018"),
        E = n("163868"),
        p = n("18975"),
        m = n("416181"),
        y = n("29221"),
        I = n("281767");

    function h(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function O(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    h(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    h(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function T(e, t) {
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
    var S = (r = O(function(e) {
        var t, n, r;
        return T(this, function(r) {
            switch (r.label) {
                case 0:
                    a.default.dispatch({
                        type: "GUILD_HOME_SETTINGS_FETCH_START",
                        guildId: e
                    }), r.label = 1;
                case 1:
                    return r.trys.push([1, 3, , 4]), [4, i.HTTP.get({
                        url: I.Endpoints.GUILD_HOME_SETTINGS(e),
                        oldFormErrors: !0
                    })];
                case 2:
                    return t = r.sent(), n = (0, p.settingsFromServer)(t.body), a.default.dispatch({
                        type: "GUILD_HOME_SETTINGS_FETCH_SUCCESS",
                        guildId: e,
                        homeSettings: n
                    }), [2, n];
                case 3:
                    return r.sent(), a.default.dispatch({
                        type: "GUILD_HOME_SETTINGS_FETCH_FAIL",
                        guildId: e
                    }), [3, 4];
                case 4:
                    return [2]
            }
        })
    }), function(e) {
        return r.apply(this, arguments)
    });
    var v = (o = O(function(e) {
        var t, n, r;
        return T(this, function(r) {
            switch (r.label) {
                case 0:
                    if (l.default.isFullServerPreview(e)) return [2];
                    a.default.dispatch({
                        type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_START",
                        guildId: e
                    }), r.label = 1;
                case 1:
                    return r.trys.push([1, 3, , 4]), [4, i.HTTP.get({
                        url: I.Endpoints.GUILD_MEMBER_ACTIONS(e),
                        oldFormErrors: !0
                    })];
                case 2:
                    return t = r.sent(), n = (0, p.actionsFromServer)(t.body), a.default.dispatch({
                        type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS",
                        guildId: e,
                        memberActions: n
                    }), [2, n];
                case 3:
                    return r.sent(), a.default.dispatch({
                        type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL",
                        guildId: e
                    }), [3, 4];
                case 4:
                    return [2]
            }
        })
    }), function(e) {
        return o.apply(this, arguments)
    });
    O(function(e) {
        var t;
        return T(this, function(t) {
            switch (t.label) {
                case 0:
                    a.default.dispatch({
                        type: "GUILD_NEW_MEMBER_ACTIONS_DELETE_START",
                        guildId: e
                    }), t.label = 1;
                case 1:
                    return t.trys.push([1, 3, , 4]), [4, i.HTTP.del({
                        url: I.Endpoints.GUILD_MEMBER_ACTIONS(e),
                        oldFormErrors: !0
                    })];
                case 2:
                    return t.sent(), a.default.dispatch({
                        type: "GUILD_NEW_MEMBER_ACTIONS_DELETE_SUCCESS",
                        guildId: e
                    }), [3, 4];
                case 3:
                    return t.sent(), a.default.dispatch({
                        type: "GUILD_NEW_MEMBER_ACTIONS_DELETE_FAIL",
                        guildId: e
                    }), [3, 4];
                case 4:
                    return [2]
            }
        })
    });
    var g = function(e, t) {
            var n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
            if (a.default.dispatch({
                    type: "SELECT_HOME_RESOURCE_CHANNEL",
                    guildId: e,
                    channelId: t
                }), null != t) {
                var r = f.default.getChannel(t),
                    o = E.default.getResourceForChannel(e, t);
                null != e && !l.default.isFullServerPreview(e) && null != r && null != o && d.default.track(I.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
                    guild_id: e,
                    channel_id: r.id,
                    server_guide_channel_type: "resource",
                    channel_action_type: -1
                }), n && (0, c.transitionToChannel)(t), u.default.jumpToMessage({
                    channelId: t,
                    messageId: _.default.castChannelIdAsMessageId(t),
                    flash: !1,
                    jumpType: s.JumpTypes.INSTANT
                })
            }
        },
        A = function(e, t) {
            a.default.dispatch({
                type: "SELECT_NEW_MEMBER_ACTION_CHANNEL",
                guildId: e,
                channelId: t
            });
            var n = f.default.getChannel(t),
                r = E.default.getActionForChannel(e, t);
            null != e && !l.default.isFullServerPreview(e) && null != n && null != r && d.default.track(I.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
                guild_id: e,
                channel_id: n.id,
                server_guide_channel_type: "member action",
                channel_action_type: r.actionType
            }), (0, c.transitionToChannel)(t)
        },
        b = function(e, t) {
            if (a.default.dispatch({
                    type: "COMPLETE_NEW_MEMBER_ACTION",
                    guildId: e,
                    channelId: t
                }), !l.default.isFullServerPreview(e)) {
                var n = f.default.getChannel(t),
                    r = E.default.getActionForChannel(e, t);
                if (null != n && null != r) {
                    var o, u, s = _.default.keys(null !== (o = m.default.getCompletedActions(e)) && void 0 !== o ? o : {}),
                        c = null !== (u = E.default.getNewMemberActions(e)) && void 0 !== u ? u : [];
                    d.default.track(I.AnalyticEvents.SERVER_GUIDE_ACTION_COMPLETED, {
                        guild_id: n.guild_id,
                        channel_id: n.id,
                        channel_action_type: r.actionType,
                        has_completed_all: c.reduce(function(e, t) {
                            return e && s.includes(t.channelId)
                        }, !0)
                    })
                }
                i.HTTP.post({
                    url: I.Endpoints.GUILD_MEMBER_ACTION_UPDATE(e, t)
                })
            }
        };

    function N(e, t) {
        return R.apply(this, arguments)
    }

    function R() {
        return (R = O(function(e, t) {
            var n;
            return T(this, function(r) {
                switch (r.label) {
                    case 0:
                        if (null == e || !(0, y.canSeeOnboardingHome)(e)) return [2, !1];
                        if ((n = E.default.getSettings(e)) !== E.NO_SETTINGS) return [3, 2];
                        return [4, S(e)];
                    case 1:
                        r.sent(), n = E.default.getSettings(e), r.label = 2;
                    case 2:
                        if (n === E.NO_SETTINGS || null == n) return [2, !1];
                        if (null != n.newMemberActions && null != n.newMemberActions.find(function(e) {
                                return e.channelId === t
                            })) return [2, "todo"];
                        if (null != n.resourceChannels && null != n.resourceChannels.find(function(e) {
                                return e.channelId === t
                            })) return [2, "resource"];
                        return [2, !1]
                }
            })
        })).apply(this, arguments)
    }
}