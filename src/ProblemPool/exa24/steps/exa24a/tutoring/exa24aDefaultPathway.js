var hints = [{id: "exa24a-h1", type: "hint", dependencies: [], title: "Multiply", text: "Multiply the outside value with each of the inside parenthesis values", variabilization: {}}, {id: "exa24a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$q^2$$"], dependencies: ["exa24a-h1"], title: "Multiply pt2", text: "What is q times q?", variabilization: {}}, {id: "exa24a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["5q"], dependencies: ["exa24a-h2"], title: "Multiply pt3", text: "What is q times 5?", variabilization: {}}, {id: "exa24a-h4", type: "hint", dependencies: ["exa24a-h3"], title: "Combine", text: "Combine the values multiplied", variabilization: {}}, ]; export {hints};