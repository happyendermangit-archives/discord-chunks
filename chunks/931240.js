function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        adoptClanIdentity: function() {
            return d
        },
        convertGuildToClan: function() {
            return l
        },
        fetchClanSettings: function() {
            return I
        },
        getClanInfo: function() {
            return u
        },
        saveClanSettings: function() {
            return T
        },
        updateClanSettings: function() {
            return c
        },
        updateClanSetup: function() {
            return _
        }
    }), n("47120");
    var i = n("544891"),
        r = n("570140"),
        s = n("479531"),
        a = n("981631"),
        o = n("976757");
    async function l(e, t) {
        r.default.dispatch({
            type: "CLAN_SETUP_SUBMIT",
            guildId: e
        });
        try {
            var n, o, l, u;
            await i.HTTP.post({
                url: a.Endpoints.GUILD_CONVERT_TO_CLAN(e),
                body: {
                    tag: t.tag,
                    description: t.description,
                    play_style: t.playstyle,
                    search_terms: Array.from(null !== (o = t.interests) && void 0 !== o ? o : new Set),
                    game_application_ids: Array.from(null !== (l = t.gameApplicationIds) && void 0 !== l ? l : new Set),
                    verification_form: {
                        form_fields: null !== (u = null === (n = t.verificationForm) || void 0 === n ? void 0 : n.formFields) && void 0 !== u ? u : []
                    },
                    badge: t.badgeKind,
                    badge_color_primary: t.badgePrimaryColor,
                    badge_color_secondary: t.badgeSecondaryColor,
                    banner: t.banner,
                    brand_color_primary: t.brandPrimaryColor,
                    brand_color_secondary: t.brandSecondaryColor,
                    wildcard_descriptors: t.wildcardDescriptors,
                    badge_image: t.badgeImage
                }
            }), r.default.dispatch({
                type: "CLAN_SETUP_SUCCESS",
                guildId: e
            })
        } catch (t) {
            throw r.default.dispatch({
                type: "CLAN_SETUP_ERROR",
                guildId: e,
                error: new s.default(t)
            }), t
        }
    }
    async function u(e) {
        let t = await i.HTTP.get({
            url: a.Endpoints.GUILD_CLAN_DISCOVERY_INFO(e)
        });
        return (0, o.buildClanFromServer)(t.body)
    }
    async function d(e, t) {
        try {
            let n = await i.HTTP.put({
                url: a.Endpoints.USER_SET_CLAN_IDENTITY,
                body: {
                    identity_guild_id: e,
                    identity_enabled: t
                }
            });
            r.default.dispatch({
                type: "CURRENT_USER_UPDATE",
                user: n.body
            })
        } catch (e) {
            return
        }
    }

    function _(e, t) {
        r.default.dispatch({
            type: "CLAN_SETUP_UPDATE",
            guildId: e,
            updates: t
        })
    }

    function c(e, t) {
        r.default.dispatch({
            type: "CLAN_SETTINGS_UPDATE",
            guildId: e,
            updates: t
        })
    }
    let E = e => {
        var t, n, i, r, s, a;
        return {
            tag: e.tag,
            gameApplicationIds: new Set(null !== (i = e.game_application_ids) && void 0 !== i ? i : []),
            interests: new Set(null !== (r = e.search_terms) && void 0 !== r ? r : []),
            playstyle: e.play_style,
            description: e.description,
            wildcardDescriptors: e.wildcard_descriptors,
            verificationForm: {
                description: null !== (s = null === (t = e.verification_form) || void 0 === t ? void 0 : t.description) && void 0 !== s ? s : "",
                formFields: null !== (a = null === (n = e.verification_form) || void 0 === n ? void 0 : n.form_fields) && void 0 !== a ? a : [],
                version: ""
            },
            badgeKind: e.badge,
            badgePrimaryColor: e.badge_color_primary,
            badgeSecondaryColor: e.badge_color_secondary,
            banner: e.banner,
            brandPrimaryColor: e.brand_color_primary,
            brandSecondaryColor: e.brand_color_secondary
        }
    };
    async function I(e) {
        r.default.dispatch({
            type: "CLAN_SETTINGS_FETCH_START"
        });
        let t = await i.HTTP.get({
            url: a.Endpoints.CLAN_SETTINGS(e)
        });
        r.default.dispatch({
            type: "CLAN_SETTINGS_FETCH_SUCCESS",
            guildId: e,
            settings: E(t.body)
        })
    }
    async function T(e, t) {
        var n, r, s, o;
        return await i.HTTP.patch({
            url: a.Endpoints.CLAN_SETTINGS(e),
            body: {
                tag: t.tag,
                description: t.description,
                play_style: t.playstyle,
                search_terms: Array.from(null !== (r = t.interests) && void 0 !== r ? r : new Set),
                game_application_ids: Array.from(null !== (s = t.gameApplicationIds) && void 0 !== s ? s : new Set),
                verification_form: {
                    form_fields: null !== (o = null === (n = t.verificationForm) || void 0 === n ? void 0 : n.formFields) && void 0 !== o ? o : []
                },
                badge: t.badgeKind,
                badge_color_primary: t.badgePrimaryColor,
                badge_color_secondary: t.badgeSecondaryColor,
                banner: t.banner,
                brand_color_primary: t.brandPrimaryColor,
                brand_color_secondary: t.brandSecondaryColor,
                wildcard_descriptors: t.wildcardDescriptors
            }
        })
    }
}