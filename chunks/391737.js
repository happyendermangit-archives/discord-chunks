function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("664751"),
        o = n("967888"),
        i = n("629815"),
        a = n("623416"),
        u = n("342942"),
        s = n("46731"),
        l = n("225098"),
        c = n("389749"),
        f = n("950520"),
        d = n("620205"),
        _ = n("262283"),
        E = n("947248"),
        p = n("173862"),
        m = n("374550"),
        y = n("323515"),
        I = n("149848"),
        h = n("532865"),
        O = n("281767"),
        T = n("997133"),
        S = n("941504");

    function v(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function g(e) {
        var t = e.applicationId,
            n = e.secret,
            r = e.channelId,
            o = e.intent,
            a = void 0 === o ? T.ActivityIntent.PLAY : o,
            u = e.embedded,
            s = void 0 !== u && u,
            l = e.analyticsLocations;
        A(t, null, r, s, void 0 === l ? [] : l).then(function() {
            return p.default.waitConnected(t)
        }).then(function() {
            return Promise.race([p.default.waitSubscribed(t, O.RPCEvents.ACTIVITY_JOIN)])
        }).then(function() {
            i.default.dispatch({
                type: "ACTIVITY_JOIN",
                applicationId: t,
                secret: n,
                intent: a,
                embedded: s
            })
        }).catch(function() {
            return i.default.dispatch({
                type: "ACTIVITY_JOIN_FAILED",
                applicationId: t
            })
        })
    }

    function A(e, t, n) {
        var s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            f = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
        if (s) return null == n ? Promise.reject(Error("Invalid channel ID")) : ((0, a.startEmbeddedActivity)(n, e, f), Promise.resolve());
        if (c.default.isConnected(e)) return Promise.resolve();
        var E = null;
        if (null == t) {
            var m = d.default.getActiveLibraryApplication(e);
            t = null != m ? m.branchId : e
        }
        if (_.default.isLaunchable(e, t)) {
            var y, I = _.default.getState(e, t),
                T = d.default.getActiveLaunchOptionId(e, t);
            if (null == I) throw Error("Missing dispatch game when launching");
            var v = d.default.getLibraryApplication(e, t);
            if (null == v) throw Error("Missing library application when launching");
            E = (y = e, o.HTTP.post({
                url: O.Endpoints.OAUTH2_AUTHORIZE,
                query: {
                    client_id: y,
                    response_type: "token",
                    scope: [O.OAuth2Scopes.IDENTIFY].join(" ")
                },
                retries: 3,
                body: {
                    authorize: !0
                },
                oldFormErrors: !0
            }).then(function(e) {
                var t, n = e.body.location.split(/#|\?/),
                    o = r.parse(n[n.length - 1]);
                if ("invalid_request" === o.error) return null;
                if (null != o.error) throw Error("OAuth2 Error: ".concat(o.error, ": ").concat(null !== (t = o.error_description) && void 0 !== t ? t : "unknown error"));
                return o.access_token
            }, function(e) {
                if (404 === e.status) return null;
                throw e
            })).then(function(e) {
                return p.default.launchDispatchApplication(I, e, l.default.locale, v.getBranchName(), T)
            })
        } else {
            var g = u.default.getApplication(e);
            E = null != g ? p.default.launch(g) : p.default.launchGame(e)
        }
        var A = Error("game not found");
        return null != E ? (i.default.dispatch({
            type: "LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE",
            applicationId: e,
            branchId: t
        }), i.default.dispatch({
            type: "GAME_LAUNCH_START",
            applicationId: e
        }), E.then(function(t) {
            i.default.dispatch({
                type: "GAME_LAUNCH_SUCCESS",
                applicationId: e,
                pids: t
            })
        }).catch(function(t) {
            h.default.show(O.NoticeTypes.LAUNCH_GAME_FAILURE, S.default.Messages.GAME_LAUNCH_FAILED_LAUNCH_TARGET_NOT_FOUND), i.default.dispatch({
                type: "GAME_LAUNCH_FAIL",
                applicationId: e,
                error: A
            })
        })) : (i.default.dispatch({
            type: "GAME_LAUNCH_FAIL",
            applicationId: e,
            error: A
        }), Promise.reject(A))
    }
    t.default = {
        addGame: function(e) {
            i.default.dispatch({
                type: "RUNNING_GAME_ADD_OVERRIDE",
                pid: e
            })
        },
        toggleOverlay: function(e, t) {
            var n = f.default.getGameByName(e.name);
            if (null != n) {
                var r = d.default.getActiveLibraryApplication(n.id);
                if (null != r) {
                    var o = E.toggleFlag(r.getFlags(), O.LibraryApplicationFlags.OVERLAY_DISABLED);
                    I.updateFlags(r.id, r.branchId, o);
                    return
                }
            }
            i.default.dispatch({
                type: "RUNNING_GAME_TOGGLE_OVERLAY",
                game: e,
                newEnabledValue: t
            })
        },
        toggleDetection: function(e) {
            i.default.dispatch({
                type: "RUNNING_GAME_TOGGLE_DETECTION",
                game: e
            })
        },
        editName: function(e, t) {
            i.default.dispatch({
                type: "RUNNING_GAME_EDIT_NAME",
                game: e,
                newName: t
            })
        },
        identifyGame: function(e, t) {
            return (0, s.default)().then(function(t) {
                return new Promise(function(n, r) {
                    if (null == t) {
                        r(Error("Game utils module not loaded"));
                        return
                    }
                    t.identifyGame(e, function(t, o) {
                        if (0 !== t) {
                            r(Error("Error ".concat(t, " when fetching info on ").concat(e)));
                            return
                        }
                        if (null == o.icon || "" === o.icon || null == o.name || "" === o.name) {
                            r(Error("Did not find data on ".concat(e)));
                            return
                        }
                        i.default.dispatch({
                            type: "GAME_ICON_UPDATE",
                            gameName: o.name,
                            icon: "data:image/png;base64,".concat(o.icon)
                        }), n(o)
                    })
                })
            })
        },
        getDetectableGames: function() {
            !f.default.fetching && null == f.default.lastFetched && i.default.wait(function() {
                i.default.dispatch({
                    type: "GAMES_DATABASE_FETCH"
                }), o.HTTP.get({
                    url: O.Endpoints.APPLICATIONS_DETECTABLE,
                    headers: {
                        "If-None-Match": f.default.detectableGamesEtag
                    },
                    retries: 1,
                    oldFormErrors: !0
                }).then(function(e) {
                    var t = e.body,
                        n = e.headers.etag;
                    i.default.dispatch({
                        type: "GAMES_DATABASE_UPDATE",
                        games: t,
                        etag: n
                    })
                }, function(e) {
                    304 === e.status ? i.default.dispatch({
                        type: "GAMES_DATABASE_UPDATE",
                        games: [],
                        etag: f.default.detectableGamesEtag
                    }) : i.default.dispatch({
                        type: "GAMES_DATABASE_FETCH_FAIL"
                    })
                })
            })
        },
        reportUnverifiedGame: function(e) {
            var t, n, r = e.name,
                a = e.iconHash,
                u = e.publisher,
                l = e.distributor,
                c = e.sku,
                f = e.executableName,
                d = (0, s.cleanExecutablePath)(f);
            if (null != d) {
                ;
                o.HTTP.post({
                    url: O.Endpoints.UNVERIFIED_APPLICATIONS,
                    body: {
                        name: r,
                        os: (0, m.getPlatformName)(),
                        icon: a,
                        distributor_application: (t = l, n = c, null == t || "" === t ? null : {
                            distributor: t,
                            sku: n
                        }),
                        executable: d,
                        publisher: u,
                        report_version: 3
                    },
                    retries: 1,
                    oldFormErrors: !0
                }).then(function(e) {
                    var t = e.body,
                        n = t.name,
                        r = t.hash,
                        o = t.missing_data;
                    i.default.dispatch({
                        type: "UNVERIFIED_GAME_UPDATE",
                        name: n,
                        hash: r,
                        missingData: o
                    })
                })
            }
        },
        uploadIcon: function(e, t, n) {
            o.HTTP.post({
                url: O.Endpoints.UNVERIFIED_APPLICATIONS_ICONS,
                body: {
                    application_name: e,
                    application_hash: t,
                    icon: n
                },
                retries: 1,
                oldFormErrors: !0
            })
        },
        deleteEntry: function(e) {
            i.default.dispatch({
                type: "RUNNING_GAME_DELETE_ENTRY",
                game: e
            })
        },
        launch: A,
        join: function(e) {
            var t, n = e.userId,
                r = e.sessionId,
                o = e.applicationId,
                a = e.channelId,
                u = e.messageId,
                s = e.intent,
                l = void 0 === s ? T.ActivityIntent.PLAY : s,
                c = e.embedded,
                f = void 0 !== c && c;
            return (t = function() {
                var e;
                return function(e, t) {
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
                }(this, function(e) {
                    switch (e.label) {
                        case 0:
                            if (__OVERLAY__) return i.default.dispatch({
                                type: "OVERLAY_JOIN_GAME",
                                userId: n,
                                sessionId: r,
                                applicationId: o,
                                channelId: a,
                                messageId: u
                            }), [2, Promise.resolve(!0)];
                            i.default.dispatch({
                                type: "ACTIVITY_JOIN_LOADING",
                                applicationId: o
                            }), e.label = 1;
                        case 1:
                            return e.trys.push([1, 3, , 4]), [4, y.default.getJoinSecret(n, r, o, a, u)];
                        case 2:
                            return g({
                                applicationId: o,
                                secret: e.sent(),
                                channelId: a,
                                intent: l,
                                embedded: f
                            }), [2, !0];
                        case 3:
                            return e.sent(), i.default.dispatch({
                                type: "ACTIVITY_JOIN_FAILED",
                                applicationId: o
                            }), [2, !1];
                        case 4:
                            return [2]
                    }
                })
            }, function() {
                var e = this,
                    n = arguments;
                return new Promise(function(r, o) {
                    var i = t.apply(e, n);

                    function a(e) {
                        v(i, r, o, a, u, "next", e)
                    }

                    function u(e) {
                        v(i, r, o, a, u, "throw", e)
                    }
                    a(void 0)
                })
            })()
        },
        joinWithSecret: g
    }
}