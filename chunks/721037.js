function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("442837"),
        a = n("519938"),
        o = n("317381"),
        l = n("917107"),
        u = n("385326"),
        d = n("928518"),
        _ = n("210887"),
        c = n("442917"),
        E = n("592125"),
        I = n("366050"),
        T = n("451478"),
        f = n("518774"),
        S = n("823379"),
        h = n("981631"),
        A = n("918559");
    let m = {
        [h.PictureInPictureComponents.VIDEO]: c.default,
        [h.PictureInPictureComponents.EMBED_IFRAME]: u.default
    };
    class N extends r.PureComponent {
        render() {
            let {
                selectedPIPWindow: e,
                pipWindows: t,
                maxX: n,
                maxY: r,
                theme: s,
                dockedRect: a,
                appContext: o,
                roundCorners: l
            } = this.props;
            return (0, i.jsx)(f.default, {
                pictureInPictureComponents: m,
                selectedPIPWindow: e,
                pipWindows: t,
                maxX: n,
                maxY: r,
                dockedRect: a,
                theme: s,
                onWindowMove: this.handleWindowMove,
                appContext: o,
                roundCorners: l
            })
        }
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "handleWindowMove", i = (e, t) => {
                a.moveTo(e, t)
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    t.default = s.default.connectStores([d.default, o.default, T.default, _.default, E.default, I.default], e => {
        var t, n, i;
        let r;
        let s, {
                showInPopoutWindow: a = !1,
                disallowTextActivity: u = !1
            } = e,
            c = d.default.getWindowOpen(h.PopoutWindowKeys.CHANNEL_CALL_POPOUT),
            f = o.default.getCurrentEmbeddedActivity(),
            m = null != f && !(0, l.default)(f.channelId, E.default),
            N = o.default.getActivityPanelMode(),
            p = null != f && m && N === A.ActivityPanelModes.PANEL,
            O = T.default.windowSize();
        if (c && (u && p || !p)) {
            let e = d.default.getWindow(h.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
            O = null == e ? O : {
                width: e.innerWidth,
                height: e.innerHeight
            }
        }!u && p ? r = h.AppContext.APP : a && (r = h.AppContext.POPOUT), s = u && m ? null : m || !c || a ? null != f && N === A.ActivityPanelModes.PANEL && m ? null !== (t = I.default.pipActivityWindow) && void 0 !== t ? t : I.default.pipVideoWindow : null !== (n = I.default.pipVideoWindow) && void 0 !== n ? n : I.default.pipActivityWindow : null;
        let R = Array.from(I.default.pipWindows.values()),
            C = R.find(e => e.component === h.PictureInPictureComponents.VIDEO);
        return {
            selectedPIPWindow: s,
            pipWindows: [C, R.find(e => e.component === h.PictureInPictureComponents.EMBED_IFRAME)].filter(S.isNotNullish),
            maxX: O.width,
            maxY: O.height,
            theme: _.default.theme,
            dockedRect: I.default.getDockedRect(null !== (i = null == s ? void 0 : s.id) && void 0 !== i ? i : ""),
            appContext: r,
            roundCorners: !0
        }
    })(N)
}