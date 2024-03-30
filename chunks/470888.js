function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("383959"),
        o = n("863828"),
        i = n("967888"),
        a = n("629815"),
        u = n("965067"),
        s = n("35523"),
        l = n("870331"),
        c = n("463156"),
        f = n("281767");

    function d(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function _(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    d(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    d(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function E(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function p(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function m(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(i) {
            return function(u) {
                return function(i) {
                    if (n) throw TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1], o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = t.call(e, a)
                    } catch (e) {
                        i = [6, e], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, u])
            }
        }
    }
    var y = new s.default("ConnectedAccounts");

    function I(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return i.HTTP.post({
            url: f.Endpoints.CONNECTIONS_CALLBACK(e),
            body: p(E({}, t), {
                insecure: n,
                friend_sync: f.FRIEND_SYNC_PLATFORM_TYPES.has(e)
            }),
            oldFormErrors: !0
        })
    }
    t.default = {
        fetch: function() {
            return i.HTTP.get({
                url: f.Endpoints.CONNECTIONS,
                oldFormErrors: !0
            }).then(function(e) {
                return a.default.dispatch({
                    type: "USER_CONNECTIONS_UPDATE",
                    local: !0,
                    accounts: e.body
                })
            }, function() {
                return a.default.dispatch({
                    type: "USER_CONNECTIONS_UPDATE",
                    local: !0,
                    accounts: []
                })
            })
        },
        authorize: function(e) {
            var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = n.location,
                a = n.twoWayLinkType,
                u = n.userCode;
            return l.default.track(f.AnalyticEvents.CONNECTED_ACCOUNT_INITIATED, {
                platform_type: e,
                location: r
            }), t = a === o.TwoWayLinkType.DEVICE_CODE && null != u ? f.Endpoints.CONNECTIONS_AUTHORIZE_LINK_DEVICE(e, u) : null != a ? f.Endpoints.CONNECTIONS_AUTHORIZE_LINK(e, a) : f.Endpoints.CONNECTIONS_AUTHORIZE(e), i.HTTP.get({
                url: t,
                oldFormErrors: !0
            })
        },
        callback: I,
        connect: function(e, t, n, o, i) {
            var a;
            return c.default.put({
                url: f.Endpoints.CONNECTION(e, t),
                body: {
                    name: n,
                    friend_sync: null !== (a = null == i ? void 0 : i.friend_sync) && void 0 !== a ? a : f.FRIEND_SYNC_PLATFORM_TYPES.has(e)
                },
                context: {
                    location: o
                },
                oldFormErrors: !0,
                trackedActionData: {
                    event: r.NetworkActionNames.USER_CONNECTIONS_UPDATE,
                    properties: {
                        name: n,
                        friend_sync: f.FRIEND_SYNC_PLATFORM_TYPES.has(e)
                    }
                }
            })
        },
        disconnect: function(e, t) {
            return i.HTTP.del({
                url: f.Endpoints.CONNECTION(e, t),
                oldFormErrors: !0
            })
        },
        refresh: function(e, t) {
            return i.HTTP.post({
                url: f.Endpoints.CONNECTION_REFRESH(e, t),
                oldFormErrors: !0
            })
        },
        submitPinCode: function(e, t) {
            return i.HTTP.get({
                url: f.Endpoints.CONNECTIONS_CALLBACK_CONTINUATION(t, e),
                oldFormErrors: !0
            }).then(function(e) {
                var n = e.body;
                return l.default.track(f.AnalyticEvents.ACCOUNT_LINK_STEP, {
                    previous_step: "PIN code entry",
                    current_step: "PIN success",
                    session_id: n.state,
                    platform_type: t
                }), I(t, p(E({}, n), {
                    from_continuation: !0
                }), !0)
            })
        },
        setVisibility: function(e, t, n) {
            return this.update(e, t, {
                visibility: 1 === n
            })
        },
        setMetadataVisibility: function(e, t, n) {
            return this.update(e, t, {
                metadata_visibility: 1 === n
            })
        },
        setFriendSync: function(e, t, n) {
            return this.update(e, t, {
                friend_sync: n
            })
        },
        setShowActivity: function(e, t, n) {
            return this.update(e, t, {
                show_activity: n
            })
        },
        update: function(e, t, n) {
            return c.default.patch({
                url: f.Endpoints.CONNECTION(e, t),
                body: n,
                oldFormErrors: !0,
                trackedActionData: {
                    event: r.NetworkActionNames.USER_CONNECTIONS_UPDATE,
                    properties: E({}, n)
                }
            })
        },
        joinServer: function(e, t) {
            a.default.dispatch({
                type: "USER_CONNECTIONS_INTEGRATION_JOINING",
                integrationId: e,
                joining: !0
            }), i.HTTP.post({
                url: f.Endpoints.INTEGRATION_JOIN(e),
                oldFormErrors: !0
            }, function(n) {
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
        refreshAccessToken: function(e, t) {
            return _(function() {
                var n, r;
                return m(this, function(o) {
                    switch (o.label) {
                        case 0:
                            return o.trys.push([0, 2, , 3]), [4, i.HTTP.get({
                                url: f.Endpoints.CONNECTION_ACCESS_TOKEN(e, t),
                                oldFormErrors: !0
                            })];
                        case 1:
                            return n = o.sent().body.access_token, a.default.dispatch({
                                type: "USER_CONNECTION_UPDATE",
                                platformType: e,
                                id: t,
                                accessToken: n
                            }), [2, n];
                        case 2:
                            throw (r = o.sent()).body.code === f.AbortCodes.CONNECTION_REVOKED && a.default.dispatch({
                                type: "USER_CONNECTION_UPDATE",
                                platformType: e,
                                id: t,
                                revoked: !0
                            }), r;
                        case 3:
                            return [2]
                    }
                })
            })()
        },
        linkDispatchAuthCallback: function(e, t) {
            return i.HTTP.post({
                url: f.Endpoints.CONNECTIONS_LINK_DISPATCH_AUTH_CALLBACK(e),
                body: E({}, t),
                oldFormErrors: !0
            })
        },
        completeTwoWayLink: function(e, t, n, r, o) {
            return _(function() {
                var i, a, s, l;
                return m(this, function(c) {
                    switch (c.label) {
                        case 0:
                            if (null == t) return y.error("Two-way link: missing authorize location"), [2];
                            if (a = (i = (0, u.getCallbackParamsFromURL)(t)).code, s = i.error, l = i.errorDescription, null != s) return y.error("Two-way link: missing authorize code", {
                                error: s,
                                errorDescription: l
                            }), [2];
                            return [4, I(e, {
                                code: n,
                                state: r,
                                two_way_link_code: a,
                                token_redirect_uri: o
                            })];
                        case 1:
                            return [2, c.sent()]
                    }
                })
            })()
        }
    }
}