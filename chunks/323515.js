function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("967888"),
        o = n("629815"),
        i = n("140817"),
        a = n("261535"),
        u = n("935741"),
        s = n("651820"),
        l = n("443458"),
        c = n("281767");

    function f(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }
    t.default = {
        updateActivity: function(e) {
            var t = e.applicationId,
                n = e.distributor,
                i = e.shareActivity,
                a = e.token,
                u = e.duration,
                s = void 0 === u ? 0 : u,
                l = e.closed,
                f = e.exePath;
            o.default.wait(function() {
                return o.default.dispatch({
                    type: "ACTIVITY_UPDATE_START",
                    applicationId: t,
                    duration: s,
                    distributor: n
                })
            }), r.HTTP.post({
                url: c.Endpoints.ACTIVITIES,
                body: {
                    application_id: t,
                    token: void 0 === a ? null : a,
                    duration: s,
                    share_activity: i,
                    distributor: n,
                    closed: void 0 !== l && l,
                    exePath: void 0 === f ? null : f
                },
                retries: 1,
                oldFormErrors: !0
            }).then(function(e) {
                var r = e.body.token;
                o.default.dispatch({
                    type: "ACTIVITY_UPDATE_SUCCESS",
                    applicationId: t,
                    token: r,
                    duration: s,
                    distributor: n
                })
            }).catch(function() {
                o.default.dispatch({
                    type: "ACTIVITY_UPDATE_FAIL",
                    applicationId: t
                })
            })
        },
        sendActivityInvite: function(e) {
            var t = e.channelId,
                n = e.type,
                r = e.activity,
                o = e.content,
                s = e.location,
                f = u.default.getChannel(t);
            if (null == f) return Promise.resolve(null);
            var d = a.default.parse(f, null != o ? o : "");
            return l.default.sendMessage(f.id, d, !1, {
                activityAction: {
                    type: n,
                    activity: r
                }
            }).then(function(e) {
                return i.default.trackWithMetadata(c.AnalyticEvents.INVITE_SENT, {
                    location: s,
                    invite_type: r.type === c.ActivityTypes.LISTENING ? c.LoggingInviteTypes.SPOTIFY : c.LoggingInviteTypes.APPLICATION,
                    application_id: r.application_id,
                    guild_id: f.getGuildId(),
                    channel_id: f.id,
                    message_id: null != e ? e.body.id : null
                }), Promise.resolve(f)
            }, function(e) {
                return Promise.reject(e)
            })
        },
        sendActivityInviteUser: function(e) {
            var t = this,
                n = e.userId,
                r = e.type,
                o = e.activity,
                i = e.content,
                a = e.location;
            return s.default.ensurePrivateChannel(n).then(function(e) {
                return t.sendActivityInvite({
                    channelId: e,
                    type: r,
                    activity: o,
                    content: i,
                    location: a
                })
            })
        },
        getJoinSecret: function(e, t, n, o, i) {
            var a;
            return (a = function() {
                var a;
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
                }(this, function(u) {
                    switch (u.label) {
                        case 0:
                            return a = {}, null != o && (a.channel_id = o), null != i && (a.message_id = i), [4, r.HTTP.get({
                                url: c.Endpoints.USER_ACTIVITY_JOIN(e, t, n),
                                retries: 3,
                                query: a
                            })];
                        case 1:
                            return [2, u.sent().body.secret]
                    }
                })
            }, function() {
                var e = this,
                    t = arguments;
                return new Promise(function(n, r) {
                    var o = a.apply(e, t);

                    function i(e) {
                        f(o, n, r, i, u, "next", e)
                    }

                    function u(e) {
                        f(o, n, r, i, u, "throw", e)
                    }
                    i(void 0)
                })
            })()
        }
    }
}