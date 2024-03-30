function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("392711"),
        i = n("784184"),
        a = n("629815"),
        u = n("661961"),
        s = n("224359"),
        l = n("53867"),
        c = n("73013"),
        f = n("217014"),
        d = n("382199"),
        _ = n("545072"),
        E = n("208454"),
        p = n("647237"),
        m = n("736381"),
        y = n("739213"),
        I = n("367965"),
        h = n("281767");

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
    var T = (0, o.debounce)(s.notifyStreamStart, 1e3);
    t.default = {
        init: function() {
            p.default.init(), a.default.subscribe("MEDIA_ENGINE_VIDEO_STATE_CHANGED", function(e) {
                var t = e.videoState,
                    n = c.default.getCurrentUserActiveStream();
                if (null != n) {
                    var r = t === h.MediaEngineVideoStates.PAUSED;
                    (0, s.setStreamPaused)(n, r)
                }
            }), a.default.subscribe("STREAM_DELETE", function(e) {
                if (e.reason === h.ApplicationStreamDeleteReasons.STREAM_FULL) {
                    var t;
                    (0, s.closeStream)(e.streamKey, !1), (0, i.openModalLazy)((t = function() {
                        var e;
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
                        }(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, Promise.all([n.e("99387"), n.e("63407")]).then(n.bind(n, "269526"))];
                                case 1:
                                    return e = t.sent().default, [2, function(t) {
                                        return r.createElement(e, t)
                                    }]
                            }
                        })
                    }, function() {
                        var e = this,
                            n = arguments;
                        return new Promise(function(r, o) {
                            var i = t.apply(e, n);

                            function a(e) {
                                O(i, r, o, a, u, "next", e)
                            }

                            function u(e) {
                                O(i, r, o, a, u, "throw", e)
                            }
                            a(void 0)
                        })
                    }))
                }
            }), a.default.subscribe("STREAM_WATCH", function(e) {
                var t = e.streamKey;
                if (!e.allowMultiple) {
                    var n = (0, m.decodeStreamKey)(t);
                    c.default.getAllActiveStreams().forEach(function(e) {
                        if (e.ownerId !== n.ownerId) e.ownerId !== f.default.getId() && (e.ownerId === f.default.getId() && u.default.setGoLiveSource(null), (0, s.closeStream)((0, m.encodeStreamKey)(e), !1))
                    })
                }
            }), a.default.subscribe("VOICE_STATE_UPDATES", function(e) {
                e.voiceStates.forEach(function(e) {
                    if (e.userId === f.default.getId()) {
                        var t = c.default.getAllActiveStreams(),
                            n = _.default.getChannelId();
                        t.forEach(function(e) {
                            e.channelId !== n && (0, y.default)(e, !1)
                        })
                    }
                })
            }), a.default.subscribe("STREAM_CREATE", function(e) {
                var t, n = e.streamKey,
                    r = (0, m.decodeStreamKey)(n),
                    o = r.ownerId,
                    i = r.guildId;
                if (null != i && null != o && o === (null === (t = E.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) {
                    var a = d.default.getMemberCount(i);
                    null != a && !(a < 2) && !(a > I.STREAM_NOTIFY_GUILD_MAX_SIZE) && l.NotifyFriendsOnGoLive.getSetting() && T(n)
                }
            })
        }
    }
}