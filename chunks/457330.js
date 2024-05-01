function(e, t, n) {
    "use strict";
    n.r(t), n("610138"), n("216116"), n("78328"), n("815648"), n("47120");
    var i = n("990547"),
        r = n("544891"),
        s = n("570140"),
        a = n("275759"),
        o = n("710845"),
        l = n("626135"),
        u = n("573261"),
        d = n("981631");
    let _ = new o.default("ConnectedAccounts");

    function c(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return r.HTTP.post({
            url: d.Endpoints.CONNECTIONS_CALLBACK(e),
            body: {
                ...t,
                insecure: n,
                friend_sync: d.FRIEND_SYNC_PLATFORM_TYPES.has(e)
            },
            oldFormErrors: !0
        })
    }
    t.default = {
        fetch: () => r.HTTP.get({
            url: d.Endpoints.CONNECTIONS,
            oldFormErrors: !0
        }).then(e => s.default.dispatch({
            type: "USER_CONNECTIONS_UPDATE",
            local: !0,
            accounts: e.body
        }), () => s.default.dispatch({
            type: "USER_CONNECTIONS_UPDATE",
            local: !0,
            accounts: []
        })),
        authorize(e) {
            let {
                location: t,
                twoWayLinkType: n,
                userCode: i,
                twoWayLink: s,
                successRedirect: a
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            l.default.track(d.AnalyticEvents.CONNECTED_ACCOUNT_INITIATED, {
                platform_type: e,
                location: t
            });
            let o = d.Endpoints.CONNECTIONS_AUTHORIZE(e),
                u = new URLSearchParams;
            return null != i && u.append("two_way_user_code", i), null != a && u.append("success_redirect", a), null != n ? (u.append("two_way_link_type", n), u.append("two_way_link", "true")) : null != s && u.append("two_way_link", String(s)), o = o + "?" + u.toString(), r.HTTP.get({
                url: o,
                oldFormErrors: !0
            })
        },
        callback: c,
        connect(e, t, n, r, s) {
            var a;
            return u.default.put({
                url: d.Endpoints.CONNECTION(e, t),
                body: {
                    name: n,
                    friend_sync: null !== (a = null == s ? void 0 : s.friend_sync) && void 0 !== a ? a : d.FRIEND_SYNC_PLATFORM_TYPES.has(e)
                },
                context: {
                    location: r
                },
                oldFormErrors: !0,
                trackedActionData: {
                    event: i.NetworkActionNames.USER_CONNECTIONS_UPDATE,
                    properties: {
                        name: n,
                        friend_sync: d.FRIEND_SYNC_PLATFORM_TYPES.has(e)
                    }
                }
            })
        },
        disconnect: (e, t) => r.HTTP.del({
            url: d.Endpoints.CONNECTION(e, t),
            oldFormErrors: !0
        }),
        refresh: (e, t) => r.HTTP.post({
            url: d.Endpoints.CONNECTION_REFRESH(e, t),
            oldFormErrors: !0
        }),
        setVisibility(e, t, n) {
            return this.update(e, t, {
                visibility: 1 === n
            })
        },
        setMetadataVisibility(e, t, n) {
            return this.update(e, t, {
                metadata_visibility: 1 === n
            })
        },
        setFriendSync(e, t, n) {
            return this.update(e, t, {
                friend_sync: n
            })
        },
        setShowActivity(e, t, n) {
            return this.update(e, t, {
                show_activity: n
            })
        },
        update: (e, t, n) => u.default.patch({
            url: d.Endpoints.CONNECTION(e, t),
            body: n,
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.USER_CONNECTIONS_UPDATE,
                properties: {
                    ...n
                }
            }
        }),
        joinServer(e, t) {
            s.default.dispatch({
                type: "USER_CONNECTIONS_INTEGRATION_JOINING",
                integrationId: e,
                joining: !0
            }), r.HTTP.post({
                url: d.Endpoints.INTEGRATION_JOIN(e),
                oldFormErrors: !0
            }, n => {
                s.default.dispatch({
                    type: "USER_CONNECTIONS_INTEGRATION_JOINING",
                    integrationId: e,
                    joining: !1
                }), !n.ok && (s.default.dispatch({
                    type: "USER_CONNECTIONS_INTEGRATION_JOINING_ERROR",
                    integrationId: e,
                    error: n.hasErr ? void 0 : n.body.message
                }), null == t || t())
            })
        },
        async refreshAccessToken(e, t) {
            try {
                let {
                    body: {
                        access_token: n
                    }
                } = await r.HTTP.get({
                    url: d.Endpoints.CONNECTION_ACCESS_TOKEN(e, t),
                    oldFormErrors: !0
                });
                return s.default.dispatch({
                    type: "USER_CONNECTION_UPDATE",
                    platformType: e,
                    id: t,
                    accessToken: n
                }), n
            } catch (n) {
                throw n.body.code === d.AbortCodes.CONNECTION_REVOKED && s.default.dispatch({
                    type: "USER_CONNECTION_UPDATE",
                    platformType: e,
                    id: t,
                    revoked: !0
                }), n
            }
        },
        linkDispatchAuthCallback: (e, t) => r.HTTP.post({
            url: d.Endpoints.CONNECTIONS_LINK_DISPATCH_AUTH_CALLBACK(e),
            body: {
                ...t
            },
            oldFormErrors: !0
        }),
        async completeTwoWayLink(e, t, n, i, r) {
            if (null == t) {
                _.error("Two-way link: missing authorize location");
                return
            }
            let {
                code: s,
                error: o,
                errorDescription: l
            } = (0, a.getCallbackParamsFromURL)(t);
            if (null != o) {
                _.error("Two-way link: missing authorize code", {
                    error: o,
                    errorDescription: l
                });
                return
            }
            return await c(e, {
                code: n,
                state: i,
                two_way_link_code: s,
                token_redirect_uri: r
            })
        }
    }
}