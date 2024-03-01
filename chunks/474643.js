function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DraftType: function() {
            return s
        },
        default: function() {
            return I
        }
    }), n("222007");
    var s, i, r = n("917351"),
        a = n.n(r),
        o = n("446674"),
        d = n("913144"),
        u = n("449008"),
        l = n("299039"),
        f = n("271938"),
        _ = n("42203"),
        c = n("341542"),
        g = n("49111");
    let m = g.MAX_MESSAGE_LENGTH_PREMIUM + 500;
    (i = s || (s = {}))[i.ChannelMessage = 0] = "ChannelMessage", i[i.ThreadSettings = 1] = "ThreadSettings", i[i.FirstThreadMessage = 2] = "FirstThreadMessage", i[i.ApplicationLauncherCommand = 3] = "ApplicationLauncherCommand", i[i.Poll = 4] = "Poll", i[i.SlashCommand = 5] = "SlashCommand";
    let h = {};

    function v(e) {
        let t = h[e];
        return null == t && (t = h[e] = {}), t
    }

    function E(e) {
        let {
            type: t,
            channelId: n,
            draft: s,
            draftType: i
        } = e, r = _.default.getChannel(n);
        s === (null == r ? void 0 : r.template) && (s = "");
        let a = f.default.getId();
        if (null != a && null != s && "" !== s) {
            var o, d;
            let e = v(a),
                t = e[n];
            if (null == t && (t = e[n] = {}), (d = s).length > m && (d = d.substr(0, m)), (s = d) === (null === (o = t[i]) || void 0 === o ? void 0 : o.draft)) return !1;
            t[i] = {
                timestamp: Date.now(),
                draft: s
            }
        } else p(n, i);
        return "DRAFT_SAVE" === t
    }

    function p(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.default.getId();
        if (null == n) return !1;
        let s = v(n),
            i = s[e];
        if (null == i) return !1;
        delete i[t], a.isEmpty(i) && delete s[e]
    }

    function y() {
        let e = f.default.getId();
        if (null == e || c.default.totalUnavailableGuilds > 0) return;
        let t = v(e);
        for (let e in t) null == _.default.getChannel(e) && delete t[e]
    }

    function T(e) {
        let {
            channel: {
                id: t
            }
        } = e, n = f.default.getId();
        if (null == n) return !1;
        let s = v(n);
        return delete s[t], !1
    }
    class C extends o.default.PersistedStore {
        initialize(e) {
            h = null != e ? e : {}, ! function() {
                for (let [e, t] of l.default.entries(h))
                    for (let [n, s] of l.default.entries(t)) {
                        let t = s[0];
                        null != t && ("" === t.draft || "" === t.draft.trim()) && p(n, 0, e)
                    }
            }(), this.waitFor(f.default, _.default, c.default)
        }
        getState() {
            return h
        }
        getThreadDraftWithParentMessageId(e) {
            let t = f.default.getId();
            if (null == t) return;
            let n = v(t),
                s = l.default.keys(n).find(t => {
                    let n = this.getThreadSettings(t);
                    return (null == n ? void 0 : n.parentMessageId) === e
                });
            return null != s ? this.getThreadSettings(s) : void 0
        }
        getRecentlyEditedDrafts(e) {
            let t = f.default.getId();
            if (null == t) return [];
            let n = v(t);
            return a(n).mapValues(t => null == t ? void 0 : t[e]).pickBy(u.isNotNullish).toPairs().map(e => {
                let [t, {
                    timestamp: n,
                    draft: s
                }] = e;
                return {
                    channelId: t,
                    timestamp: n,
                    draft: s
                }
            }).sortBy(e => {
                let {
                    timestamp: t
                } = e;
                return -t
            }).value()
        }
        getDraft(e, t) {
            let n = f.default.getId();
            if (null == n) return "";
            let s = v(n),
                i = s[e];
            if (null != i) {
                let e = i[t];
                if (null != e) return e.draft
            }
            return ""
        }
        getThreadSettings(e) {
            let t = f.default.getId();
            if (null == t) return null;
            let n = v(t),
                s = n[e];
            return null == s ? null : s[1]
        }
    }
    C.displayName = "DraftStore", C.persistKey = "DraftStore", C.migrations = [e => {
        if (null == e) return {};
        for (let t in e) "timestamp" in e[t] && (e[t] = {
            0: e[t]
        });
        return e
    }, e => {
        let t = f.default.getId();
        if (null == e || null == t) return {};
        let n = {},
            s = n[t] = {};
        for (let t in e) s[t] = e[t];
        return n
    }];
    var I = new C(d.default, {
        CONNECTION_OPEN: function() {
            let e = f.default.getId();
            return !(e in h) && (h[e] = {}), y(), !1
        },
        LOGOUT: function(e) {
            !e.isSwitchingAccount && (h = {})
        },
        MULTI_ACCOUNT_REMOVE_ACCOUNT: function(e) {
            e.userId in h && delete h[e.userId]
        },
        GUILD_DELETE: function() {
            return y(), !1
        },
        CHANNEL_DELETE: T,
        THREAD_DELETE: T,
        THREAD_CREATE: function(e) {
            let {
                channel: t
            } = e, n = f.default.getId();
            if (null == n || t.ownerId === n) return !1;
            let s = v(n),
                i = s[t.parent_id];
            if (null == i) return !1;
            let r = i[1];
            if (null == r) return !1;
            if (r.parentMessageId !== l.default.castChannelIdAsMessageId(t.id)) return !1;
            {
                var a, o;
                let e = s[t.parent_id];
                if (null == e) return !1;
                let n = null !== (o = null === (a = e[2]) || void 0 === a ? void 0 : a.draft) && void 0 !== o ? o : "";
                "" !== n && (s[t.id] = {
                    0: {
                        timestamp: Date.now(),
                        draft: n
                    }
                }), p(t.parent_id, 1), p(t.parent_id, 2)
            }
        },
        DRAFT_SAVE: E,
        DRAFT_CHANGE: E,
        DRAFT_CLEAR: function(e) {
            let {
                channelId: t,
                draftType: n
            } = e;
            return p(t, n)
        },
        THREAD_SETTINGS_DRAFT_CHANGE: function(e) {
            let {
                channelId: t,
                draft: n
            } = e, s = f.default.getId();
            if (null == s) return;
            let i = v(s),
                r = i[t];
            null == r && (r = i[t] = {}), r[1] = {
                timestamp: Date.now(),
                ...r[1],
                ...n,
                parentChannelId: t
            }
        }
    })
}