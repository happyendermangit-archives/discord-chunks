function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DropTarget: function() {
            return c
        }
    });
    var r = n("900255"),
        i = n("29150"),
        o = n("959708"),
        s = n("577111"),
        a = n("157632");

    function c(e, t, n) {
        var c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        (0, o.checkDecoratorArguments)("DropTarget", "type, spec, collect[, options]", e, t, n, c);
        var u = e;
        "function" != typeof e && ((0, r.invariant)((0, o.isValidType)(e, !0), 'Expected "type" provided as the first argument to DropTarget to be a string, an array of strings, or a function that returns either given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', e), u = function() {
            return e
        }), (0, r.invariant)((0, o.isPlainObject)(t), 'Expected "spec" provided as the second argument to DropTarget to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', t);
        var d = (0, a.createTargetFactory)(t);
        return (0, r.invariant)("function" == typeof n, 'Expected "collect" provided as the third argument to DropTarget to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', n), (0, r.invariant)((0, o.isPlainObject)(c), 'Expected "options" provided as the fourth argument to DropTarget to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', n),
            function(e) {
                return (0, s.decorateHandler)({
                    containerDisplayName: "DropTarget",
                    createHandler: d,
                    registerHandler: i.registerTarget,
                    createMonitor: function(e) {
                        return new i.DropTargetMonitorImpl(e)
                    },
                    createConnector: function(e) {
                        return new i.TargetConnector(e)
                    },
                    DecoratedComponent: e,
                    getType: u,
                    collect: n,
                    options: c
                })
            }
    }
}