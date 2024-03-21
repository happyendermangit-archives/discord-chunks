function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        openThreadSidebarForViewing: function() {
            return T
        },
        openThreadSidebarForCreating: function() {
            return _
        },
        closeThreadSidebar: function() {
            return I
        },
        closeAndClearThreadSidebar: function() {
            return v
        }
    });
    var i = n("627445"),
        l = n.n(i),
        a = n("917351"),
        s = n.n(a),
        r = n("913144"),
        o = n("295426"),
        u = n("244201"),
        d = n("716241"),
        c = n("565298"),
        f = n("393414"),
        p = n("144491"),
        m = n("845579"),
        h = n("474643"),
        x = n("18494"),
        E = n("800762"),
        y = n("659500"),
        g = n("648564"),
        S = n("49111"),
        C = n("724210");

    function T(e, t, n) {
        u.MainWindowDispatch.dispatch(S.ComponentActions.POPOUT_CLOSE);
        let i = !s.isEmpty(E.default.getVoiceStatesForChannel(e.id));
        if (t || !m.UseThreadSidebar.getSetting() || __OVERLAY__ || i) {
            r.default.dispatch({
                type: "SIDEBAR_CLOSE",
                baseChannelId: e.parent_id
            }), null != n ? (0, p.transitionToThread)(e, n) : (0, p.transitionToChannel)(e.id);
            return
        }
        l(null != e.parent_id, "all threads must have parents");
        let a = x.default.getChannelId();
        e.parent_id !== a && !(0, C.isGuildHomeChannel)(a) && (0, p.transitionToChannel)(e.parent_id), (0, f.transitionTo)(S.Routes.CHANNEL_THREAD_VIEW((0, c.getGuildIdForGenericRedirect)(e), (0, C.isGuildHomeChannel)(a) ? C.StaticChannelRoute.GUILD_HOME : e.parent_id, e.id), void 0, e.isForumPost() ? g.OpenThreadAnalyticsLocations.FORUM : void 0), setTimeout(() => {
            y.ComponentDispatch.dispatch(S.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                channelId: e.id
            })
        }, 0)
    }

    function _(e, t, n) {
        l(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"), l(!__OVERLAY__, "Cannot create threads in the overlay."), (0, d.trackWithMetadata)(S.AnalyticEvents.THREAD_CREATION_STARTED, {
            location: n,
            channel_id: e.id,
            guild_id: e.guild_id
        }), u.MainWindowDispatch.dispatch(S.ComponentActions.POPOUT_CLOSE), x.default.getChannelId() !== e.id && (0, p.transitionToChannel)(e.id);
        let i = h.default.getDraft(e.id, h.DraftType.FirstThreadMessage);
        if ("" === i) {
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

    function I(e, t) {
        (0, f.transitionTo)(S.Routes.CHANNEL(e, (0, C.isGuildHomeChannel)(t) ? C.StaticChannelRoute.GUILD_HOME : t)), r.default.dispatch({
            type: "SIDEBAR_CLOSE",
            baseChannelId: t
        })
    }

    function v(e) {
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