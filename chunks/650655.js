function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchBroadcasterBuckets: function() {
            return T
        },
        getGameName: function() {
            return y
        },
        maybeFetchBroadcastChannels: function() {
            return v
        },
        startBroadcastForStream: function() {
            return I
        },
        stopBroadcast: function() {
            return h
        }
    });
    var r = n("967888"),
        o = n("629815"),
        i = n("654370"),
        a = n("736381"),
        u = n("428009"),
        s = n("217014"),
        l = n("935741"),
        c = n("950520"),
        f = n("904393"),
        d = n("3928"),
        _ = n("281767");

    function E(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function p(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    E(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    E(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function m(e, t) {
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

    function y(e) {
        var t, n = null !== (t = null == e ? void 0 : e.gameName) && void 0 !== t ? t : null == e ? void 0 : e.name;
        return null != n ? n.trim() : null
    }

    function I(e, t) {
        if (null == t || !f.default.getCurrentConfig({
                location: "start_broadcast_for_stream"
            }, {
                autoTrackExposure: !1
            }).canBroadcast) return;
        var n, r, u, d, _, E, p, m = (0, a.decodeStreamKey)(e),
            I = m.ownerId,
            h = m.channelId;
        if (null == I || null == h) return;
        var O = s.default.getId();
        if (I !== O) return;
        var T = s.default.getSessionId();
        if (null == T) return;
        var S = l.default.getChannel(h),
            v = null != S && S.isBroadcastChannel();
        if (null != S && I === S.ownerId && !!v) {
            var g = (n = t, u = y(i.default.getGameForPID(n)), null !== (r = null == (d = c.default.getGameByName(u)) ? void 0 : d.id) && void 0 !== r ? r : "0");
            if (null != g) {
                ;
                _ = {
                    sessionId: T,
                    userId: O,
                    applicationId: g,
                    channelId: S.id,
                    streamKey: e
                }, E = s.default.getId(), p = s.default.getSessionId(), null != E && null != p && o.default.dispatch({
                    type: "BROADCAST_START",
                    broadcast: _
                })
            }
        }
    }

    function h() {
        o.default.dispatch({
            type: "BROADCAST_STOP"
        })
    }

    function O(e) {
        var t = {};
        e.forEach(function(e) {
            t[e] = -1
        }), o.default.dispatch({
            type: "BROADCASTER_BUCKETS_RECEIVED",
            data: t
        })
    }

    function T() {
        return S.apply(this, arguments)
    }

    function S() {
        return (S = p(function() {
            var e, t, n, i;
            return m(this, function(i) {
                switch (i.label) {
                    case 0:
                        e = d.default.getUserIdsToValidate(), i.label = 1;
                    case 1:
                        return i.trys.push([1, 3, , 4]), [4, r.HTTP.get({
                            url: _.Endpoints.USER_BROADCASTS,
                            query: {
                                user_ids: e
                            }
                        })];
                    case 2:
                        return (t = i.sent()).ok && null != t.body ? (n = {}, e.forEach(function(e) {
                            var r;
                            n[e] = null !== (r = t.body[e]) && void 0 !== r ? r : -1
                        }), o.default.dispatch({
                            type: "BROADCASTER_BUCKETS_RECEIVED",
                            data: n
                        })) : O(e), [3, 4];
                    case 3:
                        return i.sent(), O(e), [3, 4];
                    case 4:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function v() {
        return g.apply(this, arguments)
    }

    function g() {
        return (g = p(function() {
            var e, t, n, i, a;
            return m(this, function(a) {
                switch (a.label) {
                    case 0:
                        if (0 === (e = d.default.getBroadcastsToValidateChannels().filter(function(e) {
                                return null == e.viewers
                            }).map(function(e) {
                                return e.channelId
                            })).length) return [2];
                        a.label = 1;
                    case 1:
                        return a.trys.push([1, 3, , 4]), [4, r.HTTP.get({
                            url: _.Endpoints.BROADCAST_CHANNELS,
                            query: {
                                channel_ids: e
                            }
                        })];
                    case 2:
                        return (t = a.sent()).ok && null != t.body && (n = t.body, i = {}, n.forEach(function(e) {
                            var t, n = d.default.getBroadcastByChannel(e.id).userId,
                                r = null !== (t = e.recipients) && void 0 !== t ? t : [];
                            i[n] = r.map(function(e) {
                                return new u.default(e)
                            }).filter(function(e) {
                                return e.id !== n
                            })
                        }), o.default.dispatch({
                            type: "BROADCAST_VIEWERS_UPDATE",
                            viewers: i
                        })), [3, 4];
                    case 3:
                        return a.sent(), [3, 4];
                    case 4:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }
}