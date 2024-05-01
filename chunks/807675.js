function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        filterScopes: function() {
            return d
        },
        parseOAuth2AuthorizeProps: function() {
            return _
        }
    }), n("653041");
    var i = n("593473"),
        r = n("149765"),
        a = n("592125"),
        s = n("914010"),
        o = n("700785"),
        l = n("713938"),
        u = n("231338");

    function d(e) {
        let t = e.filter(e => !l.RemovedScopes.includes(e));
        return t.includes(u.OAuth2Scopes.BOT) && !t.includes(u.OAuth2Scopes.APPLICATIONS_COMMANDS) && t.push(u.OAuth2Scopes.APPLICATIONS_COMMANDS), t
    }

    function _(e) {
        var t, n, l, u, d, _;
        let c = (0, i.parse)(e, {
                arrayFormat: "bracket"
            }),
            E = o.NONE;
        try {
            E = r.deserialize(null != c.permissions && "" !== c.permissions ? c.permissions : "0")
        } catch (e) {}
        let I = c.channel_id,
            T = null !== (u = null !== (l = null !== (n = c.guild_id) && void 0 !== n ? n : null === (t = a.default.getChannel(I)) || void 0 === t ? void 0 : t.guild_id) && void 0 !== l ? l : s.default.getGuildId()) && void 0 !== u ? u : void 0;
        return {
            clientId: null !== (d = c.client_id) && void 0 !== d ? d : "",
            scopes: (null !== (_ = c.scope) && void 0 !== _ ? _ : "").split(" ").filter(e => e.length > 0),
            responseType: c.response_type,
            redirectUri: c.redirect_uri,
            codeChallenge: c.code_challenge,
            codeChallengeMethod: c.code_challenge_method,
            state: c.state,
            permissions: E,
            channelId: I,
            guildId: T,
            prompt: c.prompt,
            disableGuildSelect: "true" === c.disable_guild_select,
            integrationType: null == c.integration_type ? void 0 : Number(c.integration_type),
            nonce: c.nonce
        }
    }
}