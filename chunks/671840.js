function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        applyMediaFilterSettings: function() {
            return v
        },
        deleteVideoFilterAsset: function() {
            return h
        },
        errorApplyingMediaFilterSettings: function() {
            return A
        },
        fetchVideoFilterAssets: function() {
            return p
        },
        saveLastUsedBackgroundOption: function() {
            return T
        },
        startApplyMediaFilterSettings: function() {
            return g
        },
        uploadVideoFilterAsset: function() {
            return y
        }
    });
    var r = n("967888"),
        o = n("629815"),
        i = n("968574"),
        a = n("335911"),
        u = n("208454"),
        s = n("786827"),
        l = n("422003"),
        c = n("654059"),
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

    function _(e) {
        return function() {
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
        }
    }

    function E(e, t) {
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

    function p() {
        return m.apply(this, arguments)
    }

    function m() {
        return (m = _(function() {
            var e;
            return E(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, r.HTTP.get(f.Endpoints.VIDEO_FILTER_ASSETS)];
                    case 1:
                        return e = t.sent(), o.default.dispatch({
                            type: "VIDEO_FILTER_ASSETS_FETCH_SUCCESS",
                            assets: e.body
                        }), [2, e]
                }
            })
        })).apply(this, arguments)
    }

    function y(e, t, n) {
        return I.apply(this, arguments)
    }

    function I() {
        return (I = _(function(e, t, n) {
            var i, a;
            return E(this, function(u) {
                switch (u.label) {
                    case 0:
                        return u.trys.push([0, 2, , 3]), [4, r.HTTP.post({
                            url: f.Endpoints.VIDEO_FILTER_ASSETS,
                            body: {
                                type: t,
                                asset: e,
                                last_used: null == n ? void 0 : n.toISOString()
                            }
                        })];
                    case 1:
                        return i = u.sent(), o.default.dispatch({
                            type: "VIDEO_FILTER_ASSET_UPLOAD_SUCCESS",
                            videoFilterAsset: i.body
                        }), [2, i.body];
                    case 2:
                        throw a = u.sent(), new c.default(a);
                    case 3:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function h(e) {
        return O.apply(this, arguments)
    }

    function O() {
        return (O = _(function(e) {
            var t;
            return E(this, function(n) {
                switch (n.label) {
                    case 0:
                        return [4, r.HTTP.del(f.Endpoints.VIDEO_FILTER_ASSET(e.id))];
                    case 1:
                        return n.sent(), t = (0, s.getLastUsedVideoBackgroundOption)(u.default.getCurrentUser()), (0, l.isCustomBackgroundOption)(t) && t.id === e.id && T(null), o.default.dispatch({
                            type: "VIDEO_FILTER_ASSET_DELETE_SUCCESS",
                            videoFilterAsset: e
                        }), [2]
                }
            })
        })).apply(this, arguments)
    }

    function T(e) {
        return S.apply(this, arguments)
    }

    function S() {
        return (S = _(function(e) {
            var t;
            return E(this, function(n) {
                switch (n.label) {
                    case 0:
                        return [4, i.PreloadedUserSettingsActionCreators.updateAsync("voiceAndVideo", function(t) {
                            t.videoBackgroundFilterDesktop = (0, l.getVideoBackgroundProtoFromOption)(e)
                        }, i.UserSettingsDelay.FREQUENT_USER_ACTION)];
                    case 1:
                        if (n.sent(), !(0, l.isCustomBackgroundOption)(e)) return [3, 3];
                        return [4, r.HTTP.post(f.Endpoints.VIDEO_FILTER_ASSET_LAST_USED(e.id))];
                    case 2:
                        return t = n.sent(), o.default.dispatch({
                            type: "VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION",
                            backgroundOption: t.body
                        }), [3, 4];
                    case 3:
                        o.default.dispatch({
                            type: "VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION",
                            backgroundOption: e
                        }), n.label = 4;
                    case 4:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function v(e) {
        a.default.isSupported() && o.default.dispatch({
            type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS",
            settings: e
        })
    }

    function g() {
        a.default.isSupported() && o.default.dispatch({
            type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START"
        })
    }

    function A() {
        o.default.dispatch({
            type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR"
        })
    }
}