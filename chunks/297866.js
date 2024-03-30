function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var r = n("118044"),
        o = n("299529"),
        i = n("830721"),
        a = n("868615");

    function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

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
        return function(e) {
            if (Array.isArray(e)) return u(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return u(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function f(e, t) {
        return null == t || "" === t ? e : t
    }
    var d = function() {
        var e, t, n;

        function u(e, t) {
            var n, r, o, i;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), l(this, "userId", void 0), l(this, "guildId", void 0), l(this, "banner", void 0), l(this, "bio", void 0), l(this, "pronouns", void 0), l(this, "accentColor", void 0), l(this, "themeColors", void 0), l(this, "popoutAnimationParticleType", void 0), l(this, "profileEffectId", void 0), l(this, "_userProfile", void 0), l(this, "_guildMemberProfile", void 0), this.userId = e.userId, this.guildId = null == t ? void 0 : t.guildId, this.banner = null !== (n = null == t ? void 0 : t.banner) && void 0 !== n ? n : e.banner, this.bio = f(e.bio, null == t ? void 0 : t.bio), this.pronouns = f(e.pronouns, null == t ? void 0 : t.pronouns), this.accentColor = e.accentColor, this.themeColors = null !== (r = null == t ? void 0 : t.themeColors) && void 0 !== r ? r : e.themeColors, this.popoutAnimationParticleType = null !== (o = null == t ? void 0 : t.popoutAnimationParticleType) && void 0 !== o ? o : e.popoutAnimationParticleType, this.profileEffectId = null !== (i = null == t ? void 0 : t.profileEffectId) && void 0 !== i ? i : e.profileEffectId, this._userProfile = e, this._guildMemberProfile = t
        }
        return e = u, t = [{
            key: "premiumSince",
            get: function() {
                return this._userProfile.premiumSince
            }
        }, {
            key: "premiumGuildSince",
            get: function() {
                return this._userProfile.premiumGuildSince
            }
        }, {
            key: "premiumType",
            get: function() {
                return this._userProfile.premiumType
            }
        }, {
            key: "primaryColor",
            get: function() {
                var e, t;
                return null !== (t = null === (e = this.themeColors) || void 0 === e ? void 0 : e[0]) && void 0 !== t ? t : this.accentColor
            }
        }, {
            key: "canUsePremiumProfileCustomization",
            get: function() {
                return i.default.isPremiumAtLeast(this.premiumType, a.PremiumTypes.TIER_2)
            }
        }, {
            key: "canEditThemes",
            get: function() {
                return this.canUsePremiumProfileCustomization
            }
        }, {
            key: "application",
            get: function() {
                return this._userProfile.application
            }
        }, {
            key: "hasThemeColors",
            value: function() {
                var e, t;
                return (null === (e = this.themeColors) || void 0 === e ? void 0 : e[0]) != null || (null === (t = this.themeColors) || void 0 === t ? void 0 : t[1]) != null
            }
        }, {
            key: "hasPremiumCustomization",
            value: function() {
                return this.isUsingGuildMemberBanner() || this.isUsingGuildMemberBio() || null != this.banner || this.hasThemeColors() || null != this.popoutAnimationParticleType
            }
        }, {
            key: "hasFullProfile",
            value: function() {
                return void 0 !== this._userProfile && (null == this.guildId || void 0 !== this._guildMemberProfile)
            }
        }, {
            key: "isUsingGuildMemberBanner",
            value: function() {
                var e;
                return (null === (e = this._guildMemberProfile) || void 0 === e ? void 0 : e.banner) != null
            }
        }, {
            key: "isUsingGuildMemberBio",
            value: function() {
                var e, t;
                return (null === (e = this._guildMemberProfile) || void 0 === e ? void 0 : e.bio) != null && (null === (t = this._guildMemberProfile) || void 0 === t ? void 0 : t.bio) !== ""
            }
        }, {
            key: "isUsingGuildMemberPronouns",
            value: function() {
                var e, t;
                return (null === (e = this._guildMemberProfile) || void 0 === e ? void 0 : e.pronouns) != null && (null === (t = this._guildMemberProfile) || void 0 === t ? void 0 : t.pronouns) !== ""
            }
        }, {
            key: "getBannerURL",
            value: function(e) {
                var t = e.canAnimate,
                    n = e.size;
                return null != this.guildId && this.isUsingGuildMemberBanner() ? (0, o.getGuildMemberBannerURL)({
                    id: this.userId,
                    guildId: this.guildId,
                    banner: this.banner,
                    canAnimate: t,
                    size: n
                }) : (0, o.getUserBannerURL)({
                    id: this.userId,
                    banner: this.banner,
                    canAnimate: t,
                    size: n
                })
            }
        }, {
            key: "getPreviewBanner",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 480;
                return null != e ? e : null === e ? this.isUsingGuildMemberBanner() ? (0, o.getUserBannerURL)({
                    id: this.userId,
                    banner: this._userProfile.banner,
                    canAnimate: t,
                    size: n
                }) : null : this.getBannerURL({
                    canAnimate: t,
                    size: 480
                })
            }
        }, {
            key: "getPreviewBio",
            value: function(e) {
                var t;
                return (0, r.getProfilePreviewField)(e, null === (t = this._guildMemberProfile) || void 0 === t ? void 0 : t.bio, this._userProfile.bio, null != this.guildId)
            }
        }, {
            key: "getPreviewThemeColors",
            value: function(e) {
                return (null == e ? void 0 : e[0]) != null && (null == e ? void 0 : e[1]) != null ? e : void 0 !== e ? this._userProfile.themeColors : this.themeColors
            }
        }, {
            key: "getBadges",
            value: function() {
                var e, t, n;
                return c(null !== (t = this._userProfile.badges) && void 0 !== t ? t : []).concat(c(null !== (n = null === (e = this._guildMemberProfile) || void 0 === e ? void 0 : e.badges) && void 0 !== n ? n : []))
            }
        }, {
            key: "getLegacyUsername",
            value: function() {
                return this._userProfile.legacyUsername
            }
        }], s(e.prototype, t), n && s(e, n), u
    }()
}