/**
 * @fileoverview A rule to ensure blank lines between class functions.
 * @author Linus Unnebäck <https://github.com/LinusU>
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {
    var config = context.options[0] || "always";

    var ALWAYS_MESSAGE = "Class functions must be separated by blank line.",
        NEVER_MESSAGE = "Class functions must not be separated by blank lines.";

    return {
        "ClassBody:exit": function(node) {
            node.body.reduce(function(prev, next) {
                var actual = (next.loc.start.line) - (prev.loc.end.line);
                var expected = (config === "always" ? 2 : 1);

                if (actual !== expected) {
                    context.report({
                        node: node,
                        loc: {line: next.loc.start.line, column: next.loc.start.column },
                        message: (config === "always" ? ALWAYS_MESSAGE : NEVER_MESSAGE)
                    });
                }

                return next;
            });
        }
    };
};

module.exports.schema = [
    {
        enum: ["always", "never"]
    }
];
