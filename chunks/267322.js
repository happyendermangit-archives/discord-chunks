function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u = n("898511"),
        s = n("629815"),
        l = n("947248"),
        c = n("523018"),
        f = n("957808"),
        d = n("306912"),
        _ = n("208454"),
        E = n("281767"),
        p = n("844659");

    function m(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function y(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function I(e) {
        return (I = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function h(e, t) {
        return (h = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var O = {
            notClaimed: !1,
            notEmailVerified: !1,
            notPhoneVerified: !1,
            newAccount: !1,
            newMember: !1,
            canChat: !0
        },
        T = new Set,
        S = {};

    function v(e) {
        g(e), T.add(e);
        var t, n, r = d.default.getGuild(e),
            o = _.default.getCurrentUser();
        if (!(null == r || r.verificationLevel === E.VerificationLevels.NONE || null == o || r.isOwner(o) || o.isPhoneVerified())) {
            var i, a = f.default.getMember(r.id, o.id);
            if (null != a) {
                if ((0, l.hasFlag)(null !== (h = a.flags) && void 0 !== h ? h : 0, p.GuildMemberFlags.BYPASSES_VERIFICATION)) return;
                var u = new Set,
                    c = !0,
                    y = !1,
                    I = void 0;
                try {
                    for (var h, O, v = a.roles[Symbol.iterator](); !(c = (O = v.next()).done); c = !0) {
                        var A = O.value,
                            b = d.default.getRole(r.id, A);
                        null != b && !b.managed && u.add(A)
                    }
                } catch (e) {
                    y = !0, I = e
                } finally {
                    try {
                        !c && null != v.return && v.return()
                    } finally {
                        if (y) throw I
                    }
                }
                var N = new Date("2022-12-02 00:00:00"),
                    R = null == a.joinedAt || new Date(a.joinedAt) < N;
                if (!(r.hasFeature(E.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED) && !R) && u.size > 0) return
            }
            var C = +o.createdAt + 6e4 * E.VerificationCriteria.ACCOUNT_AGE - Date.now(),
                P = +r.joinedAt + 6e4 * E.VerificationCriteria.MEMBER_AGE - Date.now(),
                D = r.verificationLevel >= E.VerificationLevels.LOW && !o.isClaimed(),
                L = !1,
                M = !1,
                U = !1,
                w = !1;
            !o.isPhoneVerified() && !o.isStaff() && (L = r.verificationLevel >= E.VerificationLevels.LOW && !o.verified, M = r.verificationLevel >= E.VerificationLevels.VERY_HIGH, U = r.verificationLevel >= E.VerificationLevels.MEDIUM && C > 0, w = r.verificationLevel >= E.VerificationLevels.HIGH && P > 0);
            var k = [];
            if (w && k.push(P), U && k.push(C), k.length > 0) {
                ;
                t = setTimeout(function() {
                    return s.default.dispatch({
                        type: "GUILD_VERIFICATION_CHECK",
                        guildId: e
                    })
                }, (n = Math).max.apply(n, function(e) {
                    if (Array.isArray(e)) return m(e)
                }(i = k) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(i) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return m(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(e, t)
                    }
                }(i) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()))
            }
            S[e] = {
                notClaimed: D,
                notEmailVerified: L,
                notPhoneVerified: M,
                newAccount: U,
                newMember: w,
                canChat: !(D || L || M || U || w),
                accountDeadline: new Date(Date.now() + C),
                memberDeadline: new Date(Date.now() + P),
                timeoutRef: t
            }
        }
    }

    function g(e) {
        var t = S[e];
        null != t && clearTimeout(t.timeoutRef), delete S[e]
    }

    function A(e) {
        T.delete(e.guild.id), v(e.guild.id)
    }
    var b = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && h(e, t)
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
            var e, r, o, i = I(t);
            if (n) {
                var a = I(this).constructor;
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
            key: "initialize",
            value: function() {
                this.waitFor(d.default, _.default)
            }
        }, {
            key: "getCheck",
            value: function(e) {
                var t;
                return !T.has(e) && v(e), null !== (t = S[e]) && void 0 !== t ? t : O
            }
        }, {
            key: "canChatInGuild",
            value: function(e) {
                return this.getCheck(e).canChat
            }
        }], y(r.prototype, o), i && y(r, i), u
    }(u.default.Store);
    i = "GuildVerificationStore", (o = "displayName") in(r = b) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new b(s.default, {
        CONNECTION_OPEN: function() {
            for (var e in T.clear(), S) g(e)
        },
        CONNECTION_CLOSED: function() {
            c.default.keys(S).forEach(g)
        },
        CURRENT_USER_UPDATE: function() {
            T.clear()
        },
        GUILD_CREATE: A,
        GUILD_UPDATE: A,
        GUILD_DELETE: function(e) {
            g(e.guild.id)
        },
        GUILD_MEMBER_UPDATE: function(e) {
            var t, n = e.guildId;
            if (e.user.id !== (null === (t = _.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
            T.delete(n)
        },
        GUILD_VERIFICATION_CHECK: function(e) {
            v(e.guildId)
        }
    })
}