function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    }), n("47120"), n("653041");
    var i = n("887490");

    function r(e, t) {
        if (i.EditorUtils.areStylesDisabled(e)) return [];
        let [n, r] = t, a = [];
        if (!i.TextUtils.isText(n)) return a;
        let [s] = i.EditorUtils.node(e, i.PathUtils.parent(r));
        return i.NodeUtils.isType(s, "applicationCommand") ? (n === s.children[0] && a.push({
            anchor: {
                path: r,
                offset: 0
            },
            focus: {
                path: r,
                offset: 0 + s.command.displayName.length + 1
            },
            commandName: !0
        }), a) : a
    }
}