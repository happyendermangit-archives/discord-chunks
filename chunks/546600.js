function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("481060"),
        a = n("555573"),
        o = n("895924"),
        l = n("826298"),
        u = n("855693"),
        d = n("585483"),
        _ = n("499254"),
        c = n("981631"),
        E = n("296117");

    function I(e) {
        let {
            channel: t,
            command: n,
            applicationSection: u
        } = e, I = (0, l.getIconComponent)(u), T = r.useCallback(() => {
            _.dismissAppLauncherPopup(), a.setActiveCommand({
                channelId: t.id,
                command: n,
                section: u,
                location: o.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME
            }), d.ComponentDispatch.dispatch(c.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                channelId: t.id
            })
        }, [t, n, u]);
        return (0, i.jsxs)("li", {
            className: E.command,
            onClick: T,
            children: [(0, i.jsx)(I, {
                className: E.applicationIcon,
                channel: t,
                section: u,
                width: 36,
                height: 36
            }), (0, i.jsxs)("div", {
                children: [(0, i.jsx)(s.Text, {
                    variant: "text-md/semibold",
                    children: n.name
                }), (0, i.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: u.name
                })]
            })]
        })
    }

    function T(e) {
        let {
            channel: t,
            commands: n,
            sectionDescriptors: a
        } = e, o = r.useMemo(() => n.map(e => {
            let n = a.find(t => t.id === e.applicationId);
            return null == n ? null : (0, i.jsx)(I, {
                channel: t,
                command: e,
                applicationSection: n
            }, e.id)
        }), [t, n, a]);
        return 0 === n.length ? null : (0, i.jsxs)("div", {
            children: [(0, i.jsxs)(s.Text, {
                className: E.commandListHeading,
                variant: "text-sm/bold",
                color: "text-muted",
                children: [(0, i.jsx)(u.default, {
                    className: E.commandListHeadingIcon,
                    height: 16,
                    width: 16
                }), "Recent slash commands"]
            }), (0, i.jsx)("ul", {
                className: E.commandList,
                children: o
            })]
        })
    }
}