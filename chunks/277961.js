function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DragSource: function() {
            return u
        }
    });
    var r = n("573654"),
        i = n("952969"),
        a = n("534282"),
        o = n("142901"),
        s = n("134373");

    function u(e, t, n) {
        var u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        (0, a.checkDecoratorArguments)("DragSource", "type, spec, collect[, options]", e, t, n, u);
        var c = e;
        "function" != typeof e && ((0, r.invariant)((0, a.isValidType)(e), 'Expected "type" provided as the first argument to DragSource to be a string, or a function that returns a string given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', e), c = function() {
            return e
        }), (0, r.invariant)((0, a.isPlainObject)(t), 'Expected "spec" provided as the second argument to DragSource to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', t);
        var l = (0, s.createSourceFactory)(t);
        return (0, r.invariant)("function" == typeof n, 'Expected "collect" provided as the third argument to DragSource to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', n), (0, r.invariant)((0, a.isPlainObject)(u), 'Expected "options" provided as the fourth argument to DragSource to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', n),
            function(e) {
                return (0, o.decorateHandler)({
                    containerDisplayName: "DragSource",
                    createHandler: l,
                    registerHandler: i.registerSource,
                    createConnector: function(e) {
                        return new i.SourceConnector(e)
                    },
                    createMonitor: function(e) {
                        return new i.DragSourceMonitorImpl(e)
                    },
                    DecoratedComponent: e,
                    getType: c,
                    collect: n,
                    options: u
                })
            }
    }
}