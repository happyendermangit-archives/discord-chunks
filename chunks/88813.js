function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    });
    var r = n("291178"),
        o = n("254669"),
        i = n("924504"),
        a = n("243930"),
        u = n("781883"),
        s = n("537329"),
        l = n("29221"),
        c = n("162660"),
        f = n("714980"),
        d = n("935741"),
        _ = n("306912"),
        E = n("162677"),
        p = n("42969"),
        m = n("281767"),
        y = n("928204");

    function I(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function h(e) {
        return O.apply(this, arguments)
    }

    function O() {
        var e;
        return e = function(e) {
            var t, n, I, h, O;
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
            }(this, function(T) {
                switch (T.label) {
                    case 0:
                        if (t = e.guildId, n = e.channelId, I = _.default.getGuild(t), h = _.default.getRoles(t), null == I && t !== m.ME) return [2, !1];
                        if (null == n) return [2, !0];
                        if ((0, y.isStaticChannelRoute)(n)) switch (n) {
                            case y.StaticChannelRoute.ROLE_SUBSCRIPTIONS:
                                return [2, (0, c.areRoleSubscriptionsVisibleInGuild)(t, h)];
                            case y.StaticChannelRoute.GUILD_SHOP:
                                return [2, (0, o.isGuildShopVisibleInGuild)(I, h)];
                            case y.StaticChannelRoute.MEMBER_APPLICATIONS:
                                return [2, (0, a.canReviewGuildMemberApplications)(t)];
                            case y.StaticChannelRoute.GUILD_HOME:
                                return [2, (0, i.canSeeGuildHome)(t) || (0, l.canSeeOnboardingHome)(t)];
                            case y.StaticChannelRoute.CHANNEL_BROWSER:
                                return [2, null != I && I.hasFeature(m.GuildFeatures.COMMUNITY)];
                            case y.StaticChannelRoute.GUILD_ONBOARDING:
                                return [2, s.default.shouldShowOnboarding(t)];
                            case y.StaticChannelRoute.CUSTOMIZE_COMMUNITY:
                                return [2, null != I && I.hasFeature(m.GuildFeatures.COMMUNITY)];
                            case y.StaticChannelRoute.MEMBER_SAFETY:
                                return [2, (0, u.canAccessMemberSafetyPage)(t)];
                            default:
                                (0, E.assertNever)(n)
                        }
                        if (null != (O = d.default.getChannel(n))) return [3, 2];
                        return [4, f.default.loadThread(n)];
                    case 1:
                        if (T.sent(), null == (O = d.default.getChannel(n))) return [2, !1];
                        T.label = 2;
                    case 2:
                        return [2, (0, p.canViewChannel)(O) || r.default.isChannelGatedAndVisible(t, n)]
                }
            })
        }, (O = function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    I(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    I(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }).apply(this, arguments)
    }
}