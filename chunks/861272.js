function(e, t, n) {
    "use strict";
    var r, o, i, a, u, s, l, c, f, d, _, E;
    n.r(t), n.d(t, {
        ApplicationCommandInputType: function() {
            return o
        },
        ApplicationCommandPermissionType: function() {
            return i
        },
        ApplicationCommandSectionType: function() {
            return r
        },
        ApplicationCommandTriggerLocations: function() {
            return a
        },
        ApplicationCommandTriggerSections: function() {
            return u
        },
        CommandOrigin: function() {
            return s
        }
    }), (l = r || (r = {}))[l.BUILT_IN = 0] = "BUILT_IN", l[l.APPLICATION = 1] = "APPLICATION", (c = o || (o = {}))[c.BUILT_IN = 0] = "BUILT_IN", c[c.BUILT_IN_TEXT = 1] = "BUILT_IN_TEXT", c[c.BUILT_IN_INTEGRATION = 2] = "BUILT_IN_INTEGRATION", c[c.BOT = 3] = "BOT", c[c.PLACEHOLDER = 4] = "PLACEHOLDER", (f = i || (i = {}))[f.ROLE = 1] = "ROLE", f[f.USER = 2] = "USER", f[f.CHANNEL = 3] = "CHANNEL", (d = a || (a = {})).DISCOVERY = "discovery", d.SUGGESTION = "suggestion", d.MENTION = "mention", d.PASTE = "paste", d.RECALL = "recall", d.POPULAR_COMMANDS = "popular_commands", d.MJ_CHAT_BAR = "mj_chat_bar", d.QUERY = "query", d.SLASH_UI = "slash_ui", d.APP_LAUNCHER = "app_launcher", d.APP_LAUNCHER_HOME = "app_launcher_home", d.APP_LAUNCHER_HOME_SEARCH = "app_launcher_home_search", d.APP_LAUNCHER_APPLICATION_VIEW = "app_launcher_application_view", d.APP_LAUNCHER_APPLICATION_VIEW_FRECENCT = "app_launcher_application_view_frecent", d.APP_LAUNCHER_SLASH_SEARCH = "app_launcher_slash_search", (_ = u || (u = {}))[_.BUILT_IN = 1] = "BUILT_IN", _[_.FRECENCY = 2] = "FRECENCY", _[_.APP = 3] = "APP", (E = s || (s = {}))[E.CHAT = 0] = "CHAT", E[E.APPLICATION_LAUNCHER = 1] = "APPLICATION_LAUNCHER"
}