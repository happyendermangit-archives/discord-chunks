function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r = n("512722"),
        s = n.n(r),
        a = n("392711"),
        o = n.n(a),
        l = n("442837"),
        u = n("377108"),
        d = n("524437"),
        _ = n("835913"),
        c = n("570140"),
        E = n("262847"),
        I = n("48481"),
        T = n("526761");

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let S = {
            ProtoClass: d.PreloadedUserSettings,
            proto: d.PreloadedUserSettings.create(),
            lazyLoaded: !1,
            editInfo: (0, T.createEmptyEditInfo)()
        },
        h = {
            ProtoClass: u.FrecencyUserSettings,
            proto: u.FrecencyUserSettings.create(),
            lazyLoaded: !0,
            editInfo: (0, T.createEmptyEditInfo)()
        },
        A = {
            [T.UserSettingsTypes.PRELOADED_USER_SETTINGS]: S,
            [T.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS]: h
        },
        m = !1;

    function N() {
        p()
    }

    function p() {
        Object.values(A).forEach(e => {
            if (null != e.editInfo.timeout) {
                var t, n;
                clearTimeout(e.editInfo.timeout), e.editInfo.timeout = void 0, e.editInfo.timeoutDelay = Number.MAX_SAFE_INTEGER, e.editInfo.rateLimited = !1, e.editInfo.offlineEditDataVersion = null !== (n = null === (t = e.proto.versions) || void 0 === t ? void 0 : t.dataVersion) && void 0 !== n ? n : 0
            }
        })
    }

    function O(e) {
        null != e.editInfo.timeout && clearTimeout(e.editInfo.timeout), e.editInfo = (0, T.createEmptyEditInfo)()
    }

    function R(e) {
        let {
            settings: {
                proto: t,
                type: n
            },
            partial: i,
            resetEditInfo: r,
            local: a
        } = e;
        m = !a;
        let o = A[n];
        r && O(o), i ? (o.proto = (0, I.mergeTopLevelFields)(o.ProtoClass, o.proto, t), s()("string" != typeof o.proto, "UserSettingsProto cannot be a string")) : (o.proto = t, s()("string" != typeof o.proto, "UserSettingsProto cannot be a string"), o.editInfo.loaded = !0, o.editInfo.loading = !1)
    }

    function C(e) {
        null != e && o().forEach(A, (t, n) => {
            var i, r;
            let a = e[Number(n)];
            if (null == a) return;
            let o = null !== (i = null == a ? void 0 : a.proto) && void 0 !== i ? i : "",
                l = (0, I.b64ToProto)(t.ProtoClass, o);
            if (null == l) return;
            t.proto = l, s()("string" != typeof t.proto, "UserSettingsProto cannot be a string");
            let u = null !== (r = null == a ? void 0 : a.protoToSave) && void 0 !== r ? r : null;
            if (null == u || null == a.offlineEditDataVersion) return;
            let d = (0, I.b64ToProto)(t.ProtoClass, u);
            null != d && (t.editInfo.protoToSave = d, t.editInfo.offlineEditDataVersion = a.offlineEditDataVersion)
        })
    }
    class g extends(i = l.default.PersistedStore) {
        initialize(e) {
            C(e)
        }
        getState() {
            return this.computeState()
        }
        computeState() {
            return o().mapValues(A, e => {
                let t = {
                    proto: (0, I.protoToB64)(e.ProtoClass, e.proto)
                };
                return null != e.editInfo.offlineEditDataVersion && null != e.editInfo.protoToSave && (t.protoToSave = (0, I.protoToB64)(e.ProtoClass, e.editInfo.protoToSave), t.offlineEditDataVersion = e.editInfo.offlineEditDataVersion), t
            })
        }
        hasLoaded(e) {
            return A[e].editInfo.loaded
        }
        get settings() {
            return S.proto
        }
        get frecencyWithoutFetchingLatest() {
            return h.proto
        }
        get wasMostRecentUpdateFromServer() {
            return m
        }
        getFullState() {
            return A
        }
        getGuildFolders() {
            var e;
            let t = null === (e = S.proto.guildFolders) || void 0 === e ? void 0 : e.folders;
            return null == t ? null : t.map(e => {
                var t, n, i;
                let r = null === (t = e.id) || void 0 === t ? void 0 : t.value,
                    s = null === (n = e.color) || void 0 === n ? void 0 : n.value;
                return {
                    guildIds: e.guildIds,
                    folderId: null == r ? void 0 : Number(r),
                    folderName: null === (i = e.name) || void 0 === i ? void 0 : i.value,
                    folderColor: null == s ? void 0 : Number(s)
                }
            })
        }
        getGuildRecentsDismissedAt(e) {
            var t, n;
            if (null == e) return 0;
            let i = null === (n = this.settings.guilds) || void 0 === n ? void 0 : null === (t = n.guilds[e]) || void 0 === t ? void 0 : t.guildRecentsDismissedAt;
            return null == i ? 0 : _.Timestamp.toDate(i).getTime()
        }
        getDismissedGuildContent(e) {
            var t, n, i;
            return null == e ? null : null === (i = this.settings.guilds) || void 0 === i ? void 0 : null === (n = i.guilds) || void 0 === n ? void 0 : null === (t = n[e]) || void 0 === t ? void 0 : t.dismissedGuildContent
        }
        getGuildsProto() {
            var e, t;
            return null !== (t = null === (e = this.settings.guilds) || void 0 === e ? void 0 : e.guilds) && void 0 !== t ? t : null
        }
    }
    f(g, "displayName", "UserSettingsProtoStore"), f(g, "persistKey", "UserSettingsProtoStore-Cache"), t.default = new g(c.default, {
        CACHE_LOADED: function(e) {
            let {
                userSettings: t
            } = e;
            C(t)
        },
        USER_SETTINGS_PROTO_UPDATE: R,
        USER_SETTINGS_PROTO_ENQUEUE_UPDATE: R,
        USER_SETTINGS_PROTO_UPDATE_EDIT_INFO: function(e) {
            let {
                settings: {
                    type: t,
                    changes: n
                }
            } = e;
            s()(!__OVERLAY__, "this cannot run in the overlay");
            let i = A[t];
            return i.editInfo = {
                ...i.editInfo,
                ...n
            }, !1
        },
        CONNECTION_OPEN: function(e) {
            let {
                userSettingsProto: t
            } = e;
            null != t && (S.proto = t, s()("string" != typeof S.proto, "UserSettingsProto cannot be a string"));
            let {
                proto: n,
                isDirty: i,
                cleanupFuncs: r
            } = (0, I.runMigrations)(S.proto, E.default[T.UserSettingsTypes.PRELOADED_USER_SETTINGS]);
            i && O(S), S.proto = n, s()("string" != typeof S.proto, "UserSettingsProto cannot be a string"), S.editInfo.triggeredMigrations = i, S.editInfo.cleanupFuncs = r, S.editInfo.loaded = !0, Object.values(A).forEach(e => {
                e.lazyLoaded && (e.editInfo.loaded = !1, e.editInfo.loading = !1)
            }), p()
        },
        CONNECTION_CLOSED: N,
        CONNECTION_RESUMED: N,
        OVERLAY_INITIALIZE: function(e) {
            let {
                userSettingsProto: t
            } = e;
            S.proto = (0, I.b64ToPreloadedUserSettingsProto)(t), s()("string" != typeof S.proto, "UserSettingsProto cannot be a string")
        },
        LOGOUT: function() {
            p(), Object.values(A).forEach(e => {
                e.proto = e.ProtoClass.create(), e.editInfo = (0, T.createEmptyEditInfo)()
            })
        }
    })
}