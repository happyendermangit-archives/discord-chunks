function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("442837"),
        a = n("481060"),
        o = n("923928"),
        l = n("468026"),
        u = n("594190"),
        d = n("131951"),
        _ = n("19780"),
        c = n("63063"),
        E = n("981631"),
        I = n("689938");
    t.default = () => {
        let [e, t] = (0, s.useStateFromStoresArray)([u.default], () => [u.default.canShowAdminWarning, u.default.getVisibleGame()], []), n = (0, s.useStateFromStores)([_.default], () => _.default.isConnected(), []), T = (0, s.useStateFromStores)([d.default], () => d.default.getMode() === E.InputModes.PUSH_TO_TALK, []), f = null != t && t.elevated && n && T && e, S = r.useRef(null);

        function A() {
            null !== S.current && ((0, a.closeModal)(S.current), S.current = null)
        }
        return r.useEffect(() => (f ? S.current = (0, a.openModal)(e => (0, i.jsx)(l.default, {
            title: I.default.Messages.PTT_PERMISSION_TITLE,
            body: I.default.Messages.PTT_PERMISSION_BODY.format({
                game: null == t ? void 0 : t.name
            }),
            secondaryConfirmText: I.default.Messages.DONT_SHOW_AGAIN,
            onConfirmSecondary: () => o.default.clearPTTAdminWarning(),
            onConfirm: () => window.open(c.default.getArticleURL(E.HelpdeskArticles.PUSH_TO_TALK_ADMINISTRATOR_MODE), "_blank"),
            confirmText: I.default.Messages.HELP_DESK,
            ...e
        })) : A(), () => {
            A()
        }), [t, f]), null
    }
}