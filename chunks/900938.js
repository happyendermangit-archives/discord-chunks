function(e, t, n) {
    "use strict";
    let i, s, r, a, o, l, u, d;
    n.r(t), n.d(t, {
        default: function() {
            return er
        }
    }), n("222007"), n("808653");
    var c = n("917351"),
        f = n.n(c),
        _ = n("866227"),
        h = n.n(_),
        E = n("446674"),
        g = n("872717"),
        m = n("95410"),
        p = n("913144"),
        S = n("851387"),
        v = n("233069"),
        T = n("813006"),
        I = n("517763"),
        C = n("766274"),
        A = n("305961"),
        y = n("697218"),
        N = n("299039"),
        R = n("468349"),
        O = n("970700"),
        D = n("49111"),
        P = n("447621"),
        L = n("69741");
    let M = ["name", "description", "icon", "splash", "banner", "homeHeader", "afkChannelId", "afkTimeout", "systemChannelId", "verificationLevel", "defaultMessageNotifications", "explicitContentFilter", "features", "systemChannelFlags", "preferredLocale", "rulesChannelId", "safetyAlertsChannelId", "discoverySplash", "publicUpdatesChannelId", "premiumProgressBarEnabled"],
        b = new Set(["icon", "splash", "banner", "discoverySplash", "homeHeader"]),
        U = !1,
        w = D.FormStates.CLOSED,
        k = {},
        V = !1,
        G = null,
        F = null,
        x = 0,
        B = D.MFALevels.NONE,
        H = null,
        Y = {
            primaryCategoryId: P.DEFAULT_DISCOVERY_CATEGORY_ID,
            secondaryCategoryIds: [],
            keywords: [],
            emojiDiscoverabilityEnabled: P.DEFAULT_EMOJI_DISCOVERABILITY_SETTING,
            partnerActionedTimestamp: null,
            partnerApplicationTimestamp: null,
            isPublished: !1,
            reasonsToJoin: [],
            socialLinks: [],
            about: ""
        },
        j = !1,
        W = Y,
        K = Y,
        z = null,
        q = 0,
        X = null,
        Q = null,
        Z = null;

    function J(e) {
        if (null == o || null == a || a.id !== e) return !1;
        let t = A.default.getGuild(e);
        return null != t && (a === o ? o = a = t : (a = t, o = o.set("roles", a.roles)), !0)
    }

    function $(e) {
        var t;
        let {
            guildId: n,
            section: s,
            subsection: r,
            location: u
        } = e, c = A.default.getGuild(n);
        if (null == c) return ee();
        a = o = c, w = D.FormStates.OPEN, k = {}, l = N.default.castGuildIdAsEveryoneGuildRoleId(n), B = o.mfaLevel, K = W, d = null, H = u, et({
            section: null !== (t = null != s ? s : i) && void 0 !== t ? t : D.GuildSettingsSections.OVERVIEW,
            subsection: null != r ? r : null
        })
    }

    function ee() {
        U = !1, w = D.FormStates.CLOSED, a = o = null, V = !1, G = null, F = null, x = 0, z = null, Q = null, Z = null, i = null, s = null, r = null, B = D.MFALevels.NONE, u = void 0
    }

    function et(e) {
        if (null == o) return !1;
        let t = i;
        if (i = e.section, s = e.subsection, i === D.GuildSettingsSections.BANS) {
            let {
                enabled: e
            } = R.GuildSettingsBansNewExperiment.getCurrentConfig({
                guildId: o.id,
                location: "7f0c91_1"
            });
            !e && S.default.fetchGuildBans(o.id)
        } else if (i === D.GuildSettingsSections.INSTANT_INVITES) g.default.get({
            url: D.Endpoints.GUILD_INSTANT_INVITES(o.id),
            oldFormErrors: !0
        }).then(e => {
            p.default.dispatch({
                type: "GUILD_SETTINGS_LOADED_INVITES",
                invites: e.body
            })
        });
        else if (i === D.GuildSettingsSections.WIDGET) g.default.get({
            url: D.Endpoints.GUILD_WIDGET(o.id),
            oldFormErrors: !0
        }).then(e => {
            p.default.dispatch({
                type: "GUILD_SETTINGS_SET_WIDGET",
                enabled: e.body.enabled,
                channelId: e.body.channel_id
            })
        });
        else if (i === D.GuildSettingsSections.INTEGRATIONS || i === D.GuildSettingsSections.ROLES) {
            if (l = null, t !== e.section) return ei(e)
        } else i === D.GuildSettingsSections.MEMBERS ? l = o.getEveryoneRoleId() : i === D.GuildSettingsSections.VANITY_URL ? g.default.get({
            url: D.Endpoints.GUILD_VANITY_URL(o.id),
            oldFormErrors: !0
        }).then(e => {
            let {
                body: {
                    code: t,
                    uses: n,
                    error: i
                }
            } = e;
            p.default.dispatch({
                type: "GUILD_SETTINGS_SET_VANITY_URL",
                code: t,
                uses: n,
                error: i
            })
        }) : i === D.GuildSettingsSections.SAFETY && p.default.dispatch({
            type: "GUILD_SETTINGS_SAFETY_SET_SUBSECTION",
            subsection: null == s ? D.GuildSettingsSubsections.SAFETY_OVERVIEW : s
        })
    }

    function en(e) {
        var t;
        return new I.default({
            code: e.code,
            temporary: e.temporary,
            revoked: e.revoked,
            inviter: null != e.inviter ? new C.default(e.inviter) : null,
            channel: (0, v.createChannelRecordFromInvite)(e.channel),
            guild: null != e.guild ? new T.default(e.guild) : null,
            uses: e.uses,
            maxUses: e.max_uses,
            maxAge: e.max_age,
            createdAt: h(null !== (t = e.created_at) && void 0 !== t ? t : void 0)
        })
    }

    function ei(e) {
        if (null == o || w !== D.FormStates.OPEN || "GUILD_INTEGRATIONS_UPDATE" === e.type && e.guildId !== o.id) return !1;
        (0, O.fetchGuildIntegrationsApplications)(o.id)
    }
    class es extends E.default.Store {
        initialize() {
            this.waitFor(A.default, y.default)
        }
        getMetadata() {
            return K
        }
        hasChanges() {
            return !f.isEqual(o, a) || !f.isEqual(K, W)
        }
        isOpen() {
            return U
        }
        getSavedRouteState() {
            return u
        }
        getSection() {
            return i
        }
        showNotice() {
            return this.hasChanges()
        }
        getGuildId() {
            return null != o ? o.id : null
        }
        showPublicSuccessModal() {
            return !m.default.get(L.PUBLIC_SUCCESS_MODAL_SEEN_KEY)
        }
        getGuild() {
            return o
        }
        isSubmitting() {
            return w === D.FormStates.SUBMITTING
        }
        isGuildMetadataLoaded() {
            return j
        }
        getErrors() {
            return k
        }
        getSelectedRoleId() {
            return l
        }
        getSlug() {
            return d
        }
        getBans() {
            return [z, q]
        }
        getProps() {
            return {
                submitting: this.isSubmitting(),
                integrations: Z,
                section: i,
                subsection: s,
                errors: k,
                guild: o,
                bans: z,
                bansVersion: q,
                invites: Q,
                selectedRoleId: l,
                embedEnabled: V,
                embedChannelId: G,
                mfaLevel: B,
                searchQuery: r,
                vanityURLCode: F,
                vanityURLUses: x,
                originalGuild: a,
                hasChanges: this.hasChanges(),
                guildMetadata: K,
                analyticsLocation: H,
                isGuildMetadataLoaded: j
            }
        }
    }
    es.displayName = "GuildSettingsStore";
    var er = new es(p.default, __OVERLAY__ ? {} : {
        GUILD_SETTINGS_INIT: $,
        GUILD_SETTINGS_OPEN: function(e) {
            U = !0, $(e)
        },
        GUILD_SETTINGS_CLOSE: ee,
        GUILD_SETTINGS_UPDATE: function(e) {
            if (null == o) return !1;
            M.forEach(t => {
                null != o && e.hasOwnProperty(t) && (o = o.set(t, e[t]))
            }), ! function() {
                if (null == o) return;
                let e = o.toJS(),
                    t = a.toJS(),
                    n = M.some(n => e[n] !== t[n]);
                !n && (o = a)
            }()
        },
        GUILD_SETTINGS_CANCEL_CHANGES: function(e) {
            let {
                guildId: t
            } = e;
            k = {};
            let n = A.default.getGuild(t);
            null != n && (a = o = n)
        },
        GUILD_SETTINGS_SAVE_ROUTE_STACK: function(e) {
            let {
                state: t
            } = e;
            return u = t, !1
        },
        GUILD_SETTINGS_SUBMIT: function() {
            w = D.FormStates.SUBMITTING, k = {}
        },
        GUILD_SETTINGS_SUBMIT_SUCCESS: function() {
            w = D.FormStates.OPEN
        },
        GUILD_SETTINGS_SUBMIT_FAILURE: function(e) {
            var t;
            w = D.FormStates.OPEN, i = null != i ? i : D.GuildSettingsSections.OVERVIEW, s = null, k = null !== (t = e.errors) && void 0 !== t ? t : {}
        },
        GUILD_SETTINGS_SET_SECTION: et,
        GUILD_SETTINGS_SET_SEARCH_QUERY: function(e) {
            r = e.searchQuery
        },
        GUILD_SETTINGS_LOADED_BANS: function(e) {
            z = e.bans.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), new Map), q++
        },
        GUILD_SETTINGS_LOADED_BANS_BATCH: function(e) {
            let {
                bans: t,
                guildId: n
            } = e;
            (X !== n || null == z) && (X = n, z = new Map), z = t.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), z), q++
        },
        GUILD_SETTINGS_LOADED_INVITES: function(e) {
            Q = e.invites.reduce((e, t) => (e[t.code] = en(t), e), {})
        },
        GUILD_SETTINGS_SET_WIDGET: function(e) {
            V = e.enabled, G = e.channelId
        },
        GUILD_SETTINGS_SET_VANITY_URL: function(e) {
            var t;
            F = null !== (t = e.code) && void 0 !== t ? t : null, x = e.uses
        },
        GUILD_SETTINGS_SET_MFA_SUCCESS: function(e) {
            let {
                level: t
            } = e;
            B = t
        },
        GUILD_SETTINGS_ROLE_SELECT: function(e) {
            let {
                roleId: t
            } = e;
            l = null != t ? t : null
        },
        GUILD_SETTINGS_LOADED_INTEGRATIONS: function(e) {
            Z = e.integrations
        },
        GUILD_BAN_ADD: function(e) {
            let {
                user: t,
                guildId: n
            } = e;
            if (null == z || null == o || o.id !== n) return !1;
            z.set(t.id, {
                user: t,
                reason: null
            }), q++
        },
        GUILD_BAN_REMOVE: function(e) {
            let {
                user: t,
                guildId: n
            } = e;
            if (null == z || null == o || o.id !== n) return !1;
            z.delete(t.id), q++
        },
        GUILD_ROLE_CREATE: function(e) {
            let {
                guildId: t
            } = e;
            if (!J(t)) return !1
        },
        GUILD_ROLE_UPDATE: function(e) {
            let {
                guildId: t
            } = e;
            if (!J(t)) return !1
        },
        GUILD_ROLE_DELETE: function(e) {
            let {
                guildId: t,
                roleId: n
            } = e;
            if (!J(t)) return !1;
            l === n && (l = null)
        },
        GUILD_UPDATE: function(e) {
            if (null == o || o.id !== e.guild.id) return !1;
            {
                let e = A.default.getGuild(o.id);
                if (null == e) return !1;
                let t = a = e,
                    n = o.toJS();
                M.forEach(e => {
                    if (!b.has(e)) {
                        if ("rulesChannelId" !== e && "publicUpdatesChannelId" !== e || n[e] !== L.CREATE_NEW_CHANNEL_VALUE) {
                            if ("features" === e) {
                                t.set(e, new Set(n[e]));
                                return
                            }
                            t = t.set(e, n[e])
                        }
                    }
                }), o = t
            }
        },
        GUILD_DELETE: function(e) {
            if (null == o || o.id !== e.guild.id) return !1;
            ee()
        },
        USER_CONNECTIONS_UPDATE: ei,
        GUILD_INTEGRATIONS_UPDATE: ei,
        INSTANT_INVITE_REVOKE_SUCCESS: function(e) {
            Q = {
                ...Q
            }, delete Q[e.code]
        },
        INSTANT_INVITE_CREATE_SUCCESS: function(e) {
            Q = {
                ...Q,
                [e.invite.code]: en(e.invite)
            }
        },
        GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: function(e) {
            var t, n, i, s, r, a, l, u, d, c;
            let {
                guildId: f,
                metadata: _
            } = e;
            null != o && f === o.id && (!1 === j && (j = !0), K = W = {
                primaryCategoryId: null !== (t = _.primaryCategoryId) && void 0 !== t ? t : P.DEFAULT_DISCOVERY_CATEGORY_ID,
                secondaryCategoryIds: null !== (n = _.secondaryCategoryIds) && void 0 !== n ? n : [],
                keywords: null !== (i = _.keywords) && void 0 !== i ? i : [],
                emojiDiscoverabilityEnabled: null !== (s = _.emojiDiscoverabilityEnabled) && void 0 !== s ? s : P.DEFAULT_EMOJI_DISCOVERABILITY_SETTING,
                partnerActionedTimestamp: null !== (r = _.partnerActionedTimestamp) && void 0 !== r ? r : null,
                partnerApplicationTimestamp: null !== (a = _.partnerApplicationTimestamp) && void 0 !== a ? a : null,
                isPublished: null !== (l = _.isPublished) && void 0 !== l && l,
                reasonsToJoin: null !== (u = _.reasonsToJoin) && void 0 !== u ? u : [],
                socialLinks: null !== (d = _.socialLinks) && void 0 !== d ? d : [],
                about: null !== (c = _.about) && void 0 !== c ? c : ""
            }, k = {})
        },
        GUILD_DISCOVERY_METADATA_FETCH_FAIL: function() {
            W = K = Y
        },
        GUILD_DISCOVERY_CATEGORY_ADD: function(e) {
            let {
                guildId: t,
                categoryId: n
            } = e;
            null != o && t === o.id && (K = {
                ...K,
                secondaryCategoryIds: [...K.secondaryCategoryIds, n]
            }, W = {
                ...W,
                secondaryCategoryIds: [...W.secondaryCategoryIds, n]
            })
        },
        GUILD_DISCOVERY_CATEGORY_DELETE: function(e) {
            let t, {
                guildId: n,
                categoryId: i
            } = e;
            if (null == o || n !== o.id) return;
            let s = K.secondaryCategoryIds.indexOf(i); - 1 !== s && ((t = [...K.secondaryCategoryIds]).splice(s, 1), K = {
                ...K,
                secondaryCategoryIds: t
            }), -1 !== (s = W.secondaryCategoryIds.indexOf(i)) && ((t = [...W.secondaryCategoryIds]).splice(s, 1), W = {
                ...W,
                secondaryCategoryIds: t
            })
        },
        GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: function(e) {
            let {
                guildId: t,
                errors: n
            } = e;
            null != o && t === o.id && (k = null != n ? n : {})
        },
        GUILD_UPDATE_DISCOVERY_METADATA: function(e) {
            let {
                guildId: t,
                primaryCategoryId: n,
                keywords: i,
                emojiDiscoverabilityEnabled: s,
                isPublished: r,
                reasonsToJoin: a,
                socialLinks: l,
                about: u
            } = e;
            null != o && t === o.id && (K = {
                ...K,
                primaryCategoryId: null != n ? n : K.primaryCategoryId,
                keywords: null != i ? i : K.keywords,
                emojiDiscoverabilityEnabled: null != s ? s : K.emojiDiscoverabilityEnabled,
                isPublished: null != r ? r : K.isPublished,
                reasonsToJoin: null != a ? a : K.reasonsToJoin,
                socialLinks: null != l ? l : K.socialLinks,
                about: null != u ? u : K.about
            })
        },
        GUILD_UPDATE_DISCOVERY_METADATA_FAIL: function(e) {
            let {
                guildId: t,
                errors: n
            } = e;
            null != o && t === o.id && (k = null != n ? n : {})
        },
        GUILD_DISCOVERY_SLUG_FETCH_SUCCESS: function(e) {
            let {
                slug: t
            } = e;
            d = t
        },
        GUILD_DISCOVERY_SLUG_FETCH_FAIL: function(e) {
            let {} = e;
            d = null
        }
    })
}