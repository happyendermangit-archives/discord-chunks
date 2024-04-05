function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("411104");
    var i = n("664751"),
        r = n("544891"),
        s = n("570140"),
        a = n("566620"),
        o = n("812206"),
        l = n("439849"),
        u = n("706454"),
        d = n("757266"),
        _ = n("77498"),
        c = n("283595"),
        E = n("417363"),
        I = n("630388"),
        T = n("877481"),
        f = n("358085"),
        S = n("278323"),
        A = n("58642"),
        h = n("254854"),
        m = n("981631"),
        N = n("701488"),
        O = n("689938");

    function p(e) {
        let {
            applicationId: t,
            secret: n,
            channelId: i,
            intent: r = N.ActivityIntent.PLAY,
            embedded: a = !1,
            analyticsLocations: o = []
        } = e;
        R(t, null, i, a, o).then(() => T.default.waitConnected(t)).then(() => Promise.race([T.default.waitSubscribed(t, m.RPCEvents.ACTIVITY_JOIN)])).then(() => {
            s.default.dispatch({
                type: "ACTIVITY_JOIN",
                applicationId: t,
                secret: n,
                intent: r,
                embedded: a
            })
        }).catch(() => s.default.dispatch({
            type: "ACTIVITY_JOIN_FAILED",
            applicationId: t
        }))
    }

    function R(e, t, n) {
        let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            _ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
        if (l) return null == n ? Promise.reject(Error("Invalid channel ID")) : ((0, a.startEmbeddedActivity)(n, e, _), Promise.resolve());
        if (d.default.isConnected(e)) return Promise.resolve();
        let I = null;
        if (null == t) {
            let n = c.default.getActiveLibraryApplication(e);
            t = null != n ? n.branchId : e
        }
        if (E.default.isLaunchable(e, t)) {
            var f;
            let n = E.default.getState(e, t),
                s = c.default.getActiveLaunchOptionId(e, t);
            if (null == n) throw Error("Missing dispatch game when launching");
            let a = c.default.getLibraryApplication(e, t);
            if (null == a) throw Error("Missing library application when launching");
            I = (f = e, r.HTTP.post({
                url: m.Endpoints.OAUTH2_AUTHORIZE,
                query: {
                    client_id: f,
                    response_type: "token",
                    scope: [m.OAuth2Scopes.IDENTIFY].join(" ")
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
            })).then(e => T.default.launchDispatchApplication(n, e, u.default.locale, a.getBranchName(), s))
        } else {
            let t = o.default.getApplication(e);
            I = null != t ? T.default.launch(t) : T.default.launchGame(e)
        }
        let S = Error("game not found");
        return null != I ? (s.default.dispatch({
            type: "LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE",
            applicationId: e,
            branchId: t
        }), s.default.dispatch({
            type: "GAME_LAUNCH_START",
            applicationId: e
        }), I.then(t => {
            s.default.dispatch({
                type: "GAME_LAUNCH_SUCCESS",
                applicationId: e,
                pids: t
            })
        }).catch(t => {
            h.default.show(m.NoticeTypes.LAUNCH_GAME_FAILURE, O.default.Messages.GAME_LAUNCH_FAILED_LAUNCH_TARGET_NOT_FOUND), s.default.dispatch({
                type: "GAME_LAUNCH_FAIL",
                applicationId: e,
                error: S
            })
        })) : (s.default.dispatch({
            type: "GAME_LAUNCH_FAIL",
            applicationId: e,
            error: S
        }), Promise.reject(S))
    }
    t.default = {
        addGame(e) {
            s.default.dispatch({
                type: "RUNNING_GAME_ADD_OVERRIDE",
                pid: e
            })
        },
        toggleOverlay(e, t) {
            let n = _.default.getGameByName(e.name);
            if (null != n) {
                let e = c.default.getActiveLibraryApplication(n.id);
                if (null != e) {
                    let t = I.toggleFlag(e.getFlags(), m.LibraryApplicationFlags.OVERLAY_DISABLED);
                    A.updateFlags(e.id, e.branchId, t);
                    return
                }
            }
            s.default.dispatch({
                type: "RUNNING_GAME_TOGGLE_OVERLAY",
                game: e,
                newEnabledValue: t
            })
        },
        toggleDetection(e) {
            s.default.dispatch({
                type: "RUNNING_GAME_TOGGLE_DETECTION",
                game: e
            })
        },
        editName(e, t) {
            s.default.dispatch({
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
                s.default.dispatch({
                    type: "GAME_ICON_UPDATE",
                    gameName: r.name,
                    icon: "data:image/png;base64,".concat(r.icon)
                }), n(r)
            })
        })),
        getDetectableGames() {
            !_.default.fetching && null == _.default.lastFetched && s.default.wait(() => {
                s.default.dispatch({
                    type: "GAMES_DATABASE_FETCH"
                }), r.HTTP.get({
                    url: m.Endpoints.APPLICATIONS_DETECTABLE,
                    headers: {
                        "If-None-Match": _.default.detectableGamesEtag
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
                    s.default.dispatch({
                        type: "GAMES_DATABASE_UPDATE",
                        games: t,
                        etag: n
                    })
                }, e => {
                    let {
                        status: t
                    } = e;
                    304 === t ? s.default.dispatch({
                        type: "GAMES_DATABASE_UPDATE",
                        games: [],
                        etag: _.default.detectableGamesEtag
                    }) : s.default.dispatch({
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
                var _, c;
                r.HTTP.post({
                    url: m.Endpoints.UNVERIFIED_APPLICATIONS,
                    body: {
                        name: t,
                        os: (0, f.getPlatformName)(),
                        icon: n,
                        distributor_application: (_ = a, c = o, null == _ || "" === _ ? null : {
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
                    s.default.dispatch({
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
                url: m.Endpoints.UNVERIFIED_APPLICATIONS_ICONS,
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
            s.default.dispatch({
                type: "RUNNING_GAME_DELETE_ENTRY",
                game: e
            })
        },
        launch: R,
        async join(e) {
            let {
                userId: t,
                sessionId: n,
                applicationId: i,
                channelId: r,
                messageId: a,
                intent: o = N.ActivityIntent.PLAY,
                embedded: l = !1
            } = e;
            if (__OVERLAY__) return s.default.dispatch({
                type: "OVERLAY_JOIN_GAME",
                userId: t,
                sessionId: n,
                applicationId: i,
                channelId: r,
                messageId: a
            }), Promise.resolve(!0);
            s.default.dispatch({
                type: "ACTIVITY_JOIN_LOADING",
                applicationId: i
            });
            try {
                let e = await S.default.getJoinSecret(t, n, i, r, a);
                return p({
                    applicationId: i,
                    secret: e,
                    channelId: r,
                    intent: o,
                    embedded: l
                }), !0
            } catch (e) {
                return s.default.dispatch({
                    type: "ACTIVITY_JOIN_FAILED",
                    applicationId: i
                }), !1
            }
        },
        joinWithSecret: p
    }
}