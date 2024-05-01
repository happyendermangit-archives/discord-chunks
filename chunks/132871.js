function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ApplicationDirectoryEntrypointNames: function() {
            return s
        },
        ApplicationDirectoryViews: function() {
            return a
        },
        getCurrentView: function() {
            return T
        },
        getPreviousView: function() {
            return I
        },
        resetApplicationDirectoryHistory: function() {
            return h
        },
        setEntrypoint: function() {
            return f
        },
        setGuildId: function() {
            return S
        },
        setTrackedOpenedFromExternalEntrypoint: function() {
            return A
        },
        useApplicationDirectoryHistory: function() {
            return E
        }
    });
    var i, r, a, s, o = n("266067"),
        l = n("652874"),
        u = n("703656"),
        d = n("264043"),
        _ = n("981631");
    (i = a || (a = {})).HOME = "home", i.SEARCH = "search", i.APPLICATION = "application", (r = s || (s = {})).EXTERNAL = "External", r.KEYBOARD_SHORTCUT = "Keyboard Shortcut", r.APPLICATION_DIRECTORY_URL = "Application Directory URL", r.APPLICATION_DIRECTORY_PROFILE_EMBED = "Application Directory Profile Embed", r.APPLICATION_DIRECTORY_UPSELL_MODAL = "Application Directory Upsell Modal", r.GUILD_HEADER_POPOUT = "Guild Header Popout", r.GUILD_SETTINGS = "Guild Settings", r.GUILD_INTEGRATION_SETTINGS = "Guild Integration Settings", r.GUILD_CONTEXT_MENU = "Guild Context Menu";
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
        }), a = (0, o.matchPath)(n, {
            path: [_.Routes.APPLICATION_DIRECTORY_PROFILE(":applicationId"), _.Routes.APPLICATION_DIRECTORY_PROFILE(":applicationId", ":section")],
            exact: !0
        }), {
            applicationId: s,
            section: l
        } = null !== (e = null == a ? void 0 : a.params) && void 0 !== e ? e : {};
        if (null != i) return {
            type: "home"
        };
        if (null != r) return {
            type: "search"
        };
        if (null != a && null != s) {
            let e = null === (t = d.default.getApplication(s)) || void 0 === t ? void 0 : t.name;
            return {
                type: "application",
                applicationId: s,
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

    function h() {
        c.setState({
            entrypoint: null,
            guildId: null
        })
    }

    function A(e) {
        c.setState({
            trackedOpenedFromExternalEntrypoint: e
        })
    }
}