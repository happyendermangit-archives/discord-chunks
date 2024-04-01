function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    }), n("411104"), n("789020");
    var i = n("149765"),
        r = n("81825"),
        s = n("864106"),
        a = n("768581"),
        o = n("709054"),
        l = n("981631"),
        u = n("377668"),
        d = n("474936");

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class c extends r.default {
        get createdAt() {
            return new Date(o.default.extractTimestamp(this.id))
        }
        hasVerifiedEmailOrPhone() {
            return !0 === this.verified || null != this.phone
        }
        getAvatarURL(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = null != e ? this.guildMemberAvatars[e] : void 0;
            return null != i && null != e ? a.default.getGuildMemberAvatarURLSimple({
                guildId: e,
                avatar: i,
                userId: this.id,
                canAnimate: n
            }) : a.default.getUserAvatarURL(this, n, t)
        }
        addGuildAvatarHash(e, t) {
            if (this.guildMemberAvatars[e] === t) return this;
            let n = {
                ...this.guildMemberAvatars,
                [e]: t
            };
            return this.merge({
                guildMemberAvatars: n
            })
        }
        removeGuildAvatarHash(e) {
            if (void 0 === this.guildMemberAvatars[e]) return this;
            let t = {
                ...this.guildMemberAvatars,
                [e]: void 0
            };
            return this.merge({
                guildMemberAvatars: t
            })
        }
        getAvatarSource(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 ? arguments[2] : void 0;
            if (null != e) {
                let i = this.guildMemberAvatars[e];
                if (null != i) return a.default.getAnimatableSourceWithFallback(t, t => a.default.makeSource(a.default.getGuildMemberAvatarURLSimple({
                    guildId: e,
                    avatar: i,
                    userId: this.id,
                    canAnimate: t,
                    size: n
                })))
            }
            return a.default.getAnimatableSourceWithFallback(t, e => a.default.getUserAvatarSource({
                id: this.id,
                avatar: this.avatar,
                discriminator: this.discriminator,
                bot: this.bot
            }, e, n))
        }
        isClaimed() {
            return null != this.email || null != this.phone
        }
        isPhoneVerified() {
            return null != this.phone
        }
        toString() {
            return "" !== this.username ? this.username : "???"
        }
        get tag() {
            return "".concat(this.username, "#").concat("".concat(this.discriminator).padStart(4, "0"))
        }
        hasPurchasedFlag(e) {
            return (this.purchasedFlags & e) === e
        }
        hasPremiumUsageFlag(e) {
            return (this.premiumUsageFlags & e) === e
        }
        hasHadSKU(e) {
            let t = d.SKU_ID_PURCHASED_FLAGS[e];
            return null != t && this.hasPurchasedFlag(t)
        }
        hasHadPremium() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                t = this.hasHadSKU(d.PremiumSubscriptionSKUs.TIER_0),
                n = this.hasHadSKU(d.PremiumSubscriptionSKUs.TIER_1),
                i = this.hasHadSKU(d.PremiumSubscriptionSKUs.TIER_2);
            if (e === d.PremiumTypes.TIER_1) return n;
            if (e === d.PremiumTypes.TIER_2) return i;
            if (e === d.PremiumTypes.TIER_0) return t;
            else return t || n || i
        }
        hasFreePremium() {
            return this.isStaff() || this.hasFlag(l.UserFlags.PARTNER) || this.isStaffPersonal()
        }
        hasUrgentMessages() {
            return this.hasFlag(l.UserFlags.HAS_UNREAD_URGENT_MESSAGES)
        }
        isNonUserBot() {
            return this.isSystemUser() || this.bot && this.discriminator === l.NON_USER_BOT_DISCRIMINATOR
        }
        isLocalBot() {
            return this.bot && this.id === l.LOCAL_BOT_ID
        }
        isVerifiedBot() {
            return this.isSystemUser() || this.isLocalBot() || this.hasFlag(l.UserFlags.VERIFIED_BOT)
        }
        isSystemUser() {
            return !0 === this.system
        }
        isClyde() {
            return this.id === u.CLYDE_AI_USER_ID
        }
        hasAvatarForGuild(e) {
            return null != e && null != this.guildMemberAvatars[e]
        }
        isPomelo() {
            return "0" === this.discriminator
        }
        get avatarDecoration() {
            return this.avatarDecorationData
        }
        set avatarDecoration(e) {
            this.avatarDecorationData = (0, s.parseAvatarDecorationData)(e)
        }
        constructor(e) {
            var t, n, r, s, a, o, u, d, c, E, I, T, f, S, h, A, m, N, O, p, R, C, g, L, D, v, M, y, P;
            super(), _(this, "id", void 0), _(this, "username", void 0), _(this, "discriminator", void 0), _(this, "avatar", void 0), _(this, "avatarDecorationData", void 0), _(this, "banner", void 0), _(this, "email", void 0), _(this, "verified", void 0), _(this, "bot", void 0), _(this, "system", void 0), _(this, "mfaEnabled", void 0), _(this, "mobile", void 0), _(this, "desktop", void 0), _(this, "premiumType", void 0), _(this, "flags", void 0), _(this, "publicFlags", void 0), _(this, "purchasedFlags", void 0), _(this, "premiumUsageFlags", void 0), _(this, "phone", void 0), _(this, "nsfwAllowed", void 0), _(this, "guildMemberAvatars", void 0), _(this, "hasBouncedEmail", void 0), _(this, "personalConnectionId", void 0), _(this, "globalName", void 0), _(this, "hasFlag", e => !1), _(this, "isStaff", () => !1), _(this, "isStaffPersonal", () => !1), _(this, "hasAnyStaffLevel", () => !1);
            let U = null !== (n = e.premium_type) && void 0 !== n ? n : e.premiumType;
            this.id = e.id, this.username = null !== (r = e.username) && void 0 !== r ? r : "", this.discriminator = null !== (s = e.discriminator) && void 0 !== s ? s : l.NON_USER_BOT_DISCRIMINATOR, this.avatar = null !== (a = e.avatar) && void 0 !== a ? a : null, this.avatarDecoration = null !== (o = e.avatar_decoration_data) && void 0 !== o ? o : e.avatarDecorationData, this.email = null !== (u = e.email) && void 0 !== u ? u : null, this.verified = null !== (d = e.verified) && void 0 !== d && d, this.bot = null !== (c = e.bot) && void 0 !== c && c, this.system = null !== (E = e.system) && void 0 !== E && E, this.mfaEnabled = null !== (T = null !== (I = e.mfa_enabled) && void 0 !== I ? I : e.mfaEnabled) && void 0 !== T && T, this.mobile = null !== (f = e.mobile) && void 0 !== f && f, this.desktop = null !== (S = e.desktop) && void 0 !== S && S, this.premiumType = U === l.PREMIUM_TYPE_NONE ? null : U, this.flags = null !== (h = e.flags) && void 0 !== h ? h : 0, this.publicFlags = null !== (m = null !== (A = e.public_flags) && void 0 !== A ? A : e.publicFlags) && void 0 !== m ? m : 0, this.purchasedFlags = null !== (O = null !== (N = e.purchased_flags) && void 0 !== N ? N : e.purchasedFlags) && void 0 !== O ? O : 0, this.premiumUsageFlags = null !== (R = null !== (p = e.premium_usage_flags) && void 0 !== p ? p : e.premiumUsageFlags) && void 0 !== R ? R : 0, this.phone = null !== (C = e.phone) && void 0 !== C ? C : null, this.nsfwAllowed = null !== (g = e.nsfw_allowed) && void 0 !== g ? g : e.nsfwAllowed, this.guildMemberAvatars = null !== (L = e.guildMemberAvatars) && void 0 !== L ? L : {}, this.hasBouncedEmail = null !== (v = null !== (D = e.has_bounced_email) && void 0 !== D ? D : e.hasBouncedEmail) && void 0 !== v && v, this.personalConnectionId = null !== (y = null !== (M = e.personal_connection_id) && void 0 !== M ? M : e.personalConnectionId) && void 0 !== y ? y : null, this.globalName = null !== (P = e.global_name) && void 0 !== P ? P : e.globalName, this.banner = e.banner, Object.defineProperties(this, {
                hasFlag: {
                    writable: !1,
                    configurable: !1,
                    value: e => {
                        if (e <= 1073741824) return ((this.flags | this.publicFlags) & e) === e;
                        let t = i.deserialize(this.flags),
                            n = i.deserialize(this.publicFlags),
                            r = i.deserialize(e);
                        return i.has(i.combine(t, n), r)
                    }
                },
                isStaff: {
                    writable: !1,
                    configurable: !1,
                    value: () => this.hasFlag(l.UserFlags.STAFF)
                },
                isStaffPersonal: {
                    writable: !1,
                    configurable: !1,
                    value: () => !this.hasFlag(l.UserFlags.STAFF) && null != this.personalConnectionId
                },
                hasAnyStaffLevel: {
                    writable: !1,
                    configurable: !1,
                    value: () => this.hasFlag(l.UserFlags.STAFF) || this.hasFlag(l.UserFlags.COLLABORATOR) || this.hasFlag(l.UserFlags.RESTRICTED_COLLABORATOR)
                }
            }), (null === (t = this.globalName) || void 0 === t ? void 0 : t.length) === 0 && (this.globalName = null)
        }
    }
    new c({
        id: "0"
    })
}