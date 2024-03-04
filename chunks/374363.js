function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return M
        }
    });
    var t = E("627445"),
        o = E.n(t),
        n = E("917351"),
        r = E.n(n),
        a = E("446674"),
        i = E("713349"),
        I = E("151426"),
        T = E("801340"),
        s = E("913144"),
        S = E("275877"),
        N = E("116949"),
        O = E("397336");
    let A = {
            ProtoClass: I.PreloadedUserSettings,
            proto: I.PreloadedUserSettings.create(),
            lazyLoaded: !1,
            editInfo: (0, O.createEmptyEditInfo)()
        },
        R = {
            ProtoClass: i.FrecencyUserSettings,
            proto: i.FrecencyUserSettings.create(),
            lazyLoaded: !0,
            editInfo: (0, O.createEmptyEditInfo)()
        },
        l = {
            [O.UserSettingsTypes.PRELOADED_USER_SETTINGS]: A,
            [O.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS]: R
        },
        u = !1;

    function L() {
        C()
    }

    function C() {
        Object.values(l).forEach(e => {
            if (null != e.editInfo.timeout) {
                var _, E;
                clearTimeout(e.editInfo.timeout), e.editInfo.timeout = void 0, e.editInfo.timeoutDelay = Number.MAX_SAFE_INTEGER, e.editInfo.rateLimited = !1, e.editInfo.offlineEditDataVersion = null !== (E = null === (_ = e.proto.versions) || void 0 === _ ? void 0 : _.dataVersion) && void 0 !== E ? E : 0
            }
        })
    }

    function D(e) {
        null != e.editInfo.timeout && clearTimeout(e.editInfo.timeout), e.editInfo = (0, O.createEmptyEditInfo)()
    }

    function c(e) {
        let {
            settings: {
                proto: _,
                type: E
            },
            partial: t,
            resetEditInfo: n,
            local: r
        } = e;
        u = !r;
        let a = l[E];
        n && D(a), t ? (a.proto = (0, N.mergeTopLevelFields)(a.ProtoClass, a.proto, _), o("string" != typeof a.proto, "UserSettingsProto cannot be a string")) : (a.proto = _, o("string" != typeof a.proto, "UserSettingsProto cannot be a string"), a.editInfo.loaded = !0, a.editInfo.loading = !1)
    }

    function d(e) {
        null != e && r.forEach(l, (_, E) => {
            var t, n;
            let r = e[Number(E)];
            if (null == r) return;
            let a = null !== (t = null == r ? void 0 : r.proto) && void 0 !== t ? t : "",
                i = (0, N.b64ToProto)(_.ProtoClass, a);
            if (null == i) return;
            _.proto = i, o("string" != typeof _.proto, "UserSettingsProto cannot be a string");
            let I = null !== (n = null == r ? void 0 : r.protoToSave) && void 0 !== n ? n : null;
            if (null == I || null == r.offlineEditDataVersion) return;
            let T = (0, N.b64ToProto)(_.ProtoClass, I);
            null != T && (_.editInfo.protoToSave = T, _.editInfo.offlineEditDataVersion = r.offlineEditDataVersion)
        })
    }
    class U extends a.default.PersistedStore {
        initialize(e) {
            d(e)
        }
        getState() {
            return this.computeState()
        }
        computeState() {
            return r.mapValues(l, e => {
                let _ = {
                    proto: (0, N.protoToB64)(e.ProtoClass, e.proto)
                };
                return null != e.editInfo.offlineEditDataVersion && null != e.editInfo.protoToSave && (_.protoToSave = (0, N.protoToB64)(e.ProtoClass, e.editInfo.protoToSave), _.offlineEditDataVersion = e.editInfo.offlineEditDataVersion), _
            })
        }
        hasLoaded(e) {
            return l[e].editInfo.loaded
        }
        get settings() {
            return A.proto
        }
        get frecencyWithoutFetchingLatest() {
            return R.proto
        }
        get wasMostRecentUpdateFromServer() {
            return u
        }
        getFullState() {
            return l
        }
        getGuildFolders() {
            var e;
            let _ = null === (e = A.proto.guildFolders) || void 0 === e ? void 0 : e.folders;
            return null == _ ? null : _.map(e => {
                var _, E, t;
                let o = null === (_ = e.id) || void 0 === _ ? void 0 : _.value,
                    n = null === (E = e.color) || void 0 === E ? void 0 : E.value;
                return {
                    guildIds: e.guildIds,
                    folderId: null == o ? void 0 : Number(o),
                    folderName: null === (t = e.name) || void 0 === t ? void 0 : t.value,
                    folderColor: null == n ? void 0 : Number(n)
                }
            })
        }
        getGuildRecentsDismissedAt(e) {
            var _, E;
            if (null == e) return 0;
            let t = null === (E = this.settings.guilds) || void 0 === E ? void 0 : null === (_ = E.guilds[e]) || void 0 === _ ? void 0 : _.guildRecentsDismissedAt;
            return null == t ? 0 : T.Timestamp.toDate(t).getTime()
        }
        getDismissedGuildContent(e) {
            var _, E, t;
            return null == e ? null : null === (t = this.settings.guilds) || void 0 === t ? void 0 : null === (E = t.guilds) || void 0 === E ? void 0 : null === (_ = E[e]) || void 0 === _ ? void 0 : _.dismissedGuildContent
        }
        getGuildsProto() {
            var e, _;
            return null !== (_ = null === (e = this.settings.guilds) || void 0 === e ? void 0 : e.guilds) && void 0 !== _ ? _ : null
        }
    }
    U.displayName = "UserSettingsProtoStore", U.persistKey = "UserSettingsProtoStore-Cache";
    var M = new U(s.default, {
        CACHE_LOADED: function(e) {
            let {
                userSettings: _
            } = e;
            d(_)
        },
        USER_SETTINGS_PROTO_UPDATE: c,
        USER_SETTINGS_PROTO_ENQUEUE_UPDATE: c,
        USER_SETTINGS_PROTO_UPDATE_EDIT_INFO: function(e) {
            let {
                settings: {
                    type: _,
                    changes: E
                }
            } = e;
            o(!__OVERLAY__, "this cannot run in the overlay");
            let t = l[_];
            return t.editInfo = {
                ...t.editInfo,
                ...E
            }, !1
        },
        CONNECTION_OPEN: function(e) {
            let {
                userSettingsProto: _
            } = e;
            null != _ && (A.proto = _, o("string" != typeof A.proto, "UserSettingsProto cannot be a string"));
            let {
                proto: E,
                isDirty: t,
                cleanupFuncs: n
            } = (0, N.runMigrations)(A.proto, S.default[O.UserSettingsTypes.PRELOADED_USER_SETTINGS]);
            t && D(A), A.proto = E, o("string" != typeof A.proto, "UserSettingsProto cannot be a string"), A.editInfo.triggeredMigrations = t, A.editInfo.cleanupFuncs = n, A.editInfo.loaded = !0, Object.values(l).forEach(e => {
                e.lazyLoaded && (e.editInfo.loaded = !1, e.editInfo.loading = !1)
            }), C()
        },
        CONNECTION_CLOSED: L,
        CONNECTION_RESUMED: L,
        OVERLAY_INITIALIZE: function(e) {
            let {
                userSettingsProto: _
            } = e;
            A.proto = (0, N.b64ToPreloadedUserSettingsProto)(_), o("string" != typeof A.proto, "UserSettingsProto cannot be a string")
        },
        LOGOUT: function() {
            C(), Object.values(l).forEach(e => {
                e.proto = e.ProtoClass.create(), e.editInfo = (0, O.createEmptyEditInfo)()
            })
        }
    })
}