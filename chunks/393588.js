function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GuildRecordWithRoles: function() {
            return T
        },
        default: function() {
            return O
        }
    });
    var r = n("864842"),
        o = n("299529"),
        i = n("523018"),
        a = n("778513"),
        u = n("281767"),
        s = n("68735"),
        l = n("868615");

    function c(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function f(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
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

    function E(e, t, n) {
        return (E = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
            var r = function(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = p(e)););
                return e
            }(e, t);
            if (r) {
                var o = Object.getOwnPropertyDescriptor(r, t);
                return o.get ? o.get.call(n || e) : o.value
            }
        })(e, t, n || e)
    }

    function p(e) {
        return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function m(e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && I(e, t)
    }

    function y(e, t) {
        return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
    }

    function I(e, t) {
        return (I = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function h(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var n, r, o, i = p(e);
            if (t) {
                var a = p(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return n = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : c(n)
        }
    }
    var O = function(e) {
            m(O, e);
            var t, n, r, I = h(O);

            function O(e) {
                f(this, O), _(c(t = I.call(this)), "id", void 0), _(c(t), "name", void 0), _(c(t), "description", void 0), _(c(t), "ownerId", void 0), _(c(t), "icon", void 0), _(c(t), "splash", void 0), _(c(t), "banner", void 0), _(c(t), "homeHeader", void 0), _(c(t), "preferredLocale", void 0), _(c(t), "features", void 0), _(c(t), "afkChannelId", void 0), _(c(t), "afkTimeout", void 0), _(c(t), "systemChannelId", void 0), _(c(t), "verificationLevel", void 0), _(c(t), "joinedAt", void 0), _(c(t), "defaultMessageNotifications", void 0), _(c(t), "mfaLevel", void 0), _(c(t), "application_id", void 0), _(c(t), "explicitContentFilter", void 0), _(c(t), "vanityURLCode", void 0), _(c(t), "premiumTier", void 0), _(c(t), "premiumSubscriberCount", void 0), _(c(t), "premiumProgressBarEnabled", void 0), _(c(t), "systemChannelFlags", void 0), _(c(t), "rulesChannelId", void 0), _(c(t), "safetyAlertsChannelId", void 0), _(c(t), "discoverySplash", void 0), _(c(t), "publicUpdatesChannelId", void 0), _(c(t), "maxStageVideoChannelUsers", void 0), _(c(t), "maxVideoChannelUsers", void 0), _(c(t), "maxMembers", void 0), _(c(t), "nsfwLevel", void 0), _(c(t), "hubType", void 0), _(c(t), "latestOnboardingQuestionId", void 0);
                var t, n, r, o = y(e.features, Set) ? e.features : new Set(Array.from(e.features || []));
                return t.id = e.id, t.name = e.name || "", t.description = e.description || null, t.ownerId = e.ownerId || null, t.icon = e.icon || null, t.splash = e.splash || null, t.banner = e.banner || null, t.homeHeader = e.homeHeader || null, t.features = o, t.preferredLocale = e.preferredLocale || "en-US", t.afkChannelId = e.afkChannelId || null, t.afkTimeout = e.afkTimeout, t.systemChannelId = e.systemChannelId || null, t.verificationLevel = e.verificationLevel || u.VerificationLevels.NONE, t.joinedAt = y(e.joinedAt, Date) ? e.joinedAt : new Date(e.joinedAt), t.defaultMessageNotifications = e.defaultMessageNotifications || u.UserNotificationSettings.ALL_MESSAGES, t.mfaLevel = e.mfaLevel || u.MFALevels.NONE, t.application_id = e.application_id || null, t.explicitContentFilter = e.explicitContentFilter || u.GuildExplicitContentFilterTypes.DISABLED, t.vanityURLCode = e.vanityURLCode || void 0, t.premiumTier = e.premiumTier || u.BoostedGuildTiers.NONE, t.premiumSubscriberCount = e.premiumSubscriberCount || 0, t.premiumProgressBarEnabled = e.premiumProgressBarEnabled || !1, t.systemChannelFlags = e.systemChannelFlags, t.discoverySplash = e.discoverySplash || null, t.rulesChannelId = e.rulesChannelId || null, t.safetyAlertsChannelId = e.safetyAlertsChannelId || null, t.publicUpdatesChannelId = e.publicUpdatesChannelId || null, t.maxStageVideoChannelUsers = e.maxStageVideoChannelUsers || -1, t.maxVideoChannelUsers = e.maxVideoChannelUsers || -1, t.maxMembers = e.maxMembers || -1, t.nsfwLevel = null !== (n = e.nsfwLevel) && void 0 !== n ? n : u.GuildNSFWContentLevel.DEFAULT, t.hubType = e.hubType, t.latestOnboardingQuestionId = null !== (r = e.latestOnboardingQuestionId) && void 0 !== r ? r : null, t
            }
            return t = O, n = [{
                key: "merge",
                value: function(e) {
                    var t = e.features;
                    if (null != t) {
                        var n = new Set(t);
                        if (n.size === this.features.size) {
                            var r = !1,
                                o = !0,
                                i = !1,
                                a = void 0;
                            try {
                                for (var u, s = n[Symbol.iterator](); !(o = (u = s.next()).done); o = !0) {
                                    var l = u.value;
                                    if (!this.features.has(l)) {
                                        r = !0;
                                        break
                                    }
                                }
                            } catch (e) {
                                i = !0, a = e
                            } finally {
                                try {
                                    !o && null != s.return && s.return()
                                } finally {
                                    if (i) throw a
                                }
                            }!r && (e.features = this.features)
                        }
                    }
                    return E(p(O.prototype), "merge", this).call(this, e)
                }
            }, {
                key: "getSafetyAlertsChannelId",
                value: function() {
                    var e;
                    return null !== (e = this.safetyAlertsChannelId) && void 0 !== e ? e : this.publicUpdatesChannelId
                }
            }, {
                key: "getIconURL",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return o.default.getGuildIconURL({
                        id: this.id,
                        size: e,
                        icon: this.icon,
                        canAnimate: t
                    })
                }
            }, {
                key: "getIconSource",
                value: function(e) {
                    var t = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return o.default.getAnimatableSourceWithFallback(n, function(n) {
                        return o.default.getGuildIconSource({
                            id: t.id,
                            size: e,
                            icon: t.icon,
                            canAnimate: n
                        })
                    })
                }
            }, {
                key: "getApplicationId",
                value: function() {
                    return this.application_id
                }
            }, {
                key: "toString",
                value: function() {
                    var e;
                    return null !== (e = this.name) && void 0 !== e ? e : ""
                }
            }, {
                key: "acronym",
                get: function() {
                    return (0, a.getAcronym)(this.name)
                }
            }, {
                key: "isOwner",
                value: function(e) {
                    var t = "string" == typeof e ? e : null != e ? e.id : null;
                    return this.ownerId === t
                }
            }, {
                key: "isOwnerWithRequiredMfaLevel",
                value: function(e) {
                    return (!!e.mfaEnabled || this.mfaLevel !== u.MFALevels.ELEVATED) && this.isOwner(e)
                }
            }, {
                key: "isNew",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 7,
                        t = i.default.extractTimestamp(this.id);
                    return Date.now() - t < 864e5 * e
                }
            }, {
                key: "isLurker",
                value: function() {
                    return null == this.joinedAt
                }
            }, {
                key: "hasFeature",
                value: function(e) {
                    return this.features.has(e)
                }
            }, {
                key: "getEveryoneRoleId",
                value: function() {
                    return i.default.castGuildIdAsEveryoneGuildRoleId(this.id)
                }
            }, {
                key: "getMaxEmojiSlots",
                value: function() {
                    return Math.max(this.hasFeature(u.GuildFeatures.MORE_EMOJI) ? 200 : s.EMOJI_MAX_SLOTS, l.BoostedGuildFeatures[this.premiumTier].limits.emoji)
                }
            }, {
                key: "getMaxRoleSubscriptionEmojiSlots",
                value: function() {
                    return 25
                }
            }, {
                key: "getMaxSoundboardSlots",
                value: function() {
                    return l.BoostedGuildFeatures[this.premiumTier].limits.soundboardSounds
                }
            }, {
                key: "isCommunity",
                value: function() {
                    return this.hasFeature(u.GuildFeatures.COMMUNITY)
                }
            }, {
                key: "hasVerificationGate",
                value: function() {
                    return this.hasFeature(u.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) && (this.hasFeature(u.GuildFeatures.COMMUNITY) || this.hasFeature(u.GuildFeatures.CLAN))
                }
            }, {
                key: "hasCommunityInfoSubheader",
                value: function() {
                    return this.hasFeature(u.GuildFeatures.COMMUNITY) && this.hasFeature(u.GuildFeatures.DISCOVERABLE)
                }
            }, {
                key: "canHaveRaidActivityAlerts",
                value: function() {
                    return !this.hasFeature(u.GuildFeatures.COMMUNITY) && this.hasFeature(u.GuildFeatures.NON_COMMUNITY_RAID_ALERTS) || this.hasFeature(u.GuildFeatures.COMMUNITY) && !this.hasFeature(u.GuildFeatures.RAID_ALERTS_DISABLED)
                }
            }, {
                key: "updateJoinedAt",
                value: function(e) {
                    return this.set("joinedAt", "string" == typeof e ? new Date(e) : e)
                }
            }], d(t.prototype, n), r && d(t, r), O
        }(r.default),
        T = function(e) {
            m(n, e);
            var t = h(n);

            function n(e) {
                var r, o;
                return f(this, n), _(c(r = t.call(this, e)), "roles", void 0), r.roles = null !== (o = e.roles) && void 0 !== o ? o : {}, r
            }
            return n
        }(O)
}