function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815"),
        a = n("54976"),
        u = n("281767");

    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function c(e) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function f(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                l(e, t, n[t])
            })
        }
        return e
    }

    function d(e, t) {
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

    function _(e, t) {
        return (_ = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var E = {},
        p = {},
        m = {};

    function y(e, t) {
        e = null != e ? e : "";
        var n, r = (0, a.parseExtraDataFromInviteKey)(e),
            o = E[e],
            i = null != o ? f({
                state: u.InviteStates.RESOLVING
            }, o) : {
                state: u.InviteStates.RESOLVING,
                code: r.baseCode
            };
        t(i), E = d(f({}, E), l({}, e, i)), (null === (n = i.guild) || void 0 === n ? void 0 : n.id) != null && (m = d(f({}, m), l({}, i.guild.id, e)))
    }

    function I(e) {
        return y(e.code, function(t) {
            t.state = "banned" in e && e.banned ? u.InviteStates.BANNED : u.InviteStates.EXPIRED
        })
    }
    var h = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _(e, t)
        }(u, e);
        var t, n, r, o, i, a = (t = u, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = c(t);
            if (n) {
                var a = c(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function u() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), a.apply(this, arguments)
        }
        return r = u, o = [{
            key: "getInvite",
            value: function(e) {
                return E[e]
            }
        }, {
            key: "getInviteError",
            value: function(e) {
                return p[e]
            }
        }, {
            key: "getInvites",
            value: function() {
                return E
            }
        }, {
            key: "getInviteKeyForGuildId",
            value: function(e) {
                return m[e]
            }
        }], s(r.prototype, o), i && s(r, i), u
    }(o.default.Store);
    l(h, "displayName", "InviteStore"), t.default = new h(i.default, {
        INVITE_RESOLVE: function(e) {
            var t = e.code,
                n = (0, a.parseExtraDataFromInviteKey)(t);
            E = d(f({}, E), l({}, t, {
                code: n.baseCode,
                state: u.InviteStates.RESOLVING
            }))
        },
        INVITE_RESOLVE_SUCCESS: function(e) {
            return y(e.code, function(t) {
                var n, r;
                t.state = u.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
            })
        },
        INVITE_RESOLVE_FAILURE: I,
        INSTANT_INVITE_REVOKE_SUCCESS: I,
        FRIEND_INVITE_CREATE_SUCCESS: function(e) {
            return y(e.invite.code, function(t) {
                t.state = u.InviteStates.RESOLVED, t.inviter = e.invite.inviter
            })
        },
        FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
            e.invites.forEach(function(e) {
                return y(e.code, function(e) {
                    e.state = u.InviteStates.EXPIRED
                })
            })
        },
        INSTANT_INVITE_CREATE_SUCCESS: function(e) {
            return y(e.invite.code, function(t) {
                var n, r;
                t.state = u.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
            })
        },
        INVITE_ACCEPT: function(e) {
            return y(e.code, function(e) {
                e.state = u.InviteStates.ACCEPTING
            })
        },
        INVITE_ACCEPT_SUCCESS: function(e) {
            return y(e.code, function(t) {
                t.state = u.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = f({}, t.channel, e.invite.channel)
            })
        },
        INVITE_ACCEPT_FAILURE: function(e) {
            return p[e.code] = e.error, y(e.code, function(e) {
                e.state = u.InviteStates.ERROR
            })
        },
        INVITE_APP_OPENING: function(e) {
            return y(e.code, function(e) {
                e.state = u.InviteStates.APP_OPENING
            })
        },
        INVITE_APP_OPENED: function(e) {
            return y(e.code, function(e) {
                e.state = u.InviteStates.APP_OPENED
            })
        },
        INVITE_APP_NOT_OPENED: function(e) {
            return y(e.code, function(e) {
                e.state = u.InviteStates.APP_NOT_OPENED
            })
        }
    })
}