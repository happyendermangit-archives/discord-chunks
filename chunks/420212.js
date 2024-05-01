function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FOCUS_SECTION_JUMP_KEY: function() {
            return s
        },
        KeyboardEventKey: function() {
            return a.Key
        },
        KeyboardKeysUpdated: function() {
            return i
        },
        NavigationKeyShortcutMap: function() {
            return o
        },
        NavigationShortcuts: function() {
            return l
        }
    }), n("47120");
    var i, r, a = n("15858");
    let s = a.Key.F6,
        o = new Map([
            [a.Key.F6, "f6"],
            [a.Key.Tab, "tab"],
            [a.Key.ArrowDown, "down"],
            [a.Key.ArrowUp, "up"],
            [a.Key.ArrowLeft, "left"],
            [a.Key.ArrowRight, "right"],
            [a.Key.Home, "home"],
            [a.Key.End, "end"]
        ]),
        l = new Set(["tab", "shift+tab", "down", "up", "left", "right", "home", "end"]);
    (r = i || (i = {})).ENTER = "Enter", r.TAB = "Tab", r.SPACE = " ", r.ESCAPE = "Escape", r.SHIFT = "Shift"
}