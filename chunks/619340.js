function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    });
    var s = n("759843"),
        i = n("382825"),
        r = n("872717"),
        a = n("913144"),
        o = n("535013"),
        d = n("605250"),
        u = n("599110"),
        l = n("840707"),
        f = n("49111");
    let _ = new d.default("ConnectedAccounts");

    function c(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return r.default.post({
            url: f.Endpoints.CONNECTIONS_CALLBACK(e),
            body: {
                ...t,
                insecure: n,
                friend_sync: f.FRIEND_SYNC_PLATFORM_TYPES.has(e)
            },
            oldFormErrors: !0
        })
    }
    var g = {
        fetch: () => r.default.get({
            url: f.Endpoints.CONNECTIONS,
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
                twoWayLinkType: s,
                userCode: a
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return u.default.track(f.AnalyticEvents.CONNECTED_ACCOUNT_INITIATED, {
                platform_type: e,
                location: n
            }), t = s === i.TwoWayLinkType.DEVICE_CODE && null != a ? f.Endpoints.CONNECTIONS_AUTHORIZE_LINK_DEVICE(e, a) : null != s ? f.Endpoints.CONNECTIONS_AUTHORIZE_LINK(e, s) : f.Endpoints.CONNECTIONS_AUTHORIZE(e), r.default.get({
                url: t,
                oldFormErrors: !0
            })
        },
        callback: c,
        connect(e, t, n, i, r) {
            var a;
            return l.default.put({
                url: f.Endpoints.CONNECTION(e, t),
                body: {
                    name: n,
                    friend_sync: null !== (a = null == r ? void 0 : r.friend_sync) && void 0 !== a ? a : f.FRIEND_SYNC_PLATFORM_TYPES.has(e)
                },
                context: {
                    location: i
                },
                oldFormErrors: !0,
                trackedActionData: {
                    event: s.NetworkActionNames.USER_CONNECTIONS_UPDATE,
                    properties: {
                        name: n,
                        friend_sync: f.FRIEND_SYNC_PLATFORM_TYPES.has(e)
                    }
                }
            })
        },
        disconnect: (e, t) => r.default.delete({
            url: f.Endpoints.CONNECTION(e, t),
            oldFormErrors: !0
        }),
        refresh: (e, t) => r.default.post({
            url: f.Endpoints.CONNECTION_REFRESH(e, t),
            oldFormErrors: !0
        }),
        submitPinCode: (e, t) => r.default.get({
            url: f.Endpoints.CONNECTIONS_CALLBACK_CONTINUATION(t, e),
            oldFormErrors: !0
        }).then(e => {
            let {
                body: n
            } = e;
            return u.default.track(f.AnalyticEvents.ACCOUNT_LINK_STEP, {
                previous_step: "PIN code entry",
                current_step: "PIN success",
                session_id: n.state,
                platform_type: t
            }), c(t, {
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
        update: (e, t, n) => l.default.patch({
            url: f.Endpoints.CONNECTION(e, t),
            body: n,
            oldFormErrors: !0,
            trackedActionData: {
                event: s.NetworkActionNames.USER_CONNECTIONS_UPDATE,
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
                url: f.Endpoints.INTEGRATION_JOIN(e),
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
                    url: f.Endpoints.CONNECTION_ACCESS_TOKEN(e, t),
                    oldFormErrors: !0
                });
                return a.default.dispatch({
                    type: "USER_CONNECTION_UPDATE",
                    platformType: e,
                    id: t,
                    accessToken: n
                }), n
            } catch (n) {
                throw n.body.code === f.AbortCodes.CONNECTION_REVOKED && a.default.dispatch({
                    type: "USER_CONNECTION_UPDATE",
                    platformType: e,
                    id: t,
                    revoked: !0
                }), n
            }
        },
        linkDispatchAuthCallback: (e, t) => r.default.post({
            url: f.Endpoints.CONNECTIONS_LINK_DISPATCH_AUTH_CALLBACK(e),
            body: {
                ...t
            },
            oldFormErrors: !0
        }),
        async completeTwoWayLink(e, t, n, s, i) {
            if (null == t) {
                _.error("Two-way link: missing authorize location");
                return
            }
            let {
                code: r,
                error: a,
                errorDescription: d
            } = (0, o.getCallbackParamsFromURL)(t);
            if (null != a) {
                _.error("Two-way link: missing authorize code", {
                    error: a,
                    errorDescription: d
                });
                return
            }
            return await c(e, {
                code: n,
                state: s,
                two_way_link_code: r,
                token_redirect_uri: i
            })
        }
    }
}