function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("442837"),
        a = n("481060"),
        s = n("287734"),
        o = n("835473"),
        l = n("67212"),
        u = n("493355"),
        d = n("134598"),
        _ = n("885110"),
        c = n("366695"),
        E = n("937482"),
        I = n("689938"),
        T = n("490294");

    function f() {
        let e = (0, r.useStateFromStores)([_.default], () => _.default.getBroadcast()),
            t = (0, o.useGetOrFetchApplication)(null == e ? void 0 : e.applicationId);
        if (null == e) return null;
        let n = () => {
                (0, d.openBroadcastingPrivacySettingsModal)()
            },
            f = () => {
                (0, l.stopBroadcast)(), s.default.disconnect()
            };
        return (0, i.jsxs)("div", {
            className: T.container,
            children: [null != t && (0, i.jsx)(c.default, {
                game: t,
                size: c.default.Sizes.LARGE
            }), (0, i.jsxs)("div", {
                className: T.content,
                children: [(0, i.jsx)(a.Text, {
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: I.default.Messages.BROADCASTING_CAPTURE_PAUSED
                }), (0, i.jsx)(a.Text, {
                    variant: "text-sm/medium",
                    color: "header-secondary",
                    children: I.default.Messages.BROADCASTING_CAPTURE_PAUSED_DETAILS
                }), (0, i.jsxs)("div", {
                    className: T.actions,
                    children: [(0, i.jsx)(a.Tooltip, {
                        text: I.default.Messages.BROADCASTING_SETTINGS,
                        children: e => (0, i.jsx)(a.Clickable, {
                            ...e,
                            onClick: n,
                            children: (0, i.jsx)(E.default, {
                                className: T.button,
                                width: 20,
                                height: 20
                            })
                        })
                    }), (0, i.jsx)(a.Tooltip, {
                        text: I.default.Messages.STOP_BROADCASTING,
                        children: e => (0, i.jsx)(a.Clickable, {
                            ...e,
                            onClick: f,
                            children: (0, i.jsx)(u.default, {
                                className: T.button,
                                width: 20,
                                height: 20
                            })
                        })
                    })]
                })]
            })]
        })
    }
}