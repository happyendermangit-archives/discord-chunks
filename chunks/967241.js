function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        openThreadSidebarForViewing: function() {
            return v
        },
        openThreadSidebarForCreating: function() {
            return _
        },
        closeThreadSidebar: function() {
            return N
        },
        closeAndClearThreadSidebar: function() {
            return A
        }
    });
    var l = n("627445"),
        i = n.n(l),
        a = n("917351"),
        s = n.n(a),
        r = n("913144"),
        o = n("295426"),
        u = n("244201"),
        d = n("716241"),
        c = n("565298"),
        f = n("393414"),
        m = n("144491"),
        p = n("845579"),
        h = n("474643"),
        E = n("18494"),
        g = n("800762"),
        C = n("659500"),
        S = n("648564"),
        T = n("49111"),
        I = n("724210");

    function v(e, t, n) {
        u.MainWindowDispatch.dispatch(T.ComponentActions.POPOUT_CLOSE);
        let l = !s.isEmpty(g.default.getVoiceStatesForChannel(e.id));
        if (t || !p.UseThreadSidebar.getSetting() || __OVERLAY__ || l) {
            r.default.dispatch({
                type: "SIDEBAR_CLOSE",
                baseChannelId: e.parent_id
            }), null != n ? (0, m.transitionToThread)(e, n) : (0, m.transitionToChannel)(e.id);
            return
        }
        i(null != e.parent_id, "all threads must have parents");
        let a = E.default.getChannelId();
        e.parent_id !== a && !(0, I.isGuildHomeChannel)(a) && (0, m.transitionToChannel)(e.parent_id), (0, f.transitionTo)(T.Routes.CHANNEL_THREAD_VIEW((0, c.getGuildIdForGenericRedirect)(e), (0, I.isGuildHomeChannel)(a) ? I.StaticChannelRoute.GUILD_HOME : e.parent_id, e.id), void 0, e.isForumPost() ? S.OpenThreadAnalyticsLocations.FORUM : void 0), setTimeout(() => {
            C.ComponentDispatch.dispatch(T.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                channelId: e.id
            })
        }, 0)
    }

    function _(e, t, n) {
        i(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"), i(!__OVERLAY__, "Cannot create threads in the overlay."), (0, d.trackWithMetadata)(T.AnalyticEvents.THREAD_CREATION_STARTED, {
            location: n,
            channel_id: e.id,
            guild_id: e.guild_id
        }), u.MainWindowDispatch.dispatch(T.ComponentActions.POPOUT_CLOSE), E.default.getChannelId() !== e.id && (0, m.transitionToChannel)(e.id);
        let l = h.default.getDraft(e.id, h.DraftType.FirstThreadMessage);
        if ("" === l) {
            let t = h.default.getDraft(e.id, h.DraftType.ChannelMessage);
            o.default.saveDraft(e.id, "", h.DraftType.ChannelMessage), o.default.saveDraft(e.id, t, h.DraftType.FirstThreadMessage)
        }
        setTimeout(() => {
            r.default.dispatch({
                type: "SIDEBAR_CREATE_THREAD",
                parentChannelId: e.id,
                parentMessageId: null == t ? void 0 : t.id,
                location: n
            })
        }, 0)
    }

    function N(e, t) {
        (0, f.transitionTo)(T.Routes.CHANNEL(e, (0, I.isGuildHomeChannel)(t) ? I.StaticChannelRoute.GUILD_HOME : t)), r.default.dispatch({
            type: "SIDEBAR_CLOSE",
            baseChannelId: t
        })
    }

    function A(e) {
        r.default.dispatch({
            type: "SIDEBAR_CLOSE",
            baseChannelId: e
        }), r.default.dispatch({
            type: "DRAFT_CLEAR",
            channelId: e,
            draftType: h.DraftType.FirstThreadMessage
        }), r.default.dispatch({
            type: "DRAFT_CLEAR",
            channelId: e,
            draftType: h.DraftType.ThreadSettings
        })
    }
}