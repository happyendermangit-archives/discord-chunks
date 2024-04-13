function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var s, a, i = n("735250"),
        l = n("470079"),
        r = n("803997"),
        u = n.n(r),
        o = n("536285"),
        d = n("857458"),
        c = n("703656"),
        f = n("819570"),
        E = n("689938"),
        I = n("794711");
    (a = s || (s = {}))[a.INITIAL = 0] = "INITIAL", a[a.RPC_CONNECTED = 1] = "RPC_CONNECTED", a[a.APP_OPENING = 2] = "APP_OPENING", a[a.APP_OPENED = 3] = "APP_OPENED";
    t.default = function(e) {
        let {
            match: t,
            location: n,
            attemptDeepLink: s
        } = e, [a, r] = l.useState(0);
        l.useEffect(() => {
            o.default.once("connected", () => {
                r(1)
            }), o.default.once("disconnected", () => {
                (0, c.transitionTo)((0, d.getRedirectPath)())
            }), o.default.connect()
        }, []), l.useEffect(() => {
            if (0 !== a) return;
            let e = setTimeout(() => (0, c.transitionTo)((0, d.getRedirectPath)()), 3e3);
            return () => clearTimeout(e)
        }, [a]);
        let h = l.useCallback(async (e, t) => {
            try {
                r(2), await s(e, t), r(3)
            } catch (e) {
                console.error("Error opening deeplink", e)
            }
        }, [s]);
        if ((0, c.hasNavigated)()) return null;
        switch (a) {
            case 1:
                return (0, i.jsxs)(f.default, {
                    children: [(0, i.jsx)(f.Title, {
                        className: I.marginBottom8,
                        children: E.default.Messages.DEEPLINK_BROWSER_TITLE
                    }), (0, i.jsx)(f.SubTitle, {
                        children: E.default.Messages.DEEPLINK_BROWSER_PROMPT
                    }), (0, i.jsx)(f.Button, {
                        className: I.marginTop40,
                        onClick: () => h(t, n),
                        children: E.default.Messages.OPEN_IN_APP
                    }), (0, i.jsx)(f.Button, {
                        className: u()(I.marginTop8, I.marginCenterHorz),
                        color: f.Button.Colors.LINK,
                        look: f.Button.Looks.LINK,
                        onClick: () => (0, c.transitionTo)((0, d.getRedirectPath)()),
                        children: E.default.Messages.CONTINUE_IN_BROWSER
                    })]
                });
            case 0:
            case 2:
                return (0, i.jsxs)(f.default, {
                    children: [(0, i.jsx)(f.Title, {
                        children: E.default.Messages.APP_OPENING
                    }), (0, i.jsx)(f.AuthSpinner, {})]
                });
            case 3:
                return (0, i.jsxs)(f.default, {
                    children: [(0, i.jsx)(f.Title, {
                        className: I.marginBottom8,
                        children: E.default.Messages.APP_OPENED_TITLE
                    }), (0, i.jsx)(f.SubTitle, {
                        children: E.default.Messages.DEEPLINK_BROWSER_APP_OPENED
                    })]
                })
        }
    }
}