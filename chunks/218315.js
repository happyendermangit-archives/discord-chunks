function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("789020");
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        s = n("147913"),
        a = n("160404"),
        o = n("314897"),
        l = n("592125"),
        u = n("271383"),
        d = n("914010"),
        _ = n("630388"),
        c = n("526120"),
        E = n("563534"),
        I = n("734893"),
        T = n("846121"),
        f = n("931261"),
        S = n("460347"),
        A = n("372897");

    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class m extends s.default {
        constructor(...e) {
            super(...e), h(this, "onboardingCompleteGuilds", new Set), h(this, "actions", {
                POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
                GUILD_MEMBER_UPDATE: e => this.handleGuildMemberUpdate(e),
                GUILD_DELETE: e => this.handleGuildDelete(e),
                CHANNEL_SELECT: e => this.handleChannelSelect(e),
                MESSAGE_CREATE: e => this.handleMessageSend(e),
                THREAD_CREATE: e => this.handleThreadCreate(e)
            }), h(this, "handlePostConnectionOpen", () => {
                let e = d.default.getGuildId();
                null != e && this._getOrLoadOnboardingMemberActions(e)
            }), h(this, "handleGuildMemberUpdate", e => {
                let {
                    flags: t,
                    user: s,
                    guildId: a
                } = e;
                if (s.id === o.default.getId()) {
                    if (!this.onboardingCompleteGuilds.has(a) && (0, _.hasFlag)(null != t ? t : 0, A.GuildMemberFlags.COMPLETED_HOME_ACTIONS)) {
                        var l, u;
                        this.onboardingCompleteGuilds.add(a);
                        let e = null !== (u = null === (l = E.default.getNewMemberActions(a)) || void 0 === l ? void 0 : l.length) && void 0 !== u ? u : 0;
                        if (0 === e) return;
                        (0, r.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await Promise.all([n.e("99387"), n.e("92339")]).then(n.bind(n, "184100"));
                            return n => (0, i.jsx)(t, {
                                ...n,
                                initialPercent: (e - 1) / e,
                                numActions: e
                            })
                        })
                    }
                }
            }), h(this, "handleGuildDelete", e => {
                let {
                    guild: t
                } = e;
                this.onboardingCompleteGuilds.delete(t.id)
            }), h(this, "handleChannelSelect", async e => {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                if (null == t || null == n) return;
                let {
                    memberActions: i,
                    completedActions: r
                } = await this._getOrLoadOnboardingMemberActions(t), s = null == i ? void 0 : i.find(e => e.channelId === n);
                (null == r ? void 0 : r[n]) !== !0 && null != s && s.actionType === I.NewMemberActionTypes.VIEW && (0, c.completeNewMemberAction)(t, n)
            }), h(this, "handleMessageSend", e => {
                var t;
                let {
                    guildId: n,
                    channelId: i,
                    message: r
                } = e;
                if (null == n || null == i || (null === (t = r.author) || void 0 === t ? void 0 : t.id) !== o.default.getId()) return;
                let s = l.default.getChannel(i);
                (null == s ? void 0 : s.isForumPost()) && (null == s ? void 0 : s.parent_id) != null && this._completeChatAction(n, s.parent_id), this._completeChatAction(n, i)
            }), h(this, "handleThreadCreate", e => {
                var t;
                let {
                    channel: n,
                    isNewlyCreated: i
                } = e;
                if (!!i && null != n.parent_id && !!(null === (t = l.default.getChannel(n.parent_id)) || void 0 === t ? void 0 : t.isForumLikeChannel())) n.ownerId === o.default.getId() && this._completeChatAction(n.guild_id, n.parent_id)
            }), h(this, "_completeChatAction", async (e, t) => {
                let {
                    memberActions: n,
                    completedActions: i
                } = await this._getOrLoadOnboardingMemberActions(e), r = null == n ? void 0 : n.find(e => e.channelId === t);
                (null == i ? void 0 : i[t]) !== !0 && null != r && r.actionType === I.NewMemberActionTypes.CHAT && (0, c.completeNewMemberAction)(e, t)
            }), h(this, "_getOrLoadOnboardingMemberActions", async e => {
                let t = (0, f.canSeeOnboardingHome)(e),
                    n = a.default.isFullServerPreview(e);
                if (!t && !n) return {};
                let i = u.default.getSelfMember(e);
                if (null == i || !(0, S.getIsNewMember)(i)) return {};
                let [r, s] = await Promise.all([this._getOrLoadOnboardingHomeSettings(e, i), this._getOrLoadMemberActions(e, i)]);
                return {
                    memberActions: r,
                    completedActions: s
                }
            }), h(this, "_getOrLoadOnboardingHomeSettings", async (e, t) => {
                let n = E.default.getNewMemberActions(e),
                    i = E.default.getIsLoading(e);
                if (!(null == n && !i && (0, S.getIsNewMember)(t))) return n;
                {
                    let t = await (0, c.fetchGuildHomeSettings)(e);
                    return null == t ? void 0 : t.newMemberActions
                }
            }), h(this, "_getOrLoadMemberActions", async (e, t) => {
                var n;
                let {
                    completedActions: i,
                    loading: r
                } = T.default.getState(e);
                return null == i && !r && (0, _.hasFlag)(null !== (n = t.flags) && void 0 !== n ? n : 0, A.GuildMemberFlags.STARTED_HOME_ACTIONS) ? await (0, c.fetchNewMemberActions)(e) : i
            })
        }
    }
    t.default = new m
}