function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FOCUS_SECTION_JUMP_KEY: function() {
            return a
        },
        KeyboardEventKey: function() {
            return i.Key
        },
        KeyboardKeysUpdated: function() {
            return o
        },
        NavigationKeyShortcutMap: function() {
            return u
        },
        NavigationShortcuts: function() {
            return s
        }
    });
    var r, o, i = n("15858"),
        a = i.Key.F6,
        u = new Map([
            [i.Key.F6, "f6"],
            [i.Key.Tab, "tab"],
            [i.Key.ArrowDown, "down"],
            [i.Key.ArrowUp, "up"],
            [i.Key.ArrowLeft, "left"],
            [i.Key.ArrowRight, "right"],
            [i.Key.Home, "home"],
            [i.Key.End, "end"]
        ]),
        s = new Set(["tab", "shift+tab", "down", "up", "left", "right", "home", "end"]);
    (r = o || (o = {})).ENTER = "Enter", r.TAB = "Tab", r.SPACE = " ", r.ESCAPE = "Escape", r.SHIFT = "Shift"
}