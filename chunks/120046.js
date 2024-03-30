function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("392711"),
        i = n.n(o),
        a = n("898511"),
        u = n("629815"),
        s = n("717744"),
        l = n("935741"),
        c = n("388990"),
        f = n("523018"),
        d = n("238866"),
        _ = n("537329"),
        E = n("381370");

    function p(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function m(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function y(e) {
        return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function I(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                m(e, t, n[t])
            })
        }
        return e
    }

    function h(e, t) {
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

    function O(e, t) {
        return (O = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var T = {},
        S = {},
        v = {},
        g = !1;

    function A(e, t, n) {
        return e.map(function(e) {
            return function(e, t, n) {
                for (var r = !1, o = [], i = 0; i < e.options.length; i++) {
                    var a = e.options[i],
                        u = null == n[a.id];
                    u && (r = !0), o.push(h(I({}, a), {
                        isUnseen: u
                    }))
                }
                return h(I({}, e), {
                    options: o,
                    hasNewAnswers: r,
                    isNew: null == t[e.id]
                })
            }(e, t, n)
        })
    }

    function b(e) {
        var t, n, r, o, i, a, u, s, l, c = e.guildId,
            f = e.updates,
            d = null !== (i = null !== (o = f.onboardingPromptsSeen) && void 0 !== o ? o : null === (t = T[c]) || void 0 === t ? void 0 : t.onboardingPromptsSeen) && void 0 !== i ? i : {},
            _ = null !== (u = null !== (a = f.onboardingResponsesSeen) && void 0 !== a ? a : null === (n = T[c]) || void 0 === n ? void 0 : n.onboardingResponsesSeen) && void 0 !== u ? u : {},
            E = A(null !== (l = null !== (s = f.prompts) && void 0 !== s ? s : null === (r = T[c]) || void 0 === r ? void 0 : r.prompts) && void 0 !== l ? l : [], d, _);
        T[c] = h(I({}, T[c], f), {
            prompts: E
        })
    }

    function N(e, t) {
        if (null != S[e]) {
            var n = {};
            Object.keys(S[e]).forEach(function(r) {
                !t.includes(r) && S[e][r] ? n[r] = !0 : t.includes(r) && !1 === S[e][r] && (n[r] = !1)
            }), S[e] = n;
            var r = t.filter(function(e) {
                return null == n[e] || !0 === n[e]
            });
            Object.keys(n).forEach(function(e) {
                !0 === n[e] && !t.includes(e) && r.push(e)
            }), T[e] = h(I({}, T[e]), {
                responses: r
            })
        }
    }
    var R = [],
        C = [],
        P = [],
        D = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && O(e, t)
            }(d, e);
            var t, n, r, o, a, u = (t = d, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = y(t);
                if (n) {
                    var a = y(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : function(e) {
                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            });

            function d() {
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, d), u.apply(this, arguments)
            }
            return r = d, o = [{
                key: "initialize",
                value: function() {
                    this.waitFor(l.default, _.default, s.default)
                }
            }, {
                key: "getOnboardingPromptsForOnboarding",
                value: function(e) {
                    var t, n;
                    return null !== (n = null === (t = T[e]) || void 0 === t ? void 0 : t.onboardingPrompts) && void 0 !== n ? n : R
                }
            }, {
                key: "getOnboardingPrompts",
                value: function(e) {
                    var t, n;
                    return null !== (n = null === (t = T[e]) || void 0 === t ? void 0 : t.prompts) && void 0 !== n ? n : R
                }
            }, {
                key: "getOnboardingResponses",
                value: function(e) {
                    var t, n, r;
                    return s.default.isFullServerPreview(e) ? Array.from(null !== (n = s.default.getOnboardingResponses(e)) && void 0 !== n ? n : C) : null !== (r = null === (t = T[e]) || void 0 === t ? void 0 : t.responses) && void 0 !== r ? r : C
                }
            }, {
                key: "getSelectedOptions",
                value: function(e) {
                    var t = this.getOnboardingResponses(e);
                    return this.getOnboardingPrompts(e).map(function(e) {
                        return e.options
                    }).flat().filter(function(e) {
                        return t.includes(e.id)
                    })
                }
            }, {
                key: "getOnboardingResponsesForPrompt",
                value: function(e, t) {
                    var n = T[e];
                    if (null == n) return C;
                    var r = n.prompts.find(function(e) {
                        return e.id === t
                    });
                    return null == r ? C : i().intersection(r.options.map(function(e) {
                        return e.id
                    }), this.getOnboardingResponses(e))
                }
            }, {
                key: "getEnabledOnboardingPrompts",
                value: function(e) {
                    var t, n, r = T[e];
                    return s.default.isFullServerPreview(e) ? null !== (t = null == r ? void 0 : r.prompts) && void 0 !== t ? t : R : null != r && r.enabled ? null !== (n = r.prompts) && void 0 !== n ? n : R : R
                }
            }, {
                key: "getDefaultChannelIds",
                value: function(e) {
                    var t, n;
                    return null !== (n = null === (t = T[e]) || void 0 === t ? void 0 : t.defaultChannelIds) && void 0 !== n ? n : P
                }
            }, {
                key: "getEnabled",
                value: function(e) {
                    var t, n;
                    return s.default.isFullServerPreview(e) ? null != T[e] : null !== (n = null === (t = T[e]) || void 0 === t ? void 0 : t.enabled) && void 0 !== n && n
                }
            }, {
                key: "getOnboardingPrompt",
                value: function(e) {
                    return Object.values(T).map(function(e) {
                        return e.prompts
                    }).flat().find(function(t) {
                        return t.id === e
                    })
                }
            }, {
                key: "isLoading",
                value: function() {
                    return g
                }
            }, {
                key: "shouldFetchPrompts",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.default.Millis.HOUR;
                    if (g) return !1;
                    var n = v[e];
                    return null == n || Date.now() - n > t
                }
            }, {
                key: "getPendingResponseOptions",
                value: function(e) {
                    return S[e]
                }
            }, {
                key: "ackIdForGuild",
                value: function(e) {
                    var t = this.getEnabledOnboardingPrompts(e),
                        n = "0";
                    return t.forEach(function(e) {
                        e.options.forEach(function(e) {
                            f.default.compare(e.id, n) > 0 && (n = e.id)
                        }), f.default.compare(e.id, n) > 0 && (n = e.id)
                    }), n
                }
            }, {
                key: "lastFetchedAt",
                value: function(e) {
                    return v[e]
                }
            }, {
                key: "isAdvancedMode",
                value: function(e) {
                    var t;
                    return null != e && (null === (t = T[e]) || void 0 === t ? void 0 : t.mode) === E.GuildOnboardingMode.ONBOARDING_ADVANCED
                }
            }], p(r.prototype, o), a && p(r, a), d
        }(a.default.Store);
    m(D, "displayName", "GuildOnboardingPromptsStore"), t.default = new D(u.default, {
        CONNECTION_OPEN: function() {
            g = !1, T = {}
        },
        GUILD_ONBOARDING_PROMPTS_FETCH_START: function() {
            g = !0
        },
        GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: function(e) {
            var t = e.guildId,
                n = e.prompts,
                r = e.defaultChannelIds,
                o = e.enabled,
                i = e.responses,
                a = e.onboardingPromptsSeen,
                u = e.onboardingResponsesSeen,
                s = e.mode,
                l = e.belowRequirements;
            g = !1;
            var c = _.default.getOnboardingStatus(t) === _.GuildOnboardingStatus.READY,
                f = A(n, a, u);
            T[t] = {
                enabled: o,
                mode: s,
                belowRequirements: l,
                prompts: f,
                onboardingPrompts: f.filter(function(e) {
                    return e.inOnboarding
                }),
                defaultChannelIds: r.filter(function(e) {
                    return (0, d.canChannelBeDefault)(t, e)
                }),
                responses: c ? [] : i,
                onboardingPromptsSeen: a,
                onboardingResponsesSeen: u
            }, !c && N(t, i), v[t] = Date.now()
        },
        GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: function() {
            g = !1
        },
        GUILD_ONBOARDING_SELECT_OPTION: function(e) {
            var t = e.guildId,
                n = e.optionId,
                r = e.selected,
                o = e.removedOptionIds;
            return !!s.default.isFullServerPreview(t) || null != T[t] && (null != o && o.length > 0 && i().pullAll(T[t].responses, o), r ? T[t].responses.push(n) : i().pull(T[t].responses, n), null == S[t] && (S[t] = {}), S[t][n] = r, null != o && o.forEach(function(e) {
                return S[t][e] = !1
            }), S[t] = I({}, S[t]), !0)
        },
        GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS: function(e) {
            var t = e.guildId,
                n = e.options,
                r = e.prompts_seen,
                o = e.options_seen;
            N(t, n);
            var i = T[t];
            if (null == i) return !1;
            var a = A(i.prompts, r, o);
            T[t] = h(I({}, i), {
                prompts: a,
                onboardingPrompts: a.filter(function(e) {
                    return e.inOnboarding
                }),
                onboardingPromptsSeen: r,
                onboardingResponsesSeen: o
            })
        },
        GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE: b,
        GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: b,
        GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: function(e) {
            var t = e.guildId,
                n = e.channelIds;
            T[t] = h(I({}, T[t]), {
                defaultChannelIds: n
            })
        },
        GUILD_SETTINGS_ONBOARDING_SET_MODE: function(e) {
            var t = e.guildId,
                n = e.mode,
                r = T[t];
            null != r && (r.mode = n)
        }
    })
}