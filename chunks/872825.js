function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        filterScopes: function() {
            return d
        },
        parseOAuth2AuthorizeProps: function() {
            return c
        }
    }), n("424973");
    var i = n("730290"),
        s = n("316693"),
        r = n("42203"),
        a = n("162771"),
        o = n("991170"),
        l = n("29479"),
        u = n("843455");

    function d(e) {
        let t = e.filter(e => !l.RemovedScopes.includes(e));
        return t.includes(u.OAuth2Scopes.BOT) && !t.includes(u.OAuth2Scopes.APPLICATIONS_COMMANDS) && t.push(u.OAuth2Scopes.APPLICATIONS_COMMANDS), t
    }

    function c(e) {
        var t, n, l, u, d, c;
        let f = (0, i.parse)(e, {
                arrayFormat: "bracket"
            }),
            _ = o.default.NONE;
        try {
            _ = s.default.deserialize(null != f.permissions && "" !== f.permissions ? f.permissions : "0")
        } catch (e) {}
        let h = f.channel_id,
            E = null !== (u = null !== (l = null !== (n = f.guild_id) && void 0 !== n ? n : null === (t = r.default.getChannel(h)) || void 0 === t ? void 0 : t.guild_id) && void 0 !== l ? l : a.default.getGuildId()) && void 0 !== u ? u : void 0;
        return {
            clientId: null !== (d = f.client_id) && void 0 !== d ? d : "",
            scopes: (null !== (c = f.scope) && void 0 !== c ? c : "").split(" ").filter(e => e.length > 0),
            responseType: f.response_type,
            redirectUri: f.redirect_uri,
            codeChallenge: f.code_challenge,
            codeChallengeMethod: f.code_challenge_method,
            state: f.state,
            permissions: _,
            channelId: h,
            guildId: E,
            prompt: f.prompt,
            disableGuildSelect: "true" === f.disable_guild_select,
            integrationType: null == f.integration_type ? void 0 : Number(f.integration_type)
        }
    }
}