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
        let _ = (0, i.parse)(e, {
                arrayFormat: "bracket"
            }),
            f = o.NONE;
        try {
            f = s.deserialize(null != _.permissions && "" !== _.permissions ? _.permissions : "0")
        } catch (e) {}
        let E = _.channel_id,
            h = null !== (u = null !== (l = null !== (n = _.guild_id) && void 0 !== n ? n : null === (t = r.default.getChannel(E)) || void 0 === t ? void 0 : t.guild_id) && void 0 !== l ? l : a.default.getGuildId()) && void 0 !== u ? u : void 0;
        return {
            clientId: null !== (d = _.client_id) && void 0 !== d ? d : "",
            scopes: (null !== (c = _.scope) && void 0 !== c ? c : "").split(" ").filter(e => e.length > 0),
            responseType: _.response_type,
            redirectUri: _.redirect_uri,
            codeChallenge: _.code_challenge,
            codeChallengeMethod: _.code_challenge_method,
            state: _.state,
            permissions: f,
            channelId: E,
            guildId: h,
            prompt: _.prompt,
            disableGuildSelect: "true" === _.disable_guild_select,
            integrationType: null == _.integration_type ? void 0 : Number(_.integration_type)
        }
    }
}