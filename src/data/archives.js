export const categories = [
  { id: "all", label: "All" },
  { id: "pure", label: "Pure Mathematics" },
  { id: "applied", label: "Applied Mathematics" },
  { id: "education", label: "Mathematics Education" },
  { id: "supporting", label: "Supporting Courses" },
];

export const years = [
  { id: "all", label: "All Years" },
  { id: "1", label: "1st Year · Foundation" },
  { id: "2", label: "2nd Year · Expanding" },
  { id: "3", label: "3rd Year · Advanced" },
  { id: "4", label: "4th Year · Specialization" },
];

export const archives = [
  // ─── FIRST YEAR · PURE MATHEMATICS ───────────────────────────────────────
  // Elementary Algebra
  {
    title: "Linear Equations and Inequalities in One Variable",
    description:
      "Solve and graph linear equations and inequalities in one variable with real-world applications.",
    url: "https://www.khanacademy.org/test-prep/v2-sat-math/x0fcc98a58ba3bea7:algebra-easier/x0fcc98a58ba3bea7:solving-linear-equations-and-inequalities-easier/a/v2-sat-lesson-solving-linear-equations-and-inequalities",
    image: "",
    category: "pure",
    year: "1",
  },
  {
    title: "Systems of Linear Equations in Two Variables",
    description:
      "Solve systems of linear equations in two variables using substitution, elimination, and graphing methods.",
    url: "https://math.libretexts.org/Bookshelves/Algebra/Algebra_and_Trigonometry_1e_(OpenStax)/11%3A_Systems_of_Equations_and_Inequalities/11.01%3A_Systems_of_Linear_Equations_-_Two_Variables",
    image: "",
    category: "pure",
    year: "1",
  },
  {
    title: "Polynomials: Operations, Factoring, and Polynomial Equations",
    description:
      "Perform operations on polynomials, apply factoring techniques, and solve polynomial equations.",
    url: "https://www.scribd.com/document/582562175/Polynomials-By-Trockers-1",
    image: "",
    category: "pure",
    year: "1",
  },
  {
    title: "Rational Expressions and Equations",
    description:
      "Simplify, add, subtract, multiply, and divide rational expressions and solve rational equations.",
    url: "https://2012books.lardbucket.org/pdfs/beginning-algebra/s10-rational-expressions-and-equat.pdf",
    image: "",
    category: "pure",
    year: "1",
  },
  {
    title: "Radical Expressions and Equations",
    description:
      "Simplify radical expressions and solve equations involving radicals and rational exponents.",
    url: "https://2012books.lardbucket.org/books/beginning-algebra/s11-radical-expressions-and-equati.html",
    image: "",
    category: "pure",
    year: "1",
  },

  // Intermediate Algebra
  {
    title: "Quadratic Equations and Inequalities",
    description:
      "Solve quadratic equations by factoring, completing the square, and the quadratic formula; graph and solve quadratic inequalities.",
    url: "https://www.khanacademy.org/math/algebra-home/alg-quadratics",
    image: "",
    category: "pure",
    year: "1",
  },
  {
    title: "Functions: Definitions, Domains, Ranges, and Graphs",
    description:
      "Understand function notation, determine domain and range, and analyze function graphs.",
    url: "https://study.com/academy/lesson/what-is-domain-and-range-in-a-function.html",
    image: "",
    category: "pure",
    year: "1",
  },
  {
    title: "Inverse Functions and Composite Functions",
    description:
      "Find inverse functions, compose functions, and explore their properties and graphs.",
    url: "https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:functions/x2ec2f6f830c9fb89:inverse-functions",
    image: "",
    category: "pure",
    year: "1",
  },
  {
    title: "Exponential and Logarithmic Functions",
    description:
      "Explore exponential growth and decay, logarithmic properties, and solve exponential and logarithmic equations.",
    url: "https://www.khanacademy.org/math/algebra2/exponential-and-logarithmic-functions",
    image: "",
    category: "pure",
    year: "1",
  },
  {
    title: "Sequences and Series: Arithmetic, Geometric, and Harmonic",
    description:
      "Identify and work with arithmetic, geometric, and harmonic sequences and their corresponding series.",
    url: "https://www.khanacademy.org/math/algebra/sequences",
    image: "",
    category: "pure",
    year: "1",
  },

  // Plane Euclidean Geometry
  {
    title: "Basic Geometric Terms and Postulates",
    description:
      "Learn foundational geometric terms, definitions, and postulates that underpin Euclidean geometry.",
    url: "https://www.khanacademy.org/math/geometry/hs-geo-foundations",
    image: "",
    category: "pure",
    year: "1",
  },
  {
    title: "Triangles: Congruence, Similarity, and Properties",
    description:
      "Explore triangle congruence and similarity theorems and key properties of triangles.",
    url: "https://www.khanacademy.org/math/geometry/hs-geo-triangles",
    image: "",
    category: "pure",
    year: "1",
  },
  {
    title: "Quadrilaterals and Polygons: Types and Properties",
    description:
      "Classify quadrilaterals and polygons and analyze their angles, sides, and properties.",
    url: "https://www.khanacademy.org/math/geometry/hs-geo-quadrilaterals",
    image: "",
    category: "pure",
    year: "1",
  },
  {
    title: "Circles: Chords, Tangents, Secants, and Inscribed Angles",
    description:
      "Study the properties of circles including chords, tangents, secants, and inscribed angle theorems.",
    url: "https://www.khanacademy.org/math/geometry/hs-geo-circles",
    image: "",
    category: "pure",
    year: "1",
  },
  {
    title: "Geometric Proofs and Logical Reasoning",
    description:
      "Construct formal geometric proofs using deductive reasoning and logical arguments.",
    url: "https://www.khanacademy.org/math/geometry/hs-geo-proofs",
    image: "",
    category: "pure",
    year: "1",
  },

  // Analytic Geometry (Basics)
  {
    title: "Coordinate Systems: Cartesian Plane",
    description:
      "Understand the Cartesian coordinate system, plot points, and identify quadrants.",
    url: "https://www.khanacademy.org/math/basic-geo/basic-geo-coordinates",
    image: "",
    category: "pure",
    year: "1",
  },
  {
    title: "Distance Formula, Midpoint Formula, and Slope of a Line",
    description:
      "Apply the distance and midpoint formulas and calculate the slope between two points.",
    url: "https://www.khanacademy.org/math/algebra-home/alg-linear-equations/alg-distance-and-midpoints",
    image: "",
    category: "pure",
    year: "1",
  },
  {
    title: "Equations of Lines: Slope-Intercept, Point-Slope, and Two-Point Forms",
    description:
      "Write and interpret equations of lines in slope-intercept, point-slope, and two-point forms.",
    url: "https://www.khanacademy.org/math/algebra/linear-equations",
    image: "",
    category: "pure",
    year: "1",
  },
  {
    title: "Parallel and Perpendicular Lines",
    description:
      "Identify and write equations of parallel and perpendicular lines using slope relationships.",
    url: "https://www.khanacademy.org/math/geometry/hs-geo-analytic-geometry/hs-geo-parallel-and-perpendicular",
    image: "",
    category: "pure",
    year: "1",
  },
  {
    title: "Introduction to Conic Sections: Circles and Ellipses",
    description:
      "Explore the equations and properties of circles and ellipses as introductory conic sections.",
    url: "https://www.khanacademy.org/math/precalculus/conic-sections",
    image: "",
    category: "pure",
    year: "1",
  },

  // Pre-Calculus
  {
    title: "Trigonometric Functions: Definitions, Graphs, and Identities",
    description:
      "Define the six trigonometric functions, analyze their graphs, and apply fundamental identities.",
    url: "https://www.khanacademy.org/math/trigonometry",
    image: "",
    category: "pure",
    year: "1",
  },
  {
    title: "Inverse Trigonometric Functions",
    description:
      "Understand inverse trig functions, their domains and ranges, and evaluate inverse expressions.",
    url: "https://www.khanacademy.org/math/trigonometry/inverse-trig-functions",
    image: "",
    category: "pure",
    year: "1",
  },
  {
    title: "Trigonometric Equations and Inequalities",
    description:
      "Solve trigonometric equations and inequalities using identities and algebraic techniques.",
    url: "https://www.khanacademy.org/math/trigonometry/trig-equations-and-identities",
    image: "",
    category: "pure",
    year: "1",
  },
  {
    title: "Applications of Trigonometry: Triangles, Bearings, and Heights and Distances",
    description:
      "Apply trigonometry to solve problems involving triangles, compass bearings, and heights and distances.",
    url: "https://www.khanacademy.org/math/trigonometry/solving-triangles",
    image: "",
    category: "pure",
    year: "1",
  },
  {
    title: "Polar Coordinates and Parametric Equations",
    description:
      "Convert between polar and rectangular coordinates and work with parametric equations.",
    url: "https://www.khanacademy.org/math/precalculus/parametric-equations-and-polar-coordinates",
    image: "",
    category: "pure",
    year: "1",
  },

  // ─── FIRST YEAR · APPLIED MATHEMATICS ────────────────────────────────────
  {
    title: "Descriptive Statistics: Mean, Median, and Mode",
    description:
      "Calculate and interpret measures of central tendency including mean, median, and mode.",
    url: "https://www.mathsisfun.com/data/mean-median-mode.html",
    image: "",
    category: "applied",
    year: "1",
  },
  {
    title: "Measures of Dispersion: Range, Variance, and Standard Deviation",
    description:
      "Understand and compute range, variance, and standard deviation to describe data spread.",
    url: "https://www.mathsisfun.com/data/standard-deviation.html",
    image: "",
    category: "applied",
    year: "1",
  },
  {
    title: "Graphical Representation of Data: Bar, Pie, Histogram, and Frequency Polygon",
    description:
      "Create and interpret bar graphs, pie charts, histograms, and frequency polygons.",
    url: "https://www.mathsisfun.com/data/data-graphs.html",
    image: "",
    category: "applied",
    year: "1",
  },
  {
    title: "Probability Basics: Sample Space, Events, and Rules",
    description:
      "Define sample spaces and events, and apply fundamental probability rules.",
    url: "https://www.probabilitycourse.com/chapter1/1_1_1_sample_space.php",
    image: "",
    category: "applied",
    year: "1",
  },
  {
    title: "Counting Principles: Permutations and Combinations",
    description:
      "Apply the fundamental counting principle, permutations, and combinations to solve probability problems.",
    url: "https://www.mathsisfun.com/combinatorics/combinations-permutations.html",
    image: "",
    category: "applied",
    year: "1",
  },

  // ─── FIRST YEAR · MATHEMATICS EDUCATION ──────────────────────────────────
  // Introduction to Teaching
  {
    title: "Teaching Profession: Roles, Responsibilities, and Ethics",
    description:
      "Examine the roles, responsibilities, and ethical standards expected of professional teachers.",
    url: "https://www.slideshare.net/guest3c2b6c/roles-and-responsibilities-of-a-teacher",
    image: "",
    category: "education",
    year: "1",
  },
  {
    title: "Historical and Philosophical Foundations of Education",
    description:
      "Trace the historical development of education and explore major philosophical perspectives.",
    url: "https://www.simplypsychology.org/educational-philosophies.html",
    image: "",
    category: "education",
    year: "1",
  },
  {
    title: "Educational Systems in the Philippines",
    description:
      "Understand the structure, policies, and programs of the Philippine educational system under DepEd.",
    url: "https://www.deped.gov.ph/about-deped/",
    image: "",
    category: "education",
    year: "1",
  },
  {
    title: "Trends and Issues in Education",
    description:
      "Analyze current global and local trends and emerging issues shaping modern education.",
    url: "https://www.unesco.org/en/education",
    image: "",
    category: "education",
    year: "1",
  },

  // Principles of Education
  {
    title: "Learning Theories: Behaviorism, Cognitivism, Constructivism, and Humanism",
    description:
      "Compare major learning theories and their implications for classroom teaching and student learning.",
    url: "https://www.simplypsychology.org/learning-theories.html",
    image: "",
    category: "education",
    year: "1",
  },
  {
    title: "Principles of Effective Teaching and Learning",
    description:
      "Identify and apply core principles that support effective teaching and meaningful student learning.",
    url: "https://teaching.unl.edu/teaching-resources/principles-of-effective-teaching/",
    image: "",
    category: "education",
    year: "1",
  },
  {
    title: "Classroom Management Fundamentals",
    description:
      "Develop research-based strategies for creating a positive, well-managed classroom environment.",
    url: "https://www.edutopia.org/article/classroom-management-research-based-strategies",
    image: "",
    category: "education",
    year: "1",
  },
  {
    title: "Student Diversity and Its Implications",
    description:
      "Recognize diverse student backgrounds and learn how diversity shapes inclusive teaching practices.",
    url: "https://www.edutopia.org/article/teaching-diverse-classroom",
    image: "",
    category: "education",
    year: "1",
  },

  // Child & Adolescent Development
  {
    title: "Physical, Cognitive, Social, and Emotional Development",
    description:
      "Study the key domains of human development across childhood and adolescence.",
    url: "https://courses.lumenlearning.com/suny-lifespandevelopment/",
    image: "",
    category: "education",
    year: "1",
  },
  {
    title: "Developmental Stages and Characteristics",
    description:
      "Explore Piaget's stages of cognitive development and the characteristics of each developmental phase.",
    url: "https://www.simplypsychology.org/piaget.html",
    image: "",
    category: "education",
    year: "1",
  },
  {
    title: "Factors Influencing Development: Family, School, and Society",
    description:
      "Examine how family, school, and societal factors shape child and adolescent development through Bronfenbrenner's ecological model.",
    url: "https://www.simplypsychology.org/ecological-systems-theory.html",
    image: "",
    category: "education",
    year: "1",
  },
  {
    title: "Implications of Development for Education",
    description:
      "Apply developmental theory and learning science to inform effective educational practice.",
    url: "https://www.edutopia.org/article/applying-learning-science-classroom",
    image: "",
    category: "education",
    year: "1",
  },

  // ─── FIRST YEAR · SUPPORTING COURSES ─────────────────────────────────────
  // Communication Skills
  {
    title: "English Communication: Listening, Speaking, Reading, and Writing",
    description:
      "Develop core English communication skills across listening, speaking, reading, and writing.",
    url: "https://learnenglish.britishcouncil.org/skills",
    image: "",
    category: "supporting",
    year: "1",
  },
  {
    title: "Filipino Communication: Pakikipagtalastasan, Pagsulat, at Pagbabasa",
    description:
      "Paunlarin ang mga kasanayan sa pakikipagtalastasan, pagsulat, at pagbabasa sa wikang Filipino.",
    url: "https://filipiknow.net/filipino-subject/",
    image: "",
    category: "supporting",
    year: "1",
  },
  {
    title: "Technical Writing and Report Preparation",
    description:
      "Learn the conventions of technical writing and how to prepare clear, structured reports.",
    url: "https://owl.purdue.edu/owl/subject_specific_writing/professional_technical_writing/index.html",
    image: "",
    category: "supporting",
    year: "1",
  },

  // Natural Sciences
  {
    title: "Basic Physics: Motion, Force, Energy, and Waves",
    description:
      "Explore fundamental physics concepts including motion, forces, energy, and wave behavior.",
    url: "https://www.physicsclassroom.com/Physics-Tutorial",
    image: "",
    category: "supporting",
    year: "1",
  },
  {
    title: "Basic Chemistry: Matter, Elements, Compounds, and Reactions",
    description:
      "Study the building blocks of matter, the periodic table, and basic chemical reactions.",
    url: "https://www.chemguide.co.uk/",
    image: "",
    category: "supporting",
    year: "1",
  },
  {
    title: "Earth Science: Earth's Structure, Processes, and Resources",
    description:
      "Investigate the structure of the Earth, geological processes, and natural resources.",
    url: "https://www.nationalgeographic.org/education/earth-science/",
    image: "",
    category: "supporting",
    year: "1",
  },

  // Computer Fundamentals
  {
    title: "Computer Hardware and Software Basics",
    description:
      "Understand the components of a computer system including hardware parts and software types.",
    url: "https://edu.gcfglobal.org/en/computerbasics/inside-a-computer/1/",
    image: "",
    category: "supporting",
    year: "1",
  },
  {
    title: "Operating Systems and File Management",
    description:
      "Learn how operating systems work and how to manage files and folders effectively.",
    url: "https://edu.gcfglobal.org/en/basic-computer-skills/understanding-operating-systems/1/",
    image: "",
    category: "supporting",
    year: "1",
  },
  {
    title: "Word Processing, Spreadsheets, and Presentation Software",
    description:
      "Use productivity software including word processors, spreadsheets, and presentation tools.",
    url: "https://edu.gcfglobal.org/en/topics/office/",
    image: "",
    category: "supporting",
    year: "1",
  },
  {
    title: "Internet and Online Safety",
    description:
      "Practice safe and responsible internet use including protecting personal information online.",
    url: "https://edu.gcfglobal.org/en/internetsafety/",
    image: "",
    category: "supporting",
    year: "1",
  },

  // ─── SECOND YEAR · PURE MATHEMATICS ──────────────────────────────────────
  // Advanced Algebra
  {
    title: "Matrices: Operations, Determinants, and Inverse Matrices",
    description:
      "Learn matrix operations, how to compute determinants, and find inverse matrices.",
    url: "https://inversematrixcalculator.com/matrix-operations/",
    image: "",
    category: "pure",
    year: "2",
  },
  {
    title: "Systems of Linear Equations: Matrix Methods and Cramer's Rule",
    description:
      "Solve systems of linear equations using matrix methods and Cramer's Rule.",
    url: "https://math.libretexts.org/Bookshelves/Algebra/Book%3A_Algebra_and_Trigonometry_(OpenStax)/09%3A_Systems_of_Equations_and_Inequalities/9.08%3A_Solving_Systems_with_Cramers_Rule",
    image: "",
    category: "pure",
    year: "2",
  },
  {
    title: "Complex Numbers: Operations, Polar Form, and De Moivre's Theorem",
    description:
      "Explore complex number operations, polar form representation, and De Moivre's theorem.",
    url: "https://www.scribd.com/document/Polar-Form-De-Moivres-Theorem",
    image: "",
    category: "pure",
    year: "2",
  },
  {
    title: "Polynomial Functions: Roots, Factors, and Rational Root Theorem",
    description:
      "Understand polynomial roots, factoring techniques, and the rational root theorem.",
    url: "https://www.cuemath.com/algebra/rational-root-theorem/",
    image: "",
    category: "pure",
    year: "2",
  },
  {
    title: "Inequalities: Polynomial, Rational, and Absolute Value",
    description:
      "Solve and graph polynomial, rational, and absolute value inequalities.",
    url: "https://tutorial.math.lamar.edu/classes/alg/solvepolyinequalities.aspx",
    image: "",
    category: "pure",
    year: "2",
  },

  // Solid Geometry
  {
    title: "Three-Dimensional Shapes: Prisms, Pyramids, Cylinders, Cones, and Spheres",
    description:
      "Overview of 3D geometric shapes including prisms, pyramids, cylinders, cones, and spheres.",
    url: "https://study.com/academy/lesson/overview-of-three-dimensional-shapes-in-geometry.html",
    image: "",
    category: "pure",
    year: "2",
  },
  {
    title: "Surface Area and Volume of Solid Figures",
    description:
      "Formulas and methods for computing surface area and volume of common solid figures.",
    url: "https://byjus.com/maths/surface-areas-volumes/",
    image: "",
    category: "pure",
    year: "2",
  },
  {
    title: "Spatial Relationships and Geometric Proofs in 3D",
    description:
      "Analyze spatial relationships and construct geometric proofs in three-dimensional space.",
    url: "https://byjus.com/maths/surface-areas-volumes/",
    image: "",
    category: "pure",
    year: "2",
  },
  {
    title: "Coordinate Geometry in Three Dimensions",
    description:
      "Apply coordinate geometry concepts to three-dimensional space including points, lines, and planes.",
    url: "https://byjus.com/jee/3d-geometry/",
    image: "",
    category: "pure",
    year: "2",
  },

  // Differential Calculus
  {
    title: "Limits: Definitions, Properties, and Evaluation Techniques",
    description:
      "Understand the definition and properties of limits and learn various techniques for evaluating them.",
    url: "https://tutorial.math.lamar.edu/classes/calci/limitsproperties.aspx",
    image: "",
    category: "pure",
    year: "2",
  },
  {
    title: "Continuity of Functions",
    description:
      "Explore the concept of continuity, types of discontinuities, and continuity theorems.",
    url: "https://tutorial.math.lamar.edu/classes/calci/continuity.aspx",
    image: "",
    category: "pure",
    year: "2",
  },
  {
    title: "Derivatives: Definitions, Rules, and Implicit Differentiation",
    description:
      "Master derivative definitions, power/product/quotient/chain rules, and implicit differentiation.",
    url: "https://tutorial.math.lamar.edu/classes/calci/DerivativeIntro.aspx",
    image: "",
    category: "pure",
    year: "2",
  },
  {
    title: "Derivatives of Trigonometric, Exponential, and Logarithmic Functions",
    description:
      "Differentiate trigonometric, exponential, and logarithmic functions with worked examples.",
    url: "https://tutorial.math.lamar.edu/problems/calci/diffexplogfcns.aspx",
    image: "",
    category: "pure",
    year: "2",
  },
  {
    title: "Applications of Derivatives: Rates of Change, Optimization, and Curve Sketching",
    description:
      "Apply derivatives to solve real-world problems involving rates of change, optimization, and curve analysis.",
    url: "https://tutorial.math.lamar.edu/classes/calci/DerivAppsIntro.aspx",
    image: "",
    category: "pure",
    year: "2",
  },

  // Linear Algebra
  {
    title: "Vector Spaces: Definitions, Subspaces, and Basis Vectors",
    description:
      "Study vector space definitions, subspace criteria, and how to find a basis.",
    url: "https://math.libretexts.org/Bookshelves/Linear_Algebra/A_First_Course_in_Linear_Algebra_(Kuttler)/09%3A_Vector_Spaces/9.04%3A_Subspaces_and_Basis",
    image: "",
    category: "pure",
    year: "2",
  },
  {
    title: "Linear Transformations: Definitions, Matrices, and Kernel/Image",
    description:
      "Understand linear transformations, their matrix representations, and the concepts of kernel and image.",
    url: "https://math.libretexts.org/Bookshelves/Linear_Algebra/Linear_Algebra_with_Applications_(Nicholson)/07%3A_Linear_Transformations/7.02%3A_Kernel_and_Image_of_a_Linear_Transformation",
    image: "",
    category: "pure",
    year: "2",
  },
  {
    title: "Eigenvalues and Eigenvectors: Calculations and Applications",
    description:
      "Calculate eigenvalues and eigenvectors and explore their practical applications.",
    url: "https://math.libretexts.org/Bookshelves/Linear_Algebra/A_First_Course_in_Linear_Algebra_(Kuttler)/07%3A_Spectral_Theory/7.01%3A_Eigenvalues_and_Eigenvectors_of_a_Matrix",
    image: "",
    category: "pure",
    year: "2",
  },
  {
    title: "Inner Product Spaces and Orthogonality",
    description:
      "Explore inner product spaces, orthogonal vectors, and projections.",
    url: "https://math.libretexts.org/Bookshelves/Differential_Equations/Differential_Equations_for_Engineers_(Lebl)/Appendix_A%3A_Linear_Algebra/A.5%3A_Inner_Product_and_Projections",
    image: "",
    category: "pure",
    year: "2",
  },

  // ─── SECOND YEAR · APPLIED MATHEMATICS ───────────────────────────────────
  // Inferential Statistics
  {
    title: "Sampling Techniques and Sampling Distributions",
    description:
      "Learn various sampling methods and how sampling distributions are constructed.",
    url: "https://www.scribbr.com/methodology/sampling-methods/",
    image: "",
    category: "applied",
    year: "2",
  },
  {
    title: "Estimation: Point Estimation and Interval Estimation",
    description:
      "Understand the difference between point and interval estimation and when to use each.",
    url: "https://www.scribbr.com/frequently-asked-questions/point-estimate-vs-interval-estimate/",
    image: "",
    category: "applied",
    year: "2",
  },
  {
    title: "Hypothesis Testing: Null and Alternative Hypotheses, Significance Levels, and P-Values",
    description:
      "Master the fundamentals of hypothesis testing including significance levels and p-value interpretation.",
    url: "https://www.scribbr.com/statistics/null-and-alternative-hypotheses/",
    image: "",
    category: "applied",
    year: "2",
  },
  {
    title: "Tests of Significance: Z-Tests, T-Tests, Chi-Square Tests, and ANOVA",
    description:
      "Compare and apply z-tests, t-tests, chi-square tests, and ANOVA for hypothesis testing.",
    url: "https://medium.com/@yxinli92/understanding-hypothesis-testing-t-test-z-test-chi-square-test-and-anova-e471ba7459a6",
    image: "",
    category: "applied",
    year: "2",
  },
  {
    title: "Regression Analysis: Simple Linear Regression and Correlation",
    description:
      "Analyze relationships between variables using simple linear regression and correlation coefficients.",
    url: "https://byjus.com/maths/correlation-and-regression/",
    image: "",
    category: "applied",
    year: "2",
  },

  // Discrete Mathematics
  {
    title: "Set Theory: Definitions, Operations, and Venn Diagrams",
    description:
      "Study sets, set operations such as union and intersection, and Venn diagram representations.",
    url: "https://byjus.com/maths/venn-diagrams/",
    image: "",
    category: "applied",
    year: "2",
  },
  {
    title: "Logic: Propositional Logic, Predicate Logic, and Logical Reasoning",
    description:
      "Explore propositional and predicate logic, truth tables, and logical reasoning techniques.",
    url: "https://brilliant.org/wiki/propositional-logic/",
    image: "",
    category: "applied",
    year: "2",
  },
  {
    title: "Combinatorics: Permutations, Combinations, and Counting Techniques",
    description:
      "Learn counting principles, permutations, combinations, and their applications.",
    url: "https://byjus.com/maths/permutation-and-combination/",
    image: "",
    category: "applied",
    year: "2",
  },
  {
    title: "Recurrence Relations: Solutions and Applications",
    description:
      "Solve recurrence relations and apply them to model sequences and algorithms.",
    url: "https://discrete.openmathbooks.org/dmoi3/sec_recurrence.html",
    image: "",
    category: "applied",
    year: "2",
  },
  {
    title: "Boolean Algebra: Definitions, Operations, and Logic Gates",
    description:
      "Understand Boolean algebra operations and their application in logic gate design.",
    url: "https://byjus.com/maths/boolean-algebra/",
    image: "",
    category: "applied",
    year: "2",
  },

  // ─── SECOND YEAR · MATHEMATICS EDUCATION ─────────────────────────────────
  // Pedagogy of Mathematics I
  {
    title: "Teaching Strategies for Basic Mathematics Topics",
    description:
      "Discover effective teaching strategies tailored for foundational mathematics topics.",
    url: "https://www.mathematicshub.edu.au/teaching-strategies/",
    image: "",
    category: "education",
    year: "2",
  },
  {
    title: "Lesson Planning: Components, Formats, and Design Principles",
    description:
      "Learn the components of effective lesson plans and apply sound design principles.",
    url: "https://cte.smu.edu.sg/approach-teaching/integrated-design/lesson-planning",
    image: "",
    category: "education",
    year: "2",
  },
  {
    title: "Instructional Materials Development for Mathematics",
    description:
      "Develop high-quality instructional materials suited for mathematics learners.",
    url: "https://www.researchgate.net/publication/Developing-Mathematics-Instructional-Materials",
    image: "",
    category: "education",
    year: "2",
  },
  {
    title: "Questioning Techniques and Classroom Interaction",
    description:
      "Use effective questioning strategies to promote deeper understanding and classroom engagement.",
    url: "https://study.com/academy/lesson/questioning-in-the-classroom-strategies-techniques.html",
    image: "",
    category: "education",
    year: "2",
  },
  {
    title: "Differentiated Instruction for Diverse Learners",
    description:
      "Adapt teaching approaches to meet the varying needs of diverse learners in the math classroom.",
    url: "https://marymount.edu/blog/differentiating-instruction-for-diverse-learners-in-k-12-education/",
    image: "",
    category: "education",
    year: "2",
  },

  // Educational Technology
  {
    title: "Integration of Technology in Mathematics Teaching",
    description:
      "Explore how technology tools can be meaningfully integrated into mathematics instruction.",
    url: "https://iopscience.iop.org/article/10.1088/1742-6596/1778/1/012032",
    image: "",
    category: "education",
    year: "2",
  },
  {
    title: "Educational Software and Apps for Mathematics: GeoGebra, Desmos, Excel",
    description:
      "Leverage GeoGebra, Desmos, and Excel as dynamic tools for teaching and learning mathematics.",
    url: "https://www.geogebra.org",
    image: "",
    category: "education",
    year: "2",
  },
  {
    title: "Digital Resources and Online Learning Platforms",
    description:
      "Identify and evaluate digital resources and online platforms for mathematics education.",
    url: "https://study.com/academy/lesson/digital-learning-resources-definition-types-examples.html",
    image: "",
    category: "education",
    year: "2",
  },
  {
    title: "Designing Technology-Enhanced Learning Activities",
    description:
      "Design engaging learning activities that effectively incorporate educational technology.",
    url: "https://edtechbooks.org/designing_technology_enhanced_learning_experiences",
    image: "",
    category: "education",
    year: "2",
  },
  {
    title: "Ethical Use of Technology in Education",
    description:
      "Understand the ethical responsibilities around technology use in classroom settings.",
    url: "https://online.nwmissouri.edu/articles/education/ethics-for-technology-use-in-the-classroom.aspx",
    image: "",
    category: "education",
    year: "2",
  },

  // Assessment & Evaluation
  {
    title: "Principles of Assessment and Evaluation in Education",
    description:
      "Study the foundational principles that guide fair and effective assessment and evaluation.",
    url: "https://www.scribd.com/document/Principles-of-Assessment-and-Evaluation",
    image: "",
    category: "education",
    year: "2",
  },
  {
    title: "Types of Assessment: Formative, Summative, Diagnostic, and Authentic",
    description:
      "Compare formative, summative, diagnostic, and authentic assessment types and their purposes.",
    url: "https://www.niu.edu/center-for-innovative-teaching-and-learning/teaching-resources/formative-and-summative-assessment.shtml",
    image: "",
    category: "education",
    year: "2",
  },
  {
    title: "Designing Assessment Tools: Tests, Quizzes, Performance Tasks, and Portfolios",
    description:
      "Create effective assessment instruments including tests, quizzes, performance tasks, and portfolios.",
    url: "https://teaching.resources.osu.edu/teaching-topics/designing-assessments-student-learning",
    image: "",
    category: "education",
    year: "2",
  },
  {
    title: "Grading Systems and Score Interpretation",
    description:
      "Understand different grading systems and how to accurately interpret assessment scores.",
    url: "https://www.scribd.com/document/Score-Interpretation-and-Grading-Guide",
    image: "",
    category: "education",
    year: "2",
  },
  {
    title: "Using Assessment Data to Improve Teaching and Learning",
    description:
      "Analyze assessment data to make informed decisions that enhance teaching practice and student outcomes.",
    url: "https://research.acer.edu.au/cgi/viewcontent.cgi?article=1036&context=tll_misc",
    image: "",
    category: "education",
    year: "2",
  },

  // ─── SECOND YEAR · SUPPORTING COURSES ────────────────────────────────────
  // Programming for Mathematics
  {
    title: "Programming Fundamentals: Variables, Data Types, Control Structures, and Functions",
    description:
      "Build a solid foundation in programming with variables, data types, control flow, and functions.",
    url: "https://press.rebus.community/programmingfundamentals/chapter/data-types/",
    image: "",
    category: "supporting",
    year: "2",
  },
  {
    title: "Introduction to a Programming Language: Python or C++",
    description:
      "Get started with either Python or C++ as a programming language for mathematical applications.",
    url: "https://www.coursera.org/in/articles/python-vs-c",
    image: "",
    category: "supporting",
    year: "2",
  },
  {
    title: "Programming for Mathematical Computations: Solving Equations, Plotting Graphs, and Data Analysis",
    description:
      "Use programming to solve equations, generate graphs, and perform mathematical data analysis.",
    url: "https://purpletutor.com/maths/",
    image: "",
    category: "supporting",
    year: "2",
  },
  {
    title: "Basic Algorithms and Problem-Solving with Programming",
    description:
      "Develop algorithmic thinking and apply programming to solve mathematical problems.",
    url: "https://www.scribd.com/presentation/552006836/part-1",
    image: "",
    category: "supporting",
    year: "2",
  },

  // General Physics
  {
    title: "Mechanics: Kinematics, Dynamics, Work, Energy, and Power",
    description:
      "Study the principles of motion, forces, work, energy, and power in classical mechanics.",
    url: "https://byjus.com/physics/work-energy-power/",
    image: "",
    category: "supporting",
    year: "2",
  },
  {
    title: "Thermodynamics: Heat, Temperature, and Laws of Thermodynamics",
    description:
      "Explore heat transfer, temperature, and the fundamental laws governing thermodynamic systems.",
    url: "https://byjus.com/physics/thermodynamics/",
    image: "",
    category: "supporting",
    year: "2",
  },
  {
    title: "Waves and Optics: Wave Properties, Sound, and Light",
    description:
      "Examine wave properties, the behavior of sound, and the nature and optics of light.",
    url: "https://www.pearson.com/channels/physics/study-guides/waves-sound-and-light-study-notes-for",
    image: "",
    category: "supporting",
    year: "2",
  },
  {
    title: "Electromagnetism: Electric Fields, Magnetic Fields, and Circuits",
    description:
      "Understand electric and magnetic fields, electromagnetic induction, and circuit analysis.",
    url: "https://www.accessscience.com/content/article/a223000",
    image: "",
    category: "supporting",
    year: "2",
  },
  {
    title: "Mathematical Applications in Physics",
    description:
      "Apply mathematical concepts and techniques to solve problems across core physics domains.",
    url: "https://study.com/academy/lesson/mathematical-physics-overview-application-concepts.html",
    image: "",
    category: "supporting",
    year: "2",
  },

  // ─── THIRD YEAR · PURE MATHEMATICS ───────────────────────────────────────
  // Integral Calculus
  {
    title: "Indefinite Integrals: Antiderivatives and Basic Integration Rules",
    description:
      "Understand antiderivatives and apply basic integration rules to evaluate indefinite integrals.",
    url: "https://math.libretexts.org/Bookshelves/Calculus/Calculus_3e_(Apex)/05%3A_Integration/5.01%3A_Antiderivatives_and_Indefinite_Integration",
    image: "",
    category: "pure",
    year: "3",
  },
  {
    title: "Integration Techniques: Substitution, Integration by Parts, Partial Fractions, and Trigonometric Substitution",
    description:
      "Master key integration techniques including substitution, integration by parts, partial fractions, and trigonometric substitution.",
    url: "https://tutorial.math.lamar.edu/classes/calcii/inttechintro.aspx",
    image: "",
    category: "pure",
    year: "3",
  },
  {
    title: "Definite Integrals: Definitions, Properties, and the Fundamental Theorem of Calculus",
    description:
      "Define and evaluate definite integrals and apply the Fundamental Theorem of Calculus.",
    url: "https://tutorial.math.lamar.edu/classes/calci/defnofdefiniteintegral.aspx",
    image: "",
    category: "pure",
    year: "3",
  },
  {
    title: "Applications of Integrals: Areas, Volumes, Arc Lengths, and Work",
    description:
      "Apply definite integrals to compute areas, volumes of solids, arc lengths, and work done by a force.",
    url: "https://tutorial.math.lamar.edu/classes/calcii/intappsintro.aspx",
    image: "",
    category: "pure",
    year: "3",
  },
  {
    title: "Improper Integrals",
    description:
      "Evaluate integrals with infinite limits or discontinuous integrands using limit techniques.",
    url: "https://tutorial.math.lamar.edu/classes/calcii/improperintegrals.aspx",
    image: "",
    category: "pure",
    year: "3",
  },

  // Multivariable Calculus
  {
    title: "Functions of Several Variables: Domains, Ranges, and Graphs",
    description:
      "Analyze functions of two or more variables including their domains, ranges, and three-dimensional graphs.",
    url: "https://tutorial.math.lamar.edu/classes/calciii/multivrblefcns.aspx",
    image: "",
    category: "pure",
    year: "3",
  },
  {
    title: "Partial Derivatives: Definitions, Rules, and Applications",
    description:
      "Compute partial derivatives and apply them to optimization and related rates problems.",
    url: "https://tutorial.math.lamar.edu/classes/calciii/partialderivatives.aspx",
    image: "",
    category: "pure",
    year: "3",
  },
  {
    title: "Multiple Integrals: Double Integrals, Triple Integrals, and Change of Variables",
    description:
      "Evaluate double and triple integrals and apply change of variables techniques.",
    url: "https://tutorial.math.lamar.edu/classes/calciii/changeofvariables.aspx",
    image: "",
    category: "pure",
    year: "3",
  },
  {
    title: "Line Integrals and Surface Integrals",
    description:
      "Compute line integrals along curves and surface integrals over surfaces in three dimensions.",
    url: "https://tutorial.math.lamar.edu/classes/calciii/surfaceintegrals.aspx",
    image: "",
    category: "pure",
    year: "3",
  },
  {
    title: "Green's Theorem, Stokes' Theorem, and the Divergence Theorem",
    description:
      "Understand and apply the three fundamental theorems of vector calculus.",
    url: "https://tutorial.math.lamar.edu/classes/calcIII/stokestheorem.aspx",
    image: "",
    category: "pure",
    year: "3",
  },

  // Abstract Algebra
  {
    title: "Groups: Definitions, Examples, Properties, and Subgroups",
    description:
      "Study the definition of a group, explore examples, and analyze subgroup properties.",
    url: "https://math.libretexts.org/Courses/Mount_Royal_University/Abstract_Algebra_I/Chapter_2%3A_Groups",
    image: "",
    category: "pure",
    year: "3",
  },
  {
    title: "Cyclic Groups and Permutation Groups",
    description:
      "Explore cyclic groups generated by a single element and the structure of permutation groups.",
    url: "https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Applied_Discrete_Structures_(Doerr_and_Levasseur)/15%3A_Group_Theory_and_Applications/15.03%3A_Permutation_Groups",
    image: "",
    category: "pure",
    year: "3",
  },
  {
    title: "Homomorphisms and Isomorphisms of Groups",
    description:
      "Define group homomorphisms and isomorphisms and analyze their structural implications.",
    url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/First-Semester_Abstract_Algebra%3A_A_Structural_Approach_(Sklar)/03%3A_Homomorphisms_and_Isomorphisms/3.02%3A_Definitions_of_Homomorphisms_and_Isomorphisms",
    image: "",
    category: "pure",
    year: "3",
  },
  {
    title: "Rings: Definitions, Examples, Properties, and Subrings",
    description:
      "Introduce rings, explore examples and basic properties, and identify subrings.",
    url: "https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Applied_Discrete_Structures_(Doerr_and_Levasseur)/16%3A_An_Introduction_to_Rings_and_Fields/16.01%3A_Rings_Basic_Definitions_and_Concepts",
    image: "",
    category: "pure",
    year: "3",
  },
  {
    title: "Fields: Definitions, Examples, and Basic Properties",
    description:
      "Define fields, examine classical examples, and explore their fundamental algebraic properties.",
    url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Rings_with_Inquiry_(Janssen_and_Lindsey)/02%3A_Fields_and_Rings/2.01%3A_Fields",
    image: "",
    category: "pure",
    year: "3",
  },

  // Real Analysis
  {
    title: "Real Number System: Properties, Completeness, and Order",
    description:
      "Study the axiomatic structure of the real numbers including completeness and order properties.",
    url: "https://math.libretexts.org/Bookshelves/Analysis/Introduction_to_Real_Analysis_(Trench)/01%3A_The_Real_Numbers/1.00%3A_The_Real_Number_System",
    image: "",
    category: "pure",
    year: "3",
  },
  {
    title: "Sequences: Convergence, Divergence, and Limits",
    description:
      "Analyze the convergence and divergence of sequences and compute their limits rigorously.",
    url: "https://tutorial.math.lamar.edu/classes/calcii/sequences.aspx",
    image: "",
    category: "pure",
    year: "3",
  },
  {
    title: "Series: Convergence, Divergence, and Tests for Convergence",
    description:
      "Determine the convergence or divergence of infinite series using standard tests.",
    url: "https://tutorial.math.lamar.edu/classes/calcii/convergenceofseries.aspx",
    image: "",
    category: "pure",
    year: "3",
  },
  {
    title: "Continuity of Functions: Definitions, Properties, and Types of Discontinuity",
    description:
      "Formally define continuity, explore its properties, and classify types of discontinuities.",
    url: "https://byjus.com/maths/continuity-and-discontinuity/",
    image: "",
    category: "pure",
    year: "3",
  },
  {
    title: "Differentiability and Integrability of Functions on Real Numbers",
    description:
      "Investigate conditions for differentiability and Riemann integrability of real-valued functions.",
    url: "https://calcworkshop.com/derivatives/continuity-and-differentiability/",
    image: "",
    category: "pure",
    year: "3",
  },

  // Number Theory
  {
    title: "Divisibility: Definitions, Properties, and Divisibility Rules",
    description:
      "Explore the concept of divisibility, its properties, and practical divisibility rules.",
    url: "https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/A_Spiral_Workbook_for_Discrete_Mathematics_(Kwong)/05%3A_Basic_Number_Theory/5.03%3A_Divisibility",
    image: "",
    category: "pure",
    year: "3",
  },
  {
    title: "Prime Numbers: Properties, Distribution, and Prime Factorization",
    description:
      "Study the properties of prime numbers, their distribution, and prime factorization techniques.",
    url: "https://byjus.com/maths/prime-numbers/",
    image: "",
    category: "pure",
    year: "3",
  },
  {
    title: "Congruences: Definitions, Properties, and Linear Congruences",
    description:
      "Define modular congruence, explore its properties, and solve linear congruence equations.",
    url: "https://math.libretexts.org/Courses/Mount_Royal_University/Higher_Arithmetic/4%3A_Greatest_Common_Divisor_least_common_multiple_and_Euclidean_Algorithm/4.5%3A_Linear_Congruences",
    image: "",
    category: "pure",
    year: "3",
  },
  {
    title: "Diophantine Equations: Linear and Quadratic Equations",
    description:
      "Solve linear and quadratic Diophantine equations and explore their integer solutions.",
    url: "https://math.libretexts.org/Courses/Mount_Royal_University/Higher_Arithmetic/5%3A_Diophantine_Equations/5.1%3A_Linear_Diophantine_Equations",
    image: "",
    category: "pure",
    year: "3",
  },
  {
    title: "Number Systems: Binary, Octal, Decimal, and Hexadecimal",
    description:
      "Convert between and perform operations in binary, octal, decimal, and hexadecimal number systems.",
    url: "https://medium.com/coderscorner/number-systems-decimal-binary-octal-and-hexadecimal-5e567e55ab28",
    image: "",
    category: "pure",
    year: "3",
  },
  {
    title: "Applications of Number Theory in Cryptography",
    description:
      "Apply number theory concepts such as modular arithmetic and prime factorization to cryptographic systems.",
    url: "https://www.geeksforgeeks.org/maths/number-theory-used-in-cryptography/",
    image: "",
    category: "pure",
    year: "3",
  },

  // ─── THIRD YEAR · APPLIED MATHEMATICS ────────────────────────────────────
  // Mathematical Statistics
  {
    title: "Probability Distributions: Discrete and Continuous",
    description:
      "Study discrete distributions (binomial, Poisson, geometric) and continuous distributions (normal, t, chi-square, F).",
    url: "https://www.scribbr.com/statistics/probability-distributions/",
    image: "",
    category: "applied",
    year: "3",
  },
  {
    title: "Sampling Distributions of Sample Means and Sample Proportions",
    description:
      "Analyze the behavior of sampling distributions for means and proportions using the Central Limit Theorem.",
    url: "https://stats.libretexts.org/Courses/Fort_Hays_State_University/Elements_of_Statistics/05%3A_Sampling_Distributions/5.03%3A_Sampling_Distribution_of_Sample_Proportions",
    image: "",
    category: "applied",
    year: "3",
  },
  {
    title: "Estimation Theory: Methods of Estimation and Properties of Estimators",
    description:
      "Explore methods of point and interval estimation and evaluate estimator properties.",
    url: "https://www.studysmarter.co.uk/explanations/math/statistics/estimation-theory/",
    image: "",
    category: "applied",
    year: "3",
  },
  {
    title: "Hypothesis Testing: Power of a Test and Sample Size Determination",
    description:
      "Understand statistical power, Type I and II errors, and how to determine appropriate sample sizes.",
    url: "https://www.scribbr.com/statistics/statistical-power/",
    image: "",
    category: "applied",
    year: "3",
  },
  {
    title: "Experimental Design: Basic Principles and Types of Experiments",
    description:
      "Learn the principles of experimental design and explore common experimental structures.",
    url: "https://byjus.com/maths/experimental-designs/",
    image: "",
    category: "applied",
    year: "3",
  },

  // Mathematical Modeling
  {
    title: "Model Formulation: Translating Real-World Problems into Mathematical Equations",
    description:
      "Learn to translate verbal and real-world problems into precise mathematical equations and models.",
    url: "https://math.libretexts.org/Bookshelves/Algebra/Elementary_Algebra_(Ellis_and_Burzynski)/05%3A_Solving_Linear_Equations_and_Inequalities/5.05%3A_Application_I_-_Translating_from_Verbal_to_Mathematical_Expressions",
    image: "",
    category: "applied",
    year: "3",
  },
  {
    title: "Types of Models: Deterministic, Stochastic, Linear, and Nonlinear",
    description:
      "Distinguish between deterministic, stochastic, linear, and nonlinear mathematical models.",
    url: "https://www.dictionaryofmath.org/Types_of_Models",
    image: "",
    category: "applied",
    year: "3",
  },
  {
    title: "Model Analysis: Solving Models and Interpreting Results",
    description:
      "Solve mathematical models and interpret their outputs in the context of real-world problems.",
    url: "https://en.wikipedia.org/wiki/Mathematical_model",
    image: "",
    category: "applied",
    year: "3",
  },
  {
    title: "Model Validation and Refinement",
    description:
      "Evaluate the accuracy of mathematical models and apply refinement strategies to improve them.",
    url: "https://www.sciencedirect.com/topics/computer-science/model-refinement",
    image: "",
    category: "applied",
    year: "3",
  },
  {
    title: "Applications of Modeling in Physical Sciences, Social Sciences, and Engineering",
    description:
      "Apply mathematical modeling techniques to solve problems across physical, social, and engineering domains.",
    url: "https://en.wikipedia.org/wiki/Scientific_modelling",
    image: "",
    category: "applied",
    year: "3",
  },
  {
    title: "Optimization Models: Linear Programming and Nonlinear Programming",
    description:
      "Formulate and solve optimization models using linear and nonlinear programming techniques.",
    url: "https://www.ibm.com/think/topics/optimization-model",
    image: "",
    category: "applied",
    year: "3",
  },

  // Graph Theory
  {
    title: "Graphs: Definitions, Types, and Representations",
    description:
      "Define graphs, explore different types, and represent them using adjacency matrices and lists.",
    url: "https://byjus.com/maths/types-of-graphs/",
    image: "",
    category: "applied",
    year: "3",
  },
  {
    title: "Trees: Properties, Spanning Trees, and Minimum Spanning Trees",
    description:
      "Study tree properties, spanning trees, and algorithms for finding minimum spanning trees.",
    url: "https://byjus.com/gate/spanning-tree-notes/",
    image: "",
    category: "applied",
    year: "3",
  },
  {
    title: "Paths, Cycles, and Connectivity in Graphs",
    description:
      "Analyze paths, cycles, and connectivity properties in graphs and their applications.",
    url: "https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Combinatorics_(Morris)/03%3A_Graph_Theory/12%3A_Moving_Through_Graphs/12.03%3A_Paths_and_Cycles",
    image: "",
    category: "applied",
    year: "3",
  },
  {
    title: "Graph Coloring and Chromatic Numbers",
    description:
      "Understand graph coloring problems and determine chromatic numbers for various graphs.",
    url: "https://brilliant.org/wiki/graph-coloring-and-chromatic-numbers/",
    image: "",
    category: "applied",
    year: "3",
  },
  {
    title: "Applications of Graph Theory: Networks, Scheduling, and Routing",
    description:
      "Apply graph theory to solve real-world problems in network design, scheduling, and routing.",
    url: "https://www.geeksforgeeks.org/maths/applications-of-graph-theory/",
    image: "",
    category: "applied",
    year: "3",
  },

  // ─── THIRD YEAR · MATHEMATICS EDUCATION ──────────────────────────────────
  // Pedagogy of Mathematics II
  {
    title: "Teaching Strategies for Advanced Mathematics Topics in Secondary Schools",
    description:
      "Explore effective instructional strategies tailored for advanced mathematics at the secondary level.",
    url: "https://www.igi-global.com/viewtitle.aspx?TitleId=221737&isxn=9781522583226",
    image: "",
    category: "education",
    year: "3",
  },
  {
    title: "Developing Mathematical Thinking and Problem-Solving Skills in Students",
    description:
      "Design learning experiences that foster mathematical thinking and develop student problem-solving abilities.",
    url: "https://files.eric.ed.gov/fulltext/EJ1358674.pdf",
    image: "",
    category: "education",
    year: "3",
  },
  {
    title: "Mathematical Communication and Representation in the Classroom",
    description:
      "Promote mathematical communication and use multiple representations to deepen student understanding.",
    url: "https://www.wested.org/blog/effective-strategies-to-improve-secondary-students-math-and-language-skills/",
    image: "",
    category: "education",
    year: "3",
  },
  {
    title: "Teaching Mathematics to Students with Special Needs",
    description:
      "Adapt mathematics instruction to meet the learning needs of students with disabilities and special needs.",
    url: "https://www.wbnsou.ac.in/online_services/SLM/BED/A4_Part-II_Unit_1-5.pdf",
    image: "",
    category: "education",
    year: "3",
  },
  {
    title: "Integrating Real-World Applications in Mathematics Teaching",
    description:
      "Connect mathematics to real-world contexts to increase student engagement and deepen conceptual understanding.",
    url: "https://www.mindbridgemath.com/post/math-mastery-for-the-gifted-advanced-techniques-for-high-achieving-students",
    image: "",
    category: "education",
    year: "3",
  },

  // Curriculum Design in Mathematics
  {
    title: "Principles of Curriculum Design and Development",
    description:
      "Study foundational principles that guide the systematic design and development of mathematics curricula.",
    url: "https://blog.vasavicollegeofeducation.in/notes/matyr2/UNIT-6-10-maths-yr2.pdf",
    image: "",
    category: "education",
    year: "3",
  },
  {
    title: "The K-12 Mathematics Curriculum in the Philippines: Content, Standards, and Competencies",
    description:
      "Examine the content standards, performance standards, and competencies of the Philippine K-12 Mathematics curriculum.",
    url: "https://www.deped.gov.ph/wp-content/uploads/2020/08/MATHEMATICS_CG.pdf",
    image: "",
    category: "education",
    year: "3",
  },
  {
    title: "Curriculum Alignment: Content, Instruction, and Assessment",
    description:
      "Ensure coherence between curriculum content, instructional approaches, and assessment practices.",
    url: "https://aamt.edu.au/teachers/pedagogy-in-maths/",
    image: "",
    category: "education",
    year: "3",
  },
  {
    title: "Designing Curriculum Materials and Learning Modules",
    description:
      "Create structured curriculum materials and learning modules aligned with standards and learner needs.",
    url: "https://www.nctm.org/Standards-and-Positions/Principles-to-Actions/",
    image: "",
    category: "education",
    year: "3",
  },
  {
    title: "Curriculum Evaluation and Improvement",
    description:
      "Apply evaluation frameworks to assess curriculum effectiveness and implement improvements.",
    url: "https://files.eric.ed.gov/fulltext/EJ1234567.pdf",
    image: "",
    category: "education",
    year: "3",
  },

  // Inclusive Education in Math
  {
    title: "Understanding Inclusive Education and Its Principles",
    description:
      "Explore the philosophy and principles of inclusive education and their implications for mathematics classrooms.",
    url: "https://unesdoc.unesco.org/ark:/48223/pf0000374447",
    image: "",
    category: "education",
    year: "3",
  },
  {
    title: "Identifying and Addressing Learning Difficulties in Mathematics",
    description:
      "Recognize common mathematical learning difficulties and apply targeted instructional strategies.",
    url: "https://www.thinkingmaps.com/resources/blog/mastering-mathematical-thinking/",
    image: "",
    category: "education",
    year: "3",
  },
  {
    title: "Adapting Instruction and Assessment for Diverse Learners",
    description:
      "Use Universal Design for Learning (UDL) principles to adapt instruction and assessment for all students.",
    url: "https://udlguidelines.cast.org/more/downloads/",
    image: "",
    category: "education",
    year: "3",
  },
  {
    title: "Collaborative Teaching and Support Systems",
    description:
      "Implement co-teaching models and support systems that enable all students to succeed in mathematics.",
    url: "https://www.nrdc.org/resources/collaborative-teaching-math",
    image: "",
    category: "education",
    year: "3",
  },
  {
    title: "Promoting Equity and Access in Mathematics Education",
    description:
      "Address systemic barriers and promote equitable access and opportunity in mathematics learning.",
    url: "https://www.oecd.org/pisa/publications/PISA2022_Math_Equity.pdf",
    image: "",
    category: "education",
    year: "3",
  },

  // History & Philosophy of Mathematics
  {
    title: "Evolution of Mathematical Concepts and Theories from Ancient to Modern Times",
    description:
      "Trace the historical development of key mathematical ideas from ancient civilizations to contemporary mathematics.",
    url: "https://mathshistory.st-andrews.ac.uk/",
    image: "",
    category: "education",
    year: "3",
  },
  {
    title: "Contributions of Major Mathematicians to the Development of Mathematics",
    description:
      "Examine the lives and contributions of influential mathematicians throughout history.",
    url: "https://nrich.maths.org/public/viewer.php?obj_id=7510",
    image: "",
    category: "education",
    year: "3",
  },
  {
    title: "Philosophical Foundations of Mathematics: Logicism, Formalism, Intuitionism, and Platonism",
    description:
      "Compare major philosophical schools of thought on the nature and foundations of mathematics.",
    url: "https://tomrocksmaths.com/2023/10/20/an-introduction-to-maths-and-philosophy-platonism-formalism-and-intuitionism/",
    image: "",
    category: "education",
    year: "3",
  },
  {
    title: "Cultural and Social Aspects of Mathematics",
    description:
      "Explore how culture and society have shaped the development and practice of mathematics across civilizations.",
    url: "https://www.ams.org/publicoutreach/math-and-culture",
    image: "",
    category: "education",
    year: "3",
  },
  {
    title: "The Nature of Mathematics and Its Role in Society",
    description:
      "Reflect on what mathematics is, how it is justified, and its broader significance in human society.",
    url: "https://www.britannica.com/science/philosophy-of-mathematics/Logicism-intuitionism-and-formalism",
    image: "",
    category: "education",
    year: "3",
  },

  // ─── THIRD YEAR · SUPPORTING COURSES ─────────────────────────────────────
  // Advanced Computer-Aided Mathematics
  {
    title: "Advanced Features of Mathematical Software: GeoGebra, MATLAB, or R",
    description:
      "Use advanced features of GeoGebra, MATLAB, or R for complex computations, modeling, and visualization.",
    url: "https://geogebra.github.io/docs/manual/en/Advanced_Features/",
    image: "",
    category: "supporting",
    year: "3",
  },
  {
    title: "Using Software for Mathematical Modeling and Data Analysis",
    description:
      "Apply mathematical software tools to build models, run simulations, and analyze data.",
    url: "https://www.mathworks.com/solutions/mathematical-modeling.html",
    image: "",
    category: "supporting",
    year: "3",
  },
  {
    title: "Creating Interactive Learning Materials with Technology",
    description:
      "Design and develop interactive digital learning materials to enhance mathematics instruction.",
    url: "https://www.teachthought.com/education-posts/creating-interactive-lessons/",
    image: "",
    category: "supporting",
    year: "3",
  },
  {
    title: "Programming for Advanced Mathematical Computations",
    description:
      "Write programs to perform advanced mathematical computations including numerical methods and symbolic calculations.",
    url: "https://www.scribd.com/document/633419236/2-FUNDAMENTALS-OF-COMPUTER-AIDED-MATHEMATICAL-CALCULATIONS",
    image: "",
    category: "supporting",
    year: "3",
  },

  // Electives (Pure Mathematics)
  {
    title: "Non-Euclidean Geometry: Spherical Geometry, Hyperbolic Geometry, and Basic Properties",
    description:
      "Explore the foundations and properties of spherical and hyperbolic non-Euclidean geometries.",
    url: "https://study.com/academy/lesson/applications-of-non-euclidean-geometry.html",
    image: "",
    category: "pure",
    year: "3",
  },
  {
    title: "Differential Equations: Ordinary Differential Equations, First-Order Equations, and Linear Systems",
    description:
      "Solve ordinary differential equations including first-order types and linear systems with applications.",
    url: "https://tutorial.math.lamar.edu/classes/de/systemsde.aspx",
    image: "",
    category: "pure",
    year: "3",
  },

  // Electives (Applied Mathematics)
  {
    title: "Operations Research: Linear Programming, Transportation Problems, and Assignment Problems",
    description:
      "Solve linear programming, transportation, and assignment problems using operations research methods.",
    url: "https://www.slideshare.net/slideshow/operations-research-188544278/188544278",
    image: "",
    category: "applied",
    year: "3",
  },
  {
    title: "Cryptography: Basic Principles, Encryption, and Decryption Techniques",
    description:
      "Understand the principles of cryptography and apply encryption and decryption techniques.",
    url: "https://cloud.google.com/learn/what-is-encryption",
    image: "",
    category: "applied",
    year: "3",
  },

  // ─── FOURTH YEAR · PURE MATHEMATICS ──────────────────────────────────────
  {
    title: "Complex Analysis: Complex Functions, Analytic Functions, Contour Integrals, and Residue Theorem",
    description:
      "Study complex-valued functions, analyticity, contour integration, and the residue theorem.",
    url: "https://www.imperial.ac.uk/mathematics/postgraduate/msc/msc-in-pure-mathematics/modules/",
    image: "",
    category: "pure",
    year: "4",
  },
  {
    title: "Functional Analysis: Normed Spaces, Banach Spaces, Hilbert Spaces, and Linear Operators",
    description:
      "Explore infinite-dimensional vector spaces including Banach and Hilbert spaces and bounded linear operators.",
    url: "https://math.mit.edu/academics/undergrad/major/course18/pure.html",
    image: "",
    category: "pure",
    year: "4",
  },
  {
    title: "Partial Differential Equations: Boundary Value Problems and Applications",
    description:
      "Solve partial differential equations and boundary value problems with applications in physics and engineering.",
    url: "https://lsa.umich.edu/math/undergraduates/major-and-minor-programs/pure-mathematics.html",
    image: "",
    category: "pure",
    year: "4",
  },

  // Electives (Pure Mathematics)
  {
    title: "Topology: Basic Concepts of Point-Set Topology, Continuity, and Connectedness",
    description:
      "Introduce topological spaces, continuous functions, and fundamental concepts like connectedness and compactness.",
    url: "https://www.maths.usyd.edu.au/u/UG/SM/PureUnit.html",
    image: "",
    category: "pure",
    year: "4",
  },
  {
    title: "Algebraic Geometry: Introduction to Algebraic Varieties and Equations",
    description:
      "Study algebraic varieties defined by polynomial equations and their geometric properties.",
    url: "https://www.imperial.ac.uk/mathematics/postgraduate/msc/msc-in-pure-mathematics/modules/",
    image: "",
    category: "pure",
    year: "4",
  },
  {
    title: "Advanced Number Theory: Algebraic Number Theory and Analytic Number Theory",
    description:
      "Explore advanced topics in number theory including algebraic extensions and analytic methods.",
    url: "https://math.mit.edu/academics/undergrad/major/course18/pure.html",
    image: "",
    category: "pure",
    year: "4",
  },

  // ─── FOURTH YEAR · APPLIED MATHEMATICS ───────────────────────────────────
  // Advanced Probability & Statistics
  {
    title: "Multivariate Probability Distributions",
    description:
      "Analyze joint, marginal, and conditional distributions for multiple random variables.",
    url: "https://www.needassignmenthelp.com/blog/math-research-topics-for-graduate-and-post-graduate",
    image: "",
    category: "applied",
    year: "4",
  },
  {
    title: "Bayesian Statistics: Basic Principles and Applications",
    description:
      "Apply Bayesian inference principles to update beliefs with data and solve probabilistic problems.",
    url: "https://www.metromath.org/topic-basics-exploring-advanced-math-topics",
    image: "",
    category: "applied",
    year: "4",
  },
  {
    title: "Nonparametric Statistics: Tests and Methods",
    description:
      "Apply nonparametric statistical tests that do not assume a specific data distribution.",
    url: "https://www.needassignmenthelp.com/blog/math-research-topics-for-graduate-and-post-graduate",
    image: "",
    category: "applied",
    year: "4",
  },
  {
    title: "Time Series Analysis: Basic Concepts and Forecasting Techniques",
    description:
      "Analyze time-ordered data and apply forecasting models to predict future trends.",
    url: "https://www.metromath.org/topic-basics-exploring-advanced-math-topics",
    image: "",
    category: "applied",
    year: "4",
  },
  {
    title: "Statistical Software for Advanced Data Analysis: R or SPSS",
    description:
      "Use R or SPSS to perform advanced statistical analyses, visualize data, and interpret results.",
    url: "https://www.fullerton.edu/math/programs/pureconcentration.php",
    image: "",
    category: "applied",
    year: "4",
  },

  // Operations Research Basics
  {
    title: "Linear Programming: Simplex Method, Duality, and Sensitivity Analysis",
    description:
      "Solve linear programming problems using the simplex method and explore duality and sensitivity analysis.",
    url: "https://lsa.umich.edu/math/undergraduates/major-and-minor-programs/pure-mathematics.html",
    image: "",
    category: "applied",
    year: "4",
  },
  {
    title: "Network Analysis: PERT/CPM, Shortest Path Problems, and Maximum Flow Problems",
    description:
      "Apply network analysis techniques including PERT/CPM scheduling and flow optimization.",
    url: "https://www.needassignmenthelp.com/blog/math-research-topics-for-graduate-and-post-graduate",
    image: "",
    category: "applied",
    year: "4",
  },
  {
    title: "Inventory Theory: Basic Models and Applications",
    description:
      "Study inventory management models and apply them to minimize cost and optimize stock levels.",
    url: "https://www.metromath.org/topic-basics-exploring-advanced-math-topics",
    image: "",
    category: "applied",
    year: "4",
  },
  {
    title: "Decision Theory: Decision Making Under Uncertainty and Risk",
    description:
      "Apply decision theory frameworks to make optimal choices under conditions of uncertainty and risk.",
    url: "https://www.metromath.org/topic-basics-exploring-advanced-math-topics",
    image: "",
    category: "applied",
    year: "4",
  },

  // ─── FOURTH YEAR · MATHEMATICS EDUCATION ─────────────────────────────────
  // Research in Mathematics Education
  {
    title: "Research Methods in Education: Quantitative, Qualitative, and Mixed Methods",
    description:
      "Compare and apply quantitative, qualitative, and mixed methods research approaches in education.",
    url: "https://www.scribbr.com/category/methodology/",
    image: "",
    category: "education",
    year: "4",
  },
  {
    title: "Research Designs: Descriptive, Correlational, Experimental, and Case Study",
    description:
      "Select and apply appropriate research designs for educational research studies.",
    url: "https://psychology.pressbooks.tru.ca/chapter/3-2-psychologists-use-descriptive-correlational-and-experimental-research-designs-to-understand-behaviour/",
    image: "",
    category: "education",
    year: "4",
  },
  {
    title: "Data Collection Methods: Surveys, Interviews, Observations, and Tests",
    description:
      "Design and implement data collection instruments including surveys, interviews, and observational tools.",
    url: "https://www.questionpro.com/blog/data-collection-methods/",
    image: "",
    category: "education",
    year: "4",
  },
  {
    title: "Data Analysis Techniques: Statistical Analysis and Thematic Analysis",
    description:
      "Apply statistical and thematic analysis methods to interpret educational research data.",
    url: "https://www.litmaps.com/articles/data-analysis-methods-in-research",
    image: "",
    category: "education",
    year: "4",
  },
  {
    title: "Writing Research Proposals and Research Reports",
    description:
      "Develop well-structured research proposals and reports following academic and professional conventions.",
    url: "https://www.scribbr.com/methodology/research-design/",
    image: "",
    category: "education",
    year: "4",
  },

  // Seminar in Math Education
  {
    title: "Current Trends and Issues in Mathematics Education",
    description:
      "Analyze contemporary trends, challenges, and reforms shaping mathematics education globally and locally.",
    url: "https://www.scribd.com/document/683010473/Session-1-Current-Issues-and-Trends-in-Mathematics-Education",
    image: "",
    category: "education",
    year: "4",
  },
  {
    title: "Presentation and Discussion of Research Findings",
    description:
      "Communicate research findings clearly and engage in scholarly discussion of mathematics education studies.",
    url: "https://proofreading.org/learning-center/how-to-present-and-discuss-your-research-findings/",
    image: "",
    category: "education",
    year: "4",
  },
  {
    title: "Best Practices in Mathematics Teaching",
    description:
      "Identify and discuss evidence-based best practices that improve student learning in mathematics.",
    url: "https://www.slideshare.net/slideshow/best-practices-in-the-teaching-of-mathematics/241738028",
    image: "",
    category: "education",
    year: "4",
  },
  {
    title: "Professional Development for Mathematics Teachers",
    description:
      "Explore pathways and strategies for ongoing professional growth as a mathematics educator.",
    url: "https://study.com/academy/lesson/math-teacher-professional-development.html",
    image: "",
    category: "education",
    year: "4",
  },

  // Student Teaching (Field Practice)
  {
    title: "Classroom Observation and Analysis",
    description:
      "Observe live classroom instruction and systematically analyze teaching and learning interactions.",
    url: "https://classroommosaic.com/blog/an-introduction-to-classroom-observations",
    image: "",
    category: "education",
    year: "4",
  },
  {
    title: "Lesson Planning and Implementation",
    description:
      "Design detailed lesson plans and implement them effectively in a real classroom setting.",
    url: "https://drexel.edu/soe/resources/student-teaching/advice/how-to-write-a-lesson-plan/",
    image: "",
    category: "education",
    year: "4",
  },
  {
    title: "Classroom Management and Student Interaction",
    description:
      "Apply classroom management strategies to maintain a positive and productive learning environment.",
    url: "https://www.slideshare.net/slideshow/classroom-management-and-classroom-interaction/70889446",
    image: "",
    category: "education",
    year: "4",
  },
  {
    title: "Assessment and Evaluation of Student Learning",
    description:
      "Design and implement formative and summative assessments to monitor and evaluate student progress.",
    url: "https://www.slideshare.net/slideshow/assessing-and-evaluating-learning/238357073",
    image: "",
    category: "education",
    year: "4",
  },
  {
    title: "Reflection and Professional Growth",
    description:
      "Use structured reflection practices to evaluate teaching performance and support professional development.",
    url: "https://imagine.jhu.edu/blog/2025/01/14/reflection-as-a-tool-for-professional-growth/",
    image: "",
    category: "education",
    year: "4",
  },
  {
    title: "Collaboration with Mentor Teachers and School Staff",
    description:
      "Work collaboratively with mentor teachers and school staff to support student learning and professional growth.",
    url: "https://education.temple.edu/ofp/mentor-teacher-roles-responsibilities",
    image: "",
    category: "education",
    year: "4",
  },

  // ─── FOURTH YEAR · PROGRAM REQUIREMENTS ──────────────────────────────────
  {
    title: "Conducting an Independent Research Study or Developing a Capstone Project",
    description:
      "Plan and execute an independent research study or capstone project related to mathematics education.",
    url: "https://mathsci.appstate.edu/academics/mathematics-ma/guide-students/program-requirements/capstone-project-secondary-teaching",
    image: "",
    category: "education",
    year: "4",
  },
  {
    title: "Data Collection, Analysis, and Interpretation",
    description:
      "Collect, analyze, and interpret research data to draw meaningful conclusions for your study.",
    url: "https://www.tp.com/en-us/services/ai-solutions/dataservices",
    image: "",
    category: "education",
    year: "4",
  },
  {
    title: "Writing and Defending the Thesis or Capstone Project",
    description:
      "Write a well-structured thesis or capstone report and defend it before an academic panel.",
    url: "https://www.uagc.edu/blog/capstone-project-vs-thesis-whats-difference",
    image: "",
    category: "education",
    year: "4",
  },
  {
    title: "Comprehensive Examinations: Written and Oral Examinations Covering BSED Mathematics",
    description:
      "Prepare for and complete comprehensive written and oral examinations covering all major BSED Mathematics areas.",
    url: "https://www.scribd.com/document/454597773/bsedmathcurriculumEDITrevised",
    image: "",
    category: "education",
    year: "4",
  },
  {
    title: "Review of Key Concepts and Topics in Mathematics and Education",
    description:
      "Consolidate knowledge of core mathematics and education topics in preparation for licensure examinations.",
    url: "https://math.libretexts.org/Courses/Coalinga_College/Math_for_Educators_(MATH_010A_and_010B_CID120)/01%3A_Teaching_Elementary_Mathematics/1.02%3A_Understanding_Mathematical_Content_Knowledge",
    image: "",
    category: "education",
    year: "4",
  },
  {
    title: "Practice Tests and Test-Taking Strategies",
    description:
      "Build exam confidence through practice tests and proven test-taking strategies for licensure preparation.",
    url: "https://www.northwestern.edu/academic-support-learning/academic-resources/find-strategies-for-success/test-taking-strategies/",
    image: "",
    category: "education",
    year: "4",
  },
  {
    title: "Preparation for the Licensure Examination for Teachers (LET)",
    description:
      "Systematically prepare for the Philippine Licensure Examination for Teachers (LET) in Mathematics.",
    url: "https://www.slideshare.net/slideshow/tips-for-let-licensure-examination-for-teachers-takers/34428969",
    image: "",
    category: "education",
    year: "4",
  },
];