function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return y
        }
    });
    var r = n("342942"),
        o = n("935741"),
        i = n("894288"),
        a = n("208454"),
        u = n("987351"),
        s = n("623416"),
        l = n("223832"),
        c = n("224680"),
        f = n("175825"),
        d = n("279271"),
        _ = n("695359"),
        E = n("997133"),
        p = n("281767");

    function m(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function y(e) {
        return I.apply(this, arguments)
    }

    function I() {
        var e;
        return e = function(e) {
            var t, n, m, y, I, h, O, T, S, v, g, A;
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
            }(this, function(b) {
                switch (b.label) {
                    case 0:
                        if (t = e.applicationId, n = e.currentEmbeddedApplication, m = e.activityChannelId, y = e.locationObject, I = e.embeddedActivitiesManager, h = e.analyticsLocations, S = null == (T = null == (O = o.default.getChannel(m)) ? void 0 : O.getGuildId()) || "" === T, v = a.default.getCurrentUser(), null == O || S && !O.isPrivate() || null == m || null == v) return [2, Promise.resolve(!1)];
                        if (i.default.getVoiceChannelId() === m && (null == n ? void 0 : n.id) === t) return (0, _.default)(T, m), [2, Promise.resolve(!0)];
                        return [4, (0, l.confirmActivityLaunchChecks)({
                            applicationId: t,
                            application: r.default.getApplication(t),
                            channel: O,
                            currentEmbeddedApplication: n,
                            embeddedActivitiesManager: I,
                            user: v
                        })];
                    case 1:
                        if (!b.sent()) return [2, !1];
                        if (g = (0, c.default)(O.id), A = E.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES.includes(O.type), !g) return [3, 3];
                        return [4, (0, f.default)({
                            channelId: O.id,
                            bypassChangeModal: null != n
                        })];
                    case 2:
                        if (!b.sent()) return [2, !1];
                        return [3, 4];
                    case 3:
                        if (!(0, u.isActivitiesInTextEnabled)(O, "joinEmbeddedActivity") || !A) return [2, !1];
                        b.label = 4;
                    case 4:
                        return (0, _.default)(T, m), (0, s.startEmbeddedActivity)(m, t, h), (0, d.default)({
                            type: p.AnalyticsGameOpenTypes.JOIN,
                            userId: v.id,
                            applicationId: t,
                            locationObject: y,
                            analyticsLocations: h
                        }), [2, !0]
                }
            })
        }, (I = function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    m(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    m(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }).apply(this, arguments)
    }
}