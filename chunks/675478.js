function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FrecencyUserSettingsActionCreators: function() {
            return p
        },
        PreloadedUserSettingsActionCreators: function() {
            return O
        },
        UserSettingsActionCreatorsByType: function() {
            return R
        },
        UserSettingsDelay: function() {
            return f.UserSettingsDelay
        },
        addDismissedContent: function() {
            return L
        },
        checkAllDismissedContents: function() {
            return M
        },
        clearDismissedContents: function() {
            return v
        },
        removeDismissedContent: function() {
            return D
        },
        updateUserChannelSettings: function() {
            return g
        },
        updateUserGuildSettings: function() {
            return C
        }
    }), n("411104"), n("47120"), n("518263"), n("970173"), n("520712"), n("268111"), n("941497"), n("32026"), n("480839"), n("744285"), n("492257"), n("873817");
    var i = n("512722"),
        r = n.n(i),
        s = n("259443"),
        a = n("544891"),
        o = n("377108"),
        l = n("524437"),
        u = n("433517"),
        d = n("570140"),
        _ = n("70956"),
        c = n("915486"),
        E = n("262847"),
        I = n("581883"),
        T = n("48481"),
        f = n("526761"),
        S = n("981631");

    function A(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let h = "UserSettingsProtoLastWriteTimes",
        m = Date.now();
    d.default.subscribe("CONNECTION_OPEN", () => {
        Date.now()
    }), d.default.subscribe("CONNECTION_CLOSED", () => {
        Date.now()
    }), "undefined" != typeof document && (document.addEventListener("mousedown", () => {}), document.addEventListener("keydown", () => {}));
    class N {
        getEditInfo() {
            return I.default.getFullState()[this.type]
        }
        getCurrentValue() {
            return this.getEditInfo().proto
        }
        async updateAsync(e, t, n) {
            await this.loadIfNecessary();
            let i = this.ProtoClass.fields.find(t => t.localName === e);
            if (null == i) throw Error("Unknown proto field name ".concat(String(e)));
            let r = i.T(),
                s = this.getCurrentValue()[e],
                a = null != s ? r.fromBinary(r.toBinary(s), T.BINARY_READ_OPTIONS) : r.create();
            if (!1 === t(a)) return;
            let o = this.ProtoClass.create();
            o[e] = a, __OVERLAY__ ? d.default.dispatch({
                type: "USER_SETTINGS_PROTO_ENQUEUE_UPDATE",
                settings: {
                    type: this.type,
                    proto: o
                },
                delaySeconds: n,
                jitter: n === f.UserSettingsDelay.AUTOMATED || n === f.UserSettingsDelay.DAILY,
                partial: !0,
                resetEditInfo: !1,
                local: !0
            }) : (this.logger.log("Updating ".concat(String(e), " with delay ").concat(n)), this.markDirty(o, {
                delaySeconds: n,
                jitter: n === f.UserSettingsDelay.AUTOMATED || n === f.UserSettingsDelay.DAILY
            }))
        }
        markDirty(e, t) {
            var n;
            r()(!__OVERLAY__, "this cannot run in the overlay");
            let {
                editInfo: i
            } = this.getEditInfo(), s = {
                timeout: i.timeout
            };
            if (!i.loaded) throw Error("Cannot edit user settings proto because we have not yet loaded the stored version from the DB");
            !1 !== t.dispatch && d.default.dispatch({
                type: "USER_SETTINGS_PROTO_UPDATE",
                settings: {
                    type: this.type,
                    proto: e
                },
                partial: !0,
                local: !0
            });
            let a = null !== (n = t.delaySeconds) && void 0 !== n ? n : 0;
            if (null != s.timeout && a < i.timeoutDelay && !i.rateLimited && (clearTimeout(s.timeout), s.timeout = void 0), null == s.timeout) {
                let e = a * _.default.Millis.SECOND;
                t.jitter && (e += Math.floor(Math.random() * Math.min(e, 30 * _.default.Millis.SECOND))), this.logger.log("Scheduling save from markDirty"), s.timeout = setTimeout(this.persistChanges, e), s.timeoutDelay = a
            }
            null != t.cleanup && (s.cleanupFuncs = [...i.cleanupFuncs, ...t.cleanup]), null == i.protoToSave ? s.protoToSave = e : s.protoToSave = (0, T.mergeTopLevelFields)(this.ProtoClass, i.protoToSave, e), this.dispatchChanges(s)
        }
        dispatchChanges(e) {
            d.default.dispatch({
                type: "USER_SETTINGS_PROTO_UPDATE_EDIT_INFO",
                settings: {
                    changes: e,
                    type: this.type
                }
            })
        }
        saveLastSendTime() {
            var e;
            let t = null !== (e = u.Storage.get(h)) && void 0 !== e ? e : {};
            t[this.type] = Date.now(), u.Storage.set(h, t)
        }
        async loadIfNecessary(e) {
            if (__OVERLAY__) {
                d.default.dispatch({
                    type: "USER_SETTINGS_PROTO_LOAD_IF_NECESSARY",
                    settingsType: this.type
                });
                return
            }
            let {
                editInfo: t
            } = this.getEditInfo();
            if (e || !t.loaded && !t.loading) {
                this.logger.log("Loading proto"), this.dispatchChanges({
                    loading: !0
                });
                try {
                    let {
                        body: {
                            settings: t
                        }
                    } = await a.HTTP.get({
                        url: S.Endpoints.USER_SETTINGS_PROTO(this.type)
                    }), n = (0, T.b64ToProto)(this.ProtoClass, t);
                    if (null == n) {
                        this.dispatchChanges({
                            loading: !1,
                            loaded: !0
                        });
                        return
                    }
                    let i = E.default[this.type],
                        {
                            proto: r,
                            isDirty: s,
                            cleanupFuncs: o
                        } = (0, T.runMigrations)(n, i);
                    return await d.default.dispatch({
                        type: "USER_SETTINGS_PROTO_UPDATE",
                        settings: {
                            type: this.type,
                            proto: n
                        },
                        resetEditInfo: s || e,
                        local: !1
                    }), s && this.markDirtyFromMigration(r, o), n
                } catch (e) {
                    throw this.dispatchChanges({
                        loading: !1
                    }), e
                }
            }
        }
        markDirtyFromMigration(e, t) {
            r()(!__OVERLAY__, "this cannot run in the overlay"), this.logger.log("Marking dirty due to migrates"), r()(null == this.getEditInfo().editInfo.offlineEditDataVersion, "offline changes are not supported with migrations"), this.markDirty(e, {
                cleanup: t,
                dispatch: !1,
                delaySeconds: f.UserSettingsDelay.AUTOMATED,
                jitter: !0
            })
        }
        markDirtyIfHasPendingChange(e) {
            this.beforeSendCallbacks.some(e => {
                let {
                    hasChanges: t
                } = e;
                return t()
            }) && this.markDirty(this.ProtoClass.create(), {
                dispatch: !1,
                delaySeconds: 0,
                cleanup: e
            })
        }
        scheduleSaveFromOfflineEdit() {
            r()(!__OVERLAY__, "this cannot run in the overlay"), this.logger.log("Scheduling save from offline edit");
            let {
                editInfo: e
            } = this.getEditInfo();
            r()(null != e.protoToSave, "protoToSave cannot be null"), r()(null != e.offlineEditDataVersion, "offlineEditDataVersion cannot be null"), r()(null == e.timeout, "timeout must not be set already");
            let t = 5e3 + Math.floor(5e3 * Math.random()),
                n = setTimeout(this.persistChanges, t);
            this.dispatchChanges({
                timeout: n,
                timeoutDelay: t
            })
        }
        constructor(e, t) {
            A(this, "ProtoClass", void 0), A(this, "type", void 0), A(this, "logger", void 0), A(this, "beforeSendCallbacks", void 0), A(this, "lastSendTime", void 0), A(this, "persistChanges", void 0), this.ProtoClass = e, this.type = t, this.beforeSendCallbacks = [], this.lastSendTime = 0, this.persistChanges = async () => {
                r()(!__OVERLAY__, "this cannot run in the overlay"), this.logger.log("Persisting proto");
                let {
                    editInfo: e
                } = this.getEditInfo();
                if (null == e.protoToSave) {
                    this.logger.log("Not persisting proto because the proto was null");
                    return
                }
                this.beforeSendCallbacks.forEach(t => {
                    let {
                        processProto: n
                    } = t;
                    return n(e.protoToSave)
                });
                let t = (0, T.protoToB64)(this.ProtoClass, e.protoToSave);
                if (null == t || "" === t) {
                    this.logger.log("Not persisting proto because there is nothing to change");
                    return
                }
                try {
                    this.saveLastSendTime();
                    let {
                        body: n
                    } = await a.HTTP.patch({
                        url: S.Endpoints.USER_SETTINGS_PROTO(this.type),
                        body: {
                            settings: t,
                            required_data_version: e.offlineEditDataVersion
                        }
                    });
                    n.out_of_date && this.logger.log("Proto was out of date, discarding changes"), this.getEditInfo().editInfo.cleanupFuncs.forEach(e => e());
                    let i = (0, T.b64ToProto)(this.ProtoClass, n.settings);
                    if (null == i) return;
                    d.default.dispatch({
                        type: "USER_SETTINGS_PROTO_UPDATE",
                        settings: {
                            proto: i,
                            type: this.type
                        },
                        resetEditInfo: !0,
                        wasSaved: !0,
                        local: !1
                    })
                } catch (e) {
                    var n, i;
                    if (429 === e.status) {
                        this.logger.log("Rate limited, scheduling retry");
                        let t = setTimeout(this.persistChanges, Math.min(30 * _.default.Millis.SECOND, (null !== (i = e.body.retry_after) && void 0 !== i ? i : 60) * _.default.Millis.SECOND));
                        this.dispatchChanges({
                            rateLimited: !0,
                            timeout: t
                        })
                    } else if (400 === e.status && (null === (n = e.body) || void 0 === n ? void 0 : n.code) === S.AbortCodes.INVALID_USER_SETTINGS_DATA) throw this.logger.log("Reloading do to invalid data"), this.loadIfNecessary(!0), e;
                    else throw this.logger.log("Unknown user settings error"), e
                }
            }, this.logger = new s.Logger(this.ProtoClass.typeName)
        }
    }
    let O = new N(l.PreloadedUserSettings, f.UserSettingsTypes.PRELOADED_USER_SETTINGS),
        p = new N(o.FrecencyUserSettings, f.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS),
        R = {
            [f.UserSettingsTypes.PRELOADED_USER_SETTINGS]: O,
            [f.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS]: p
        };

    function C(e, t, n) {
        return O.updateAsync("guilds", n => (0, T.mutateUserGuildSettingsInternal)(n, e, t), n)
    }

    function g(e, t, n, i) {
        return C(e, e => (0, T.mutateUserChannelSettingsInternal)(e, t, n), i)
    }

    function L(e) {
        return O.updateAsync("userContent", t => {
            if ((0, c.hasBit)(t.dismissedContents, e)) return !1;
            t.dismissedContents = (0, c.addBit)(t.dismissedContents, e)
        }, f.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }

    function D(e) {
        return O.updateAsync("userContent", t => {
            if (!(0, c.hasBit)(t.dismissedContents, e)) return !1;
            t.dismissedContents = (0, c.removeBit)(t.dismissedContents, e)
        }, f.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }

    function v() {
        return O.updateAsync("userContent", e => {
            e.dismissedContents = new Uint8Array
        }, f.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }

    function M() {
        return O.updateAsync("userContent", e => {
            let t = new Uint8Array;
            for (let e of Object.keys(l.DismissibleContent)) t = (0, c.addBit)(t, l.DismissibleContent[e]);
            e.dismissedContents = t
        }, f.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }
}