function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    }), n("70102"), n("702976");
    var i, s = n("316693"),
        r = n("666038"),
        a = n("234251"),
        o = n("315102"),
        l = n("299039"),
        u = n("49111"),
        d = n("680894"),
        c = n("646718");
    new(i = class extends r.default {
        get createdAt() {
            return new Date(l.default.extractTimestamp(this.id))
        }
        hasVerifiedEmailOrPhone() {
            return !0 === this.verified || null != this.phone
        }
        getAvatarURL(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = null != e ? this.guildMemberAvatars[e] : void 0;
            return null != i && null != e ? o.default.getGuildMemberAvatarURLSimple({
                guildId: e,
                avatar: i,
                userId: this.id,
                canAnimate: n
            }) : o.default.getUserAvatarURL(this, n, t)
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
                if (null != i) return o.default.getAnimatableSourceWithFallback(t, t => o.default.makeSource(o.default.getGuildMemberAvatarURLSimple({
                    guildId: e,
                    avatar: i,
                    userId: this.id,
                    canAnimate: t,
                    size: n
                })))
            }
            return o.default.getAnimatableSourceWithFallback(t, e => o.default.getUserAvatarSource({
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
            let t = c.SKU_ID_PURCHASED_FLAGS[e];
            return null != t && this.hasPurchasedFlag(t)
        }
        hasHadPremium() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                t = this.hasHadSKU(c.PremiumSubscriptionSKUs.TIER_0),
                n = this.hasHadSKU(c.PremiumSubscriptionSKUs.TIER_1),
                i = this.hasHadSKU(c.PremiumSubscriptionSKUs.TIER_2);
            if (e === c.PremiumTypes.TIER_1) return n;
            if (e === c.PremiumTypes.TIER_2) return i;
            if (e === c.PremiumTypes.TIER_0) return t;
            else return t || n || i
        }
        hasFreePremium() {
            return this.isStaff() || this.hasFlag(u.UserFlags.PARTNER) || this.isStaffPersonal()
        }
        hasUrgentMessages() {
            return this.hasFlag(u.UserFlags.HAS_UNREAD_URGENT_MESSAGES)
        }
        isNonUserBot() {
            return this.isSystemUser() || this.bot && this.discriminator === u.NON_USER_BOT_DISCRIMINATOR
        }
        isLocalBot() {
            return this.bot && this.id === u.LOCAL_BOT_ID
        }
        isVerifiedBot() {
            return this.isSystemUser() || this.isLocalBot() || this.hasFlag(u.UserFlags.VERIFIED_BOT)
        }
        isSystemUser() {
            return !0 === this.system
        }
        isClyde() {
            return this.id === d.CLYDE_AI_USER_ID
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
            this.avatarDecorationData = (0, a.parseAvatarDecorationData)(e)
        }
        constructor(e) {
            var t, n, i, r, a, o, l, d, c, f, _, E, h, g, m, p, S, v, T, I, A, C, y, N, R, O, D, P, L;
            super(), this.hasFlag = e => !1, this.isStaff = () => !1, this.isStaffPersonal = () => !1, this.hasAnyStaffLevel = () => !1;
            let M = null !== (n = e.premium_type) && void 0 !== n ? n : e.premiumType;
            this.id = e.id, this.username = null !== (i = e.username) && void 0 !== i ? i : "", this.discriminator = null !== (r = e.discriminator) && void 0 !== r ? r : u.NON_USER_BOT_DISCRIMINATOR, this.avatar = null !== (a = e.avatar) && void 0 !== a ? a : null, this.avatarDecoration = null !== (o = e.avatar_decoration_data) && void 0 !== o ? o : e.avatarDecorationData, this.email = null !== (l = e.email) && void 0 !== l ? l : null, this.verified = null !== (d = e.verified) && void 0 !== d && d, this.bot = null !== (c = e.bot) && void 0 !== c && c, this.system = null !== (f = e.system) && void 0 !== f && f, this.mfaEnabled = null !== (E = null !== (_ = e.mfa_enabled) && void 0 !== _ ? _ : e.mfaEnabled) && void 0 !== E && E, this.mobile = null !== (h = e.mobile) && void 0 !== h && h, this.desktop = null !== (g = e.desktop) && void 0 !== g && g, this.premiumType = M === u.PREMIUM_TYPE_NONE ? null : M, this.flags = null !== (m = e.flags) && void 0 !== m ? m : 0, this.publicFlags = null !== (S = null !== (p = e.public_flags) && void 0 !== p ? p : e.publicFlags) && void 0 !== S ? S : 0, this.purchasedFlags = null !== (T = null !== (v = e.purchased_flags) && void 0 !== v ? v : e.purchasedFlags) && void 0 !== T ? T : 0, this.premiumUsageFlags = null !== (A = null !== (I = e.premium_usage_flags) && void 0 !== I ? I : e.premiumUsageFlags) && void 0 !== A ? A : 0, this.phone = null !== (C = e.phone) && void 0 !== C ? C : null, this.nsfwAllowed = null !== (y = e.nsfw_allowed) && void 0 !== y ? y : e.nsfwAllowed, this.guildMemberAvatars = null !== (N = e.guildMemberAvatars) && void 0 !== N ? N : {}, this.hasBouncedEmail = null !== (O = null !== (R = e.has_bounced_email) && void 0 !== R ? R : e.hasBouncedEmail) && void 0 !== O && O, this.personalConnectionId = null !== (P = null !== (D = e.personal_connection_id) && void 0 !== D ? D : e.personalConnectionId) && void 0 !== P ? P : null, this.globalName = null !== (L = e.global_name) && void 0 !== L ? L : e.globalName, this.banner = e.banner, Object.defineProperties(this, {
                hasFlag: {
                    writable: !1,
                    configurable: !1,
                    value: e => {
                        if (e <= 1073741824) return ((this.flags | this.publicFlags) & e) === e;
                        let t = s.default.deserialize(this.flags),
                            n = s.default.deserialize(this.publicFlags),
                            i = s.default.deserialize(e);
                        return s.default.has(s.default.combine(t, n), i)
                    }
                },
                isStaff: {
                    writable: !1,
                    configurable: !1,
                    value: () => this.hasFlag(u.UserFlags.STAFF)
                },
                isStaffPersonal: {
                    writable: !1,
                    configurable: !1,
                    value: () => !this.hasFlag(u.UserFlags.STAFF) && null != this.personalConnectionId
                },
                hasAnyStaffLevel: {
                    writable: !1,
                    configurable: !1,
                    value: () => this.hasFlag(u.UserFlags.STAFF) || this.hasFlag(u.UserFlags.COLLABORATOR) || this.hasFlag(u.UserFlags.RESTRICTED_COLLABORATOR)
                }
            }), (null === (t = this.globalName) || void 0 === t ? void 0 : t.length) === 0 && (this.globalName = null)
        }
    })({
        id: "0"
    })
}