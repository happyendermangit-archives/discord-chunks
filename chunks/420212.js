function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FOCUS_SECTION_JUMP_KEY: function() {
            return a
        },
        KeyboardEventKey: function() {
            return s.Key
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
    var i, r, s = n("15858");
    let a = s.Key.F6,
        o = new Map([
            [s.Key.F6, "f6"],
            [s.Key.Tab, "tab"],
            [s.Key.ArrowDown, "down"],
            [s.Key.ArrowUp, "up"],
            [s.Key.ArrowLeft, "left"],
            [s.Key.ArrowRight, "right"],
            [s.Key.Home, "home"],
            [s.Key.End, "end"]
        ]),
        l = new Set(["tab", "shift+tab", "down", "up", "left", "right", "home", "end"]);
    (r = i || (i = {})).ENTER = "Enter", r.TAB = "Tab", r.SPACE = " ", r.ESCAPE = "Escape", r.SHIFT = "Shift"
}