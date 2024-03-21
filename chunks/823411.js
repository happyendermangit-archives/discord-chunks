function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return y
        }
    }), n("222007"), n("70102");
    var i = n("522632"),
        s = n("872717"),
        r = n("913144"),
        a = n("550766"),
        o = n("299285"),
        l = n("760850"),
        u = n("915639"),
        d = n("86878"),
        c = n("546463"),
        _ = n("686470"),
        f = n("535974"),
        E = n("568734"),
        h = n("269180"),
        g = n("773336"),
        m = n("260365"),
        p = n("438931"),
        S = n("215082"),
        v = n("49111"),
        T = n("954016"),
        I = n("782340");

    function A(e) {
        let {
            applicationId: t,
            secret: n,
            channelId: i,
            intent: s = T.ActivityIntent.PLAY,
            embedded: a = !1,
            analyticsLocations: o = []
        } = e;
        C(t, null, i, a, o).then(() => h.default.waitConnected(t)).then(() => Promise.race([h.default.waitSubscribed(t, v.RPCEvents.ACTIVITY_JOIN)])).then(() => {
            r.default.dispatch({
                type: "ACTIVITY_JOIN",
                applicationId: t,
                secret: n,
                intent: s,
                embedded: a
            })
        }).catch(() => r.default.dispatch({
            type: "ACTIVITY_JOIN_FAILED",
            applicationId: t
        }))
    }

    function C(e, t, n) {
        let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            c = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
        if (l) return null == n ? Promise.reject(Error("Invalid channel ID")) : ((0, a.startEmbeddedActivity)(n, e, c), Promise.resolve());
        if (d.default.isConnected(e)) return Promise.resolve();
        let E = null;
        if (null == t) {
            let n = _.default.getActiveLibraryApplication(e);
            t = null != n ? n.branchId : e
        }
        if (f.default.isLaunchable(e, t)) {
            var g;
            let n = f.default.getState(e, t),
                r = _.default.getActiveLaunchOptionId(e, t);
            if (null == n) throw Error("Missing dispatch game when launching");
            let a = _.default.getLibraryApplication(e, t);
            if (null == a) throw Error("Missing library application when launching");
            E = (g = e, s.default.post({
                url: v.Endpoints.OAUTH2_AUTHORIZE,
                query: {
                    client_id: g,
                    response_type: "token",
                    scope: [v.OAuth2Scopes.IDENTIFY].join(" ")
                },
                retries: 3,
                body: {
                    authorize: !0
                },
                oldFormErrors: !0
            }).then(e => {
                let t = e.body.location.split(/#|\?/),
                    n = i.parse(t[t.length - 1]);
                if ("invalid_request" === n.error) return null;
                if (null != n.error) {
                    var s;
                    throw Error("OAuth2 Error: ".concat(n.error, ": ").concat(null !== (s = n.error_description) && void 0 !== s ? s : "unknown error"))
                }
                return n.access_token
            }, e => {
                if (404 === e.status) return null;
                throw e
            })).then(e => h.default.launchDispatchApplication(n, e, u.default.locale, a.getBranchName(), r))
        } else {
            let t = o.default.getApplication(e);
            E = null != t ? h.default.launch(t) : h.default.launchGame(e)
        }
        let m = Error("game not found");
        return null != E ? (r.default.dispatch({
            type: "LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE",
            applicationId: e,
            branchId: t
        }), r.default.dispatch({
            type: "GAME_LAUNCH_START",
            applicationId: e
        }), E.then(t => {
            r.default.dispatch({
                type: "GAME_LAUNCH_SUCCESS",
                applicationId: e,
                pids: t
            })
        }).catch(t => {
            S.default.show(v.NoticeTypes.LAUNCH_GAME_FAILURE, I.default.Messages.GAME_LAUNCH_FAILED_LAUNCH_TARGET_NOT_FOUND), r.default.dispatch({
                type: "GAME_LAUNCH_FAIL",
                applicationId: e,
                error: m
            })
        })) : (r.default.dispatch({
            type: "GAME_LAUNCH_FAIL",
            applicationId: e,
            error: m
        }), Promise.reject(m))
    }
    var y = {
        addGame(e) {
            r.default.dispatch({
                type: "RUNNING_GAME_ADD_OVERRIDE",
                pid: e
            })
        },
        toggleOverlay(e, t) {
            let n = c.default.getGameByName(e.name);
            if (null != n) {
                let e = _.default.getActiveLibraryApplication(n.id);
                if (null != e) {
                    let t = E.toggleFlag(e.getFlags(), v.LibraryApplicationFlags.OVERLAY_DISABLED);
                    p.updateFlags(e.id, e.branchId, t);
                    return
                }
            }
            r.default.dispatch({
                type: "RUNNING_GAME_TOGGLE_OVERLAY",
                game: e,
                newEnabledValue: t
            })
        },
        toggleDetection(e) {
            r.default.dispatch({
                type: "RUNNING_GAME_TOGGLE_DETECTION",
                game: e
            })
        },
        editName(e, t) {
            r.default.dispatch({
                type: "RUNNING_GAME_EDIT_NAME",
                game: e,
                newName: t
            })
        },
        identifyGame: (e, t) => (0, l.default)().then(t => new Promise((n, i) => {
            if (null == t) {
                i(Error("Game utils module not loaded"));
                return
            }
            t.identifyGame(e, (t, s) => {
                if (0 !== t) {
                    i(Error("Error ".concat(t, " when fetching info on ").concat(e)));
                    return
                }
                if (null == s.icon || "" === s.icon || null == s.name || "" === s.name) {
                    i(Error("Did not find data on ".concat(e)));
                    return
                }
                r.default.dispatch({
                    type: "GAME_ICON_UPDATE",
                    gameName: s.name,
                    icon: "data:image/png;base64,".concat(s.icon)
                }), n(s)
            })
        })),
        getDetectableGames() {
            !c.default.fetching && null == c.default.lastFetched && r.default.wait(() => {
                r.default.dispatch({
                    type: "GAMES_DATABASE_FETCH"
                }), s.default.get({
                    url: v.Endpoints.APPLICATIONS_DETECTABLE,
                    headers: {
                        "If-None-Match": c.default.detectableGamesEtag
                    },
                    retries: 1,
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: t,
                        headers: {
                            etag: n
                        }
                    } = e;
                    r.default.dispatch({
                        type: "GAMES_DATABASE_UPDATE",
                        games: t,
                        etag: n
                    })
                }, e => {
                    let {
                        status: t
                    } = e;
                    304 === t ? r.default.dispatch({
                        type: "GAMES_DATABASE_UPDATE",
                        games: [],
                        etag: c.default.detectableGamesEtag
                    }) : r.default.dispatch({
                        type: "GAMES_DATABASE_FETCH_FAIL"
                    })
                })
            })
        },
        reportUnverifiedGame(e) {
            let {
                name: t,
                iconHash: n,
                publisher: i,
                distributor: a,
                sku: o,
                executableName: u
            } = e, d = (0, l.cleanExecutablePath)(u);
            if (null != d) {
                var c, _;
                s.default.post({
                    url: v.Endpoints.UNVERIFIED_APPLICATIONS,
                    body: {
                        name: t,
                        os: (0, g.getPlatformName)(),
                        icon: n,
                        distributor_application: (c = a, _ = o, null == c || "" === c ? null : {
                            distributor: c,
                            sku: _
                        }),
                        executable: d,
                        publisher: i,
                        report_version: 3
                    },
                    retries: 1,
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: {
                            name: t,
                            hash: n,
                            missing_data: i
                        }
                    } = e;
                    r.default.dispatch({
                        type: "UNVERIFIED_GAME_UPDATE",
                        name: t,
                        hash: n,
                        missingData: i
                    })
                })
            }
        },
        uploadIcon(e, t, n) {
            s.default.post({
                url: v.Endpoints.UNVERIFIED_APPLICATIONS_ICONS,
                body: {
                    application_name: e,
                    application_hash: t,
                    icon: n
                },
                retries: 1,
                oldFormErrors: !0
            })
        },
        deleteEntry(e) {
            r.default.dispatch({
                type: "RUNNING_GAME_DELETE_ENTRY",
                game: e
            })
        },
        launch: C,
        async join(e) {
            let {
                userId: t,
                sessionId: n,
                applicationId: i,
                channelId: s,
                messageId: a,
                intent: o = T.ActivityIntent.PLAY,
                embedded: l = !1
            } = e;
            if (__OVERLAY__) return r.default.dispatch({
                type: "OVERLAY_JOIN_GAME",
                userId: t,
                sessionId: n,
                applicationId: i,
                channelId: s,
                messageId: a
            }), Promise.resolve(!0);
            r.default.dispatch({
                type: "ACTIVITY_JOIN_LOADING",
                applicationId: i
            });
            try {
                let e = await m.default.getJoinSecret(t, n, i, s, a);
                return A({
                    applicationId: i,
                    secret: e,
                    channelId: s,
                    intent: o,
                    embedded: l
                }), !0
            } catch (e) {
                return r.default.dispatch({
                    type: "ACTIVITY_JOIN_FAILED",
                    applicationId: i
                }), !1
            }
        },
        joinWithSecret: A
    }
}