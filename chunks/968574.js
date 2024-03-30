function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FrecencyUserSettingsActionCreators: function() {
            return P
        },
        PreloadedUserSettingsActionCreators: function() {
            return C
        },
        UserSettingsActionCreatorsByType: function() {
            return D
        },
        UserSettingsDelay: function() {
            return y.UserSettingsDelay
        },
        addDismissedContent: function() {
            return U
        },
        checkAllDismissedContents: function() {
            return G
        },
        clearDismissedContents: function() {
            return k
        },
        removeDismissedContent: function() {
            return w
        },
        updateUserChannelSettings: function() {
            return M
        },
        updateUserGuildSettings: function() {
            return L
        }
    });
    var r, o = n("512722"),
        i = n.n(o),
        a = n("188129"),
        u = n("967888"),
        s = n("340310"),
        l = n("14782"),
        c = n("242880"),
        f = n("629815"),
        d = n("388990"),
        _ = n("453604"),
        E = n("674244"),
        p = n("851285"),
        m = n("428249"),
        y = n("382021"),
        I = n("281767");

    function h(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function O(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function T(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    O(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    O(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function S(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function v(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function g(e) {
        return function(e) {
            if (Array.isArray(e)) return h(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return h(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function A(e, t) {
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
    var b = "UserSettingsProtoLastWriteTimes",
        N = Date.now();
    f.default.subscribe("CONNECTION_OPEN", function() {
        Date.now()
    }), f.default.subscribe("CONNECTION_CLOSED", function() {
        Date.now()
    }), "undefined" != typeof document && (document.addEventListener("mousedown", function() {}), document.addEventListener("keydown", function() {}));
    var R = function() {
            var e, t, n;

            function r(e, t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, r), v(this, "ProtoClass", void 0), v(this, "type", void 0), v(this, "logger", void 0), v(this, "beforeSendCallbacks", void 0), v(this, "lastSendTime", void 0), v(this, "persistChanges", void 0), this.ProtoClass = e, this.type = t, this.beforeSendCallbacks = [], this.lastSendTime = 0;
                var n = this;
                this.persistChanges = T(function() {
                    var e, t, r, o, a, s, l, c;
                    return A(this, function(_) {
                        switch (_.label) {
                            case 0:
                                if (i()(!__OVERLAY__, "this cannot run in the overlay"), n.logger.log("Persisting proto"), null == (e = n.getEditInfo().editInfo).protoToSave) return n.logger.log("Not persisting proto because the proto was null"), [2];
                                if (n.beforeSendCallbacks.forEach(function(t) {
                                        return (0, t.processProto)(e.protoToSave)
                                    }), null == (t = (0, m.protoToB64)(n.ProtoClass, e.protoToSave)) || "" === t) return n.logger.log("Not persisting proto because there is nothing to change"), [2];
                                _.label = 1;
                            case 1:
                                return _.trys.push([1, 3, , 4]), n.saveLastSendTime(), [4, u.HTTP.patch({
                                    url: I.Endpoints.USER_SETTINGS_PROTO(n.type),
                                    body: {
                                        settings: t,
                                        required_data_version: e.offlineEditDataVersion
                                    }
                                })];
                            case 2:
                                if ((r = _.sent().body).out_of_date && n.logger.log("Proto was out of date, discarding changes"), n.getEditInfo().editInfo.cleanupFuncs.forEach(function(e) {
                                        return e()
                                    }), null == (o = (0, m.b64ToProto)(n.ProtoClass, r.settings))) return [2];
                                return f.default.dispatch({
                                    type: "USER_SETTINGS_PROTO_UPDATE",
                                    settings: {
                                        proto: o,
                                        type: n.type
                                    },
                                    resetEditInfo: !0,
                                    wasSaved: !0,
                                    local: !1
                                }), [3, 4];
                            case 3:
                                if (429 === (a = _.sent()).status) n.logger.log("Rate limited, scheduling retry"), c = setTimeout(n.persistChanges, Math.min(30 * d.default.Millis.SECOND, (null !== (l = a.body.retry_after) && void 0 !== l ? l : 60) * d.default.Millis.SECOND)), n.dispatchChanges({
                                    rateLimited: !0,
                                    timeout: c
                                });
                                else if (400 === a.status && (null === (s = a.body) || void 0 === s ? void 0 : s.code) === I.AbortCodes.INVALID_USER_SETTINGS_DATA) throw n.logger.log("Reloading do to invalid data"), n.loadIfNecessary(!0), a;
                                else throw n.logger.log("Unknown user settings error"), a;
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                }), this.logger = new a.Logger(this.ProtoClass.typeName)
            }
            return e = r, t = [{
                key: "getEditInfo",
                value: function() {
                    return p.default.getFullState()[this.type]
                }
            }, {
                key: "getCurrentValue",
                value: function() {
                    return this.getEditInfo().proto
                }
            }, {
                key: "updateAsync",
                value: function(e, t, n) {
                    var r = this;
                    return T(function() {
                        var o, i, a, u, s;
                        return A(this, function(l) {
                            switch (l.label) {
                                case 0:
                                    return [4, r.loadIfNecessary()];
                                case 1:
                                    if (l.sent(), null == (o = r.ProtoClass.fields.find(function(t) {
                                            return t.localName === e
                                        }))) throw Error("Unknown proto field name ".concat(String(e)));
                                    if (i = o.T(), !1 === t(u = null != (a = r.getCurrentValue()[e]) ? i.fromBinary(i.toBinary(a), m.BINARY_READ_OPTIONS) : i.create())) return [2];
                                    return (s = r.ProtoClass.create())[e] = u, __OVERLAY__ ? f.default.dispatch({
                                        type: "USER_SETTINGS_PROTO_ENQUEUE_UPDATE",
                                        settings: {
                                            type: r.type,
                                            proto: s
                                        },
                                        delaySeconds: n,
                                        jitter: n === y.UserSettingsDelay.AUTOMATED || n === y.UserSettingsDelay.DAILY,
                                        partial: !0,
                                        resetEditInfo: !1,
                                        local: !0
                                    }) : (r.logger.log("Updating ".concat(String(e), " with delay ").concat(n)), r.markDirty(s, {
                                        delaySeconds: n,
                                        jitter: n === y.UserSettingsDelay.AUTOMATED || n === y.UserSettingsDelay.DAILY
                                    })), [2]
                            }
                        })
                    })()
                }
            }, {
                key: "markDirty",
                value: function(e, t) {
                    i()(!__OVERLAY__, "this cannot run in the overlay");
                    var n, r = this.getEditInfo().editInfo,
                        o = {
                            timeout: r.timeout
                        };
                    if (!r.loaded) throw Error("Cannot edit user settings proto because we have not yet loaded the stored version from the DB");
                    !1 !== t.dispatch && f.default.dispatch({
                        type: "USER_SETTINGS_PROTO_UPDATE",
                        settings: {
                            type: this.type,
                            proto: e
                        },
                        partial: !0,
                        local: !0
                    });
                    var a = null !== (n = t.delaySeconds) && void 0 !== n ? n : 0;
                    if (null != o.timeout && a < r.timeoutDelay && !r.rateLimited && (clearTimeout(o.timeout), o.timeout = void 0), null == o.timeout) {
                        var u = a * d.default.Millis.SECOND;
                        t.jitter && (u += Math.floor(Math.random() * Math.min(u, 30 * d.default.Millis.SECOND))), this.logger.log("Scheduling save from markDirty"), o.timeout = setTimeout(this.persistChanges, u), o.timeoutDelay = a
                    }
                    null != t.cleanup && (o.cleanupFuncs = g(r.cleanupFuncs).concat(g(t.cleanup))), null == r.protoToSave ? o.protoToSave = e : o.protoToSave = (0, m.mergeTopLevelFields)(this.ProtoClass, r.protoToSave, e), this.dispatchChanges(o)
                }
            }, {
                key: "dispatchChanges",
                value: function(e) {
                    f.default.dispatch({
                        type: "USER_SETTINGS_PROTO_UPDATE_EDIT_INFO",
                        settings: {
                            changes: e,
                            type: this.type
                        }
                    })
                }
            }, {
                key: "saveLastSendTime",
                value: function() {
                    var e, t = null !== (e = c.Storage.get(b)) && void 0 !== e ? e : {};
                    t[this.type] = Date.now(), c.Storage.set(b, t)
                }
            }, {
                key: "loadIfNecessary",
                value: function(e) {
                    var t = this;
                    return T(function() {
                        var n, r, o, i, a, s, l, c, d;
                        return A(this, function(_) {
                            switch (_.label) {
                                case 0:
                                    if (__OVERLAY__) return f.default.dispatch({
                                        type: "USER_SETTINGS_PROTO_LOAD_IF_NECESSARY",
                                        settingsType: t.type
                                    }), [2];
                                    if (n = t.getEditInfo().editInfo, !e && (n.loaded || n.loading)) return [2];
                                    t.logger.log("Loading proto"), t.dispatchChanges({
                                        loading: !0
                                    }), _.label = 1;
                                case 1:
                                    return _.trys.push([1, 4, , 5]), [4, u.HTTP.get({
                                        url: I.Endpoints.USER_SETTINGS_PROTO(t.type)
                                    })];
                                case 2:
                                    if (r = _.sent().body.settings, null == (o = (0, m.b64ToProto)(t.ProtoClass, r))) return t.dispatchChanges({
                                        loading: !1,
                                        loaded: !0
                                    }), [2];
                                    return i = E.default[t.type], s = (a = (0, m.runMigrations)(o, i)).proto, l = a.isDirty, c = a.cleanupFuncs, [4, f.default.dispatch({
                                        type: "USER_SETTINGS_PROTO_UPDATE",
                                        settings: {
                                            type: t.type,
                                            proto: o
                                        },
                                        resetEditInfo: l || e,
                                        local: !1
                                    })];
                                case 3:
                                    return _.sent(), l && t.markDirtyFromMigration(s, c), [2, o];
                                case 4:
                                    throw d = _.sent(), t.dispatchChanges({
                                        loading: !1
                                    }), d;
                                case 5:
                                    return [2]
                            }
                        })
                    })()
                }
            }, {
                key: "markDirtyFromMigration",
                value: function(e, t) {
                    i()(!__OVERLAY__, "this cannot run in the overlay"), this.logger.log("Marking dirty due to migrates"), i()(null == this.getEditInfo().editInfo.offlineEditDataVersion, "offline changes are not supported with migrations"), this.markDirty(e, {
                        cleanup: t,
                        dispatch: !1,
                        delaySeconds: y.UserSettingsDelay.AUTOMATED,
                        jitter: !0
                    })
                }
            }, {
                key: "markDirtyIfHasPendingChange",
                value: function(e) {
                    this.beforeSendCallbacks.some(function(e) {
                        return (0, e.hasChanges)()
                    }) && this.markDirty(this.ProtoClass.create(), {
                        dispatch: !1,
                        delaySeconds: 0,
                        cleanup: e
                    })
                }
            }, {
                key: "scheduleSaveFromOfflineEdit",
                value: function() {
                    i()(!__OVERLAY__, "this cannot run in the overlay"), this.logger.log("Scheduling save from offline edit");
                    var e = this.getEditInfo().editInfo;
                    i()(null != e.protoToSave, "protoToSave cannot be null"), i()(null != e.offlineEditDataVersion, "offlineEditDataVersion cannot be null"), i()(null == e.timeout, "timeout must not be set already");
                    var t = 5e3 + Math.floor(5e3 * Math.random()),
                        n = setTimeout(this.persistChanges, t);
                    this.dispatchChanges({
                        timeout: n,
                        timeoutDelay: t
                    })
                }
            }], S(e.prototype, t), n && S(e, n), r
        }(),
        C = new R(l.PreloadedUserSettings, y.UserSettingsTypes.PRELOADED_USER_SETTINGS),
        P = new R(s.FrecencyUserSettings, y.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS),
        D = (v(r = {}, y.UserSettingsTypes.PRELOADED_USER_SETTINGS, C), v(r, y.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS, P), r);

    function L(e, t, n) {
        return C.updateAsync("guilds", function(n) {
            return (0, m.mutateUserGuildSettingsInternal)(n, e, t)
        }, n)
    }

    function M(e, t, n, r) {
        return L(e, function(e) {
            return (0, m.mutateUserChannelSettingsInternal)(e, t, n)
        }, r)
    }

    function U(e) {
        return C.updateAsync("userContent", function(t) {
            if ((0, _.hasBit)(t.dismissedContents, e)) return !1;
            t.dismissedContents = (0, _.addBit)(t.dismissedContents, e)
        }, y.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }

    function w(e) {
        return C.updateAsync("userContent", function(t) {
            if (!(0, _.hasBit)(t.dismissedContents, e)) return !1;
            t.dismissedContents = (0, _.removeBit)(t.dismissedContents, e)
        }, y.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }

    function k() {
        return C.updateAsync("userContent", function(e) {
            e.dismissedContents = new Uint8Array
        }, y.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }

    function G() {
        return C.updateAsync("userContent", function(e) {
            var t = new Uint8Array,
                n = !0,
                r = !1,
                o = void 0;
            try {
                for (var i, a = Object.keys(l.DismissibleContent)[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                    var u = i.value;
                    t = (0, _.addBit)(t, l.DismissibleContent[u])
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
            e.dismissedContents = t
        }, y.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }
}