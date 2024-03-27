function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        acceptWhitelist: function() {
            return l
        },
        authorize: function() {
            return u
        },
        fetchAuthorization: function() {
            return d
        },
        fetchChannels: function() {
            return _
        },
        finishUserCode: function() {
            return I
        },
        finishUserCodeTwoWayLinkError: function() {
            return T
        },
        logoutWithRedirect: function() {
            return c
        },
        verifyUserCode: function() {
            return E
        }
    });
    var i = n("373793"),
        r = n("860911"),
        s = n("544891"),
        a = n("893776"),
        o = n("981631");

    function l(e) {
        return s.HTTP.post({
            url: o.Endpoints.OAUTH2_WHITELIST_ACCEPT,
            query: {
                token: e
            },
            oldFormErrors: !0
        })
    }
    async function u(e) {
        let {
            authorize: t,
            clientId: n,
            scopes: i,
            responseType: r,
            redirectUri: a,
            codeChallenge: l,
            codeChallengeMethod: u,
            state: d,
            permissions: _,
            guildId: c,
            channelId: E,
            integrationType: I
        } = e;
        return (await s.HTTP.post({
            url: o.Endpoints.OAUTH2_AUTHORIZE,
            query: {
                client_id: n,
                response_type: r,
                redirect_uri: a,
                code_challenge: l,
                code_challenge_method: u,
                scope: i.join(" "),
                state: d
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
    async function d(e) {
        let {
            clientId: t,
            scopes: n,
            responseType: r,
            redirectUri: a,
            codeChallenge: l,
            codeChallengeMethod: u,
            state: d,
            userInstall: _
        } = e;
        return (await s.HTTP.get({
            url: o.Endpoints.OAUTH2_AUTHORIZE,
            query: {
                client_id: t,
                response_type: r,
                redirect_uri: a,
                code_challenge: l,
                code_challenge_method: u,
                scope: n.join(" "),
                state: d,
                integration_type: _ ? i.ApplicationIntegrationType.USER_INSTALL : i.ApplicationIntegrationType.GUILD_INSTALL
            },
            retries: 3,
            oldFormErrors: !0
        })).body
    }
    async function _(e) {
        let {
            body: t
        } = await s.HTTP.get({
            url: o.Endpoints.OAUTH2_AUTHORIZE_WEBHOOK_CHANNELS,
            query: {
                guild_id: e
            },
            oldFormErrors: !0
        });
        return t
    }

    function c(e) {
        a.default.logout((0, r.getLoginPath)(e.pathname + e.search, !1))
    }
    async function E(e) {
        return await s.HTTP.post({
            url: o.Endpoints.OAUTH2_DEVICE_VERIFY,
            body: {
                user_code: e
            }
        })
    }
    async function I(e, t) {
        return await s.HTTP.post({
            url: o.Endpoints.OAUTH2_DEVICE_FINISH,
            body: {
                user_code: e,
                result: t
            }
        })
    }
    async function T(e, t, n) {
        return await s.HTTP.post({
            url: o.Endpoints.OAUTH2_DEVICE_FINISH,
            body: {
                user_code: e,
                result: "two_way_link_error",
                error_code: t,
                error_source: n
            }
        })
    }
}