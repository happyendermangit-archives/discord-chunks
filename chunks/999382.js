function(e, t, n) {
    "use strict";
    let i, r, s, a, o, l, u, d;
    n.r(t), n("47120"), n("724458");
    var _, c, E, I, T = n("392711"),
        f = n.n(T),
        S = n("913527"),
        h = n.n(S),
        A = n("442837"),
        m = n("544891"),
        N = n("433517"),
        O = n("570140"),
        p = n("749210"),
        R = n("131704"),
        C = n("601964"),
        g = n("758449"),
        L = n("598077"),
        D = n("430824"),
        v = n("594174"),
        M = n("709054"),
        y = n("372454"),
        P = n("330010"),
        U = n("981631"),
        b = n("731455"),
        G = n("135899");
    let w = ["name", "description", "icon", "splash", "banner", "homeHeader", "afkChannelId", "afkTimeout", "systemChannelId", "verificationLevel", "defaultMessageNotifications", "explicitContentFilter", "features", "systemChannelFlags", "preferredLocale", "rulesChannelId", "safetyAlertsChannelId", "discoverySplash", "publicUpdatesChannelId", "premiumProgressBarEnabled"],
        B = new Set(["icon", "splash", "banner", "discoverySplash", "homeHeader"]),
        k = !1,
        V = U.FormStates.CLOSED,
        F = {},
        x = !1,
        H = null,
        Y = null,
        j = 0,
        W = U.MFALevels.NONE,
        K = null,
        z = {
            primaryCategoryId: b.DEFAULT_DISCOVERY_CATEGORY_ID,
            secondaryCategoryIds: [],
            keywords: [],
            emojiDiscoverabilityEnabled: b.DEFAULT_EMOJI_DISCOVERABILITY_SETTING,
            partnerActionedTimestamp: null,
            partnerApplicationTimestamp: null,
            isPublished: !1,
            reasonsToJoin: [],
            socialLinks: [],
            about: ""
        },
        X = !1,
        Q = z,
        q = z,
        J = null,
        Z = 0,
        $ = null,
        ee = null,
        et = null;

    function en(e) {
        if (null == o || null == a || a.id !== e) return !1;
        let t = D.default.getGuild(e);
        return null != t && (a === o ? o = a = t : a = t, !0)
    }

    function ei(e) {
        var t;
        let {
            guildId: n,
            section: r,
            subsection: s,
            location: u
        } = e, _ = D.default.getGuild(n);
        if (null == _) return er();
        a = o = _, V = U.FormStates.OPEN, F = {}, l = M.default.castGuildIdAsEveryoneGuildRoleId(n), W = o.mfaLevel, q = Q, d = null, K = u, es({
            section: null !== (t = null != r ? r : i) && void 0 !== t ? t : U.GuildSettingsSections.OVERVIEW,
            subsection: null != s ? s : null
        })
    }

    function er() {
        k = !1, V = U.FormStates.CLOSED, a = o = null, x = !1, H = null, Y = null, j = 0, J = null, ee = null, et = null, i = null, r = null, s = null, W = U.MFALevels.NONE, u = void 0
    }

    function es(e) {
        if (null == o) return !1;
        let t = i;
        if (i = e.section, r = e.subsection, i === U.GuildSettingsSections.BANS) {
            let {
                enabled: e
            } = y.GuildSettingsBansNewExperiment.getCurrentConfig({
                guildId: o.id,
                location: "7f0c91_1"
            });
            !e && p.default.fetchGuildBans(o.id)
        } else if (i === U.GuildSettingsSections.INSTANT_INVITES) m.HTTP.get({
            url: U.Endpoints.GUILD_INSTANT_INVITES(o.id),
            oldFormErrors: !0
        }).then(e => {
            O.default.dispatch({
                type: "GUILD_SETTINGS_LOADED_INVITES",
                invites: e.body
            })
        });
        else if (i === U.GuildSettingsSections.WIDGET) m.HTTP.get({
            url: U.Endpoints.GUILD_WIDGET(o.id),
            oldFormErrors: !0
        }).then(e => {
            O.default.dispatch({
                type: "GUILD_SETTINGS_SET_WIDGET",
                enabled: e.body.enabled,
                channelId: e.body.channel_id
            })
        });
        else if (i === U.GuildSettingsSections.INTEGRATIONS || i === U.GuildSettingsSections.ROLES) {
            if (l = null, t !== e.section) return eo(e)
        } else i === U.GuildSettingsSections.MEMBERS ? l = o.getEveryoneRoleId() : i === U.GuildSettingsSections.VANITY_URL ? m.HTTP.get({
            url: U.Endpoints.GUILD_VANITY_URL(o.id),
            oldFormErrors: !0
        }).then(e => {
            let {
                body: {
                    code: t,
                    uses: n,
                    error: i
                }
            } = e;
            O.default.dispatch({
                type: "GUILD_SETTINGS_SET_VANITY_URL",
                code: t,
                uses: n,
                error: i
            })
        }) : i === U.GuildSettingsSections.SAFETY && O.default.dispatch({
            type: "GUILD_SETTINGS_SAFETY_SET_SUBSECTION",
            subsection: null == r ? U.GuildSettingsSubsections.SAFETY_OVERVIEW : r
        })
    }

    function ea(e) {
        var t;
        return new g.default({
            code: e.code,
            temporary: e.temporary,
            revoked: e.revoked,
            inviter: null != e.inviter ? new L.default(e.inviter) : null,
            channel: (0, R.createChannelRecordFromInvite)(e.channel),
            guild: null != e.guild ? new C.default(e.guild) : null,
            uses: e.uses,
            maxUses: e.max_uses,
            maxAge: e.max_age,
            createdAt: h()(null !== (t = e.created_at) && void 0 !== t ? t : void 0)
        })
    }

    function eo(e) {
        if (null == o || V !== U.FormStates.OPEN || "GUILD_INTEGRATIONS_UPDATE" === e.type && e.guildId !== o.id) return !1;
        (0, P.fetchGuildIntegrationsApplications)(o.id)
    }
    class el extends(_ = A.default.Store) {
        initialize() {
            this.waitFor(D.default, v.default)
        }
        getMetadata() {
            return q
        }
        hasChanges() {
            return !f().isEqual(o, a) || !f().isEqual(q, Q)
        }
        isOpen() {
            return k
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
            return !N.Storage.get(G.PUBLIC_SUCCESS_MODAL_SEEN_KEY)
        }
        getGuild() {
            return o
        }
        isSubmitting() {
            return V === U.FormStates.SUBMITTING
        }
        isGuildMetadataLoaded() {
            return X
        }
        getErrors() {
            return F
        }
        getSelectedRoleId() {
            return l
        }
        getSlug() {
            return d
        }
        getBans() {
            return [J, Z]
        }
        getProps() {
            return {
                submitting: this.isSubmitting(),
                integrations: et,
                section: i,
                subsection: r,
                errors: F,
                guild: o,
                bans: J,
                bansVersion: Z,
                invites: ee,
                selectedRoleId: l,
                embedEnabled: x,
                embedChannelId: H,
                mfaLevel: W,
                searchQuery: s,
                vanityURLCode: Y,
                vanityURLUses: j,
                originalGuild: a,
                hasChanges: this.hasChanges(),
                guildMetadata: q,
                analyticsLocation: K,
                isGuildMetadataLoaded: X
            }
        }
    }
    I = "GuildSettingsStore", (E = "displayName") in(c = el) ? Object.defineProperty(c, E, {
        value: I,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : c[E] = I, t.default = new el(O.default, __OVERLAY__ ? {} : {
        GUILD_SETTINGS_INIT: ei,
        GUILD_SETTINGS_OPEN: function(e) {
            k = !0, ei(e)
        },
        GUILD_SETTINGS_CLOSE: er,
        GUILD_SETTINGS_UPDATE: function(e) {
            if (null == o) return !1;
            w.forEach(t => {
                null != o && e.hasOwnProperty(t) && (o = o.set(t, e[t]))
            }), ! function() {
                if (null == o) return;
                let e = o.toJS(),
                    t = a.toJS();
                !w.some(n => e[n] !== t[n]) && (o = a)
            }()
        },
        GUILD_SETTINGS_CANCEL_CHANGES: function(e) {
            let {
                guildId: t
            } = e;
            F = {};
            let n = D.default.getGuild(t);
            null != n && (a = o = n)
        },
        GUILD_SETTINGS_SAVE_ROUTE_STACK: function(e) {
            let {
                state: t
            } = e;
            return u = t, !1
        },
        GUILD_SETTINGS_SUBMIT: function() {
            V = U.FormStates.SUBMITTING, F = {}
        },
        GUILD_SETTINGS_SUBMIT_SUCCESS: function() {
            V = U.FormStates.OPEN
        },
        GUILD_SETTINGS_SUBMIT_FAILURE: function(e) {
            var t;
            V = U.FormStates.OPEN, i = null != i ? i : U.GuildSettingsSections.OVERVIEW, r = null, F = null !== (t = e.errors) && void 0 !== t ? t : {}
        },
        GUILD_SETTINGS_SET_SECTION: es,
        GUILD_SETTINGS_SET_SEARCH_QUERY: function(e) {
            s = e.searchQuery
        },
        GUILD_SETTINGS_LOADED_BANS: function(e) {
            J = e.bans.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), new Map), Z++
        },
        GUILD_SETTINGS_LOADED_BANS_BATCH: function(e) {
            let {
                bans: t,
                guildId: n
            } = e;
            ($ !== n || null == J) && ($ = n, J = new Map), J = t.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), J), Z++
        },
        GUILD_SETTINGS_LOADED_INVITES: function(e) {
            ee = e.invites.reduce((e, t) => (e[t.code] = ea(t), e), {})
        },
        GUILD_SETTINGS_SET_WIDGET: function(e) {
            x = e.enabled, H = e.channelId
        },
        GUILD_SETTINGS_SET_VANITY_URL: function(e) {
            var t;
            Y = null !== (t = e.code) && void 0 !== t ? t : null, j = e.uses
        },
        GUILD_SETTINGS_SET_MFA_SUCCESS: function(e) {
            let {
                level: t
            } = e;
            W = t
        },
        GUILD_SETTINGS_ROLE_SELECT: function(e) {
            let {
                roleId: t
            } = e;
            l = null != t ? t : null
        },
        GUILD_SETTINGS_LOADED_INTEGRATIONS: function(e) {
            et = e.integrations
        },
        GUILD_BAN_ADD: function(e) {
            let {
                user: t,
                guildId: n
            } = e;
            if (null == J || null == o || o.id !== n) return !1;
            J.set(t.id, {
                user: t,
                reason: null
            }), Z++
        },
        GUILD_BAN_REMOVE: function(e) {
            let {
                user: t,
                guildId: n
            } = e;
            if (null == J || null == o || o.id !== n) return !1;
            J.delete(t.id), Z++
        },
        GUILD_ROLE_CREATE: function(e) {
            let {
                guildId: t
            } = e;
            if (!en(t)) return !1
        },
        GUILD_ROLE_UPDATE: function(e) {
            let {
                guildId: t
            } = e;
            if (!en(t)) return !1
        },
        GUILD_ROLE_DELETE: function(e) {
            let {
                guildId: t,
                roleId: n
            } = e;
            if (!en(t)) return !1;
            l === n && (l = null)
        },
        GUILD_UPDATE: function(e) {
            if (null == o || o.id !== e.guild.id) return !1;
            {
                let e = D.default.getGuild(o.id);
                if (null == e) return !1;
                let t = a = e,
                    n = o.toJS();
                w.forEach(e => {
                    if (!B.has(e)) {
                        if ("rulesChannelId" !== e && "publicUpdatesChannelId" !== e || n[e] !== G.CREATE_NEW_CHANNEL_VALUE) {
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
            er()
        },
        USER_CONNECTIONS_UPDATE: eo,
        GUILD_INTEGRATIONS_UPDATE: eo,
        INSTANT_INVITE_REVOKE_SUCCESS: function(e) {
            ee = {
                ...ee
            }, delete ee[e.code]
        },
        INSTANT_INVITE_CREATE_SUCCESS: function(e) {
            ee = {
                ...ee,
                [e.invite.code]: ea(e.invite)
            }
        },
        GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: function(e) {
            var t, n, i, r, s, a, l, u, d, _;
            let {
                guildId: c,
                metadata: E
            } = e;
            null != o && c === o.id && (!1 === X && (X = !0), q = Q = {
                primaryCategoryId: null !== (t = E.primaryCategoryId) && void 0 !== t ? t : b.DEFAULT_DISCOVERY_CATEGORY_ID,
                secondaryCategoryIds: null !== (n = E.secondaryCategoryIds) && void 0 !== n ? n : [],
                keywords: null !== (i = E.keywords) && void 0 !== i ? i : [],
                emojiDiscoverabilityEnabled: null !== (r = E.emojiDiscoverabilityEnabled) && void 0 !== r ? r : b.DEFAULT_EMOJI_DISCOVERABILITY_SETTING,
                partnerActionedTimestamp: null !== (s = E.partnerActionedTimestamp) && void 0 !== s ? s : null,
                partnerApplicationTimestamp: null !== (a = E.partnerApplicationTimestamp) && void 0 !== a ? a : null,
                isPublished: null !== (l = E.isPublished) && void 0 !== l && l,
                reasonsToJoin: null !== (u = E.reasonsToJoin) && void 0 !== u ? u : [],
                socialLinks: null !== (d = E.socialLinks) && void 0 !== d ? d : [],
                about: null !== (_ = E.about) && void 0 !== _ ? _ : ""
            }, F = {})
        },
        GUILD_DISCOVERY_METADATA_FETCH_FAIL: function() {
            Q = q = z
        },
        GUILD_DISCOVERY_CATEGORY_ADD: function(e) {
            let {
                guildId: t,
                categoryId: n
            } = e;
            null != o && t === o.id && (q = {
                ...q,
                secondaryCategoryIds: [...q.secondaryCategoryIds, n]
            }, Q = {
                ...Q,
                secondaryCategoryIds: [...Q.secondaryCategoryIds, n]
            })
        },
        GUILD_DISCOVERY_CATEGORY_DELETE: function(e) {
            let t, {
                guildId: n,
                categoryId: i
            } = e;
            if (null == o || n !== o.id) return;
            let r = q.secondaryCategoryIds.indexOf(i); - 1 !== r && ((t = [...q.secondaryCategoryIds]).splice(r, 1), q = {
                ...q,
                secondaryCategoryIds: t
            }), -1 !== (r = Q.secondaryCategoryIds.indexOf(i)) && ((t = [...Q.secondaryCategoryIds]).splice(r, 1), Q = {
                ...Q,
                secondaryCategoryIds: t
            })
        },
        GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: function(e) {
            let {
                guildId: t,
                errors: n
            } = e;
            null != o && t === o.id && (F = null != n ? n : {})
        },
        GUILD_UPDATE_DISCOVERY_METADATA: function(e) {
            let {
                guildId: t,
                primaryCategoryId: n,
                keywords: i,
                emojiDiscoverabilityEnabled: r,
                isPublished: s,
                reasonsToJoin: a,
                socialLinks: l,
                about: u
            } = e;
            null != o && t === o.id && (q = {
                ...q,
                primaryCategoryId: null != n ? n : q.primaryCategoryId,
                keywords: null != i ? i : q.keywords,
                emojiDiscoverabilityEnabled: null != r ? r : q.emojiDiscoverabilityEnabled,
                isPublished: null != s ? s : q.isPublished,
                reasonsToJoin: null != a ? a : q.reasonsToJoin,
                socialLinks: null != l ? l : q.socialLinks,
                about: null != u ? u : q.about
            })
        },
        GUILD_UPDATE_DISCOVERY_METADATA_FAIL: function(e) {
            let {
                guildId: t,
                errors: n
            } = e;
            null != o && t === o.id && (F = null != n ? n : {})
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