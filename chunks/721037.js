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
        T = n("944486"),
        f = n("451478"),
        S = n("518774"),
        h = n("823379"),
        A = n("981631"),
        m = n("918559");
    let N = {
        [A.PictureInPictureComponents.VIDEO]: c.default,
        [A.PictureInPictureComponents.EMBED_IFRAME]: u.default
    };
    class p extends r.PureComponent {
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
            return (0, i.jsx)(S.default, {
                pictureInPictureComponents: N,
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
    t.default = s.default.connectStores([d.default, o.default, f.default, _.default, E.default, I.default, T.default], e => {
        var t, n, i;
        let r;
        let s, {
                showInPopoutWindow: a = !1,
                disallowTextActivity: u = !1
            } = e,
            c = d.default.getWindowOpen(A.PopoutWindowKeys.CHANNEL_CALL_POPOUT),
            S = o.default.getCurrentEmbeddedActivity(),
            N = null != S && !(0, l.default)(S.channelId, E.default, T.default),
            p = o.default.getActivityPanelMode(),
            O = null != S && N && p === m.ActivityPanelModes.PANEL,
            R = f.default.windowSize();
        if (c && (u && O || !O)) {
            let e = d.default.getWindow(A.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
            R = null == e ? R : {
                width: e.innerWidth,
                height: e.innerHeight
            }
        }!u && O ? r = A.AppContext.APP : a && (r = A.AppContext.POPOUT), s = u && N ? null : N || !c || a ? null != S && p === m.ActivityPanelModes.PANEL && N ? null !== (t = I.default.pipActivityWindow) && void 0 !== t ? t : I.default.pipVideoWindow : null !== (n = I.default.pipVideoWindow) && void 0 !== n ? n : I.default.pipActivityWindow : null;
        let C = Array.from(I.default.pipWindows.values()),
            g = C.find(e => e.component === A.PictureInPictureComponents.VIDEO);
        return {
            selectedPIPWindow: s,
            pipWindows: [g, C.find(e => e.component === A.PictureInPictureComponents.EMBED_IFRAME)].filter(h.isNotNullish),
            maxX: R.width,
            maxY: R.height,
            theme: _.default.theme,
            dockedRect: I.default.getDockedRect(null !== (i = null == s ? void 0 : s.id) && void 0 !== i ? i : ""),
            appContext: r,
            roundCorners: !0
        }
    })(p)
}