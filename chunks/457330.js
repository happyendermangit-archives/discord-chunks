function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("990547"),
        r = n("478677"),
        s = n("544891"),
        a = n("570140"),
        o = n("275759"),
        l = n("710845"),
        u = n("626135"),
        d = n("573261"),
        _ = n("981631");
    let c = new l.default("ConnectedAccounts");

    function E(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return s.HTTP.post({
            url: _.Endpoints.CONNECTIONS_CALLBACK(e),
            body: {
                ...t,
                insecure: n,
                friend_sync: _.FRIEND_SYNC_PLATFORM_TYPES.has(e)
            },
            oldFormErrors: !0
        })
    }
    t.default = {
        fetch: () => s.HTTP.get({
            url: _.Endpoints.CONNECTIONS,
            oldFormErrors: !0
        }).then(e => a.default.dispatch({
            type: "USER_CONNECTIONS_UPDATE",
            local: !0,
            accounts: e.body
        }), () => a.default.dispatch({
            type: "USER_CONNECTIONS_UPDATE",
            local: !0,
            accounts: []
        })),
        authorize(e) {
            let t, {
                location: n,
                twoWayLinkType: i,
                userCode: a
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return u.default.track(_.AnalyticEvents.CONNECTED_ACCOUNT_INITIATED, {
                platform_type: e,
                location: n
            }), t = i === r.TwoWayLinkType.DEVICE_CODE && null != a ? _.Endpoints.CONNECTIONS_AUTHORIZE_LINK_DEVICE(e, a) : null != i ? _.Endpoints.CONNECTIONS_AUTHORIZE_LINK(e, i) : _.Endpoints.CONNECTIONS_AUTHORIZE(e), s.HTTP.get({
                url: t,
                oldFormErrors: !0
            })
        },
        callback: E,
        connect(e, t, n, r, s) {
            var a;
            return d.default.put({
                url: _.Endpoints.CONNECTION(e, t),
                body: {
                    name: n,
                    friend_sync: null !== (a = null == s ? void 0 : s.friend_sync) && void 0 !== a ? a : _.FRIEND_SYNC_PLATFORM_TYPES.has(e)
                },
                context: {
                    location: r
                },
                oldFormErrors: !0,
                trackedActionData: {
                    event: i.NetworkActionNames.USER_CONNECTIONS_UPDATE,
                    properties: {
                        name: n,
                        friend_sync: _.FRIEND_SYNC_PLATFORM_TYPES.has(e)
                    }
                }
            })
        },
        disconnect: (e, t) => s.HTTP.del({
            url: _.Endpoints.CONNECTION(e, t),
            oldFormErrors: !0
        }),
        refresh: (e, t) => s.HTTP.post({
            url: _.Endpoints.CONNECTION_REFRESH(e, t),
            oldFormErrors: !0
        }),
        submitPinCode: (e, t) => s.HTTP.get({
            url: _.Endpoints.CONNECTIONS_CALLBACK_CONTINUATION(t, e),
            oldFormErrors: !0
        }).then(e => {
            let {
                body: n
            } = e;
            return u.default.track(_.AnalyticEvents.ACCOUNT_LINK_STEP, {
                previous_step: "PIN code entry",
                current_step: "PIN success",
                session_id: n.state,
                platform_type: t
            }), E(t, {
                ...n,
                from_continuation: !0
            }, !0)
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
        update: (e, t, n) => d.default.patch({
            url: _.Endpoints.CONNECTION(e, t),
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
            a.default.dispatch({
                type: "USER_CONNECTIONS_INTEGRATION_JOINING",
                integrationId: e,
                joining: !0
            }), s.HTTP.post({
                url: _.Endpoints.INTEGRATION_JOIN(e),
                oldFormErrors: !0
            }, n => {
                a.default.dispatch({
                    type: "USER_CONNECTIONS_INTEGRATION_JOINING",
                    integrationId: e,
                    joining: !1
                }), !n.ok && (a.default.dispatch({
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
                } = await s.HTTP.get({
                    url: _.Endpoints.CONNECTION_ACCESS_TOKEN(e, t),
                    oldFormErrors: !0
                });
                return a.default.dispatch({
                    type: "USER_CONNECTION_UPDATE",
                    platformType: e,
                    id: t,
                    accessToken: n
                }), n
            } catch (n) {
                throw n.body.code === _.AbortCodes.CONNECTION_REVOKED && a.default.dispatch({
                    type: "USER_CONNECTION_UPDATE",
                    platformType: e,
                    id: t,
                    revoked: !0
                }), n
            }
        },
        linkDispatchAuthCallback: (e, t) => s.HTTP.post({
            url: _.Endpoints.CONNECTIONS_LINK_DISPATCH_AUTH_CALLBACK(e),
            body: {
                ...t
            },
            oldFormErrors: !0
        }),
        async completeTwoWayLink(e, t, n, i, r) {
            if (null == t) {
                c.error("Two-way link: missing authorize location");
                return
            }
            let {
                code: s,
                error: a,
                errorDescription: l
            } = (0, o.getCallbackParamsFromURL)(t);
            if (null != a) {
                c.error("Two-way link: missing authorize code", {
                    error: a,
                    errorDescription: l
                });
                return
            }
            return await E(e, {
                code: n,
                state: i,
                two_way_link_code: s,
                token_redirect_uri: r
            })
        }
    }
}