function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("789020");
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        a = n("147913"),
        s = n("160404"),
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
        h = n("372897");

    function A(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class m extends a.default {
        constructor(...e) {
            super(...e), A(this, "onboardingCompleteGuilds", new Set), A(this, "actions", {
                POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
                GUILD_MEMBER_UPDATE: e => this.handleGuildMemberUpdate(e),
                GUILD_DELETE: e => this.handleGuildDelete(e),
                CHANNEL_SELECT: e => this.handleChannelSelect(e),
                MESSAGE_CREATE: e => this.handleMessageSend(e),
                THREAD_CREATE: e => this.handleThreadCreate(e)
            }), A(this, "handlePostConnectionOpen", () => {
                let e = d.default.getGuildId();
                null != e && this._getOrLoadOnboardingMemberActions(e)
            }), A(this, "handleGuildMemberUpdate", e => {
                let {
                    flags: t,
                    user: a,
                    guildId: s
                } = e;
                if (a.id === o.default.getId()) {
                    if (!this.onboardingCompleteGuilds.has(s) && (0, _.hasFlag)(null != t ? t : 0, h.GuildMemberFlags.COMPLETED_HOME_ACTIONS)) {
                        var l, u;
                        this.onboardingCompleteGuilds.add(s);
                        let e = null !== (u = null === (l = E.default.getNewMemberActions(s)) || void 0 === l ? void 0 : l.length) && void 0 !== u ? u : 0;
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
            }), A(this, "handleGuildDelete", e => {
                let {
                    guild: t
                } = e;
                this.onboardingCompleteGuilds.delete(t.id)
            }), A(this, "handleChannelSelect", async e => {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                if (null == t || null == n) return;
                let {
                    memberActions: i,
                    completedActions: r
                } = await this._getOrLoadOnboardingMemberActions(t), a = null == i ? void 0 : i.find(e => e.channelId === n);
                (null == r ? void 0 : r[n]) !== !0 && null != a && a.actionType === I.NewMemberActionTypes.VIEW && (0, c.completeNewMemberAction)(t, n)
            }), A(this, "handleMessageSend", e => {
                var t;
                let {
                    guildId: n,
                    channelId: i,
                    message: r
                } = e;
                if (null == n || null == i || (null === (t = r.author) || void 0 === t ? void 0 : t.id) !== o.default.getId()) return;
                let a = l.default.getChannel(i);
                (null == a ? void 0 : a.isForumPost()) && (null == a ? void 0 : a.parent_id) != null && this._completeChatAction(n, a.parent_id), this._completeChatAction(n, i)
            }), A(this, "handleThreadCreate", e => {
                var t;
                let {
                    channel: n,
                    isNewlyCreated: i
                } = e;
                if (!!i && null != n.parent_id && !!(null === (t = l.default.getChannel(n.parent_id)) || void 0 === t ? void 0 : t.isForumLikeChannel())) n.ownerId === o.default.getId() && this._completeChatAction(n.guild_id, n.parent_id)
            }), A(this, "_completeChatAction", async (e, t) => {
                let {
                    memberActions: n,
                    completedActions: i
                } = await this._getOrLoadOnboardingMemberActions(e), r = null == n ? void 0 : n.find(e => e.channelId === t);
                (null == i ? void 0 : i[t]) !== !0 && null != r && r.actionType === I.NewMemberActionTypes.CHAT && (0, c.completeNewMemberAction)(e, t)
            }), A(this, "_getOrLoadOnboardingMemberActions", async e => {
                var t, n;
                let i = (0, f.canSeeOnboardingHome)(e),
                    r = s.default.isFullServerPreview(e);
                if (!i && !r) return {};
                let a = u.default.getSelfMember(e);
                if (null == a || !(0, S.getIsNewMember)(null !== (t = a.joinedAt) && void 0 !== t ? t : void 0, null !== (n = a.flags) && void 0 !== n ? n : void 0)) return {};
                let [o, l] = await Promise.all([this._getOrLoadOnboardingHomeSettings(e, a), this._getOrLoadMemberActions(e, a)]);
                return {
                    memberActions: o,
                    completedActions: l
                }
            }), A(this, "_getOrLoadOnboardingHomeSettings", async (e, t) => {
                var n, i;
                let r = E.default.getNewMemberActions(e),
                    a = E.default.getIsLoading(e);
                if (!(null == r && !a && (0, S.getIsNewMember)(null !== (n = t.joinedAt) && void 0 !== n ? n : void 0, null !== (i = t.flags) && void 0 !== i ? i : void 0))) return r;
                {
                    let t = await (0, c.fetchGuildHomeSettings)(e);
                    return null == t ? void 0 : t.newMemberActions
                }
            }), A(this, "_getOrLoadMemberActions", async (e, t) => {
                var n;
                let {
                    completedActions: i,
                    loading: r
                } = T.default.getState(e);
                return null == i && !r && (0, _.hasFlag)(null !== (n = t.flags) && void 0 !== n ? n : 0, h.GuildMemberFlags.STARTED_HOME_ACTIONS) ? await (0, c.fetchNewMemberActions)(e) : i
            })
        }
    }
    t.default = new m
}