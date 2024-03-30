function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        connectAndOpen: function() {
            return O
        },
        connectOrLurkStage: function() {
            return I
        },
        connectToStage: function() {
            return h
        },
        navigateToStage: function() {
            return T
        }
    });
    var r = n("322997"),
        o = n("585949"),
        i = n("224359"),
        a = n("679509"),
        u = n("894928"),
        s = n("73013"),
        l = n("935741"),
        c = n("306912"),
        f = n("29884"),
        d = n("894288"),
        _ = n("7325"),
        E = n("513433"),
        p = n("353934"),
        m = n("895782");

    function y(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function I(e, t) {
        var n, o, i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return new Promise((o = (n = function(n) {
            var o;
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
            }(this, function(a) {
                switch (a.label) {
                    case 0:
                        if (null != (o = l.default.getChannel(t))) return h(o, i), [2, n(o)];
                        return [4, (0, u.stopLurkingAll)([e])];
                    case 1:
                        return a.sent(), [4, r.default.joinGuild(e, {
                            lurker: !0
                        })];
                    case 2:
                        return a.sent(), c.default.addConditionalChangeListener(function() {
                            var e = l.default.getChannel(t);
                            return null == e || (h(e), m.default.initialize(), n(e), !1)
                        }), [2]
                }
            })
        }, function() {
            var e = this,
                t = arguments;
            return new Promise(function(r, o) {
                var i = n.apply(e, t);

                function a(e) {
                    y(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    y(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }), function(e) {
            return o.apply(this, arguments)
        }))
    }

    function h(e) {
        var t, n, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            a = d.default.getVoiceChannelId();
        if (!r && (t = e, n = a, !f.default.can(p.JOIN_VOCAL_CHANNEL_PERMISSIONS, t) || _.shouldShowBlockedUsers(t.id) && n !== t.id && (_.openStageBlockedUsersSheet(t, function() {
                return O(t, !0)
            }), 1))) return !1;
        if (E.default.initialize(), o.default.selectVoiceChannel(e.id), (a = d.default.getVoiceChannelId()) !== e.id) return !1;
        var u = s.default.getAllApplicationStreamsForChannel(e.id);
        return u.length > 0 && (0, i.watchStream)(u[0], {
            noFocus: !1
        }), !0
    }

    function O(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            o = d.default.getVoiceChannelId();
        if (!(!r && o !== e.id && (0, a.shouldShowVoiceChannelChangeConfirmation)(e) && _.showChannelChangeConfirmationAlert(e, function() {
                return O(e, t, n, !0)
            }))) h(e, t) && T(e, o, n)
    }

    function T(e, t) {
        var n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        _.navigateToStage(e, t, n)
    }
}