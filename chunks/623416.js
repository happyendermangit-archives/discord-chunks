function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        disconnectEmbeddedActivity: function() {
            return U
        },
        dismissNewActivityIndicator: function() {
            return K
        },
        fetchDeveloperApplications: function() {
            return w
        },
        fetchShelf: function() {
            return F
        },
        launchEmbeddedActivity: function() {
            return D
        },
        sendEmbeddedActivityInvite: function() {
            return H
        },
        sendEmbeddedActivityInviteUser: function() {
            return Y
        },
        startEmbeddedActivity: function() {
            return P
        },
        stopEmbeddedActivity: function() {
            return M
        },
        updateActivityPanelMode: function() {
            return q
        },
        updateFocusedActivityLayout: function() {
            return Q
        },
        uploadImageAttachment: function() {
            return G
        },
        validateTestMode: function() {
            return z
        }
    });
    var r = n("383959"),
        o = n("967888"),
        i = n("629815"),
        a = n("651820"),
        u = n("118133"),
        s = n("945215"),
        l = n("443458"),
        c = n("375314"),
        f = n("342942"),
        d = n("390579"),
        _ = n("900060"),
        E = n("338140"),
        p = n("217014"),
        m = n("935741"),
        y = n("894288"),
        I = n("208454"),
        h = n("162677"),
        O = n("463156"),
        T = n("987351"),
        S = n("632142"),
        v = n("130864"),
        g = n("224680"),
        A = n("281767"),
        b = n("551941");

    function N(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function R(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    N(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    N(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function C(e, t) {
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

    function P(e, t, n) {
        var r = p.default.getId(),
            o = S.default.getSelfEmbeddedActivityForChannel(e),
            a = S.default.getEmbeddedActivitiesForChannel(e).find(function(e) {
                return e.applicationId === t && e.userIds.has(r)
            });
        null != o ? M({
            channelId: e,
            applicationId: o.applicationId,
            showFeedback: !1
        }) : null != a && U(e, t, !0), i.default.dispatch({
            type: "EMBEDDED_ACTIVITY_OPEN",
            channelId: e,
            applicationId: t,
            analyticsLocations: n
        }), (0, g.default)(e) ? (u.default.selectParticipant(e, t), u.default.updateLayout(e, A.ChannelLayouts.NO_CHAT)) : (0, v.default)(e)
    }

    function D(e) {
        return L.apply(this, arguments)
    }

    function L() {
        return (L = R(function(e) {
            var t, n, o, a, u, s, l;
            return C(this, function(f) {
                switch (f.label) {
                    case 0:
                        if (null == (o = null !== (n = null == (t = m.default.getChannel(e)) ? void 0 : t.getGuildId()) && void 0 !== n ? n : void 0) && !(null !== (a = null == t ? void 0 : t.isPrivate()) && void 0 !== a && a) || null === (u = S.default.getSelfEmbeddedActivityForChannel(e))) return [2];
                        s = p.default.getSessionId(), f.label = 1;
                    case 1:
                        if (f.trys.push([1, 6, , 7]), i.default.dispatch({
                                type: "EMBEDDED_ACTIVITY_LAUNCH_START",
                                embeddedActivity: u
                            }), ! function(e, t) {
                                var n = m.default.getChannel(e);
                                if (S.default.getEmbeddedActivitiesForChannel(e).some(function(e) {
                                        return e.applicationId === t
                                    })) return !1;
                                var r = (0, T.isActivitiesInTextEnabled)(n, "EmbeddedActivitiesActionCreators#isActivityInTextStart");
                                return !!((null == n ? void 0 : n.type) === A.ChannelTypes.GUILD_TEXT && r || null != n && n.isPrivate() && r && null == y.default.getVoiceChannelId()) || !1
                            }(e, u.applicationId)) return [3, 3];
                        return [4, (0, _.executePrimaryEntryPointInteraction)({
                            applicationId: u.applicationId,
                            channelId: e,
                            guildId: o
                        })];
                    case 2:
                        return f.sent(), [3, 5];
                    case 3:
                        return [4, O.default.post({
                            url: A.Endpoints.ACTIVITY_CHANNEL_LAUNCH(e, u.applicationId),
                            body: {
                                session_id: s,
                                guild_id: null != o ? o : void 0
                            },
                            trackedActionData: {
                                event: r.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
                                properties: {
                                    guild_id: o,
                                    channel_id: e,
                                    application_id: u.applicationId,
                                    session_id: s
                                }
                            },
                            retries: 3,
                            oldFormErrors: !0
                        })];
                    case 4:
                        f.sent(), f.label = 5;
                    case 5:
                        return i.default.dispatch({
                            type: "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS",
                            applicationId: u.applicationId
                        }), [3, 7];
                    case 6:
                        return l = f.sent(), i.default.dispatch({
                            type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                            guildId: o,
                            applicationId: u.applicationId,
                            error: new c.default(l)
                        }), M({
                            channelId: e,
                            applicationId: u.applicationId,
                            showFeedback: !1
                        }), [3, 7];
                    case 7:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function M(e) {
        var t, n = e.channelId,
            r = e.applicationId,
            o = e.showFeedback;
        i.default.dispatch({
            type: "EMBEDDED_ACTIVITY_CLOSE",
            channelId: n,
            applicationId: r,
            showFeedback: void 0 === o || o
        });
        var a = d.default.getSelectedParticipantId(n),
            s = null === (t = I.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
        null != S.default.getEmbeddedActivitiesForChannel(n).find(function(e) {
            return e.applicationId === r
        }) && null != s && "" !== s && a === r && u.default.selectParticipant(n, null)
    }

    function U(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        i.default.dispatch({
            type: "EMBEDDED_ACTIVITY_DISCONNECT",
            channelId: e,
            applicationId: t,
            isRejoiningFromCurrentSession: n
        })
    }

    function w() {
        return k.apply(this, arguments)
    }

    function k() {
        return (k = R(function() {
            var e, t;
            return C(this, function(t) {
                switch (t.label) {
                    case 0:
                        return t.trys.push([0, 2, , 3]), i.default.dispatch({
                            type: "DEVELOPER_ACTIVITY_SHELF_FETCH_START"
                        }), [4, o.HTTP.get({
                            url: A.Endpoints.APPLICATIONS,
                            query: {
                                with_team_applications: !0
                            },
                            oldFormErrors: !0
                        })];
                    case 1:
                        return e = t.sent().body.map(function(e) {
                            return E.default.createFromServer(e)
                        }), i.default.dispatch({
                            type: "DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS",
                            items: e
                        }), [3, 3];
                    case 2:
                        return t.sent(), i.default.dispatch({
                            type: "DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL"
                        }), [3, 3];
                    case 3:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function G(e, t, n) {
        return B.apply(this, arguments)
    }

    function B() {
        return (B = R(function(e, t, n) {
            var r, a;
            return C(this, function(u) {
                switch (u.label) {
                    case 0:
                        return u.trys.push([0, 2, , 3]), i.default.dispatch({
                            type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START"
                        }), [4, o.HTTP.post({
                            url: A.Endpoints.ACTIVITY_UPLOAD_ATTACHMENT(e),
                            query: {
                                channel_id: t
                            },
                            attachments: [{
                                name: "file",
                                file: n
                            }]
                        })];
                    case 1:
                        return r = u.sent(), i.default.dispatch({
                            type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_SUCCESS",
                            attachment: r.body.attachment
                        }), [2, r.body.attachment];
                    case 2:
                        return a = u.sent(), i.default.dispatch({
                            type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL"
                        }), [2, new c.default(a)];
                    case 3:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }
    var j = function(e, t, n) {
        var r = n.guildId;
        (r === e || null == r && null == e) && t()
    };

    function F(e) {
        return V.apply(this, arguments)
    }

    function V() {
        return (V = R(function(e) {
            var t, n, o, a, u, s, l, c, d, _, p, m, y, I, T, v, g, b;
            return C(this, function(b) {
                switch (b.label) {
                    case 0:
                        if (t = e.guildId, o = void 0 !== (n = e.force) && n, u = (a = S.default.getShelfActivities(t)).map(function(e) {
                                return f.default.getApplication(e.application_id)
                            }).filter(h.isNotNullish), !(!o && !S.default.shouldFetchShelf(t))) return [3, 3];
                        if (!(null === (s = S.default.getShelfFetchStatus(t)) || void 0 === s ? void 0 : s.isFetching)) return [3, 2];
                        return c = new Promise(function(e) {
                            l = j.bind(null, t, e), i.default.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", l)
                        }), [4, Promise.race([c, new Promise(function(e) {
                            d = j.bind(null, t, e), i.default.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", d)
                        })])];
                    case 1:
                        b.sent(), null != l && (i.default.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", l), l = null), null != d && (i.default.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", d), d = null), b.label = 2;
                    case 2:
                        return [2, {
                            activityConfigs: a,
                            applications: u
                        }];
                    case 3:
                        return b.trys.push([3, 5, , 6]), i.default.dispatch({
                            type: "EMBEDDED_ACTIVITY_FETCH_SHELF",
                            guildId: t
                        }), _ = void 0 !== t && "" !== t ? {
                            guild_id: t
                        } : void 0, [4, O.default.get({
                            url: A.Endpoints.ACTIVITY_SHELF,
                            query: _,
                            trackedActionData: {
                                event: r.NetworkActionNames.EMBEDDED_ACTIVITIES_FETCH_SHELF,
                                properties: {
                                    guild_id: t
                                }
                            },
                            retries: 3,
                            oldFormErrors: !0
                        })];
                    case 4:
                        return y = null !== (m = (p = b.sent()).body.activities) && void 0 !== m ? m : [], T = null !== (I = p.body.applications) && void 0 !== I ? I : [], g = null !== (v = p.body.assets) && void 0 !== v ? v : {}, i.default.dispatch({
                            type: "EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS",
                            guildId: t,
                            activities: y,
                            applications: T,
                            assets: g
                        }), T.length > 0 && i.default.dispatch({
                            type: "APPLICATIONS_FETCH_SUCCESS",
                            applications: T
                        }), [2, {
                            activityConfigs: y,
                            applications: T.map(function(e) {
                                return E.default.createFromServer(e)
                            })
                        }];
                    case 5:
                        return b.sent(), i.default.dispatch({
                            type: "EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL",
                            guildId: t
                        }), [2, {
                            activityConfigs: a,
                            applications: u
                        }];
                    case 6:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function H(e) {
        return x.apply(this, arguments)
    }

    function x() {
        return (x = R(function(e) {
            var t, n, r, o, i;
            return C(this, function(a) {
                switch (a.label) {
                    case 0:
                        return t = e.activityChannelId, n = e.invitedChannelId, r = e.applicationId, o = e.location, [4, s.default.createInvite(t, {
                            target_type: b.InviteTargetTypes.EMBEDDED_APPLICATION,
                            target_application_id: r
                        }, o)];
                    case 1:
                        if (i = a.sent(), null == m.default.getChannel(n)) return [2];
                        return l.default.sendInvite(n, i.code, o, null), [2]
                }
            })
        })).apply(this, arguments)
    }

    function Y(e) {
        return W.apply(this, arguments)
    }

    function W() {
        return (W = R(function(e) {
            var t, n, r, o, i;
            return C(this, function(u) {
                switch (u.label) {
                    case 0:
                        return t = e.channelId, n = e.applicationId, r = e.userId, o = e.location, [4, s.default.createInvite(t, {
                            target_type: b.InviteTargetTypes.EMBEDDED_APPLICATION,
                            target_application_id: n
                        }, o)];
                    case 1:
                        return i = u.sent(), a.default.ensurePrivateChannel(r).then(function(e) {
                            null != m.default.getChannel(e) && l.default.sendInvite(e, i.code, o, null)
                        }), [2]
                }
            })
        })).apply(this, arguments)
    }

    function K() {
        i.default.dispatch({
            type: "EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR"
        })
    }

    function z(e) {
        return X.apply(this, arguments)
    }

    function X() {
        return (X = R(function(e) {
            var t, n;
            return C(this, function(n) {
                switch (n.label) {
                    case 0:
                        t = A.Endpoints.ACTIVITY_TEST_MODE(e), n.label = 1;
                    case 1:
                        return n.trys.push([1, 3, , 4]), [4, o.HTTP.get({
                            url: t,
                            oldFormErrors: !0
                        })];
                    case 2:
                        return n.sent(), [2, !0];
                    case 3:
                        return n.sent(), [2, !1];
                    case 4:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function q(e) {
        i.default.dispatch({
            type: "EMBEDDED_ACTIVITY_SET_PANEL_MODE",
            activityPanelMode: e
        })
    }

    function Q(e) {
        i.default.dispatch({
            type: "EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT",
            focusedActivityLayout: e
        })
    }
}