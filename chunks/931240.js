function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        adoptClanIdentity: function() {
            return _
        },
        convertGuildToClan: function() {
            return u
        },
        getClanInfo: function() {
            return d
        },
        updateClanSettings: function() {
            return c
        }
    }), n("47120");
    var i = n("392711"),
        r = n("544891"),
        s = n("570140"),
        a = n("479531"),
        o = n("924801"),
        l = n("981631");
    async function u(e, t) {
        var n, u, d, _, c;
        let E = (0, i.uniqWith)(null !== (n = t.primetime) && void 0 !== n ? n : [], i.isEqual),
            I = (0, o.formatTimesForServer)(E);
        s.default.dispatch({
            type: "CLAN_SETUP_SUBMIT",
            guildId: e
        });
        try {
            await r.HTTP.put({
                url: l.Endpoints.GUILD_CONVERT_TO_CLAN(e),
                body: {
                    tag: t.tag,
                    description: t.description,
                    play_style: t.playstyle,
                    search_terms: Array.from(null !== (d = t.interests) && void 0 !== d ? d : new Set),
                    game_application_ids: Array.from((null !== (_ = t.selectedGames) && void 0 !== _ ? _ : new Map).keys()),
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
                    wildcard_descriptors: t.wildcardDescriptors
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
    async function d(e) {
        return (await r.HTTP.get({
            url: l.Endpoints.GUILD_CLAN_INFO(e)
        })).body
    }
    async function _(e, t) {
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

    function c(e, t) {
        s.default.dispatch({
            type: "CLAN_SETUP_UPDATE",
            guildId: e,
            updates: t
        })
    }
}