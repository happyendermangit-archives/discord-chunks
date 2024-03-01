function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DragSource: function() {
            return c
        }
    });
    var r = n("900255"),
        a = n("29150"),
        i = n("959708"),
        o = n("577111"),
        s = n("11105");

    function c(e, t, n) {
        var c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        (0, i.checkDecoratorArguments)("DragSource", "type, spec, collect[, options]", e, t, n, c);
        var l = e;
        "function" != typeof e && ((0, r.invariant)((0, i.isValidType)(e), 'Expected "type" provided as the first argument to DragSource to be a string, or a function that returns a string given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', e), l = function() {
            return e
        }), (0, r.invariant)((0, i.isPlainObject)(t), 'Expected "spec" provided as the second argument to DragSource to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', t);
        var u = (0, s.createSourceFactory)(t);
        return (0, r.invariant)("function" == typeof n, 'Expected "collect" provided as the third argument to DragSource to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', n), (0, r.invariant)((0, i.isPlainObject)(c), 'Expected "options" provided as the fourth argument to DragSource to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', n),
            function(e) {
                return (0, o.decorateHandler)({
                    containerDisplayName: "DragSource",
                    createHandler: u,
                    registerHandler: a.registerSource,
                    createConnector: function(e) {
                        return new a.SourceConnector(e)
                    },
                    createMonitor: function(e) {
                        return new a.DragSourceMonitorImpl(e)
                    },
                    DecoratedComponent: e,
                    getType: l,
                    collect: n,
                    options: c
                })
            }
    }
}