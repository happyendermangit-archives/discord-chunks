function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        startEmbeddedActivity: function() {
            return R
        },
        launchEmbeddedActivity: function() {
            return O
        },
        stopEmbeddedActivity: function() {
            return D
        },
        disconnectEmbeddedActivity: function() {
            return P
        },
        fetchDeveloperApplications: function() {
            return L
        },
        uploadImageAttachment: function() {
            return M
        },
        fetchShelf: function() {
            return U
        },
        sendEmbeddedActivityInvite: function() {
            return w
        },
        sendEmbeddedActivityInviteUser: function() {
            return k
        },
        dismissNewActivityIndicator: function() {
            return V
        },
        validateTestMode: function() {
            return G
        },
        updateActivityPanelMode: function() {
            return F
        },
        updateFocusedActivityLayout: function() {
            return x
        }
    }), n("222007");
    var i = n("759843"),
        s = n("872717"),
        r = n("913144"),
        a = n("450911"),
        o = n("255397"),
        l = n("970728"),
        u = n("819689"),
        d = n("599417"),
        c = n("299285"),
        f = n("191145"),
        _ = n("752598"),
        E = n("653047"),
        h = n("271938"),
        g = n("42203"),
        m = n("18494"),
        p = n("697218"),
        S = n("449008"),
        v = n("840707"),
        T = n("427953"),
        I = n("191225"),
        C = n("458184"),
        A = n("420444"),
        y = n("49111"),
        N = n("91366");

    function R(e, t, n) {
        let i = h.default.getId(),
            s = I.default.getSelfEmbeddedActivityForChannel(e),
            a = I.default.getEmbeddedActivitiesForChannel(e),
            l = a.find(e => e.applicationId === t && e.userIds.has(i));
        null != s ? D({
            channelId: e,
            applicationId: s.applicationId,
            showFeedback: !1
        }) : null != l && P(e, t, !0), r.default.dispatch({
            type: "EMBEDDED_ACTIVITY_OPEN",
            channelId: e,
            applicationId: t,
            analyticsLocations: n
        });
        let u = (0, A.default)(e);
        u ? (o.default.selectParticipant(e, t), o.default.updateLayout(e, y.ChannelLayouts.NO_CHAT)) : (0, C.default)(e)
    }
    async function O(e) {
        var t, n;
        let s = g.default.getChannel(e),
            a = null !== (t = null == s ? void 0 : s.getGuildId()) && void 0 !== t ? t : void 0;
        if (null == a && !(null !== (n = null == s ? void 0 : s.isPrivate()) && void 0 !== n && n)) return;
        let o = I.default.getSelfEmbeddedActivityForChannel(e);
        if (null === o) return;
        let l = h.default.getSessionId();
        try {
            r.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_LAUNCH_START",
                    embeddedActivity: o
                }),
                function(e, t) {
                    let n = g.default.getChannel(e),
                        i = I.default.getEmbeddedActivitiesForChannel(e).some(e => e.applicationId === t);
                    if (i) return !1;
                    let s = (0, T.isActivitiesInTextEnabled)(n, "EmbeddedActivitiesActionCreators#isActivityInTextStart");
                    return !!((null == n ? void 0 : n.type) === y.ChannelTypes.GUILD_TEXT && s || null != n && n.isPrivate() && s && null == m.default.getVoiceChannelId()) || !1
                }(e, o.applicationId) ? await (0, _.executePrimaryEntryPointInteraction)({
                    applicationId: o.applicationId,
                    channelId: e,
                    guildId: a
                }) : await v.default.post({
                    url: y.Endpoints.ACTIVITY_CHANNEL_LAUNCH(e, o.applicationId),
                    body: {
                        session_id: l,
                        guild_id: null != a ? a : void 0
                    },
                    trackedActionData: {
                        event: i.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
                        properties: {
                            guild_id: a,
                            channel_id: e,
                            application_id: o.applicationId,
                            session_id: l
                        }
                    },
                    retries: 3,
                    oldFormErrors: !0
                }), r.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS",
                    applicationId: o.applicationId
                })
        } catch (t) {
            r.default.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                guildId: a,
                applicationId: o.applicationId,
                error: new d.default(t)
            }), D({
                channelId: e,
                applicationId: o.applicationId,
                showFeedback: !1
            })
        }
    }

    function D(e) {
        var t;
        let {
            channelId: n,
            applicationId: i,
            showFeedback: s = !0
        } = e;
        r.default.dispatch({
            type: "EMBEDDED_ACTIVITY_CLOSE",
            channelId: n,
            applicationId: i,
            showFeedback: s
        });
        let a = f.default.getSelectedParticipantId(n),
            l = null === (t = p.default.getCurrentUser()) || void 0 === t ? void 0 : t.id,
            u = I.default.getEmbeddedActivitiesForChannel(n).find(e => e.applicationId === i);
        null != u && null != l && "" !== l && a === i && o.default.selectParticipant(n, null)
    }

    function P(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        r.default.dispatch({
            type: "EMBEDDED_ACTIVITY_DISCONNECT",
            channelId: e,
            applicationId: t,
            isRejoiningFromCurrentSession: n
        })
    }
    async function L() {
        try {
            r.default.dispatch({
                type: "DEVELOPER_ACTIVITY_SHELF_FETCH_START"
            });
            let e = await s.default.get({
                    url: y.Endpoints.APPLICATIONS,
                    query: {
                        with_team_applications: !0
                    },
                    oldFormErrors: !0
                }),
                t = e.body.map(e => E.default.createFromServer(e));
            r.default.dispatch({
                type: "DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS",
                items: t
            })
        } catch (e) {
            r.default.dispatch({
                type: "DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL"
            })
        }
    }
    async function M(e, t, n) {
        try {
            r.default.dispatch({
                type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START"
            });
            let i = await s.default.post({
                url: y.Endpoints.ACTIVITY_UPLOAD_ATTACHMENT(e),
                query: {
                    channel_id: t
                },
                attachments: [{
                    name: "file",
                    file: n
                }]
            });
            return r.default.dispatch({
                type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_SUCCESS",
                attachment: i.body.attachment
            }), i.body.attachment
        } catch (e) {
            return r.default.dispatch({
                type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL"
            }), new d.default(e)
        }
    }
    let b = (e, t, n) => {
        let {
            guildId: i
        } = n;
        (i === e || null == i && null == e) && t()
    };
    async function U(e) {
        var t, n, s, a;
        let {
            guildId: o,
            force: l = !1
        } = e, u = I.default.getShelfActivities(o), d = u.map(e => c.default.getApplication(e.application_id)).filter(S.isNotNullish);
        if (!l && !I.default.shouldFetchShelf(o)) {
            if (null === (t = I.default.getShelfFetchStatus(o)) || void 0 === t ? void 0 : t.isFetching) {
                let e, t;
                let n = new Promise(t => {
                        e = b.bind(null, o, t), r.default.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e)
                    }),
                    i = new Promise(e => {
                        t = b.bind(null, o, e), r.default.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", t)
                    });
                await Promise.race([n, i]), null != e && (r.default.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e), e = null), null != t && (r.default.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", t), t = null)
            }
            return {
                activityConfigs: u,
                applications: d
            }
        }
        try {
            r.default.dispatch({
                type: "EMBEDDED_ACTIVITY_FETCH_SHELF",
                guildId: o
            });
            let e = void 0 !== o && "" !== o,
                t = e ? {
                    guild_id: o
                } : void 0,
                l = await v.default.get({
                    url: y.Endpoints.ACTIVITY_SHELF,
                    query: t,
                    trackedActionData: {
                        event: i.NetworkActionNames.EMBEDDED_ACTIVITIES_FETCH_SHELF,
                        properties: {
                            guild_id: o
                        }
                    },
                    retries: 3,
                    oldFormErrors: !0
                }),
                u = null !== (n = l.body.activities) && void 0 !== n ? n : [],
                d = null !== (s = l.body.applications) && void 0 !== s ? s : [],
                c = null !== (a = l.body.assets) && void 0 !== a ? a : {};
            return r.default.dispatch({
                type: "EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS",
                guildId: o,
                activities: u,
                applications: d,
                assets: c
            }), d.length > 0 && r.default.dispatch({
                type: "APPLICATIONS_FETCH_SUCCESS",
                applications: d
            }), {
                activityConfigs: u,
                applications: d.map(e => E.default.createFromServer(e))
            }
        } catch (e) {
            return r.default.dispatch({
                type: "EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL",
                guildId: o
            }), {
                activityConfigs: u,
                applications: d
            }
        }
    }
    async function w(e) {
        let {
            activityChannelId: t,
            invitedChannelId: n,
            applicationId: i,
            location: s
        } = e, r = await l.default.createInvite(t, {
            target_type: N.InviteTargetTypes.EMBEDDED_APPLICATION,
            target_application_id: i
        }, s);
        null != g.default.getChannel(n) && u.default.sendInvite(n, r.code, s, null)
    }
    async function k(e) {
        let {
            channelId: t,
            applicationId: n,
            userId: i,
            location: s
        } = e, r = await l.default.createInvite(t, {
            target_type: N.InviteTargetTypes.EMBEDDED_APPLICATION,
            target_application_id: n
        }, s);
        a.default.ensurePrivateChannel(i).then(e => {
            null != g.default.getChannel(e) && u.default.sendInvite(e, r.code, s, null)
        })
    }

    function V() {
        r.default.dispatch({
            type: "EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR"
        })
    }
    async function G(e) {
        let t = y.Endpoints.ACTIVITY_TEST_MODE(e);
        try {
            return await s.default.get({
                url: t,
                oldFormErrors: !0
            }), !0
        } catch (e) {
            return !1
        }
    }

    function F(e) {
        r.default.dispatch({
            type: "EMBEDDED_ACTIVITY_SET_PANEL_MODE",
            activityPanelMode: e
        })
    }

    function x(e) {
        r.default.dispatch({
            type: "EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT",
            focusedActivityLayout: e
        })
    }
}