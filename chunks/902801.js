function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return C
        }
    }), E("222007"), E("702976");
    var t = E("37983");
    E("884691");
    var o = E("77078"),
        n = E("689988"),
        r = E("38654"),
        i = E("271938"),
        a = E("42203"),
        I = E("26989"),
        s = E("162771"),
        T = E("568734"),
        S = E("347895"),
        N = E("698882"),
        O = E("129092"),
        A = E("675305"),
        R = E("290886"),
        l = E("363176"),
        u = E("657944");
    class L extends n.default {
        constructor(...e) {
            super(...e), this.onboardingCompleteGuilds = new Set, this.actions = {
                POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
                GUILD_MEMBER_UPDATE: e => this.handleGuildMemberUpdate(e),
                GUILD_DELETE: e => this.handleGuildDelete(e),
                CHANNEL_SELECT: e => this.handleChannelSelect(e),
                MESSAGE_CREATE: e => this.handleMessageSend(e),
                THREAD_CREATE: e => this.handleThreadCreate(e)
            }, this.handlePostConnectionOpen = () => {
                let e = s.default.getGuildId();
                null != e && this._getOrLoadOnboardingMemberActions(e)
            }, this.handleGuildMemberUpdate = e => {
                let {
                    flags: _,
                    user: n,
                    guildId: r
                } = e;
                if (n.id === i.default.getId()) {
                    if (!this.onboardingCompleteGuilds.has(r) && (0, T.hasFlag)(null != _ ? _ : 0, u.GuildMemberFlags.COMPLETED_HOME_ACTIONS)) {
                        var a, I;
                        this.onboardingCompleteGuilds.add(r);
                        let e = null !== (I = null === (a = N.default.getNewMemberActions(r)) || void 0 === a ? void 0 : a.length) && void 0 !== I ? I : 0;
                        if (0 === e) return;
                        (0, o.openModalLazy)(async () => {
                            let {
                                default: _
                            } = await E.el("74066").then(E.bind(E, "74066"));
                            return E => (0, t.jsx)(_, {
                                ...E,
                                initialPercent: (e - 1) / e,
                                numActions: e
                            })
                        })
                    }
                }
            }, this.handleGuildDelete = e => {
                let {
                    guild: _
                } = e;
                this.onboardingCompleteGuilds.delete(_.id)
            }, this.handleChannelSelect = async e => {
                let {
                    guildId: _,
                    channelId: E
                } = e;
                if (null == _ || null == E) return;
                let {
                    memberActions: t,
                    completedActions: o
                } = await this._getOrLoadOnboardingMemberActions(_), n = null == t ? void 0 : t.find(e => e.channelId === E);
                (null == o ? void 0 : o[E]) !== !0 && null != n && n.actionType === O.NewMemberActionTypes.VIEW && (0, S.completeNewMemberAction)(_, E)
            }, this.handleMessageSend = e => {
                var _;
                let {
                    guildId: E,
                    channelId: t,
                    message: o
                } = e;
                if (null == E || null == t || (null === (_ = o.author) || void 0 === _ ? void 0 : _.id) !== i.default.getId()) return;
                let n = a.default.getChannel(t);
                (null == n ? void 0 : n.isForumPost()) && (null == n ? void 0 : n.parent_id) != null && this._completeChatAction(E, n.parent_id), this._completeChatAction(E, t)
            }, this.handleThreadCreate = e => {
                var _;
                let {
                    channel: E,
                    isNewlyCreated: t
                } = e;
                if (!!t && null != E.parent_id && !!(null === (_ = a.default.getChannel(E.parent_id)) || void 0 === _ ? void 0 : _.isForumLikeChannel())) E.ownerId === i.default.getId() && this._completeChatAction(E.guild_id, E.parent_id)
            }, this._completeChatAction = async (e, _) => {
                let {
                    memberActions: E,
                    completedActions: t
                } = await this._getOrLoadOnboardingMemberActions(e), o = null == E ? void 0 : E.find(e => e.channelId === _);
                (null == t ? void 0 : t[_]) !== !0 && null != o && o.actionType === O.NewMemberActionTypes.CHAT && (0, S.completeNewMemberAction)(e, _)
            }, this._getOrLoadOnboardingMemberActions = async e => {
                let _ = (0, R.canSeeOnboardingHome)(e),
                    E = r.default.isFullServerPreview(e);
                if (!_ && !E) return {};
                let t = I.default.getSelfMember(e);
                if (null == t || !(0, l.getIsNewMember)(t)) return {};
                let [o, n] = await Promise.all([this._getOrLoadOnboardingHomeSettings(e, t), this._getOrLoadMemberActions(e, t)]);
                return {
                    memberActions: o,
                    completedActions: n
                }
            }, this._getOrLoadOnboardingHomeSettings = async (e, _) => {
                let E = N.default.getNewMemberActions(e),
                    t = N.default.getIsLoading(e);
                if (!(null == E && !t && (0, l.getIsNewMember)(_))) return E;
                {
                    let _ = await (0, S.fetchGuildHomeSettings)(e);
                    return null == _ ? void 0 : _.newMemberActions
                }
            }, this._getOrLoadMemberActions = async (e, _) => {
                var E;
                let {
                    completedActions: t,
                    loading: o
                } = A.default.getState(e);
                if (!(null == t && !o && (0, T.hasFlag)(null !== (E = _.flags) && void 0 !== E ? E : 0, u.GuildMemberFlags.STARTED_HOME_ACTIONS))) return t;
                {
                    let _ = await (0, S.fetchNewMemberActions)(e);
                    return _
                }
            }
        }
    }
    var C = new L
}