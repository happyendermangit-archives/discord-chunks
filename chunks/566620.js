function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        disconnectEmbeddedActivity: function() {
            return P
        },
        dismissNewActivityIndicator: function() {
            return V
        },
        fetchDeveloperApplications: function() {
            return U
        },
        fetchShelf: function() {
            return w
        },
        launchEmbeddedActivity: function() {
            return M
        },
        sendEmbeddedActivityInvite: function() {
            return B
        },
        sendEmbeddedActivityInviteUser: function() {
            return k
        },
        startEmbeddedActivity: function() {
            return v
        },
        stopEmbeddedActivity: function() {
            return y
        },
        updateActivityPanelMode: function() {
            return F
        },
        updateFocusedActivityLayout: function() {
            return H
        },
        uploadImageAttachment: function() {
            return b
        },
        validateTestMode: function() {
            return x
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
        _ = n("812236"),
        c = n("812206"),
        E = n("358221"),
        I = n("188597"),
        T = n("973616"),
        f = n("314897"),
        S = n("592125"),
        h = n("944486"),
        A = n("594174"),
        m = n("823379"),
        N = n("573261"),
        p = n("317381"),
        O = n("844797"),
        R = n("672181"),
        C = n("917107"),
        g = n("981631"),
        L = n("674563"),
        D = n("245335");

    function v(e, t, n) {
        let i = f.default.getId(),
            r = p.default.getSelfEmbeddedActivityForChannel(e),
            a = p.default.getEmbeddedActivitiesForChannel(e).find(e => e.applicationId === t && e.userIds.has(i));
        null != r ? y({
            channelId: e,
            applicationId: r.applicationId,
            showFeedback: !1
        }) : null != a && P(e, t, !0), s.default.dispatch({
            type: "EMBEDDED_ACTIVITY_OPEN",
            channelId: e,
            applicationId: t,
            analyticsLocations: n
        }), (0, C.default)(e) ? (o.default.selectParticipant(e, t), o.default.updateLayout(e, g.ChannelLayouts.NO_CHAT)) : (0, R.default)(e)
    }
    async function M(e) {
        var t, n;
        let r = S.default.getChannel(e),
            a = null !== (t = null == r ? void 0 : r.getGuildId()) && void 0 !== t ? t : void 0;
        if (null == a && !(null !== (n = null == r ? void 0 : r.isPrivate()) && void 0 !== n && n)) return;
        let o = p.default.getSelfEmbeddedActivityForChannel(e);
        if (null === o) return;
        let l = f.default.getSessionId();
        try {
            s.default.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_START",
                embeddedActivity: o
            });
            let t = L.INSTALL_LESS_APP_IDS.includes(o.applicationId);
            if ((0, O.isActivityInTextStart)(e, o.applicationId, h.default, S.default) || t) {
                let t;
                try {
                    t = await (0, _.default)(e, o.applicationId)
                } catch (e) {
                    if (e.message !== _.NO_PRIMARY_APP_COMMAND_ERROR) throw e
                }
                await (0, I.executePrimaryEntryPointInteraction)({
                    applicationId: o.applicationId,
                    channelId: e,
                    guildId: a,
                    command: t
                })
            } else await N.default.post({
                url: g.Endpoints.ACTIVITY_CHANNEL_LAUNCH(e, o.applicationId),
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
            });
            s.default.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS",
                applicationId: o.applicationId
            })
        } catch (t) {
            s.default.dispatch({
                type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
                guildId: a,
                applicationId: o.applicationId,
                error: new d.default(t)
            }), y({
                channelId: e,
                applicationId: o.applicationId,
                showFeedback: !1
            })
        }
    }

    function y(e) {
        var t, n;
        let {
            channelId: i,
            applicationId: r,
            showFeedback: a = !0
        } = e, l = p.default.getSelfEmbeddedActivityForChannel(i);
        s.default.dispatch({
            type: "EMBEDDED_ACTIVITY_CLOSE",
            channelId: i,
            applicationId: r,
            locationId: null == l ? void 0 : null === (t = l.location) || void 0 === t ? void 0 : t.id,
            instanceId: null == l ? void 0 : l.launchId,
            showFeedback: a
        });
        let u = E.default.getSelectedParticipantId(i),
            d = null === (n = A.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
        null != p.default.getEmbeddedActivitiesForChannel(i).find(e => e.applicationId === r) && null != d && "" !== d && u === r && o.default.selectParticipant(i, null)
    }

    function P(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        s.default.dispatch({
            type: "EMBEDDED_ACTIVITY_DISCONNECT",
            channelId: e,
            applicationId: t,
            isRejoiningFromCurrentSession: n
        })
    }
    async function U() {
        try {
            s.default.dispatch({
                type: "DEVELOPER_ACTIVITY_SHELF_FETCH_START"
            });
            let e = (await r.HTTP.get({
                url: g.Endpoints.APPLICATIONS,
                query: {
                    with_team_applications: !0
                },
                oldFormErrors: !0
            })).body.map(e => T.default.createFromServer(e));
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
    async function b(e, t, n) {
        try {
            s.default.dispatch({
                type: "UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START"
            });
            let i = await r.HTTP.post({
                url: g.Endpoints.APPLICATION_UPLOAD_ATTACHMENT(e),
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
    let G = (e, t, n) => {
        let {
            guildId: i
        } = n;
        (i === e || null == i && null == e) && t()
    };
    async function w(e) {
        var t, n, r, a;
        let {
            guildId: o,
            force: l = !1
        } = e, u = p.default.getShelfActivities(o), d = u.map(e => c.default.getApplication(e.application_id)).filter(m.isNotNullish);
        if (!l && !p.default.shouldFetchShelf(o)) {
            if (null === (t = p.default.getShelfFetchStatus(o)) || void 0 === t ? void 0 : t.isFetching) {
                let e, t;
                let n = new Promise(t => {
                        e = G.bind(null, o, t), s.default.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", e)
                    }),
                    i = new Promise(e => {
                        t = G.bind(null, o, e), s.default.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", t)
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
                t = await N.default.get({
                    url: g.Endpoints.ACTIVITY_SHELF,
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
                applications: u.map(e => T.default.createFromServer(e))
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
    async function B(e) {
        let {
            activityChannelId: t,
            invitedChannelId: n,
            applicationId: i,
            location: r
        } = e, s = await l.default.createInvite(t, {
            target_type: D.InviteTargetTypes.EMBEDDED_APPLICATION,
            target_application_id: i
        }, r);
        null != S.default.getChannel(n) && u.default.sendInvite(n, s.code, r, null)
    }
    async function k(e) {
        let {
            channelId: t,
            applicationId: n,
            userId: i,
            location: r
        } = e, s = await l.default.createInvite(t, {
            target_type: D.InviteTargetTypes.EMBEDDED_APPLICATION,
            target_application_id: n
        }, r);
        a.default.ensurePrivateChannel(i).then(e => {
            null != S.default.getChannel(e) && u.default.sendInvite(e, s.code, r, null)
        })
    }

    function V() {
        s.default.dispatch({
            type: "EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR"
        })
    }
    async function x(e) {
        let t = g.Endpoints.ACTIVITY_TEST_MODE(e);
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

    function H(e) {
        s.default.dispatch({
            type: "EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT",
            focusedActivityLayout: e
        })
    }
}