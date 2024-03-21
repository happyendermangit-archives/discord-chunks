function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var i = n("759843"),
        s = n("382825"),
        r = n("872717"),
        a = n("913144"),
        o = n("535013"),
        l = n("605250"),
        u = n("599110"),
        d = n("840707"),
        c = n("49111");
    let _ = new l.default("ConnectedAccounts");

    function f(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return r.default.post({
            url: c.Endpoints.CONNECTIONS_CALLBACK(e),
            body: {
                ...t,
                insecure: n,
                friend_sync: c.FRIEND_SYNC_PLATFORM_TYPES.has(e)
            },
            oldFormErrors: !0
        })
    }
    var E = {
        fetch: () => r.default.get({
            url: c.Endpoints.CONNECTIONS,
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
            return u.default.track(c.AnalyticEvents.CONNECTED_ACCOUNT_INITIATED, {
                platform_type: e,
                location: n
            }), t = i === s.TwoWayLinkType.DEVICE_CODE && null != a ? c.Endpoints.CONNECTIONS_AUTHORIZE_LINK_DEVICE(e, a) : null != i ? c.Endpoints.CONNECTIONS_AUTHORIZE_LINK(e, i) : c.Endpoints.CONNECTIONS_AUTHORIZE(e), r.default.get({
                url: t,
                oldFormErrors: !0
            })
        },
        callback: f,
        connect(e, t, n, s, r) {
            var a;
            return d.default.put({
                url: c.Endpoints.CONNECTION(e, t),
                body: {
                    name: n,
                    friend_sync: null !== (a = null == r ? void 0 : r.friend_sync) && void 0 !== a ? a : c.FRIEND_SYNC_PLATFORM_TYPES.has(e)
                },
                context: {
                    location: s
                },
                oldFormErrors: !0,
                trackedActionData: {
                    event: i.NetworkActionNames.USER_CONNECTIONS_UPDATE,
                    properties: {
                        name: n,
                        friend_sync: c.FRIEND_SYNC_PLATFORM_TYPES.has(e)
                    }
                }
            })
        },
        disconnect: (e, t) => r.default.delete({
            url: c.Endpoints.CONNECTION(e, t),
            oldFormErrors: !0
        }),
        refresh: (e, t) => r.default.post({
            url: c.Endpoints.CONNECTION_REFRESH(e, t),
            oldFormErrors: !0
        }),
        submitPinCode: (e, t) => r.default.get({
            url: c.Endpoints.CONNECTIONS_CALLBACK_CONTINUATION(t, e),
            oldFormErrors: !0
        }).then(e => {
            let {
                body: n
            } = e;
            return u.default.track(c.AnalyticEvents.ACCOUNT_LINK_STEP, {
                previous_step: "PIN code entry",
                current_step: "PIN success",
                session_id: n.state,
                platform_type: t
            }), f(t, {
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
            url: c.Endpoints.CONNECTION(e, t),
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
            }), r.default.post({
                url: c.Endpoints.INTEGRATION_JOIN(e),
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
                } = await r.default.get({
                    url: c.Endpoints.CONNECTION_ACCESS_TOKEN(e, t),
                    oldFormErrors: !0
                });
                return a.default.dispatch({
                    type: "USER_CONNECTION_UPDATE",
                    platformType: e,
                    id: t,
                    accessToken: n
                }), n
            } catch (n) {
                throw n.body.code === c.AbortCodes.CONNECTION_REVOKED && a.default.dispatch({
                    type: "USER_CONNECTION_UPDATE",
                    platformType: e,
                    id: t,
                    revoked: !0
                }), n
            }
        },
        linkDispatchAuthCallback: (e, t) => r.default.post({
            url: c.Endpoints.CONNECTIONS_LINK_DISPATCH_AUTH_CALLBACK(e),
            body: {
                ...t
            },
            oldFormErrors: !0
        }),
        async completeTwoWayLink(e, t, n, i, s) {
            if (null == t) {
                _.error("Two-way link: missing authorize location");
                return
            }
            let {
                code: r,
                error: a,
                errorDescription: l
            } = (0, o.getCallbackParamsFromURL)(t);
            if (null != a) {
                _.error("Two-way link: missing authorize code", {
                    error: a,
                    errorDescription: l
                });
                return
            }
            return await f(e, {
                code: n,
                state: i,
                two_way_link_code: r,
                token_redirect_uri: s
            })
        }
    }
}