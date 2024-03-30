function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("242880"),
        a = n("629815"),
        u = n("225098"),
        s = n("617518");

    function l(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function f(e) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function d(e, t) {
        return (d = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var _ = {},
        E = {},
        p = null,
        m = null,
        y = null,
        I = "lastChangeLogId",
        h = "lastChangeLogDate",
        O = null,
        T = null,
        S = new Set,
        v = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && d(e, t)
            }(v, e);
            var t, n, r, o, a, c = (t = v, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = f(t);
                if (n) {
                    var a = f(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : function(e) {
                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            });

            function v() {
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, v), c.apply(this, arguments)
            }
            return r = v, o = [{
                key: "initialize",
                value: function() {
                    this.waitFor(u.default), this.syncWith([u.default], function() {
                        return !0
                    }), O = null !== (e = i.Storage.get(I)) && void 0 !== e ? e : null;
                    var e, t = i.Storage.get(h);
                    if (null != t) try {
                        T = new Date(t)
                    } catch (e) {
                        i.Storage.remove(h)
                    }
                }
            }, {
                key: "getChangelog",
                value: function(e, t) {
                    var n, r;
                    return null !== (r = null === (n = _[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : null
                }
            }, {
                key: "latestChangelogId",
                value: function() {
                    return p
                }
            }, {
                key: "getChangelogLoadStatus",
                value: function(e, t) {
                    var n, r;
                    return null !== (r = null === (n = E[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : s.ChangelogLoadState.NOT_LOADED
                }
            }, {
                key: "hasLoadedConfig",
                value: function() {
                    return null != y
                }
            }, {
                key: "getConfig",
                value: function() {
                    return y
                }
            }, {
                key: "overrideId",
                value: function() {
                    return m
                }
            }, {
                key: "lastSeenChangelogId",
                value: function() {
                    return O
                }
            }, {
                key: "lastSeenChangelogDate",
                value: function() {
                    return T
                }
            }, {
                key: "getStateForDebugging",
                value: function() {
                    return {
                        changelogConfig: y,
                        loadedChangelogs: E,
                        lastSeenChangelogId: O,
                        lastSeenChangelogDate: T
                    }
                }
            }, {
                key: "isLocked",
                value: function() {
                    return S.size > 0
                }
            }], l(r.prototype, o), a && l(r, a), v
        }(o.default.Store);
    c(v, "displayName", "ChangelogStore"), t.default = new v(a.default, {
        CHANGE_LOG_LOCK: function(e) {
            var t = e.key;
            if (S.has(t)) return !1;
            (S = new Set(S)).add(t)
        },
        CHANGE_LOG_UNLOCK: function(e) {
            var t = e.key;
            if (!S.has(t)) return !1;
            (S = new Set(S)).delete(t)
        },
        CHANGE_LOG_SET_CONFIG: function(e) {
            var t = e.config;
            p = e.latestChangelogId, y = t
        },
        CHANGE_LOG_FETCH_SUCCESS: function(e) {
            var t = e.id,
                n = e.changelog;
            null == _[t] && (_[t] = {}), _[t][n.locale] = c({
                id: t,
                date: n.date,
                body: n.content,
                revision: 1,
                locale: n.locale
            }, n.asset_type === s.AssetType.YOUTUBE_VIDEO_ID ? "youtube_video_id" : "image", n.asset), null == E[t] && (E[t] = {}), E[t][n.locale] = s.ChangelogLoadState.LOADED_SUCCESS
        },
        CHANGE_LOG_FETCH_FAILED: function(e) {
            var t = e.id,
                n = e.locale;
            if (null != _[t] && null != _[t][n]) return !1;
            null == E[t] && (E[t] = {}), E[t][n] = s.ChangelogLoadState.LOADED_FAILURE
        },
        CHANGE_LOG_SET_OVERRIDE: function(e) {
            m = e.id
        },
        CHANGE_LOG_MARK_SEEN: function(e) {
            var t = e.changelogId,
                n = e.changelogDate;
            O = null != t ? t : null, T = new Date(n), i.Storage.set(I, t), i.Storage.set(h, n)
        }
    })
}