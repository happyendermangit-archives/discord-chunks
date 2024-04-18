function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        adoptClanIdentity: function() {
            return c
        },
        convertGuildToClan: function() {
            return d
        },
        fetchClanSettings: function() {
            return f
        },
        getClanInfo: function() {
            return _
        },
        saveClanSettings: function() {
            return S
        },
        updateClanSettings: function() {
            return I
        },
        updateClanSetup: function() {
            return E
        }
    }), n("47120");
    var i = n("392711"),
        r = n("544891"),
        s = n("570140"),
        a = n("479531"),
        o = n("924801"),
        l = n("981631"),
        u = n("976757");
    async function d(e, t) {
        var n, u, d, _, c;
        let E = (0, i.uniqWith)(null !== (n = t.primetime) && void 0 !== n ? n : [], i.isEqual),
            I = (0, o.formatTimesForServer)(E);
        s.default.dispatch({
            type: "CLAN_SETUP_SUBMIT",
            guildId: e
        });
        try {
            await r.HTTP.post({
                url: l.Endpoints.GUILD_CONVERT_TO_CLAN(e),
                body: {
                    tag: t.tag,
                    description: t.description,
                    play_style: t.playstyle,
                    search_terms: Array.from(null !== (d = t.interests) && void 0 !== d ? d : new Set),
                    game_application_ids: Array.from(null !== (_ = t.gameApplicationIds) && void 0 !== _ ? _ : new Set),
                    prime_time: I,
                    verification_form: {
                        form_fields: null !== (c = null === (u = t.verificationForm) || void 0 === u ? void 0 : u.formFields) && void 0 !== c ? c : []
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
            }), s.default.dispatch({
                type: "CLAN_SETUP_SUCCESS",
                guildId: e
            })
        } catch (t) {
            throw s.default.dispatch({
                type: "CLAN_SETUP_ERROR",
                guildId: e,
                error: new a.default(t)
            }), t
        }
    }
    async function _(e) {
        let t = await r.HTTP.get({
            url: l.Endpoints.GUILD_CLAN_DISCOVERY_INFO(e)
        });
        return (0, u.buildClanFromServer)(t.body)
    }
    async function c(e, t) {
        try {
            let n = await r.HTTP.put({
                url: l.Endpoints.USER_SET_CLAN_IDENTITY,
                body: {
                    identity_guild_id: e,
                    identity_enabled: t
                }
            });
            s.default.dispatch({
                type: "CURRENT_USER_UPDATE",
                user: n.body
            })
        } catch (e) {
            return
        }
    }

    function E(e, t) {
        s.default.dispatch({
            type: "CLAN_SETUP_UPDATE",
            guildId: e,
            updates: t
        })
    }

    function I(e, t) {
        s.default.dispatch({
            type: "CLAN_SETTINGS_UPDATE",
            guildId: e,
            updates: t
        })
    }
    let T = e => {
        var t, n, i, r, s, a;
        return {
            tag: e.tag,
            gameApplicationIds: new Set(null !== (i = e.game_application_ids) && void 0 !== i ? i : []),
            interests: new Set(null !== (r = e.search_terms) && void 0 !== r ? r : []),
            playstyle: e.play_style,
            description: e.description,
            wildcardDescriptors: e.wildcard_descriptors,
            primetime: e.prime_time.map(e => (0, o.guildEventToPrimeTimeSelection)(e)),
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
    async function f(e) {
        s.default.dispatch({
            type: "CLAN_SETTINGS_FETCH_START"
        });
        let t = await r.HTTP.get({
            url: l.Endpoints.CLAN_SETTINGS(e)
        });
        s.default.dispatch({
            type: "CLAN_SETTINGS_FETCH_SUCCESS",
            guildId: e,
            settings: T(t.body)
        })
    }
    async function S(e, t) {
        var n, i, s, a;
        return await r.HTTP.patch({
            url: l.Endpoints.CLAN_SETTINGS(e),
            body: {
                tag: t.tag,
                description: t.description,
                play_style: t.playstyle,
                search_terms: Array.from(null !== (i = t.interests) && void 0 !== i ? i : new Set),
                game_application_ids: Array.from(null !== (s = t.gameApplicationIds) && void 0 !== s ? s : new Set),
                verification_form: {
                    form_fields: null !== (a = null === (n = t.verificationForm) || void 0 === n ? void 0 : n.formFields) && void 0 !== a ? a : []
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