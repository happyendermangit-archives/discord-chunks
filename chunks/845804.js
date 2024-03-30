function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        filterScopes: function() {
            return c
        },
        parseOAuth2AuthorizeProps: function() {
            return f
        }
    });
    var r = n("593473"),
        o = n("22287"),
        i = n("935741"),
        a = n("63116"),
        u = n("359017"),
        s = n("485250"),
        l = n("563090");

    function c(e) {
        var t = e.filter(function(e) {
            return !s.RemovedScopes.includes(e)
        });
        return t.includes(l.OAuth2Scopes.BOT) && !t.includes(l.OAuth2Scopes.APPLICATIONS_COMMANDS) && t.push(l.OAuth2Scopes.APPLICATIONS_COMMANDS), t
    }

    function f(e) {
        var t, n, s, l, c, f, d = (0, r.parse)(e, {
                arrayFormat: "bracket"
            }),
            _ = u.NONE;
        try {
            _ = o.deserialize(null != d.permissions && "" !== d.permissions ? d.permissions : "0")
        } catch (e) {}
        var E = d.channel_id,
            p = null !== (l = null !== (s = null !== (n = d.guild_id) && void 0 !== n ? n : null === (t = i.default.getChannel(E)) || void 0 === t ? void 0 : t.guild_id) && void 0 !== s ? s : a.default.getGuildId()) && void 0 !== l ? l : void 0;
        return {
            clientId: null !== (c = d.client_id) && void 0 !== c ? c : "",
            scopes: (null !== (f = d.scope) && void 0 !== f ? f : "").split(" ").filter(function(e) {
                return e.length > 0
            }),
            responseType: d.response_type,
            redirectUri: d.redirect_uri,
            codeChallenge: d.code_challenge,
            codeChallengeMethod: d.code_challenge_method,
            state: d.state,
            permissions: _,
            channelId: E,
            guildId: p,
            prompt: d.prompt,
            disableGuildSelect: "true" === d.disable_guild_select,
            integrationType: null == d.integration_type ? void 0 : Number(d.integration_type)
        }
    }
}