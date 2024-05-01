function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("411104");
    var i = n("664751"),
        r = n("544891"),
        a = n("570140"),
        s = n("566620"),
        o = n("812206"),
        l = n("439849"),
        u = n("669764"),
        d = n("706454"),
        _ = n("757266"),
        c = n("77498"),
        E = n("283595"),
        I = n("417363"),
        T = n("630388"),
        f = n("877481"),
        S = n("358085"),
        h = n("278323"),
        A = n("58642"),
        m = n("254854"),
        N = n("981631"),
        p = n("701488"),
        O = n("689938");

    function R(e) {
        let {
            applicationId: t,
            secret: n,
            channelId: i,
            intent: r = p.ActivityIntent.PLAY,
            embedded: s = !1,
            analyticsLocations: o = []
        } = e;
        C(t, null, i, s, o).then(() => f.default.waitConnected(t)).then(() => Promise.race([f.default.waitSubscribed(t, N.RPCEvents.ACTIVITY_JOIN)])).then(() => {
            a.default.dispatch({
                type: "ACTIVITY_JOIN",
                applicationId: t,
                secret: n,
                intent: r,
                embedded: s
            })
        }).catch(() => a.default.dispatch({
            type: "ACTIVITY_JOIN_FAILED",
            applicationId: t
        }))
    }

    function C(e, t, n) {
        let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
        if (l) return null == n ? Promise.reject(Error("Invalid channel ID")) : ((0, s.startEmbeddedActivity)(n, e, u), Promise.resolve());
        if (_.default.isConnected(e)) return Promise.resolve();
        let c = null;
        if (null == t) {
            let n = E.default.getActiveLibraryApplication(e);
            t = null != n ? n.branchId : e
        }
        if (I.default.isLaunchable(e, t)) {
            var T;
            let n = I.default.getState(e, t),
                a = E.default.getActiveLaunchOptionId(e, t);
            if (null == n) throw Error("Missing dispatch game when launching");
            let s = E.default.getLibraryApplication(e, t);
            if (null == s) throw Error("Missing library application when launching");
            c = (T = e, r.HTTP.post({
                url: N.Endpoints.OAUTH2_AUTHORIZE,
                query: {
                    client_id: T,
                    response_type: "token",
                    scope: [N.OAuth2Scopes.IDENTIFY].join(" ")
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
                    var r;
                    throw Error("OAuth2 Error: ".concat(n.error, ": ").concat(null !== (r = n.error_description) && void 0 !== r ? r : "unknown error"))
                }
                return n.access_token
            }, e => {
                if (404 === e.status) return null;
                throw e
            })).then(e => f.default.launchDispatchApplication(n, e, d.default.locale, s.getBranchName(), a))
        } else {
            let t = o.default.getApplication(e);
            c = null != t ? f.default.launch(t) : f.default.launchGame(e)
        }
        let S = Error("game not found");
        return null != c ? (a.default.dispatch({
            type: "LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE",
            applicationId: e,
            branchId: t
        }), a.default.dispatch({
            type: "GAME_LAUNCH_START",
            applicationId: e
        }), c.then(t => {
            a.default.dispatch({
                type: "GAME_LAUNCH_SUCCESS",
                applicationId: e,
                pids: t
            })
        }).catch(t => {
            m.default.show(N.NoticeTypes.LAUNCH_GAME_FAILURE, O.default.Messages.GAME_LAUNCH_FAILED_LAUNCH_TARGET_NOT_FOUND), a.default.dispatch({
                type: "GAME_LAUNCH_FAIL",
                applicationId: e,
                error: S
            })
        })) : (a.default.dispatch({
            type: "GAME_LAUNCH_FAIL",
            applicationId: e,
            error: S
        }), Promise.reject(S))
    }
    t.default = {
        addGame(e) {
            a.default.dispatch({
                type: "RUNNING_GAME_ADD_OVERRIDE",
                pid: e
            })
        },
        toggleOverlay(e, t) {
            let n = c.default.getGameByName(e.name);
            if (null != n) {
                let e = E.default.getActiveLibraryApplication(n.id);
                if (null != e) {
                    let t = T.toggleFlag(e.getFlags(), N.LibraryApplicationFlags.OVERLAY_DISABLED);
                    A.updateFlags(e.id, e.branchId, t);
                    return
                }
            }
            a.default.dispatch({
                type: "RUNNING_GAME_TOGGLE_OVERLAY",
                game: e,
                newEnabledValue: t
            })
        },
        toggleDetection(e) {
            a.default.dispatch({
                type: "RUNNING_GAME_TOGGLE_DETECTION",
                game: e
            })
        },
        editName(e, t) {
            a.default.dispatch({
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
            t.identifyGame(e, (t, r) => {
                if (0 !== t) {
                    i(Error("Error ".concat(t, " when fetching info on ").concat(e)));
                    return
                }
                if (null == r.icon || "" === r.icon || null == r.name || "" === r.name) {
                    i(Error("Did not find data on ".concat(e)));
                    return
                }
                a.default.dispatch({
                    type: "GAME_ICON_UPDATE",
                    gameName: r.name,
                    icon: "data:image/png;base64,".concat(r.icon)
                }), n(r)
            })
        })),
        async getDetectableGamesSupplemental(e) {
            let t = e.filter(u.default.canFetch);
            if (0 !== t.length) {
                a.default.dispatch({
                    type: "DETECTABLE_GAME_SUPPLEMENTAL_FETCH",
                    applicationIds: t
                });
                try {
                    let e = await r.HTTP.get({
                        url: N.Endpoints.APPLICATIONS_GAMES_SUPPLEMENTAL,
                        query: {
                            application_ids: t
                        }
                    });
                    a.default.dispatch({
                        type: "DETECTABLE_GAME_SUPPLEMENTAL_FETCH_SUCCESS",
                        applicationIds: t,
                        supplementalGameData: e.body.supplemental_game_data
                    })
                } catch {
                    a.default.dispatch({
                        type: "DETECTABLE_GAME_SUPPLEMENTAL_FETCH_FAILURE",
                        applicationIds: t
                    })
                }
            }
        },
        getDetectableGames() {
            !c.default.fetching && null == c.default.lastFetched && a.default.wait(() => {
                a.default.dispatch({
                    type: "GAMES_DATABASE_FETCH"
                }), r.HTTP.get({
                    url: N.Endpoints.APPLICATIONS_DETECTABLE,
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
                    a.default.dispatch({
                        type: "GAMES_DATABASE_UPDATE",
                        games: t,
                        etag: n
                    })
                }, e => {
                    let {
                        status: t
                    } = e;
                    304 === t ? a.default.dispatch({
                        type: "GAMES_DATABASE_UPDATE",
                        games: [],
                        etag: c.default.detectableGamesEtag
                    }) : a.default.dispatch({
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
                distributor: s,
                sku: o,
                executableName: u
            } = e, d = (0, l.cleanExecutablePath)(u);
            if (null != d) {
                var _, c;
                r.HTTP.post({
                    url: N.Endpoints.UNVERIFIED_APPLICATIONS,
                    body: {
                        name: t,
                        os: (0, S.getPlatformName)(),
                        icon: n,
                        distributor_application: (_ = s, c = o, null == _ || "" === _ ? null : {
                            distributor: _,
                            sku: c
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
                    a.default.dispatch({
                        type: "UNVERIFIED_GAME_UPDATE",
                        name: t,
                        hash: n,
                        missingData: i
                    })
                })
            }
        },
        uploadIcon(e, t, n) {
            r.HTTP.post({
                url: N.Endpoints.UNVERIFIED_APPLICATIONS_ICONS,
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
            a.default.dispatch({
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
                channelId: r,
                messageId: s,
                intent: o = p.ActivityIntent.PLAY,
                embedded: l = !1
            } = e;
            if (__OVERLAY__) return a.default.dispatch({
                type: "OVERLAY_JOIN_GAME",
                userId: t,
                sessionId: n,
                applicationId: i,
                channelId: r,
                messageId: s
            }), Promise.resolve(!0);
            a.default.dispatch({
                type: "ACTIVITY_JOIN_LOADING",
                applicationId: i
            });
            try {
                let e = await h.default.getJoinSecret(t, n, i, r, s);
                return R({
                    applicationId: i,
                    secret: e,
                    channelId: r,
                    intent: o,
                    embedded: l
                }), !0
            } catch (e) {
                return a.default.dispatch({
                    type: "ACTIVITY_JOIN_FAILED",
                    applicationId: i
                }), !1
            }
        },
        joinWithSecret: R
    }
}