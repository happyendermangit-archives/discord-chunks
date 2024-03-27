function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DropTarget: function() {
            return u
        }
    });
    var r = n("573654"),
        i = n("952969"),
        a = n("534282"),
        o = n("142901"),
        s = n("792389");

    function u(e, t, n) {
        var u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        (0, a.checkDecoratorArguments)("DropTarget", "type, spec, collect[, options]", e, t, n, u);
        var c = e;
        "function" != typeof e && ((0, r.invariant)((0, a.isValidType)(e, !0), 'Expected "type" provided as the first argument to DropTarget to be a string, an array of strings, or a function that returns either given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', e), c = function() {
            return e
        }), (0, r.invariant)((0, a.isPlainObject)(t), 'Expected "spec" provided as the second argument to DropTarget to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', t);
        var l = (0, s.createTargetFactory)(t);
        return (0, r.invariant)("function" == typeof n, 'Expected "collect" provided as the third argument to DropTarget to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', n), (0, r.invariant)((0, a.isPlainObject)(u), 'Expected "options" provided as the fourth argument to DropTarget to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', n),
            function(e) {
                return (0, o.decorateHandler)({
                    containerDisplayName: "DropTarget",
                    createHandler: l,
                    registerHandler: i.registerTarget,
                    createMonitor: function(e) {
                        return new i.DropTargetMonitorImpl(e)
                    },
                    createConnector: function(e) {
                        return new i.TargetConnector(e)
                    },
                    DecoratedComponent: e,
                    getType: c,
                    collect: n,
                    options: u
                })
            }
    }
}