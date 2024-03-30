function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ensureSpotifyPlayable: function() {
            return p
        },
        ensureSpotifyPremium: function() {
            return y
        },
        getSpotifyMetadataFromActivity: function() {
            return h
        },
        isSpotifyPlayable: function() {
            return E
        },
        isSpotifyPremium: function() {
            return m
        }
    });
    var r = n("995991"),
        o = n("386823"),
        i = n("654370"),
        a = n("388990"),
        u = n("966834"),
        s = n("222577"),
        l = n("366621"),
        c = n("935776"),
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
    var _ = 30 * a.default.Millis.SECOND;

    function E(e) {
        return null != e.getActiveSocketAndDevice() || s.default.isProtocolRegistered()
    }

    function p() {
        var e = l.default.getActiveSocketAndDevice();
        if (null != e) return Promise.resolve(e);
        if (!s.default.isProtocolRegistered()) return Promise.reject(Error("protocol is not registered"));
        var t = l.default.getPlayableComputerDevices();
        if (i.default.isObservedAppRunning(o.default.get(f.PlatformTypes.SPOTIFY).name) && t.length > 0) {
            var n = t[0],
                r = n.socket,
                a = n.device;
            return (0, u.setActiveDevice)(r.accountId, a.id), Promise.resolve({
                socket: r,
                device: a
            })
        }
        return new Promise(function(e, n) {
            var r = setTimeout(function() {
                    l.default.removeChangeListener(o), n(Error("timeout launching spotify"))
                }, _),
                o = function() {
                    var n = l.default.getPlayableComputerDevices(),
                        i = !0,
                        a = !1,
                        s = void 0;
                    try {
                        for (var c, f = n[Symbol.iterator](); !(i = (c = f.next()).done); i = !0) ! function() {
                            var n = c.value,
                                i = n.socket,
                                a = n.device;
                            null == t.find(function(e) {
                                return e.device.id === a.id
                            }) && (clearTimeout(r), l.default.removeChangeListener(o), setImmediate(function() {
                                (0, u.setActiveDevice)(i.accountId, a.id), e({
                                    socket: i,
                                    device: a
                                })
                            }))
                        }()
                    } catch (e) {
                        a = !0, s = e
                    } finally {
                        try {
                            !i && null != f.return && f.return()
                        } finally {
                            if (a) throw s
                        }
                    }
                };
            l.default.addChangeListener(o), window.open("".concat(c.SPOTIFY_APP_PROTOCOL, ":"))
        })
    }

    function m() {
        var e = l.default.getActiveSocketAndDevice();
        return null == e ? null : e.socket.isPremium
    }

    function y() {
        var e = l.default.getActiveSocketAndDevice();
        if (null == e) return Promise.reject(Error("no active profile"));
        var t = e.socket;
        return t.isPremium ? Promise.resolve() : (0, u.getProfile)(t.accountId, t.accessToken).then(function() {
            if (!t.isPremium) return Promise.reject(Error("spotify account is not premium"))
        })
    }

    function I(e) {
        if ("string" == typeof e) return e;
        throw Error("value is not a string")
    }

    function h(e, t) {
        return O.apply(this, arguments)
    }

    function O() {
        var e;
        return e = function(e, t) {
            var n, o, i;
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
            }(this, function(a) {
                switch (a.label) {
                    case 0:
                        return [4, (0, r.getMetadata)(e, t)];
                    case 1:
                        if (n = a.sent(), null === (i = (0, c.getSpotifyResourceType)(I(null !== (o = n.type) && void 0 !== o ? o : c.SpotifyResourceTypes.TRACK)))) throw Error("invalid type ".concat(n.type));
                        return [2, {
                            context_uri: "string" == typeof n.context_uri ? n.context_uri : void 0,
                            album_id: I(n.album_id),
                            artist_ids: Array.isArray(n.artist_ids) ? n.artist_ids.map(I) : [],
                            type: i,
                            button_urls: Array.isArray(n.button_url) ? n.button_url.map(I) : []
                        }]
                }
            })
        }, (O = function() {
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
        }).apply(this, arguments)
    }
}