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

    var sourceCode = context.getSourceCode();

    return {
        "ClassBody:exit": function(node) {
            node.body.reduce(function(prev, next) {
                var emptyLines = 0;
                var currentLine = prev.loc.end.line;
                var expected = (config === "always" ? 1 : 0);
                var comments = sourceCode.getComments(prev).trailing;

                comments.forEach(function(comment) {
                    var line = comment.loc.start.line;

                    if (line > currentLine + 1) {
                        emptyLines += (line - currentLine - 1);
                    }

                    currentLine = comment.loc.end.line;
                });

                if (next.loc.start.line > currentLine + 1) {
                    emptyLines += (next.loc.start.line - currentLine - 1);
                }

                if (emptyLines !== expected) {
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
