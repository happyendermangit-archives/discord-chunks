function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ApplicationDirectoryViews: function() {
            return r
        },
        ApplicationDirectoryEntrypointNames: function() {
            return a
        },
        useApplicationDirectoryHistory: function() {
            return f
        },
        getPreviousView: function() {
            return E
        },
        getCurrentView: function() {
            return h
        },
        setEntrypoint: function() {
            return g
        },
        setGuildId: function() {
            return m
        },
        resetApplicationDirectoryHistory: function() {
            return p
        },
        setTrackedOpenedFromExternalEntrypoint: function() {
            return S
        }
    });
    var i, s, r, a, o = n("803182"),
        l = n("308503"),
        u = n("393414"),
        d = n("349503"),
        c = n("49111");
    (i = r || (r = {})).HOME = "home", i.SEARCH = "search", i.APPLICATION = "application", (s = a || (a = {})).EXTERNAL = "External", s.KEYBOARD_SHORTCUT = "Keyboard Shortcut", s.APPLICATION_DIRECTORY_URL = "Application Directory URL", s.APPLICATION_DIRECTORY_PROFILE_EMBED = "Application Directory Profile Embed", s.APPLICATION_DIRECTORY_UPSELL_MODAL = "Application Directory Upsell Modal", s.GUILD_HEADER_POPOUT = "Guild Header Popout", s.GUILD_SETTINGS = "Guild Settings", s.GUILD_INTEGRATION_SETTINGS = "Guild Integration Settings", s.GUILD_CONTEXT_MENU = "Guild Context Menu";
    let _ = (0, l.default)(() => ({
            guildId: null,
            entrypoint: null,
            trackedOpenedFromExternalEntrypoint: !1
        })),
        f = _;

    function E() {
        let {
            location: {
                state: e
            }
        } = (0, u.getHistory)();
        return null == e ? void 0 : e.previousView
    }

    function h() {
        var e, t;
        let {
            location: {
                pathname: n
            }
        } = (0, u.getHistory)(), i = (0, o.matchPath)(n, {
            path: c.Routes.APPLICATION_DIRECTORY,
            exact: !0
        }), s = (0, o.matchPath)(n, {
            path: c.Routes.APPLICATION_DIRECTORY_SEARCH,
            exact: !0
        }), r = (0, o.matchPath)(n, {
            path: [c.Routes.APPLICATION_DIRECTORY_PROFILE(":applicationId"), c.Routes.APPLICATION_DIRECTORY_PROFILE(":applicationId", ":section")],
            exact: !0
        }), {
            applicationId: a,
            section: l
        } = null !== (e = null == r ? void 0 : r.params) && void 0 !== e ? e : {};
        if (null != i) return {
            type: "home"
        };
        if (null != s) return {
            type: "search"
        };
        if (null != r && null != a) {
            let e = null === (t = d.default.getApplication(a)) || void 0 === t ? void 0 : t.name;
            return {
                type: "application",
                applicationId: a,
                applicationName: e,
                section: l
            }
        }
    }

    function g(e) {
        _.setState({
            entrypoint: e
        })
    }

    function m(e) {
        _.setState({
            guildId: e
        })
    }

    function p() {
        _.setState({
            entrypoint: null,
            guildId: null
        })
    }

    function S(e) {
        _.setState({
            trackedOpenedFromExternalEntrypoint: e
        })
    }
}