function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DraftType: function() {
            return i
        }
    }), n("47120");
    var i, r, a, s = n("392711"),
        o = n.n(s),
        l = n("442837"),
        u = n("570140"),
        d = n("823379"),
        _ = n("709054"),
        c = n("314897"),
        E = n("592125"),
        I = n("486472");

    function T(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let f = n("981631").MAX_MESSAGE_LENGTH_PREMIUM + 500;
    (a = i || (i = {}))[a.ChannelMessage = 0] = "ChannelMessage", a[a.ThreadSettings = 1] = "ThreadSettings", a[a.FirstThreadMessage = 2] = "FirstThreadMessage", a[a.ApplicationLauncherCommand = 3] = "ApplicationLauncherCommand", a[a.Poll = 4] = "Poll", a[a.SlashCommand = 5] = "SlashCommand";
    let S = {};

    function h(e) {
        let t = S[e];
        return null == t && (t = S[e] = {}), t
    }

    function A(e) {
        let {
            type: t,
            channelId: n,
            draft: i,
            draftType: r
        } = e, a = E.default.getChannel(n);
        i === (null == a ? void 0 : a.template) && (i = "");
        let s = c.default.getId();
        if (null != s && null != i && "" !== i) {
            var o, l;
            let e = h(s),
                t = e[n];
            if (null == t && (t = e[n] = {}), (l = i).length > f && (l = l.substr(0, f)), (i = l) === (null === (o = t[r]) || void 0 === o ? void 0 : o.draft)) return !1;
            t[r] = {
                timestamp: Date.now(),
                draft: i
            }
        } else m(n, r);
        return "DRAFT_SAVE" === t
    }

    function m(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.default.getId();
        if (null == n) return !1;
        let i = h(n),
            r = i[e];
        if (null == r) return !1;
        delete r[t], o().isEmpty(r) && delete i[e]
    }

    function N() {
        let e = c.default.getId();
        if (null == e || I.default.totalUnavailableGuilds > 0) return;
        let t = h(e);
        for (let e in t) null == E.default.getChannel(e) && delete t[e]
    }

    function p(e) {
        let {
            channel: {
                id: t
            }
        } = e, n = c.default.getId();
        if (null == n) return !1;
        let i = h(n);
        return delete i[t], !1
    }
    class O extends(r = l.default.PersistedStore) {
        initialize(e) {
            S = null != e ? e : {}, ! function() {
                for (let [e, t] of _.default.entries(S))
                    for (let [n, i] of _.default.entries(t)) {
                        let t = i[0];
                        null != t && ("" === t.draft || "" === t.draft.trim()) && m(n, 0, e)
                    }
            }(), this.waitFor(c.default, E.default, I.default)
        }
        getState() {
            return S
        }
        getThreadDraftWithParentMessageId(e) {
            let t = c.default.getId();
            if (null == t) return;
            let n = h(t),
                i = _.default.keys(n).find(t => {
                    let n = this.getThreadSettings(t);
                    return (null == n ? void 0 : n.parentMessageId) === e
                });
            return null != i ? this.getThreadSettings(i) : void 0
        }
        getRecentlyEditedDrafts(e) {
            let t = c.default.getId();
            if (null == t) return [];
            let n = h(t);
            return o()(n).mapValues(t => null == t ? void 0 : t[e]).pickBy(d.isNotNullish).toPairs().map(e => {
                let [t, {
                    timestamp: n,
                    draft: i
                }] = e;
                return {
                    channelId: t,
                    timestamp: n,
                    draft: i
                }
            }).sortBy(e => {
                let {
                    timestamp: t
                } = e;
                return -t
            }).value()
        }
        getDraft(e, t) {
            let n = c.default.getId();
            if (null == n) return "";
            let i = h(n)[e];
            if (null != i) {
                let e = i[t];
                if (null != e) return e.draft
            }
            return ""
        }
        getThreadSettings(e) {
            let t = c.default.getId();
            if (null == t) return null;
            let n = h(t)[e];
            return null == n ? null : n[1]
        }
    }
    T(O, "displayName", "DraftStore"), T(O, "persistKey", "DraftStore"), T(O, "migrations", [e => {
        if (null == e) return {};
        for (let t in e) "timestamp" in e[t] && (e[t] = {
            0: e[t]
        });
        return e
    }, e => {
        let t = c.default.getId();
        if (null == e || null == t) return {};
        let n = {},
            i = n[t] = {};
        for (let t in e) i[t] = e[t];
        return n
    }]), t.default = new O(u.default, {
        CONNECTION_OPEN: function() {
            let e = c.default.getId();
            return !(e in S) && (S[e] = {}), N(), !1
        },
        LOGOUT: function(e) {
            !e.isSwitchingAccount && (S = {})
        },
        MULTI_ACCOUNT_REMOVE_ACCOUNT: function(e) {
            e.userId in S && delete S[e.userId]
        },
        GUILD_DELETE: function() {
            return N(), !1
        },
        CHANNEL_DELETE: p,
        THREAD_DELETE: p,
        THREAD_CREATE: function(e) {
            let {
                channel: t
            } = e, n = c.default.getId();
            if (null == n || t.ownerId === n) return !1;
            let i = h(n),
                r = i[t.parent_id];
            if (null == r) return !1;
            let a = r[1];
            if (null == a) return !1;
            if (a.parentMessageId !== _.default.castChannelIdAsMessageId(t.id)) return !1;
            {
                var s, o;
                let e = i[t.parent_id];
                if (null == e) return !1;
                let n = null !== (o = null === (s = e[2]) || void 0 === s ? void 0 : s.draft) && void 0 !== o ? o : "";
                "" !== n && (i[t.id] = {
                    0: {
                        timestamp: Date.now(),
                        draft: n
                    }
                }), m(t.parent_id, 1), m(t.parent_id, 2)
            }
        },
        DRAFT_SAVE: A,
        DRAFT_CHANGE: A,
        DRAFT_CLEAR: function(e) {
            let {
                channelId: t,
                draftType: n
            } = e;
            return m(t, n)
        },
        THREAD_SETTINGS_DRAFT_CHANGE: function(e) {
            let {
                channelId: t,
                draft: n
            } = e, i = c.default.getId();
            if (null == i) return;
            let r = h(i),
                a = r[t];
            null == a && (a = r[t] = {}), a[1] = {
                timestamp: Date.now(),
                ...a[1],
                ...n,
                parentChannelId: t
            }
        }
    })
}