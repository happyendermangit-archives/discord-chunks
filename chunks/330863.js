function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        closeAndClearThreadSidebar: function() {
            return A
        },
        closeThreadSidebar: function() {
            return g
        },
        openThreadSidebarForCreating: function() {
            return v
        },
        openThreadSidebarForViewing: function() {
            return S
        }
    });
    var r = n("512722"),
        o = n.n(r),
        i = n("392711"),
        a = n.n(i),
        u = n("629815"),
        s = n("771382"),
        l = n("813970"),
        c = n("140817"),
        f = n("733374"),
        d = n("163291"),
        _ = n("409635"),
        E = n("53867"),
        p = n("309944"),
        m = n("894288"),
        y = n("665863"),
        I = n("120447"),
        h = n("73587"),
        O = n("281767"),
        T = n("928204");

    function S(e, t, n) {
        l.MainWindowDispatch.dispatch(O.ComponentActions.POPOUT_CLOSE);
        var r = !a().isEmpty(y.default.getVoiceStatesForChannel(e.id));
        if (t || !E.UseThreadSidebar.getSetting() || __OVERLAY__ || r) {
            u.default.dispatch({
                type: "SIDEBAR_CLOSE",
                baseChannelId: e.parent_id
            }), null != n ? (0, _.transitionToThread)(e, n) : (0, _.transitionToChannel)(e.id);
            return
        }
        o()(null != e.parent_id, "all threads must have parents");
        var i = m.default.getChannelId();
        e.parent_id !== i && !(0, T.isGuildHomeChannel)(i) && (0, _.transitionToChannel)(e.parent_id), (0, d.transitionTo)(O.Routes.CHANNEL_THREAD_VIEW((0, f.getGuildIdForGenericRedirect)(e), (0, T.isGuildHomeChannel)(i) ? T.StaticChannelRoute.GUILD_HOME : e.parent_id, e.id), void 0, e.isForumPost() ? h.OpenThreadAnalyticsLocations.FORUM : void 0), setTimeout(function() {
            I.ComponentDispatch.dispatch(O.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                channelId: e.id
            })
        }, 0)
    }

    function v(e, t, n) {
        if (o()(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"), o()(!__OVERLAY__, "Cannot create threads in the overlay."), (0, c.trackWithMetadata)(O.AnalyticEvents.THREAD_CREATION_STARTED, {
                location: n,
                channel_id: e.id,
                guild_id: e.guild_id
            }), l.MainWindowDispatch.dispatch(O.ComponentActions.POPOUT_CLOSE), m.default.getChannelId() !== e.id && (0, _.transitionToChannel)(e.id), "" === p.default.getDraft(e.id, p.DraftType.FirstThreadMessage)) {
            var r = p.default.getDraft(e.id, p.DraftType.ChannelMessage);
            s.default.saveDraft(e.id, "", p.DraftType.ChannelMessage), s.default.saveDraft(e.id, r, p.DraftType.FirstThreadMessage)
        }
        setTimeout(function() {
            u.default.dispatch({
                type: "SIDEBAR_CREATE_THREAD",
                parentChannelId: e.id,
                parentMessageId: null == t ? void 0 : t.id,
                location: n
            })
        }, 0)
    }

    function g(e, t) {
        (0, d.transitionTo)(O.Routes.CHANNEL(e, (0, T.isGuildHomeChannel)(t) ? T.StaticChannelRoute.GUILD_HOME : t)), u.default.dispatch({
            type: "SIDEBAR_CLOSE",
            baseChannelId: t
        })
    }

    function A(e) {
        u.default.dispatch({
            type: "SIDEBAR_CLOSE",
            baseChannelId: e
        }), u.default.dispatch({
            type: "DRAFT_CLEAR",
            channelId: e,
            draftType: p.DraftType.FirstThreadMessage
        }), u.default.dispatch({
            type: "DRAFT_CLEAR",
            channelId: e,
            draftType: p.DraftType.ThreadSettings
        })
    }
}