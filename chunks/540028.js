function(e, t, n) {
    "use strict";
    n.r(t), n("653041"), n("47120");
    var i = n("735250");
    n("470079");
    var r = n("442837"),
        s = n("692547"),
        a = n("481060"),
        o = n("475179"),
        l = n("519938"),
        u = n("317381"),
        d = n("812206"),
        _ = n("358221"),
        c = n("199902"),
        E = n("366050"),
        I = n("594174"),
        T = n("621113"),
        f = n("981631"),
        S = n("354459"),
        h = n("689938"),
        A = n("438249");

    function m(e) {
        let {
            closePopout: t,
            idle: n,
            pipWindows: s,
            voiceChannelId: I,
            onSelect: T
        } = e;
        n && t();
        let A = (0, r.useStateFromStores)([u.default], () => u.default.getSelfEmbeddedActivityForChannel(I)),
            m = (0, r.useStateFromStores)([E.default], () => E.default.pipWindow),
            N = (0, r.useStateFromStores)([_.default], () => _.default.getSelectedParticipant(I)),
            p = (0, r.useStateFromStores)([_.default], () => _.default.getStreamParticipants(I));
        return (0, i.jsx)(a.Menu, {
            navId: "pip-menu",
            "aria-label": "switch PIP",
            onClose: t,
            onSelect: T,
            children: (function() {
                let e = s.find(e => e.component === f.PictureInPictureComponents.EMBED_IFRAME),
                    t = s.find(e => e.component === f.PictureInPictureComponents.VIDEO),
                    n = [];
                return null != e && (null == m ? void 0 : m.id) !== e.id && n.push({
                    pipWindow: e
                }), null != t && p.forEach(e => {
                    let i = c.default.getActiveStreamForApplicationStream(e.stream),
                        r = e.id === (null == N ? void 0 : N.id) && (null == m ? void 0 : m.id) === t.id;
                    null != i && !r && n.push({
                        pipWindow: t,
                        participant: e,
                        stream: i
                    })
                }), n
            })().map(function(e) {
                var t;
                let n = e.pipWindow.id,
                    r = null === (t = e.participant) || void 0 === t ? void 0 : t.id,
                    s = function(e) {
                        if (e.pipWindow.component === f.PictureInPictureComponents.EMBED_IFRAME && null != A) {
                            var t;
                            let e = null === (t = d.default.getApplication(A.applicationId)) || void 0 === t ? void 0 : t.name;
                            return null == e ? h.default.Messages.SWITCH_PIP_TO_ACTIVITY : h.default.Messages.SWITCH_PIP_TO_ACTIVITY_NAME.format({
                                activityName: e
                            })
                        }
                        return null == e.participant || e.participant.type !== S.ParticipantTypes.STREAM ? h.default.Messages.SWITCH_PIP_TO_GO_LIVE : h.default.Messages.SWITCH_PIP_TO_USER_STREAM.format({
                            username: e.participant.userNick
                        })
                    }(e),
                    u = "".concat(n).concat(null != r ? r : "");
                return (0, i.jsx)(a.MenuItem, {
                    id: u,
                    label: s,
                    action: () => (function(e) {
                        (null == m ? void 0 : m.id) !== e.pipWindow.id && (0, l.switchPIPFocus)(e.pipWindow.id);
                        let t = e.participant;
                        null != t && t.type !== S.ParticipantTypes.ACTIVITY && o.default.selectParticipant(I, t.id)
                    })(e)
                }, u)
            })
        })
    }
    t.default = function(e) {
        let {
            voiceChannelId: t,
            idle: n
        } = e, o = Array.from((0, r.useStateFromStores)([E.default], () => E.default.pipWindows).values()), l = (0, r.useStateFromStoresArray)([c.default], () => c.default.getAllActiveStreamsForChannel(t)).filter(e => {
            var n;
            return e.ownerId !== (null === (n = I.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && e.channelId === t
        }), u = 1 === o.length && o[0].component === f.PictureInPictureComponents.EMBED_IFRAME || 0 === l.length, d = 1 === o.length && l.length <= 1;
        return u || d ? null : (0, i.jsx)(a.Popout, {
            position: "bottom",
            renderPopout: e => (0, i.jsx)(m, {
                voiceChannelId: t,
                pipWindows: o,
                idle: n,
                ...e
            }),
            children: e => (0, i.jsx)(a.Clickable, {
                className: A.menuIcon,
                ...e,
                children: (0, i.jsx)(T.default, {
                    color: s.default.unsafe_rawColors.WHITE_500.css
                })
            })
        })
    }
}