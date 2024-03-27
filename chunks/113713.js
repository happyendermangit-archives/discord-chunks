function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("77078"),
        s = n("507217"),
        r = n("524768"),
        o = n("355263"),
        u = n("93393"),
        d = n("659500"),
        c = n("82372"),
        f = n("49111"),
        m = n("783759");

    function p(e) {
        let {
            channel: t,
            command: n,
            applicationSection: u
        } = e, p = (0, o.getIconComponent)(u), h = l.useCallback(() => {
            c.dismissAppLauncherPopup(), s.setActiveCommand({
                channelId: t.id,
                command: n,
                section: u,
                location: r.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME
            }), d.ComponentDispatch.dispatch(f.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                channelId: t.id
            })
        }, [t, n, u]);
        return (0, i.jsxs)("li", {
            className: m.command,
            onClick: h,
            children: [(0, i.jsx)(p, {
                className: m.applicationIcon,
                channel: t,
                section: u,
                width: 36,
                height: 36
            }), (0, i.jsxs)("div", {
                children: [(0, i.jsx)(a.Text, {
                    variant: "text-md/semibold",
                    children: n.name
                }), (0, i.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: u.name
                })]
            })]
        })
    }

    function h(e) {
        let {
            channel: t,
            commands: n,
            sectionDescriptors: s
        } = e, r = l.useMemo(() => n.map(e => {
            let n = s.find(t => t.id === e.applicationId);
            return null == n ? null : (0, i.jsx)(p, {
                channel: t,
                command: e,
                applicationSection: n
            }, e.id)
        }), [t, n, s]);
        return 0 === n.length ? null : (0, i.jsxs)("div", {
            children: [(0, i.jsxs)(a.Text, {
                className: m.commandListHeading,
                variant: "text-sm/bold",
                color: "text-muted",
                children: [(0, i.jsx)(u.default, {
                    className: m.commandListHeadingIcon,
                    height: 16,
                    width: 16
                }), "Recent slash commands"]
            }), (0, i.jsx)("ul", {
                className: m.commandList,
                children: r
            })]
        })
    }
}