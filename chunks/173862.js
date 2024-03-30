function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("44301"),
        o = n("35523"),
        i = n("291194"),
        a = n("593525"),
        u = n("217014"),
        s = n("389749"),
        l = n("601094"),
        c = n("959612"),
        f = n("585432"),
        d = n("374550"),
        _ = n("822853"),
        E = n("131900"),
        p = n("281767");

    function m(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function y(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function I(e, t) {
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
    var h = new o.default("Games"),
        O = {},
        T = 0,
        S = null;

    function v() {
        return null != S ? Promise.resolve(S) : (0, d.isDesktop)() ? E.default.ensureModule("discord_game_utils").then(function() {
            var e = E.default.getGameUtils();
            return null != e && null != e.findLaunchable ? (S = e, e) : Promise.reject(Error("game utils not found"))
        }) : Promise.reject(Error("not desktop client"))
    }

    function g(e) {
        var t, n = {
                id: e.id,
                name: e.name,
                thirdPartySkus: e.thirdPartySkus,
                executables: e.executables.filter(function(e) {
                    return e.os === (0, d.getPlatformName)()
                }).map(function(e) {
                    return e.name
                })
            },
            r = e.aliases.map(function(e) {
                var t, r;
                return t = function(e) {
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
                }({}, n), r = (r = {
                    name: e
                }, r), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(r)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }), t
            });
        return [n].concat(function(e) {
            if (Array.isArray(e)) return m(e)
        }(t = r) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return m(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(e, t)
            }
        }(t) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }())
    }

    function A(e) {
        return {
            id: e
        }
    }

    function b(e) {
        return N.apply(this, arguments)
    }

    function N() {
        var e;
        return e = function(e) {
            var t, n, r, o, i, a, u, s, c, f;
            return I(this, function(d) {
                switch (d.label) {
                    case 0:
                        if (!Array.isArray(e) && (e = [e]), !l.default.isDeveloper && (e = e.filter(function(e) {
                                return null == e.thirdPartySkus || -1 === e.thirdPartySkus.findIndex(function(e) {
                                    return e.distributor === p.Distributors.BATTLENET
                                })
                            })), 0 === e.length) throw Error("No remaining launchable queries");
                        return (t = Date.now()) > T && (T = t + 36e5, O = {}), [4, v()];
                    case 1:
                        n = d.sent(), r = !0, o = !1, i = void 0, d.label = 2;
                    case 2:
                        d.trys.push([2, 7, 8, 9]), a = function() {
                            var e, t, r;
                            return I(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (null != (t = O[(e = s.value).id])) return [2, {
                                            v: t
                                        }];
                                        return [4, new Promise(function(t) {
                                            return n.findLaunchable(e, t)
                                        })];
                                    case 1:
                                        if (null != (r = o.sent())) return O[e.id] = r, [2, {
                                            v: r
                                        }];
                                        return [2]
                                }
                            })
                        }, u = e[Symbol.iterator](), d.label = 3;
                    case 3:
                        if (r = (s = u.next()).done) return [3, 6];
                        return [5, function(e) {
                            var t = "function" == typeof Symbol && Symbol.iterator,
                                n = t && e[t],
                                r = 0;
                            if (n) return n.call(e);
                            if (e && "number" == typeof e.length) return {
                                next: function() {
                                    return e && r >= e.length && (e = void 0), {
                                        value: e && e[r++],
                                        done: !e
                                    }
                                }
                            };
                            throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                        }(a())];
                    case 4:
                        var _;
                        if ("object" == ((_ = c = d.sent()) && "undefined" != typeof Symbol && _.constructor === Symbol ? "symbol" : typeof _)) return [2, c.v];
                        d.label = 5;
                    case 5:
                        return r = !0, [3, 3];
                    case 6:
                        return [3, 9];
                    case 7:
                        return f = d.sent(), o = !0, i = f, [3, 9];
                    case 8:
                        try {
                            !r && null != u.return && u.return()
                        } finally {
                            if (o) throw i
                        }
                        return [7];
                    case 9:
                        throw Error("could not find launchable")
                }
            })
        }, (N = function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    y(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    y(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }).apply(this, arguments)
    }

    function R(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        if (e()) {
            t();
            return
        }
        setTimeout(function() {
            250 * r <= 12e4 ? R(e, t, n, r + 1) : n()
        }, 250)
    }

    function C(e) {
        return h.info("launch", e), new Promise(function(t, n) {
            null == _.default.safeParseWithQuery(e.launchTarget) ? n(Error("Failed to parse launch target. ".concat(e.launchTarget))) : (window.open(e.launchTarget), t([]))
        })
    }
    t.default = {
        waitSubscribed: function(e, t) {
            return new Promise(function(n, r) {
                return R(function() {
                    return a.default.isSubscribed(e, t)
                }, n, r)
            })
        },
        waitConnected: function(e) {
            return new Promise(R.bind(this, function() {
                return s.default.isConnected(e)
            }))
        },
        isLaunchable: function(e) {
            return b(g(e)).then(function(e) {
                return null != e
            }).catch(function() {
                return !1
            })
        },
        launch: function(e) {
            return b(g(e)).then(C)
        },
        launchDispatchApplication: function(e, t, n, o, a) {
            var s = e.launchOptions,
                l = e.defaultLaunchOptionId,
                d = e.installPath,
                _ = e.applicationId,
                E = e.branchId,
                m = e.buildId,
                y = e.shouldPatch;
            if (null == s || null == l || null == d) throw Error("Couldn't construct launchable for ".concat(e.applicationId));
            null == a && (a = l);
            var I = s[a];
            if (null == I) throw Error("Couldn't construct launchable for ".concat(e.applicationId, ". No launch option."));
            return (0, r.fetchBranches)([E]).then(function(e) {
                var t = e[0];
                if (null == t) return Promise.reject(Error("branch is null"));
                var n = t.liveBuildId;
                if (y && n !== m) return Promise.reject(Error("live build id changed"))
            }).then(function() {
                return f.default.runLaunchSetup(_, E)
            }).then(function() {
                var e = (0, i.default)(d),
                    r = {
                        DISCORD_INSTANCE_ID: c.default.getId().toString(),
                        DISCORD_ACCESS_TOKEN: null != t ? t : "",
                        DISCORD_CURRENT_LOCALE: n,
                        DISCORD_CURRENT_BRANCH: o,
                        DISCORD_STORAGE_PATH: p.DefaultCloudSyncConfiguration.ROOT_STORAGE_PATH(e, u.default.getId())
                    };
                return f.default.launch(_, E, I.name, r)
            })
        },
        removeShortcuts: function(e) {
            return (0, d.isWindows)() ? v().then(function(t) {
                var n, r;
                return null !== (r = null === (n = t.removeShortcuts) || void 0 === n ? void 0 : n.call(t, e)) && void 0 !== r && r
            }) : Promise.resolve(!1)
        },
        createShortcuts: function(e, t, n, r, o) {
            if (null == o || !(0, d.isWindows)()) return Promise.resolve(!1);
            var i = "discord:///library/".concat(r, "/launch"),
                a = "".concat(o, "\\icon.ico");
            return v().then(function(r) {
                var o, u;
                return null !== (u = null === (o = r.createShortcuts) || void 0 === o ? void 0 : o.call(r, e, t, n, i, a)) && void 0 !== u && u
            })
        },
        isGameLaunchable: function(e) {
            return b({
                id: e
            }).then(function(e) {
                return null != e
            }).catch(function() {
                return !1
            })
        },
        launchGame: function(e) {
            if (s.default.isConnected(e)) return Promise.resolve();
            return b({
                id: e
            }).then(C)
        },
        isProtocolRegistered: function(e) {
            return v().then(function(t) {
                var n, r;
                return null !== (r = null === (n = t.isProtocolSchemeRegistered) || void 0 === n ? void 0 : n.call(t, e)) && void 0 !== r && r
            })
        },
        setRecentGames: function(e) {
            v().then(function(t) {
                var n;
                return null === (n = t.setRecentGames) || void 0 === n ? void 0 : n.call(t, e)
            }).catch(function() {})
        }
    }
}