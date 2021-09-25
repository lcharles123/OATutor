var hints = [{id: "sys21a-h1", type: "hint", dependencies: [], title: "Compare Slopes and Intercepts", text: "We will compare the slopes and intercepts of the two lines: image1", variabilization: {}}, {id: "sys21a-h2", type: "hint", dependencies: ["sys21a-h1"], title: "Slope-Intercept Form", text: "Write the first equation in slope-intercept form: \\n $$\\left(5\\right) x+\\left(3\\right) y=4$$ \\n $$\\left(3\\right) y=-\\left(5\\right) x+\\left(4\\right)$$ \\n $$\\frac{\\left(3\\right) y}{3}=\\frac{\\left(-\\left(5\\right) x+\\left(4\\right)\\right)}{3}$$ \\n $$y=\\frac{-\\left(5\\right)}{3} x+\\frac{4}{3}$$", variabilization: {}}, {id: "sys21a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{-\\left(5\\right)}{3}$$"], dependencies: ["sys21a-h2"], title: "Identify the Slope", text: "What is m in the equation?", variabilization: {}}, {id: "sys21a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{4}{3}$$"], dependencies: ["sys21a-h3"], title: "Identify y-intercept", text: "What is b in the equation?", variabilization: {}}, {id: "sys21a-h5", type: "hint", dependencies: ["sys21a-h4"], title: "Slope-Intercept Form", text: "Write the second equation in slope-intercept form: \\n $$\\left(2\\right) x-\\left(3\\right) y=5$$ \\n $$-\\left(3\\right) y=-\\left(2\\right) x+\\left(5\\right)$$ \\n $$\\frac{-\\left(3\\right) y}{-\\left(3\\right)}=\\frac{\\left(-\\left(2\\right) x+\\left(5\\right)\\right)}{-\\left(3\\right)}$$ \\n $$y=\\frac{2}{3} x-\\frac{5}{3}$$", variabilization: {}}, {id: "sys21a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{2}{3}$$"], dependencies: ["sys21a-h5"], title: "Identify the Slope", text: "What is m in the equation?", variabilization: {}}, {id: "sys21a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{-\\left(5\\right)}{3}$$"], dependencies: ["sys21a-h6"], title: "Identify y-intercept", text: "What is b in the equation?", variabilization: {}}, {id: "sys21a-h8", type: "hint", dependencies: ["sys21a-h3", "sys21a-h4", "sys21a-h6", "sys21a-h7"], title: "Intersecting Lines", text: "Since the slopes are different, the lines intersect.", variabilization: {}}, {id: "sys21a-h9", type: "hint", dependencies: ["sys21a-h8"], title: "Intersecting Lines", text: "A system of equations whose graphs are intersect has 1 solution.", variabilization: {}}, ]; export {hints};