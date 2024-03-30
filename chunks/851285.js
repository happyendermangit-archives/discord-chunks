function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i = n("512722"),
        a = n.n(i),
        u = n("392711"),
        s = n.n(u),
        l = n("898511"),
        c = n("340310"),
        f = n("14782"),
        d = n("991161"),
        _ = n("629815"),
        E = n("674244"),
        p = n("428249"),
        m = n("382021");

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

    function O(e, t) {
        return (O = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var T = {
            ProtoClass: f.PreloadedUserSettings,
            proto: f.PreloadedUserSettings.create(),
            lazyLoaded: !1,
            editInfo: (0, m.createEmptyEditInfo)()
        },
        S = {
            ProtoClass: c.FrecencyUserSettings,
            proto: c.FrecencyUserSettings.create(),
            lazyLoaded: !0,
            editInfo: (0, m.createEmptyEditInfo)()
        },
        v = (I(r = {}, m.UserSettingsTypes.PRELOADED_USER_SETTINGS, T), I(r, m.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS, S), r),
        g = !1;

    function A() {
        b()
    }

    function b() {
        Object.values(v).forEach(function(e) {
            if (null != e.editInfo.timeout) {
                var t, n;
                clearTimeout(e.editInfo.timeout), e.editInfo.timeout = void 0, e.editInfo.timeoutDelay = Number.MAX_SAFE_INTEGER, e.editInfo.rateLimited = !1, e.editInfo.offlineEditDataVersion = null !== (n = null === (t = e.proto.versions) || void 0 === t ? void 0 : t.dataVersion) && void 0 !== n ? n : 0
            }
        })
    }

    function N(e) {
        null != e.editInfo.timeout && clearTimeout(e.editInfo.timeout), e.editInfo = (0, m.createEmptyEditInfo)()
    }

    function R(e) {
        var t = e.settings,
            n = t.proto,
            r = t.type,
            o = e.partial,
            i = e.resetEditInfo;
        g = !e.local;
        var u = v[r];
        i && N(u), o ? (u.proto = (0, p.mergeTopLevelFields)(u.ProtoClass, u.proto, n), a()("string" != typeof u.proto, "UserSettingsProto cannot be a string")) : (u.proto = n, a()("string" != typeof u.proto, "UserSettingsProto cannot be a string"), u.editInfo.loaded = !0, u.editInfo.loading = !1)
    }

    function C(e) {
        null != e && s().forEach(v, function(t, n) {
            var r, o, i = e[Number(n)];
            if (null == i) return;
            var u = null !== (r = null == i ? void 0 : i.proto) && void 0 !== r ? r : "",
                s = (0, p.b64ToProto)(t.ProtoClass, u);
            if (null == s) return;
            t.proto = s, a()("string" != typeof t.proto, "UserSettingsProto cannot be a string");
            var l = null !== (o = null == i ? void 0 : i.protoToSave) && void 0 !== o ? o : null;
            if (null != l && null != i.offlineEditDataVersion) {
                var c = (0, p.b64ToProto)(t.ProtoClass, l);
                null != c && (t.editInfo.protoToSave = c, t.editInfo.offlineEditDataVersion = i.offlineEditDataVersion)
            }
        })
    }
    var P = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && O(e, t)
        }(u, e);
        var t, n, r, o, i, a = (t = u, n = function() {
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

        function u() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), a.apply(this, arguments)
        }
        return r = u, o = [{
            key: "initialize",
            value: function(e) {
                C(e)
            }
        }, {
            key: "getState",
            value: function() {
                return this.computeState()
            }
        }, {
            key: "computeState",
            value: function() {
                return s().mapValues(v, function(e) {
                    var t = {
                        proto: (0, p.protoToB64)(e.ProtoClass, e.proto)
                    };
                    return null != e.editInfo.offlineEditDataVersion && null != e.editInfo.protoToSave && (t.protoToSave = (0, p.protoToB64)(e.ProtoClass, e.editInfo.protoToSave), t.offlineEditDataVersion = e.editInfo.offlineEditDataVersion), t
                })
            }
        }, {
            key: "hasLoaded",
            value: function(e) {
                return v[e].editInfo.loaded
            }
        }, {
            key: "settings",
            get: function() {
                return T.proto
            }
        }, {
            key: "frecencyWithoutFetchingLatest",
            get: function() {
                return S.proto
            }
        }, {
            key: "wasMostRecentUpdateFromServer",
            get: function() {
                return g
            }
        }, {
            key: "getFullState",
            value: function() {
                return v
            }
        }, {
            key: "getGuildFolders",
            value: function() {
                var e, t = null === (e = T.proto.guildFolders) || void 0 === e ? void 0 : e.folders;
                return null == t ? null : t.map(function(e) {
                    var t, n, r, o = null === (t = e.id) || void 0 === t ? void 0 : t.value,
                        i = null === (n = e.color) || void 0 === n ? void 0 : n.value;
                    return {
                        guildIds: e.guildIds,
                        folderId: null == o ? void 0 : Number(o),
                        folderName: null === (r = e.name) || void 0 === r ? void 0 : r.value,
                        folderColor: null == i ? void 0 : Number(i)
                    }
                })
            }
        }, {
            key: "getGuildRecentsDismissedAt",
            value: function(e) {
                if (null == e) return 0;
                var t, n, r = null === (n = this.settings.guilds) || void 0 === n ? void 0 : null === (t = n.guilds[e]) || void 0 === t ? void 0 : t.guildRecentsDismissedAt;
                return null == r ? 0 : d.Timestamp.toDate(r).getTime()
            }
        }, {
            key: "getDismissedGuildContent",
            value: function(e) {
                var t, n, r;
                return null == e ? null : null === (r = this.settings.guilds) || void 0 === r ? void 0 : null === (n = r.guilds) || void 0 === n ? void 0 : null === (t = n[e]) || void 0 === t ? void 0 : t.dismissedGuildContent
            }
        }, {
            key: "getGuildsProto",
            value: function() {
                var e, t;
                return null !== (t = null === (e = this.settings.guilds) || void 0 === e ? void 0 : e.guilds) && void 0 !== t ? t : null
            }
        }], y(r.prototype, o), i && y(r, i), u
    }(l.default.PersistedStore);
    I(P, "displayName", "UserSettingsProtoStore"), I(P, "persistKey", "UserSettingsProtoStore-Cache"), t.default = new P(_.default, {
        CACHE_LOADED: function(e) {
            C(e.userSettings)
        },
        USER_SETTINGS_PROTO_UPDATE: R,
        USER_SETTINGS_PROTO_ENQUEUE_UPDATE: R,
        USER_SETTINGS_PROTO_UPDATE_EDIT_INFO: function(e) {
            var t = e.settings,
                n = t.type,
                r = t.changes;
            a()(!__OVERLAY__, "this cannot run in the overlay");
            var o = v[n];
            return o.editInfo = function(e) {
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
            }({}, o.editInfo, r), !1
        },
        CONNECTION_OPEN: function(e) {
            var t = e.userSettingsProto;
            null != t && (T.proto = t, a()("string" != typeof T.proto, "UserSettingsProto cannot be a string"));
            var n = (0, p.runMigrations)(T.proto, E.default[m.UserSettingsTypes.PRELOADED_USER_SETTINGS]),
                r = n.proto,
                o = n.isDirty,
                i = n.cleanupFuncs;
            o && N(T), T.proto = r, a()("string" != typeof T.proto, "UserSettingsProto cannot be a string"), T.editInfo.triggeredMigrations = o, T.editInfo.cleanupFuncs = i, T.editInfo.loaded = !0, Object.values(v).forEach(function(e) {
                e.lazyLoaded && (e.editInfo.loaded = !1, e.editInfo.loading = !1)
            }), b()
        },
        CONNECTION_CLOSED: A,
        CONNECTION_RESUMED: A,
        OVERLAY_INITIALIZE: function(e) {
            var t = e.userSettingsProto;
            T.proto = (0, p.b64ToPreloadedUserSettingsProto)(t), a()("string" != typeof T.proto, "UserSettingsProto cannot be a string")
        },
        LOGOUT: function() {
            b(), Object.values(v).forEach(function(e) {
                e.proto = e.ProtoClass.create(), e.editInfo = (0, m.createEmptyEditInfo)()
            })
        }
    })
}