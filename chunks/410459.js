function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ApplicationDirectoryEntrypointNames: function() {
            return a
        },
        ApplicationDirectoryViews: function() {
            return i
        },
        getCurrentView: function() {
            return p
        },
        getPreviousView: function() {
            return E
        },
        resetApplicationDirectoryHistory: function() {
            return I
        },
        setEntrypoint: function() {
            return m
        },
        setGuildId: function() {
            return y
        },
        setTrackedOpenedFromExternalEntrypoint: function() {
            return h
        },
        useApplicationDirectoryHistory: function() {
            return _
        }
    });
    var r, o, i, a, u = n("266067"),
        s = n("652874"),
        l = n("163291"),
        c = n("750087"),
        f = n("281767");
    (r = i || (i = {})).HOME = "home", r.SEARCH = "search", r.APPLICATION = "application", (o = a || (a = {})).EXTERNAL = "External", o.KEYBOARD_SHORTCUT = "Keyboard Shortcut", o.APPLICATION_DIRECTORY_URL = "Application Directory URL", o.APPLICATION_DIRECTORY_PROFILE_EMBED = "Application Directory Profile Embed", o.APPLICATION_DIRECTORY_UPSELL_MODAL = "Application Directory Upsell Modal", o.GUILD_HEADER_POPOUT = "Guild Header Popout", o.GUILD_SETTINGS = "Guild Settings", o.GUILD_INTEGRATION_SETTINGS = "Guild Integration Settings", o.GUILD_CONTEXT_MENU = "Guild Context Menu";
    var d = (0, s.default)(function() {
            return {
                guildId: null,
                entrypoint: null,
                trackedOpenedFromExternalEntrypoint: !1
            }
        }),
        _ = d;

    function E() {
        var e = (0, l.getHistory)().location.state;
        return null == e ? void 0 : e.previousView
    }

    function p() {
        var e = (0, l.getHistory)().location.pathname,
            t = (0, u.matchPath)(e, {
                path: f.Routes.APPLICATION_DIRECTORY,
                exact: !0
            }),
            n = (0, u.matchPath)(e, {
                path: f.Routes.APPLICATION_DIRECTORY_SEARCH,
                exact: !0
            }),
            r = (0, u.matchPath)(e, {
                path: [f.Routes.APPLICATION_DIRECTORY_PROFILE(":applicationId"), f.Routes.APPLICATION_DIRECTORY_PROFILE(":applicationId", ":section")],
                exact: !0
            }),
            o = null !== (s = null == r ? void 0 : r.params) && void 0 !== s ? s : {},
            i = o.applicationId,
            a = o.section;
        if (null != t) return {
            type: "home"
        };
        if (null != n) return {
            type: "search"
        };
        if (null != r && null != i) {
            var s, d, _ = null === (d = c.default.getApplication(i)) || void 0 === d ? void 0 : d.name;
            return {
                type: "application",
                applicationId: i,
                applicationName: _,
                section: a
            }
        }
    }

    function m(e) {
        d.setState({
            entrypoint: e
        })
    }

    function y(e) {
        d.setState({
            guildId: e
        })
    }

    function I() {
        d.setState({
            entrypoint: null,
            guildId: null
        })
    }

    function h(e) {
        d.setState({
            trackedOpenedFromExternalEntrypoint: e
        })
    }
}