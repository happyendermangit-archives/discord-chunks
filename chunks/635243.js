function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815"),
        a = n("517727"),
        u = n("654370"),
        s = n("736381"),
        l = n("217014"),
        c = n("947248"),
        f = n("38833"),
        d = n("945986"),
        _ = n("281767"),
        E = n("589280");

    function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function m(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function y(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function I(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function h(e) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function O(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                I(e, t, n[t])
            })
        }
        return e
    }

    function T(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function S(e, t) {
        return (S = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function v(e) {
        return function(e) {
            if (Array.isArray(e)) return p(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || g(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function g(e, t) {
        if (e) {
            if ("string" == typeof e) return p(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, t)
        }
    }
    var A = "default",
        b = [],
        N = [],
        R = [],
        C = 0,
        P = null,
        D = null,
        L = {},
        M = null,
        U = null,
        w = {},
        k = {
            clipsEnabled: !1,
            storageLocation: A,
            clipsQuality: {
                resolution: E.ApplicationStreamResolutions.RESOLUTION_1080,
                frameRate: E.ApplicationStreamFPS.FPS_30
            },
            clipsLength: d.ClipsLengthSettings.SECONDS_30,
            remindersEnabled: !0,
            decoupledClipsEnabled: !1,
            viewerClipsEnabled: !0,
            viewerConnectivity: d.ClipsViewerConnectivitySettings.ALL
        },
        G = {
            clipsSettings: k,
            hardwareClassification: null,
            hardwareClassificationForDecoupled: null,
            hardwareClassificationVersion: 0,
            newClipIds: [],
            hasClips: !1,
            hasTakenDecoupledClip: !1,
            clipsEducationState: {
                dismissedAt: null,
                numberOfGamesLaunchedSinceDismissal: 0,
                numberOfTimesDismissed: 0
            }
        };

    function B() {
        var e;
        return e = function() {
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
            }(this, function(t) {
                switch (t.label) {
                    case 0:
                        if (G.clipsSettings.storageLocation !== A || null == a.default || null == a.default.remoteApp) return [2];
                        return [4, a.default.remoteApp.getPath("documents")];
                    case 1:
                        return e = t.sent(), G.clipsSettings.storageLocation = e, F.emitChange(), [2]
                }
            })
        }, (B = function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    m(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    m(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }).apply(this, arguments)
    }
    var j = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && S(e, t)
        }(s, e);
        var t, n, r, o, i, a = (t = s, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = h(t);
            if (n) {
                var a = h(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function s() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, s), a.apply(this, arguments)
        }
        return r = s, o = [{
            key: "initialize",
            value: function(e) {
                null != e && (G = e), ! function() {
                    B.apply(this, arguments)
                }(), this.waitFor(u.default)
            }
        }, {
            key: "getClips",
            value: function() {
                return N
            }
        }, {
            key: "getPendingClips",
            value: function() {
                return R
            }
        }, {
            key: "getUserAgnosticState",
            value: function() {
                return G
            }
        }, {
            key: "getSettings",
            value: function() {
                return G.clipsSettings
            }
        }, {
            key: "getLastClipsSession",
            value: function() {
                return D
            }
        }, {
            key: "getClipsWarningShown",
            value: function(e) {
                return P === e
            }
        }, {
            key: "getActiveAnimation",
            value: function() {
                return U
            }
        }, {
            key: "getStreamClipAnimations",
            value: function(e) {
                var t;
                return null !== (t = w[e]) && void 0 !== t ? t : b
            }
        }, {
            key: "hasAnyClipAnimations",
            value: function() {
                return Object.values(w).some(function(e) {
                    return e.length > 0
                })
            }
        }, {
            key: "getHardwareClassification",
            value: function() {
                return G.hardwareClassification
            }
        }, {
            key: "getHardwareClassificationForDecoupled",
            value: function() {
                return G.hardwareClassificationForDecoupled
            }
        }, {
            key: "getHardwareClassificationVersion",
            value: function() {
                return G.hardwareClassificationVersion
            }
        }, {
            key: "getIsAtMaxSaveClipOperations",
            value: function() {
                return C >= d.MAX_SIMULTANEOUS_SAVE_CLIP_OPERATIONS
            }
        }, {
            key: "getLastClipsError",
            value: function() {
                return M
            }
        }, {
            key: "isClipsEnabledForUser",
            value: function(e) {
                var t, n;
                return null !== (n = null === (t = L[e]) || void 0 === t ? void 0 : t.clipsEnabled) && void 0 !== n && n
            }
        }, {
            key: "isVoiceRecordingAllowedForUser",
            value: function(e) {
                var t, n;
                return null !== (n = null === (t = L[e]) || void 0 === t ? void 0 : t.allowVoiceRecording) && void 0 !== n && n
            }
        }, {
            key: "isViewerClippingAllowedForUser",
            value: function(e) {
                var t, n;
                return null !== (n = null === (t = L[e]) || void 0 === t ? void 0 : t.allowAnyViewerClips) && void 0 !== n && n
            }
        }, {
            key: "hasClips",
            value: function() {
                return G.hasClips
            }
        }, {
            key: "hasTakenDecoupledClip",
            value: function() {
                return G.hasTakenDecoupledClip
            }
        }, {
            key: "getNewClipIds",
            value: function() {
                return G.newClipIds
            }
        }], y(r.prototype, o), i && y(r, i), s
    }(o.default.DeviceSettingsStore);
    I(j, "displayName", "ClipsStore"), I(j, "persistKey", "ClipsStore"), I(j, "migrations", [function(e) {
        return {
            clipsSettings: null != e ? e : k,
            newClipsCount: 0
        }
    }, function(e) {
        var t = O({}, k, e.clipsSettings);
        return T(O({}, e), {
            clipsSettings: t
        })
    }, function(e) {
        var t;
        return T(O({}, e), {
            newClipIds: null !== (t = e.newClipIds) && void 0 !== t ? t : []
        })
    }, function(e) {
        var t, n;
        return T(O({}, e), {
            hardwareClassification: null !== (t = e.hardwareClassification) && void 0 !== t ? t : null,
            hardwareClassificationVersion: null !== (n = e.hardwareClassificationVersion) && void 0 !== n ? n : 0
        })
    }, function(e) {
        var t;
        return T(O({}, e), {
            hasClips: null !== (t = e.hasClips) && void 0 !== t && t
        })
    }, function(e) {
        return T(O({}, e), {
            clipsSettings: T(O({}, e.clipsSettings), {
                decoupledClipsEnabled: k.decoupledClipsEnabled
            })
        })
    }, function(e) {
        var t;
        return T(O({}, e), {
            hardwareClassificationForDecoupled: null !== (t = e.hardwareClassificationForDecoupled) && void 0 !== t ? t : null
        })
    }, function(e) {
        var t, r = null === (t = n("335911").default) || void 0 === t ? void 0 : t.getHardwareH264();
        return T(O({}, e), {
            clipsSettings: T(O({}, e.clipsSettings), {
                clipsEnabled: !!r && e.clipsSettings.clipsEnabled,
                decoupledClipsEnabled: !!r && e.clipsSettings.decoupledClipsEnabled
            })
        })
    }, function(e) {
        var t;
        return T(O({}, e), {
            newClipIds: null !== (t = e.newClipIds) && void 0 !== t ? t : [],
            newClipIDs: void 0
        })
    }, function(e) {
        return T(O({}, e), {
            clipsSettings: T(O({}, e.clipsSettings), {
                clipsQuality: "number" == typeof e.clipsSettings.clipsQuality || null == e.clipsSettings.clipsQuality ? k.clipsQuality : e.clipsSettings.clipsQuality
            })
        })
    }, function(e) {
        var t;
        return T(O({}, e), {
            clipsSettings: T(O({}, e.clipsSettings), {
                remindersEnabled: null !== (t = e.clipsSettings.remindersEnabled) && void 0 !== t ? t : k.remindersEnabled
            })
        })
    }, function(e) {
        return T(O({}, e), {
            hasTakenDecoupledClip: !1,
            clipsEducationState: {
                dismissedAt: null,
                numberOfGamesLaunchedSinceDismissal: 0,
                numberOfTimesDismissed: 0
            }
        })
    }]);
    var F = new j(i.default, {
        CLIPS_SETTINGS_UPDATE: function(e) {
            var t = e.settings;
            G = T(O({}, G), {
                clipsSettings: O({}, G.clipsSettings, t)
            })
        },
        CLIPS_SAVE_CLIP: function(e) {
            var t, n, r = e.clip;
            C = Math.max(C - 1, 0), D = T(O({
                applicationName: r.applicationName,
                ended: !1
            }, D), {
                newClipIds: v(null !== (t = null == D ? void 0 : D.newClipIds) && void 0 !== t ? t : []).concat([r.id])
            }), G = T(O({}, G), {
                newClipIds: v(null !== (n = G.newClipIds) && void 0 !== n ? n : []).concat([r.id])
            }), R = R.filter(function(e) {
                return e.id !== r.id
            }), N = [r].concat(v(N)), G.hasClips = !0
        },
        CLIPS_SAVE_CLIP_PLACEHOLDER: function(e) {
            R = [e.clip].concat(v(R))
        },
        CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR: function(e) {
            var t = e.clipId;
            R = R.filter(function(e) {
                return e.id !== t
            })
        },
        CLIPS_SAVE_CLIP_START: function(e) {
            var t = e.clipType,
                n = e.streamKey,
                r = e.thumbnail;
            if (C += 1, G.hasTakenDecoupledClip = G.hasTakenDecoupledClip || t === d.ClipSaveTypes.DECOUPLED, null != n && null != r) {
                var o, i = Date.now();
                U = null != U ? U : i, w[n] = v(null !== (o = w[n]) && void 0 !== o ? o : []).concat([{
                    timestamp: i,
                    thumbnail: r
                }])
            }
        },
        CLIPS_SAVE_CLIP_ERROR: function() {
            C = Math.max(C - 1, 0)
        },
        CLIPS_SAVE_ANIMATION_END: function(e) {
            var t = e.streamKey,
                n = e.timestamp;
            U === n && (U = null), null == n ? w[t] = [] : w[t] = w[t].filter(function(e) {
                return e.timestamp !== n
            })
        },
        STREAM_START: function(e) {
            var t = e.sourceName,
                n = e.pid;
            if (!G.clipsSettings.clipsEnabled) return !1;
            var r = t;
            if (null != n) {
                var o, i = u.default.getGameForPID(n);
                r = null !== (o = null == i ? void 0 : i.name) && void 0 !== o ? o : r
            }
            if (null == r || "" === r) return !1;
            D = {
                applicationName: r,
                newClipIds: [],
                ended: !1
            }
        },
        STREAM_STOP: function(e) {
            var t = e.streamKey;
            if (U = null, w[t] = [], null == D || (0, s.decodeStreamKey)(t).ownerId !== l.default.getId()) return !1;
            D = 0 === D.newClipIds.length ? null : T(O({}, D), {
                ended: !0
            })
        },
        CLIPS_CLEAR_CLIPS_SESSION: function() {
            if (null == D) return !1;
            D = null
        },
        CLIPS_CLEAR_NEW_CLIP_IDS: function() {
            G.newClipIds = []
        },
        CLIPS_LOAD_DIRECTORY_SUCCESS: function(e) {
            G.hasClips = e.clips.length > 0, N = e.clips
        },
        CLIPS_DELETE_CLIP: function(e) {
            0 === (N = N.filter(function(t) {
                return t.filepath !== e.filepath
            })).length && (G.hasClips = !1)
        },
        CLIPS_UPDATE_METADATA: function(e) {
            var t = e.clip,
                n = !0,
                r = !1,
                o = void 0;
            try {
                for (var i, a = N.entries()[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                    var u, s, l = (u = i.value, s = 2, function(e) {
                            if (Array.isArray(e)) return e
                        }(u) || function(e, t) {
                            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != o) {
                                var i = [],
                                    a = !0,
                                    u = !1;
                                try {
                                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                                } catch (e) {
                                    u = !0, r = e
                                } finally {
                                    try {
                                        !a && null != o.return && o.return()
                                    } finally {
                                        if (u) throw r
                                    }
                                }
                                return i
                            }
                        }(u, s) || g(u, s) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        c = l[0];
                    if (l[1].id === t.id) {
                        N[c] = t, N = v(N);
                        return
                    }
                }
            } catch (e) {
                r = !0, o = e
            } finally {
                try {
                    !n && null != a.return && a.return()
                } finally {
                    if (r) throw o
                }
            }
        },
        RTC_CONNECTION_FLAGS: function(e) {
            L[e.userId] = {
                clipsEnabled: (0, c.hasFlag)(e.flags, _.VoiceFlags.CLIPS_ENABLED),
                allowVoiceRecording: (0, c.hasFlag)(e.flags, _.VoiceFlags.ALLOW_VOICE_RECORDING),
                allowAnyViewerClips: (0, c.hasFlag)(e.flags, _.VoiceFlags.ALLOW_ANY_VIEWER_CLIPS)
            }
        },
        CLIPS_SHOW_CALL_WARNING: function(e) {
            P = e.channelId
        },
        VOICE_CHANNEL_SELECT: function(e) {
            e.channelId !== P && (P = null)
        },
        CLIPS_CLASSIFY_HARDWARE: function(e) {
            var t = e.classification,
                n = G.hardwareClassification;
            G.hardwareClassificationVersion = d.CLIPS_HARDWARE_CLASSIFICATION_VERSION, G.hardwareClassification = t, G.hardwareClassification === f.ClipsHardwareClassification.MEETS_AUTO_ENABLE && n !== f.ClipsHardwareClassification.MEETS_AUTO_ENABLE && (G.clipsSettings.clipsEnabled = !0);
            var r = G.hardwareClassificationForDecoupled;
            G.hardwareClassificationForDecoupled = t, G.hardwareClassificationForDecoupled === f.ClipsHardwareClassification.MEETS_AUTO_ENABLE && r !== f.ClipsHardwareClassification.MEETS_AUTO_ENABLE && G.clipsSettings.clipsEnabled && (G.clipsSettings.decoupledClipsEnabled = !0)
        },
        CLIPS_INIT: function(e) {
            var t = e.applicationName;
            if (M = null, !G.clipsSettings.clipsEnabled) return !1;
            D = {
                applicationName: t,
                newClipIds: [],
                ended: !1
            }
        },
        CLIPS_INIT_FAILURE: function(e) {
            M = e.errMsg
        },
        CLIPS_DISMISS_EDUCATION: function(e) {
            switch (e.educationType) {
                case d.ClipsUserEducationType.Error:
                    M = null;
                    break;
                case d.ClipsUserEducationType.Disabled:
                case d.ClipsUserEducationType.Enabled:
                    G.clipsEducationState.dismissedAt = Date.now(), G.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0, G.clipsEducationState.numberOfTimesDismissed += 1
            }
        },
        RUNNING_GAMES_CHANGE: function(e) {
            e.added.length > 0 && (G.clipsEducationState.numberOfGamesLaunchedSinceDismissal += 1)
        }
    });
    t.default = F
}