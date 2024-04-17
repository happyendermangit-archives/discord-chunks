function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        disconnectEmbeddedActivity: function() {
            return M
        },
        dismissNewActivityIndicator: function() {
            return B
        },
        fetchDeveloperApplications: function() {
            return y
        },
        fetchShelf: function() {
            return b
        },
        launchEmbeddedActivity: function() {
            return D
        },
        sendEmbeddedActivityInvite: function() {
            return G
        },
        sendEmbeddedActivityInviteUser: function() {
            return w
        },
        startEmbeddedActivity: function() {
            return L
        },
        stopEmbeddedActivity: function() {
            return v
        },
        updateActivityPanelMode: function() {
            return F
        },
        updateFocusedActivityLayout: function() {
            return V
        },
        uploadImageAttachment: function() {
            return P
        },
        validateTestMode: function() {
            return k
        }
    }), n("47120");
    var i = n("990547"),
        r = n("544891"),
        s = n("570140"),
        a = n("493683"),
        o = n("475179"),
        l = n("447543"),
        u = n("904245"),
        d = n("479531"),
        _ = n("812206"),
        c = n("358221"),
        E = n("188597"),
        I = n("973616"),
        T = n("314897"),
        f = n("592125"),
        S = n("944486"),
        h = n("594174"),
        A = n("823379"),
        m = n("573261"),
        N = n("867176"),
        p = n("317381"),
        O = n("672181"),
        R = n("917107"),
        C = n("981631"),
        g = n("245335");

    function L(e, t, n) {
        let i = T.default.getId(),
            r = p.default.getSelfEmbeddedActivityForChannel(e),
            a = p.default.getEmbeddedActivitiesForChannel(e).find(e => e.applicationId === t && e.userIds.has(i));
        null != r ? v({
            channelId: e,
            applicationId: r.applicationId,
            showFeedback: !1
        }) : null != a && M(e, t, !0), s.default.dispatch({
            type: "EMBEDDED_ACTIVITY_OPEN",
            channelId: e,
            applicationId: t,
            analyticsLocations: n
        }), (0, R.default)(e) ? (o.default.selectParticipant(e, t), o.default.updateLayout(e, C.ChannelLayouts.NO_CHAT)) : (0, O.default)(e)
    }
    async function D(e) {
        var t, n;
        let r = f.default.getChannel(e),
            a = null !== (t = null == r ? void 0 : r.getGuildId()) && void 0 !== t ? t : void 0;
        if (null == a && !(null !== (n = null == r ? void 0 : r.isPrivate()) && void 0 !== n && n)) return;
        let o = p.default.getSelfEmbeddedActivityForChannel(e);
        if (null === o) return;
        let l = T.default.getSessionId();
        try {
            s.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_LAUNCH_START",
                    embeddedActivity: o
                }),
                function(e, t) {
                    let n = f.default.getChannel(e);
                    if (p.default.getEmbeddedActivitiesForChannel(e).some(e => e.applicationId === t)) return !1;
                    let i = (0, N.isActivitiesInTextEnabled)(n, "EmbeddedActivitiesActionCreators#isActivityInTextStart");
                    return !!((null == n ? void 0 : n.type) === C.ChannelTypes.GUILD_TEXT && i || null != n && n.isPrivate() && i && null == S.default.getVoiceChannelId()) || !1
                }(e, o.applicationId) ? await (0, E.executePrimaryEntryPointInteraction)({
                    applicationId: o.applicationId,
                    channelId: e,
                    guildId: a
                }) : await m.default.post({
                    url: C.Endpoints.ACTIVITY_CHANNEL_LAUNCH(e, o.applicationId),
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
                }), s.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS",
                    applicationId: o.applicationId
                })
        } catch (t) {
            s.default.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                guildId: a,
                applicationId: o.applicationId,
                error: new d.default(t)
            }), v({
                channelId: e,
                applicationId: o.applicationId,
                showFeedback: !1
            })
        }
    }

    function v(e) {
        var t;
        let {
            channelId: n,
            applicationId: i,
            showFeedback: r = !0
        } = e;
        s.default.dispatch({
            type: "EMBEDDED_ACTIVITY_CLOSE",
            channelId: n,
            applicationId: i,
            showFeedback: r
        });
        let a = c.default.getSelectedParticipantId(n),
            l = null === (t = h.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
        null != p.default.getEmbeddedActivitiesForChannel(n).find(e => e.applicationId === i) && null != l && "" !== l && a === i && o.default.selectParticipant(n, null)
    }

    function M(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        s.default.dispatch({
            type: "EMBEDDED_ACTIVITY_DISCONNECT",
            channelId: e,
            applicationId: t,
            isRejoiningFromCurrentSession: n
        })
    }
    async function y() {
        try {
            s.default.dispatch({
                type: "DEVELOPER_ACTIVITY_SHELF_FETCH_START"
            });
            let e = (await r.HTTP.get({
                url: C.Endpoints.APPLICATIONS,
                query: {
                    with_team_applications: !0
                },
                oldFormErrors: !0
            })).body.map(e => I.default.createFromServer(e));
            s.default.dispatch({
                type: "DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS",
                items: e
            })
        } catch (e) {
            s.default.dispatch({
                type: "DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL"
            })
        }
    }
    async function P(e, t, n) {
        try {
            s.default.dispatch({
                type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START"
            });
            let i = await r.HTTP.post({
                url: C.Endpoints.APPLICATION_UPLOAD_ATTACHMENT(e),
                query: {
                    channel_id: t
                },
                attachments: [{
                    name: "file",
                    file: n
                }]
            });
            return s.default.dispatch({
                type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_SUCCESS",
                attachment: i.body.attachment
            }), i.body.attachment
        } catch (e) {
            return s.default.dispatch({
                type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL"
            }), new d.default(e)
        }
    }
    let U = (e, t, n) => {
        let {
            guildId: i
        } = n;
        (i === e || null == i && null == e) && t()
    };
    async function b(e) {
        var t, n, r, a;
        let {
            guildId: o,
            force: l = !1
        } = e, u = p.default.getShelfActivities(o), d = u.map(e => _.default.getApplication(e.application_id)).filter(A.isNotNullish);
        if (!l && !p.default.shouldFetchShelf(o)) {
            if (null === (t = p.default.getShelfFetchStatus(o)) || void 0 === t ? void 0 : t.isFetching) {
                let e, t;
                let n = new Promise(t => {
                        e = U.bind(null, o, t), s.default.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e)
                    }),
                    i = new Promise(e => {
                        t = U.bind(null, o, e), s.default.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", t)
                    });
                await Promise.race([n, i]), null != e && (s.default.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e), e = null), null != t && (s.default.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", t), t = null)
            }
            return {
                activityConfigs: u,
                applications: d
            }
        }
        try {
            s.default.dispatch({
                type: "EMBEDDED_ACTIVITY_FETCH_SHELF",
                guildId: o
            });
            let e = void 0 !== o && "" !== o ? {
                    guild_id: o
                } : void 0,
                t = await m.default.get({
                    url: C.Endpoints.ACTIVITY_SHELF,
                    query: e,
                    trackedActionData: {
                        event: i.NetworkActionNames.EMBEDDED_ACTIVITIES_FETCH_SHELF,
                        properties: {
                            guild_id: o
                        }
                    },
                    retries: 3,
                    oldFormErrors: !0
                }),
                l = null !== (n = t.body.activities) && void 0 !== n ? n : [],
                u = null !== (r = t.body.applications) && void 0 !== r ? r : [],
                d = null !== (a = t.body.assets) && void 0 !== a ? a : {};
            return s.default.dispatch({
                type: "EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS",
                guildId: o,
                activities: l,
                applications: u,
                assets: d
            }), u.length > 0 && s.default.dispatch({
                type: "APPLICATIONS_FETCH_SUCCESS",
                applications: u
            }), {
                activityConfigs: l,
                applications: u.map(e => I.default.createFromServer(e))
            }
        } catch (e) {
            return s.default.dispatch({
                type: "EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL",
                guildId: o
            }), {
                activityConfigs: u,
                applications: d
            }
        }
    }
    async function G(e) {
        let {
            activityChannelId: t,
            invitedChannelId: n,
            applicationId: i,
            location: r
        } = e, s = await l.default.createInvite(t, {
            target_type: g.InviteTargetTypes.EMBEDDED_APPLICATION,
            target_application_id: i
        }, r);
        null != f.default.getChannel(n) && u.default.sendInvite(n, s.code, r, null)
    }
    async function w(e) {
        let {
            channelId: t,
            applicationId: n,
            userId: i,
            location: r
        } = e, s = await l.default.createInvite(t, {
            target_type: g.InviteTargetTypes.EMBEDDED_APPLICATION,
            target_application_id: n
        }, r);
        a.default.ensurePrivateChannel(i).then(e => {
            null != f.default.getChannel(e) && u.default.sendInvite(e, s.code, r, null)
        })
    }

    function B() {
        s.default.dispatch({
            type: "EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR"
        })
    }
    async function k(e) {
        let t = C.Endpoints.ACTIVITY_TEST_MODE(e);
        try {
            return await r.HTTP.get({
                url: t,
                oldFormErrors: !0
            }), !0
        } catch (e) {
            return !1
        }
    }

    function F(e) {
        s.default.dispatch({
            type: "EMBEDDED_ACTIVITY_SET_PANEL_MODE",
            activityPanelMode: e
        })
    }

    function V(e) {
        s.default.dispatch({
            type: "EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT",
            focusedActivityLayout: e
        })
    }
}