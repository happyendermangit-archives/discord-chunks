function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var r = n("470079"),
        o = n("784184"),
        i = n("503113"),
        a = n("861272"),
        u = n("960201"),
        s = n("228897"),
        l = n("120447"),
        c = n("288625"),
        f = n("281767"),
        d = n("554937");

    function _(e) {
        var t = e.channel,
            n = e.command,
            s = e.applicationSection,
            _ = (0, u.getIconComponent)(s),
            E = r.useCallback(function() {
                c.dismissAppLauncherPopup(), i.setActiveCommand({
                    channelId: t.id,
                    command: n,
                    section: s,
                    location: a.ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME
                }), l.ComponentDispatch.dispatch(f.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                    channelId: t.id
                })
            }, [t, n, s]);
        return r.createElement("li", {
            className: d.command,
            onClick: E
        }, r.createElement(_, {
            className: d.applicationIcon,
            channel: t,
            section: s,
            width: 36,
            height: 36
        }), r.createElement("div", null, r.createElement(o.Text, {
            variant: "text-md/semibold"
        }, n.name), r.createElement(o.Text, {
            variant: "text-sm/normal",
            color: "text-muted"
        }, s.name)))
    }

    function E(e) {
        var t = e.channel,
            n = e.commands,
            i = e.sectionDescriptors,
            a = r.useMemo(function() {
                return n.map(function(e) {
                    var n = i.find(function(t) {
                        return t.id === e.applicationId
                    });
                    return null == n ? null : r.createElement(_, {
                        key: e.id,
                        channel: t,
                        command: e,
                        applicationSection: n
                    })
                })
            }, [t, n, i]);
        return 0 === n.length ? null : r.createElement("div", null, r.createElement(o.Text, {
            className: d.commandListHeading,
            variant: "text-sm/bold",
            color: "text-muted"
        }, r.createElement(s.default, {
            className: d.commandListHeadingIcon,
            height: 16,
            width: 16
        }), "Recent slash commands"), r.createElement("ul", {
            className: d.commandList
        }, a))
    }
}