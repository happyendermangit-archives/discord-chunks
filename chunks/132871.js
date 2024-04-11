function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ApplicationDirectoryEntrypointNames: function() {
            return a
        },
        ApplicationDirectoryViews: function() {
            return s
        },
        getCurrentView: function() {
            return T
        },
        getPreviousView: function() {
            return I
        },
        resetApplicationDirectoryHistory: function() {
            return A
        },
        setEntrypoint: function() {
            return f
        },
        setGuildId: function() {
            return S
        },
        setTrackedOpenedFromExternalEntrypoint: function() {
            return h
        },
        useApplicationDirectoryHistory: function() {
            return E
        }
    });
    var i, r, s, a, o = n("266067"),
        l = n("652874"),
        u = n("703656"),
        d = n("264043"),
        _ = n("981631");
    (i = s || (s = {})).HOME = "home", i.SEARCH = "search", i.APPLICATION = "application", (r = a || (a = {})).EXTERNAL = "External", r.KEYBOARD_SHORTCUT = "Keyboard Shortcut", r.APPLICATION_DIRECTORY_URL = "Application Directory URL", r.APPLICATION_DIRECTORY_PROFILE_EMBED = "Application Directory Profile Embed", r.APPLICATION_DIRECTORY_UPSELL_MODAL = "Application Directory Upsell Modal", r.GUILD_HEADER_POPOUT = "Guild Header Popout", r.GUILD_SETTINGS = "Guild Settings", r.GUILD_INTEGRATION_SETTINGS = "Guild Integration Settings", r.GUILD_CONTEXT_MENU = "Guild Context Menu";
    let c = (0, l.default)(() => ({
            guildId: null,
            entrypoint: null,
            trackedOpenedFromExternalEntrypoint: !1
        })),
        E = c;

    function I() {
        let {
            location: {
                state: e
            }
        } = (0, u.getHistory)();
        return null == e ? void 0 : e.previousView
    }

    function T() {
        var e, t;
        let {
            location: {
                pathname: n
            }
        } = (0, u.getHistory)(), i = (0, o.matchPath)(n, {
            path: _.Routes.APPLICATION_DIRECTORY,
            exact: !0
        }), r = (0, o.matchPath)(n, {
            path: _.Routes.APPLICATION_DIRECTORY_SEARCH,
            exact: !0
        }), s = (0, o.matchPath)(n, {
            path: [_.Routes.APPLICATION_DIRECTORY_PROFILE(":applicationId"), _.Routes.APPLICATION_DIRECTORY_PROFILE(":applicationId", ":section")],
            exact: !0
        }), {
            applicationId: a,
            section: l
        } = null !== (e = null == s ? void 0 : s.params) && void 0 !== e ? e : {};
        if (null != i) return {
            type: "home"
        };
        if (null != r) return {
            type: "search"
        };
        if (null != s && null != a) {
            let e = null === (t = d.default.getApplication(a)) || void 0 === t ? void 0 : t.name;
            return {
                type: "application",
                applicationId: a,
                applicationName: e,
                section: l
            }
        }
    }

    function f(e) {
        c.setState({
            entrypoint: e
        })
    }

    function S(e) {
        c.setState({
            guildId: e
        })
    }

    function A() {
        c.setState({
            entrypoint: null,
            guildId: null
        })
    }

    function h(e) {
        c.setState({
            trackedOpenedFromExternalEntrypoint: e
        })
    }
}