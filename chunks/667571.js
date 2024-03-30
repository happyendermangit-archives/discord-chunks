function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchOnboardingPrompts: function() {
            return h
        },
        loadOnboardingPrompts: function() {
            return I
        },
        maybeFetchOnboardingPrompts: function() {
            return O
        },
        startOnboarding: function() {
            return S
        }
    });
    var r = n("967888"),
        o = n("629815"),
        i = n("140817"),
        a = n("217014"),
        u = n("957808"),
        s = n("306912"),
        l = n("870331"),
        c = n("947248"),
        f = n("120046"),
        d = n("381370"),
        _ = n("281767"),
        E = n("844659");

    function p(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function m(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function y(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function I(e) {
        l.default.track(_.AnalyticEvents.GUILD_ONBOARDING_LOADED, y(m({}, (0, i.collectGuildAnalyticsMetadata)(e)), {
            has_new_prompts: !1,
            number_of_prompts: 0
        }))
    }

    function h(e) {
        return o.default.dispatch({
            type: "GUILD_ONBOARDING_PROMPTS_FETCH_START",
            guildId: e
        }), r.HTTP.get({
            url: _.Endpoints.GUILD_ONBOARDING(e)
        }).then(function(t) {
            var n = t.body,
                r = (0, d.serverApiResponseToClientState)(n);
            return o.default.dispatch(m({
                type: "GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS",
                guildId: e
            }, r)).then(function() {
                return r.prompts
            })
        }, function(t) {
            return o.default.dispatch({
                type: "GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE",
                guildId: e
            }), t
        })
    }

    function O(e) {
        return T.apply(this, arguments)
    }

    function T() {
        var e;
        return e = function(e) {
            var t, n, r, o, i, l, d, p;
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
            }(this, function(m) {
                switch (m.label) {
                    case 0:
                        if (n = a.default.getId(), o = (0, c.hasFlag)(null !== (r = null === (t = u.default.getMember(e, n)) || void 0 === t ? void 0 : t.flags) && void 0 !== r ? r : 0, E.GuildMemberFlags.COMPLETED_ONBOARDING), null == (i = s.default.getGuild(e)) || !i.hasFeature(_.GuildFeatures.GUILD_ONBOARDING)) return [2, Promise.resolve()];
                        if (l = f.default.shouldFetchPrompts(e), d = f.default.getOnboardingPrompts(e), !l && d.length > 0) {
                            if (d.every(function(e) {
                                    return !e.inOnboarding
                                })) return v(e), [2, Promise.resolve()];
                            return !o && S(e), [2, Promise.resolve()]
                        }
                        return [4, h(e)];
                    case 1:
                        if (Array.isArray(p = m.sent()) && p.every(function(e) {
                                return !e.inOnboarding
                            })) return v(e), [2, Promise.resolve()];
                        return !o && S(e), [2, p]
                }
            })
        }, (T = function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    p(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    p(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }).apply(this, arguments)
    }

    function S(e) {
        o.default.dispatch({
            type: "GUILD_ONBOARDING_START",
            guildId: e
        })
    }

    function v(e) {
        l.default.track(_.AnalyticEvents.GUILD_ONBOARDING_STEP_VIEWED, y(m({}, (0, i.collectGuildAnalyticsMetadata)(e)), {
            step: -2,
            required: !0
        })), l.default.track(_.AnalyticEvents.GUILD_ONBOARDING_STEP_COMPLETED, y(m({}, (0, i.collectGuildAnalyticsMetadata)(e)), {
            step: -2,
            skipped: !1,
            is_final_step: !0,
            in_onboarding: !0
        }))
    }
}