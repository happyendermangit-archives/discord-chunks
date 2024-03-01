function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        filterScopes: function() {
            return l
        },
        parseOAuth2AuthorizeProps: function() {
            return f
        }
    }), n("424973");
    var s = n("730290"),
        i = n("316693"),
        r = n("42203"),
        a = n("162771"),
        o = n("991170"),
        d = n("29479"),
        u = n("843455");

    function l(e) {
        let t = e.filter(e => !d.RemovedScopes.includes(e));
        return t.includes(u.OAuth2Scopes.BOT) && !t.includes(u.OAuth2Scopes.APPLICATIONS_COMMANDS) && t.push(u.OAuth2Scopes.APPLICATIONS_COMMANDS), t
    }

    function f(e) {
        var t, n, d, u, l, f;
        let _ = (0, s.parse)(e, {
                arrayFormat: "bracket"
            }),
            c = o.default.NONE;
        try {
            c = i.default.deserialize(null != _.permissions && "" !== _.permissions ? _.permissions : "0")
        } catch (e) {}
        let g = _.channel_id,
            m = null !== (u = null !== (d = null !== (n = _.guild_id) && void 0 !== n ? n : null === (t = r.default.getChannel(g)) || void 0 === t ? void 0 : t.guild_id) && void 0 !== d ? d : a.default.getGuildId()) && void 0 !== u ? u : void 0;
        return {
            clientId: null !== (l = _.client_id) && void 0 !== l ? l : "",
            scopes: (null !== (f = _.scope) && void 0 !== f ? f : "").split(" ").filter(e => e.length > 0),
            responseType: _.response_type,
            redirectUri: _.redirect_uri,
            codeChallenge: _.code_challenge,
            codeChallengeMethod: _.code_challenge_method,
            state: _.state,
            permissions: c,
            channelId: g,
            guildId: m,
            prompt: _.prompt,
            disableGuildSelect: "true" === _.disable_guild_select,
            integrationType: null == _.integration_type ? void 0 : Number(_.integration_type)
        }
    }
}