function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        acceptWhitelist: function() {
            return o
        },
        authorize: function() {
            return l
        },
        fetchAuthorization: function() {
            return u
        },
        fetchChannels: function() {
            return d
        },
        finishUserCode: function() {
            return E
        },
        finishUserCodeTwoWayLinkError: function() {
            return I
        },
        logoutWithRedirect: function() {
            return _
        },
        verifyUserCode: function() {
            return c
        }
    });
    var i = n("860911"),
        r = n("544891"),
        s = n("893776"),
        a = n("981631");

    function o(e) {
        return r.HTTP.post({
            url: a.Endpoints.OAUTH2_WHITELIST_ACCEPT,
            query: {
                token: e
            },
            oldFormErrors: !0
        })
    }
    async function l(e) {
        let {
            authorize: t,
            clientId: n,
            scopes: i,
            responseType: s,
            redirectUri: o,
            codeChallenge: l,
            codeChallengeMethod: u,
            state: d,
            permissions: _,
            guildId: c,
            channelId: E,
            integrationType: I,
            nonce: T
        } = e;
        return (await r.HTTP.post({
            url: a.Endpoints.OAUTH2_AUTHORIZE,
            query: {
                client_id: n,
                response_type: s,
                redirect_uri: o,
                code_challenge: l,
                code_challenge_method: u,
                scope: i.join(" "),
                state: d,
                nonce: T
            },
            body: {
                guild_id: c,
                webhook_channel_id: null != c && null != E ? E : void 0,
                channel_id: null == c && null != E ? E : void 0,
                permissions: _,
                authorize: t,
                integration_type: I
            },
            oldFormErrors: !0
        })).body
    }
    async function u(e) {
        let {
            clientId: t,
            scopes: n,
            responseType: i,
            redirectUri: s,
            codeChallenge: o,
            codeChallengeMethod: l,
            state: u,
            integrationType: d,
            nonce: _
        } = e;
        return (await r.HTTP.get({
            url: a.Endpoints.OAUTH2_AUTHORIZE,
            query: {
                client_id: t,
                response_type: i,
                redirect_uri: s,
                code_challenge: o,
                code_challenge_method: l,
                scope: n.join(" "),
                state: u,
                integration_type: d,
                nonce: _
            },
            retries: 3,
            oldFormErrors: !0
        })).body
    }
    async function d(e) {
        let {
            body: t
        } = await r.HTTP.get({
            url: a.Endpoints.OAUTH2_AUTHORIZE_WEBHOOK_CHANNELS,
            query: {
                guild_id: e
            },
            oldFormErrors: !0
        });
        return t
    }

    function _(e) {
        s.default.logout((0, i.getLoginPath)(e.pathname + e.search, !1))
    }
    async function c(e) {
        return await r.HTTP.post({
            url: a.Endpoints.OAUTH2_DEVICE_VERIFY,
            body: {
                user_code: e
            }
        })
    }
    async function E(e, t) {
        return await r.HTTP.post({
            url: a.Endpoints.OAUTH2_DEVICE_FINISH,
            body: {
                user_code: e,
                result: t
            }
        })
    }
    async function I(e, t, n) {
        return await r.HTTP.post({
            url: a.Endpoints.OAUTH2_DEVICE_FINISH,
            body: {
                user_code: e,
                result: "two_way_link_error",
                error_code: t,
                error_source: n
            }
        })
    }
}