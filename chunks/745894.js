function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("392711"),
        o = n.n(r),
        i = n("967888"),
        a = n("629815"),
        u = n("98660"),
        s = n("140817"),
        l = n("498294"),
        c = n("686785"),
        f = n("717744"),
        d = n("881240"),
        _ = n("935741"),
        E = n("957808"),
        p = n("208454"),
        m = n("870331"),
        y = n("947248"),
        I = n("162677"),
        h = n("285910"),
        O = n("523018"),
        T = n("120046"),
        S = n("826611"),
        v = n("929720"),
        g = n("281767"),
        A = n("844659"),
        b = n("24729");

    function N(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function R(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function C(e) {
        return function(e) {
            if (Array.isArray(e)) return N(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || P(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function P(e, t) {
        if (e) {
            if ("string" == typeof e) return N(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return N(e, t)
        }
    }

    function D(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!f.default.isFullServerPreview(e)) {
            var n = t ? T.default.getOnboardingPromptsForOnboarding(e) : T.default.getOnboardingPrompts(e),
                r = T.default.getOnboardingResponses(e),
                o = n.map(function(e) {
                    return e.options.filter(function(e) {
                        return r.includes(e.id)
                    })
                }).flat(),
                u = {},
                s = {};
            return (n.forEach(function(e) {
                u[e.id] = Date.now(), e.options.forEach(function(e) {
                    return s[e.id] = Date.now()
                })
            }), t) ? i.HTTP.post({
                url: g.Endpoints.GUILD_ONBOARDING_RESPONSES(e),
                body: {
                    onboarding_responses: o.map(function(e) {
                        return e.id
                    }),
                    onboarding_prompts_seen: u,
                    onboarding_responses_seen: s
                }
            }).then(function(t) {
                null != t.body && a.default.dispatch({
                    type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS",
                    guildId: e,
                    options: t.body.onboarding_responses,
                    prompts_seen: t.body.onboarding_prompts_seen,
                    options_seen: t.body.onboarding_responses_seen
                })
            }).catch(function(e) {
                return h.default.captureException(e)
            }) : i.HTTP.put({
                url: g.Endpoints.GUILD_ONBOARDING_RESPONSES(e),
                body: {
                    onboarding_responses: o.map(function(e) {
                        return e.id
                    }),
                    onboarding_prompts_seen: u,
                    onboarding_responses_seen: s
                }
            }).then(function(t) {
                null != t.body && a.default.dispatch({
                    type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS",
                    guildId: e,
                    options: t.body.onboarding_responses,
                    prompts_seen: t.body.onboarding_prompts_seen,
                    options_seen: t.body.onboarding_responses_seen
                })
            }).catch(function(e) {
                return h.default.captureException(e)
            })
        }
    }
    t.default = {
        selectOption: function(e, t, n, r) {
            var i = T.default.getOnboardingPrompt(t);
            if (null != i) {
                var u = i.singleSelect ? o().without(o().map(i.options, "id"), n) : [];
                a.default.dispatch({
                    type: "GUILD_ONBOARDING_SELECT_OPTION",
                    guildId: e,
                    promptId: t,
                    optionId: n,
                    selected: r,
                    removedOptionIds: u
                })
            }
        },
        updateOnboardingResponses: o().debounce(D, 1e3),
        updateRolesLocal: function(e, t, n) {
            var r, i, u = null !== (i = null === (r = E.default.getSelfMember(e)) || void 0 === r ? void 0 : r.roles) && void 0 !== i ? i : [];
            if (f.default.isViewingRoles(e)) {
                (0, c.updateImpersonatedRoles)(e, o().difference(o().union(u, t), n));
                return
            }(t.length > 0 || n.length > 0) && a.default.dispatch({
                type: "GUILD_MEMBER_UPDATE_LOCAL",
                guildId: e,
                roles: o().difference(o().union(u, t), n),
                addedRoleIds: t,
                removedRoleIds: n
            })
        },
        completeOnboarding: function(e, t) {
            var n = t.length > 0 ? t[t.length - 1] : null,
                r = T.default.getSelectedOptions(e),
                o = (0, S.getSelectedRoleIds)(r),
                i = (0, S.getSelectedChannelIds)(r),
                a = T.default.getEnabled(e) ? T.default.getDefaultChannelIds(e) : [];
            var l = (w = (0, S.getChannelCoverageForOnboarding)(e, t, a), k = 2, function(e) {
                    if (Array.isArray(e)) return e
                }(w) || function(e, t) {
                    var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != o) {
                        var i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                        } catch (e) {
                            u = !0, r = e
                        } finally {
                            try {
                                !a && null != o.return && o.return()
                            } finally {
                                if (u) throw r
                            }
                        }
                        return i
                    }
                }(w, k) || P(w, k) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()),
                d = l[0],
                h = l[1],
                N = C(i).concat(C(a)),
                R = N.map(function(e) {
                    return _.default.getChannel(e)
                }).filter(I.isNotNullish),
                L = (0, v.getFlattenedChannels)(e, new Set(N), R, !0).length,
                M = null == n ? [] : n.options.map(function(e) {
                    return e.id
                });
            if (m.default.track(g.AnalyticEvents.GUILD_ONBOARDING_STEP_COMPLETED, (G = function(e) {
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
                }({}, (0, s.collectGuildAnalyticsMetadata)(e)), B = (B = {
                    step: t.length - 1,
                    options_selected: null == n ? 0 : r.filter(function(e) {
                        return M.includes(e.id)
                    }).length,
                    skipped: M.length > 0,
                    back: !1,
                    in_onboarding: !0,
                    is_final_step: !0,
                    roles_granted: o.size,
                    channels_granted: L,
                    guild_onboarding_covered_channel_ids: d.map(function(e) {
                        return e.id
                    }),
                    guild_onboarding_uncovered_channel_ids: h.map(function(e) {
                        return e.id
                    })
                }, B), Object.getOwnPropertyDescriptors ? Object.defineProperties(G, Object.getOwnPropertyDescriptors(B)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(B)).forEach(function(e) {
                    Object.defineProperty(G, e, Object.getOwnPropertyDescriptor(B, e))
                }), G)), (0, u.ackGuildFeature)(e, b.ReadStateTypes.GUILD_ONBOARDING_QUESTION, O.default.fromTimestamp(Date.now())), D(e, !0), f.default.isFullServerPreview(e)) {
                (0, c.updateImpersonatedChannels)(e, N, []), (0, c.updateImpersonatedData)(e, {
                    optInEnabled: !0
                }), (0, c.updateImpersonatedRoles)(e, Array.from(o));
                var U = p.default.getCurrentUser();
                if (null != U) {
                    var w, k, G, B, j, F, V = null !== (F = null === (j = E.default.getMember(e, U.id)) || void 0 === j ? void 0 : j.flags) && void 0 !== F ? F : 0;
                    (0, c.updateImpersonatedData)(e, {
                        memberOptions: {
                            flags: (0, y.setFlag)(V, A.GuildMemberFlags.COMPLETED_ONBOARDING, !0)
                        }
                    })
                }
            }
        },
        onboardExistingMember: function(e, t) {
            var n = new Set(t);
            (T.default.getEnabled(e) ? T.default.getDefaultChannelIds(e) : []).forEach(function(e) {
                return n.add(e)
            }), n.size > 0 && (0, d.bulkOptInChannels)(e, Array.from(n), !0, {
                page: g.AnalyticsPages.GUILD_ONBOARDING
            })
        },
        finishOnboarding: function(e) {
            a.default.dispatch({
                type: "GUILD_ONBOARDING_COMPLETE",
                guildId: e
            })
        },
        setUserOnboardingStep: function(e, t) {
            a.default.dispatch({
                type: "GUILD_ONBOARDING_SET_STEP",
                guildId: e,
                step: t
            })
        },
        resetOnboarding: function(e) {
            var t;
            return (t = function() {
                var t, n, r, o;
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
                }(this, function(i) {
                    switch (i.label) {
                        case 0:
                            if (!(null != (t = p.default.getCurrentUser()))) return [3, 2];
                            return o = null !== (r = null === (n = E.default.getMember(e, t.id)) || void 0 === n ? void 0 : n.flags) && void 0 !== r ? r : 0, [4, (0, l.updateGuildSelfMember)(e, {
                                flags: (0, y.setFlag)(o, A.GuildMemberFlags.COMPLETED_ONBOARDING, !1)
                            })];
                        case 1:
                            i.sent(), i.label = 2;
                        case 2:
                            return [2]
                    }
                })
            }, function() {
                var e = this,
                    n = arguments;
                return new Promise(function(r, o) {
                    var i = t.apply(e, n);

                    function a(e) {
                        R(i, r, o, a, u, "next", e)
                    }

                    function u(e) {
                        R(i, r, o, a, u, "throw", e)
                    }
                    a(void 0)
                })
            })()
        }
    }
}