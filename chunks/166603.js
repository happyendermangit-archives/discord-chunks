function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return y
        },
        discardOnboardingPromise: function() {
            return m
        },
        isOnboardingActiveForGuild: function() {
            return O
        },
        openAndWaitForOnboarding: function() {
            return h
        }
    });
    var r = n("512722"),
        o = n.n(r),
        i = n("784184"),
        a = n("322997"),
        u = n("163291"),
        s = n("745894"),
        l = n("667571"),
        c = n("537329"),
        f = n("856509"),
        d = n("281767"),
        _ = n("928204");

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
    var p = {};

    function m(e) {
        p[e] = null
    }

    function y(e) {
        return I.apply(this, arguments)
    }

    function I() {
        var e;
        return e = function(e) {
            var t, n, r, s, f;
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
            }(this, function(_) {
                switch (_.label) {
                    case 0:
                        return t = e.guildId, n = e.returnChannelId, s = void 0 !== (r = e.isPreview) && r, (0, i.closeAllModals)(), o()(null == p[t], "should not double-join guilds"), [4, (0, a.waitForGuild)(t)];
                    case 1:
                        if (!(f = _.sent()).hasFeature(d.GuildFeatures.COMMUNITY)) return [2];
                        if (!s) return [3, 2];
                        return (0, l.startOnboarding)(t), [3, 4];
                    case 2:
                        if (!f.hasFeature(d.GuildFeatures.GUILD_ONBOARDING)) return [2];
                        return [4, (0, l.maybeFetchOnboardingPrompts)(t)];
                    case 3:
                        _.sent(), _.label = 4;
                    case 4:
                        if (!c.default.shouldShowOnboarding(t)) return [3, 6];
                        return [4, h(t)];
                    case 5:
                        _.sent(), null != n && (0, u.transitionTo)(d.Routes.CHANNEL(t, n)), _.label = 6;
                    case 6:
                        return [2]
                }
            })
        }, (I = function() {
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
        }).apply(this, arguments)
    }

    function h(e) {
        return new Promise(function(t) {
            p[e] = t, (0, f.waitForOnboardingCompletion)(e).then(function() {
                var t, n;
                null === (n = p[t = e]) || void 0 === n || n.call(p), p[t] = null, s.default.finishOnboarding(e)
            }), (0, u.transitionTo)(d.Routes.CHANNEL(e, _.StaticChannelRoute.GUILD_ONBOARDING))
        })
    }

    function O(e) {
        return null != p[e]
    }
}