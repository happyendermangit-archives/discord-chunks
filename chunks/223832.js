function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        confirmActivityLaunchChecks: function() {
            return S
        }
    });
    var r = n("629815"),
        o = n("146591"),
        i = n("625864"),
        a = n("342942"),
        u = n("338140"),
        s = n("947248"),
        l = n("632142"),
        c = n("53257"),
        f = n("751513"),
        d = n("385957"),
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

    function y(e, t) {
        return I.apply(this, arguments)
    }

    function I() {
        return (I = p(function(e, t) {
            var n, s, l, c;
            return m(this, function(f) {
                switch (f.label) {
                    case 0:
                        if (f.trys.push([0, 4, , 5]), !(null !== (n = a.default.getApplication(e)) && void 0 !== n)) return [3, 1];
                        return s = n, [3, 3];
                    case 1:
                        return l = u.default.createFromServer, [4, i.default.fetchApplication(e)];
                    case 2:
                        s = l.apply(u.default, [f.sent()]), f.label = 3;
                    case 3:
                        return [2, s];
                    case 4:
                        return c = f.sent(), r.default.dispatch({
                            type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                            applicationId: e,
                            guildId: t,
                            error: new o.APIError(c)
                        }), [3, 5];
                    case 5:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function h() {
        return (h = p(function(e) {
            var t, n, r;
            return m(this, function(o) {
                switch (o.label) {
                    case 0:
                        if (t = e.channel, n = e.currentEmbeddedApplication, r = e.embeddedActivitiesManager, !(null != n)) return [3, 2];
                        return [4, new Promise(function(e) {
                            (0, f.default)(n, t, function() {
                                r.leaveActivity({
                                    channelId: t.id,
                                    applicationId: n.id
                                }), e(!0)
                            }, function() {
                                return e(!1)
                            })
                        })];
                    case 1:
                        if (!o.sent()) return [2, !1];
                        o.label = 2;
                    case 2:
                        return [2, !0]
                }
            })
        })).apply(this, arguments)
    }

    function O() {
        return (O = p(function(e) {
            var t, n, r, o, i, a, u;
            return m(this, function(s) {
                switch (s.label) {
                    case 0:
                        if (t = e.application, n = e.applicationId, r = e.channel, null != e.user.nsfwAllowed) return [3, 5];
                        if (!(null != t)) return [3, 1];
                        return a = t, [3, 3];
                    case 1:
                        return [4, y(n, r.getGuildId())];
                    case 2:
                        a = s.sent(), s.label = 3;
                    case 3:
                        if (null == (i = a)) return [2, !1];
                        if (!(null !== (u = null === (o = i.embeddedActivityConfig) || void 0 === o ? void 0 : o.requires_age_gate) && void 0 !== u && u)) return [3, 5];
                        return [4, new Promise(function(e) {
                            (0, c.confirmActivityAgeGateAlert)({
                                application: i,
                                onAgree: function() {
                                    return e(!0)
                                },
                                onDisagree: function() {
                                    return e(!1)
                                }
                            })
                        })];
                    case 4:
                        if (!s.sent()) return [2, !1];
                        s.label = 5;
                    case 5:
                        return [2, !0]
                }
            })
        })).apply(this, arguments)
    }

    function T() {
        return (T = p(function(e) {
            var t, n, r, o, i;
            return m(this, function(a) {
                switch (a.label) {
                    case 0:
                        if (t = e.application, n = e.applicationId, r = e.channel, !(null != t)) return [3, 1];
                        return i = t, [3, 3];
                    case 1:
                        return [4, y(n, r.getGuildId())];
                    case 2:
                        i = a.sent(), a.label = 3;
                    case 3:
                        if (null == (o = i)) return [2, !1];
                        if ((0, s.hasFlag)(o.flags, _.ApplicationFlags.EMBEDDED_RELEASED) || l.default.hasActivityEverBeenLaunched(n)) return [2, !0];
                        return [2, new Promise(function(e) {
                            (0, d.confirmExternalAppLaunchAlert)({
                                application: o,
                                onConfirm: function() {
                                    return e(!0)
                                },
                                onCancel: function() {
                                    return e(!1)
                                }
                            })
                        })]
                }
            })
        })).apply(this, arguments)
    }

    function S(e) {
        return v.apply(this, arguments)
    }

    function v() {
        return (v = p(function(e) {
            return m(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, function(e) {
                            return h.apply(this, arguments)
                        }(e)];
                    case 1:
                        if (!t.sent()) return [2, !1];
                        return [4, function(e) {
                            return O.apply(this, arguments)
                        }(e)];
                    case 2:
                        if (!t.sent()) return [2, !1];
                        return [4, function(e) {
                            return T.apply(this, arguments)
                        }(e)];
                    case 3:
                        if (!t.sent()) return [2, !1];
                        return [2, !0]
                }
            })
        })).apply(this, arguments)
    }
}