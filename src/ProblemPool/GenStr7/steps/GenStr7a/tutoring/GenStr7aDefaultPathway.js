var hints = [{id: "GenStr7a-h1", type: "hint", dependencies: [], title: "Simplification", text: "Simplify each side of the equation as much as possible."}, {id: "GenStr7a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["5a-10=-10"], dependencies: ["GenStr7a-h1"], title: "Simplification", text: "Use the distributive property to simplify each side of the equation."}, {id: "GenStr7a-h3", type: "hint", dependencies: ["GenStr7a-h2"], title: "Variable Terms", text: "Collect all variable terms on the left side of the equation."}, {id: "GenStr7a-h4", type: "hint", dependencies: ["GenStr7a-h3"], title: "Constant Terms", text: "Collect all constant terms on the right side of the equation."}, {id: "GenStr7a-h5", type: "hint", dependencies: ["GenStr7a-h4"], title: "Addition property of equality", text: "When you add the same quantity to both sides of an equation, you still have equality."}, {id: "GenStr7a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["5a=0"], dependencies: ["GenStr7a-h5"], title: "Addition", text: "Add 10 to each side of the equation."}, {id: "GenStr7a-h7", type: "hint", dependencies: ["GenStr7a-h6"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality."}, {id: "GenStr7a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["a=0"], dependencies: ["GenStr7a-h7"], title: "Division", text: "Divide 5 from each side."}, {id: "GenStr7a-h9", type: "hint", dependencies: ["GenStr7a-h8"], title: "Verification", text: "Check whether the result is a solution of the equation."}, {id: "GenStr7a-h10", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["GenStr7a-h9"], title: "Verification", text: "Check whether $$\\left(5\\right) \\left(\\left(0\\right)-\\left(3\\right)\\right)+\\left(5\\right)$$ equals -10.", choices: ["TRUE", "FALSE"]}, ]; export {hints};