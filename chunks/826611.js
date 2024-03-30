function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getChannelCoverageForOnboarding: function() {
            return T
        },
        getChattableDefaultChannels: function() {
            return C
        },
        getMinimumSetOfDefaultChannelIds: function() {
            return b
        },
        getSelectedChannelIds: function() {
            return L
        },
        getSelectedRoleIds: function() {
            return D
        },
        isBlockedByOnboarding: function() {
            return h
        },
        isChattableChannel: function() {
            return g
        },
        isChattableChannelId: function() {
            return v
        },
        isGuildOnboardingSettingsAvailable: function() {
            return I
        },
        useChannelCoverageForOnboarding: function() {
            return S
        },
        useChattableDefaultChannels: function() {
            return P
        },
        useGuildOnboardingSettingsAvailable: function() {
            return y
        },
        useIsChattableChannel: function() {
            return A
        }
    });
    var r = n("898511"),
        o = n("716589"),
        i = n("935741"),
        a = n("29604"),
        u = n("306912"),
        s = n("29884"),
        l = n("947248"),
        c = n("162677"),
        f = n("359017"),
        d = n("238866"),
        _ = n("281767"),
        E = n("844659");

    function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var m = new Date(16824888e5);

    function y(e) {
        var t = (0, r.useStateFromStores)([u.default], function() {
                return u.default.getGuild(e)
            }),
            n = !!(null == t ? void 0 : t.hasFeature(_.GuildFeatures.COMMUNITY)),
            o = s.default.can(_.Permissions.MANAGE_GUILD, t),
            i = s.default.can(_.Permissions.MANAGE_ROLES, t);
        return n && o && i
    }

    function I(e) {
        var t = u.default.getGuild(e),
            n = !!(null == t ? void 0 : t.hasFeature(_.GuildFeatures.COMMUNITY)),
            r = s.default.can(_.Permissions.MANAGE_GUILD, t),
            o = s.default.can(_.Permissions.MANAGE_ROLES, t);
        return n && r && o
    }

    function h(e, t) {
        if (null == e || !e.hasFeature(_.GuildFeatures.GUILD_ONBOARDING) || null == t || null == t.joinedAt || new Date(t.joinedAt) < m) return !1;
        var n, r = null !== (n = t.flags) && void 0 !== n ? n : 0;
        return l.hasFlag(r, E.GuildMemberFlags.STARTED_ONBOARDING) && !l.hasFlag(r, E.GuildMemberFlags.COMPLETED_ONBOARDING)
    }

    function O(e, t, n) {
        var r = new Set;
        e.forEach(function(e) {
            e.options.forEach(function(e) {
                var t;
                null == e || null === (t = e.channelIds) || void 0 === t || t.forEach(function(e) {
                    r.add(e)
                })
            })
        }), t.forEach(function(e) {
            return r.add(e)
        });
        var i = n.filter(function(e) {
            return !e.isCategory() && !e.isThread() && !(0, o.default)(e)
        });
        return [i.filter(function(e) {
            return r.has(e.id) || null != e.parent_id && r.has(e.parent_id)
        }), i.filter(function(e) {
            return !r.has(e.id) && !(null != e.parent_id && r.has(e.parent_id))
        })]
    }

    function T(e, t, n) {
        return O(t, n, a.default.getChannels(e)[0, a.GUILD_SELECTABLE_CHANNELS_KEY].map(function(e) {
            return e.channel
        }))
    }

    function S(e, t, n) {
        return O(t, n, (0, r.useStateFromStores)([a.default], function() {
            return a.default.getChannels(e)
        })[0, a.GUILD_SELECTABLE_CHANNELS_KEY].map(function(e) {
            return e.channel
        }))
    }

    function v(e) {
        return g(i.default.getChannel(e))
    }

    function g(e) {
        return !!(null != e && (0, d.canChannelBeDefault)(e.guild_id, e.id)) && (e.isForumChannel() ? f.canEveryoneRole(_.Permissions.SEND_MESSAGES_IN_THREADS, e) : f.canEveryoneRole(_.Permissions.SEND_MESSAGES, e))
    }

    function A(e) {
        var t = (0, r.useStateFromStores)([i.default], function() {
            return i.default.getChannel(e)
        });
        return (0, c.isNotNullish)(t) && g(t)
    }

    function b(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {
                return !0
            },
            o = R(e, t).map(function(e) {
                return e.id
            }).filter(r);
        return n.forEach(function(t) {
            if (t.required) {
                var n, i, a, u = R(e, null !== (a = null === (i = t.options[0]) || void 0 === i ? void 0 : i.channelIds) && void 0 !== a ? a : []).map(function(e) {
                        return e.id
                    }),
                    s = t.options.reduce(function(t, n) {
                        if (null == n.channelIds) return [];
                        var i = R(e, n.channelIds).map(function(e) {
                            return e.id
                        }).filter(function(e) {
                            return r(e) && !o.includes(e)
                        });
                        return i.length < t.length ? i : t
                    }, u);
                o.push.apply(o, function(e) {
                    if (Array.isArray(e)) return p(e)
                }(n = s) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(n) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return p(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, t)
                    }
                }(n) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }())
            }
        }), o
    }

    function N(e, t) {
        return e.filter(function(e) {
            var n = t.find(function(t) {
                return t.channel.id === e
            });
            return g(null == n ? void 0 : n.channel)
        })
    }

    function R(e, t) {
        return a.default.getChannels(e)[a.GUILD_SELECTABLE_CHANNELS_KEY].filter(function(e) {
            var n = e.channel;
            return (0, d.canChannelBeDefault)(n.guild_id, n.id) && (t.includes(n.id) && !n.isCategory() || !n.isThread() && null != n.parent_id && t.includes(n.parent_id))
        }).map(function(e) {
            return e.channel
        })
    }

    function C(e, t) {
        var n = R(e, t),
            r = a.default.getChannels(e)[a.GUILD_SELECTABLE_CHANNELS_KEY];
        return [N(n.map(function(e) {
            return e.id
        }), r), n]
    }

    function P(e, t) {
        var n, o, i = (n = e, o = t, (0, r.useStateFromStores)([a.default], function() {
                return a.default.getChannels(n)
            })[a.GUILD_SELECTABLE_CHANNELS_KEY].filter(function(e) {
                var t = e.channel;
                return (0, d.canChannelBeDefault)(t.guild_id, t.id) && (o.includes(t.id) && !t.isCategory() || !t.isThread() && null != t.parent_id && o.includes(t.parent_id))
            }).map(function(e) {
                return e.channel
            })),
            u = (0, r.useStateFromStores)([a.default], function() {
                return a.default.getChannels(e)
            })[a.GUILD_SELECTABLE_CHANNELS_KEY];
        return [N(i.map(function(e) {
            return e.id
        }), u), i]
    }

    function D(e) {
        return new Set(e.map(function(e) {
            return e.roleIds
        }).flat().filter(c.isNotNullish))
    }

    function L(e) {
        return new Set(e.map(function(e) {
            return e.channelIds
        }).flat().filter(c.isNotNullish))
    }
}