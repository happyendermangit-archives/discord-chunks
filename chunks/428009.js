function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    });
    var r = n("22287"),
        o = n("864842"),
        i = n("272665"),
        a = n("299529"),
        u = n("523018"),
        s = n("281767"),
        l = n("142680"),
        c = n("868615");

    function f(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function d(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function E(e) {
        return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function p(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                _(e, t, n[t])
            })
        }
        return e
    }

    function m(e, t) {
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

    function y(e, t) {
        return (y = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var I = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && y(e, t)
        }(T, e);
        var t, n, o, I, h, O = (t = T, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = E(t);
            if (n) {
                var a = E(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : f(e)
        });

        function T(e) {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, T), _(f(t = O.call(this)), "id", void 0), _(f(t), "username", void 0), _(f(t), "discriminator", void 0), _(f(t), "avatar", void 0), _(f(t), "avatarDecorationData", void 0), _(f(t), "banner", void 0), _(f(t), "email", void 0), _(f(t), "verified", void 0), _(f(t), "bot", void 0), _(f(t), "system", void 0), _(f(t), "mfaEnabled", void 0), _(f(t), "mobile", void 0), _(f(t), "desktop", void 0), _(f(t), "premiumType", void 0), _(f(t), "flags", void 0), _(f(t), "publicFlags", void 0), _(f(t), "purchasedFlags", void 0), _(f(t), "premiumUsageFlags", void 0), _(f(t), "phone", void 0), _(f(t), "nsfwAllowed", void 0), _(f(t), "guildMemberAvatars", void 0), _(f(t), "hasBouncedEmail", void 0), _(f(t), "personalConnectionId", void 0), _(f(t), "globalName", void 0), _(f(t), "hasFlag", function(e) {
                return !1
            }), _(f(t), "isStaff", function() {
                return !1
            }), _(f(t), "isStaffPersonal", function() {
                return !1
            }), _(f(t), "hasAnyStaffLevel", function() {
                return !1
            });
            var t, n, o, i, a, u, l, c, d, E, p, m, y, I, h, S, v, g, A, b, N, R, C, P, D, L, M, U, w, k, G = null !== (o = e.premium_type) && void 0 !== o ? o : e.premiumType;
            return t.id = e.id, t.username = null !== (i = e.username) && void 0 !== i ? i : "", t.discriminator = null !== (a = e.discriminator) && void 0 !== a ? a : s.NON_USER_BOT_DISCRIMINATOR, t.avatar = null !== (u = e.avatar) && void 0 !== u ? u : null, t.avatarDecoration = null !== (l = e.avatar_decoration_data) && void 0 !== l ? l : e.avatarDecorationData, t.email = null !== (c = e.email) && void 0 !== c ? c : null, t.verified = null !== (d = e.verified) && void 0 !== d && d, t.bot = null !== (E = e.bot) && void 0 !== E && E, t.system = null !== (p = e.system) && void 0 !== p && p, t.mfaEnabled = null !== (y = null !== (m = e.mfa_enabled) && void 0 !== m ? m : e.mfaEnabled) && void 0 !== y && y, t.mobile = null !== (I = e.mobile) && void 0 !== I && I, t.desktop = null !== (h = e.desktop) && void 0 !== h && h, t.premiumType = G === s.PREMIUM_TYPE_NONE ? null : G, t.flags = null !== (S = e.flags) && void 0 !== S ? S : 0, t.publicFlags = null !== (g = null !== (v = e.public_flags) && void 0 !== v ? v : e.publicFlags) && void 0 !== g ? g : 0, t.purchasedFlags = null !== (b = null !== (A = e.purchased_flags) && void 0 !== A ? A : e.purchasedFlags) && void 0 !== b ? b : 0, t.premiumUsageFlags = null !== (R = null !== (N = e.premium_usage_flags) && void 0 !== N ? N : e.premiumUsageFlags) && void 0 !== R ? R : 0, t.phone = null !== (C = e.phone) && void 0 !== C ? C : null, t.nsfwAllowed = null !== (P = e.nsfw_allowed) && void 0 !== P ? P : e.nsfwAllowed, t.guildMemberAvatars = null !== (D = e.guildMemberAvatars) && void 0 !== D ? D : {}, t.hasBouncedEmail = null !== (M = null !== (L = e.has_bounced_email) && void 0 !== L ? L : e.hasBouncedEmail) && void 0 !== M && M, t.personalConnectionId = null !== (w = null !== (U = e.personal_connection_id) && void 0 !== U ? U : e.personalConnectionId) && void 0 !== w ? w : null, t.globalName = null !== (k = e.global_name) && void 0 !== k ? k : e.globalName, t.banner = e.banner, Object.defineProperties(f(t), {
                hasFlag: {
                    writable: !1,
                    configurable: !1,
                    value: function(e) {
                        if (e <= 1073741824) return ((t.flags | t.publicFlags) & e) === e;
                        var n = r.deserialize(t.flags),
                            o = r.deserialize(t.publicFlags),
                            i = r.deserialize(e);
                        return r.has(r.combine(n, o), i)
                    }
                },
                isStaff: {
                    writable: !1,
                    configurable: !1,
                    value: function() {
                        return t.hasFlag(s.UserFlags.STAFF)
                    }
                },
                isStaffPersonal: {
                    writable: !1,
                    configurable: !1,
                    value: function() {
                        return !t.hasFlag(s.UserFlags.STAFF) && null != t.personalConnectionId
                    }
                },
                hasAnyStaffLevel: {
                    writable: !1,
                    configurable: !1,
                    value: function() {
                        return t.hasFlag(s.UserFlags.STAFF) || t.hasFlag(s.UserFlags.COLLABORATOR) || t.hasFlag(s.UserFlags.RESTRICTED_COLLABORATOR)
                    }
                }
            }), (null === (n = t.globalName) || void 0 === n ? void 0 : n.length) === 0 && (t.globalName = null), t
        }
        return o = T, I = [{
            key: "createdAt",
            get: function() {
                return new Date(u.default.extractTimestamp(this.id))
            }
        }, {
            key: "hasVerifiedEmailOrPhone",
            value: function() {
                return !0 === this.verified || null != this.phone
            }
        }, {
            key: "getAvatarURL",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = null != e ? this.guildMemberAvatars[e] : void 0;
                return null != r && null != e ? a.default.getGuildMemberAvatarURLSimple({
                    guildId: e,
                    avatar: r,
                    userId: this.id,
                    canAnimate: n
                }) : a.default.getUserAvatarURL(this, n, t)
            }
        }, {
            key: "addGuildAvatarHash",
            value: function(e, t) {
                if (this.guildMemberAvatars[e] === t) return this;
                var n = m(p({}, this.guildMemberAvatars), _({}, e, t));
                return this.merge({
                    guildMemberAvatars: n
                })
            }
        }, {
            key: "removeGuildAvatarHash",
            value: function(e) {
                if (void 0 === this.guildMemberAvatars[e]) return this;
                var t = m(p({}, this.guildMemberAvatars), _({}, e, void 0));
                return this.merge({
                    guildMemberAvatars: t
                })
            }
        }, {
            key: "getAvatarSource",
            value: function(e) {
                var t = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = arguments.length > 2 ? arguments[2] : void 0;
                if (null != e) {
                    var o = this.guildMemberAvatars[e];
                    if (null != o) return a.default.getAnimatableSourceWithFallback(n, function(n) {
                        return a.default.makeSource(a.default.getGuildMemberAvatarURLSimple({
                            guildId: e,
                            avatar: o,
                            userId: t.id,
                            canAnimate: n,
                            size: r
                        }))
                    })
                }
                return a.default.getAnimatableSourceWithFallback(n, function(e) {
                    return a.default.getUserAvatarSource({
                        id: t.id,
                        avatar: t.avatar,
                        discriminator: t.discriminator,
                        bot: t.bot
                    }, e, r)
                })
            }
        }, {
            key: "isClaimed",
            value: function() {
                return null != this.email || null != this.phone
            }
        }, {
            key: "isPhoneVerified",
            value: function() {
                return null != this.phone
            }
        }, {
            key: "toString",
            value: function() {
                return "" !== this.username ? this.username : "???"
            }
        }, {
            key: "tag",
            get: function() {
                return "".concat(this.username, "#").concat("".concat(this.discriminator).padStart(4, "0"))
            }
        }, {
            key: "hasPurchasedFlag",
            value: function(e) {
                return (this.purchasedFlags & e) === e
            }
        }, {
            key: "hasPremiumUsageFlag",
            value: function(e) {
                return (this.premiumUsageFlags & e) === e
            }
        }, {
            key: "hasHadSKU",
            value: function(e) {
                var t = c.SKU_ID_PURCHASED_FLAGS[e];
                return null != t && this.hasPurchasedFlag(t)
            }
        }, {
            key: "hasHadPremium",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = this.hasHadSKU(c.PremiumSubscriptionSKUs.TIER_0),
                    n = this.hasHadSKU(c.PremiumSubscriptionSKUs.TIER_1),
                    r = this.hasHadSKU(c.PremiumSubscriptionSKUs.TIER_2);
                if (e === c.PremiumTypes.TIER_1) return n;
                if (e === c.PremiumTypes.TIER_2) return r;
                if (e === c.PremiumTypes.TIER_0) return t;
                else return t || n || r
            }
        }, {
            key: "hasFreePremium",
            value: function() {
                return this.isStaff() || this.hasFlag(s.UserFlags.PARTNER) || this.isStaffPersonal()
            }
        }, {
            key: "hasUrgentMessages",
            value: function() {
                return this.hasFlag(s.UserFlags.HAS_UNREAD_URGENT_MESSAGES)
            }
        }, {
            key: "isNonUserBot",
            value: function() {
                return this.isSystemUser() || this.bot && this.discriminator === s.NON_USER_BOT_DISCRIMINATOR
            }
        }, {
            key: "isLocalBot",
            value: function() {
                return this.bot && this.id === s.LOCAL_BOT_ID
            }
        }, {
            key: "isVerifiedBot",
            value: function() {
                return this.isSystemUser() || this.isLocalBot() || this.hasFlag(s.UserFlags.VERIFIED_BOT)
            }
        }, {
            key: "isSystemUser",
            value: function() {
                return !0 === this.system
            }
        }, {
            key: "isClyde",
            value: function() {
                return this.id === l.CLYDE_AI_USER_ID
            }
        }, {
            key: "hasAvatarForGuild",
            value: function(e) {
                return null != e && null != this.guildMemberAvatars[e]
            }
        }, {
            key: "isPomelo",
            value: function() {
                return "0" === this.discriminator
            }
        }, {
            key: "avatarDecoration",
            get: function() {
                return this.avatarDecorationData
            },
            set: function(e) {
                this.avatarDecorationData = (0, i.parseAvatarDecorationData)(e)
            }
        }], d(o.prototype, I), h && d(o, h), T
    }(o.default);
    new I({
        id: "0"
    })
}