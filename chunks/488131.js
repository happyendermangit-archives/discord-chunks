function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        closeAndClearThreadSidebar: function() {
            return C
        },
        closeThreadSidebar: function() {
            return R
        },
        openThreadSidebarForCreating: function() {
            return O
        },
        openThreadSidebarForViewing: function() {
            return p
        }
    });
    var i = n("512722"),
        r = n.n(i),
        s = n("392711"),
        a = n.n(s),
        o = n("570140"),
        l = n("430742"),
        u = n("40851"),
        d = n("367907"),
        _ = n("727429"),
        c = n("703656"),
        E = n("359110"),
        I = n("695346"),
        T = n("703558"),
        f = n("944486"),
        S = n("979651"),
        h = n("585483"),
        A = n("124368"),
        m = n("981631"),
        N = n("176505");

    function p(e, t, n) {
        u.MainWindowDispatch.dispatch(m.ComponentActions.POPOUT_CLOSE);
        let i = !a().isEmpty(S.default.getVoiceStatesForChannel(e.id));
        if (t || !I.UseThreadSidebar.getSetting() || __OVERLAY__ || i) {
            o.default.dispatch({
                type: "SIDEBAR_CLOSE",
                baseChannelId: e.parent_id
            }), null != n ? (0, E.transitionToThread)(e, n) : (0, E.transitionToChannel)(e.id);
            return
        }
        r()(null != e.parent_id, "all threads must have parents");
        let s = f.default.getChannelId();
        e.parent_id !== s && !(0, N.isGuildHomeChannel)(s) && (0, E.transitionToChannel)(e.parent_id), (0, c.transitionTo)(m.Routes.CHANNEL_THREAD_VIEW((0, _.getGuildIdForGenericRedirect)(e), (0, N.isGuildHomeChannel)(s) ? N.StaticChannelRoute.GUILD_HOME : e.parent_id, e.id), void 0, e.isForumPost() ? A.OpenThreadAnalyticsLocations.FORUM : void 0), setTimeout(() => {
            h.ComponentDispatch.dispatch(m.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                channelId: e.id
            })
        }, 0)
    }

    function O(e, t, n) {
        if (r()(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"), r()(!__OVERLAY__, "Cannot create threads in the overlay."), (0, d.trackWithMetadata)(m.AnalyticEvents.THREAD_CREATION_STARTED, {
                location: n,
                channel_id: e.id,
                guild_id: e.guild_id
            }), u.MainWindowDispatch.dispatch(m.ComponentActions.POPOUT_CLOSE), f.default.getChannelId() !== e.id && (0, E.transitionToChannel)(e.id), "" === T.default.getDraft(e.id, T.DraftType.FirstThreadMessage)) {
            let t = T.default.getDraft(e.id, T.DraftType.ChannelMessage);
            l.default.saveDraft(e.id, "", T.DraftType.ChannelMessage), l.default.saveDraft(e.id, t, T.DraftType.FirstThreadMessage)
        }
        setTimeout(() => {
            o.default.dispatch({
                type: "SIDEBAR_CREATE_THREAD",
                parentChannelId: e.id,
                parentMessageId: null == t ? void 0 : t.id,
                location: n
            })
        }, 0)
    }

    function R(e, t) {
        (0, c.transitionTo)(m.Routes.CHANNEL(e, (0, N.isGuildHomeChannel)(t) ? N.StaticChannelRoute.GUILD_HOME : t)), o.default.dispatch({
            type: "SIDEBAR_CLOSE",
            baseChannelId: t
        })
    }

    function C(e) {
        o.default.dispatch({
            type: "SIDEBAR_CLOSE",
            baseChannelId: e
        }), o.default.dispatch({
            type: "DRAFT_CLEAR",
            channelId: e,
            draftType: T.DraftType.FirstThreadMessage
        }), o.default.dispatch({
            type: "DRAFT_CLEAR",
            channelId: e,
            draftType: T.DraftType.ThreadSettings
        })
    }
}